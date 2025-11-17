import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Multi-Layer Caching (Phase 4.2)
 * Covers: Browser cache, CDN cache, Application cache (Redis), Database cache, Cache-aside pattern
 * Duration: 100 seconds (3000 frames at 30fps)
 */
export const MultiLayerCaching: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Credit Bookmark */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '2px solid rgba(20, 184, 166, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 16, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #14b8a6 0%, #5eead4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(20, 184, 166, 0.3)'}} />
        <div style={{fontSize: 14, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 16}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - The Layered Approach (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="Multi-Layer Caching" subtitle="Building Performance Through Strategic Cache Layers" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="Sarah, I understand single caches, but how do we cache at scale across an entire architecture?"
            x={220}
            y={height - 150}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="We use multiple cache layers! Each layer gets closer to the user and faster. Let me show you the pyramid."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={700}
          />

          {/* Cache Pyramid */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.18,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1600,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '3px solid rgba(20, 184, 166, 0.5)',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{fontSize: 28, fontWeight: 'bold', color: '#14b8a6', marginBottom: 24, textAlign: 'center'}}>
                  🏔️ The Caching Pyramid
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center'}}>
                  {/* Level 1: Browser */}
                  <div
                    style={{
                      width: '80%',
                      backgroundColor: 'rgba(59, 130, 246, 0.3)',
                      border: '3px solid #3b82f6',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      opacity: fadeIn(frame, 300, 15),
                    }}
                  >
                    <div style={{fontSize: 24, color: '#60a5fa', fontWeight: 'bold'}}>1️⃣ Browser Cache</div>
                    <div style={{fontSize: 16, color: '#cbd5e1', marginTop: 8}}>
                      🚀 Fastest (0ms) • Local storage, HTTP cache • Static assets
                    </div>
                  </div>

                  {/* Level 2: CDN */}
                  <div
                    style={{
                      width: '85%',
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '3px solid #10b981',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      opacity: fadeIn(frame, 340, 15),
                    }}
                  >
                    <div style={{fontSize: 24, color: '#34d399', fontWeight: 'bold'}}>2️⃣ CDN Cache</div>
                    <div style={{fontSize: 16, color: '#cbd5e1', marginTop: 8}}>
                      🌍 Edge locations (10-50ms) • Images, CSS, JS • Global distribution
                    </div>
                  </div>

                  {/* Level 3: Application */}
                  <div
                    style={{
                      width: '90%',
                      backgroundColor: 'rgba(245, 158, 11, 0.3)',
                      border: '3px solid #f59e0b',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      opacity: fadeIn(frame, 380, 15),
                    }}
                  >
                    <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold'}}>3️⃣ Application Cache (Redis)</div>
                    <div style={{fontSize: 16, color: '#cbd5e1', marginTop: 8}}>
                      ⚡ In-memory (1-5ms) • Session data, API responses • Shared across servers
                    </div>
                  </div>

                  {/* Level 4: Database */}
                  <div
                    style={{
                      width: '95%',
                      backgroundColor: 'rgba(236, 72, 153, 0.3)',
                      border: '3px solid #ec4899',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      opacity: fadeIn(frame, 420, 15),
                    }}
                  >
                    <div style={{fontSize: 24, color: '#f472b6', fontWeight: 'bold'}}>4️⃣ Database Query Cache</div>
                    <div style={{fontSize: 16, color: '#cbd5e1', marginTop: 8}}>
                      💾 DB-level (10-50ms) • Query results • Last resort before disk
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Request Flow Through Layers (450-1050 frames / 15-35s) */}
      {frame >= 450 && frame < 1050 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#14b8a6',
              opacity: fadeIn(frame, 450, 20),
              textAlign: 'center',
            }}
          >
            Request Flow: Cache Hit at Each Layer
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={450} size={90} />

          <Dialogue
            speaker="architect"
            text="A request tries each layer from fastest to slowest. First hit wins! Let's trace a user profile request."
            x={width - 750}
            y={height - 280}
            startFrame={480}
            maxWidth={720}
          />

          <div
            style={{
              position: 'absolute',
              top: 140,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 570, 20),
            }}
          >
            {/* Flow Diagram */}
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              {/* Scenario 1: Browser Hit */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 600, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#3b82f6', fontWeight: 'bold', marginBottom: 12}}>
                  ✅ Scenario 1: Browser Cache Hit (Best Case)
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 16, color: '#e2e8f0'}}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: 28}}>👤</div>
                    <div style={{fontSize: 14}}>User</div>
                  </div>
                  <div style={{fontSize: 24, color: '#3b82f6'}}>→</div>
                  <div style={{backgroundColor: 'rgba(59, 130, 246, 0.3)', padding: '12px 20px', borderRadius: 8, border: '2px solid #3b82f6'}}>
                    <div style={{fontWeight: 'bold', color: '#60a5fa'}}>Browser Cache</div>
                    <div style={{fontSize: 14, color: '#10b981'}}>✓ HIT (0ms)</div>
                  </div>
                  <div style={{fontSize: 24, color: '#10b981'}}>→</div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: 28}}>👤</div>
                    <div style={{fontSize: 14, color: '#10b981'}}>Instant!</div>
                  </div>
                  <div style={{fontSize: 18, color: '#94a3b8', marginLeft: 'auto'}}>
                    No network needed ⚡
                  </div>
                </div>
              </div>

              {/* Scenario 2: CDN Hit */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 720, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                  ✅ Scenario 2: CDN Cache Hit
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#e2e8f0'}}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: 24}}>👤</div>
                    <div style={{fontSize: 13}}>User</div>
                  </div>
                  <div style={{fontSize: 20, color: '#ef4444'}}>→</div>
                  <div style={{backgroundColor: 'rgba(59, 130, 246, 0.2)', padding: '10px 16px', borderRadius: 8, border: '2px solid #3b82f6', opacity: 0.5}}>
                    <div style={{fontSize: 14, color: '#94a3b8'}}>Browser ✗</div>
                  </div>
                  <div style={{fontSize: 20, color: '#10b981'}}>→</div>
                  <div style={{backgroundColor: 'rgba(16, 185, 129, 0.3)', padding: '10px 16px', borderRadius: 8, border: '2px solid #10b981'}}>
                    <div style={{fontWeight: 'bold', color: '#34d399'}}>CDN</div>
                    <div style={{fontSize: 13, color: '#10b981'}}>✓ HIT (20ms)</div>
                  </div>
                  <div style={{fontSize: 20, color: '#10b981'}}>→</div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: 24}}>👤</div>
                    <div style={{fontSize: 13, color: '#10b981'}}>Fast</div>
                  </div>
                  <div style={{fontSize: 16, color: '#94a3b8', marginLeft: 'auto'}}>
                    Edge location 🌍
                  </div>
                </div>
              </div>

              {/* Scenario 3: Application Cache Hit */}
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 840, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12}}>
                  ✅ Scenario 3: Application Cache (Redis) Hit
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#e2e8f0'}}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: 22}}>👤</div>
                  </div>
                  <div style={{fontSize: 18}}>→</div>
                  <div style={{padding: '8px 12px', borderRadius: 6, border: '1px solid #3b82f6', opacity: 0.4, fontSize: 13}}>Browser ✗</div>
                  <div style={{fontSize: 18}}>→</div>
                  <div style={{padding: '8px 12px', borderRadius: 6, border: '1px solid #10b981', opacity: 0.4, fontSize: 13}}>CDN ✗</div>
                  <div style={{fontSize: 18, color: '#f59e0b'}}>→</div>
                  <div style={{backgroundColor: 'rgba(245, 158, 11, 0.3)', padding: '8px 12px', borderRadius: 6, border: '2px solid #f59e0b'}}>
                    <div style={{fontWeight: 'bold', color: '#fbbf24'}}>Redis</div>
                    <div style={{fontSize: 12, color: '#10b981'}}>✓ HIT (2ms)</div>
                  </div>
                  <div style={{fontSize: 18, color: '#10b981'}}>→</div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: 22}}>👤</div>
                  </div>
                  <div style={{fontSize: 15, color: '#94a3b8', marginLeft: 'auto'}}>
                    In-memory ⚡
                  </div>
                </div>
              </div>

              {/* Scenario 4: Database */}
              <div
                style={{
                  backgroundColor: 'rgba(236, 72, 153, 0.15)',
                  border: '3px solid #ec4899',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 960, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#ec4899', fontWeight: 'bold', marginBottom: 12}}>
                  ⚠️ Scenario 4: Cache Miss - Database Query (Slowest)
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#e2e8f0'}}>
                  <div style={{fontSize: 20}}>👤</div>
                  <div style={{fontSize: 16}}>→</div>
                  <div style={{padding: '6px 10px', borderRadius: 6, opacity: 0.3, fontSize: 12}}>Browser ✗</div>
                  <div style={{fontSize: 16}}>→</div>
                  <div style={{padding: '6px 10px', borderRadius: 6, opacity: 0.3, fontSize: 12}}>CDN ✗</div>
                  <div style={{fontSize: 16}}>→</div>
                  <div style={{padding: '6px 10px', borderRadius: 6, opacity: 0.3, fontSize: 12}}>Redis ✗</div>
                  <div style={{fontSize: 16, color: '#ec4899'}}>→</div>
                  <div style={{backgroundColor: 'rgba(236, 72, 153, 0.3)', padding: '6px 10px', borderRadius: 6, border: '2px solid #ec4899'}}>
                    <div style={{fontWeight: 'bold', color: '#f472b6'}}>Database 💾</div>
                    <div style={{fontSize: 11, color: '#fbbf24'}}>Query (100ms)</div>
                  </div>
                  <div style={{fontSize: 16, color: '#fbbf24'}}>→</div>
                  <div style={{fontSize: 20}}>👤</div>
                  <div style={{fontSize: 14, color: '#94a3b8', marginLeft: 'auto'}}>
                    Then populate caches ↑
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 3: Cache-Aside Pattern (1050-1650 frames / 35-55s) */}
      {frame >= 1050 && frame < 1650 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#14b8a6',
              opacity: fadeIn(frame, 1050, 20),
              textAlign: 'center',
            }}
          >
            Cache-Aside Pattern (Lazy Loading)
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={1050} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={1050} size={90} />

          <Dialogue
            speaker="junior"
            text="How does the application layer decide what to cache?"
            x={220}
            y={height - 150}
            startFrame={1080}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Cache-Aside is the most common pattern. The app checks cache first, then loads from DB on miss and stores it."
            x={width - 750}
            y={height - 280}
            startFrame={1170}
            maxWidth={720}
          />

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1650,
              opacity: fadeIn(frame, 1260, 20),
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(20, 184, 166, 0.5)',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div style={{fontSize: 28, fontWeight: 'bold', color: '#14b8a6', marginBottom: 20, textAlign: 'center'}}>
                Cache-Aside Pattern (Lazy Loading)
              </div>

              <div style={{display: 'flex', gap: 32}}>
                {/* Pseudocode */}
                <div style={{flex: 1}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      borderRadius: 12,
                      padding: 24,
                      fontFamily: 'monospace',
                      fontSize: 15,
                      lineHeight: 1.9,
                      border: '2px solid #14b8a6',
                    }}
                  >
                    <div style={{color: '#14b8a6', marginBottom: 12}}>// Read pattern</div>
                    <div style={{color: '#e2e8f0'}}>
                      <div><span style={{color: '#a78bfa'}}>function</span> getUser(userId) {'{'}</div>
                      <div style={{marginLeft: 16, color: '#94a3b8'}}>// 1. Try cache first</div>
                      <div style={{marginLeft: 16}}><span style={{color: '#fbbf24'}}>const</span> cached = redis.get(userId);</div>
                      <div style={{marginLeft: 16}}><span style={{color: '#a78bfa'}}>if</span> (cached) {'{'}</div>
                      <div style={{marginLeft: 32, color: '#10b981'}}>return cached; <span style={{color: '#94a3b8'}}>// Cache hit!</span></div>
                      <div style={{marginLeft: 16}}>{'}'}</div>
                      <div style={{marginTop: 8, marginLeft: 16, color: '#94a3b8'}}>// 2. Cache miss - query DB</div>
                      <div style={{marginLeft: 16}}><span style={{color: '#fbbf24'}}>const</span> user = db.query(userId);</div>
                      <div style={{marginTop: 8, marginLeft: 16, color: '#94a3b8'}}>// 3. Store in cache for next time</div>
                      <div style={{marginLeft: 16}}>redis.set(userId, user, <span style={{color: '#f59e0b'}}>TTL: 300s</span>);</div>
                      <div style={{marginTop: 8, marginLeft: 16, color: '#10b981'}}>return user;</div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </div>

                {/* Benefits & Considerations */}
                <div style={{flex: 1}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 16,
                    }}
                  >
                    <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                      ✓ Benefits
                    </div>
                    <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 1.8}}>
                      • Only cache what's requested<br/>
                      • App controls cache logic<br/>
                      • Works with any data store<br/>
                      • Simple to implement
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.15)',
                      border: '2px solid #f59e0b',
                      borderRadius: 12,
                      padding: 20,
                    }}
                  >
                    <div style={{fontSize: 20, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12}}>
                      ⚠️ Considerations
                    </div>
                    <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 1.8}}>
                      • Initial requests are slow (miss)<br/>
                      • Cache and DB can diverge<br/>
                      • Need invalidation strategy<br/>
                      • Thundering herd on expire
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Cache Invalidation Strategies (1650-2400 frames / 55-80s) */}
      {frame >= 1650 && frame < 2400 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#14b8a6',
              opacity: fadeIn(frame, 1650, 20),
              textAlign: 'center',
            }}
          >
            Cache Invalidation Strategies
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1650} size={90} />

          <Dialogue
            speaker="architect"
            text="The hardest problem: keeping caches in sync! There are three main approaches depending on your consistency needs."
            x={width - 750}
            y={height - 280}
            startFrame={1680}
            maxWidth={720}
          />

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
            }}
          >
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20}}>
              {/* TTL-Based */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  borderRadius: 14,
                  padding: 22,
                  opacity: fadeIn(frame, 1770, 15),
                  transform: `scale(${pulse(frame, 1770)})`,
                }}
              >
                <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 14, textAlign: 'center'}}>
                  ⏱️ TTL-Based
                </div>

                <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.8, marginBottom: 16}}>
                  Set expiration time, auto-delete when expired
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 8,
                    padding: 16,
                    fontFamily: 'monospace',
                    fontSize: 13,
                    marginBottom: 16,
                  }}
                >
                  <div style={{color: '#3b82f6'}}>redis.set(key, value,</div>
                  <div style={{color: '#fbbf24', marginLeft: 12}}>TTL: 300 // 5 min</div>
                  <div style={{color: '#3b82f6'}}>)</div>
                </div>

                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.7}}>
                  <div style={{color: '#10b981'}}>✓ Simple</div>
                  <div style={{color: '#10b981'}}>✓ Automatic cleanup</div>
                  <div style={{color: '#ef4444', marginTop: 8}}>✗ May serve stale data</div>
                </div>
              </div>

              {/* Event-Based */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 14,
                  padding: 22,
                  opacity: fadeIn(frame, 1920, 15),
                  transform: `scale(${pulse(frame, 1920)})`,
                }}
              >
                <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 14, textAlign: 'center'}}>
                  🔔 Event-Based
                </div>

                <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.8, marginBottom: 16}}>
                  Invalidate immediately when data changes
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 8,
                    padding: 16,
                    fontFamily: 'monospace',
                    fontSize: 13,
                    marginBottom: 16,
                  }}
                >
                  <div style={{color: '#10b981'}}>// On update</div>
                  <div style={{color: '#e2e8f0'}}>db.updateUser(id)</div>
                  <div style={{color: '#ef4444'}}>redis.delete(id)</div>
                  <div style={{color: '#94a3b8', marginTop: 8}}>// Or publish event</div>
                  <div style={{color: '#fbbf24'}}>pubsub.publish(</div>
                  <div style={{color: '#e2e8f0', marginLeft: 12}}>'user.updated', id</div>
                  <div style={{color: '#fbbf24'}}>)</div>
                </div>

                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.7}}>
                  <div style={{color: '#10b981'}}>✓ Always fresh</div>
                  <div style={{color: '#10b981'}}>✓ Strong consistency</div>
                  <div style={{color: '#ef4444', marginTop: 8}}>✗ More complex</div>
                </div>
              </div>

              {/* Write-Through */}
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  borderRadius: 14,
                  padding: 22,
                  opacity: fadeIn(frame, 2070, 15),
                  transform: `scale(${pulse(frame, 2070)})`,
                }}
              >
                <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 14, textAlign: 'center'}}>
                  ✍️ Write-Through
                </div>

                <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.8, marginBottom: 16}}>
                  Update cache and DB together on write
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 8,
                    padding: 16,
                    fontFamily: 'monospace',
                    fontSize: 13,
                    marginBottom: 16,
                  }}
                >
                  <div style={{color: '#f59e0b'}}>// On write</div>
                  <div style={{color: '#e2e8f0'}}>db.update(id, data)</div>
                  <div style={{color: '#06b6d4'}}>redis.set(id, data)</div>
                  <div style={{color: '#94a3b8', marginTop: 8}}>// Atomic update</div>
                </div>

                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.7}}>
                  <div style={{color: '#10b981'}}>✓ Cache always valid</div>
                  <div style={{color: '#10b981'}}>✓ Read-heavy workloads</div>
                  <div style={{color: '#ef4444', marginTop: 8}}>✗ Slower writes</div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                textAlign: 'center',
                fontSize: 19,
                color: '#fbbf24',
                fontWeight: 'bold',
                opacity: fadeIn(frame, 2220, 15),
              }}
            >
              💡 Choose based on consistency needs: TTL for eventual, Event-based for strong consistency
            </div>
          </div>
        </>
      )}

      {/* Scene 5: Best Practices (2400-3000 frames / 80-100s) */}
      {frame >= 2400 && frame <= 3000 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#14b8a6',
              opacity: fadeIn(frame, 2400, 20),
              textAlign: 'center',
            }}
          >
            Multi-Layer Caching Best Practices
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={2400} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={2400} size={90} />

          <Dialogue
            speaker="junior"
            text="This is complex! Any guidelines for getting it right?"
            x={220}
            y={height - 150}
            startFrame={2430}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Absolutely! Here are the golden rules for production multi-layer caching."
            x={width - 750}
            y={height - 280}
            startFrame={2520}
            maxWidth={680}
          />

          {frame >= 2610 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1700,
                opacity: fadeIn(frame, 2610, 20),
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(20, 184, 166, 0.15)',
                  border: '3px solid #14b8a6',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{fontSize: 30, color: '#14b8a6', fontWeight: 'bold', marginBottom: 24, textAlign: 'center'}}>
                  🏆 Production Best Practices
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontSize: 17, color: '#e2e8f0'}}>
                  <div>
                    <div style={{color: '#5eead4', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      1️⃣ Different TTLs per Layer
                    </div>
                    <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.8}}>
                      Browser: 1 hour • CDN: 1 day • Redis: 5 min • DB cache: 1 min<br/>
                      <span style={{color: '#94a3b8'}}>Closer to user = longer TTL</span>
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#5eead4', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      2️⃣ Cache Busting for Static Assets
                    </div>
                    <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.8}}>
                      Use versioned URLs: <span style={{fontFamily: 'monospace', color: '#fbbf24'}}>app.js?v=1.2.3</span><br/>
                      <span style={{color: '#94a3b8'}}>Or hash: app.abc123.js</span>
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#5eead4', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      3️⃣ Monitor Cache Hit Rates
                    </div>
                    <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.8}}>
                      Target: Browser 90% • CDN 80% • Redis 70%<br/>
                      <span style={{color: '#94a3b8'}}>Low hit rate = wasted cache</span>
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#5eead4', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      4️⃣ Cache Warming
                    </div>
                    <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.8}}>
                      Proactively load popular data on deploy<br/>
                      <span style={{color: '#94a3b8'}}>Prevent stampede on first requests</span>
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#5eead4', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      5️⃣ Graceful Degradation
                    </div>
                    <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.8}}>
                      If Redis down, serve from DB (slower but working)<br/>
                      <span style={{color: '#94a3b8'}}>Cache failures shouldn't break app</span>
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#5eead4', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      6️⃣ Separate Hot & Cold Data
                    </div>
                    <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.8}}>
                      User sessions (hot) → Redis<br/>
                      Analytics (cold) → Don't cache or long TTL
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 28,
                    padding: 20,
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 22, color: '#60a5fa', fontWeight: 'bold', marginBottom: 10}}>
                    🎯 Remember: Caching is about trade-offs
                  </div>
                  <div style={{fontSize: 17, color: '#e2e8f0'}}>
                    Fresh data vs Speed • Memory cost vs DB load • Complexity vs Performance
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
