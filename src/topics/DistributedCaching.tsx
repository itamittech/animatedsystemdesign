import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Distributed Caching (Phase 4.3)
 * Covers: Redis cluster, Memcached scaling, Consistency models, High availability, Failover, Sharding strategies
 * Duration: 105 seconds (3150 frames at 30fps)
 */
export const DistributedCaching: React.FC = () => {
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

      {/* Scene 1: Introduction - Why Distributed Caching? (0-480 frames / 0-16s) */}
      {frame >= 0 && frame < 480 && (
        <>
          <Title text="Distributed Caching" subtitle="Scaling Cache Beyond a Single Server" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="What happens when a single Redis server isn't enough? How do we scale caching horizontally?"
            x={220}
            y={height - 150}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="We go distributed! Multiple cache servers working together to handle massive scale. Let's see why and how."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={700}
          />

          {/* The Problem */}
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
                  🚀 Single Server Limitations
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
                      ⚠️ Problems
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      💾 <span style={{fontWeight: 'bold'}}>Memory limit:</span> Single server RAM cap<br/>
                      🔥 <span style={{fontWeight: 'bold'}}>Throughput:</span> CPU/network bottleneck<br/>
                      💥 <span style={{fontWeight: 'bold'}}>Single point of failure:</span> Server down = cache down<br/>
                      🌍 <span style={{fontWeight: 'bold'}}>Latency:</span> Distant users suffer
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
                      ✅ Distributed Solution
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      ⚡ <span style={{fontWeight: 'bold'}}>Horizontal scaling:</span> Add more nodes<br/>
                      🔄 <span style={{fontWeight: 'bold'}}>Load distribution:</span> Spread requests<br/>
                      🛡️ <span style={{fontWeight: 'bold'}}>High availability:</span> Replica failover<br/>
                      🌐 <span style={{fontWeight: 'bold'}}>Geo-distribution:</span> Regional caches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Redis Cluster Architecture (480-1080 frames / 16-36s) */}
      {frame >= 480 && frame < 1080 && (
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
              opacity: fadeIn(frame, 480, 20),
              textAlign: 'center',
            }}
          >
            Redis Cluster Architecture
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={480} size={90} />

          <Dialogue
            speaker="architect"
            text="Redis Cluster uses hash slots for sharding and master-replica for high availability. Let me show you the architecture."
            x={width - 750}
            y={height - 280}
            startFrame={510}
            maxWidth={720}
          />

          <div
            style={{
              position: 'absolute',
              top: 150,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 600, 20),
            }}
          >
            {/* Cluster Diagram */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(6, 182, 212, 0.5)',
                borderRadius: 16,
                padding: 28,
                marginBottom: 20,
              }}
            >
              <div style={{fontSize: 26, fontWeight: 'bold', color: '#06b6d4', marginBottom: 20, textAlign: 'center'}}>
                Redis Cluster: 3 Master Nodes + Replicas
              </div>

              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                {/* Master 1 */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 660, 15)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '3px solid #10b981',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 16,
                    }}
                  >
                    <div style={{fontSize: 20, color: '#34d399', fontWeight: 'bold'}}>Master 1</div>
                    <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 8}}>Slots: 0-5460</div>
                    <div style={{fontSize: 20, color: '#94a3b8'}}>(33% of data)</div>
                  </div>
                  <div style={{fontSize: 24, color: '#06b6d4', marginBottom: 8}}>↓</div>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#60a5fa'}}>Replica 1</div>
                    <div style={{fontSize: 20, color: '#94a3b8', marginTop: 4}}>Sync from M1</div>
                  </div>
                </div>

                {/* Master 2 */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 750, 15)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '3px solid #10b981',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 16,
                    }}
                  >
                    <div style={{fontSize: 20, color: '#34d399', fontWeight: 'bold'}}>Master 2</div>
                    <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 8}}>Slots: 5461-10922</div>
                    <div style={{fontSize: 20, color: '#94a3b8'}}>(33% of data)</div>
                  </div>
                  <div style={{fontSize: 24, color: '#06b6d4', marginBottom: 8}}>↓</div>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#60a5fa'}}>Replica 2</div>
                    <div style={{fontSize: 20, color: '#94a3b8', marginTop: 4}}>Sync from M2</div>
                  </div>
                </div>

                {/* Master 3 */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 840, 15)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '3px solid #10b981',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 16,
                    }}
                  >
                    <div style={{fontSize: 20, color: '#34d399', fontWeight: 'bold'}}>Master 3</div>
                    <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 8}}>Slots: 10923-16383</div>
                    <div style={{fontSize: 20, color: '#94a3b8'}}>(33% of data)</div>
                  </div>
                  <div style={{fontSize: 24, color: '#06b6d4', marginBottom: 8}}>↓</div>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#60a5fa'}}>Replica 3</div>
                    <div style={{fontSize: 20, color: '#94a3b8', marginTop: 4}}>Sync from M3</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hash Slots Explanation */}
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '3px solid #f59e0b',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 930, 15),
              }}
            >
              <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                🎯 Hash Slot Sharding (16,384 slots total)
              </div>
              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div style={{flex: 1, fontSize: 24, color: '#e2e8f0', lineHeight: 1.9}}>
                  <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Key routing:</span> CRC16(key) % 16384 = slot</div>
                  <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Data distribution:</span> Each master owns slot range</div>
                  <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Client smart:</span> Knows which node has which slots</div>
                  <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Resharding:</span> Move slots between nodes (online!)</div>
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 10,
                    padding: 20,
                    fontFamily: 'monospace',
                    fontSize: 22,
                  }}
                >
                  <div style={{color: '#f59e0b'}}>// Example</div>
                  <div style={{color: '#e2e8f0', marginTop: 8}}>key = "user:1234"</div>
                  <div style={{color: '#e2e8f0'}}>slot = CRC16("user:1234") % 16384</div>
                  <div style={{color: '#10b981', marginTop: 8}}>slot = 4501</div>
                  <div style={{color: '#06b6d4', marginTop: 8}}>→ Route to Master 1 (0-5460)</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 3: High Availability & Failover (1080-1800 frames / 36-60s) */}
      {frame >= 1080 && frame < 1800 && (
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
              opacity: fadeIn(frame, 1080, 20),
              textAlign: 'center',
            }}
          >
            High Availability & Failover
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={1080} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={1080} size={90} />

          <Dialogue
            speaker="junior"
            text="What happens if a master node fails?"
            x={220}
            y={height - 150}
            startFrame={1110}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Automatic failover! Replicas detect the failure and one gets promoted to master. The cluster stays online."
            x={width - 750}
            y={height - 280}
            startFrame={1200}
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
            {/* Failover Process */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(6, 182, 212, 0.5)',
                borderRadius: 16,
                padding: 28,
                marginBottom: 20,
                opacity: fadeIn(frame, 1290, 20),
              }}
            >
              <div style={{fontSize: 26, fontWeight: 'bold', color: '#06b6d4', marginBottom: 20, textAlign: 'center'}}>
                Automatic Failover Process
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                {/* Step 1 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    opacity: fadeIn(frame, 1350, 15),
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.3)',
                      border: '2px solid #ef4444',
                      borderRadius: 10,
                      padding: 16,
                      width: 200,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{fontSize: 18, color: '#fca5a5', fontWeight: 'bold'}}>1️⃣ Master Fails</div>
                    <div style={{fontSize: 28, marginTop: 8}}>💥</div>
                  </div>
                  <div style={{fontSize: 20, color: '#ef4444'}}>→</div>
                  <div style={{fontSize: 24, color: '#e2e8f0', flex: 1}}>
                    Master 2 crashes. Replica 2 detects via heartbeat timeout (~1-2 seconds)
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    opacity: fadeIn(frame, 1470, 15),
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.3)',
                      border: '2px solid #f59e0b',
                      borderRadius: 10,
                      padding: 16,
                      width: 200,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold'}}>2️⃣ Election</div>
                    <div style={{fontSize: 28, marginTop: 8}}>🗳️</div>
                  </div>
                  <div style={{fontSize: 20, color: '#f59e0b'}}>→</div>
                  <div style={{fontSize: 24, color: '#e2e8f0', flex: 1}}>
                    Cluster nodes vote. Replica with most recent data wins (Raft-like consensus)
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    opacity: fadeIn(frame, 1590, 15),
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '2px solid #10b981',
                      borderRadius: 10,
                      padding: 16,
                      width: 200,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{fontSize: 18, color: '#34d399', fontWeight: 'bold'}}>3️⃣ Promotion</div>
                    <div style={{fontSize: 28, marginTop: 8}}>👑</div>
                  </div>
                  <div style={{fontSize: 20, color: '#10b981'}}>→</div>
                  <div style={{fontSize: 24, color: '#e2e8f0', flex: 1}}>
                    Replica 2 becomes new Master 2. Takes over slots 5461-10922. Cluster updates routing
                  </div>
                </div>
              </div>
            </div>

            {/* Consistency Trade-offs */}
            <div
              style={{
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                border: '3px solid #8b5cf6',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 1710, 15),
              }}
            >
              <div style={{fontSize: 24, color: '#a78bfa', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ⚠️ Consistency Trade-off
              </div>
              <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2}}>
                <div>• Redis uses <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>asynchronous replication</span> by default (performance over consistency)</div>
                <div>• During failover, writes to old master after it failed but before promotion = <span style={{color: '#ef4444'}}>lost</span></div>
                <div>• Use <span style={{color: '#10b981', fontWeight: 'bold'}}>WAIT command</span> for synchronous writes (slower but safer)</div>
                <div>• Trade-off: <span style={{color: '#fbbf24'}}>Availability + Speed</span> vs <span style={{color: '#06b6d4'}}>Strong Consistency</span></div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Memcached vs Redis Cluster (1800-2400 frames / 60-80s) */}
      {frame >= 1800 && frame < 2400 && (
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
              opacity: fadeIn(frame, 1800, 20),
              textAlign: 'center',
            }}
          >
            Memcached vs Redis Cluster
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1800} size={90} />

          <Dialogue
            speaker="architect"
            text="Memcached and Redis have different distributed approaches. Let me show you when to use each."
            x={width - 750}
            y={height - 280}
            startFrame={1830}
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
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
              {/* Memcached */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 1920, 15),
                }}
              >
                <div style={{fontSize: 26, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Memcached (Client-Side Sharding)
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.9, marginBottom: 20}}>
                  <div style={{color: '#60a5fa', fontWeight: 'bold', marginBottom: 12}}>Architecture:</div>
                  <div>• No cluster mode, just independent nodes</div>
                  <div>• Client does consistent hashing</div>
                  <div>• Simple, fast, stateless servers</div>
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>✓ Best For:</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Simple key-value caching</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Session storage</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Pure cache (data loss OK)</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Multi-threaded workloads</div>

                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 12, marginBottom: 8}}>✗ Limitations:</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• No persistence</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• No replication (manual)</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Only strings (no data structures)</div>
                </div>
              </div>

              {/* Redis Cluster */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 2040, 15),
                }}
              >
                <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Redis Cluster (Built-in Sharding)
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.9, marginBottom: 20}}>
                  <div style={{color: '#34d399', fontWeight: 'bold', marginBottom: 12}}>Architecture:</div>
                  <div>• Built-in cluster mode with slots</div>
                  <div>• Automatic failover & replication</div>
                  <div>• Rich data structures</div>
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>✓ Best For:</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Complex data (lists, sets, sorted sets)</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Pub/sub messaging</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Persistence needed</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• High availability critical</div>

                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 12, marginBottom: 8}}>✗ Limitations:</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Single-threaded per core</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• More complex setup</div>
                  <div style={{fontSize: 24, marginLeft: 12}}>• Higher memory overhead</div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                textAlign: 'center',
                fontSize: 24,
                color: '#fbbf24',
                fontWeight: 'bold',
                opacity: fadeIn(frame, 2220, 15),
              }}
            >
              💡 Rule of thumb: Memcached for simple cache, Redis for everything else
            </div>
          </div>
        </>
      )}

      {/* Scene 5: Best Practices (2400-3150 frames / 80-105s) */}
      {frame >= 2400 && frame <= 3150 && (
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
              opacity: fadeIn(frame, 2400, 20),
              textAlign: 'center',
            }}
          >
            Production Best Practices
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={2400} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={2400} size={90} />

          <Dialogue
            speaker="junior"
            text="This is powerful but complex! How do we run this reliably in production?"
            x={220}
            y={height - 150}
            startFrame={2430}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Here are the battle-tested practices for running distributed caches at scale."
            x={width - 750}
            y={height - 280}
            startFrame={2550}
            maxWidth={720}
          />

          {frame >= 2640 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1700,
                opacity: fadeIn(frame, 2640, 20),
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.15)',
                  border: '3px solid #06b6d4',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{fontSize: 30, color: '#06b6d4', fontWeight: 'bold', marginBottom: 24, textAlign: 'center'}}>
                  🏆 Distributed Caching in Production
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontSize: 24, color: '#e2e8f0'}}>
                  <div>
                    <div style={{color: '#22d3ee', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      1️⃣ Plan Your Capacity
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      • Calculate memory needs: data size × replication factor<br/>
                      • Add 30% overhead for fragmentation<br/>
                      • Min 3 masters for cluster quorum<br/>
                      • Monitor memory usage, evict before OOM
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#22d3ee', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      2️⃣ Connection Pooling
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      • Use connection pools in app layer<br/>
                      • Reuse connections, avoid per-request<br/>
                      • Set reasonable timeouts (50-100ms)<br/>
                      • Circuit breaker for failover scenarios
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#22d3ee', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      3️⃣ Monitor Everything
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      • Hit rate (target 80%+)<br/>
                      • Eviction rate (low is good)<br/>
                      • Replication lag (&lt; 1s)<br/>
                      • CPU, memory, network saturation
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#22d3ee', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      4️⃣ Hot Key Detection
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      • Identify keys with &gt;10K req/sec<br/>
                      • Use local cache for hot keys<br/>
                      • Or replicate hot data to multiple slots<br/>
                      • Avoid celebrity problem (one key slams node)
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#22d3ee', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      5️⃣ Gradual Rollouts
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      • Never upgrade entire cluster at once<br/>
                      • Rolling restart: one replica → master → next<br/>
                      • Test resharding in staging first<br/>
                      • Have rollback plan ready
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#22d3ee', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
                      6️⃣ Data Expiration Strategy
                    </div>
                    <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
                      • Always set TTLs (avoid indefinite growth)<br/>
                      • Use LRU eviction when memory full<br/>
                      • Separate namespaces for different TTLs<br/>
                      • Monitor expired vs evicted ratio
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 28,
                    padding: 20,
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 22, color: '#34d399', fontWeight: 'bold', marginBottom: 10}}>
                    🎯 Key Takeaway
                  </div>
                  <div style={{fontSize: 24, color: '#e2e8f0'}}>
                    Distributed caching = Horizontal scale + High availability<br/>
                    But: More complexity, eventual consistency, operational overhead
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
