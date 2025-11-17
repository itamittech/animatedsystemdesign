import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, slideIn} from '../design-system/animations';

/**
 * Rate Limiting & Throttling (Phase 6.4)
 * Duration: 80 seconds (2400 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - Why Rate Limiting?
 * Scene 2 (20-45s): Token Bucket & Leaky Bucket Algorithms
 * Scene 3 (45-65s): Fixed Window vs Sliding Window
 * Scene 4 (65-80s): Distributed Rate Limiting & Use Cases
 */

export const RateLimitingThrottling: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  // Scene timing
  const scene1End = 600;  // 0-20s
  const scene2End = 1350; // 20-45s
  const scene3End = 1950; // 45-65s
  const scene4End = 2400; // 65-80s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - Why Rate Limiting? */}
      {frame < scene1End && (
        <>
          <Title text="Rate Limiting & Throttling" subtitle="Protecting Your APIs from Overload" />

          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="A user is hammering our API with thousands of requests per second! How do we stop this?"
            x={100}
            y={height - 280}
            startFrame={90}
          />

          <Dialogue
            speaker="architect"
            text="Rate limiting! We control how many requests a client can make in a time window. It protects against abuse and ensures fair usage for everyone."
            x={width - 750}
            y={height - 280}
            startFrame={240}
          />

          {/* The Problem Visual */}
          <div
            style={{
              position: 'absolute',
              top: 380,
              left: width / 2 - 500,
              width: 1000,
              opacity: fadeIn(frame, 420, 30),
            }}
          >
            <div
              style={{
                padding: 28,
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15))',
                border: '3px solid #ef4444',
                borderRadius: 16,
                boxShadow: '0 0 24px rgba(239, 68, 68, 0.4)',
              }}
            >
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#fca5a5',
                  marginBottom: 16,
                  fontFamily: theme.typography.heading.fontFamily,
                  textAlign: 'center',
                }}
              >
                ⚠️ Without Rate Limiting
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                {[
                  '🔥 Server overwhelmed by malicious/buggy clients',
                  '💸 Excessive costs from cloud API usage',
                  '😤 Legitimate users blocked out (DDoS)',
                  '⚡ API performance degrades for everyone',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 24,
                      color: '#fecaca',
                      fontFamily: theme.typography.body.fontFamily,
                      opacity: fadeIn(frame, 450 + i * 15, 15),
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 2: Token Bucket & Leaky Bucket Algorithms */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Rate Limiting Algorithms" subtitle="Token Bucket vs Leaky Bucket" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 820,
              display: 'flex',
              gap: 80,
            }}
          >
            {/* Token Bucket */}
            <div style={{width: 750, opacity: fadeIn(frame, scene1End + 30, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(59, 130, 246, 0.6)',
                }}
              >
                🪣 Token Bucket
              </h2>

              {/* Bucket Visual */}
              <svg width="700" height="280" style={{marginBottom: 20}}>
                {/* Bucket */}
                <rect x="250" y="80" width="200" height="180" rx="12" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="3" />

                {/* Tokens */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <circle
                    key={i}
                    cx={300 + (i % 3) * 50}
                    cy={140 + Math.floor(i / 3) * 50}
                    r="18"
                    fill="#60a5fa"
                    opacity={fadeIn(frame, scene1End + 60 + i * 10, 15)}
                  />
                ))}

                <text x="350" y="50" textAnchor="middle" fill="#60a5fa" fontSize="22" fontWeight="700">
                  Bucket (capacity: 10)
                </text>

                {/* Refill Arrow */}
                <line x1="520" y1="120" x2="460" y2="120" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead-green)" opacity={fadeIn(frame, scene1End + 120, 20)} />
                <text x="540" y="115" fill="#34d399" fontSize="18">+1 token/sec</text>
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '2px solid #3b82f6',
                  borderRadius: 12,
                }}
              >
                <div style={{fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  ✓ Request consumes 1 token<br />
                  ✓ Tokens refill at steady rate<br />
                  ✓ Allows bursts if bucket has tokens<br />
                  ✓ Most popular (AWS, Stripe API)
                </div>
              </div>
            </div>

            {/* Leaky Bucket */}
            <div style={{width: 750, opacity: fadeIn(frame, scene1End + 90, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#10b981',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(16, 185, 129, 0.6)',
                }}
              >
                💧 Leaky Bucket
              </h2>

              {/* Bucket Visual */}
              <svg width="700" height="280" style={{marginBottom: 20}}>
                {/* Bucket */}
                <path d="M 250 80 L 280 260 L 420 260 L 450 80 Z" fill="#065f46" stroke="#10b981" strokeWidth="3" />

                {/* Water/Requests */}
                <path d="M 260 200 L 280 260 L 420 260 L 440 200 Z" fill="#34d399" opacity={fadeIn(frame, scene1End + 150, 20)} />

                {/* Leak hole */}
                <circle cx="350" cy="265" r="8" fill="#0a0e27" />

                {/* Drip */}
                {[0, 1, 2].map((i) => (
                  <circle
                    key={i}
                    cx={350}
                    cy={280 + i * 20}
                    r="4"
                    fill="#34d399"
                    opacity={fadeIn(frame, scene1End + 180 + i * 20, 15)}
                  />
                ))}

                <text x="350" y="50" textAnchor="middle" fill="#34d399" fontSize="22" fontWeight="700">
                  Queue
                </text>

                <text x="350" y="340" textAnchor="middle" fill="#34d399" fontSize="18">Fixed rate output</text>
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid #10b981',
                  borderRadius: 12,
                }}
              >
                <div style={{fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  ✓ Requests queued in bucket<br />
                  ✓ Processed at constant rate<br />
                  ✓ Smooths out bursts<br />
                  ✓ Good for traffic shaping
                </div>
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 240} />

          <Dialogue
            speaker="junior"
            text="Token bucket allows bursts, leaky bucket smooths them out. Got it!"
            x={100}
            y={height - 280}
            startFrame={scene1End + 270}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 3: Fixed Window vs Sliding Window */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Window-Based Rate Limiting" subtitle="Fixed vs Sliding Windows" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 820,
              display: 'flex',
              gap: 80,
            }}
          >
            {/* Fixed Window */}
            <div style={{width: 750, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#f59e0b',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(245, 158, 11, 0.6)',
                }}
              >
                📅 Fixed Window
              </h2>

              <div style={{marginBottom: 24, fontFamily: 'monospace', fontSize: 18, color: '#94a3b8'}}>
                Limit: 10 requests/minute
              </div>

              {/* Timeline */}
              <svg width="700" height="200">
                {/* Windows */}
                {[0, 1, 2].map((i) => (
                  <g key={i} opacity={fadeIn(frame, scene2End + 60 + i * 20, 20)}>
                    <rect x={30 + i * 220} y={40} width={200} height={120} rx={8} fill={i === 1 ? '#f59e0b' : '#78350f'} stroke="#f59e0b" strokeWidth={2} />
                    <text x={130 + i * 220} y={30} textAnchor="middle" fill="#fbbf24" fontSize="18">{i}:00-{i}:59</text>

                    {/* Request dots */}
                    {Array.from({length: i === 1 ? 8 : 3}).map((_, j) => (
                      <circle key={j} cx={50 + i * 220 + (j % 4) * 45} cy={70 + Math.floor(j / 4) * 40} r="12" fill="#fde68a" />
                    ))}

                    <text x={130 + i * 220} y={180} textAnchor="middle" fill="#fde68a" fontSize="20" fontWeight="700">
                      {i === 1 ? '8 reqs' : '3 reqs'}
                    </text>
                  </g>
                ))}
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '2px solid #f59e0b',
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                <div style={{fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  ✓ Simple to implement<br />
                  ✓ Memory efficient<br />
                  ❌ Edge case: 20 requests at window boundary<br />
                  <span style={{fontSize: 18, color: theme.text.muted}}>(10 at 0:59, 10 at 1:00 = burst!)</span>
                </div>
              </div>
            </div>

            {/* Sliding Window */}
            <div style={{width: 750, opacity: fadeIn(frame, scene2End + 90, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#8b5cf6',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(139, 92, 246, 0.6)',
                }}
              >
                🎯 Sliding Window
              </h2>

              <div style={{marginBottom: 24, fontFamily: 'monospace', fontSize: 18, color: '#94a3b8'}}>
                Limit: 10 requests/minute (rolling)
              </div>

              {/* Timeline with sliding window */}
              <svg width="700" height="200">
                {/* Background timeline */}
                <rect x={30} y={40} width={640} height={120} rx={8} fill="#2d1b4e" stroke="#8b5cf6" strokeWidth={2} opacity={0.3} />

                {/* Sliding window overlay */}
                <rect x={220} y={40} width={200} height={120} rx={8} fill="#8b5cf6" fillOpacity={0.4} stroke="#a78bfa" strokeWidth={3} opacity={fadeIn(frame, scene2End + 150, 20)} />

                <text x={320} y={30} textAnchor="middle" fill="#c4b5fd" fontSize="18" fontWeight="700">Current Window (60s)</text>

                {/* Request dots throughout */}
                {Array.from({length: 12}).map((_, i) => (
                  <circle
                    key={i}
                    cx={50 + i * 50}
                    cy={100}
                    r="12"
                    fill={i >= 4 && i < 8 ? '#c4b5fd' : '#64748b'}
                    opacity={fadeIn(frame, scene2End + 120 + i * 8, 10)}
                  />
                ))}

                <text x={320} y={190} textAnchor="middle" fill="#c4b5fd" fontSize="20" fontWeight="700">
                  Counts last 60 seconds
                </text>
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '2px solid #8b5cf6',
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                <div style={{fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  ✓ More accurate rate limiting<br />
                  ✓ Prevents edge case bursts<br />
                  ✓ Better user experience<br />
                  ❌ More complex, needs timestamp tracking
                </div>
              </div>
            </div>
          </div>

          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 300} />

          <Dialogue
            speaker="architect"
            text="Fixed window is simple but has burst issues. Sliding window is smoother but needs more memory to track timestamps."
            x={width - 750}
            y={height - 280}
            startFrame={scene2End + 330}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 4: Distributed Rate Limiting & Use Cases */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Distributed Rate Limiting" subtitle="Real-World Implementation" />

          {/* Architecture */}
          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 500,
              width: 1000,
              opacity: fadeIn(frame, scene3End + 30, 25),
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#60a5fa',
                marginBottom: 20,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
              }}
            >
              🌐 Multi-Server Rate Limiting
            </h2>

            <svg width="1000" height="240">
              {/* API Servers */}
              {[0, 1, 2].map((i) => (
                <g key={i} opacity={fadeIn(frame, scene3End + 60 + i * 15, 15)}>
                  <rect x={80 + i * 280} y={20} width={180} height={80} rx={12} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} />
                  <text x={170 + i * 280} y={65} textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">
                    API Server {i + 1}
                  </text>
                </g>
              ))}

              {/* Redis/Central Store */}
              <rect x={350} y={150} width={300} height={80} rx={12} fill="#dc2626" stroke="#ef4444" strokeWidth={3} opacity={fadeIn(frame, scene3End + 120, 20)} />
              <text x={500} y={195} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">
                Redis (Shared State)
              </text>

              {/* Arrows */}
              {[0, 1, 2].map((i) => (
                <line
                  key={i}
                  x1={170 + i * 280}
                  y1={100}
                  x2={400 + i * 100}
                  y2={150}
                  stroke="#60a5fa"
                  strokeWidth={2}
                  opacity={fadeIn(frame, scene3End + 150 + i * 10, 15)}
                />
              ))}
            </svg>

            <div
              style={{
                padding: 20,
                background: 'rgba(96, 165, 250, 0.1)',
                border: '2px solid #60a5fa',
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              <div style={{fontSize: 22, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                <strong style={{color: '#60a5fa'}}>Challenge:</strong> Multiple servers need shared counter<br />
                <strong style={{color: '#10b981'}}>Solution:</strong> Use Redis/Memcached for atomic operations<br />
                <strong style={{color: '#f59e0b'}}>Trade-off:</strong> Network latency vs consistency
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div
            style={{
              position: 'absolute',
              bottom: 180,
              left: width / 2 - 700,
              width: 1400,
              opacity: fadeIn(frame, scene3End + 210, 25),
            }}
          >
            <h3
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: '#10b981',
                marginBottom: 16,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
              }}
            >
              🎯 Common Use Cases
            </h3>
            <div style={{display: 'flex', gap: 20, justifyContent: 'center', fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily}}>
              <span>🔐 Login attempts</span>
              <span>•</span>
              <span>📧 Email sending</span>
              <span>•</span>
              <span>💳 Payment API</span>
              <span>•</span>
              <span>🤖 Bot protection</span>
              <span>•</span>
              <span>💰 Cost control</span>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 270} />

          <Dialogue
            speaker="junior"
            text="So we use Redis to keep track across all servers. Smart! This prevents abuse while keeping the API usable."
            x={100}
            y={height - 280}
            startFrame={scene3End + 300}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
