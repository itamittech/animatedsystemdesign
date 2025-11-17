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
 * REST API Design Best Practices
 * Alex (junior) asks questions, Sarah (architect) explains
 * Covers: Resources, HTTP methods, status codes, versioning, pagination
 */
export const RESTAPIDesign: React.FC = () => {
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
          <Title text="REST API Design" subtitle="Building Intuitive & Scalable APIs" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.62} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.62} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="We've built our infrastructure. Now how do we design APIs that are easy to use and maintain?"
            x={width * 0.05}
            y={height * 0.73}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="REST API design is an art! Follow these principles and your APIs will be intuitive, scalable, and loved by developers."
            x={width * 0.72 - 280}
            y={height * 0.73}
            startFrame={180}
            maxWidth={540}
          />

          {/* REST Principles */}
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
                REST API Design Principles
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16}}>
                <div style={{opacity: fadeIn(frame, 300, 20)}}>
                  <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>✅ Core Principles:</div>
                  <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.9}}>
                    <div style={{opacity: fadeIn(frame, 330, 15)}}>• <span style={{color: '#fbbf24'}}>Resource-based</span> URLs</div>
                    <div style={{opacity: fadeIn(frame, 360, 15)}}>• <span style={{color: '#fbbf24'}}>HTTP methods</span> as verbs</div>
                    <div style={{opacity: fadeIn(frame, 390, 15)}}>• <span style={{color: '#fbbf24'}}>Stateless</span> communication</div>
                    <div style={{opacity: fadeIn(frame, 420, 15)}}>• <span style={{color: '#fbbf24'}}>Standard status codes</span></div>
                  </div>
                </div>
                <div style={{opacity: fadeIn(frame, 300, 20)}}>
                  <div style={{fontSize: 22, color: '#a78bfa', fontWeight: 'bold', marginBottom: 10}}>📦 We'll Cover:</div>
                  <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.9}}>
                    <div style={{opacity: fadeIn(frame, 330, 15)}}>• URL structure & naming</div>
                    <div style={{opacity: fadeIn(frame, 360, 15)}}>• HTTP methods (GET, POST, PUT...)</div>
                    <div style={{opacity: fadeIn(frame, 390, 15)}}>• Status codes & error handling</div>
                    <div style={{opacity: fadeIn(frame, 420, 15)}}>• Versioning & pagination</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Resource-Based URLs (450-900 frames / 15-30s) */}
      {frame >= 450 && frame < 900 && (
        <>
          <Title text="Resource-Based URLs" subtitle="Nouns, Not Verbs" startFrame={450} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={480} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={480} size={95} />

          <Dialogue
            speaker="junior"
            text="Should API endpoints include actions like /getUser or /createProduct?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={510}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Never! URLs should represent resources (nouns), not actions (verbs). HTTP methods are your verbs!"
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={630}
            maxWidth={500}
          />

          {/* Good vs Bad URLs */}
          {frame >= 720 && (
            <div style={{
              position: 'absolute',
              top: height * 0.14,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 720, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 18, textAlign: 'center'}}>
                  URL Design: Good vs Bad
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
                  {/* Bad Examples */}
                  <div style={{opacity: fadeIn(frame, 750, 20)}}>
                    <div style={{fontSize: 18, color: '#ef4444', fontWeight: 'bold', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8}}>
                      <span>❌</span> Bad (Action-based)
                    </div>
                    <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 10, padding: 14, fontFamily: 'monospace', fontSize: 20, lineHeight: 2.2}}>
                      <div style={{color: '#fca5a5', opacity: fadeIn(frame, 780, 15)}}>GET /getUsers</div>
                      <div style={{color: '#fca5a5', opacity: fadeIn(frame, 810, 15)}}>POST /createUser</div>
                      <div style={{color: '#fca5a5', opacity: fadeIn(frame, 840, 15)}}>POST /updateUser/123</div>
                      <div style={{color: '#fca5a5', opacity: fadeIn(frame, 870, 15)}}>GET /deleteUser?id=123</div>
                    </div>
                  </div>

                  {/* Good Examples */}
                  <div style={{opacity: fadeIn(frame, 750, 20)}}>
                    <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8}}>
                      <span>✅</span> Good (Resource-based)
                    </div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14, fontFamily: 'monospace', fontSize: 20, lineHeight: 2.2}}>
                      <div style={{color: '#6ee7b7', opacity: fadeIn(frame, 780, 15)}}>GET /users</div>
                      <div style={{color: '#6ee7b7', opacity: fadeIn(frame, 810, 15)}}>POST /users</div>
                      <div style={{color: '#6ee7b7', opacity: fadeIn(frame, 840, 15)}}>PUT /users/123</div>
                      <div style={{color: '#6ee7b7', opacity: fadeIn(frame, 870, 15)}}>DELETE /users/123</div>
                    </div>
                  </div>
                </div>

                {/* Naming Conventions */}
                {frame >= 900 && (
                  <div style={{
                    marginTop: 18,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 900, 15),
                  }}>
                    <div style={{fontSize: 22, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.7}}>
                      <span style={{color: '#a78bfa', fontWeight: 'bold'}}>Best Practices:</span> Use plural nouns (/users not /user), lowercase, hyphens for multi-word (user-profiles), avoid file extensions
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 3: HTTP Methods (900-1500 frames / 30-50s) */}
      {frame >= 900 && frame < 1500 && (
        <>
          <Title text="HTTP Methods" subtitle="The Right Tool for the Job" startFrame={900} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={930} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={930} size={95} />

          <Dialogue
            speaker="junior"
            text="What's the difference between PUT and PATCH? When do I use each method?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={960}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Each HTTP method has a specific purpose and semantics. Let's break them down with real examples!"
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={1080}
            maxWidth={500}
          />

          {/* HTTP Methods Table */}
          {frame >= 1170 && (
            <div style={{
              position: 'absolute',
              top: height * 0.10,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 1170, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  HTTP Methods Cheat Sheet
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 20}}>
                  {/* GET */}
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 1200, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>GET - Read Resource</div>
                    <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{fontFamily: 'monospace', color: '#6ee7b7', marginBottom: 6}}>GET /users/123</div>
                      <div>• Retrieve data, no side effects</div>
                      <div>• Idempotent & cacheable</div>
                      <div>• Safe method (read-only)</div>
                    </div>
                  </div>

                  {/* POST */}
                  <div style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    border: '2px solid #3b82f6',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 1230, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 8}}>POST - Create Resource</div>
                    <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{fontFamily: 'monospace', color: '#93c5fd', marginBottom: 6}}>POST /users</div>
                      <div>• Create new resource</div>
                      <div>• NOT idempotent</div>
                      <div>• Returns 201 Created</div>
                    </div>
                  </div>

                  {/* PUT */}
                  <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid #f59e0b',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 1260, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 8}}>PUT - Replace Resource</div>
                    <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{fontFamily: 'monospace', color: '#fbbf24', marginBottom: 6}}>PUT /users/123</div>
                      <div>• Full replacement</div>
                      <div>• Idempotent</div>
                      <div>• All fields required</div>
                    </div>
                  </div>

                  {/* PATCH */}
                  <div style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 1290, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#8b5cf6', fontWeight: 'bold', marginBottom: 8}}>PATCH - Partial Update</div>
                    <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{fontFamily: 'monospace', color: '#a78bfa', marginBottom: 6}}>PATCH /users/123</div>
                      <div>• Partial modification</div>
                      <div>• Only changed fields</div>
                      <div>• More efficient than PUT</div>
                    </div>
                  </div>

                  {/* DELETE */}
                  <div style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '2px solid #ef4444',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 1320, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 8}}>DELETE - Remove Resource</div>
                    <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{fontFamily: 'monospace', color: '#fca5a5', marginBottom: 6}}>DELETE /users/123</div>
                      <div>• Remove resource</div>
                      <div>• Idempotent</div>
                      <div>• Returns 204 No Content</div>
                    </div>
                  </div>

                  {/* OPTIONS */}
                  <div style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    border: '2px solid #06b6d4',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 1350, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#06b6d4', fontWeight: 'bold', marginBottom: 8}}>OPTIONS - Get Methods</div>
                    <div style={{color: '#e2e8f0', lineHeight: 1.8}}>
                      <div style={{fontFamily: 'monospace', color: '#67e8f9', marginBottom: 6}}>OPTIONS /users</div>
                      <div>• Discover allowed methods</div>
                      <div>• CORS preflight requests</div>
                      <div>• API documentation</div>
                    </div>
                  </div>
                </div>

                {/* Idempotency Note */}
                {frame >= 1380 && (
                  <div style={{
                    marginTop: 16,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 1380, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.7}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>💡 Idempotent:</span> Multiple identical requests have the same effect as a single request (GET, PUT, DELETE, PATCH are idempotent; POST is NOT)
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Status Codes (1500-2100 frames / 50-70s) */}
      {frame >= 1500 && frame < 2100 && (
        <>
          <Title text="HTTP Status Codes" subtitle="Communicate Success & Errors Clearly" startFrame={1500} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={1530} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={1530} size={95} />

          <Dialogue
            speaker="junior"
            text="I've seen APIs return 200 OK even for errors. What status codes should we actually use?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={1560}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="That's terrible! Status codes are critical for API consumers. Use the right codes for the right situations."
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={1680}
            maxWidth={500}
          />

          {/* Status Codes Categories */}
          {frame >= 1770 && (
            <div style={{
              position: 'absolute',
              top: height * 0.12,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 1770, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 22,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  Essential HTTP Status Codes
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, fontSize: 18}}>
                  {/* 2xx Success */}
                  <div style={{opacity: fadeIn(frame, 1800, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>2xx - Success ✅</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 8, padding: 10, lineHeight: 1.9}}>
                      <div style={{color: '#e2e8f0'}}>
                        <div><span style={{color: '#10b981', fontWeight: 'bold'}}>200</span> OK - Request succeeded</div>
                        <div><span style={{color: '#10b981', fontWeight: 'bold'}}>201</span> Created - Resource created</div>
                        <div><span style={{color: '#10b981', fontWeight: 'bold'}}>204</span> No Content - Success, no body</div>
                      </div>
                    </div>
                  </div>

                  {/* 3xx Redirection */}
                  <div style={{opacity: fadeIn(frame, 1830, 15)}}>
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>3xx - Redirection ↪️</div>
                    <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', borderRadius: 8, padding: 10, lineHeight: 1.9}}>
                      <div style={{color: '#e2e8f0'}}>
                        <div><span style={{color: '#3b82f6', fontWeight: 'bold'}}>301</span> Moved Permanently</div>
                        <div><span style={{color: '#3b82f6', fontWeight: 'bold'}}>302</span> Found (Temporary)</div>
                        <div><span style={{color: '#3b82f6', fontWeight: 'bold'}}>304</span> Not Modified (Cache)</div>
                      </div>
                    </div>
                  </div>

                  {/* 4xx Client Errors */}
                  <div style={{opacity: fadeIn(frame, 1860, 15)}}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>4xx - Client Error 🚫</div>
                    <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 8, padding: 10, lineHeight: 1.9}}>
                      <div style={{color: '#e2e8f0'}}>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>400</span> Bad Request</div>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>401</span> Unauthorized (Auth)</div>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>403</span> Forbidden (No perms)</div>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>404</span> Not Found</div>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>409</span> Conflict</div>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>422</span> Validation Failed</div>
                        <div><span style={{color: '#f59e0b', fontWeight: 'bold'}}>429</span> Too Many Requests</div>
                      </div>
                    </div>
                  </div>

                  {/* 5xx Server Errors */}
                  <div style={{opacity: fadeIn(frame, 1890, 15)}}>
                    <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 10}}>5xx - Server Error 💥</div>
                    <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444', borderRadius: 8, padding: 10, lineHeight: 1.9}}>
                      <div style={{color: '#e2e8f0'}}>
                        <div><span style={{color: '#ef4444', fontWeight: 'bold'}}>500</span> Internal Server Error</div>
                        <div><span style={{color: '#ef4444', fontWeight: 'bold'}}>502</span> Bad Gateway</div>
                        <div><span style={{color: '#ef4444', fontWeight: 'bold'}}>503</span> Service Unavailable</div>
                        <div><span style={{color: '#ef4444', fontWeight: 'bold'}}>504</span> Gateway Timeout</div>
                      </div>
                    </div>
                  </div>

                  {/* Error Response Format */}
                  <div style={{gridColumn: '2 / 4', opacity: fadeIn(frame, 1920, 15)}}>
                    <div style={{fontSize: 24, color: '#8b5cf6', fontWeight: 'bold', marginBottom: 10}}>Error Response Format 📋</div>
                    <div style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8b5cf6', borderRadius: 8, padding: 10}}>
                      <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#e2e8f0', margin: 0, lineHeight: 1.7}}>
{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      { "field": "email", "issue": "must be valid email" }
    ],
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Best Practice */}
                {frame >= 1950 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 11,
                    opacity: fadeIn(frame, 1950, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Pro Tip:</span> Always return meaningful error messages with error codes, field-level validation details, and a timestamp. Never expose stack traces in production!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: Versioning Strategies (2100-2700 frames / 70-90s) */}
      {frame >= 2100 && frame < 2700 && (
        <>
          <Title text="API Versioning" subtitle="Managing Breaking Changes" startFrame={2100} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={2130} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={2130} size={95} />

          <Dialogue
            speaker="junior"
            text="How do we update our API without breaking existing clients?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={2160}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="API versioning! There are three common strategies, each with trade-offs. Let's compare them."
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={2280}
            maxWidth={500}
          />

          {/* Versioning Strategies */}
          {frame >= 2370 && (
            <div style={{
              position: 'absolute',
              top: height * 0.14,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 2370, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 18, textAlign: 'center'}}>
                  API Versioning Strategies
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, fontSize: 20}}>
                  {/* URI Versioning */}
                  <div style={{opacity: fadeIn(frame, 2400, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>1️⃣ URI Versioning</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14, lineHeight: 2}}>
                      <div style={{fontFamily: 'monospace', fontSize: 18, color: '#6ee7b7', marginBottom: 10}}>
                        /v1/users<br/>
                        /v2/users
                      </div>
                      <div style={{color: '#e2e8f0'}}>
                        <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 6}}>✅ Pros:</div>
                        <div>• Simple & visible</div>
                        <div>• Easy caching</div>
                        <div>• Clear in logs</div>
                        <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 8, marginBottom: 6}}>❌ Cons:</div>
                        <div>• URL pollution</div>
                        <div>• Not RESTful</div>
                      </div>
                    </div>
                  </div>

                  {/* Header Versioning */}
                  <div style={{opacity: fadeIn(frame, 2430, 15)}}>
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>2️⃣ Header Versioning</div>
                    <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', borderRadius: 10, padding: 14, lineHeight: 2}}>
                      <div style={{fontFamily: 'monospace', fontSize: 18, color: '#93c5fd', marginBottom: 10}}>
                        GET /users<br/>
                        X-API-Version: 2
                      </div>
                      <div style={{color: '#e2e8f0'}}>
                        <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 6}}>✅ Pros:</div>
                        <div>• Clean URLs</div>
                        <div>• RESTful</div>
                        <div>• Flexible</div>
                        <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 8, marginBottom: 6}}>❌ Cons:</div>
                        <div>• Hidden version</div>
                        <div>• Harder testing</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Negotiation */}
                  <div style={{opacity: fadeIn(frame, 2460, 15)}}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>3️⃣ Accept Header</div>
                    <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 10, padding: 14, lineHeight: 2}}>
                      <div style={{fontFamily: 'monospace', fontSize: 18, color: '#fbbf24', marginBottom: 10}}>
                        GET /users<br/>
                        Accept: application/<br/>
                        vnd.myapi.v2+json
                      </div>
                      <div style={{color: '#e2e8f0'}}>
                        <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: 6}}>✅ Pros:</div>
                        <div>• True REST</div>
                        <div>• Content type aware</div>
                        <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 8, marginBottom: 6}}>❌ Cons:</div>
                        <div>• Complex</div>
                        <div>• Hard to test</div>
                        <div>• Cache challenges</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                {frame >= 2490 && (
                  <div style={{
                    marginTop: 16,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 2490, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.7}}>
                      <span style={{color: '#a78bfa', fontWeight: 'bold'}}>💡 Recommendation:</span> URI versioning (/v1/users) for simplicity. Use semantic versioning (v1, v2) for major breaking changes only. Support N-1 versions.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 6: Pagination & Filtering (2700-3300 frames / 90-110s) */}
      {frame >= 2700 && frame < 3300 && (
        <>
          <Title text="Pagination & Filtering" subtitle="Handling Large Datasets" startFrame={2700} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={2730} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={2730} size={95} />

          <Dialogue
            speaker="junior"
            text="What if /users returns 10 million records? How do we handle that efficiently?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={2760}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Never return all records! Use pagination, filtering, and sorting. Let me show you the best patterns."
            x={width * 0.78 - 280}
            y={height * 0.74}
            startFrame={2880}
            maxWidth={500}
          />

          {/* Pagination Strategies */}
          {frame >= 2970 && (
            <div style={{
              position: 'absolute',
              top: height * 0.12,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 2970, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 22,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  Pagination & Query Patterns
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                  {/* Offset-based Pagination */}
                  <div style={{opacity: fadeIn(frame, 3000, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>📄 Offset Pagination</div>
                    <div style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: 10, padding: 14}}>
                      <div style={{fontFamily: 'monospace', fontSize: 18, color: '#6ee7b7', lineHeight: 2, marginBottom: 8}}>
                        GET /users?page=2&limit=20<br/>
                        GET /users?offset=40&limit=20
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                        <div><span style={{color: '#10b981'}}>✅</span> Simple to implement</div>
                        <div><span style={{color: '#10b981'}}>✅</span> Jump to any page</div>
                        <div><span style={{color: '#ef4444'}}>❌</span> Slow for large offsets</div>
                        <div><span style={{color: '#ef4444'}}>❌</span> Unstable with inserts</div>
                      </div>
                    </div>
                  </div>

                  {/* Cursor-based Pagination */}
                  <div style={{opacity: fadeIn(frame, 3030, 15)}}>
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>🔗 Cursor Pagination</div>
                    <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', borderRadius: 10, padding: 14}}>
                      <div style={{fontFamily: 'monospace', fontSize: 18, color: '#93c5fd', lineHeight: 2, marginBottom: 8}}>
                        GET /users?cursor=eyJpZCI6MTAwfQ<br/>
                        &limit=20
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                        <div><span style={{color: '#10b981'}}>✅</span> Fast for large datasets</div>
                        <div><span style={{color: '#10b981'}}>✅</span> Stable with changes</div>
                        <div><span style={{color: '#ef4444'}}>❌</span> Can't jump to page</div>
                        <div><span style={{color: '#ef4444'}}>❌</span> More complex</div>
                      </div>
                    </div>
                  </div>

                  {/* Filtering */}
                  <div style={{opacity: fadeIn(frame, 3060, 15)}}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>🔍 Filtering</div>
                    <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b', borderRadius: 10, padding: 14}}>
                      <div style={{fontFamily: 'monospace', fontSize: 18, color: '#fbbf24', lineHeight: 2}}>
                        GET /users?status=active<br/>
                        GET /users?role=admin&verified=true<br/>
                        GET /users?created_after=2024-01-01
                      </div>
                    </div>
                  </div>

                  {/* Sorting */}
                  <div style={{opacity: fadeIn(frame, 3090, 15)}}>
                    <div style={{fontSize: 24, color: '#8b5cf6', fontWeight: 'bold', marginBottom: 10}}>↕️ Sorting</div>
                    <div style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8b5cf6', borderRadius: 10, padding: 14}}>
                      <div style={{fontFamily: 'monospace', fontSize: 22, color: '#c4b5fd', lineHeight: 2}}>
                        GET /users?sort=created_at<br/>
                        GET /users?sort=-created_at (desc)<br/>
                        GET /users?sort=name,created_at
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Format */}
                {frame >= 3120 && (
                  <div style={{marginTop: 16, opacity: fadeIn(frame, 3120, 15)}}>
                    <div style={{fontSize: 24, color: '#06b6d4', fontWeight: 'bold', marginBottom: 10}}>📦 Pagination Response Format</div>
                    <div style={{backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid #06b6d4', borderRadius: 10, padding: 14}}>
                      <pre style={{fontFamily: 'monospace', fontSize: 18, color: '#e2e8f0', margin: 0, lineHeight: 1.6}}>
{`{
  "data": [ /* array of items */ ],
  "pagination": {
    "total": 10000,
    "page": 2,
    "limit": 20,
    "pages": 500,
    "has_next": true,
    "has_prev": true
  },
  "links": {
    "self": "/users?page=2&limit=20",
    "next": "/users?page=3&limit=20",
    "prev": "/users?page=1&limit=20"
  }
}`}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Best Practice */}
                {frame >= 3150 && (
                  <div style={{
                    marginTop: 14,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid #60a5fa',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 3150, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Best Practice:</span> Set max limit (e.g., 100), default to 20. Return total count, page links. Use cursor pagination for feeds/infinite scroll.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 7: HATEOAS - Hypermedia as the Engine of Application State (3300-3750 frames / 110-125s) */}
      {frame >= 3300 && frame < 3750 && (
        <>
          <Title text="HATEOAS" subtitle="Hypermedia as the Engine of Application State" startFrame={3300} />

          <Character type="junior" x={200} y={height - 200} startFrame={3300} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={3300} size={90} />

          <Dialogue
            speaker="junior"
            text="I've heard of HATEOAS. What is it and why should we use it?"
            x={220}
            y={height - 150}
            startFrame={3330}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="HATEOAS makes your API self-documenting by including links to related resources in every response!"
            x={width - 750}
            y={height - 150}
            startFrame={3450}
            maxWidth={640}
          />

          {/* HATEOAS Example */}
          {frame >= 3540 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.18,
                left: width * 0.08,
                right: width * 0.08,
                opacity: fadeIn(frame, 3540, 20),
              }}
            >
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
                {/* Without HATEOAS */}
                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                    borderRadius: 16,
                    padding: 24,
                    opacity: fadeIn(frame, 3570, 15),
                  }}
                >
                  <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                    ❌ Without HATEOAS
                  </div>
                  <div style={{fontSize: 22, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 16, borderRadius: 10, color: '#e2e8f0'}}>
                    <div style={{color: '#94a3b8'}}>GET /users/123</div>
                    <div style={{marginTop: 12}}>{'{'}</div>
                    <div style={{paddingLeft: 20}}>
                      <div style={{color: '#60a5fa'}}>"id"</div>: 123,
                    </div>
                    <div style={{paddingLeft: 20}}>
                      <div style={{color: '#60a5fa'}}>"name"</div>: "Alice",
                    </div>
                    <div style={{paddingLeft: 20}}>
                      <div style={{color: '#60a5fa'}}>"email"</div>: "alice@example.com"
                    </div>
                    <div>{'}'}</div>
                    <div style={{marginTop: 16, color: '#fbbf24', fontSize: 20}}>
                      ⚠️ Client must know all endpoints
                    </div>
                  </div>
                </div>

                {/* With HATEOAS */}
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    borderRadius: 16,
                    padding: 24,
                    opacity: fadeIn(frame, 3630, 15),
                  }}
                >
                  <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                    ✓ With HATEOAS
                  </div>
                  <div style={{fontSize: 20, fontFamily: 'monospace', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 16, borderRadius: 10, color: '#e2e8f0'}}>
                    <div style={{color: '#94a3b8'}}>GET /users/123</div>
                    <div style={{marginTop: 12}}>{'{'}</div>
                    <div style={{paddingLeft: 20}}>
                      <div style={{color: '#60a5fa'}}>"id"</div>: 123,
                    </div>
                    <div style={{paddingLeft: 20}}>
                      <div style={{color: '#60a5fa'}}>"name"</div>: "Alice",
                    </div>
                    <div style={{paddingLeft: 20}}>
                      <div style={{color: '#60a5fa'}}>"_links"</div>: {'{'}
                    </div>
                    <div style={{paddingLeft: 40}}>
                      <div style={{color: '#10b981'}}>"self"</div>: "/users/123",
                    </div>
                    <div style={{paddingLeft: 40}}>
                      <div style={{color: '#10b981'}}>"posts"</div>: "/users/123/posts",
                    </div>
                    <div style={{paddingLeft: 40}}>
                      <div style={{color: '#10b981'}}>"followers"</div>: "/users/123/followers"
                    </div>
                    <div style={{paddingLeft: 20}}>{'}'}</div>
                    <div>{'}'}</div>
                    <div style={{marginTop: 12, color: '#10b981', fontSize: 20}}>
                      ✓ API guides client through available actions
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div
                style={{
                  marginTop: 24,
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6', boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 3690, 15),
                }}
              >
                <div style={{fontSize: 22, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  💡 HATEOAS Benefits
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, fontSize: 24, color: '#e2e8f0'}}>
                  <div>
                    <div style={{color: '#60a5fa', fontWeight: 'bold', marginBottom: 8}}>🔍 Discoverability</div>
                    <div style={{fontSize: 22}}>Clients discover available actions dynamically</div>
                  </div>
                  <div>
                    <div style={{color: '#60a5fa', fontWeight: 'bold', marginBottom: 8}}>🔧 Evolvability</div>
                    <div style={{fontSize: 22}}>Server can change URLs without breaking clients</div>
                  </div>
                  <div>
                    <div style={{color: '#60a5fa', fontWeight: 'bold', marginBottom: 8}}>📖 Self-Documenting</div>
                    <div style={{fontSize: 22}}>API tells clients what's possible at each state</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 8: Summary & Next Steps (3750-3900 frames / 125-130s) */}
      {frame >= 3750 && frame < 3900 && (
        <>
          <Title text="REST API Best Practices" subtitle="Summary & Key Takeaways" startFrame={3750} />

          <Character type="junior" x={200} y={height - 200} startFrame={3750} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={3750} size={90} />

          <Dialogue
            speaker="junior"
            text="This is so much clearer now! Our APIs will be much better designed."
            x={220}
            y={height - 150}
            startFrame={3780}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Perfect! Remember: consistency, HATEOAS for discoverability, and always think from the API consumer's perspective!"
            x={width - 750}
            y={height - 150}
            startFrame={3840}
            maxWidth={640}
          />

          {/* Summary */}
          {frame >= 3810 && (
            <div style={{
              position: 'absolute',
              top: height * 0.16,
              left: width * 0.10,
              right: width * 0.10,
              opacity: fadeIn(frame, 3810, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 18, textAlign: 'center'}}>
                  🎯 Key Takeaways
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, fontSize: 20}}>
                  <div style={{opacity: fadeIn(frame, 3820, 15)}}>
                    <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>✅ Design Principles</div>
                    <div style={{color: '#e2e8f0', lineHeight: 2}}>
                      • Use <span style={{color: '#fbbf24'}}>nouns for URLs</span>, not verbs<br/>
                      • Keep URLs <span style={{color: '#fbbf24'}}>simple and predictable</span><br/>
                      • Include <span style={{color: '#fbbf24'}}>HATEOAS links</span> for discoverability
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 3840, 15)}}>
                    <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10}}>🔧 Implementation</div>
                    <div style={{color: '#e2e8f0', lineHeight: 2}}>
                      • Use correct <span style={{color: '#fbbf24'}}>HTTP methods</span><br/>
                      • Return proper <span style={{color: '#fbbf24'}}>status codes</span><br/>
                      • Version with <span style={{color: '#fbbf24'}}>/v1, /v2</span><br/>
                      • Paginate large responses
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 3860, 15)}}>
                    <div style={{fontSize: 24, color: '#8b5cf6', fontWeight: 'bold', marginBottom: 10}}>📚 Documentation</div>
                    <div style={{color: '#e2e8f0', lineHeight: 2}}>
                      • Use OpenAPI/Swagger spec<br/>
                      • Include request/response examples<br/>
                      • Document error codes<br/>
                      • Provide SDKs when possible
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 3880, 15)}}>
                    <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>🚀 Next Topics</div>
                    <div style={{color: '#e2e8f0', lineHeight: 2}}>
                      • GraphQL vs REST<br/>
                      • gRPC & Protocol Buffers<br/>
                      • API Authentication & Security<br/>
                      • Rate Limiting & Throttling
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
