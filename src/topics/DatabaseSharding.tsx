import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Database Sharding (Phase 3.5)
 * Covers: Horizontal partitioning, Shard key selection, Consistent hashing, Cross-shard queries, Resharding
 * Duration: 85 seconds (2550 frames at 30fps)
 */
export const DatabaseSharding: React.FC = () => {
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
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
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
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - What is Sharding? (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="Database Sharding" subtitle="Horizontal Partitioning for Massive Scale" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="When replication isn't enough, how do we scale databases to billions of rows?"
            x={220}
            y={height - 150}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="That's where sharding comes in! We split data horizontally across multiple databases."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={640}
          />

          {/* What is Sharding */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.20,
                left: width * 0.08,
                right: width * 0.08,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(20, 184, 166, 0.5)',
                borderRadius: 16,
                padding: 28,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div style={{fontSize: 32, fontWeight: 'bold', color: '#14b8a6', marginBottom: 20, textAlign: 'center'}}>
                Horizontal Partitioning 📊
              </div>

              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 20}}>
                {/* Before - Single DB */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 300, 15)}}>
                  <div style={{fontSize: 20, color: '#ef4444', fontWeight: 'bold', marginBottom: 12}}>
                    ❌ Before (Vertical Limit)
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '3px solid #ef4444',
                      borderRadius: 12,
                      padding: 24,
                    }}
                  >
                    <div style={{fontSize: 18, color: '#e2e8f0'}}>Single Database</div>
                    <div style={{fontSize: 24, color: '#fca5a5', marginTop: 8}}>1B rows 🔥</div>
                  </div>
                </div>

                {/* Arrow */}
                <div style={{fontSize: 48, color: '#14b8a6'}}>→</div>

                {/* After - Sharded */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 360, 15)}}>
                  <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                    ✓ After (Sharded)
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        style={{
                          backgroundColor: 'rgba(20, 184, 166, 0.2)',
                          border: '2px solid #14b8a6',
                          borderRadius: 10,
                          padding: 12,
                        }}
                      >
                        <span style={{fontSize: 24, color: '#5eead4'}}>Shard {num}</span>
                        <span style={{fontSize: 22, color: '#94a3b8', marginLeft: 12}}>250M rows</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Shard Key Strategies (450-1050 frames / 15-35s) */}
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
            Shard Key Strategies
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={450} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={450} size={90} />

          <Dialogue
            speaker="junior"
            text="How do we decide which data goes to which shard?"
            x={220}
            y={height - 150}
            startFrame={480}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="The shard key is critical! Let's look at three common strategies: Hash, Range, and Geographic."
            x={width - 750}
            y={height - 280}
            startFrame={600}
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
            {/* Hash-Based Sharding */}
            {frame >= 690 && (
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 20,
                  opacity: fadeIn(frame, 690, 20),
                  transform: `scale(${pulse(frame, 690)})`,
                }}
              >
                <div style={{fontSize: 28, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12}}>
                  1️⃣ Hash-Based Sharding 🔀
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>How:</span> hash(user_id) % num_shards</div>
                      <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Pro:</span> Uniform distribution</div>
                      <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Con:</span> Range queries difficult</div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 22, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                    <div style={{color: '#f59e0b'}}>// Hash example</div>
                    <div style={{color: '#e2e8f0', marginTop: 8}}>user_id = 12345</div>
                    <div style={{color: '#e2e8f0'}}>hash(12345) = 789023</div>
                    <div style={{color: '#e2e8f0'}}>789023 % 4 = <span style={{color: '#10b981'}}>3</span></div>
                    <div style={{color: '#10b981', marginTop: 8}}>→ Goes to Shard 3</div>
                  </div>
                </div>
              </div>
            )}

            {/* Range-Based Sharding */}
            {frame >= 800 && (
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 20,
                  opacity: fadeIn(frame, 800, 20),
                  transform: `scale(${pulse(frame, 800)})`,
                }}
              >
                <div style={{fontSize: 28, color: '#3b82f6', fontWeight: 'bold', marginBottom: 12}}>
                  2️⃣ Range-Based Sharding 📅
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>How:</span> Split by value ranges</div>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Pro:</span> Range queries efficient</div>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Con:</span> Can cause hot spots</div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 24, color: '#e2e8f0', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                    <div style={{color: '#60a5fa', marginBottom: 8}}>Shard by timestamp:</div>
                    <div>Shard 1: Jan-Mar 2024</div>
                    <div>Shard 2: Apr-Jun 2024</div>
                    <div>Shard 3: Jul-Sep 2024</div>
                    <div>Shard 4: Oct-Dec 2024</div>
                  </div>
                </div>
              </div>
            )}

            {/* Geographic Sharding */}
            {frame >= 910 && (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 910, 20),
                  transform: `scale(${pulse(frame, 910)})`,
                }}
              >
                <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                  3️⃣ Geographic Sharding 🌍
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div><span style={{color: '#34d399', fontWeight: 'bold'}}>How:</span> Split by location</div>
                      <div><span style={{color: '#34d399', fontWeight: 'bold'}}>Pro:</span> Low latency per region</div>
                      <div><span style={{color: '#34d399', fontWeight: 'bold'}}>Con:</span> Uneven data distribution</div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 24, color: '#e2e8f0', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                    <div style={{color: '#34d399', marginBottom: 8}}>Shard by region:</div>
                    <div>🇺🇸 Shard 1: US users</div>
                    <div>🇪🇺 Shard 2: EU users</div>
                    <div>🇯🇵 Shard 3: Asia users</div>
                    <div>🌎 Shard 4: Other regions</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 3: Consistent Hashing (1050-1500 frames / 35-50s) */}
      {frame >= 1050 && frame < 1500 && (
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
            Consistent Hashing ⭕
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1050} size={90} />

          <Dialogue
            speaker="architect"
            text="What if you need to add or remove shards? Consistent hashing minimizes data movement!"
            x={width - 750}
            y={height - 280}
            startFrame={1080}
            maxWidth={680}
          />

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1600,
              opacity: fadeIn(frame, 1170, 20),
            }}
          >
            {/* The Problem */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '3px solid #ef4444',
                borderRadius: 16,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <div style={{fontSize: 30, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ❌ Problem with Simple Hash Mod
              </div>

              <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2}}>
                <div>
                  <span style={{fontSize: 24}}>1️⃣</span> You have 4 shards: hash(key) % <span style={{color: '#fbbf24'}}>4</span>
                </div>
                <div>
                  <span style={{fontSize: 24}}>2️⃣</span> Need to add 1 more shard: hash(key) % <span style={{color: '#10b981'}}>5</span>
                </div>
                <div>
                  <span style={{fontSize: 24}}>3️⃣</span> <span style={{color: '#ef4444', fontWeight: 'bold'}}>Result: ~80% of data must be moved!</span> 🔥
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div
              style={{
                backgroundColor: 'rgba(20, 184, 166, 0.15)',
                border: '3px solid #14b8a6',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div style={{fontSize: 30, color: '#14b8a6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ✓ Consistent Hashing Solution
              </div>

              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.9}}>
                    <div style={{marginBottom: 12}}>
                      <span style={{color: '#5eead4', fontWeight: 'bold'}}>How:</span> Hash ring (0 to 2³²)
                    </div>
                    <div style={{marginBottom: 12}}>
                      <span style={{color: '#5eead4', fontWeight: 'bold'}}>Shards:</span> Placed at points on ring
                    </div>
                    <div style={{marginBottom: 12}}>
                      <span style={{color: '#5eead4', fontWeight: 'bold'}}>Keys:</span> Hash and walk clockwise to shard
                    </div>
                    <div>
                      <span style={{color: '#5eead4', fontWeight: 'bold'}}>Add shard:</span> Only ~1/N data moves!
                    </div>
                  </div>
                </div>

                <div style={{flex: 1, textAlign: 'center'}}>
                  <div style={{fontSize: 56, marginBottom: 16}}>⭕</div>
                  <div style={{fontSize: 18, color: '#94a3b8', lineHeight: 1.7}}>
                    Hash Ring<br/>
                    <span style={{fontSize: 24}}>
                      Each shard owns a segment<br/>
                      Adding shard = split 1 segment<br/>
                      <span style={{color: '#10b981', fontWeight: 'bold'}}>Minimal data movement ⚡</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Cross-Shard Queries (1500-2100 frames / 50-70s) */}
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
              color: '#14b8a6',
              opacity: fadeIn(frame, 1500, 20),
              textAlign: 'center',
            }}
          >
            Cross-Shard Queries Challenge
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={1500} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={1500} size={90} />

          <Dialogue
            speaker="junior"
            text="What if I need to query across multiple shards?"
            x={220}
            y={height - 150}
            startFrame={1530}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="That's the biggest challenge of sharding! You lose simple JOINs and aggregations."
            x={width - 750}
            y={height - 280}
            startFrame={1650}
            maxWidth={680}
          />

          <div
            style={{
              position: 'absolute',
              top: 170,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 1740, 20),
            }}
          >
            {/* The Challenge */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '3px solid #ef4444',
                borderRadius: 16,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <div style={{fontSize: 28, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ⚠️ What Becomes Difficult
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                <div>
                  ❌ <span style={{color: '#fca5a5', fontWeight: 'bold'}}>JOINs across shards</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Must fetch from all shards and merge</span>
                </div>
                <div>
                  ❌ <span style={{color: '#fca5a5', fontWeight: 'bold'}}>Global aggregations</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>COUNT, SUM across all shards</span>
                </div>
                <div>
                  ❌ <span style={{color: '#fca5a5', fontWeight: 'bold'}}>Unique constraints</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Can't guarantee uniqueness globally</span>
                </div>
                <div>
                  ❌ <span style={{color: '#fca5a5', fontWeight: 'bold'}}>Transactions</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Distributed transactions complex</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid #10b981',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                💡 Workarounds
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                <div>
                  <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                    Denormalize
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8'}}>
                    Duplicate data to avoid cross-shard queries
                  </div>
                </div>

                <div>
                  <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                    Scatter-Gather
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8'}}>
                    Query all shards, merge results in app layer
                  </div>
                </div>

                <div>
                  <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                    Shard by Tenant
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8'}}>
                    All data for one tenant in same shard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 5: Resharding (2100-2550 frames / 70-85s) */}
      {frame >= 2100 && frame <= 2550 && (
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
              opacity: fadeIn(frame, 2100, 20),
              textAlign: 'center',
            }}
          >
            Resharding Strategies
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={2100} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={2100} size={90} />

          <Dialogue
            speaker="junior"
            text="What if a shard gets too big or we need to rebalance?"
            x={220}
            y={height - 150}
            startFrame={2130}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Resharding is expensive but sometimes necessary. Let's look at strategies to minimize pain."
            x={width - 750}
            y={height - 280}
            startFrame={2250}
            maxWidth={680}
          />

          {frame >= 2340 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1600,
                opacity: fadeIn(frame, 2340, 20),
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(167, 139, 250, 0.15)',
                  border: '3px solid #a78bfa',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{fontSize: 32, color: '#c4b5fd', fontWeight: 'bold', marginBottom: 24, textAlign: 'center'}}>
                  Resharding Approaches
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2.2}}>
                  <div style={{opacity: fadeIn(frame, 2370, 15)}}>
                    <span style={{fontSize: 28}}>1️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Stop Writes</span> (Downtime)
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Freeze DB, copy data, switch over - simple but requires maintenance window
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2420, 15)}}>
                    <span style={{fontSize: 28}}>2️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Dual Writes</span> (Online)
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Write to old & new shards, migrate in background, cutover - zero downtime
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2470, 15)}}>
                    <span style={{fontSize: 28}}>3️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Virtual Shards</span> (Plan Ahead)
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Create 1000 logical shards mapped to 10 physical - just remap, no data move
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 32,
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#fbbf24',
                    fontWeight: 'bold',
                  }}
                >
                  ⚠️ Best practice: Design shard key carefully upfront - resharding is painful!
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
