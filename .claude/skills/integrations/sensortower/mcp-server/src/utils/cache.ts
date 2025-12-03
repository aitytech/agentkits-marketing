import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import * as os from "os";

export interface CacheConfig {
  enabled: boolean;
  ttlSeconds: number;  // Time-to-live in seconds
  cacheDir: string;    // Directory to store cache files
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export class CacheManager {
  private config: CacheConfig;

  constructor(config?: Partial<CacheConfig>) {
    // Default config - can be overridden by env vars
    // Use system temp dir by default for better compatibility
    const defaultCacheDir = path.join(os.tmpdir(), "sensortower-cache");

    this.config = {
      enabled: process.env.SENSORTOWER_CACHE_ENABLED === "true", // Default OFF for safety
      ttlSeconds: parseInt(process.env.SENSORTOWER_CACHE_TTL || "3600", 10), // Default 1 hour
      cacheDir: process.env.SENSORTOWER_CACHE_DIR || defaultCacheDir,
      ...config,
    };

    // Create cache directory if enabled
    if (this.config.enabled) {
      this.ensureCacheDir();
    }
  }

  private ensureCacheDir(): void {
    try {
      if (!fs.existsSync(this.config.cacheDir)) {
        fs.mkdirSync(this.config.cacheDir, { recursive: true });
      }
    } catch (error) {
      // If cache directory creation fails, disable caching and log warning
      console.error("Warning: Failed to create cache directory, disabling cache:", error);
      this.config.enabled = false;
    }
  }

  private getCacheKey(endpoint: string, params: Record<string, any>): string {
    const normalized = JSON.stringify({ endpoint, params: this.sortObject(params) });
    return crypto.createHash("md5").update(normalized).digest("hex");
  }

  private sortObject(obj: Record<string, any>): Record<string, any> {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {} as Record<string, any>);
  }

  private getCachePath(key: string): string {
    return path.join(this.config.cacheDir, `${key}.json`);
  }

  get<T>(endpoint: string, params: Record<string, any>): T | null {
    if (!this.config.enabled) return null;

    const key = this.getCacheKey(endpoint, params);
    const cachePath = this.getCachePath(key);

    try {
      if (!fs.existsSync(cachePath)) return null;

      const content = fs.readFileSync(cachePath, "utf-8");
      const entry: CacheEntry<T> = JSON.parse(content);

      // Check if expired
      const now = Date.now();
      const expiresAt = entry.timestamp + entry.ttl * 1000;

      if (now > expiresAt) {
        // Cache expired, delete file
        fs.unlinkSync(cachePath);
        return null;
      }

      return entry.data;
    } catch {
      return null;
    }
  }

  set<T>(endpoint: string, params: Record<string, any>, data: T, ttlOverride?: number): void {
    if (!this.config.enabled) return;

    const key = this.getCacheKey(endpoint, params);
    const cachePath = this.getCachePath(key);

    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttlOverride ?? this.config.ttlSeconds,
    };

    try {
      fs.writeFileSync(cachePath, JSON.stringify(entry, null, 2));
    } catch (error) {
      // Silent fail - cache is optional
      console.error("Cache write error:", error);
    }
  }

  invalidate(endpoint: string, params: Record<string, any>): void {
    if (!this.config.enabled) return;

    const key = this.getCacheKey(endpoint, params);
    const cachePath = this.getCachePath(key);

    try {
      if (fs.existsSync(cachePath)) {
        fs.unlinkSync(cachePath);
      }
    } catch {
      // Silent fail
    }
  }

  clear(): void {
    if (!fs.existsSync(this.config.cacheDir)) return;

    try {
      const files = fs.readdirSync(this.config.cacheDir);
      for (const file of files) {
        if (file.endsWith(".json")) {
          fs.unlinkSync(path.join(this.config.cacheDir, file));
        }
      }
    } catch {
      // Silent fail
    }
  }

  getStats(): { enabled: boolean; ttl: number; cacheDir: string; fileCount: number; totalSize: number } {
    let fileCount = 0;
    let totalSize = 0;

    if (this.config.enabled && fs.existsSync(this.config.cacheDir)) {
      try {
        const files = fs.readdirSync(this.config.cacheDir);
        for (const file of files) {
          if (file.endsWith(".json")) {
            fileCount++;
            const stats = fs.statSync(path.join(this.config.cacheDir, file));
            totalSize += stats.size;
          }
        }
      } catch {
        // Silent fail
      }
    }

    return {
      enabled: this.config.enabled,
      ttl: this.config.ttlSeconds,
      cacheDir: this.config.cacheDir,
      fileCount,
      totalSize,
    };
  }

  isEnabled(): boolean {
    return this.config.enabled;
  }

  setEnabled(enabled: boolean): void {
    this.config.enabled = enabled;
    if (enabled) {
      this.ensureCacheDir();
    }
  }
}

// Singleton instance
export const cache = new CacheManager();
