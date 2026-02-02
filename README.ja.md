<p align="center">
  <img src="https://raw.githubusercontent.com/aitytech/agentkits-marketing/main/assets/logo.svg" alt="AgentKits Logo" width="80" height="80">
</p>

<h1 align="center">AgentKits Marketing</h1>

<p align="center">
  <a href="https://github.com/aitytech/agentkits-marketing/stargazers"><img src="https://img.shields.io/github/stars/aitytech/agentkits-marketing?style=flat" alt="Stars"></a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Claude_Code%20|%20Cursor%20|%20Copilot-Compatible-blueviolet" alt="AI Assistants">
  <br>
  <img src="https://img.shields.io/badge/Agents-18-green" alt="Agents">
  <img src="https://img.shields.io/badge/Commands-93-orange" alt="Commands">
  <img src="https://img.shields.io/badge/Skills-28-blue" alt="Skills">
</p>

<p align="center">
  <strong>Claude Code、Cursor、GitHub Copilot、およびagents & skillsをサポートするあらゆるAIアシスタント向けのエンタープライズグレードAIマーケティング自動化。</strong>
</p>

<p align="center">
  SaaSファウンダー、マーケター、グロースチーム向けの本番環境対応マーケティングagents、skills、commands、workflows。キャンペーン計画、コンテンツ作成、SEO、CRO、メールシーケンス、アナリティクス - すべて専門AIエージェントが駆動。
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">ウェブサイト</a> •
  <a href="https://www.agentkits.net/docs">ドキュメント</a> •
  <a href="#インストール">インストール</a> •
  <a href="#トレーニング">トレーニング</a>
</p>

<p align="center">
  <a href="README.md">English</a> | <a href="README.vi.md">Tiếng Việt</a> | <strong>日本語</strong>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *開発者コミュニティの「Vibe Coding」ムーブメントに触発されて... 宇宙を拡張します：AIですべてがうまくいく時代の**Vibe Marketing**。*

| | |
|---|---|
| **AIあり** | AIエージェントにキャンペーンを任せて、あなたは戦略に集中。リラックスして、エージェントに重い仕事をさせましょう。 |
| **AIなし** | このリポジトリはマーケティングのベストプラクティス、フレームワーク、テンプレートの**包括的なリファレンスライブラリ**です。skillsドキュメントをマーケティングプレイブックとして活用できます。 |

---

## 内容

**Claude Code**、**Cursor**、**GitHub Copilot**、およびagents & skillsをサポートするあらゆるAIアシスタントで動作。プラグインとしてインストールするか、コンポーネントを手動でコピー。

```
agentkits-marketing/
|-- .claude-plugin/      # プラグインとマーケットプレイスマニフェスト
|   |-- plugin.json            # プラグインメタデータとコンポーネントパス
|   |-- marketplace.json       # /plugin marketplace add用マーケットプレイスカタログ
|
|-- .claude/
|   |-- agents/          # 18の専門マーケティングエージェント
|   |   |-- attraction-specialist.md    # リード獲得、SEO、ランディングページ
|   |   |-- lead-qualifier.md           # リードスコアリング、セグメンテーション
|   |   |-- email-wizard.md             # メールシーケンス、自動化
|   |   |-- sales-enabler.md            # 営業資料、バトルカード
|   |   |-- continuity-specialist.md    # リテンション、再エンゲージメント
|   |   |-- upsell-maximizer.md         # 収益拡大
|   |   |-- copywriter.md               # 高コンバージョンコピー
|   |   |-- conversion-optimizer.md     # CROスペシャリスト
|   |   |-- seo-specialist.md           # SEO最適化
|   |   |-- brand-voice-guardian.md     # ブランド一貫性
|   |   |-- ...その他
|   |
|   |-- commands/        # カテゴリ別93のスラッシュコマンド
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...その他
|   |
|   |-- skills/          # 28のマーケティングスキル
|   |   |-- marketing-psychology/       # 70以上のメンタルモデル
|   |   |-- marketing-ideas/            # 140以上のSaaS戦略
|   |   |-- page-cro/                   # ランディングページ最適化
|   |   |-- copywriting/                # マーケティングコピー
|   |   |-- programmatic-seo/           # 大規模ページ生成
|   |   |-- pricing-strategy/           # 価格設定とパッケージング
|   |   |-- ...その他
|   |
|   |-- workflows/       # コアマーケティングワークフロー
|       |-- primary-workflow.md         # キャンペーンライフサイクル
|       |-- sales-workflow.md           # リードから顧客へ
|       |-- crm-workflow.md             # コンタクトライフサイクル
|
|-- training/            # 23のインタラクティブトレーニングレッスン（English）
|-- training-vi/         # ベトナム語トレーニング（Tiếng Việt）
|-- training-ja/         # 日本語トレーニング
|-- docs/                # ドキュメントとガイド
|-- marketplace.json     # セルフホストマーケットプレイス設定
```

