import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Notification Systems (Phase 10.3)
 * Duration: 75 seconds (2250 frames at 30fps)
 *
 * Scene 1 (0-19s): Notification Channels: Push, Email, SMS, In-App
 * Scene 2 (19-38s): Push Notifications: FCM & APNS Architecture
 * Scene 3 (38-56s): Email at Scale & SMS Gateways
 * Scene 4 (56-75s): Notification Preferences & Delivery Guarantees
 */

export const NotificationSystems: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 570;
  const scene2End = 1140;
  const scene3End = 1680;
  const scene4End = 2250;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Notification Systems" subtitle="Multi-Channel Communication at Scale" />
          <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="How do apps send notifications to millions of users across push, email, SMS, and in-app?" x={width * 0.10} y={height * 0.64} startFrame={90} />
          <Dialogue speaker="architect" text="Multi-channel notification system! Different channels for different urgency. Let me show you!" x={width * 0.60} y={height * 0.64} startFrame={240} />

          <div style={{position: 'absolute', top: 340, left: width / 2 - 850, width: 1700, opacity: fadeIn(frame, 390, 30)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>📬 Notification Channels</h2>

            <div style={{display: 'flex', gap: 24, marginBottom: 30}}>
              {[
                {
                  icon: '📱',
                  name: 'Push Notifications',
                  platforms: 'iOS (APNS), Android (FCM)',
                  latency: '< 1 second',
                  cost: 'Free (mostly)',
                  use: 'Urgent alerts, messages, breaking news',
                  limit: 'User can disable, OS can throttle',
                  color: '#3b82f6'
                },
                {
                  icon: '📧',
                  name: 'Email',
                  platforms: 'SendGrid, AWS SES, Mailgun',
                  latency: '1-10 seconds',
                  cost: '$0.10 per 1000',
                  use: 'Newsletters, receipts, weekly digests',
                  limit: 'Spam filters, deliverability',
                  color: '#10b981'
                },
                {
                  icon: '💬',
                  name: 'SMS',
                  platforms: 'Twilio, AWS SNS, Vonage',
                  latency: '1-5 seconds',
                  cost: '$0.0075 per SMS',
                  use: '2FA codes, critical alerts',
                  limit: 'Expensive, character limit (160)',
                  color: '#f59e0b'
                },
                {
                  icon: '🔔',
                  name: 'In-App',
                  platforms: 'WebSocket, Polling',
                  latency: 'Real-time',
                  cost: 'Infrastructure only',
                  use: 'User in app, instant updates',
                  limit: 'Only works when app is open',
                  color: '#ec4899'
                }
              ].map((channel, i) => (
                <div key={i} style={{flex: 1, padding: 20, background: `linear-gradient(135deg, ${channel.color}22, ${channel.color}11)`, border: `3px solid ${channel.color}`, borderRadius: 14, opacity: fadeIn(frame, 420 + i * 20, 20), boxShadow: `0 0 20px ${channel.color}44`}}>
                  <div style={{fontSize: 48, textAlign: 'center', marginBottom: 12}}>{channel.icon}</div>
                  <h3 style={{fontSize: 24, fontWeight: 700, color: channel.color, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>{channel.name}</h3>
                  <div style={{fontSize: 17, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    <strong style={{color: theme.text.secondary}}>Platform:</strong> {channel.platforms}<br />
                    <strong style={{color: theme.text.secondary}}>Latency:</strong> {channel.latency}<br />
                    <strong style={{color: theme.text.secondary}}>Cost:</strong> {channel.cost}<br />
                    <strong style={{color: theme.text.secondary}}>Use:</strong> {channel.use}<br />
                    <strong style={{color: '#ef4444'}}>Limit:</strong> {channel.limit}
                  </div>
                </div>
              ))}
            </div>

            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, 510, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎯 Channel Selection Strategy</h3>
              <div style={{fontSize: 21, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                <strong>Critical (2FA):</strong> SMS → Push fallback<br />
                <strong>Urgent (message):</strong> Push → In-app<br />
                <strong>Marketing:</strong> Email (low cost, high volume)<br />
                <strong>User preference:</strong> Let users choose!
              </div>
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Push Notifications Architecture" subtitle="FCM & APNS" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>📱 How Push Notifications Work</h3>
              <p style={{fontSize: 22, color: '#dbeafe', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Your app doesn't send directly to user's device. Goes through platform gateway (FCM/APNS)
              </p>
            </div>

            {/* Architecture Diagram */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene1End + 60, 25)}}>
              <svg width="1640" height="380" opacity={fadeIn(frame, scene1End + 90, 20)}>
                {/* Your Server */}
                <g opacity={fadeIn(frame, scene1End + 105, 15)}>
                  <rect x={50} y={40} width={200} height={100} rx={12} fill="#10b981" stroke="#34d399" strokeWidth={3} />
                  <text x={150} y={80} textAnchor="middle" fill="#fff" fontSize={22} fontWeight="700">Your Server</text>
                  <text x={150} y={110} textAnchor="middle" fill="#d1fae5" fontSize={17}>(Backend API)</text>
                </g>

                {/* FCM */}
                <g opacity={fadeIn(frame, scene1End + 135, 15)}>
                  <rect x={420} y={20} width={240} height={140} rx={12} fill="#f59e0b" stroke="#fbbf24" strokeWidth={3} />
                  <text x={540} y={70} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">FCM</text>
                  <text x={540} y={100} textAnchor="middle" fill="#fef3c7" fontSize={18}>(Firebase Cloud Messaging)</text>
                  <text x={540} y={130} textAnchor="middle" fill="#fde68a" fontSize={16}>Google's push gateway</text>
                </g>

                {/* APNS */}
                <g opacity={fadeIn(frame, scene1End + 165, 15)}>
                  <rect x={420} y={240} width={240} height={140} rx={12} fill="#8b5cf6" stroke="#a78bfa" strokeWidth={3} />
                  <text x={540} y={290} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">APNS</text>
                  <text x={540} y={320} textAnchor="middle" fill="#e9d5ff" fontSize={18}>(Apple Push Notification Service)</text>
                  <text x={540} y={350} textAnchor="middle" fill="#e9d5ff" fontSize={16}>Apple's push gateway</text>
                </g>

                {/* Android Devices */}
                <g opacity={fadeIn(frame, scene1End + 195, 15)}>
                  <rect x={840} y={20} width={180} height={140} rx={12} fill="#3b82f6" stroke="#60a5fa" strokeWidth={3} />
                  <text x={930} y={75} textAnchor="middle" fill="#fff" fontSize={22} fontWeight="700">📱 Android</text>
                  <text x={930} y={105} textAnchor="middle" fill="#dbeafe" fontSize={18}>Devices</text>
                  <text x={930} y={135} textAnchor="middle" fill="#93c5fd" fontSize={16}>(via FCM)</text>
                </g>

                {/* iOS Devices */}
                <g opacity={fadeIn(frame, scene1End + 225, 15)}>
                  <rect x={840} y={240} width={180} height={140} rx={12} fill="#ec4899" stroke="#f472b6" strokeWidth={3} />
                  <text x={930} y={295} textAnchor="middle" fill="#fff" fontSize={22} fontWeight="700">📱 iOS</text>
                  <text x={930} y={325} textAnchor="middle" fill="#fce7f3" fontSize={18}>Devices</text>
                  <text x={930} y={355} textAnchor="middle" fill="#fbcfe8" fontSize={16}>(via APNS)</text>
                </g>

                {/* Arrows */}
                <g opacity={fadeIn(frame, scene1End + 120, 15)}>
                  <line x1={250} y1={70} x2={420} y2={70} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={335} y={60} textAnchor="middle" fill="#94a3b8" fontSize={15}>Send to FCM</text>
                </g>
                <g opacity={fadeIn(frame, scene1End + 150, 15)}>
                  <line x1={250} y1={110} x2={420} y2={290} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={300} y={210} textAnchor="middle" fill="#94a3b8" fontSize={15}>Send to APNS</text>
                </g>
                <g opacity={fadeIn(frame, scene1End + 180, 15)}>
                  <line x1={660} y1={90} x2={840} y2={90} stroke="#f59e0b" strokeWidth={3} markerEnd="url(#arrow-orange)" />
                </g>
                <g opacity={fadeIn(frame, scene1End + 210, 15)}>
                  <line x1={660} y1={310} x2={840} y2={310} stroke="#8b5cf6" strokeWidth={3} markerEnd="url(#arrow-purple)" />
                </g>

                {/* Steps */}
                <g opacity={fadeIn(frame, scene1End + 255, 15)}>
                  <text x={1200} y={80} fill="#94a3b8" fontSize={19} fontWeight="700">1. App registers, gets device token</text>
                  <text x={1200} y={110} fill="#94a3b8" fontSize={19} fontWeight="700">2. App sends token to your server</text>
                  <text x={1200} y={140} fill="#94a3b8" fontSize={19} fontWeight="700">3. Server sends notification to FCM/APNS</text>
                  <text x={1200} y={170} fill="#94a3b8" fontSize={19} fontWeight="700">4. FCM/APNS routes to device</text>
                  <text x={1200} y={200} fill="#94a3b8" fontSize={19} fontWeight="700">5. OS displays notification</text>
                </g>

                <defs>
                  <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#f59e0b" />
                  </marker>
                  <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#8b5cf6" />
                  </marker>
                </defs>
              </svg>
            </div>

            <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14, opacity: fadeIn(frame, scene1End + 300, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📊 Payload Example</h3>
              <div style={{fontFamily: 'monospace', fontSize: 18, color: '#d1fae5', background: 'rgba(16, 185, 129, 0.2)', padding: 20, borderRadius: 10, lineHeight: 1.8}}>
                {`{
  "to": "device_token_xyz",
  "notification": {
    "title": "New Message",
    "body": "You have 3 unread messages",
    "icon": "message_icon.png"
  },
  "data": {
    "message_id": "12345",
    "sender": "alice"
  }
}`}
              </div>
              <div style={{marginTop: 16, fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center'}}>
                <strong style={{color: '#6ee7b7'}}>notification:</strong> What user sees | <strong style={{color: '#6ee7b7'}}>data:</strong> Custom payload for app
              </div>
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene1End + 390} />
          <Dialogue speaker="junior" text="Server sends to FCM/APNS gateway, they route to devices. Platform handles delivery!" x={width * 0.10} y={height * 0.64} startFrame={scene1End + 420} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Email at Scale & SMS Gateways" subtitle="Transactional Communication" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            {/* Email at Scale */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(16, 185, 129, 0.6)'}}>📧 Email Delivery at Scale</h2>

              <div style={{display: 'flex', gap: 24, marginBottom: 20}}>
                {[
                  {name: 'SendGrid', price: '$0.10/1K', features: ['Template engine', 'A/B testing', 'Analytics dashboard', 'Webhook events'], delivery: '99% inbox rate'},
                  {name: 'AWS SES', price: '$0.10/1K', features: ['SMTP + API', 'Bounce handling', 'Reputation dashboard', 'AWS integration'], delivery: 'Low cost, DIY'},
                  {name: 'Mailgun', price: '$0.80/1K', features: ['Email validation', 'Route filtering', 'Logs & analytics', 'EU compliance'], delivery: 'Dev-friendly API'}
                ].map((service, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene2End + 60 + i * 20, 20)}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>{service.name}</h4>
                    <div style={{fontSize: 20, color: '#d1fae5', fontWeight: 700, textAlign: 'center', marginBottom: 12, fontFamily: 'monospace'}}>{service.price}</div>
                    {service.features.map((feat, j) => (
                      <div key={j} style={{fontSize: 17, color: '#d1fae5', marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>• {feat}</div>
                    ))}
                    <div style={{marginTop: 12, padding: 10, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 8, fontSize: 17, color: '#6ee7b7', textAlign: 'center', fontFamily: theme.typography.body.fontFamily}}>{service.delivery}</div>
                  </div>
                ))}
              </div>

              <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, opacity: fadeIn(frame, scene2End + 150, 25)}}>
                <h4 style={{fontSize: 24, fontWeight: 700, color: '#fca5a5', marginBottom: 14, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>⚠️ Email Deliverability Challenges</h4>
                <div style={{fontSize: 19, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                  <strong style={{color: '#fca5a5'}}>SPF, DKIM, DMARC:</strong> Email authentication (prove you're legitimate sender)<br />
                  <strong style={{color: '#fca5a5'}}>Spam Filters:</strong> Avoid spam triggers (FREE, ACT NOW, excessive caps)<br />
                  <strong style={{color: '#fca5a5'}}>Bounce Handling:</strong> Remove invalid emails (hard bounce vs soft bounce)<br />
                  <strong style={{color: '#fca5a5'}}>Unsubscribe:</strong> Must include (legal requirement, CAN-SPAM Act)<br />
                  <strong style={{color: '#fca5a5'}}>IP Warming:</strong> New IP? Ramp up volume slowly (build reputation)
                </div>
              </div>
            </div>

            {/* SMS Gateways */}
            <div style={{opacity: fadeIn(frame, scene2End + 240, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#f59e0b', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>💬 SMS Gateways</h2>
              <div style={{display: 'flex', gap: 24}}>
                <div style={{flex: 1, padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14}}>
                  <h4 style={{fontSize: 24, fontWeight: 700, color: '#fbbf24', marginBottom: 14, fontFamily: theme.typography.heading.fontFamily}}>Popular Providers</h4>
                  <div style={{fontSize: 19, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    <strong>Twilio:</strong> $0.0075/SMS (US), global coverage<br />
                    <strong>AWS SNS:</strong> $0.00645/SMS, AWS integration<br />
                    <strong>Vonage (Nexmo):</strong> $0.0076/SMS, 2-way SMS<br />
                    <br />
                    <strong style={{color: '#fbbf24'}}>Use for:</strong> 2FA codes, critical alerts, OTP
                  </div>
                </div>

                <div style={{flex: 1, padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14}}>
                  <h4 style={{fontSize: 24, fontWeight: 700, color: '#fca5a5', marginBottom: 14, fontFamily: theme.typography.heading.fontFamily}}>SMS Limitations</h4>
                  <div style={{fontSize: 19, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    ❌ Expensive (100x email)<br />
                    ❌ 160 character limit (GSM-7)<br />
                    ❌ Carrier filtering (spam detection)<br />
                    ❌ Latency varies (1-10 seconds)<br />
                    ❌ Regulations (TCPA in US, opt-in required)<br />
                    <br />
                    <strong style={{color: '#6ee7b7'}}>✓ But:</strong> 98% open rate!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene2End + 360} />
          <Dialogue speaker="architect" text="Email for volume, SMS for critical. Both need deliverability work and cost management!" x={width * 0.60} y={height * 0.64} startFrame={scene2End + 390} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Notification Preferences & Reliability" subtitle="User Control & Delivery Guarantees" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>⚙️ User Preferences</h2>
              <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14}}>
                <div style={{fontSize: 21, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.9, marginBottom: 20}}>
                  <strong style={{color: '#c4b5fd'}}>Let users control notification settings:</strong><br />
                  • Per-category preferences (marketing, updates, messages)<br />
                  • Per-channel opt-in/out (push, email, SMS)<br />
                  • Frequency controls (instant, daily digest, weekly)<br />
                  • Quiet hours (don't disturb 10pm-8am)<br />
                  • Priority filtering (only important notifications)
                </div>

                <div style={{padding: 20, background: 'rgba(139, 92, 246, 0.2)', borderRadius: 10}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>Database Schema Example</h4>
                  <div style={{fontFamily: 'monospace', fontSize: 17, color: '#e9d5ff', lineHeight: 1.8}}>
                    user_preferences {'{'}user_id, category, push_enabled, email_enabled, sms_enabled, frequency{'}'}
                  </div>
                </div>
              </div>
            </div>

            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 120, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🔄 Delivery Guarantees & Retry Logic</h2>
              <div style={{display: 'flex', gap: 24}}>
                <div style={{flex: 1, padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14}}>
                  <h4 style={{fontSize: 24, fontWeight: 700, color: '#6ee7b7', marginBottom: 14, fontFamily: theme.typography.heading.fontFamily}}>At-Least-Once Delivery</h4>
                  <div style={{fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    <strong>Queue-based system:</strong><br />
                    1. Write notification to queue (SQS, RabbitMQ)<br />
                    2. Worker picks up, sends to channel<br />
                    3. On failure, retry with exponential backoff<br />
                    4. Max 3-5 retries, then DLQ (dead letter queue)<br />
                    <br />
                    <strong style={{color: '#6ee7b7'}}>Ensures delivery even if API is down</strong>
                  </div>
                </div>

                <div style={{flex: 1, padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14}}>
                  <h4 style={{fontSize: 24, fontWeight: 700, color: '#60a5fa', marginBottom: 14, fontFamily: theme.typography.heading.fontFamily}}>Idempotency</h4>
                  <div style={{fontSize: 19, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    <strong>Prevent duplicate notifications:</strong><br />
                    • Generate unique notification_id<br />
                    • Check if already sent (cache/DB)<br />
                    • Skip if duplicate detected<br />
                    <br />
                    <strong>Example:</strong><br />
                    notification_id = hash(user_id + event_id + timestamp)<br />
                    <br />
                    <strong style={{color: '#60a5fa'}}>User won't get same alert twice!</strong>
                  </div>
                </div>
              </div>
            </div>

            <div style={{padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14, opacity: fadeIn(frame, scene3End + 240, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#fbbf24', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📊 Monitoring & Analytics</h3>
              <div style={{fontSize: 20, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.9}}>
                <strong>Track key metrics:</strong><br />
                • Delivery rate (sent vs delivered)<br />
                • Open rate (email/push opened)<br />
                • Click-through rate (CTR)<br />
                • Unsubscribe rate (keep &lt; 0.5%)<br />
                • Latency (time to deliver)<br />
                <br />
                <strong style={{color: '#fbbf24'}}>A/B test:</strong> Subject lines, send times, content to optimize engagement
              </div>
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene3End + 330} />
          <Dialogue speaker="junior" text="User preferences, queue-based delivery with retries, idempotency, and analytics. Complete system!" x={width * 0.10} y={height * 0.64} startFrame={scene3End + 360} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
