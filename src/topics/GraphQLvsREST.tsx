import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * GraphQL vs REST
 * Alex (junior) asks questions, Sarah (architect) explains
 * Covers: GraphQL basics, over-fetching/under-fetching, when to use each, N+1 problem
 */
export const GraphQLvsREST: React.FC = () => {
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
          <Title text="GraphQL vs REST" subtitle="Choosing the Right API Architecture" startFrame={0} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 270 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} size={110} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} size={110} />

              <Dialogue
                speaker="junior"
                text="I keep hearing about GraphQL. When should I use it instead of REST?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={60}
                maxWidth={520}
              />

              <Dialogue
                speaker="architect"
                text="Great question! GraphQL solves specific problems REST has. Let's compare them and see when each shines."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={180}
                maxWidth={540}
              />
            </>
          )}

          {/* The Core Difference */}
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
                The Fundamental Difference
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 16}}>
                <div style={{opacity: fadeIn(frame, 300, 20)}}>
                  <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>REST 🔄</div>
                  <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 12, padding: 18, fontSize: 22, color: '#e2e8f0', lineHeight: 1.9}}>
                    <div style={{fontWeight: 'bold', color: '#10b981', marginBottom: 8}}>Multiple endpoints:</div>
                    <div style={{fontFamily: 'monospace', fontSize: 20, color: '#6ee7b7', lineHeight: 2}}>
                      GET /users/123<br/>
                      GET /users/123/posts<br/>
                      GET /posts/456/comments
                    </div>
                    <div style={{marginTop: 12}}>
                      Server defines structure.<br/>
                      Fixed response format.
                    </div>
                  </div>
                </div>

                <div style={{opacity: fadeIn(frame, 330, 20)}}>
                  <div style={{fontSize: 20, color: '#e94b8b', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>GraphQL 📊</div>
                  <div style={{backgroundColor: 'rgba(233, 75, 139, 0.1)', border: '2px solid #e94b8b', borderRadius: 12, padding: 18, fontSize: 22, color: '#e2e8f0', lineHeight: 1.9}}>
                    <div style={{fontWeight: 'bold', color: '#e94b8b', marginBottom: 8}}>Single endpoint:</div>
                    <div style={{fontFamily: 'monospace', fontSize: 20, color: '#f9a8d4', lineHeight: 2}}>
                      POST /graphql
                    </div>
                    <div style={{marginTop: 12}}>
                      Client defines structure.<br/>
                      Request exactly what you need.
                    </div>
                  </div>
                </div>
              </div>

              {frame >= 360 && (
                <div style={{
                  marginTop: 18,
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '2px solid #8b5cf6',
                  borderRadius: 10,
                  padding: 14,
                  opacity: fadeIn(frame, 360, 15),
                }}>
                  <div style={{fontSize: 22, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.7}}>
                    <span style={{color: '#a78bfa', fontWeight: 'bold'}}>Key Insight:</span> REST = server decides data shape. GraphQL = client decides data shape.
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 2: Over-fetching & Under-fetching Problem (450-1050 frames / 15-35s) */}
      {frame >= 450 && frame < 1050 && (
        <>
          <Title text="The Fetching Problem" subtitle="Over-fetching & Under-fetching" startFrame={450} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 720 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={480} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={480} size={95} />

              <Dialogue
                speaker="junior"
                text="What exactly are over-fetching and under-fetching?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={510}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="REST's biggest pain points! Over-fetching = getting too much data. Under-fetching = making multiple requests. Let me show you."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={630}
                maxWidth={500}
              />
            </>
          )}

          {/* Problem Examples */}
          {frame >= 720 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 720, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 22,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  REST API Problems
                </div>

                {/* Over-fetching Example */}
                <div style={{marginBottom: 18, opacity: fadeIn(frame, 750, 15)}}>
                  <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 10}}>❌ Problem 1: Over-Fetching</div>
                  <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 10, padding: 16}}>
                    <div style={{fontSize: 20, color: '#e2e8f0', marginBottom: 10}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Need:</span> Just user name and email for a list
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                      <div>
                        <div style={{fontSize: 20, color: '#94a3b8', marginBottom: 6}}>REST Response:</div>
                        <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#fca5a5', margin: 0, lineHeight: 1.6}}>
{`{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "address": { ... },
  "phone": "+1234567890",
  "bio": "Long text...",
  "preferences": { ... },
  "createdAt": "...",
  "updatedAt": "..."
}`}
                        </pre>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#e2e8f0'}}>
                        <div style={{textAlign: 'center', lineHeight: 1.8}}>
                          <div style={{fontSize: 48, marginBottom: 8}}>📦</div>
                          <div><span style={{color: '#ef4444', fontWeight: 'bold'}}>Wasted bandwidth!</span></div>
                          <div>Got 10 fields,</div>
                          <div>only needed 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Under-fetching Example */}
                <div style={{opacity: fadeIn(frame, 810, 15)}}>
                  <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>❌ Problem 2: Under-Fetching (N+1)</div>
                  <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 10, padding: 16}}>
                    <div style={{fontSize: 20, color: '#e2e8f0', marginBottom: 10}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Need:</span> User + their posts + authors of each post
                    </div>
                    <div style={{fontFamily: 'monospace', fontSize: 18, color: '#fbbf24', lineHeight: 2}}>
                      GET /users/123          → User data<br/>
                      GET /users/123/posts    → Post IDs<br/>
                      GET /posts/1            → Post 1 + author ID<br/>
                      GET /users/456          → Author of Post 1<br/>
                      GET /posts/2            → Post 2 + author ID<br/>
                      GET /users/789          → Author of Post 2<br/>
                      ... (repeats for N posts)
                    </div>
                    <div style={{marginTop: 10, fontSize: 20, color: '#e2e8f0', textAlign: 'center'}}>
                      <span style={{color: '#f59e0b', fontWeight: 'bold'}}>1 + N requests</span> instead of 1! 🐌
                    </div>
                  </div>
                </div>

                {frame >= 870 && (
                  <div style={{
                    marginTop: 16,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 870, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>The Problem:</span> REST endpoints have fixed structures. Can't customize per request.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 3: GraphQL Solution (1050-1650 frames / 35-55s) */}
      {frame >= 1050 && frame < 1650 && (
        <>
          <Title text="GraphQL Solution" subtitle="Query Exactly What You Need" startFrame={1050} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1320 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={1080} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={1080} size={95} />

              <Dialogue
                speaker="junior"
                text="So GraphQL solves both problems? How does it work?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1110}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Exactly! GraphQL uses a query language where you specify exactly what you want. One request, perfect data shape!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1230}
                maxWidth={500}
              />
            </>
          )}

          {/* GraphQL Query Example */}
          {frame >= 1320 && (
            <div style={{
              position: 'absolute',
              top: height * 0.12,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1320, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(233, 75, 139, 0.5)',
                borderRadius: 16,
                padding: 22,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#e94b8b', marginBottom: 16, textAlign: 'center'}}>
                  GraphQL Query: Get Exactly What You Need
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                  {/* Query */}
                  <div style={{opacity: fadeIn(frame, 1350, 15)}}>
                    <div style={{fontSize: 22, color: '#e94b8b', fontWeight: 'bold', marginBottom: 10}}>Query (What you ask for):</div>
                    <div style={{backgroundColor: 'rgba(233, 75, 139, 0.1)', border: '2px solid #e94b8b', borderRadius: 10, padding: 14}}>
                      <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#f9a8d4', margin: 0, lineHeight: 1.7}}>
{`query {
  user(id: 123) {
    name
    email
    posts {
      title
      author {
        name
      }
    }
  }
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Response */}
                  <div style={{opacity: fadeIn(frame, 1380, 15)}}>
                    <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>Response (Exactly that!):</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14}}>
                      <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#6ee7b7', margin: 0, lineHeight: 1.7}}>
{`{
  "user": {
    "name": "Alice",
    "email": "alice@...",
    "posts": [
      {
        "title": "Post 1",
        "author": {
          "name": "Bob"
        }
      }
    ]
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                {frame >= 1410 && (
                  <div style={{marginTop: 16, opacity: fadeIn(frame, 1410, 15)}}>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12}}>
                      <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 8, padding: 12, textAlign: 'center'}}>
                        <div style={{fontSize: 24, marginBottom: 6}}>✅</div>
                        <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 4}}>No Over-fetching</div>
                        <div style={{fontSize: 18, color: '#e2e8f0'}}>Only requested fields</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 8, padding: 12, textAlign: 'center'}}>
                        <div style={{fontSize: 24, marginBottom: 6}}>🎯</div>
                        <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 4}}>No Under-fetching</div>
                        <div style={{fontSize: 18, color: '#e2e8f0'}}>Nested data in 1 request</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 8, padding: 12, textAlign: 'center'}}>
                        <div style={{fontSize: 24, marginBottom: 6}}>⚡</div>
                        <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 4}}>Better Performance</div>
                        <div style={{fontSize: 18, color: '#e2e8f0'}}>Fewer network calls</div>
                      </div>
                    </div>
                  </div>
                )}

                {frame >= 1440 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 1440, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#a78bfa', fontWeight: 'bold'}}>Schema:</span> GraphQL requires a typed schema defining all possible queries. Type safety built-in!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: When to Use Each (1650-2250 frames / 55-75s) */}
      {frame >= 1650 && frame < 2250 && (
        <>
          <Title text="When to Use Each" subtitle="Making the Right Choice" startFrame={1650} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1920 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={1680} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={1680} size={95} />

              <Dialogue
                speaker="junior"
                text="Should I always use GraphQL then? What are the downsides?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1710}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Good thinking! GraphQL isn't always better. Both have their place. Let me break down when to use each."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1830}
                maxWidth={500}
              />
            </>
          )}

          {/* Decision Matrix */}
          {frame >= 1920 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 1920, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  Decision Guide
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
                  {/* Use GraphQL */}
                  <div style={{opacity: fadeIn(frame, 1950, 15)}}>
                    <div style={{fontSize: 24, color: '#e94b8b', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                      ✅ Use GraphQL When:
                    </div>
                    <div style={{backgroundColor: 'rgba(233, 75, 139, 0.1)', border: '2px solid #e94b8b', borderRadius: 10, padding: 16, fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                      <div>• <span style={{color: '#e94b8b', fontWeight: 'bold'}}>Mobile apps</span> - Bandwidth matters</div>
                      <div>• <span style={{color: '#e94b8b', fontWeight: 'bold'}}>Complex UIs</span> - Nested data needs</div>
                      <div>• <span style={{color: '#e94b8b', fontWeight: 'bold'}}>Multiple clients</span> - Different data needs</div>
                      <div>• <span style={{color: '#e94b8b', fontWeight: 'bold'}}>Rapid iteration</span> - Frontend changes often</div>
                      <div>• <span style={{color: '#e94b8b', fontWeight: 'bold'}}>Real-time apps</span> - Subscriptions needed</div>
                    </div>
                    <div style={{marginTop: 12, fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                      <span style={{color: '#e94b8b', fontWeight: 'bold'}}>Examples:</span> Facebook, GitHub, Shopify, Netflix mobile
                    </div>
                  </div>

                  {/* Use REST */}
                  <div style={{opacity: fadeIn(frame, 1980, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                      ✅ Use REST When:
                    </div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 16, fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Simple CRUD</span> - Basic operations</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Caching important</span> - HTTP cache works</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>File uploads</span> - Simpler with REST</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Public APIs</span> - Easier to document</div>
                      <div>• <span style={{color: '#10b981', fontWeight: 'bold'}}>Team unfamiliar</span> - Lower learning curve</div>
                    </div>
                    <div style={{marginTop: 12, fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                      <span style={{color: '#10b981', fontWeight: 'bold'}}>Examples:</span> Stripe, Twilio, AWS, most public APIs
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                {frame >= 2010 && (
                  <div style={{marginTop: 16, opacity: fadeIn(frame, 2010, 15)}}>
                    <div style={{fontSize: 22, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>⚖️ GraphQL Trade-offs:</div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 18}}>
                      <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 8, padding: 10, color: '#e2e8f0', lineHeight: 1.8}}>
                        <div style={{color: '#ef4444', fontWeight: 'bold', marginBottom: 6}}>Challenges:</div>
                        <div>• Complex caching (can't use HTTP cache)</div>
                        <div>• N+1 query problem on backend</div>
                        <div>• Steeper learning curve</div>
                        <div>• Harder rate limiting</div>
                      </div>
                      <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 8, padding: 10, color: '#e2e8f0', lineHeight: 1.8}}>
                        <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 6}}>Solutions:</div>
                        <div>• DataLoader for batching/caching</div>
                        <div>• Apollo Client for caching</div>
                        <div>• Query complexity analysis</div>
                        <div>• Cost-based rate limiting</div>
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
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Hybrid Approach:</span> Many companies use both! REST for simple endpoints, GraphQL for complex client needs.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: Summary & Ecosystem (2250-2700 frames / 75-90s) */}
      {frame >= 2250 && frame < 2700 && (
        <>
          <Title text="GraphQL Ecosystem" subtitle="Tools & Best Practices" startFrame={2250} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 2520 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={2280} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={2280} size={95} />

              <Dialogue
                speaker="junior"
                text="This makes sense! What tools should I use to get started with GraphQL?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={2310}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Great question! Apollo and Relay are the main ecosystems. Let me show you the key tools and patterns."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={2430}
                maxWidth={500}
              />
            </>
          )}

          {/* Ecosystem Overview */}
          {frame >= 2520 && (
            <div style={{
              position: 'absolute',
              top: height * 0.12,
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
                  GraphQL Ecosystem & Key Concepts
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 20}}>
                  {/* Server Tools */}
                  <div style={{opacity: fadeIn(frame, 2550, 15)}}>
                    <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>🖥️ Server-Side</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14, lineHeight: 2, color: '#e2e8f0'}}>
                      <div><span style={{color: '#10b981', fontWeight: 'bold'}}>Apollo Server</span> - Node.js server</div>
                      <div><span style={{color: '#10b981', fontWeight: 'bold'}}>GraphQL Yoga</span> - Flexible server</div>
                      <div><span style={{color: '#10b981', fontWeight: 'bold'}}>Hasura</span> - Instant GraphQL APIs</div>
                      <div><span style={{color: '#10b981', fontWeight: 'bold'}}>Prisma</span> - Database toolkit</div>
                      <div style={{marginTop: 8, fontSize: 18, color: '#94a3b8'}}>Define schema, write resolvers</div>
                    </div>
                  </div>

                  {/* Client Tools */}
                  <div style={{opacity: fadeIn(frame, 2580, 15)}}>
                    <div style={{fontSize: 22, color: '#e94b8b', fontWeight: 'bold', marginBottom: 10}}>📱 Client-Side</div>
                    <div style={{backgroundColor: 'rgba(233, 75, 139, 0.1)', border: '2px solid #e94b8b', borderRadius: 10, padding: 14, lineHeight: 2, color: '#e2e8f0'}}>
                      <div><span style={{color: '#e94b8b', fontWeight: 'bold'}}>Apollo Client</span> - React integration</div>
                      <div><span style={{color: '#e94b8b', fontWeight: 'bold'}}>Relay</span> - Facebook's client</div>
                      <div><span style={{color: '#e94b8b', fontWeight: 'bold'}}>URQL</span> - Lightweight alternative</div>
                      <div><span style={{color: '#e94b8b', fontWeight: 'bold'}}>GraphQL Codegen</span> - Type safety</div>
                      <div style={{marginTop: 8, fontSize: 18, color: '#94a3b8'}}>Smart caching, automatic updates</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div style={{opacity: fadeIn(frame, 2610, 15)}}>
                    <div style={{fontSize: 22, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>⚡ Key Features</div>
                    <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 10, padding: 14, lineHeight: 2, color: '#e2e8f0'}}>
                      <div>• <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Subscriptions</span> - Real-time updates</div>
                      <div>• <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Mutations</span> - Write operations</div>
                      <div>• <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Fragments</span> - Reusable fields</div>
                      <div>• <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Directives</span> - Conditional logic</div>
                      <div>• <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Introspection</span> - Self-documenting</div>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div style={{opacity: fadeIn(frame, 2640, 15)}}>
                    <div style={{fontSize: 22, color: '#8b5cf6', fontWeight: 'bold', marginBottom: 10}}>📚 Best Practices</div>
                    <div style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8b5cf6', borderRadius: 10, padding: 14, lineHeight: 2, color: '#e2e8f0'}}>
                      <div>• Use DataLoader for N+1 problem</div>
                      <div>• Implement query depth limiting</div>
                      <div>• Add complexity analysis</div>
                      <div>• Version schema carefully</div>
                      <div>• Monitor query performance</div>
                    </div>
                  </div>
                </div>

                {frame >= 2670 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 11,
                    opacity: fadeIn(frame, 2670, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Next Topic:</span> gRPC & Protocol Buffers - When you need even faster performance than GraphQL!
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