---

## インストール

### オプション1: npxでインストール（推奨）

1つのコマンドで18エージェント、28スキル、93コマンドをインストール:

```bash
npx @aitytech/agentkits-marketing install
```

**プラットフォーム別インストール:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # 全プラットフォーム
```

**その他のCLIコマンド:**

```bash
npx @aitytech/agentkits-marketing --help        # 全コマンドを表示
npx @aitytech/agentkits-marketing list-ides     # サポートIDEを一覧
npx @aitytech/agentkits-marketing list-modules  # 利用可能なモジュールを一覧
npx @aitytech/agentkits-marketing update        # 既存インストールを更新
```

---

### オプション2: クローンして使用

リポジトリをクローンしてその中で作業:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### オプション3: プラグインとしてインストール（近日公開）

> **注意:** プラグインマーケットプレイスの承認待ちです。

承認後、Claude Codeのプラグインシステムから直接インストール:

```bash
# このリポジトリをマーケットプレイスとして追加
/plugin marketplace add aitytech/agentkits-marketing

# プラグインをインストール
/plugin install agentkits-marketing@agentkits-marketing
```

---

### オプション4: 手動インストール

個々のコンポーネントをClaude設定にコピー:

```bash
# リポジトリをクローン
git clone https://github.com/aitytech/agentkits-marketing.git

# agentsをコピー
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# commandsをコピー
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# skillsをコピー
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# workflowsをコピー
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## クイックスタート

### キャンペーン開始

