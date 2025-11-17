import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {Arrow} from '../components/Arrow';
import {DataFlowParticle} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * gRPC & Protocol Buffers
 * Alex (junior) asks questions, Sarah (architect) explains
 * Covers: Protocol Buffers, HTTP/2, streaming types, performance, microservices
 */
export const gRPCProtocolBuffers: React.FC = () => {
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
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(96, 165, 250, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="gRPC & Protocol Buffers" subtitle="High-Performance RPC for Microservices" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.62} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.62} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="REST and GraphQL are great, but I heard gRPC is way faster. What makes it so special?"
            x={width * 0.05}
            y={height * 0.73}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="gRPC is Google's Remote Procedure Call framework. It uses Protocol Buffers and HTTP/2 for blazing fast microservice communication!"
            x={width * 0.72 - 280}
            y={height * 0.73}
            startFrame={180}
            maxWidth={540}
          />

          {/* Key Differences */}
          {frame >= 270 && (
            <div style={{
              position: 'absolute',
              top: height * 0.20,
              left: width * 0.10,
              right: width * 0.10,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 28,
              opacity: fadeIn(frame, 270, 20),
            }}>
              <div style={{fontSize: 24, fontWeight: 'bold', color: '#60a5fa', textShadow: '0 0 20px rgba(96, 165, 250, 0.5)', marginBottom: 20, textAlign: 'center'}}>
                gRPC vs REST/GraphQL
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 16, fontSize: 20}}>
                <div style={{opacity: fadeIn(frame, 300, 20)}}>
                  <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>REST 📄</div>
                  <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 12, padding: 16, color: '#e2e8f0', lineHeight: 2}}>
                    <div>• JSON (text-based)</div>
                    <div>• HTTP/1.1</div>
                    <div>• Request-response</div>
                    <div>• Human-readable</div>
                    <div>• Larger payload</div>
                  </div>
                </div>

                <div style={{opacity: fadeIn(frame, 330, 20)}}>
                  <div style={{fontSize: 18, color: '#e94b8b', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>GraphQL 🔍</div>
                  <div style={{backgroundColor: 'rgba(233, 75, 139, 0.1)', border: '2px solid #e94b8b', borderRadius: 12, padding: 16, color: '#e2e8f0', lineHeight: 2}}>
                    <div>• JSON (text-based)</div>
                    <div>• HTTP/1.1</div>
                    <div>• Query language</div>
                    <div>• Flexible queries</div>
                    <div>• Medium payload</div>
                  </div>
                </div>

                <div style={{opacity: fadeIn(frame, 360, 20)}}>
                  <div style={{fontSize: 18, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>gRPC ⚡</div>
                  <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 12, padding: 16, color: '#e2e8f0', lineHeight: 2}}>
                    <div>• <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Protobuf</span> (binary)</div>
                    <div>• <span style={{color: '#fbbf24', fontWeight: 'bold'}}>HTTP/2</span></div>
                    <div>• <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Streaming</span></div>
                    <div>• Type-safe</div>
                    <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>~10x smaller!</span></div>
                  </div>
                </div>
              </div>

              {frame >= 390 && (
                <div style={{
                  marginTop: 18,
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid #f59e0b',
                  borderRadius: 10,
                  padding: 14,
                  opacity: fadeIn(frame, 390, 15),
                }}>
                  <div style={{fontSize: 22, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.7}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Performance:</span> gRPC is 5-10x faster than REST/JSON for microservices. Perfect for internal service-to-service communication!
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 2: Protocol Buffers (450-1050 frames / 15-35s) */}
      {frame >= 450 && frame < 1050 && (
        <>
          <Title text="Protocol Buffers" subtitle="Binary Serialization Format" startFrame={450} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={480} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={480} size={95} />

          <Dialogue
            speaker="junior"
            text="What are Protocol Buffers? How are they different from JSON?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={510}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Protobuf is Google's binary serialization format. It's strongly typed, compact, and blazing fast to serialize/deserialize!"
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={630}
            maxWidth={500}
          />

          {/* Protobuf vs JSON Comparison */}
          {frame >= 720 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 720, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 22,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  Protocol Buffers vs JSON
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
                  {/* Protobuf Schema */}
                  <div style={{opacity: fadeIn(frame, 750, 15)}}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>Protocol Buffer Schema (.proto)</div>
                    <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 10, padding: 14}}>
                      <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#fbbf24', margin: 0, lineHeight: 1.7}}>
{`message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
  repeated Post posts = 4;
}

message Post {
  int32 id = 1;
  string title = 2;
  int64 timestamp = 3;
}`}
                      </pre>
                    </div>
                    <div style={{marginTop: 10, fontSize: 18, color: '#e2e8f0'}}>
                      • Strongly typed<br/>
                      • Code generation<br/>
                      • Field numbers for compatibility
                    </div>
                  </div>

                  {/* JSON Equivalent */}
                  <div style={{opacity: fadeIn(frame, 780, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>JSON Equivalent</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14}}>
                      <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#6ee7b7', margin: 0, lineHeight: 1.7}}>
{`{
  "id": 123,
  "name": "Alice",
  "email": "alice@...",
  "posts": [
    {
      "id": 1,
      "title": "Post",
      "timestamp": 1234567890
    }
  ]
}`}
                      </pre>
                    </div>
                    <div style={{marginTop: 10, fontSize: 18, color: '#e2e8f0'}}>
                      • Text-based<br/>
                      • Human-readable<br/>
                      • No schema enforcement
                    </div>
                  </div>
                </div>

                {/* Size Comparison */}
                {frame >= 810 && (
                  <div style={{
                    marginTop: 16,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 22,
                    opacity: fadeIn(frame, 810, 15),
                  }}>
                    <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 10, padding: 14, textAlign: 'center'}}>
                      <div style={{fontSize: 32, marginBottom: 8}}>📦</div>
                      <div style={{fontSize: 20, color: '#ef4444', fontWeight: 'bold', marginBottom: 6}}>JSON Size</div>
                      <div style={{fontSize: 20, color: '#e2e8f0', fontWeight: 'bold'}}>150 bytes</div>
                    </div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14, textAlign: 'center'}}>
                      <div style={{fontSize: 32, marginBottom: 8}}>📦</div>
                      <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 6}}>Protobuf Size</div>
                      <div style={{fontSize: 20, color: '#e2e8f0', fontWeight: 'bold'}}>~15 bytes</div>
                      <div style={{fontSize: 18, color: '#10b981', marginTop: 4}}>90% smaller! ⚡</div>
                    </div>
                  </div>
                )}

                {frame >= 840 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 840, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Why Smaller?</span> Binary encoding, no field names (uses numbers), optimized integers, no whitespace. Faster to serialize & transmit!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 3: HTTP/2 & Streaming (1050-1650 frames / 35-55s) */}
      {frame >= 1050 && frame < 1650 && (
        <>
          <Title text="HTTP/2 & Streaming" subtitle="4 Types of Communication" startFrame={1050} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={1080} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={1080} size={95} />

          <Dialogue
            speaker="junior"
            text="You mentioned streaming. What streaming types does gRPC support?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={1110}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="gRPC supports 4 types: Unary, Server Streaming, Client Streaming, and Bidirectional! All thanks to HTTP/2 multiplexing."
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={1230}
            maxWidth={500}
          />

          {/* 4 Streaming Types */}
          {frame >= 1320 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 1320, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  4 Types of gRPC Communication
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 20}}>
                  {/* Unary */}
                  <div style={{opacity: fadeIn(frame, 1350, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>1️⃣ Unary RPC</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14}}>
                      <div style={{textAlign: 'center', marginBottom: 10}}>
                        <div style={{fontSize: 28}}>📤 ➡️ 📥</div>
                        <div style={{fontSize: 18, color: '#6ee7b7', marginTop: 6}}>Single request → Single response</div>
                      </div>
                      <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                        <div><span style={{color: '#10b981', fontWeight: 'bold'}}>Use case:</span> Get user by ID</div>
                        <div style={{fontFamily: 'monospace', fontSize: 18, color: '#6ee7b7', marginTop: 6}}>
                          rpc GetUser(UserRequest)<br/>
                          &nbsp;&nbsp;returns (UserResponse);
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Server Streaming */}
                  <div style={{opacity: fadeIn(frame, 1380, 15)}}>
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>2️⃣ Server Streaming</div>
                    <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', borderRadius: 10, padding: 14}}>
                      <div style={{textAlign: 'center', marginBottom: 10}}>
                        <div style={{fontSize: 28}}>📤 ➡️ 📥📥📥</div>
                        <div style={{fontSize: 18, color: '#93c5fd', marginTop: 6}}>Single request → Stream responses</div>
                      </div>
                      <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                        <div><span style={{color: '#3b82f6', fontWeight: 'bold'}}>Use case:</span> Live stock prices</div>
                        <div style={{fontFamily: 'monospace', fontSize: 18, color: '#93c5fd', marginTop: 6}}>
                          rpc StreamPrices(StockRequest)<br/>
                          &nbsp;&nbsp;returns (stream Price);
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Client Streaming */}
                  <div style={{opacity: fadeIn(frame, 1410, 15)}}>
                    <div style={{fontSize: 24, color: '#8b5cf6', fontWeight: 'bold', marginBottom: 10}}>3️⃣ Client Streaming</div>
                    <div style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8b5cf6', borderRadius: 10, padding: 14}}>
                      <div style={{textAlign: 'center', marginBottom: 10}}>
                        <div style={{fontSize: 28}}>📤📤📤 ➡️ 📥</div>
                        <div style={{fontSize: 22, color: '#c4b5fd', marginTop: 6}}>Stream requests → Single response</div>
                      </div>
                      <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                        <div><span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Use case:</span> Upload file chunks</div>
                        <div style={{fontFamily: 'monospace', fontSize: 22, color: '#c4b5fd', marginTop: 6}}>
                          rpc UploadFile(stream Chunk)<br/>
                          &nbsp;&nbsp;returns (UploadStatus);
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bidirectional Streaming */}
                  <div style={{opacity: fadeIn(frame, 1440, 15)}}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>4️⃣ Bidirectional Streaming</div>
                    <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 10, padding: 14}}>
                      <div style={{textAlign: 'center', marginBottom: 10}}>
                        <div style={{fontSize: 28}}>📤📤 ⇄ 📥📥</div>
                        <div style={{fontSize: 18, color: '#fbbf24', marginTop: 6}}>Stream both ways simultaneously</div>
                      </div>
                      <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>Use case:</span> Chat, real-time gaming</div>
                        <div style={{fontFamily: 'monospace', fontSize: 18, color: '#fbbf24', marginTop: 6}}>
                          rpc Chat(stream Message)<br/>
                          &nbsp;&nbsp;returns (stream Message);
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {frame >= 1470 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 11,
                    opacity: fadeIn(frame, 1470, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#a78bfa', fontWeight: 'bold'}}>HTTP/2 Magic:</span> Multiplexing allows multiple streams over single connection. No head-of-line blocking!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: When to Use gRPC (1650-2250 frames / 55-75s) */}
      {frame >= 1650 && frame < 2250 && (
        <>
          <Title text="When to Use gRPC" subtitle="Best Use Cases & Trade-offs" startFrame={1650} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={1680} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={1680} size={95} />

          <Dialogue
            speaker="junior"
            text="Should I use gRPC for everything then? When is REST/GraphQL better?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={1710}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Great question! gRPC shines for internal microservices but has limitations for browsers and public APIs."
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={1830}
            maxWidth={500}
          />

          {/* Use Cases */}
          {frame >= 1920 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 1920, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  gRPC Decision Guide
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                  {/* Perfect For */}
                  <div style={{opacity: fadeIn(frame, 1950, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>✅ Perfect For gRPC:</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14, fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Microservices</span> - Service-to-service</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Real-time apps</span> - Streaming needed</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Mobile backends</span> - Battery/bandwidth</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>IoT devices</span> - Low resources</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>High throughput</span> - Millions of RPCs</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Polyglot systems</span> - Multi-language</div>
                    </div>
                    <div style={{marginTop: 10, fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                      <span style={{color: '#10b981', fontWeight: 'bold'}}>Examples:</span> Netflix, Uber, Dropbox microservices
                    </div>
                  </div>

                  {/* Avoid For */}
                  <div style={{opacity: fadeIn(frame, 1980, 15)}}>
                    <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 10}}>❌ Avoid gRPC For:</div>
                    <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 10, padding: 14, fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                      <div>• <span style={{color: '#ef4444', fontWeight: 'bold'}}>Web browsers</span> - Limited support</div>
                      <div>• <span style={{color: '#ef4444', fontWeight: 'bold'}}>Public APIs</span> - REST is standard</div>
                      <div>• <span style={{color: '#ef4444', fontWeight: 'bold'}}>Simple CRUD</span> - Overkill</div>
                      <div>• <span style={{color: '#ef4444', fontWeight: 'bold'}}>Human debugging</span> - Binary format</div>
                      <div>• <span style={{color: '#ef4444', fontWeight: 'bold'}}>Caching needs</span> - HTTP cache works better</div>
                      <div>• <span style={{color: '#ef4444', fontWeight: 'bold'}}>File downloads</span> - REST is simpler</div>
                    </div>
                    <div style={{marginTop: 10, fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                      <span style={{color: '#ef4444', fontWeight: 'bold'}}>Use REST instead:</span> Public APIs, third-party integration
                    </div>
                  </div>
                </div>

                {/* Performance Comparison */}
                {frame >= 2010 && (
                  <div style={{marginTop: 16, opacity: fadeIn(frame, 2010, 15)}}>
                    <div style={{fontSize: 22, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>⚡ Performance Benchmarks:</div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, fontSize: 18, textAlign: 'center'}}>
                      <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 8, padding: 10}}>
                        <div style={{fontSize: 24, fontWeight: 'bold', color: '#ef4444', textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'}}>REST/JSON</div>
                        <div style={{color: '#e2e8f0', marginTop: 6}}>Latency: 100ms</div>
                        <div style={{color: '#e2e8f0'}}>Size: 1000 bytes</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 8, padding: 10}}>
                        <div style={{fontSize: 24, fontWeight: 'bold', color: '#f59e0b', textShadow: '0 0 20px rgba(245, 158, 11, 0.5)'}}>GraphQL/JSON</div>
                        <div style={{color: '#e2e8f0', marginTop: 6}}>Latency: 80ms</div>
                        <div style={{color: '#e2e8f0'}}>Size: 800 bytes</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 8, padding: 10}}>
                        <div style={{fontSize: 24, fontWeight: 'bold', color: '#10b981', textShadow: '0 0 20px rgba(16, 185, 129, 0.5)'}}>gRPC/Protobuf</div>
                        <div style={{color: '#10b981', marginTop: 6}}>Latency: ~10ms ⚡</div>
                        <div style={{color: '#10b981'}}>Size: ~100 bytes 🎯</div>
                      </div>
                    </div>
                  </div>
                )}

                {frame >= 2040 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 11,
                    opacity: fadeIn(frame, 2040, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Hybrid Approach:</span> gRPC for internal services, REST/GraphQL for public APIs. Use gRPC-Web for browsers if needed.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: Tools & Summary (2250-2700 frames / 75-90s) */}
      {frame >= 2250 && frame < 2700 && (
        <>
          <Title text="gRPC Ecosystem" subtitle="Tools & Getting Started" startFrame={2250} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={2280} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={2280} size={95} />

          <Dialogue
            speaker="junior"
            text="This is awesome! How do I get started with gRPC in my projects?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={2310}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Easy! Define your .proto file, generate code, and start coding. gRPC supports 10+ languages out of the box!"
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={2430}
            maxWidth={500}
          />

          {/* Tools & Summary */}
          {frame >= 2520 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 2520, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  gRPC Ecosystem & Quick Start
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 20}}>
                  {/* Languages */}
                  <div style={{opacity: fadeIn(frame, 2550, 15)}}>
                    <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>🌍 Language Support</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14, lineHeight: 2, color: '#e2e8f0'}}>
                      <div>• C++, Java, Python, Go</div>
                      <div>• Node.js, C#, Ruby, PHP</div>
                      <div>• Dart, Kotlin, Objective-C</div>
                      <div style={{marginTop: 8, fontSize: 18, color: '#10b981'}}>
                        Official protoc compiler generates client/server code
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div style={{opacity: fadeIn(frame, 2580, 15)}}>
                    <div style={{fontSize: 22, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>🔧 Essential Tools</div>
                    <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', borderRadius: 10, padding: 14, lineHeight: 2, color: '#e2e8f0'}}>
                      <div>• <span style={{color: '#3b82f6', fontWeight: 'bold'}}>protoc</span> - Proto compiler</div>
                      <div>• <span style={{color: '#3b82f6', fontWeight: 'bold'}}>grpcurl</span> - CLI debugging</div>
                      <div>• <span style={{color: '#3b82f6', fontWeight: 'bold'}}>BloomRPC</span> - GUI client</div>
                      <div>• <span style={{color: '#3b82f6', fontWeight: 'bold'}}>grpc-gateway</span> - REST bridge</div>
                      <div>• <span style={{color: '#3b82f6', fontWeight: 'bold'}}>Envoy</span> - Service proxy</div>
                    </div>
                  </div>

                  {/* Quick Start */}
                  <div style={{gridColumn: '1 / -1', opacity: fadeIn(frame, 2610, 15)}}>
                    <div style={{fontSize: 22, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>🚀 Quick Start (3 Steps)</div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12}}>
                      <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 8, padding: 12, textAlign: 'center'}}>
                        <div style={{fontSize: 24, marginBottom: 6}}>1️⃣</div>
                        <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 6}}>Define Schema</div>
                        <div style={{fontSize: 18, color: '#e2e8f0'}}>Write .proto file with messages & services</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 8, padding: 12, textAlign: 'center'}}>
                        <div style={{fontSize: 24, marginBottom: 6}}>2️⃣</div>
                        <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 6}}>Generate Code</div>
                        <div style={{fontSize: 18, color: '#e2e8f0'}}>Run protoc to create client/server stubs</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 8, padding: 12, textAlign: 'center'}}>
                        <div style={{fontSize: 24, marginBottom: 6}}>3️⃣</div>
                        <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 6}}>Implement</div>
                        <div style={{fontSize: 18, color: '#e2e8f0'}}>Write business logic in your language</div>
                      </div>
                    </div>
                  </div>
                </div>

                {frame >= 2640 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 11,
                    opacity: fadeIn(frame, 2640, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#a78bfa', fontWeight: 'bold'}}>🎉 Phase 2 Complete!</span> You now understand REST, GraphQL, and gRPC. Next: Database fundamentals & scaling strategies!
                    </div>
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
