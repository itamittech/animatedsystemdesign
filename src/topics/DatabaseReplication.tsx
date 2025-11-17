import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Database Replication (Phase 3.4)
 * Covers: Master-slave, Master-master, Sync vs Async, Read replicas, Replication lag
 * Duration: 80 seconds (2400 frames at 30fps)
 */
export const DatabaseReplication: React.FC = () => {
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
          border: '2px solid rgba(167, 139, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(167, 139, 250, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="Database Replication" subtitle="Scaling Reads & Ensuring High Availability" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="How do databases handle failures and scale reads beyond a single server?"
            x={220}
            y={height - 280}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="That's where replication comes in! Let's explore how databases copy data across multiple servers."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={640}
          />

          {/* Why Replication */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.20,
                left: width * 0.10,
                right: width * 0.10,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(167, 139, 250, 0.5)',
                borderRadius: 16,
                padding: 28,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div style={{fontSize: 32, fontWeight: 'bold', color: '#a78bfa', marginBottom: 20, textAlign: 'center'}}>
                Why Replicate Databases? 🔄
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                <div style={{opacity: fadeIn(frame, 300, 15), textAlign: 'center'}}>
                  <div style={{fontSize: 48, marginBottom: 10}}>📈</div>
                  <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Scalability</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Handle more read traffic</span>
                </div>
                <div style={{opacity: fadeIn(frame, 340, 15), textAlign: 'center'}}>
                  <div style={{fontSize: 48, marginBottom: 10}}>🛡️</div>
                  <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>High Availability</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Survive server failures</span>
                </div>
                <div style={{opacity: fadeIn(frame, 380, 15), textAlign: 'center'}}>
                  <div style={{fontSize: 48, marginBottom: 10}}>🌍</div>
                  <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Geo-Distribution</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Reduce latency globally</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Master-Slave Replication (450-900 frames / 15-30s) */}
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
              color: '#a78bfa',
              opacity: fadeIn(frame, 450, 20),
              textAlign: 'center',
            }}
          >
            Master-Slave Replication
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={450} size={90} />

          <Dialogue
            speaker="architect"
            text="The most common pattern: One master handles writes, replicas handle reads."
            x={width - 750}
            y={height - 280}
            startFrame={480}
            maxWidth={600}
          />

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1600,
              opacity: fadeIn(frame, 540, 20),
            }}
          >
            {/* Architecture Diagram */}
            <div
              style={{
                backgroundColor: 'rgba(167, 139, 250, 0.15)',
                border: '3px solid #a78bfa',
                borderRadius: 16,
                padding: 32,
                marginBottom: 24,
              }}
            >
              <div style={{fontSize: 28, color: '#c4b5fd', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                How It Works
              </div>

              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 24}}>
                {/* Client */}
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 48}}>👤</div>
                  <div style={{fontSize: 18, color: '#e2e8f0', marginTop: 8}}>Client</div>
                </div>

                {/* Arrow to Master */}
                <div style={{fontSize: 32, color: '#10b981'}}>→</div>

                {/* Master */}
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    borderRadius: 12,
                    padding: 20,
                    transform: `scale(${pulse(frame, 570)})`,
                  }}
                >
                  <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold'}}>🟢 MASTER</div>
                  <div style={{fontSize: 24, color: '#e2e8f0', marginTop: 8}}>Writes ✍️</div>
                </div>

                {/* Arrow to Slaves */}
                <div style={{fontSize: 32, color: '#3b82f6'}}>→</div>

                {/* Slaves */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold'}}>🔵 Replica 1</div>
                    <div style={{fontSize: 20, color: '#e2e8f0'}}>Reads 📖</div>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold'}}>🔵 Replica 2</div>
                    <div style={{fontSize: 20, color: '#e2e8f0'}}>Reads 📖</div>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold'}}>🔵 Replica 3</div>
                    <div style={{fontSize: 20, color: '#e2e8f0'}}>Reads 📖</div>
                  </div>
                </div>
              </div>

              <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                <div>✓ <span style={{color: '#10b981', fontWeight: 'bold'}}>Master:</span> Accepts all writes, propagates changes to replicas</div>
                <div>✓ <span style={{color: '#3b82f6', fontWeight: 'bold'}}>Replicas:</span> Read-only copies, automatically sync from master</div>
                <div>✓ <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Failover:</span> If master dies, promote a replica to master</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 3: Master-Master Replication (900-1350 frames / 30-45s) */}
      {frame >= 900 && frame < 1350 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#a78bfa',
              opacity: fadeIn(frame, 900, 20),
              textAlign: 'center',
            }}
          >
            Master-Master (Multi-Master) Replication
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={900} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={900} size={90} />

          <Dialogue
            speaker="junior"
            text="Can multiple databases accept writes at the same time?"
            x={220}
            y={height - 280}
            startFrame={930}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Yes! Master-Master lets both servers accept writes. But it comes with complexity."
            x={width - 750}
            y={height - 280}
            startFrame={1050}
            maxWidth={640}
          />

          <div
            style={{
              position: 'absolute',
              top: 170,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1600,
              opacity: fadeIn(frame, 1140, 20),
            }}
          >
            <div style={{display: 'flex', gap: 30}}>
              {/* Diagram */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                  Both Accept Writes ✍️✍️
                </div>

                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 20}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                      borderRadius: 12,
                      padding: 24,
                      transform: `scale(${pulse(frame, 1170)})`,
                    }}
                  >
                    <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold'}}>🟢 Master 1</div>
                    <div style={{fontSize: 24, color: '#e2e8f0', marginTop: 10}}>Writes & Reads</div>
                  </div>

                  <div style={{fontSize: 40, color: '#fbbf24'}}>⇄</div>

                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                      borderRadius: 12,
                      padding: 24,
                      transform: `scale(${pulse(frame, 1200)})`,
                    }}
                  >
                    <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold'}}>🟢 Master 2</div>
                    <div style={{fontSize: 24, color: '#e2e8f0', marginTop: 10}}>Writes & Reads</div>
                  </div>
                </div>

                <div style={{fontSize: 24, color: '#94a3b8', textAlign: 'center', marginTop: 20}}>
                  Bi-directional replication
                </div>
              </div>

              {/* Pros & Cons */}
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 20}}>
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    borderRadius: 14,
                    padding: 20,
                  }}
                >
                  <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
                    ✓ Benefits
                  </div>
                  <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                    • No single point of failure<br/>
                    • Write to closest master (low latency)<br/>
                    • Both can serve traffic
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                    borderRadius: 14,
                    padding: 20,
                  }}
                >
                  <div style={{fontSize: 22, color: '#ef4444', fontWeight: 'bold', marginBottom: 10}}>
                    ⚠️ Challenges
                  </div>
                  <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                    • Write conflicts (same row updated)<br/>
                    • Need conflict resolution logic<br/>
                    • More complex to manage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Synchronous vs Asynchronous (1350-1800 frames / 45-60s) */}
      {frame >= 1350 && frame < 1800 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#a78bfa',
              opacity: fadeIn(frame, 1350, 20),
              textAlign: 'center',
            }}
          >
            Synchronous vs Asynchronous Replication
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1350} size={90} />

          <Dialogue
            speaker="architect"
            text="This is the critical trade-off: consistency versus performance."
            x={width - 750}
            y={height - 280}
            startFrame={1380}
            maxWidth={560}
          />

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 1460, 20),
            }}
          >
            <div style={{display: 'flex', gap: 30}}>
              {/* Synchronous */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6', boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{fontSize: 32, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Synchronous 🔒
                </div>

                <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.9}}>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#60a5fa', fontWeight: 'bold'}}>How:</span> Wait for replica ACK
                  </div>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Guarantee:</span> All replicas have data
                  </div>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Performance:</span> Slower writes ⏱️
                  </div>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Use when:</span> Zero data loss critical
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 20,
                    padding: 16,
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 10,
                    fontSize: 22,
                    fontFamily: 'monospace',
                    color: '#e2e8f0',
                  }}
                >
                  <div style={{color: '#3b82f6'}}>// Write flow</div>
                  <div style={{marginTop: 4}}>1. Client writes to master</div>
                  <div>2. Master writes to replicas</div>
                  <div>3. <span style={{color: '#fbbf24'}}>WAIT</span> for replica ACKs</div>
                  <div>4. Return success to client</div>
                  <div style={{color: '#10b981', marginTop: 8}}>✓ Guaranteed consistency</div>
                </div>
              </div>

              {/* Asynchronous */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{fontSize: 32, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Asynchronous ⚡
                </div>

                <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.9}}>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>How:</span> Fire-and-forget
                  </div>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Guarantee:</span> Eventual consistency
                  </div>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Performance:</span> Fast writes 🚀
                  </div>
                  <div style={{marginBottom: 14}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Use when:</span> Speed matters most
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 20,
                    padding: 16,
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 10,
                    fontSize: 22,
                    fontFamily: 'monospace',
                    color: '#e2e8f0',
                  }}
                >
                  <div style={{color: '#f59e0b'}}>// Write flow</div>
                  <div style={{marginTop: 4}}>1. Client writes to master</div>
                  <div>2. Master <span style={{color: '#10b981'}}>immediately</span> returns</div>
                  <div>3. Replicas sync in background</div>
                  <div>4. Small window of inconsistency</div>
                  <div style={{color: '#fbbf24', marginTop: 8}}>⚡ Most common choice</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 5: Read Replicas & Replication Lag (1800-2400 frames / 60-80s) */}
      {frame >= 1800 && frame <= 2400 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#a78bfa',
              opacity: fadeIn(frame, 1800, 20),
              textAlign: 'center',
            }}
          >
            Read Replicas & Replication Lag
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={1800} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={1800} size={90} />

          <Dialogue
            speaker="junior"
            text="What's replication lag and how do we handle it?"
            x={220}
            y={height - 280}
            startFrame={1830}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Lag is the delay between master write and replica sync. It's the price of async replication."
            x={width - 750}
            y={height - 280}
            startFrame={1950}
            maxWidth={680}
          />

          {frame >= 2040 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1600,
                opacity: fadeIn(frame, 2040, 20),
              }}
            >
              {/* Replication Lag Explained */}
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 24,
                }}
              >
                <div style={{fontSize: 30, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  ⚠️ Replication Lag Problem
                </div>

                <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 2}}>
                  <div>
                    <span style={{fontSize: 24}}>1️⃣</span> User writes comment → <span style={{color: '#10b981'}}>Master ACKs instantly</span>
                  </div>
                  <div>
                    <span style={{fontSize: 24}}>2️⃣</span> User refreshes page → <span style={{color: '#ef4444'}}>Reads from replica (out of date!)</span>
                  </div>
                  <div>
                    <span style={{fontSize: 24}}>3️⃣</span> User doesn't see their comment → <span style={{color: '#fbbf24'}}>Lag = 500ms to 5 seconds</span>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  💡 Handling Replication Lag
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      Read Your Writes
                    </div>
                    <div style={{fontSize: 24, color: '#94a3b8'}}>
                      After write, read from master for that user
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      Monotonic Reads
                    </div>
                    <div style={{fontSize: 24, color: '#94a3b8'}}>
                      Always read from same replica for a session
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      Accept Lag
                    </div>
                    <div style={{fontSize: 24, color: '#94a3b8'}}>
                      For non-critical data (view counts, analytics)
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
                  }}
                >
                  💡 Most apps use async replication with "read your writes" pattern
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