```bash
# リサーチと計画
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# コンテンツ生成
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# 最適化
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### コンテンツ作成

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### コンバージョン最適化

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### グロース＆戦略

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## 利用可能なスキル

| スキル | 説明 | 使用場面 |
|--------|------|----------|
| **コアマーケティング** |
| `marketing-psychology` | マーケティング向け70以上のメンタルモデル | 説得、価格設定、異議処理 |
| `marketing-ideas` | 実証済み140のSaaS戦略 | マーケティングアイデアが必要な時 |
| `marketing-fundamentals` | ファネル、ジャーニー、ポジショニング | 基礎概念 |
| **コンバージョン最適化** |
| `page-cro` | ランディングページ、ホームページ、価格ページ | ページがコンバートしない時 |
| `form-cro` | リードキャプチャ、コンタクトフォーム | フォーム最適化 |
| `popup-cro` | モーダル、オーバーレイ、離脱意図 | ポップアップ作成 |
| `signup-flow-cro` | 登録、トライアルサインアップ | サインアップの摩擦 |
| `onboarding-cro` | サインアップ後のアクティベーション | ユーザーアクティベーション |
| `paywall-upgrade-cro` | アプリ内ペイウォール、アップグレード画面 | フリーミアム変換 |
| `ab-test-setup` | 実験設計 | A/Bテスト |
| **コンテンツ＆コピー** |
| `copywriting` | マーケティングページコピー | 新規コピー作成 |
| `copy-editing` | 編集と推敲 | 既存コピーの改善 |
| `email-sequence` | ドリップキャンペーン、ナーチャー | メール自動化 |
| **SEO＆グロース** |
| `seo-mastery` | キーワード、テクニカル、オンページ | SEO最適化 |
| `programmatic-seo` | 大規模テンプレートページ | スケールSEO |
| `schema-markup` | 構造化データ、リッチスニペット | スキーマ実装 |
| `competitor-alternatives` | vsページ、代替品 | 比較コンテンツ |
| `launch-strategy` | 製品ローンチ、発表 | Go-to-market |
| `pricing-strategy` | 価格設定、パッケージング、ティア | 価格決定 |
| `referral-program` | リファラル、アフィリエイト | バイラルグロース |
| `free-tool-strategy` | Engineering-as-marketing | 無料ツール計画 |

---

## マーケティングエージェント

### コアエージェント
| エージェント | フォーカス |
|-------------|----------|
| `attraction-specialist` | リード獲得、SEO、ランディングページ |
| `lead-qualifier` | リードスコアリング、セグメンテーション |
| `email-wizard` | メールシーケンス、自動化 |
| `sales-enabler` | 営業資料、バトルカード |
| `continuity-specialist` | リテンション、再エンゲージメント |
| `upsell-maximizer` | 収益拡大、クロスセル |

### サポートエージェント
| エージェント | フォーカス |
|-------------|----------|
| `researcher` | 市場調査、競合情報 |
| `brainstormer` | キャンペーンアイデア、クリエイティブコンセプト |
| `planner` | キャンペーン計画、カレンダー |
| `copywriter` | 高コンバージョンコピー |
| `project-manager` | キャンペーン調整 |
| `docs-manager` | マーケティングドキュメント |

### レビューエージェント
| エージェント | 視点 |
|-------------|------|
| `brand-voice-guardian` | ブランド一貫性 |
| `conversion-optimizer` | CROベストプラクティス |
| `seo-specialist` | SEO最適化 |
| `solopreneur` | フリーランサー/中小企業 |
| `startup-founder` | アーリーステージスタートアップ |

---

## コマンドカテゴリ

| カテゴリ | コマンド数 | 例 |
|----------|-----------|-----|
| Campaign | 4 | `/campaign:plan`, `/campaign:brief` |
| Content | 10 | `/content:blog`, `/content:landing`, `/content:editing` |
| SEO | 6 | `/seo:keywords`, `/seo:audit`, `/seo:programmatic` |
| CRO | 6 | `/cro:page`, `/cro:form`, `/cro:signup` |
| Growth | 3 | `/growth:launch`, `/growth:referral` |
| Email | 4 | `/sequence:welcome`, `/sequence:nurture` |
| Analytics | 5 | `/analytics:roi`, `/analytics:funnel` |
| Sales | 4 | `/sales:pitch`, `/sales:battlecard` |
| Research | 3 | `/research:market`, `/research:persona` |
| Marketing | 2 | `/marketing:psychology`, `/marketing:ideas` |
| Testing | 1 | `/test:ab-setup` |
| ...その他 | 45以上 | 完全なコマンドリファレンスを参照 |

---

## トレーニング

AIパワードマーケティングをマスターする**22のインタラクティブレッスン**。AIアシスタント内で実際のマーケティング業務を行いながら学習。

| | |
|---|---|
| **方法** | Claudeによるインタラクティブレッスン |
| **プロジェクト** | クライアントAgentKitsのためのMarkitエージェンシー |
| **所要時間** | 合計5-6時間 |
| **前提条件** | Claude Code、Cursor、または互換AIアシスタント |
| **言語** | English、Tiếng Việt（ベトナム語）、日本語 |

```bash
# 今すぐトレーニング開始
/training:start-0-0           # English
/training-vi:start-0-0        # Tiếng Việt（ベトナム語）
/training-ja:start-0-0        # 日本語（推奨）
```

---

### 実践プロジェクト: Markitエージェンシー

あなたは**Markit**（B2B SaaSマーケティングエージェンシー）のマーケティングストラテジストです。

**クライアント:** AgentKits - AIマーケティング自動化ツールキット

| | |
|---|---|
| **製品** | エンタープライズグレードAIマーケティング自動化 |
| **ターゲット** | SaaSファウンダー、マーケター、グロースチーム |
| **価格** | 無料＆オープンソース（MITライセンス） |
| **競合** | Jasper, Copy.ai, HubSpot |

**主要ペルソナ:**
- **Solo Sam** (25-35) - ソロプレナー/インディーハッカー、ブートストラップSaaS
- **Marketer Maya** (30-40) - マーケティングマネージャー、中規模SaaS企業
- **Founder Felix** (28-40) - 技術系ファウンダー、アーリーステージスタートアップ

---

### モジュール0: はじめに（30分）

基本を学び、最初のマーケティングタスクを完了。

| コマンド | レッスン | 所要時間 |
|----------|---------|----------|
| `/training:start-0-0` | コース紹介 | 10分 |
| `/training:start-0-1` | インストール＆セットアップ | 15分 |
| `/training:start-0-2` | 最初のマーケティングタスク | 15分 |

**学習内容:**
- AIアシスタントインターフェースと基本コマンド
- ファイル作成と管理
- マーケティングタスクのためのAIとの対話

---

### モジュール1: コア概念（90分）

Markitエージェンシープロジェクトを通じて基本ワークフローをマスター。

| コマンド | レッスン | 所要時間 |
|----------|---------|----------|
| `/training:start-1-1` | Markitへようこそ | 20分 |
| `/training:start-1-2` | マーケティングファイルの操作 | 25分 |
| `/training:start-1-3` | 最初のマーケティングタスク | 30分 |
| `/training:start-1-4` | マーケティングでのエージェント活用 | 35分 |
| `/training:start-1-5` | レビューエージェント詳細 | 30分 |
| `/training:start-1-6` | プロジェクトメモリ（CLAUDE.md） | 20分 |
| `/training:start-1-7` | ナビゲーション＆検索 | 20分 |

**学習内容:**
- キャンペーンブリーフ作成
- ブランドボイスとペルソナ開発
- エージェントの調整と委任
- ファイル整理のベストプラクティス
- プロジェクトメモリの効果的な使用

**構築するもの:**
- 完全なキャンペーンブリーフ
- ブランドガイドラインドキュメント
- カスタマーペルソナ
- カスタムレビューエージェント

---

### モジュール2: 応用編（120分）

大規模な実際のマーケティングシナリオにスキルを適用。

| コマンド | レッスン | 所要時間 |
|----------|---------|----------|
| `/training:start-2-1` | キャンペーンブリーフの作成 | 45分 |
| `/training:start-2-2` | コンテンツ戦略の策定 | 40分 |
| `/training:start-2-3` | マーケティングコピーの生成 | 35分 |
| `/training:start-2-4` | キャンペーンデータの分析 | 35分 |
| `/training:start-2-5` | 競合分析 | 30分 |
| `/training:start-2-6` | SEO最適化 | 40分 |

**学習内容:**
- 戦略的キャンペーン計画
- マルチチャネルコンテンツ作成
- データ分析とインサイト
- 競合情報収集
- SEOベストプラクティス

**構築するもの:**
- 完全なコンテンツライブラリ（ブログ、メール、ソーシャル、広告）
- 競合分析レポート
- SEO最適化計画
- キャンペーンアナリティクスダッシュボード

---

### モジュール3: CRO＆コンバージョン（60分）

専門CROスキルでコンバージョン率最適化をマスター。

| コマンド | レッスン | 所要時間 |
|----------|---------|----------|
| `/training:start-3-1` | CRO基礎 | 20分 |
| `/training:start-3-2` | フォーム＆サインアップ最適化 | 20分 |
| `/training:start-3-3` | ポップアップ＆オンボーディングCRO | 20分 |

**学習内容:**
- フルコンバージョンファネル用7つのCROスキル
- フォーム最適化（5フィールドルール）
- サインアップフローのベストプラクティス
- ポップアップデザインとトリガー
- オンボーディングとアクティベーション
- ペイウォールとアップグレード画面
- A/Bテスト設計

**構築するもの:**
- ランディングページCRO監査
- 最適化されたフォームデザイン
- オンボーディングフロー
- アップグレード画面
- A/Bテスト仮説

**フルCROファネルカバレッジ:**
```
Visitor → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (離脱者をキャプチャ)
     ↓
