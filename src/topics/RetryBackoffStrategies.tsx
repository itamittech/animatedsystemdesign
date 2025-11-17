import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Retry & Backoff Strategies (Phase 7.3)
 * Duration: 70 seconds (2100 frames at 30fps)
 *
 * Scene 1 (0-18s): Introduction - Why Retry?
 * Scene 2 (18-38s): Exponential Backoff & Jitter
 * Scene 3 (38-55s): Retry Budgets & Idempotency
 * Scene 4 (55-70s): When NOT to Retry
 */

export const RetryBackoffStrategies: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 540;
  const scene2End = 1140;
  const scene3End = 1650;
  const scene4End = 2100;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Retry & Backoff Strategies" subtitle="Handling Transient Failures" />
          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="A network blip caused a request to fail. Should I retry immediately?" x={100} y={height - 280} startFrame={90} />
          <Dialogue speaker="architect" text="Yes, but WAIT before retrying! Exponential backoff prevents hammering a recovering service." x={width - 750} y={height - 280} startFrame={240} />
          <div style={{position: 'absolute', top: 360, left: width / 2 - 700, width: 1400, opacity: fadeIn(frame, 390, 30)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#60a5fa', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🔄 Transient Failures (Retry Them!)</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
              {['🌐 Network timeouts', '⚡ Rate limit (429 error)', '💤 Service temporarily unavailable (503)', '🔌 Connection reset'].map((item, i) => (
                <div key={i} style={{width: 670, padding: '18px 24px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))', border: '2px solid #3b82f6', borderRadius: 12, fontSize: 22, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, 420 + i * 15, 15)}}>{item}</div>
              ))}
            </div>
          </div>
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Exponential Backoff" subtitle="Smart Waiting Strategy" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 800, width: 1600, opacity: fadeIn(frame, scene1End + 30, 25)}}>
            <div style={{marginBottom: 40}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📈 Exponential Backoff</h2>
              <svg width="1600" height="220">
                {[{retry: 1, wait: 1, y: 180}, {retry: 2, wait: 2, y: 160}, {retry: 3, wait: 4, y: 120}, {retry: 4, wait: 8, y: 60}, {retry: 5, wait: 16, y: 20}].map((r, i) => (
                  <g key={i} opacity={fadeIn(frame, scene1End + 60 + i * 30, 20)}>
                    <rect x={50 + i * 310} y={r.y} width={280} height={200 - r.y} fill="#10b981" stroke="#34d399" strokeWidth={2} rx={8} />
                    <text x={190 + i * 310} y={r.y - 10} textAnchor="middle" fill="#6ee7b7" fontSize={20} fontWeight="700">Retry {r.retry}</text>
                    <text x={190 + i * 310} y={r.y + 25} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">{r.wait}s wait</text>
                  </g>
                ))}
                <text x={800} y={215} textAnchor="middle" fill="#94a3b8" fontSize={20}>Time between retries doubles!</text>
              </svg>
            </div>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 12, opacity: fadeIn(frame, scene1End + 240, 25)}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#fbbf24', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>➕ Add Jitter (Randomness)</h3>
              <div style={{fontSize: 22, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                <strong>Without Jitter:</strong> All clients retry at same time → Thundering herd!<br />
                <strong>With Jitter:</strong> Wait = base_delay * 2^retry ± random(0-1s) → Spreads load
              </div>
            </div>
          </div>
          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene1End + 300} />
          <Dialogue speaker="architect" text="Jitter prevents synchronized retries. Imagine 1000 clients retrying at exact same second - chaos!" x={width - 750} y={height - 280} startFrame={scene1End + 330} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Retry Budgets & Idempotency" subtitle="Smart Retry Management" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 40, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>💰 Retry Budget</h2>
              <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12}}>
                <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                  <strong style={{color: '#c4b5fd'}}>Limit total retries to prevent amplification</strong><br /><br />
                  Example: Allow retries only if &lt;10% of requests are failing<br />
                  • Prevents retry storm when entire system is down<br />
                  • Monitor retry rate as health metric<br />
                  • Stop retrying if budget exhausted
                </div>
              </div>
            </div>
            <div style={{opacity: fadeIn(frame, scene2End + 150, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textShadow: '0 0 24px rgba(16, 185, 129, 0.6)'}}>🔑 Idempotency (Critical!)</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
                {[{icon: '✅', title: 'Safe to Retry (Idempotent)', items: ['GET requests (read-only)', 'PUT (same result if repeated)', 'DELETE with ID'], color: '#10b981'}, {icon: '⚠️', title: 'Dangerous to Retry', items: ['POST without idempotency key', 'Payment processing', 'Non-idempotent operations'], color: '#ef4444'}].map((cat, i) => (
                  <div key={i} style={{width: 750, padding: 24, background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}11)`, border: `3px solid ${cat.color}`, borderRadius: 14, opacity: fadeIn(frame, scene2End + 180 + i * 30, 20)}}>
                    <h3 style={{fontSize: 26, fontWeight: 700, color: cat.color, marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>{cat.icon} {cat.title}</h3>
                    {cat.items.map((item, j) => (
                      <div key={j} style={{fontSize: 20, color: theme.text.secondary, marginBottom: 8, fontFamily: theme.typography.body.fontFamily}}>• {item}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Character type="junior" x={200} y={height - 200} startFrame={scene2End + 300} />
          <Dialogue speaker="junior" text="So I need to make sure retrying won't cause duplicate charges or data corruption!" x={100} y={height - 280} startFrame={scene2End + 330} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="When NOT to Retry" subtitle="Know When to Give Up" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 700, width: 1400, opacity: fadeIn(frame, scene3End + 30, 25)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>🚫 Don't Retry These!</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center'}}>
              {[{icon: '❌', error: '400 Bad Request', reason: 'Client error - fix request first'}, {icon: '🔐', error: '401/403 Unauthorized', reason: 'Auth issue - retry won\'t help'}, {icon: '🔍', error: '404 Not Found', reason: 'Resource doesn\'t exist'}, {icon: '⚠️', error: '422 Unprocessable', reason: 'Validation failed'}, {icon: '💔', error: '500 with circuit open', reason: 'Service known to be down'}, {icon: '⏰', error: 'Max retries exceeded', reason: 'Give up after 3-5 attempts'}].map((item, i) => (
                <div key={i} style={{width: 670, padding: 20, background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))', border: '2px solid #ef4444', borderRadius: 12, opacity: fadeIn(frame, scene3End + 60 + i * 15, 15), boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: 16}}>
                    <span style={{fontSize: 40}}>{item.icon}</span>
                    <div>
                      <div style={{fontSize: 24, fontWeight: 700, color: '#fca5a5', fontFamily: theme.typography.heading.fontFamily, marginBottom: 6}}>{item.error}</div>
                      <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily}}>{item.reason}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop: 40, padding: 28, background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.15))', border: '3px solid #8b5cf6', borderRadius: 16, opacity: fadeIn(frame, scene3End + 210, 30), boxShadow: '0 0 24px rgba(139, 92, 246, 0.4)'}}>
              <p style={{fontSize: 24, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', margin: 0, lineHeight: 1.6, fontWeight: 600}}>💡 <strong style={{color: '#c4b5fd'}}>Best Practice:</strong> Retry 2-3 times with exponential backoff + jitter. Log failures for investigation.</p>
            </div>
          </div>
          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene3End + 270} />
          <Dialogue speaker="architect" text="Smart retries = resilience. Dumb retries = making problems worse!" x={width - 750} y={height - 280} startFrame={scene3End + 300} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
