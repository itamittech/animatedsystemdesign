import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Database Fundamentals (Phase 3.1)
 * Covers: ACID properties, SQL vs NoSQL, Normalization vs Denormalization, Indexes, CAP Theorem
 * Duration: 70 seconds (2100 frames at 30fps)
 */
export const DatabaseFundamentals: React.FC = () => {
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
          border: '2px solid rgba(236, 72, 153, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #ec4899 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(236, 72, 153, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="Database Fundamentals" subtitle="The Core Concepts Every Engineer Must Know" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.50} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.50} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="Sarah, databases are everywhere. What fundamentals do I need to master?"
            x={width * 0.05}
            y={height * 0.60}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Let's cover the 5 core concepts that apply to all databases."
            x={width * 0.72 - 280}
            y={height * 0.60}
            startFrame={180}
            maxWidth={540}
          />

          {/* Key Topics Preview */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.20,
                left: width * 0.10,
                right: width * 0.10,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(236, 72, 153, 0.5)',
                borderRadius: 16,
                padding: 28,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div style={{fontSize: 32, fontWeight: 'bold', color: '#ec4899', marginBottom: 20, textAlign: 'center'}}>
                5 Core Database Concepts
              </div>
              <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 2, textAlign: 'center'}}>
                <div style={{opacity: fadeIn(frame, 300, 15)}}>✅ ACID Properties</div>
                <div style={{opacity: fadeIn(frame, 330, 15)}}>✅ SQL vs NoSQL</div>
                <div style={{opacity: fadeIn(frame, 360, 15)}}>✅ Normalization vs Denormalization</div>
                <div style={{opacity: fadeIn(frame, 390, 15)}}>✅ Indexes & Query Optimization</div>
                <div style={{opacity: fadeIn(frame, 420, 15)}}>✅ CAP Theorem</div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: ACID Properties (450-900 frames / 15-30s) */}
      {frame >= 450 && frame < 900 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 60,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 52,
              fontWeight: 'bold',
              color: '#ec4899',
              opacity: fadeIn(frame, 450, 20),
              textAlign: 'center',
            }}
          >
            ACID Properties 🔒
          </div>

          <Dialogue
            speaker="architect"
            text="ACID ensures data reliability in transactional databases. Every transaction must follow these guarantees."
            x={width * 0.72 - 320}
            y={height * 0.70}
            startFrame={480}
            maxWidth={640}
          />

          {/* ACID Cards */}
          <div
            style={{
              position: 'absolute',
              top: 180,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1600,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            {/* Atomicity */}
            {frame >= 520 && (
              <div
                style={{
                  backgroundColor: 'rgba(236, 72, 153, 0.15)',
                  border: '3px solid #ec4899',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 520, 20),
                  transform: `scale(${pulse(frame, 520)})`,
                }}
              >
                <div style={{display: 'flex', gap: 20}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 28, color: '#ec4899', fontWeight: 'bold', marginBottom: 6}}>
                      A - Atomicity 🔒
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0'}}>
                      All-or-nothing: Either the entire transaction succeeds or fails completely
                    </div>
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8', fontFamily: 'monospace', flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 8}}>
                    Example: Bank transfer<br/>
                    • Debit $100 from Alice<br/>
                    • Credit $100 to Bob<br/>
                    <span style={{color: '#10b981'}}>✓ Both succeed OR both fail</span>
                  </div>
                </div>
              </div>
            )}

            {/* Consistency */}
            {frame >= 600 && (
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 600, 20),
                  transform: `scale(${pulse(frame, 600)})`,
                }}
              >
                <div style={{display: 'flex', gap: 20}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 28, color: '#3b82f6', fontWeight: 'bold', marginBottom: 6}}>
                      C - Consistency ✓
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0'}}>
                      Data must satisfy all validation rules and constraints
                    </div>
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8', fontFamily: 'monospace', flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 8}}>
                    Examples:<br/>
                    • Foreign key constraints<br/>
                    • Unique email addresses<br/>
                    • Check constraints (age &gt; 0)
                  </div>
                </div>
              </div>
            )}

            {/* Isolation */}
            {frame >= 680 && (
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 680, 20),
                  transform: `scale(${pulse(frame, 680)})`,
                }}
              >
                <div style={{display: 'flex', gap: 20}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 28, color: '#f59e0b', fontWeight: 'bold', marginBottom: 6}}>
                      I - Isolation 🔐
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0'}}>
                      Concurrent transactions don't interfere with each other
                    </div>
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8', fontFamily: 'monospace', flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 8}}>
                    Isolation Levels:<br/>
                    • Read Committed<br/>
                    • Repeatable Read<br/>
                    • Serializable
                  </div>
                </div>
              </div>
            )}

            {/* Durability */}
            {frame >= 760 && (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 14,
                  padding: 20,
                  opacity: fadeIn(frame, 760, 20),
                  transform: `scale(${pulse(frame, 760)})`,
                }}
              >
                <div style={{display: 'flex', gap: 20}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 6}}>
                      D - Durability 💾
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0'}}>
                      Committed data survives system crashes (persisted to disk)
                    </div>
                  </div>
                  <div style={{fontSize: 24, color: '#94a3b8', fontFamily: 'monospace', flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 8}}>
                    Mechanisms:<br/>
                    • Write-ahead logging (WAL)<br/>
                    • Replicated storage<br/>
                    • Fsync to disk
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 3: SQL vs NoSQL Decision Tree (900-1350 frames / 30-45s) */}
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
              color: '#ec4899',
              opacity: fadeIn(frame, 900, 20),
              textAlign: 'center',
            }}
          >
            SQL vs NoSQL: When to Use Each?
          </div>

          <Dialogue
            speaker="junior"
            text="How do I choose between SQL and NoSQL databases?"
            x={width * 0.05}
            y={height * 0.70}
            startFrame={930}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="It depends on your data structure, scale, and consistency requirements. Let's compare!"
            x={width * 0.72 - 300}
            y={height * 0.70}
            startFrame={1050}
            maxWidth={600}
          />

          {/* Comparison Table */}
          {frame >= 1140 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1600,
                opacity: fadeIn(frame, 1140, 20),
              }}
            >
              <div style={{display: 'flex', gap: 40}}>
                {/* SQL Column */}
                <div style={{flex: 1, opacity: fadeIn(frame, 1160, 20)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '3px solid #3b82f6',
                      borderRadius: 16,
                      padding: 24,
                    }}
                  >
                    <div style={{fontSize: 38, color: '#3b82f6', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                      SQL (Relational)
                    </div>

                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{marginBottom: 14}}>
                        <span style={{color: '#3b82f6', fontWeight: 'bold'}}>✓ Use when:</span>
                      </div>
                      <div>• Structured, relational data</div>
                      <div>• ACID guarantees needed</div>
                      <div>• Complex queries & JOINs</div>
                      <div>• Vertical scaling is OK</div>
                      <div>• Schema stability</div>
                    </div>

                    <div style={{marginTop: 24, fontSize: 24, color: '#94a3b8'}}>
                      <div style={{fontWeight: 'bold', color: '#60a5fa', marginBottom: 10}}>Examples:</div>
                      <div>PostgreSQL, MySQL, Oracle</div>
                      <div style={{marginTop: 12, fontFamily: 'monospace', fontSize: 24, color: '#cbd5e1'}}>
                        <span style={{color: '#10b981'}}>Use cases:</span><br/>
                        Banking, E-commerce,<br/>
                        ERP systems, Analytics
                      </div>
                    </div>
                  </div>
                </div>

                {/* NoSQL Column */}
                <div style={{flex: 1, opacity: fadeIn(frame, 1220, 20)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.2)',
                      border: '3px solid #f59e0b',
                      borderRadius: 16,
                      padding: 24,
                    }}
                  >
                    <div style={{fontSize: 38, color: '#f59e0b', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                      NoSQL (Non-Relational)
                    </div>

                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{marginBottom: 14}}>
                        <span style={{color: '#f59e0b', fontWeight: 'bold'}}>✓ Use when:</span>
                      </div>
                      <div>• Unstructured/flexible data</div>
                      <div>• Horizontal scaling needed</div>
                      <div>• High write throughput</div>
                      <div>• Eventual consistency OK</div>
                      <div>• Schema flexibility</div>
                    </div>

                    <div style={{marginTop: 24, fontSize: 24, color: '#94a3b8'}}>
                      <div style={{fontWeight: 'bold', color: '#fbbf24', marginBottom: 10}}>Examples:</div>
                      <div>MongoDB, DynamoDB, Cassandra</div>
                      <div style={{marginTop: 12, fontFamily: 'monospace', fontSize: 24, color: '#cbd5e1'}}>
                        <span style={{color: '#10b981'}}>Use cases:</span><br/>
                        Social media, IoT,<br/>
                        Real-time analytics, Logs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Normalization, Denormalization & Indexes (1350-1800 frames / 45-60s) */}
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
              color: '#ec4899',
              opacity: fadeIn(frame, 1350, 20),
              textAlign: 'center',
            }}
          >
            Data Modeling & Performance
          </div>

          <Dialogue
            speaker="architect"
            text="Two key concepts: how you structure data and how you query it efficiently."
            x={width * 0.72 - 320}
            y={height * 0.70}
            startFrame={1380}
            maxWidth={640}
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
            {/* Normalization vs Denormalization */}
            {frame >= 1440 && (
              <div
                style={{
                  backgroundColor: 'rgba(167, 139, 250, 0.15)',
                  border: '3px solid #a78bfa',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 24,
                  opacity: fadeIn(frame, 1440, 20),
                }}
              >
                <div style={{fontSize: 34, color: '#a78bfa', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Normalization vs Denormalization
                </div>

                <div style={{display: 'flex', gap: 32}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 24, color: '#c4b5fd', marginBottom: 10, fontWeight: 'bold'}}>
                      ✓ Normalization
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Split data into multiple tables
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Eliminate duplication
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Slower reads (JOINs needed)
                    </div>
                    <div style={{fontSize: 18, color: '#10b981', marginTop: 10, fontWeight: 'bold'}}>
                      ✓ Better for writes & updates
                    </div>
                  </div>

                  <div style={{flex: 1}}>
                    <div style={{fontSize: 24, color: '#fbbf24', marginBottom: 10, fontWeight: 'bold'}}>
                      ✓ Denormalization
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Duplicate data for speed
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Single-table queries
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Faster reads (no JOINs)
                    </div>
                    <div style={{fontSize: 18, color: '#10b981', marginTop: 10, fontWeight: 'bold'}}>
                      ✓ Better for read-heavy apps
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Indexes */}
            {frame >= 1560 && (
              <div
                style={{
                  backgroundColor: 'rgba(20, 184, 166, 0.15)',
                  border: '3px solid #14b8a6',
                  borderRadius: 16,
                  padding: 28,
                  opacity: fadeIn(frame, 1560, 20),
                }}
              >
                <div style={{fontSize: 34, color: '#14b8a6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Indexes: Speed Up Queries 🚀
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#5eead4', fontWeight: 'bold'}}>What:</span> Data structure (B-tree) for fast lookups
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#5eead4', fontWeight: 'bold'}}>Trade-off:</span> Faster reads ↔ Slower writes
                      </div>
                      <div>
                        <span style={{color: '#5eead4', fontWeight: 'bold'}}>When:</span> Columns in WHERE, JOIN, ORDER BY
                      </div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 24, color: '#94a3b8'}}>
                    <div style={{fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                      <div style={{color: '#ef4444'}}>-- Without index: Full scan</div>
                      <div style={{color: '#e2e8f0', marginTop: 4}}>SELECT * FROM users</div>
                      <div style={{color: '#e2e8f0'}}>WHERE email = 'alice@ex.com';</div>
                      <div style={{color: '#f59e0b', marginTop: 10, fontWeight: 'bold'}}>⏱ 500ms (1M rows scanned)</div>

                      <div style={{color: '#10b981', marginTop: 16, fontWeight: 'bold'}}>-- With index on email:</div>
                      <div style={{color: '#e2e8f0', marginTop: 4}}>CREATE INDEX idx_email</div>
                      <div style={{color: '#e2e8f0'}}>ON users(email);</div>
                      <div style={{color: '#10b981', marginTop: 10, fontWeight: 'bold'}}>⏱ 5ms (instant!) ⚡</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 5: CAP Theorem (1800-2100 frames / 60-70s) */}
      {frame >= 1800 && frame <= 2100 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#ec4899',
              opacity: fadeIn(frame, 1800, 20),
              textAlign: 'center',
            }}
          >
            CAP Theorem: The Impossible Triangle
          </div>

          <Dialogue
            speaker="junior"
            text="What about distributed databases? Any trade-offs?"
            x={width * 0.05}
            y={height * 0.70}
            startFrame={1830}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="The CAP theorem says you can only pick 2 out of 3 guarantees during network partitions!"
            x={width * 0.72 - 320}
            y={height * 0.70}
            startFrame={1950}
            maxWidth={640}
          />

          {frame >= 2040 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1500,
                opacity: fadeIn(frame, 2040, 20),
              }}
            >
              {/* CAP Triangle Visualization */}
              <div style={{textAlign: 'center', marginBottom: 24}}>
                <div style={{fontSize: 24, color: '#fbbf24', marginBottom: 24, fontWeight: 'bold'}}>
                  Pick any 2 (You can't have all 3 during network partition)
                </div>

                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                  {/* Consistency */}
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '3px solid #3b82f6',
                      borderRadius: 16,
                      padding: 24,
                      width: 400,
                      transform: `scale(${pulse(frame, 2040)})`,
                    }}
                  >
                    <div style={{fontSize: 56}}>C</div>
                    <div style={{fontSize: 30, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>
                      Consistency
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0'}}>
                      All nodes see the same data at the same time
                    </div>
                  </div>

                  {/* Availability */}
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      border: '3px solid #10b981',
                      borderRadius: 16,
                      padding: 24,
                      width: 400,
                      transform: `scale(${pulse(frame, 2050)})`,
                    }}
                  >
                    <div style={{fontSize: 56}}>A</div>
                    <div style={{fontSize: 30, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
                      Availability
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0'}}>
                      Every request gets a response (success/failure)
                    </div>
                  </div>

                  {/* Partition Tolerance */}
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.2)',
                      border: '3px solid #f59e0b',
                      borderRadius: 16,
                      padding: 24,
                      width: 400,
                      transform: `scale(${pulse(frame, 2060)})`,
                    }}
                  >
                    <div style={{fontSize: 56}}>P</div>
                    <div style={{fontSize: 30, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>
                      Partition Tolerance
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0'}}>
                      System works despite network failures
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-world Examples */}
              <div
                style={{
                  marginTop: 32,
                  fontSize: 20,
                  color: '#e2e8f0',
                  display: 'flex',
                  justifyContent: 'space-around',
                  textAlign: 'center',
                }}
              >
                <div>
                  <span style={{color: '#3b82f6', fontWeight: 'bold', fontSize: 22}}>CP Systems</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>PostgreSQL, MongoDB</span>
                </div>
                <div>
                  <span style={{color: '#10b981', fontWeight: 'bold', fontSize: 22}}>AP Systems</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Cassandra, DynamoDB</span>
                </div>
                <div>
                  <span style={{color: '#f59e0b', fontWeight: 'bold', fontSize: 22}}>CA Systems</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Traditional RDBMS (single node)</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