New User → Onboarding CRO → Activation
     ↓
Free User → Paywall CRO → Paid Customer
```

---

### ボーナスコンテンツ

| コマンド | 説明 |
|----------|------|
| `/training:bonus-patterns` | ヘッドライン、メール、ソーシャル、広告、CROのパターンライブラリ |
| `/training:bonus-secret` | 10xマーケターフレームワーク |
| `/training:help` | 利用可能な全トレーニングコマンドを表示 |

---

### 多言語トレーニング

トレーニングは3言語で利用可能。すべてのコンテンツは同一です - お好みの言語を選択してください:

| 言語 | コマンドプレフィックス | 例 |
|------|---------------------|-----|
| **English** | `/training:` | `/training:start-0-0` |
| **Tiếng Việt**（ベトナム語） | `/training-vi:` | `/training-vi:start-0-0` |
| **日本語**（推奨） | `/training-ja:` | `/training-ja:start-0-0` |

**ローカライズ済みコマンド:**
- `start-0-0` から `start-0-2`（モジュール0）
- `start-1-1` から `start-1-7`（モジュール1）
- `start-2-1` から `start-2-6`（モジュール2）
- `start-3-1` から `start-3-3`（モジュール3）
- `help`、`bonus-patterns`、`bonus-secret`、`persona-builder`

---

### 複利効果

各キャンペーンで次のキャンペーンが速くなる:

| キャンペーン | 時間 | 改善 |
|-------------|------|------|
| 最初（モジュール2） | 40時間 | ゼロから構築 |
| 5回目のキャンペーン | 15時間 | 62%高速化 |
| 10回目のキャンペーン | 10時間 | 75%高速化 |

**蓄積されるもの:**
- キャンペーンブリーフテンプレート
- ブランドボイスガイドライン
- コンテンツテンプレート（ブログ、メール、ソーシャル、広告）
- ペルソナフレームワーク
- 競合分析テンプレート
- SEO最適化チェックリスト
- カスタムレビューエージェント
- ワークフロー自動化パターン

---

## 学習パス

### パス1: クイックスタート（30分）
経験豊富なマーケター向け - 直接本番へ:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### パス2: フルトレーニング（5-6時間）
初心者向け - インタラクティブトレーニング完了:
```bash
/training:start-0-0  # ここから開始
```

### パス3: スキル別（各15-30分）
必要に応じて特定のスキルを学習:

| 目標 | コマンド |
|------|---------|
| **コンバージョン改善** | `/cro:page`, `/cro:form`, `/marketing:psychology` |
| **より良いコピー作成** | `/content:good`, `/content:editing` |
| **製品ローンチ** | `/growth:launch`, `/campaign:plan` |
| **価格最適化** | `/pricing:strategy` |
| **SEOスケール** | `/seo:programmatic`, `/seo:schema` |
| **リファラル設計** | `/growth:referral` |
| **A/Bテスト** | `/test:ab-setup` |

### パス4: CROマスタリー（60分）
コンバージョン最適化トレーニング完了:
```bash
/training:start-3-1  # 基礎から開始
/training:start-3-2  # フォーム＆サインアップ
/training:start-3-3  # ポップアップ＆オンボーディング
```

---

## MCP統合

接続サービスからのリアルデータ（`data-reliability-rules.md`参照）:

| サーバー | 用途 |
|---------|------|
| `sensortower` | アプリアナリティクス、ASO |
| `google-search-console` | 検索パフォーマンス |
| `google-analytics` | ウェブアナリティクス |
| `semrush` | キーワード、バックリンク |
| `dataforseo` | SERPデータ |
| `meta-ads` | Facebook/Instagram広告 |
| `hubspot` | CRM、自動化 |

---

## コントリビュート

コントリビュート歓迎！以下をお持ちの場合:
- 改善されたエージェントまたはスキル
- 新しいマーケティングコマンド
- より良いワークフロー
- バグ修正

ガイドラインは[CONTRIBUTING.md](CONTRIBUTING.md)を参照。

### コントリビュートのアイデア
- 業界別スキル（B2B、eコマース、SaaS）
- プラットフォーム別エージェント（TikTok、YouTube、Reddit）
- 地域マーケティング（APAC、EMEA、LATAM）
- アナリティクス統合

---

## リソース

### AgentKits
- [AgentKitsホームページ](https://agentkits.net)
- [Marketing Kitページ](https://www.agentkits.net/marketing)
- [ドキュメント](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### AIアシスタント
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Cursor Docs](https://docs.cursor.com)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### コミュニティ
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## スター履歴

<a href="https://star-history.com/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## ライセンス

MIT - 自由に使用、必要に応じて変更、可能であれば貢献してください。

---

**このリポジトリが役立つならスターを。今日からAIパワードマーケティングキャンペーンの構築を始めましょう。**
