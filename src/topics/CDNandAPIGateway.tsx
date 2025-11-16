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
 * CDN & API Gateway - Global Content Delivery & API Management
 * Sarah (student) asks questions, Developer (teacher) explains
 * Covers: Edge servers, caching strategies, API routing, rate limiting, authentication
 */
export const CDNandAPIGateway: React.FC = () => {
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
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 16, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
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
        <div style={{fontSize: 14, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 16}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="CDN & API Gateway" subtitle="Global Content Delivery & Intelligent API Management" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.62} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.62} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="We covered how browsers talk to servers. But how do massive platforms like Netflix serve millions of users globally so fast?"
            x={width * 0.05}
            y={height * 0.73}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="Great question! That's where CDNs and API Gateways come in. They're the secret sauce behind global-scale applications!"
            x={width * 0.72 - 280}
            y={height * 0.73}
            startFrame={180}
            maxWidth={540}
          />

          {/* The Problem Visualization */}
          {frame >= 270 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.15,
              right: width * 0.15,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(239, 68, 68, 0.5)',
              borderRadius: 16,
              padding: 28,
              opacity: fadeIn(frame, 270, 20),
            }}>
              <div style={{fontSize: 24, fontWeight: 'bold', color: '#ef4444', marginBottom: 16, textAlign: 'center', opacity: fadeIn(frame, 290, 20)}}>
                The Global Scale Challenge
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16}}>
                <div style={{opacity: fadeIn(frame, 330, 20)}}>
                  <div style={{fontSize: 18, color: '#60a5fa', fontWeight: 'bold', marginBottom: 8}}>😰 Without CDN/Gateway:</div>
                  <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
                    <div style={{opacity: fadeIn(frame, 360, 15)}}>• User in Tokyo → Server in US (~150ms latency)</div>
                    <div style={{opacity: fadeIn(frame, 380, 15)}}>• Every request hits origin server</div>
                    <div style={{opacity: fadeIn(frame, 400, 15)}}>• No caching, no load distribution</div>
                    <div style={{opacity: fadeIn(frame, 420, 15)}}>• Server overload, slow response</div>
                  </div>
                </div>
                <div style={{opacity: fadeIn(frame, 330, 20)}}>
                  <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>🚀 With CDN/Gateway:</div>
                  <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
                    <div style={{opacity: fadeIn(frame, 360, 15)}}>• User in Tokyo → Edge server in Tokyo (~5ms)</div>
                    <div style={{opacity: fadeIn(frame, 380, 15)}}>• Static content served from cache</div>
                    <div style={{opacity: fadeIn(frame, 400, 15)}}>• API Gateway routes smartly</div>
                    <div style={{opacity: fadeIn(frame, 420, 15)}}>• Fast, scalable, resilient</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: CDN Deep Dive (450-1200 frames / 15-40s) */}
      {frame >= 450 && frame < 1200 && (
        <>
          <Title text="Content Delivery Network (CDN)" subtitle="Bringing Content Closer to Users" startFrame={450} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={460} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={460} size={95} />

          <Dialogue
            speaker="junior"
            text="How does a CDN actually make things faster? What's the magic?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={480}
            maxWidth={450}
          />

          <Dialogue
            speaker="architect"
            text="Simple! Instead of one server, you have hundreds of edge servers worldwide. Content gets cached near users."
            x={width * 0.78 - 300}
            y={height * 0.74}
            startFrame={590}
            maxWidth={520}
          />

          {/* CDN Network Visualization */}
          {frame >= 700 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 700, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 20, textAlign: 'center'}}>
                  CDN Global Network Architecture
                </div>

                {/* Visual representation */}
                <div style={{position: 'relative', height: 280}}>
                  {/* Origin Server (center) */}
                  <div style={{
                    position: 'absolute',
                    top: 120,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    opacity: fadeIn(frame, 740, 20),
                  }}>
                    <div style={{
                      width: 100,
                      height: 90,
                      backgroundColor: theme.colors.server,
                      borderRadius: 12,
                      border: '3px solid #10b981',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                      transform: `scale(${pulse(frame, 60)})`,
                    }}>
                      <div style={{fontSize: 32}}>🏢</div>
                      <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Origin</div>
                    </div>
                    <div style={{fontSize: 11, color: '#10b981', marginTop: 6}}>US East</div>
                  </div>

                  {/* Edge Servers */}
                  {/* Tokyo */}
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    right: 80,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 800, 20),
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      backgroundColor: '#8b5cf6',
                      borderRadius: 10,
                      border: '2px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 24}}>🌏</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 10, color: '#a78bfa', marginTop: 4}}>Tokyo</div>
                  </div>

                  {/* London */}
                  <div style={{
                    position: 'absolute',
                    top: 60,
                    left: 100,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 840, 20),
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      backgroundColor: '#8b5cf6',
                      borderRadius: 10,
                      border: '2px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 24}}>🌍</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 10, color: '#a78bfa', marginTop: 4}}>London</div>
                  </div>

                  {/* Sydney */}
                  <div style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 120,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 880, 20),
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      backgroundColor: '#8b5cf6',
                      borderRadius: 10,
                      border: '2px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 24}}>🌏</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 10, color: '#a78bfa', marginTop: 4}}>Sydney</div>
                  </div>

                  {/* São Paulo */}
                  <div style={{
                    position: 'absolute',
                    bottom: 40,
                    left: 140,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 920, 20),
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      backgroundColor: '#8b5cf6',
                      borderRadius: 10,
                      border: '2px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 24}}>🌎</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 10, color: '#a78bfa', marginTop: 4}}>São Paulo</div>
                  </div>

                  {/* Connection Arrows from Origin to Edge Servers */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                    {/* SVG Filter for glow effect */}
                    <defs>
                      <filter id="glow-cdn-network">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Origin to Tokyo */}
                    <Arrow
                      x1={width * 0.50 + 50}
                      y1={155}
                      x2={width - 120}
                      y2={55}
                      color={theme.colors.cdn}
                      startFrame={810}
                      dashed={true}
                    />

                    {/* Origin to London */}
                    <Arrow
                      x1={width * 0.50 - 50}
                      y1={155}
                      x2={180}
                      y2={95}
                      color={theme.colors.cdn}
                      startFrame={850}
                      dashed={true}
                    />

                    {/* Origin to Sydney */}
                    <Arrow
                      x1={width * 0.50 + 50}
                      y1={210}
                      x2={width - 160}
                      y2={240}
                      color={theme.colors.cdn}
                      startFrame={890}
                      dashed={true}
                    />

                    {/* Origin to São Paulo */}
                    <Arrow
                      x1={width * 0.50 - 50}
                      y1={210}
                      x2={220}
                      y2={240}
                      color={theme.colors.cdn}
                      startFrame={930}
                      dashed={true}
                    />

                    {/* Animated data flow particles - Origin to Tokyo */}
                    <DataFlowParticle
                      x1={width * 0.50 + 50}
                      y1={155}
                      x2={width - 120}
                      y2={55}
                      startFrame={820}
                      duration={40}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 + 50}
                      y1={155}
                      x2={width - 120}
                      y2={55}
                      startFrame={850}
                      duration={40}
                      color={theme.colors.cdn}
                    />

                    {/* Origin to London */}
                    <DataFlowParticle
                      x1={width * 0.50 - 50}
                      y1={155}
                      x2={180}
                      y2={95}
                      startFrame={860}
                      duration={40}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 - 50}
                      y1={155}
                      x2={180}
                      y2={95}
                      startFrame={890}
                      duration={40}
                      color={theme.colors.cdn}
                    />

                    {/* Origin to Sydney */}
                    <DataFlowParticle
                      x1={width * 0.50 + 50}
                      y1={210}
                      x2={width - 160}
                      y2={240}
                      startFrame={900}
                      duration={40}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 + 50}
                      y1={210}
                      x2={width - 160}
                      y2={240}
                      startFrame={930}
                      duration={40}
                      color={theme.colors.cdn}
                    />

                    {/* Origin to São Paulo */}
                    <DataFlowParticle
                      x1={width * 0.50 - 50}
                      y1={210}
                      x2={220}
                      y2={240}
                      startFrame={940}
                      duration={40}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 - 50}
                      y1={210}
                      x2={220}
                      y2={240}
                      startFrame={970}
                      duration={40}
                      color={theme.colors.cdn}
                    />
                  </svg>
                </div>

                {frame >= 980 && (
                  <div style={{
                    marginTop: 20,
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    border: '2px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: 10,
                    padding: 16,
                    opacity: fadeIn(frame, 980, 15),
                  }}>
                    <div style={{fontSize: 15, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.8}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Cloudflare, AWS CloudFront, Fastly:</span> 200+ edge locations worldwide
                      <br/><span style={{fontSize: 13, color: '#94a3b8'}}>Users connect to nearest edge → Reduced latency from 150ms to 5-20ms</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 3: CDN Caching Strategy (1200-1800 frames / 40-60s) */}
      {frame >= 1200 && frame < 1800 && (
        <>
          <Title text="CDN Caching Strategy" subtitle="Cache Hit vs Cache Miss" startFrame={1200} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={1210} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={1210} size={95} />

          <Dialogue
            speaker="junior"
            text="Okay, so content is stored at edge servers. But how does the CDN know what to cache and for how long?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={1230}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Great question! It's all about cache control headers, TTL (Time To Live), and smart cache invalidation strategies."
            x={width * 0.78 - 300}
            y={height * 0.74}
            startFrame={1350}
            maxWidth={520}
          />

          {/* Cache Hit vs Miss Visualization */}
          {frame >= 1470 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1470, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 20, textAlign: 'center'}}>
                  How CDN Caching Works
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                  {/* Cache HIT */}
                  <div style={{opacity: fadeIn(frame, 1510, 20)}}>
                    <div style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      padding: 16,
                    }}>
                      <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                        ✅ Cache HIT (~5ms)
                      </div>
                      <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 2}}>
                        1. User requests <span style={{color: '#fbbf24'}}>/logo.png</span><br/>
                        2. Edge server checks cache<br/>
                        3. <span style={{color: '#10b981', fontWeight: 'bold'}}>File found!</span> Serve immediately<br/>
                        4. No origin server hit needed
                      </div>
                      <div style={{fontSize: 11, color: '#10b981', marginTop: 10, textAlign: 'center'}}>
                        90-95% of requests are cache hits
                      </div>
                    </div>
                  </div>

                  {/* Cache MISS */}
                  <div style={{opacity: fadeIn(frame, 1570, 20)}}>
                    <div style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      border: '2px solid #ef4444',
                      borderRadius: 12,
                      padding: 16,
                    }}>
                      <div style={{fontSize: 18, color: '#ef4444', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                        ❌ Cache MISS (~85ms)
                      </div>
                      <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 2}}>
                        1. User requests <span style={{color: '#fbbf24'}}>/new-video.mp4</span><br/>
                        2. Edge server checks cache<br/>
                        3. <span style={{color: '#ef4444', fontWeight: 'bold'}}>Not found!</span> Fetch from origin<br/>
                        4. Cache at edge + serve to user
                      </div>
                      <div style={{fontSize: 11, color: '#ef4444', marginTop: 10, textAlign: 'center'}}>
                        First request or expired cache
                      </div>
                    </div>
                  </div>
                </div>

                {/* TTL Explanation */}
                {frame >= 1630 && (
                  <div style={{
                    marginTop: 20,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 12,
                    padding: 16,
                    opacity: fadeIn(frame, 1630, 20),
                  }}>
                    <div style={{fontSize: 16, color: '#a78bfa', fontWeight: 'bold', marginBottom: 10}}>
                      ⏰ Cache Control Headers
                    </div>
                    <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
                      • <span style={{color: '#fbbf24'}}>Static assets</span> (images, CSS, JS): <span style={{color: '#10b981'}}>Cache-Control: max-age=31536000</span> (1 year)<br/>
                      • <span style={{color: '#fbbf24'}}>HTML pages</span>: <span style={{color: '#10b981'}}>Cache-Control: max-age=3600</span> (1 hour)<br/>
                      • <span style={{color: '#fbbf24'}}>API responses</span>: <span style={{color: '#10b981'}}>Cache-Control: max-age=60, must-revalidate</span> (1 minute)<br/>
                      • <span style={{color: '#fbbf24'}}>Dynamic content</span>: <span style={{color: '#ef4444'}}>Cache-Control: no-cache, no-store</span> (never cache)
                    </div>
                  </div>
                )}

                {/* Cache Invalidation */}
                {frame >= 1700 && (
                  <div style={{
                    marginTop: 16,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid #f59e0b',
                    borderRadius: 12,
                    padding: 14,
                    opacity: fadeIn(frame, 1700, 20),
                  }}>
                    <div style={{fontSize: 14, color: '#fbbf24', fontWeight: 'bold', marginBottom: 8, textAlign: 'center'}}>
                      🔄 Cache Invalidation: When you need to purge stale content
                    </div>
                    <div style={{fontSize: 12, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      Manual purge, versioned URLs (/v2/logo.png), or invalidation API calls
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: API Gateway Introduction (1800-2250 frames / 60-75s) */}
      {frame >= 1800 && frame < 2250 && (
        <>
          <Title text="API Gateway" subtitle="The Smart Router for Your APIs" startFrame={1800} />

          <Character type="junior" x={width * 0.18} y={height * 0.64} startFrame={1810} size={95} />
          <Character type="architect" x={width * 0.75} y={height * 0.64} startFrame={1810} size={95} />

          <Dialogue
            speaker="junior"
            text="We've got the CDN handling static content. What about API calls and backend services?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={1830}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="That's where API Gateway shines! It's a single entry point that routes, secures, and manages all your API traffic."
            x={width * 0.75 - 280}
            y={height * 0.74}
            startFrame={1950}
            maxWidth={520}
          />

          {/* API Gateway Architecture */}
          {frame >= 2070 && (
            <div style={{
              position: 'absolute',
              top: height * 0.20,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 2070, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 20, textAlign: 'center'}}>
                  API Gateway: Single Entry Point
                </div>

                <div style={{position: 'relative', height: 300}}>
                  {/* Client */}
                  <div style={{
                    position: 'absolute',
                    top: 130,
                    left: 50,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 2100, 20),
                  }}>
                    <div style={{fontSize: 48}}>📱</div>
                    <div style={{fontSize: 12, color: theme.colors.client, marginTop: 6}}>Client</div>
                  </div>

                  {/* API Gateway */}
                  <div style={{
                    position: 'absolute',
                    top: 100,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    opacity: fadeIn(frame, 2130, 20),
                  }}>
                    <div style={{
                      width: 140,
                      height: 120,
                      backgroundColor: '#f59e0b',
                      borderRadius: 12,
                      border: '3px solid #fbbf24',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                      transform: `scale(${pulse(frame, 60)})`,
                    }}>
                      <div style={{fontSize: 36}}>🚪</div>
                      <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff', marginTop: 6}}>API Gateway</div>
                      <div style={{fontSize: 10, color: '#1e293b', marginTop: 4}}>Route • Secure • Transform</div>
                    </div>
                  </div>

                  {/* Microservices */}
                  {/* User Service */}
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    right: 100,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 2160, 20),
                  }}>
                    <div style={{
                      width: 85,
                      height: 70,
                      backgroundColor: '#10b981',
                      borderRadius: 10,
                      border: '2px solid #34d399',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 20}}>👤</div>
                      <div style={{fontSize: 10, fontWeight: 'bold', color: '#fff'}}>User Service</div>
                    </div>
                  </div>

                  {/* Order Service */}
                  <div style={{
                    position: 'absolute',
                    top: 120,
                    right: 60,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 2180, 20),
                  }}>
                    <div style={{
                      width: 85,
                      height: 70,
                      backgroundColor: '#8b5cf6',
                      borderRadius: 10,
                      border: '2px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 20}}>🛒</div>
                      <div style={{fontSize: 10, fontWeight: 'bold', color: '#fff'}}>Order Service</div>
                    </div>
                  </div>

                  {/* Payment Service */}
                  <div style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 110,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 2200, 20),
                  }}>
                    <div style={{
                      width: 85,
                      height: 70,
                      backgroundColor: '#06b6d4',
                      borderRadius: 10,
                      border: '2px solid #22d3ee',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 20}}>💳</div>
                      <div style={{fontSize: 10, fontWeight: 'bold', color: '#fff'}}>Payment Service</div>
                    </div>
                  </div>

                  {/* Connection Arrows - Beautiful animated connections */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                    {/* SVG Filter for glow effect */}
                    <defs>
                      <filter id="glow-api-gateway">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Client to Gateway - properly aligned to component centers */}
                    <Arrow
                      x1={110}
                      y1={160}
                      x2={width * 0.50 - 70}
                      y2={160}
                      color={theme.colors.client}
                      startFrame={2110}
                      label="API Request"
                    />

                    {/* Gateway to User Service - aligned to box centers */}
                    <Arrow
                      x1={width * 0.50 + 70}
                      y1={135}
                      x2={width - 185}
                      y2={55}
                      color={theme.colors.backend}
                      startFrame={2160}
                    />

                    {/* Gateway to Order Service - aligned to box centers */}
                    <Arrow
                      x1={width * 0.50 + 70}
                      y1={160}
                      x2={width - 145}
                      y2={155}
                      color={theme.colors.eventStream}
                      startFrame={2180}
                    />

                    {/* Gateway to Payment Service - aligned to box centers */}
                    <Arrow
                      x1={width * 0.50 + 70}
                      y1={185}
                      x2={width - 195}
                      y2={255}
                      color={theme.colors.cdn}
                      startFrame={2200}
                    />

                    {/* Animated data flow particles - Client to Gateway */}
                    <DataFlowParticle
                      x1={110}
                      y1={160}
                      x2={width * 0.50 - 70}
                      y2={160}
                      startFrame={2115}
                      duration={40}
                      color={theme.colors.client}
                    />
                    <DataFlowParticle
                      x1={110}
                      y1={160}
                      x2={width * 0.50 - 70}
                      y2={160}
                      startFrame={2135}
                      duration={40}
                      color={theme.colors.client}
                    />
                    <DataFlowParticle
                      x1={110}
                      y1={160}
                      x2={width * 0.50 - 70}
                      y2={160}
                      startFrame={2155}
                      duration={40}
                      color={theme.colors.client}
                    />

                    {/* Gateway to User Service */}
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={135}
                      x2={width - 185}
                      y2={55}
                      startFrame={2170}
                      duration={35}
                      color={theme.colors.backend}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={135}
                      x2={width - 185}
                      y2={55}
                      startFrame={2190}
                      duration={35}
                      color={theme.colors.backend}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={135}
                      x2={width - 185}
                      y2={55}
                      startFrame={2210}
                      duration={35}
                      color={theme.colors.backend}
                    />

                    {/* Gateway to Order Service */}
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={160}
                      x2={width - 145}
                      y2={155}
                      startFrame={2190}
                      duration={35}
                      color={theme.colors.eventStream}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={160}
                      x2={width - 145}
                      y2={155}
                      startFrame={2210}
                      duration={35}
                      color={theme.colors.eventStream}
                    />

                    {/* Gateway to Payment Service */}
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={185}
                      x2={width - 195}
                      y2={255}
                      startFrame={2210}
                      duration={35}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={width * 0.50 + 70}
                      y1={185}
                      x2={width - 195}
                      y2={255}
                      startFrame={2230}
                      duration={35}
                      color={theme.colors.cdn}
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: API Gateway Features (2250-2850 frames / 75-95s) */}
      {frame >= 2250 && frame < 2850 && (
        <>
          <Title text="API Gateway Features" subtitle="Security, Rate Limiting & More" startFrame={2250} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={2260} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={2260} size={95} />

          <Dialogue
            speaker="junior"
            text="What specific features does an API Gateway provide? It sounds like it does a lot!"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={2280}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Absolutely! It handles authentication, rate limiting, request transformation, load balancing, and monitoring. Let me show you!"
            x={width * 0.78 - 300}
            y={height * 0.74}
            startFrame={2400}
            maxWidth={540}
          />

          {/* Features Grid */}
          {frame >= 2520 && (
            <div style={{
              position: 'absolute',
              top: height * 0.18,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 2520, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 20, textAlign: 'center'}}>
                  Core API Gateway Features
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                  {/* Authentication */}
                  {frame >= 2560 && (
                    <div style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      padding: 16,
                      opacity: fadeIn(frame, 2560, 20),
                    }}>
                      <div style={{fontSize: 16, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
                        🔐 Authentication & Authorization
                      </div>
                      <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.8}}>
                        • Verify JWT tokens<br/>
                        • OAuth 2.0 / API keys<br/>
                        • Reject unauthorized requests<br/>
                        • Single auth layer for all services
                      </div>
                    </div>
                  )}

                  {/* Rate Limiting */}
                  {frame >= 2620 && (
                    <div style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      border: '2px solid #ef4444',
                      borderRadius: 12,
                      padding: 16,
                      opacity: fadeIn(frame, 2620, 20),
                    }}>
                      <div style={{fontSize: 16, color: '#ef4444', fontWeight: 'bold', marginBottom: 10}}>
                        ⏱️ Rate Limiting
                      </div>
                      <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.8}}>
                        • Limit: 100 requests/minute per user<br/>
                        • Prevent DDoS attacks<br/>
                        • Fair usage policies<br/>
                        • Return 429 Too Many Requests
                      </div>
                    </div>
                  )}

                  {/* Request Transformation */}
                  {frame >= 2680 && (
                    <div style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.15)',
                      border: '2px solid #8b5cf6',
                      borderRadius: 12,
                      padding: 16,
                      opacity: fadeIn(frame, 2680, 20),
                    }}>
                      <div style={{fontSize: 16, color: '#a78bfa', fontWeight: 'bold', marginBottom: 10}}>
                        🔄 Request/Response Transformation
                      </div>
                      <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.8}}>
                        • Convert XML ↔ JSON<br/>
                        • Add/remove headers<br/>
                        • Aggregate multiple API calls<br/>
                        • Versioning (v1, v2 routing)
                      </div>
                    </div>
                  )}

                  {/* Load Balancing & Monitoring */}
                  {frame >= 2740 && (
                    <div style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.15)',
                      border: '2px solid #f59e0b',
                      borderRadius: 12,
                      padding: 16,
                      opacity: fadeIn(frame, 2740, 20),
                    }}>
                      <div style={{fontSize: 16, color: '#fbbf24', fontWeight: 'bold', marginBottom: 10}}>
                        ⚖️ Load Balancing & Monitoring
                      </div>
                      <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.8}}>
                        • Distribute requests across servers<br/>
                        • Health checks & circuit breakers<br/>
                        • Logging, metrics, tracing<br/>
                        • Real-time analytics dashboard
                      </div>
                    </div>
                  )}
                </div>

                {frame >= 2800 && (
                  <div style={{
                    marginTop: 16,
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    border: '2px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 2800, 20),
                  }}>
                    <div style={{fontSize: 13, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Popular Gateways:</span> AWS API Gateway, Kong, NGINX, Apigee, Azure API Management
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 6: CDN + API Gateway Together (2850-3300 frames / 95-110s) */}
      {frame >= 2850 && frame < 3300 && (
        <>
          <Title text="CDN + API Gateway: Complete Flow" subtitle="Cache Miss → API Call → Cache Hit Lifecycle" startFrame={2850} />

          <Character type="junior" x={width * 0.15} y={height * 0.66} startFrame={2860} size={90} />
          <Character type="architect" x={width * 0.78} y={height * 0.66} startFrame={2860} size={90} />

          <Dialogue
            speaker="junior"
            text="Walk me through a real production scenario - what happens from first request to cached response?"
            x={width * 0.05}
            y={height * 0.76}
            startFrame={2880}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Perfect! Let me show you the complete lifecycle: cache miss, API gateway routing, and then cache hit. This is how Netflix and Amazon actually work!"
            x={width * 0.78 - 300}
            y={height * 0.76}
            startFrame={2990}
            maxWidth={540}
          />

          {/* Detailed Flow Diagram with complete lifecycle */}
          {frame >= 3100 && (
            <div style={{
              position: 'absolute',
              top: height * 0.14,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 3100, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  Complete Architecture Flow
                </div>

                <div style={{position: 'relative', height: 220}}>
                  {/* User/Browser */}
                  <div style={{
                    position: 'absolute',
                    top: 80,
                    left: 40,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3120, 20),
                  }}>
                    <div style={{
                      width: 90,
                      height: 75,
                      backgroundColor: theme.colors.client,
                      borderRadius: 10,
                      border: '3px solid #93c5fd',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 28}}>👤</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>User</div>
                    </div>
                  </div>

                  {/* CDN Edge Server */}
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    left: 280,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3140, 20),
                  }}>
                    <div style={{
                      width: 110,
                      height: 85,
                      backgroundColor: '#8b5cf6',
                      borderRadius: 10,
                      border: '3px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 28}}>🌏</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>CDN Edge</div>
                      <div style={{fontSize: 9, color: '#e9d5ff'}}>Tokyo</div>
                    </div>
                    <div style={{fontSize: 10, color: '#10b981', marginTop: 4}}>Static Assets</div>
                  </div>

                  {/* API Gateway */}
                  <div style={{
                    position: 'absolute',
                    top: 125,
                    left: 270,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3160, 20),
                  }}>
                    <div style={{
                      width: 130,
                      height: 85,
                      backgroundColor: '#f59e0b',
                      borderRadius: 10,
                      border: '3px solid #fbbf24',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                      transform: `scale(${pulse(frame, 60)})`,
                    }}>
                      <div style={{fontSize: 28}}>🚪</div>
                      <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>API Gateway</div>
                      <div style={{fontSize: 9, color: '#1e293b'}}>Auth • Rate Limit</div>
                    </div>
                    <div style={{fontSize: 10, color: '#60a5fa', marginTop: 4}}>API Requests</div>
                  </div>

                  {/* Backend Services */}
                  <div style={{
                    position: 'absolute',
                    top: 50,
                    right: 100,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3180, 20),
                  }}>
                    <div style={{
                      width: 100,
                      height: 75,
                      backgroundColor: '#10b981',
                      borderRadius: 10,
                      border: '2px solid #34d399',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 24}}>⚙️</div>
                      <div style={{fontSize: 10, fontWeight: 'bold', color: '#fff'}}>Services</div>
                    </div>
                    <div style={{fontSize: 9, color: '#10b981', marginTop: 4}}>User/Order/Pay</div>
                  </div>

                  {/* Origin Server */}
                  <div style={{
                    position: 'absolute',
                    top: 140,
                    right: 80,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3200, 20),
                  }}>
                    <div style={{
                      width: 90,
                      height: 70,
                      backgroundColor: theme.colors.server,
                      borderRadius: 10,
                      border: '2px solid #10b981',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 24}}>🏢</div>
                      <div style={{fontSize: 10, fontWeight: 'bold', color: '#fff'}}>Origin</div>
                    </div>
                    <div style={{fontSize: 9, color: '#10b981', marginTop: 4}}>US East</div>
                  </div>

                  {/* Connection Arrows - Beautiful animated connections */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                    {/* SVG Filter for glow effect */}
                    <defs>
                      <filter id="glow-complete-arch">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* User to CDN Edge */}
                    <Arrow
                      x1={130}
                      y1={118}
                      x2={280}
                      y2={63}
                      color={theme.colors.eventStream}
                      startFrame={3140}
                      label="Static"
                    />

                    {/* User to API Gateway */}
                    <Arrow
                      x1={130}
                      y1={118}
                      x2={270}
                      y2={168}
                      color={theme.colors.loadBalancer}
                      startFrame={3150}
                      label="API"
                    />

                    {/* CDN to Origin (cache miss) */}
                    <Arrow
                      x1={390}
                      y1={63}
                      x2={width - 170}
                      y2={175}
                      color={theme.colors.backend}
                      startFrame={3180}
                      dashed={true}
                      label="Miss"
                    />

                    {/* Gateway to Services */}
                    <Arrow
                      x1={400}
                      y1={168}
                      x2={width - 200}
                      y2={88}
                      color={theme.colors.success}
                      startFrame={3170}
                      label="Route"
                    />

                    {/* Animated data flow particles - User to CDN */}
                    <DataFlowParticle
                      x1={130}
                      y1={118}
                      x2={280}
                      y2={63}
                      startFrame={3155}
                      duration={30}
                      color={theme.colors.eventStream}
                    />
                    <DataFlowParticle
                      x1={130}
                      y1={118}
                      x2={280}
                      y2={63}
                      startFrame={3175}
                      duration={30}
                      color={theme.colors.eventStream}
                    />
                    <DataFlowParticle
                      x1={130}
                      y1={118}
                      x2={280}
                      y2={63}
                      startFrame={3195}
                      duration={30}
                      color={theme.colors.eventStream}
                    />

                    {/* User to API Gateway */}
                    <DataFlowParticle
                      x1={130}
                      y1={118}
                      x2={270}
                      y2={168}
                      startFrame={3165}
                      duration={30}
                      color={theme.colors.loadBalancer}
                    />
                    <DataFlowParticle
                      x1={130}
                      y1={118}
                      x2={270}
                      y2={168}
                      startFrame={3185}
                      duration={30}
                      color={theme.colors.loadBalancer}
                    />
                    <DataFlowParticle
                      x1={130}
                      y1={118}
                      x2={270}
                      y2={168}
                      startFrame={3205}
                      duration={30}
                      color={theme.colors.loadBalancer}
                    />

                    {/* Gateway to Services */}
                    <DataFlowParticle
                      x1={400}
                      y1={168}
                      x2={width - 200}
                      y2={88}
                      startFrame={3190}
                      duration={30}
                      color={theme.colors.success}
                    />
                    <DataFlowParticle
                      x1={400}
                      y1={168}
                      x2={width - 200}
                      y2={88}
                      startFrame={3210}
                      duration={30}
                      color={theme.colors.success}
                    />
                    <DataFlowParticle
                      x1={400}
                      y1={168}
                      x2={width - 200}
                      y2={88}
                      startFrame={3230}
                      duration={30}
                      color={theme.colors.success}
                    />

                    {/* CDN to Origin (cache miss) */}
                    <DataFlowParticle
                      x1={390}
                      y1={63}
                      x2={width - 170}
                      y2={175}
                      startFrame={3200}
                      duration={35}
                      color={theme.colors.backend}
                    />
                    <DataFlowParticle
                      x1={390}
                      y1={63}
                      x2={width - 170}
                      y2={175}
                      startFrame={3225}
                      duration={35}
                      color={theme.colors.backend}
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Production Flow Explanation - Architect Level */}
          {frame >= 3100 && (
            <div style={{
              position: 'absolute',
              top: height * 0.52,
              left: width * 0.04,
              right: width * 0.04,
              opacity: fadeIn(frame, 3100, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 18,
              }}>
                <div style={{fontSize: 17, fontWeight: 'bold', color: '#60a5fa', marginBottom: 10, textAlign: 'center'}}>
                  Production Request Lifecycle
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 10, color: '#e2e8f0', lineHeight: 1.8}}>
                  {/* Flow 1: Static Asset Cache MISS */}
                  <div style={{opacity: fadeIn(frame, 3130, 15)}}>
                    <div style={{fontSize: 12, color: '#ef4444', fontWeight: 'bold', marginBottom: 5}}>
                      📦 Static Asset - Cache MISS (~85ms)
                    </div>
                    <div>
                      1. User → <span style={{color: '#fbbf24'}}>GET /bundle.js</span><br/>
                      2. CDN Edge: Cache check → <span style={{color: '#ef4444'}}>MISS</span><br/>
                      3. Forward to Origin (60ms latency)<br/>
                      4. Origin → <span style={{color: '#10b981'}}>Cache-Control: 1 year</span><br/>
                      5. <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Store at Edge</span> → Serve to user<br/>
                      <span style={{fontSize: 9, color: '#94a3b8'}}>⏱️ 85ms (one-time penalty)</span>
                    </div>
                  </div>

                  {/* Flow 2: API Request Through Gateway */}
                  <div style={{opacity: fadeIn(frame, 3165, 15)}}>
                    <div style={{fontSize: 12, color: '#f59e0b', fontWeight: 'bold', marginBottom: 5}}>
                      🚪 API via Gateway - First Call (~50ms)
                    </div>
                    <div>
                      1. User → <span style={{color: '#fbbf24'}}>GET /api/products</span><br/>
                      2. API Gateway: JWT validation<br/>
                      3. Rate limit: 100/min → <span style={{color: '#10b981'}}>✓ Pass</span><br/>
                      4. Route to Service → DB query<br/>
                      5. Response + <span style={{color: '#10b981'}}>Cache-Control: 60s</span><br/>
                      6. <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Cached at CDN Edge!</span><br/>
                      <span style={{fontSize: 9, color: '#94a3b8'}}>⏱️ 50ms (full API flow)</span>
                    </div>
                  </div>

                  {/* Flow 3: Static Asset Cache HIT */}
                  <div style={{opacity: fadeIn(frame, 3200, 15)}}>
                    <div style={{fontSize: 12, color: '#10b981', fontWeight: 'bold', marginBottom: 5}}>
                      ⚡ Static Asset - Cache HIT (~5ms)
                    </div>
                    <div>
                      1. Another user → <span style={{color: '#fbbf24'}}>GET /bundle.js</span><br/>
                      2. CDN Edge: Cache check → <span style={{color: '#10b981', fontWeight: 'bold'}}>HIT!</span><br/>
                      3. <span style={{color: '#8b5cf6'}}>Serve from memory</span><br/>
                      4. No origin/gateway needed<br/>
                      5. 94% faster (85ms → 5ms)<br/>
                      <span style={{fontSize: 9, color: '#94a3b8'}}>⏱️ 5ms (edge cache win!)</span>
                    </div>
                  </div>

                  {/* Flow 4: API Cache HIT */}
                  <div style={{opacity: fadeIn(frame, 3235, 15)}}>
                    <div style={{fontSize: 12, color: '#10b981', fontWeight: 'bold', marginBottom: 5}}>
                      🚀 API via CDN - Cache HIT (~8ms)
                    </div>
                    <div>
                      1. User → <span style={{color: '#fbbf24'}}>GET /api/products</span><br/>
                      2. <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>CDN intercepts!</span> Cache check → <span style={{color: '#10b981'}}>HIT!</span><br/>
                      3. Serve cached API response<br/>
                      4. <span style={{color: '#ef4444', fontWeight: 'bold'}}>No API Gateway/Service hit!</span><br/>
                      5. 84% faster (50ms → 8ms)<br/>
                      6. Massive backend load reduction<br/>
                      <span style={{fontSize: 9, color: '#94a3b8'}}>⏱️ 8ms (CDN serving API!)</span>
                    </div>
                  </div>
                </div>

                {/* Production Considerations */}
                {frame >= 3270 && (
                  <div style={{
                    marginTop: 12,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 3270, 15),
                  }}>
                    <div style={{fontSize: 12, color: '#a78bfa', fontWeight: 'bold', marginBottom: 6, textAlign: 'center'}}>
                      🏗️ Production Patterns
                    </div>
                    <div style={{fontSize: 10, color: '#e2e8f0', lineHeight: 1.7, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
                      <div>
                        • <span style={{color: '#fbbf24'}}>Cache Strategy:</span> GET requests cached, POST/PUT bypass<br/>
                        • <span style={{color: '#fbbf24'}}>Invalidation:</span> Purge API cache on data mutation<br/>
                        • <span style={{color: '#fbbf24'}}>Multi-region:</span> 200+ edges globally
                      </div>
                      <div>
                        • <span style={{color: '#fbbf24'}}>Vary headers:</span> Cache by user-agent, accept-encoding<br/>
                        • <span style={{color: '#fbbf24'}}>Monitoring:</span> Hit ratio, p99 latency, origin load<br/>
                        • <span style={{color: '#fbbf24'}}>Cost:</span> 90%+ cache hit = 10x cost reduction
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 7: Real-World Examples & Next Steps (3300-3600 frames / 110-120s) */}
      {frame >= 3300 && frame < 3600 && (
        <>
          <Title text="Real-World Impact" subtitle="Industry Examples & What's Next" startFrame={3300} />

          <Character type="junior" x={width * 0.2} y={height * 0.65} startFrame={3310} size={100} />
          <Character type="architect" x={width * 0.72} y={height * 0.65} startFrame={3310} size={100} />

          {/* Real-World Examples */}
          {frame >= 3330 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.12,
              right: width * 0.12,
              opacity: fadeIn(frame, 3330, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 26,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 18, textAlign: 'center'}}>
                  Real-World Success Stories
                </div>

                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 2.2}}>
                  <div style={{opacity: fadeIn(frame, 3370, 15)}}>
                    <span style={{fontSize: 20}}>🎬</span> <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Netflix:</span> Cloudflare CDN + Zuul API Gateway → Serves 200M+ users globally
                  </div>
                  <div style={{opacity: fadeIn(frame, 3410, 15)}}>
                    <span style={{fontSize: 20}}>🛒</span> <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Amazon:</span> CloudFront CDN + Custom Gateway → 99.99% availability
                  </div>
                  <div style={{opacity: fadeIn(frame, 3450, 15)}}>
                    <span style={{fontSize: 20}}>🎵</span> <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Spotify:</span> Fastly CDN + Kong Gateway → Handles billions of API requests/day
                  </div>
                </div>

                {frame >= 3490 && (
                  <div style={{
                    marginTop: 18,
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    border: '2px solid #8b5cf6',
                    borderRadius: 12,
                    padding: 18,
                    opacity: fadeIn(frame, 3490, 20),
                  }}>
                    <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', textAlign: 'center', marginBottom: 10}}>
                      🚀 What's Next?
                    </div>
                    <div style={{fontSize: 14, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.8}}>
                      Next up: <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Database Scaling & Caching</span><br/>
                      Learn about sharding, replication, Redis, and more!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <Dialogue
            speaker="junior"
            text="This makes so much sense now! CDN for speed, Gateway for smart API management. Perfect combination!"
            x={width * 0.05}
            y={height * 0.75}
            startFrame={3540}
            maxWidth={500}
          />
        </>
      )}

    </AbsoluteFill>
  );
};
