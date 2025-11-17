import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * NoSQL Databases (Phase 3.3)
 * Covers: Document stores, Key-value stores, Column-family, Graph databases, Use case matrix
 * Duration: 90 seconds (2700 frames at 30fps)
 */
export const NoSQLDatabases: React.FC = () => {
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
          border: '2px solid rgba(245, 158, 11, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 16, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(245, 158, 11, 0.3)'}} />
        <div style={{fontSize: 14, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 16}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - 4 Types of NoSQL (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="NoSQL Databases" subtitle="Choosing the Right Type for Your Data" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="NoSQL isn't just one thing, right? What are the different types?"
            x={220}
            y={height - 150}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! There are 4 main types, each optimized for different data patterns and use cases."
            x={width - 750}
            y={height - 150}
            startFrame={180}
            maxWidth={600}
          />

          {/* 4 Types Overview */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.20,
                left: width * 0.08,
                right: width * 0.08,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                {/* Document Store */}
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '3px solid #10b981',
                    borderRadius: 14,
                    padding: 20,
                    opacity: fadeIn(frame, 300, 15),
                    transform: `scale(${pulse(frame, 300)})`,
                  }}
                >
                  <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>
                    📄 Document Stores
                  </div>
                  <div style={{fontSize: 16, color: '#e2e8f0'}}>
                    JSON-like documents<br/>
                    MongoDB, DynamoDB
                  </div>
                </div>

                {/* Key-Value */}
                <div
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '3px solid #f59e0b',
                    borderRadius: 14,
                    padding: 20,
                    opacity: fadeIn(frame, 340, 15),
                    transform: `scale(${pulse(frame, 340)})`,
                  }}
                >
                  <div style={{fontSize: 28, color: '#f59e0b', fontWeight: 'bold', marginBottom: 8}}>
                    🔑 Key-Value Stores
                  </div>
                  <div style={{fontSize: 16, color: '#e2e8f0'}}>
                    Simple key → value lookups<br/>
                    Redis, Memcached
                  </div>
                </div>

                {/* Column-Family */}
                <div
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    border: '3px solid #3b82f6',
                    borderRadius: 14,
                    padding: 20,
                    opacity: fadeIn(frame, 380, 15),
                    transform: `scale(${pulse(frame, 380)})`,
                  }}
                >
                  <div style={{fontSize: 28, color: '#3b82f6', fontWeight: 'bold', marginBottom: 8}}>
                    📊 Column-Family
                  </div>
                  <div style={{fontSize: 16, color: '#e2e8f0'}}>
                    Wide-column storage<br/>
                    Cassandra, HBase
                  </div>
                </div>

                {/* Graph */}
                <div
                  style={{
                    backgroundColor: 'rgba(236, 72, 153, 0.15)',
                    border: '3px solid #ec4899',
                    borderRadius: 14,
                    padding: 20,
                    opacity: fadeIn(frame, 420, 15),
                    transform: `scale(${pulse(frame, 420)})`,
                  }}
                >
                  <div style={{fontSize: 28, color: '#ec4899', fontWeight: 'bold', marginBottom: 8}}>
                    🕸️ Graph Databases
                  </div>
                  <div style={{fontSize: 16, color: '#e2e8f0'}}>
                    Nodes & relationships<br/>
                    Neo4j, Amazon Neptune
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Document Stores (450-900 frames / 15-30s) */}
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
              color: '#10b981',
              opacity: fadeIn(frame, 450, 20),
              textAlign: 'center',
            }}
          >
            📄 Document Stores: MongoDB & DynamoDB
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={450} size={90} />

          <Dialogue
            speaker="architect"
            text="Document stores are perfect for flexible, nested data. Think JSON objects in a database."
            x={width - 750}
            y={height - 150}
            startFrame={480}
            maxWidth={640}
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
            {/* How It Works */}
            {frame >= 540 && (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 24,
                  opacity: fadeIn(frame, 540, 20),
                }}
              >
                <div style={{fontSize: 32, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  How Document Stores Work
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 19, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Data model:</span> Nested JSON documents
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Schema:</span> Flexible, schema-less
                      </div>
                      <div style={{marginBottom: 10}}>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Queries:</span> Rich query language
                      </div>
                      <div>
                        <span style={{color: '#34d399', fontWeight: 'bold'}}>Scaling:</span> Horizontal (sharding)
                      </div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 14, color: '#94a3b8'}}>
                    <div style={{fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                      <div style={{color: '#10b981', fontWeight: 'bold'}}>// MongoDB document example</div>
                      <div style={{color: '#e2e8f0', marginTop: 8}}>{'{'}</div>
                      <div style={{color: '#e2e8f0', marginLeft: 16}}>"_id": "user123",</div>
                      <div style={{color: '#e2e8f0', marginLeft: 16}}>"name": "Alice",</div>
                      <div style={{color: '#e2e8f0', marginLeft: 16}}>"email": "alice@ex.com",</div>
                      <div style={{color: '#e2e8f0', marginLeft: 16}}>"address": {'{'}</div>
                      <div style={{color: '#e2e8f0', marginLeft: 32}}>"city": "SF",</div>
                      <div style={{color: '#e2e8f0', marginLeft: 32}}>"zip": "94102"</div>
                      <div style={{color: '#e2e8f0', marginLeft: 16}}>{'},'}</div>
                      <div style={{color: '#e2e8f0', marginLeft: 16}}>"orders": [...]</div>
                      <div style={{color: '#e2e8f0'}}>{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Use Cases */}
            {frame >= 690 && (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  padding: 28,
                  opacity: fadeIn(frame, 690, 20),
                }}
              >
                <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  Perfect For
                </div>
                <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                  <div>✓ Content management systems</div>
                  <div>✓ User profiles & catalogs</div>
                  <div>✓ Mobile/web apps (rapid iteration)</div>
                  <div>✓ Real-time analytics dashboards</div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 3: Key-Value & Column-Family (900-1500 frames / 30-50s) */}
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
              color: '#f59e0b',
              opacity: fadeIn(frame, 900, 20),
              textAlign: 'center',
            }}
          >
            Key-Value & Column-Family Stores
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={900} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={900} size={90} />

          <Dialogue
            speaker="junior"
            text="What about caching and high-scale writes?"
            x={220}
            y={height - 150}
            startFrame={930}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="That's where key-value stores like Redis and column-family stores like Cassandra excel!"
            x={width - 750}
            y={height - 150}
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
            {/* Key-Value Stores */}
            {frame >= 1140 && (
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 24,
                  opacity: fadeIn(frame, 1140, 20),
                  transform: `scale(${pulse(frame, 1140)})`,
                }}
              >
                <div style={{fontSize: 34, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  🔑 Key-Value: Redis & Memcached
                </div>

                <div style={{display: 'flex', gap: 32}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 19, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Structure:</span> Simple key → value</div>
                      <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Speed:</span> In-memory, sub-ms latency</div>
                      <div><span style={{color: '#fbbf24', fontWeight: 'bold'}}>Use for:</span> Caching, sessions, leaderboards</div>
                    </div>
                    <div style={{marginTop: 16, fontSize: 17, color: '#10b981', fontWeight: 'bold'}}>
                      ⚡ 100,000+ ops/sec per node!
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 15, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                    <div style={{color: '#f59e0b'}}>// Redis examples</div>
                    <div style={{color: '#e2e8f0', marginTop: 8}}>SET user:123 "{'{"name":"Alice"}'}"</div>
                    <div style={{color: '#e2e8f0', marginTop: 8}}>GET user:123</div>
                    <div style={{color: '#10b981', marginTop: 12}}>→ "{'{"name":"Alice"}'}"</div>
                    <div style={{color: '#94a3b8', marginTop: 14}}>// TTL support</div>
                    <div style={{color: '#e2e8f0'}}>SETEX session:xyz 3600 "data"</div>
                    <div style={{color: '#94a3b8', fontSize: 13}}>(expires in 1 hour)</div>
                  </div>
                </div>
              </div>
            )}

            {/* Column-Family */}
            {frame >= 1290 && (
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  borderRadius: 16,
                  padding: 28,
                  opacity: fadeIn(frame, 1290, 20),
                  transform: `scale(${pulse(frame, 1290)})`,
                }}
              >
                <div style={{fontSize: 34, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  📊 Column-Family: Cassandra & HBase
                </div>

                <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 19, color: '#e2e8f0', lineHeight: 1.8}}>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Structure:</span> Rows with dynamic columns</div>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Writes:</span> Extremely fast (append-only)</div>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Scale:</span> Petabytes of data</div>
                      <div><span style={{color: '#60a5fa', fontWeight: 'bold'}}>Use for:</span> Time-series, IoT, logs</div>
                    </div>
                  </div>

                  <div style={{flex: 1, fontSize: 16, color: '#e2e8f0'}}>
                    <div style={{backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 10}}>
                      <div style={{color: '#60a5fa', fontWeight: 'bold', marginBottom: 10}}>Perfect for:</div>
                      <div style={{lineHeight: 1.8}}>
                        • Netflix viewing history<br/>
                        • Apple iCloud data<br/>
                        • Time-series metrics<br/>
                        • Massive write throughput
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 4: Graph Databases (1500-2100 frames / 50-70s) */}
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
              color: '#ec4899',
              opacity: fadeIn(frame, 1500, 20),
              textAlign: 'center',
            }}
          >
            🕸️ Graph Databases: Neo4j
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={1500} size={90} />

          <Dialogue
            speaker="architect"
            text="When relationships ARE your data, graph databases are the answer. Think social networks."
            x={width - 750}
            y={height - 150}
            startFrame={1530}
            maxWidth={680}
          />

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1600,
              opacity: fadeIn(frame, 1620, 20),
            }}
          >
            {/* Graph Visualization */}
            <div
              style={{
                backgroundColor: 'rgba(236, 72, 153, 0.15)',
                border: '3px solid #ec4899',
                borderRadius: 16,
                padding: 32,
                marginBottom: 24,
              }}
            >
              <div style={{fontSize: 34, color: '#ec4899', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                How Graph Databases Work
              </div>

              <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 19, color: '#e2e8f0', lineHeight: 1.9}}>
                    <div style={{marginBottom: 12}}>
                      <span style={{color: '#f9a8d4', fontWeight: 'bold'}}>Nodes:</span> Entities (users, products)
                    </div>
                    <div style={{marginBottom: 12}}>
                      <span style={{color: '#f9a8d4', fontWeight: 'bold'}}>Edges:</span> Relationships (FOLLOWS, LIKES)
                    </div>
                    <div style={{marginBottom: 12}}>
                      <span style={{color: '#f9a8d4', fontWeight: 'bold'}}>Properties:</span> Attributes on nodes/edges
                    </div>
                    <div>
                      <span style={{color: '#f9a8d4', fontWeight: 'bold'}}>Query:</span> Traverse relationships (Cypher)
                    </div>
                  </div>
                </div>

                <div style={{flex: 1}}>
                  <div style={{fontSize: 32, textAlign: 'center', lineHeight: 1.8}}>
                    <div>👤 Alice</div>
                    <div style={{fontSize: 24, color: '#ec4899'}}>↓ FOLLOWS</div>
                    <div>👤 Bob</div>
                    <div style={{fontSize: 24, color: '#ec4899'}}>↓ LIKES</div>
                    <div>📱 Product</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            {frame >= 1800 && (
              <div
                style={{
                  backgroundColor: 'rgba(236, 72, 153, 0.15)',
                  border: '3px solid #ec4899',
                  borderRadius: 16,
                  padding: 28,
                  opacity: fadeIn(frame, 1800, 20),
                }}
              >
                <div style={{fontSize: 28, color: '#ec4899', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  Perfect For Relationship-Heavy Data
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div>✓ Social networks (friends of friends)</div>
                  <div>✓ Recommendation engines</div>
                  <div>✓ Fraud detection (pattern analysis)</div>
                  <div>✓ Knowledge graphs</div>
                </div>

                <div style={{marginTop: 20, textAlign: 'center', fontSize: 17, color: '#fbbf24', fontWeight: 'bold'}}>
                  💡 "Find friends of friends who like Product X" → 1 query vs many JOINs!
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 5: Use Case Decision Matrix (2100-2700 frames / 70-90s) */}
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
              color: '#f59e0b',
              opacity: fadeIn(frame, 2100, 20),
              textAlign: 'center',
            }}
          >
            Choosing the Right NoSQL Database
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={2100} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={2100} size={90} />

          <Dialogue
            speaker="junior"
            text="How do I pick the right NoSQL type for my project?"
            x={220}
            y={height - 150}
            startFrame={2130}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="It's all about your access patterns and data structure. Here's a decision guide!"
            x={width - 750}
            y={height - 150}
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
                width: 1700,
                opacity: fadeIn(frame, 2340, 20),
              }}
            >
              {/* Decision Matrix */}
              <div
                style={{
                  backgroundColor: 'rgba(167, 139, 250, 0.15)',
                  border: '3px solid #a78bfa',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{fontSize: 32, color: '#a78bfa', fontWeight: 'bold', marginBottom: 24, textAlign: 'center'}}>
                  NoSQL Decision Matrix
                </div>

                <div style={{fontSize: 19, color: '#e2e8f0', lineHeight: 2.2}}>
                  <div style={{opacity: fadeIn(frame, 2370, 15)}}>
                    <span style={{fontSize: 24}}>📄</span> <span style={{color: '#10b981', fontWeight: 'bold'}}>Document Store</span> if:
                    <span style={{fontSize: 17, marginLeft: 20, color: '#94a3b8'}}>Flexible schema, nested objects, rich queries</span>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2420, 15)}}>
                    <span style={{fontSize: 24}}>🔑</span> <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Key-Value</span> if:
                    <span style={{fontSize: 17, marginLeft: 20, color: '#94a3b8'}}>Simple lookups, caching, sessions, ultra-fast reads</span>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2470, 15)}}>
                    <span style={{fontSize: 24}}>📊</span> <span style={{color: '#3b82f6', fontWeight: 'bold'}}>Column-Family</span> if:
                    <span style={{fontSize: 17, marginLeft: 20, color: '#94a3b8'}}>Massive writes, time-series, IoT data, petabyte scale</span>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2520, 15)}}>
                    <span style={{fontSize: 24}}>🕸️</span> <span style={{color: '#ec4899', fontWeight: 'bold'}}>Graph</span> if:
                    <span style={{fontSize: 17, marginLeft: 20, color: '#94a3b8'}}>Relationships matter, social networks, recommendations</span>
                  </div>
                </div>

                {frame >= 2600 && (
                  <div
                    style={{
                      marginTop: 32,
                      textAlign: 'center',
                      fontSize: 20,
                      color: '#fbbf24',
                      fontWeight: 'bold',
                      opacity: fadeIn(frame, 2600, 15),
                    }}
                  >
                    💡 Remember: You can use multiple NoSQL types in the same system!
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
