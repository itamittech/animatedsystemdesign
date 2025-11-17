import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * SQL Databases & Relational Design (Phase 3.2)
 * Covers: When to use SQL, PostgreSQL/MySQL internals, Indexing strategies, Transactions, Vertical scaling limits
 * Duration: 85 seconds (2550 frames at 30fps)
 */
export const SQLDatabases: React.FC = () => {
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
          border: '2px solid rgba(59, 130, 246, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(59, 130, 246, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - When to Use SQL (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="SQL Databases & Relational Design" subtitle="PostgreSQL, MySQL & When to Use Them" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="We covered SQL vs NoSQL. When should I specifically choose SQL databases?"
            x={220}
            y={height - 150}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Let's dive deep into SQL databases, how they work, and when they're the right choice."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* When to Use SQL */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.20,
                left: width * 0.10,
                right: width * 0.10,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(59, 130, 246, 0.5)',
                borderRadius: 16,
                padding: 28,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div style={{fontSize: 32, fontWeight: 'bold', color: '#3b82f6', marginBottom: 20, textAlign: 'center'}}>
                When SQL Databases Shine 🌟
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                <div style={{opacity: fadeIn(frame, 300, 15)}}>
                  ✓ <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Data Integrity Critical</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Banking, finance, e-commerce orders</span>
                </div>
                <div style={{opacity: fadeIn(frame, 330, 15)}}>
                  ✓ <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Complex Relationships</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>JOINs across multiple tables</span>
                </div>
                <div style={{opacity: fadeIn(frame, 360, 15)}}>
                  ✓ <span style={{color: '#60a5fa', fontWeight: 'bold'}}>ACID Guarantees Needed</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Transactions must be reliable</span>
                </div>
                <div style={{opacity: fadeIn(frame, 390, 15)}}>
                  ✓ <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Rich Query Capabilities</span><br/>
                  <span style={{fontSize: 24, color: '#94a3b8'}}>Aggregations, analytics, reporting</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: PostgreSQL & MySQL Internals (450-900 frames / 15-30s) */}
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
              color: '#3b82f6',
              opacity: fadeIn(frame, 450, 20),
              textAlign: 'center',
            }}
          >
            PostgreSQL vs MySQL: Under the Hood
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={450} size={90} />

          <Dialogue
            speaker="architect"
            text="Both are powerful, but they have different strengths and internals."
            x={width - 750}
            y={height - 280}
            startFrame={480}
            maxWidth={580}
          />

          <div
            style={{
              position: 'absolute',
              top: 150,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
            }}
          >
            <div style={{display: 'flex', gap: 30}}>
              {/* PostgreSQL */}
              {frame >= 540 && (
                <div style={{flex: 1, opacity: fadeIn(frame, 540, 20)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '3px solid #3b82f6',
                      borderRadius: 16,
                      padding: 24,
                      height: '100%',
                    }}
                  >
                    <div style={{fontSize: 36, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                      🐘 PostgreSQL
                    </div>

                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                      <div style={{marginBottom: 12}}>
                        <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Architecture:</span>
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Process-based (fork per connection)
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • MVCC for concurrency
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • WAL (Write-Ahead Logging)
                      </div>

                      <div style={{marginTop: 20, marginBottom: 12}}>
                        <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Strengths:</span>
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Advanced features (JSON, arrays, CTEs)
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Full ACID compliance
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Extensible (custom types, functions)
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Better for complex queries
                      </div>

                      <div style={{marginTop: 20, fontSize: 24, color: '#10b981', fontWeight: 'bold'}}>
                        ✓ Best for: Analytics, complex apps
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MySQL */}
              {frame >= 660 && (
                <div style={{flex: 1, opacity: fadeIn(frame, 660, 20)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.2)',
                      border: '3px solid #f59e0b',
                      borderRadius: 16,
                      padding: 24,
                      height: '100%',
                    }}
                  >
                    <div style={{fontSize: 36, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                      🐬 MySQL
                    </div>

                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                      <div style={{marginBottom: 12}}>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Architecture:</span>
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Thread-based (lighter weight)
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Pluggable storage engines
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • InnoDB (default, ACID)
                      </div>

                      <div style={{marginTop: 20, marginBottom: 12}}>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Strengths:</span>
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Faster for simple queries
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Lower memory footprint
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Easier replication setup
                      </div>
                      <div style={{fontSize: 24, marginLeft: 16}}>
                        • Better for read-heavy workloads
                      </div>

                      <div style={{marginTop: 20, fontSize: 24, color: '#10b981', fontWeight: 'bold'}}>
                        ✓ Best for: Web apps, read-heavy
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Scene 3: Indexing Strategies (900-1500 frames / 30-50s) */}
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
              color: '#3b82f6',
              opacity: fadeIn(frame, 900, 20),
              textAlign: 'center',
            }}
          >
            Indexing Strategies: B-tree vs Hash
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={900} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={900} size={90} />

          <Dialogue
            speaker="junior"
            text="You mentioned indexes earlier. What are the different types?"
            x={220}
            y={height - 150}
            startFrame={930}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! The two main types are B-tree and Hash indexes. Each has specific use cases."
            x={width - 750}
            y={height - 280}
            startFrame={1050}
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
            {/* B-tree Index */}
            {frame >= 1140 && (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 24,
                  opacity: fadeIn(frame, 1140, 20),
                  transform: `scale(${pulse(frame, 1140)})`,
                }}
              >
                <div style={{fontSize: 34, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  B-tree Index (Default) 🌳
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>How it works:</span> Balanced tree structure
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Lookup time:</span> O(log n)
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Best for:</span> Range queries, sorting
                      </div>
                      <div>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Use cases:</span> &gt;, &lt;, BETWEEN, ORDER BY
                      </div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 24, color: '#94a3b8'}}>
                    <div style={{fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                      <div style={{color: '#10b981', fontWeight: 'bold'}}>-- B-tree example</div>
                      <div style={{color: '#e2e8f0', marginTop: 8}}>CREATE INDEX idx_created_at</div>
                      <div style={{color: '#e2e8f0'}}>ON orders(created_at);</div>

                      <div style={{color: '#34d399', marginTop: 14, fontWeight: 'bold'}}>-- Perfect for ranges:</div>
                      <div style={{color: '#e2e8f0', marginTop: 4}}>SELECT * FROM orders</div>
                      <div style={{color: '#e2e8f0'}}>WHERE created_at &gt; '2024-01-01'</div>
                      <div style={{color: '#e2e8f0'}}>ORDER BY created_at DESC;</div>

                      <div style={{color: '#10b981', marginTop: 12, fontWeight: 'bold'}}>✓ Index used efficiently!</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hash Index */}
            {frame >= 1290 && (
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  borderRadius: 16,
                  padding: 28,
                  opacity: fadeIn(frame, 1290, 20),
                  transform: `scale(${pulse(frame, 1290)})`,
                }}
              >
                <div style={{fontSize: 34, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Hash Index #️⃣
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>How it works:</span> Hash table lookup
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Lookup time:</span> O(1) - super fast!
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Best for:</span> Exact equality matches
                      </div>
                      <div>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Limitation:</span> No range queries
                      </div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 24, color: '#94a3b8'}}>
                    <div style={{fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                      <div style={{color: '#f59e0b', fontWeight: 'bold'}}>-- Hash index example</div>
                      <div style={{color: '#e2e8f0', marginTop: 8}}>CREATE INDEX idx_user_id</div>
                      <div style={{color: '#e2e8f0'}}>ON sessions(user_id)</div>
                      <div style={{color: '#e2e8f0'}}>USING HASH;</div>

                      <div style={{color: '#fbbf24', marginTop: 14, fontWeight: 'bold'}}>-- Perfect for equality:</div>
                      <div style={{color: '#e2e8f0', marginTop: 4}}>SELECT * FROM sessions</div>
                      <div style={{color: '#e2e8f0'}}>WHERE user_id = 12345;</div>

                      <div style={{color: '#10b981', marginTop: 12, fontWeight: 'bold'}}>✓ O(1) instant lookup!</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 4: Transactions & Isolation Levels (1500-2100 frames / 50-70s) */}
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
              color: '#3b82f6',
              opacity: fadeIn(frame, 1500, 20),
              textAlign: 'center',
            }}
          >
            Transactions & Isolation Levels
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1500} size={90} />

          <Dialogue
            speaker="architect"
            text="Isolation levels control how transactions see each other's changes. It's a trade-off between consistency and performance."
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
            {/* Isolation Levels Grid */}
            {frame >= 1620 && (
              <div style={{opacity: fadeIn(frame, 1620, 20)}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                  {/* Read Uncommitted */}
                  {frame >= 1640 && (
                    <div
                      style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.15)',
                        border: '3px solid #ef4444',
                        borderRadius: 14,
                        padding: 20,
                        opacity: fadeIn(frame, 1640, 15),
                      }}
                    >
                      <div style={{fontSize: 26, color: '#ef4444', fontWeight: 'bold', marginBottom: 8}}>
                        Read Uncommitted
                      </div>
                      <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.6}}>
                        • <span style={{color: '#fca5a5'}}>Lowest isolation</span><br/>
                        • Reads uncommitted changes (dirty reads)<br/>
                        • Fastest, but risky<br/>
                        <span style={{color: '#ef4444', fontWeight: 'bold'}}>❌ Rarely used in production</span>
                      </div>
                    </div>
                  )}

                  {/* Read Committed */}
                  {frame >= 1720 && (
                    <div
                      style={{
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        border: '3px solid #f59e0b',
                        borderRadius: 14,
                        padding: 20,
                        opacity: fadeIn(frame, 1720, 15),
                      }}
                    >
                      <div style={{fontSize: 26, color: '#f59e0b', fontWeight: 'bold', marginBottom: 8}}>
                        Read Committed (Default)
                      </div>
                      <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.6}}>
                        • Only reads committed data<br/>
                        • No dirty reads<br/>
                        • Good balance<br/>
                        <span style={{color: '#10b981', fontWeight: 'bold'}}>✓ Most common choice</span>
                      </div>
                    </div>
                  )}

                  {/* Repeatable Read */}
                  {frame >= 1800 && (
                    <div
                      style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        border: '3px solid #3b82f6',
                        borderRadius: 14,
                        padding: 20,
                        opacity: fadeIn(frame, 1800, 15),
                      }}
                    >
                      <div style={{fontSize: 26, color: '#3b82f6', fontWeight: 'bold', marginBottom: 8}}>
                        Repeatable Read
                      </div>
                      <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.6}}>
                        • Same data throughout transaction<br/>
                        • Prevents non-repeatable reads<br/>
                        • MySQL InnoDB default<br/>
                        <span style={{color: '#60a5fa', fontWeight: 'bold'}}>⚖️ Balance consistency/performance</span>
                      </div>
                    </div>
                  )}

                  {/* Serializable */}
                  {frame >= 1880 && (
                    <div
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        border: '3px solid #10b981',
                        borderRadius: 14,
                        padding: 20,
                        opacity: fadeIn(frame, 1880, 15),
                      }}
                    >
                      <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>
                        Serializable
                      </div>
                      <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.6}}>
                        • <span style={{color: '#34d399'}}>Highest isolation</span><br/>
                        • Transactions execute serially<br/>
                        • Complete consistency<br/>
                        <span style={{color: '#f59e0b', fontWeight: 'bold'}}>⚠️ Slowest, use when critical</span>
                      </div>
                    </div>
                  )}
                </div>

                {frame >= 1980 && (
                  <div
                    style={{
                      marginTop: 24,
                      textAlign: 'center',
                      fontSize: 20,
                      color: '#94a3b8',
                      opacity: fadeIn(frame, 1980, 15),
                    }}
                  >
                    Higher isolation = More consistency, Less concurrency ⚖️
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 5: Vertical Scaling Limits (2100-2550 frames / 70-85s) */}
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
              color: '#3b82f6',
              opacity: fadeIn(frame, 2100, 20),
              textAlign: 'center',
            }}
          >
            Vertical Scaling Limits
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={2100} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={2100} size={90} />

          <Dialogue
            speaker="junior"
            text="What happens when a single SQL database can't handle the load?"
            x={220}
            y={height - 150}
            startFrame={2130}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="You hit vertical scaling limits. Then you need read replicas, sharding, or consider NoSQL."
            x={width - 750}
            y={height - 280}
            startFrame={2250}
            maxWidth={640}
          />

          {frame >= 2340 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1500,
                opacity: fadeIn(frame, 2340, 20),
              }}
            >
              {/* Scaling Path */}
              <div
                style={{
                  backgroundColor: 'rgba(167, 139, 250, 0.15)',
                  border: '3px solid #a78bfa',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{fontSize: 32, color: '#a78bfa', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                  When You Outgrow a Single SQL Server
                </div>

                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                  <div style={{opacity: fadeIn(frame, 2370, 15)}}>
                    <span style={{fontSize: 28}}>1️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Optimize First</span>
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Add indexes, query optimization, connection pooling
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2410, 15), marginTop: 12}}>
                    <span style={{fontSize: 28}}>2️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Vertical Scaling</span>
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Bigger server (more CPU, RAM, SSD) - <span style={{color: '#f59e0b'}}>Has limits!</span>
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2450, 15), marginTop: 12}}>
                    <span style={{fontSize: 28}}>3️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Read Replicas</span>
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Scale reads horizontally (master → replicas)
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2490, 15), marginTop: 12}}>
                    <span style={{fontSize: 28}}>4️⃣</span> <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Sharding or NoSQL</span>
                    <div style={{fontSize: 24, marginLeft: 40, color: '#94a3b8'}}>
                      Split data across databases or switch to NoSQL
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 28,
                    textAlign: 'center',
                    fontSize: 18,
                    color: '#10b981',
                    fontWeight: 'bold',
                  }}
                >
                  💡 Single PostgreSQL can handle millions of rows and thousands of QPS!
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
