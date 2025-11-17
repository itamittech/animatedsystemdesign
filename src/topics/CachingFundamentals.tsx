import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Caching Fundamentals (Phase 4.1)
 * Covers: Cache hit/miss, Eviction policies, Write strategies, TTL, Cache invalidation, Stampede problem
 * Duration: 90 seconds (2700 frames at 30fps)
 */
export const CachingFundamentals: React.FC = () => {
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
          gap: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '2px solid rgba(6, 182, 212, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(6, 182, 212, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - Why Caching? (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="Caching Fundamentals" subtitle="Speed Up Your Applications with Smart Data Storage" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="Sarah, everyone talks about caching. What exactly is it and why does it matter?"
            x={220}
            y={height - 150}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="Caching is storing frequently accessed data in faster storage. It's the difference between 1ms and 100ms response times!"
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={680}
          />

          {/* The Problem - Without Cache */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.18,
                left: width * 0.08,
                right: width * 0.08,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '3px solid rgba(6, 182, 212, 0.5)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{fontSize: 28, fontWeight: 'bold', color: '#06b6d4', marginBottom: 20, textAlign: 'center'}}>
                  ⚡ The Speed Problem
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, opacity: fadeIn(frame, 330, 15)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '2px solid #ef4444',
                      borderRadius: 12,
                      padding: 24,
                    }}
                  >
                    <div style={{fontSize: 22, color: '#ef4444', fontWeight: 'bold', marginBottom: 12}}>
                      ❌ Without Cache
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      Every request hits the database<br/>
                      💾 Database query: <span style={{color: '#fbbf24'}}>100ms</span><br/>
                      📊 Network overhead: <span style={{color: '#fbbf24'}}>20ms</span><br/>
                      ⏱️ <span style={{fontWeight: 'bold', color: '#ef4444'}}>Total: 120ms per request</span>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      padding: 24,
                    }}
                  >
                    <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                      ✅ With Cache
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      Frequently accessed data in memory<br/>
                      ⚡ Cache lookup: <span style={{color: '#10b981'}}>1ms</span><br/>
                      🚀 In-memory access: <span style={{color: '#10b981'}}>instant</span><br/>
                      ⏱️ <span style={{fontWeight: 'bold', color: '#10b981'}}>Total: 1ms (120x faster!)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Cache Hit vs Cache Miss (450-900 frames / 15-30s) */}
      {frame >= 450 && frame < 900 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#06b6d4',
              opacity: fadeIn(frame, 450, 20),
              textAlign: 'center',
            }}
          >
            Cache Hit vs Cache Miss
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={450} size={90} />

          <Dialogue
            speaker="architect"
            text="Understanding cache hits and misses is crucial. A hit means data is in cache, a miss means we fetch from the database."
            x={width - 750}
            y={height - 280}
            startFrame={480}
            maxWidth={700}
          />

          <div
            style={{
              position: 'absolute',
              top: 150,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 570, 20),
            }}
          >
            {/* Cache Hit Flow */}
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                borderRadius: 16,
                padding: 24,
                marginBottom: 20,
              }}
            >
              <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ✅ Cache Hit (Fast Path)
              </div>

              <div style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 32, marginBottom: 8}}>👤</div>
                  <div style={{fontSize: 24, color: '#e2e8f0'}}>Client</div>
                </div>

                <div style={{fontSize: 28, color: '#10b981'}}>→</div>

                <div
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.3)',
                    border: '3px solid #06b6d4',
                    borderRadius: 12,
                    padding: 20,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 24, marginBottom: 8}}>⚡</div>
                  <div style={{fontSize: 18, color: '#06b6d4', fontWeight: 'bold'}}>Cache</div>
                  <div style={{fontSize: 22, color: '#10b981', marginTop: 8}}>Data found! ✓</div>
                </div>

                <div style={{fontSize: 28, color: '#10b981'}}>→</div>

                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 32, marginBottom: 8}}>👤</div>
                  <div style={{fontSize: 24, color: '#e2e8f0'}}>Client</div>
                  <div style={{fontSize: 22, color: '#10b981', marginTop: 4}}>1ms response</div>
                </div>
              </div>
            </div>

            {/* Cache Miss Flow */}
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 720, 15),
              }}
            >
              <div style={{fontSize: 26, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ⚠️ Cache Miss (Slow Path)
              </div>

              <div style={{display: 'flex', gap: 22, alignItems: 'center', justifyContent: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 28, marginBottom: 8}}>👤</div>
                  <div style={{fontSize: 22, color: '#e2e8f0'}}>Client</div>
                </div>

                <div style={{fontSize: 24, color: '#f59e0b'}}>→</div>

                <div
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    border: '2px solid #06b6d4',
                    borderRadius: 10,
                    padding: 16,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 20, marginBottom: 6}}>⚡</div>
                  <div style={{fontSize: 24, color: '#06b6d4', fontWeight: 'bold'}}>Cache</div>
                  <div style={{fontSize: 20, color: '#f59e0b', marginTop: 6}}>Not found ✗</div>
                </div>

                <div style={{fontSize: 24, color: '#f59e0b'}}>→</div>

                <div
                  style={{
                    backgroundColor: 'rgba(236, 72, 153, 0.2)',
                    border: '2px solid #ec4899',
                    borderRadius: 10,
                    padding: 16,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 20, marginBottom: 6}}>💾</div>
                  <div style={{fontSize: 24, color: '#ec4899', fontWeight: 'bold'}}>Database</div>
                  <div style={{fontSize: 20, color: '#cbd5e1', marginTop: 6}}>Fetch data</div>
                </div>

                <div style={{fontSize: 24, color: '#10b981'}}>→</div>

                <div
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    border: '2px solid #06b6d4',
                    borderRadius: 10,
                    padding: 16,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 24, color: '#06b6d4', fontWeight: 'bold'}}>Store in cache</div>
                </div>

                <div style={{fontSize: 24, color: '#10b981'}}>→</div>

                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 28, marginBottom: 6}}>👤</div>
                  <div style={{fontSize: 22, color: '#e2e8f0'}}>Client</div>
                  <div style={{fontSize: 20, color: '#fbbf24', marginTop: 4}}>100ms response</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 3: Eviction Policies (900-1500 frames / 30-50s) */}
      {frame >= 900 && frame < 1500 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#06b6d4',
              opacity: fadeIn(frame, 900, 20),
              textAlign: 'center',
            }}
          >
            Cache Eviction Policies
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={900} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={900} size={90} />

          <Dialogue
            speaker="junior"
            text="What happens when the cache is full and we need to add new data?"
            x={220}
            y={height - 150}
            startFrame={930}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="We need eviction policies! They decide what to remove. Let's look at the three most common strategies."
            x={width - 750}
            y={height - 280}
            startFrame={1020}
            maxWidth={700}
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
            {/* LRU */}
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                borderRadius: 16,
                padding: 24,
                marginBottom: 18,
                opacity: fadeIn(frame, 1110, 15),
                transform: `scale(${pulse(frame, 1110)})`,
              }}
            >
              <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                1️⃣ LRU (Least Recently Used) 🕐
              </div>

              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                    <div><span style={{color: '#34d399', fontWeight: 'bold'}}>How:</span> Remove oldest accessed item</div>
                    <div><span style={{color: '#34d399', fontWeight: 'bold'}}>Best for:</span> Temporal locality (recent data)</div>
                    <div><span style={{color: '#34d399', fontWeight: 'bold'}}>Use case:</span> News feeds, session data</div>
                  </div>
                </div>

                <div style={{flex: 1, fontSize: 22, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                  <div style={{color: '#10b981'}}>// Cache state</div>
                  <div style={{color: '#e2e8f0', marginTop: 8}}>Cache: [A(5m ago), B(2m ago), C(1m ago)]</div>
                  <div style={{color: '#fbbf24', marginTop: 12}}>// New item D arrives, cache full</div>
                  <div style={{color: '#e2e8f0', marginTop: 4}}>Evict: A (least recently used)</div>
                  <div style={{color: '#10b981', marginTop: 8}}>Cache: [B, C, D] ✓</div>
                </div>
              </div>
            </div>

            {/* LFU */}
            <div
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '3px solid #3b82f6', boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                borderRadius: 16,
                padding: 24,
                marginBottom: 18,
                opacity: fadeIn(frame, 1230, 15),
                transform: `scale(${pulse(frame, 1230)})`,
              }}
            >
              <div style={{fontSize: 28, color: '#3b82f6', fontWeight: 'bold', marginBottom: 12}}>
                2️⃣ LFU (Least Frequently Used) 📊
              </div>

              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                    <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>How:</span> Remove least accessed item</div>
                    <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Best for:</span> Frequency-based patterns</div>
                    <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Use case:</span> Popular content, trending topics</div>
                  </div>
                </div>

                <div style={{flex: 1, fontSize: 22, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                  <div style={{color: '#3b82f6'}}>// Access counts</div>
                  <div style={{color: '#e2e8f0', marginTop: 8}}>A: 100 hits, B: 50 hits, C: 10 hits</div>
                  <div style={{color: '#fbbf24', marginTop: 12}}>// New item D arrives</div>
                  <div style={{color: '#e2e8f0', marginTop: 4}}>Evict: C (least frequently used)</div>
                  <div style={{color: '#10b981', marginTop: 8}}>Keep hot data! ✓</div>
                </div>
              </div>
            </div>

            {/* FIFO */}
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 1350, 15),
                transform: `scale(${pulse(frame, 1350)})`,
              }}
            >
              <div style={{fontSize: 28, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12}}>
                3️⃣ FIFO (First In, First Out) 🚪
              </div>

              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                    <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>How:</span> Remove oldest inserted item</div>
                    <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Best for:</span> Simple queue-like behavior</div>
                    <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Use case:</span> Basic caching, rotating logs</div>
                  </div>
                </div>

                <div style={{flex: 1, fontSize: 22, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                  <div style={{color: '#f59e0b'}}>// Insertion order</div>
                  <div style={{color: '#e2e8f0', marginTop: 8}}>Queue: [A (first), B, C (last)]</div>
                  <div style={{color: '#fbbf24', marginTop: 12}}>// New item D arrives</div>
                  <div style={{color: '#e2e8f0', marginTop: 4}}>Evict: A (first in)</div>
                  <div style={{color: '#94a3b8', marginTop: 8}}>Simple but less efficient</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Write Strategies (1500-2100 frames / 50-70s) */}
      {frame >= 1500 && frame < 2100 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#06b6d4',
              opacity: fadeIn(frame, 1500, 20),
              textAlign: 'center',
            }}
          >
            Cache Write Strategies
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1500} size={90} />

          <Dialogue
            speaker="architect"
            text="When data changes, how do we update the cache? There are three main strategies with different trade-offs."
            x={width - 750}
            y={height - 280}
            startFrame={1530}
            maxWidth={680}
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
              {/* Write-Through */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 1620, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  Write-Through ✍️
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8, marginBottom: 16}}>
                  Write to cache AND database simultaneously
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.7}}>
                  <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>✓ Pros:</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Cache always consistent</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• No data loss risk</div>

                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 12, marginBottom: 8}}>✗ Cons:</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Slower writes (2 ops)</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Higher latency</div>
                </div>
              </div>

              {/* Write-Back */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6', boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 1740, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#3b82f6', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  Write-Back ⚡
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8, marginBottom: 16}}>
                  Write to cache only, sync to DB later
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.7}}>
                  <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>✓ Pros:</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Fast writes</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Batching possible</div>

                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 12, marginBottom: 8}}>✗ Cons:</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Data loss if crash</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Complex sync logic</div>
                </div>
              </div>

              {/* Write-Around */}
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 1860, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  Write-Around 🔄
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8, marginBottom: 16}}>
                  Write to DB only, skip cache
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.7}}>
                  <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>✓ Pros:</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Avoid cache pollution</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Good for rare writes</div>

                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 12, marginBottom: 8}}>✗ Cons:</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Cache miss on read</div>
                  <div style={{fontSize: 20, marginLeft: 12}}>• Inconsistency window</div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                textAlign: 'center',
                fontSize: 18,
                color: '#fbbf24',
                fontWeight: 'bold',
                opacity: fadeIn(frame, 1980, 15),
              }}
            >
              💡 Most systems use Write-Through for consistency or Write-Back for performance
            </div>
          </div>
        </>
      )}

      {/* Scene 5: TTL & Cache Stampede (2100-2700 frames / 70-90s) */}
      {frame >= 2100 && frame <= 2700 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#06b6d4',
              opacity: fadeIn(frame, 2100, 20),
              textAlign: 'center',
            }}
          >
            TTL & Cache Stampede Problem
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={2100} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={2100} size={90} />

          <Dialogue
            speaker="junior"
            text="How do we keep cache data fresh? And what's the stampede problem?"
            x={220}
            y={height - 150}
            startFrame={2130}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great questions! TTL expires old data, but when many requests hit an expired key simultaneously, we get a stampede."
            x={width - 750}
            y={height - 280}
            startFrame={2220}
            maxWidth={720}
          />

          {frame >= 2310 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1700,
                opacity: fadeIn(frame, 2310, 20),
              }}
            >
              {/* TTL */}
              <div
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.15)',
                  border: '3px solid #06b6d4',
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 20,
                }}
              >
                <div style={{fontSize: 26, color: '#06b6d4', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  ⏱️ TTL (Time-to-Live)
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2}}>
                  <div>• <span style={{color: '#22d3ee', fontWeight: 'bold'}}>What:</span> Each cache entry has an expiration time</div>
                  <div>• <span style={{color: '#22d3ee', fontWeight: 'bold'}}>Example:</span> Cache user session for 30 minutes</div>
                  <div>• <span style={{color: '#22d3ee', fontWeight: 'bold'}}>Benefit:</span> Automatic cleanup, always fresh-ish data</div>
                  <div>• <span style={{color: '#22d3ee', fontWeight: 'bold'}}>Trade-off:</span> Longer TTL = stale data, Shorter TTL = more DB hits</div>
                </div>
              </div>

              {/* Cache Stampede */}
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 2460, 15),
                }}
              >
                <div style={{fontSize: 26, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  🐘 Cache Stampede Problem
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  Popular cache key expires → 1000 requests simultaneously hit the database!
                </div>

                <div style={{display: 'flex', gap: 32}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 18, color: '#fca5a5', fontWeight: 'bold', marginBottom: 12}}>
                      The Problem:
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      1. Cache key expires<br/>
                      2. First request: cache miss → query DB<br/>
                      3. Next 999 requests arrive before cache update<br/>
                      4. All 1000 requests hit database 💥<br/>
                      5. Database overload!
                    </div>
                  </div>

                  <div style={{flex: 1}}>
                    <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                      Solutions:
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      ✓ <span style={{color: '#34d399'}}>Locking:</span> Only first request fetches<br/>
                      ✓ <span style={{color: '#34d399'}}>Probabilistic early expiration</span><br/>
                      ✓ <span style={{color: '#34d399'}}>Background refresh</span> before expiry<br/>
                      ✓ <span style={{color: '#34d399'}}>Stale-while-revalidate</span> pattern
                    </div>
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
