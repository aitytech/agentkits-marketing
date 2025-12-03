# Zalo Integration

> Messaging for Vietnam market (74M+ users, Top 10 globally)

## Overview

Zalo is Vietnam's #1 messaging app with 74M+ users. Essential for Vietnam market marketing. **No official MCP package exists - requires custom implementation.**

## Market Position

- **Rank**: #9 globally (above KakaoTalk)
- **Vietnam Users**: 74M+ (76% penetration)
- **Daily Active**: 50M+
- **Business Usage**: Zalo Official Account (OA) + ZNS

## Status: ⚠️ Needs Custom MCP

Currently no MCP package available. Options:
1. Build custom MCP server using Zalo API
2. Use Zalo API directly via HTTP requests
3. Use third-party services (Infobip, etc.)

## Zalo Services

### Zalo Official Account (OA)
- Business messaging
- Customer support
- Broadcast messages
- Rich menu / mini-app

### Zalo Notification Service (ZNS)
- Transactional messages
- OTP delivery
- Order confirmations
- Appointment reminders

## API Access

```bash
export ZALO_APP_ID="xxx"
export ZALO_APP_SECRET="xxx"
export ZALO_OA_ACCESS_TOKEN="xxx"
```

### Getting Started
1. Register at [developers.zalo.me](https://developers.zalo.me)
2. Create Zalo App
3. Create/link Official Account
4. Get API credentials

## Planned Capabilities

| Tool | Description |
|------|-------------|
| `send_zns` | Send ZNS notification |
| `send_message` | Send OA message |
| `get_followers` | List OA followers |
| `broadcast` | Broadcast to followers |
| `get_user_info` | Get user profile |

## Use Cases (Manual/API)

### 1. Order Confirmation (ZNS)
```javascript
// Using Zalo API directly
POST https://openapi.zalo.me/v3.0/oa/message/cs
{
  "recipient": { "user_id": "xxx" },
  "message": { "text": "Đơn hàng #123 đã được xác nhận!" }
}
```

### 2. Marketing Broadcast
```javascript
// Broadcast to OA followers
POST https://openapi.zalo.me/v2.0/oa/message
{
  "recipient": { "user_id": "xxx" },
  "message": { "text": "🎉 Khuyến mãi đặc biệt hôm nay!" }
}
```

## Integration with Marketing

- `/sequence:welcome` → Zalo welcome flow
- `/campaign:plan` → Vietnam market campaigns
- `/crm:segment` → Segment Zalo users

## Third-Party Options

- **Infobip**: [infobip.com/zalo](https://www.infobip.com/zalo) - ZNS API
- **VietGuys**: Zalo ZNS templates
- **WorldFone**: ZNS solution provider

## Building Custom MCP

To build Zalo MCP server:
1. Use SensorTower MCP as template
2. Implement Zalo OAuth flow
3. Add ZNS and OA message tools
4. Handle token refresh

## Related
- [LINE](../line/) - Japan market equivalent
- [Meta Ads](../meta-ads/) - Facebook for Vietnam
