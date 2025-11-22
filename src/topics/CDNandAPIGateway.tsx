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

  // Scene 2 Calculations
  const s2ContainerWidth = width * 0.9;
  const s2OriginX = s2ContainerWidth * 0.5;
  const s2OriginY = 165;
  // Tokyo: right: 80, width: 80. Left = CW - 160. Center = CW - 120.
  const s2TokyoX = s2ContainerWidth - 120;
  const s2TokyoY = 55;
  // London: left: 100, width: 80. Center = 140.
  const s2LondonX = 140;
  const s2LondonY = 95;
  // Sydney: right: 120, width: 80. Left = CW - 200. Center = CW - 160.
  const s2SydneyX = s2ContainerWidth - 160;
  const s2SydneyY = 225;
  // São Paulo: left: 140, width: 80. Center = 180.
  const s2SaoPauloX = 180;
  const s2SaoPauloY = 205;

  // Scene 4 Calculations
  const s4ContainerWidth = width * 0.84;
  const s4GatewayX = s4ContainerWidth * 0.5;
  const s4GatewayY = 160;
  // Client: left: 50. Let's assume center around 90 (icon width approx 80).
  // Actually, looking at previous code, Arrow started at 74.
  const s4ClientX = 74;
  const s4ClientY = 154;
  // User Service: right: 100, width: 85. Left = CW - 185. Center = CW - 142.5.
  const s4UserX = s4ContainerWidth - 142.5;
  const s4UserY = 55; // Top 20 + 35
  // Order Service: right: 60, width: 85. Left = CW - 145. Center = CW - 102.5.
  const s4OrderX = s4ContainerWidth - 102.5;
  const s4OrderY = 155; // Top 120 + 35
  // Payment Service: right: 110, width: 85. Left = CW - 195. Center = CW - 152.5.
  const s4PaymentX = s4ContainerWidth - 152.5;
  const s4PaymentY = 235; // Bottom 10 -> Top 220 + 35 (Container height 300)

  // Scene 6 Calculations
  const s6ContainerWidth = width * 0.9;
  // User: left 60, width 100. Center = 110.
  const s6UserX = 110;
  const s6UserY = 140;
  // CDN: left width * 0.30.
  const s6CdnX = width * 0.30;
  const s6CdnY = 140;
  // Gateway: left width * 0.55.
  const s6GatewayX = width * 0.55;
  const s6GatewayY = 140;
  // Services: right 80, width 120. Left = CW - 200. Center = CW - 140.
  const s6ServicesX = s6ContainerWidth - 140;
  const s6ServicesY = 140;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary, fontFamily: '"Inter", sans-serif'}}>
      {/* Credit Bookmark */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(12px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '1px solid rgba(96, 165, 250, 0.3)',
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

      {/* Scene 1: Introduction (0-675 frames / 0-22.5s) */}
      {frame >= 0 && frame < 675 && (
        <>
          <Title text="CDN & API Gateway" subtitle="Global Content Delivery & Intelligent API Management" startFrame={0} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 315 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.62} startFrame={30} size={110} />
              <Character type="architect" x={width * 0.75} y={height * 0.62} startFrame={30} size={110} />

              <Dialogue
                speaker="junior"
                text="We covered how browsers talk to servers. But how do massive platforms like Netflix serve millions of users globally so fast?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={60}
                maxWidth={520}
              />

              <Dialogue
                speaker="architect"
                text="Great question! That's where CDNs and API Gateways come in. They're the secret sauce behind global-scale applications!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={180}
                maxWidth={540}
              />
            </>
          )}

          {/* The Problem Visualization */}
          {frame >= 405 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.15,
              right: width * 0.15,
              background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
              border: '1px solid rgba(239, 68, 68, 0.5)',
              borderRadius: 20,
              padding: 32,
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              opacity: fadeIn(frame, 405, 20),
            }}>
              <div style={{fontSize: 28, fontWeight: 'bold', color: '#ef4444', textShadow: '0 0 20px rgba(239, 68, 68, 0.4)', marginBottom: 24, textAlign: 'center', opacity: fadeIn(frame, 435, 20)}}>
                The Global Scale Challenge
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 16}}>
                <div style={{opacity: fadeIn(frame, 495, 20)}}>
                  <div style={{fontSize: 20, color: '#60a5fa', fontWeight: 'bold', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px'}}>😰 Without CDN/Gateway</div>
                  <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div style={{opacity: fadeIn(frame, 540, 15), marginBottom: 8}}>• User in Tokyo → Server in US (~150ms latency)</div>
                    <div style={{opacity: fadeIn(frame, 570, 15), marginBottom: 8}}>• Every request hits origin server</div>
                    <div style={{opacity: fadeIn(frame, 600, 15), marginBottom: 8}}>• No caching, no load distribution</div>
                    <div style={{opacity: fadeIn(frame, 630, 15)}}>• Server overload, slow response</div>
                  </div>
                </div>
                <div style={{opacity: fadeIn(frame, 495, 20)}}>
                  <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px'}}>🚀 With CDN/Gateway</div>
                  <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div style={{opacity: fadeIn(frame, 540, 15), marginBottom: 8}}>• User in Tokyo → Edge server in Tokyo (~5ms)</div>
                    <div style={{opacity: fadeIn(frame, 570, 15), marginBottom: 8}}>• Static content served from cache</div>
                    <div style={{opacity: fadeIn(frame, 600, 15), marginBottom: 8}}>• API Gateway routes smartly</div>
                    <div style={{opacity: fadeIn(frame, 630, 15)}}>• Fast, scalable, resilient</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: CDN Deep Dive (675-1800 frames / 22.5-60s) */}
      {frame >= 675 && frame < 1800 && (
        <>
          <Title text="Content Delivery Network (CDN)" subtitle="Bringing Content Closer to Users" startFrame={675} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 960 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.64} startFrame={685} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.64} startFrame={685} size={95} />

              <Dialogue
                speaker="junior"
                text="How does a CDN actually make things faster? What's the magic?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={705}
                maxWidth={450}
              />

              <Dialogue
                speaker="architect"
                text="Simple! Instead of one server, you have hundreds of edge servers worldwide. Content gets cached near users."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={825}
                maxWidth={520}
              />
            </>
          )}

          {/* CDN Network Visualization */}
          {frame >= 1050 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 1050, 20),
            }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 20,
                padding: 30,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 24, textAlign: 'center', letterSpacing: '1px'}}>
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
                    opacity: fadeIn(frame, 1110, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 100,
                      height: 90,
                      background: 'linear-gradient(145deg, #10b981, #059669)',
                      borderRadius: 12,
                      border: '1px solid #34d399',
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: `scale(${pulse(frame, 60)})`,
                    }}>
                      <div style={{fontSize: 32}}>🏢</div>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Origin</div>
                    </div>
                    <div style={{fontSize: 18, color: '#34d399', marginTop: 8, fontWeight: '500'}}>US East</div>
                  </div>

                  {/* Edge Servers */}
                  {/* Tokyo */}
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    right: 80,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1200, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
                      borderRadius: 12,
                      border: '1px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                    }}>
                      <div style={{fontSize: 24}}>🌏</div>
                      <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 22, color: '#c4b5fd', marginTop: 6, fontWeight: '500'}}>Tokyo</div>
                  </div>

                  {/* London */}
                  <div style={{
                    position: 'absolute',
                    top: 60,
                    left: 100,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1260, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
                      borderRadius: 12,
                      border: '1px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                    }}>
                      <div style={{fontSize: 24}}>🌍</div>
                      <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 22, color: '#c4b5fd', marginTop: 6, fontWeight: '500'}}>London</div>
                  </div>

                  {/* Sydney */}
                  <div style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 120,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1320, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
                      borderRadius: 12,
                      border: '1px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                    }}>
                      <div style={{fontSize: 24}}>🌏</div>
                      <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 22, color: '#c4b5fd', marginTop: 6, fontWeight: '500'}}>Sydney</div>
                  </div>

                  {/* São Paulo */}
                  <div style={{
                    position: 'absolute',
                    bottom: 40,
                    left: 140,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1380, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 80,
                      height: 70,
                      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
                      borderRadius: 12,
                      border: '1px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                    }}>
                      <div style={{fontSize: 24}}>🌎</div>
                      <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Edge</div>
                    </div>
                    <div style={{fontSize: 22, color: '#c4b5fd', marginTop: 6, fontWeight: '500'}}>São Paulo</div>
                  </div>

                  {/* Connection Arrows from Origin to Edge Servers */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
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
                      x1={s2OriginX + 50}
                      y1={s2OriginY - 10}
                      x2={s2TokyoX - 40}
                      y2={s2TokyoY + 10}
                      color={theme.colors.cdn}
                      startFrame={1215}
                      dashed={true}
                    />

                    {/* Origin to London */}
                    <Arrow
                      x1={s2OriginX - 50}
                      y1={s2OriginY - 10}
                      x2={s2LondonX + 40}
                      y2={s2LondonY + 10}
                      color={theme.colors.cdn}
                      startFrame={1275}
                      dashed={true}
                    />

                    {/* Origin to Sydney */}
                    <Arrow
                      x1={s2OriginX + 50}
                      y1={s2OriginY + 10}
                      x2={s2SydneyX - 40}
                      y2={s2SydneyY - 10}
                      color={theme.colors.cdn}
                      startFrame={1335}
                      dashed={true}
                    />

                    {/* Origin to São Paulo */}
                    <Arrow
                      x1={s2OriginX - 50}
                      y1={s2OriginY + 10}
                      x2={s2SaoPauloX + 40}
                      y2={s2SaoPauloY - 10}
                      color={theme.colors.cdn}
                      startFrame={1395}
                      dashed={true}
                    />

                    {/* Animated data flow particles - Origin to Tokyo */}
                    <DataFlowParticle
                      x1={s2OriginX + 50}
                      y1={s2OriginY - 10}
                      x2={s2TokyoX - 40}
                      y2={s2TokyoY + 10}
                      startFrame={1230}
                      duration={60}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={s2OriginX + 50}
                      y1={s2OriginY - 10}
                      x2={s2TokyoX - 40}
                      y2={s2TokyoY + 10}
                      startFrame={1275}
                      duration={60}
                      color={theme.colors.cdn}
                    />

                    {/* Origin to London */}
                    <DataFlowParticle
                      x1={s2OriginX - 50}
                      y1={s2OriginY - 10}
                      x2={s2LondonX + 40}
                      y2={s2LondonY + 10}
                      startFrame={1290}
                      duration={60}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={s2OriginX - 50}
                      y1={s2OriginY - 10}
                      x2={s2LondonX + 40}
                      y2={s2LondonY + 10}
                      startFrame={1335}
                      duration={60}
                      color={theme.colors.cdn}
                    />

                    {/* Origin to Sydney */}
                    <DataFlowParticle
                      x1={s2OriginX + 50}
                      y1={s2OriginY + 10}
                      x2={s2SydneyX - 40}
                      y2={s2SydneyY - 10}
                      startFrame={1350}
                      duration={60}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={s2OriginX + 50}
                      y1={s2OriginY + 10}
                      x2={s2SydneyX - 40}
                      y2={s2SydneyY - 10}
                      startFrame={1395}
                      duration={60}
                      color={theme.colors.cdn}
                    />

                    {/* Origin to São Paulo */}
                    <DataFlowParticle
                      x1={s2OriginX - 50}
                      y1={s2OriginY + 10}
                      x2={s2SaoPauloX + 40}
                      y2={s2SaoPauloY - 10}
                      startFrame={1410}
                      duration={60}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={s2OriginX - 50}
                      y1={s2OriginY + 10}
                      x2={s2SaoPauloX + 40}
                      y2={s2SaoPauloY - 10}
                      startFrame={1455}
                      duration={60}
                      color={theme.colors.cdn}
                    />
                  </svg>
                </div>

                {frame >= 1470 && (
                  <div style={{
                    marginTop: 24,
                    background: 'linear-gradient(90deg, rgba(96, 165, 250, 0.1), rgba(96, 165, 250, 0.05))',
                    border: '1px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: 12,
                    padding: 20,
                    opacity: fadeIn(frame, 1470, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.8}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Cloudflare, AWS CloudFront, Fastly:</span> 200+ edge locations worldwide
                      <br/><span style={{fontSize: 20, color: '#94a3b8'}}>Users connect to nearest edge → Reduced latency from 150ms to 5-20ms</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 3: CDN Caching Strategy (1800-2700 frames / 60-90s) */}
      {frame >= 1800 && frame < 2700 && (
        <>
          <Title text="CDN Caching Strategy" subtitle="Cache Hit vs Cache Miss" startFrame={1800} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 2115 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.64} startFrame={1810} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.64} startFrame={1810} size={95} />

              <Dialogue
                speaker="junior"
                text="Okay, so content is stored at edge servers. But how does the CDN know what to cache and for how long?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1830}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Great question! It's all about cache control headers, TTL (Time To Live), and smart cache invalidation strategies."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1950}
                maxWidth={520}
              />
            </>
          )}

          {/* Cache Hit vs Miss Visualization */}
          {frame >= 2205 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 2205, 20),
            }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 20,
                padding: 32,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              }}>
                <div style={{fontSize: 26, fontWeight: 'bold', color: '#60a5fa', marginBottom: 24, textAlign: 'center'}}>
                  How CDN Caching Works
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
                  {/* Cache HIT */}
                  <div style={{opacity: fadeIn(frame, 2265, 20)}}>
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid #10b981',
                      borderRadius: 16,
                      padding: 24,
                    }}>
                      <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                        ✅ Cache HIT (~5ms)
                      </div>
                      <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                        1. User requests <span style={{color: '#fbbf24', fontWeight: '600'}}>/logo.png</span><br/>
                        2. Edge server checks cache<br/>
                        3. <span style={{color: '#10b981', fontWeight: 'bold'}}>File found!</span> Serve immediately<br/>
                        4. No origin server hit needed
                      </div>
                      <div style={{fontSize: 18, color: '#10b981', marginTop: 16, textAlign: 'center', fontWeight: '500'}}>
                        90-95% of requests are cache hits
                      </div>
                    </div>
                  </div>

                  {/* Cache MISS */}
                  <div style={{opacity: fadeIn(frame, 2355, 20)}}>
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid #ef4444',
                      borderRadius: 16,
                      padding: 24,
                    }}>
                      <div style={{fontSize: 22, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                        ❌ Cache MISS (~85ms)
                      </div>
                      <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 2}}>
                        1. User requests <span style={{color: '#fbbf24', fontWeight: '600'}}>/new-video.mp4</span><br/>
                        2. Edge server checks cache<br/>
                        3. <span style={{color: '#ef4444', fontWeight: 'bold'}}>Not found!</span> Fetch from origin<br/>
                        4. Cache at edge + serve to user
                      </div>
                      <div style={{fontSize: 18, color: '#ef4444', marginTop: 16, textAlign: 'center', fontWeight: '500'}}>
                        First request or expired cache
                      </div>
                    </div>
                  </div>
                </div>

                {/* TTL Explanation */}
                {frame >= 2445 && (
                  <div style={{
                    marginTop: 24,
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid #8b5cf6',
                    borderRadius: 16,
                    padding: 20,
                    opacity: fadeIn(frame, 2445, 20),
                  }}>
                    <div style={{fontSize: 24, color: '#a78bfa', fontWeight: 'bold', marginBottom: 12}}>
                      ⏰ Cache Control Headers
                    </div>
                    <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                      • <span style={{color: '#fbbf24', fontWeight: '600'}}>Static assets</span> (images, CSS): <span style={{color: '#10b981'}}>max-age=31536000</span> (1 year)<br/>
                      • <span style={{color: '#fbbf24', fontWeight: '600'}}>HTML pages</span>: <span style={{color: '#10b981'}}>max-age=3600</span> (1 hour)<br/>
                      • <span style={{color: '#fbbf24', fontWeight: '600'}}>API responses</span>: <span style={{color: '#10b981'}}>max-age=60, must-revalidate</span> (1 min)<br/>
                      • <span style={{color: '#fbbf24', fontWeight: '600'}}>Dynamic</span>: <span style={{color: '#ef4444'}}>no-cache, no-store</span> (never cache)
                    </div>
                  </div>
                )}

                {/* Cache Invalidation */}
                {frame >= 2550 && (
                  <div style={{
                    marginTop: 20,
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid #f59e0b',
                    borderRadius: 16,
                    padding: 18,
                    opacity: fadeIn(frame, 2550, 20),
                  }}>
                    <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 8, textAlign: 'center'}}>
                      🔄 Cache Invalidation: When you need to purge stale content
                    </div>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      Manual purge, versioned URLs (/v2/logo.png), or invalidation API calls
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: API Gateway Introduction (2700-3375 frames / 90-112.5s) */}
      {frame >= 2700 && frame < 3375 && (
        <>
          <Title text="API Gateway" subtitle="The Smart Router for Your APIs" startFrame={2700} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 3015 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.64} startFrame={2710} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.64} startFrame={2710} size={95} />

              <Dialogue
                speaker="junior"
                text="We've got the CDN handling static content. But what about dynamic API calls and backend services?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={2730}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="That's where API Gateway shines! It's a single entry point that routes, secures, and manages all your API traffic."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={2850}
                maxWidth={520}
              />
            </>
          )}

          {/* API Gateway Architecture */}
          {frame >= 3105 && (
            <div style={{
              position: 'absolute',
              top: height * 0.20,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 3105, 20),
            }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 20,
                padding: 30,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#60a5fa', marginBottom: 24, textAlign: 'center', letterSpacing: '1px'}}>
                  API Gateway: Single Entry Point
                </div>

                <div style={{position: 'relative', height: 300}}>
                  {/* Client */}
                  <div style={{
                    position: 'absolute',
                    top: 130,
                    left: 50,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3150, 20),
                    zIndex: 10,
                  }}>
                    <div style={{fontSize: 48}}>📱</div>
                    <div style={{fontSize: 20, color: theme.colors.client, marginTop: 6, fontWeight: '600'}}>Client</div>
                  </div>

                  {/* API Gateway */}
                  <div style={{
                    position: 'absolute',
                    top: 100,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3195, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 140,
                      height: 120,
                      background: 'linear-gradient(145deg, #f59e0b, #d97706)',
                      borderRadius: 16,
                      border: '1px solid #fbbf24',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                      transform: `scale(${pulse(frame, 60)})`,
                    }}>
                      <div style={{fontSize: 36}}>🚪</div>
                      <div style={{fontSize: 22, fontWeight: 'bold', color: '#fff', marginTop: 6, textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>API Gateway</div>
                      <div style={{fontSize: 16, color: '#fff', marginTop: 4, opacity: 0.9}}>Route • Secure</div>
                    </div>
                  </div>

                  {/* Microservices */}
                  {/* User Service */}
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    right: 100,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3240, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 85,
                      height: 70,
                      background: 'linear-gradient(145deg, #10b981, #059669)',
                      borderRadius: 12,
                      border: '1px solid #34d399',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 20}}>👤</div>
                      <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 4}}>User</div>
                    </div>
                  </div>

                  {/* Order Service */}
                  <div style={{
                    position: 'absolute',
                    top: 120,
                    right: 60,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3270, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 85,
                      height: 70,
                      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
                      borderRadius: 12,
                      border: '1px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 20}}>🛒</div>
                      <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 4}}>Order</div>
                    </div>
                  </div>

                  {/* Payment Service */}
                  <div style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 110,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 3300, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 85,
                      height: 70,
                      background: 'linear-gradient(145deg, #06b6d4, #0891b2)',
                      borderRadius: 12,
                      border: '1px solid #22d3ee',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 20}}>💳</div>
                      <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 4}}>Payment</div>
                    </div>
                  </div>

                  {/* Connection Arrows - Properly aligned to component centers */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                    <defs>
                      <filter id="glow-api-gateway">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Client to Gateway */}
                    <Arrow
                      x1={s4ClientX}
                      y1={s4ClientY}
                      x2={s4GatewayX - 70}
                      y2={s4GatewayY}
                      color={theme.colors.client}
                      startFrame={3165}
                      label="API Request"
                    />

                    {/* Gateway to User Service */}
                    <Arrow
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4UserX - 42.5}
                      y2={s4UserY + 20}
                      color={theme.colors.backend}
                      startFrame={3240}
                    />

                    {/* Gateway to Order Service */}
                    <Arrow
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4OrderX - 42.5}
                      y2={s4OrderY}
                      color={theme.colors.eventStream}
                      startFrame={3270}
                    />

                    {/* Gateway to Payment Service */}
                    <Arrow
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4PaymentX - 42.5}
                      y2={s4PaymentY - 20}
                      color={theme.colors.cdn}
                      startFrame={3300}
                    />

                    {/* Animated data flow particles - Client to Gateway */}
                    <DataFlowParticle
                      x1={s4ClientX}
                      y1={s4ClientY}
                      x2={s4GatewayX - 70}
                      y2={s4GatewayY}
                      startFrame={3172}
                      duration={60}
                      color={theme.colors.client}
                    />
                    <DataFlowParticle
                      x1={s4ClientX}
                      y1={s4ClientY}
                      x2={s4GatewayX - 70}
                      y2={s4GatewayY}
                      startFrame={3202}
                      duration={60}
                      color={theme.colors.client}
                    />
                    <DataFlowParticle
                      x1={s4ClientX}
                      y1={s4ClientY}
                      x2={s4GatewayX - 70}
                      y2={s4GatewayY}
                      startFrame={3232}
                      duration={60}
                      color={theme.colors.client}
                    />

                    {/* Gateway to User Service */}
                    <DataFlowParticle
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4UserX - 42.5}
                      y2={s4UserY + 20}
                      startFrame={3255}
                      duration={53}
                      color={theme.colors.backend}
                    />
                    <DataFlowParticle
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4UserX - 42.5}
                      y2={s4UserY + 20}
                      startFrame={3285}
                      duration={53}
                      color={theme.colors.backend}
                    />

                    {/* Gateway to Order Service */}
                    <DataFlowParticle
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4OrderX - 42.5}
                      y2={s4OrderY}
                      startFrame={3285}
                      duration={53}
                      color={theme.colors.eventStream}
                    />
                    <DataFlowParticle
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4OrderX - 42.5}
                      y2={s4OrderY}
                      startFrame={3315}
                      duration={53}
                      color={theme.colors.eventStream}
                    />

                    {/* Gateway to Payment Service */}
                    <DataFlowParticle
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4PaymentX - 42.5}
                      y2={s4PaymentY - 20}
                      startFrame={3315}
                      duration={53}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={s4GatewayX + 70}
                      y1={s4GatewayY}
                      x2={s4PaymentX - 42.5}
                      y2={s4PaymentY - 20}
                      startFrame={3345}
                      duration={53}
                      color={theme.colors.cdn}
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: API Gateway Features (3375-4275 frames / 112.5-142.5s) */}
      {frame >= 3375 && frame < 4275 && (
        <>
          <Title text="API Gateway Features" subtitle="Security, Rate Limiting & More" startFrame={3375} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 3690 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.64} startFrame={3385} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.64} startFrame={3385} size={95} />

              <Dialogue
                speaker="junior"
                text="What specific features does an API Gateway provide? Is it just for routing?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={3405}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="No way! It's a powerhouse. It handles authentication, rate limiting, data transformation, load balancing, and monitoring."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={3525}
                maxWidth={540}
              />
            </>
          )}

          {/* Features Grid */}
          {frame >= 3780 && (
            <div style={{
              position: 'absolute',
              top: height * 0.18,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 3780, 20),
            }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 20,
                padding: 30,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#60a5fa', marginBottom: 24, textAlign: 'center', letterSpacing: '1px'}}>
                  Core API Gateway Features
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                  {/* Authentication */}
                  {frame >= 3840 && (
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid #10b981',
                      borderRadius: 16,
                      padding: 20,
                      opacity: fadeIn(frame, 3840, 20),
                    }}>
                      <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                        🔐 Authentication & Authorization
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                        • Verify JWT tokens<br/>
                        • OAuth 2.0 / API keys<br/>
                        • Reject unauthorized requests<br/>
                        • Single auth layer for all services
                      </div>
                    </div>
                  )}

                  {/* Rate Limiting */}
                  {frame >= 3930 && (
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid #ef4444',
                      borderRadius: 16,
                      padding: 20,
                      opacity: fadeIn(frame, 3930, 20),
                    }}>
                      <div style={{fontSize: 22, color: '#ef4444', fontWeight: 'bold', marginBottom: 12}}>
                        ⏱️ Rate Limiting
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                        • Limit: 100 requests/minute per user<br/>
                        • Prevent DDoS attacks<br/>
                        • Fair usage policies<br/>
                        • Return 429 Too Many Requests
                      </div>
                    </div>
                  )}

                  {/* Request Transformation */}
                  {frame >= 4020 && (
                    <div style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid #8b5cf6',
                      borderRadius: 16,
                      padding: 20,
                      opacity: fadeIn(frame, 4020, 20),
                    }}>
                      <div style={{fontSize: 22, color: '#a78bfa', fontWeight: 'bold', marginBottom: 12}}>
                        🔄 Request/Response Transformation
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                        • Convert XML ↔ JSON<br/>
                        • Add/remove headers<br/>
                        • Aggregate multiple API calls<br/>
                        • Versioning (v1, v2 routing)
                      </div>
                    </div>
                  )}

                  {/* Load Balancing & Monitoring */}
                  {frame >= 4110 && (
                    <div style={{
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid #f59e0b',
                      borderRadius: 16,
                      padding: 20,
                      opacity: fadeIn(frame, 4110, 20),
                    }}>
                      <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 12}}>
                        ⚖️ Load Balancing & Monitoring
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                        • Distribute requests across servers<br/>
                        • Health checks & circuit breakers<br/>
                        • Logging, metrics, tracing<br/>
                        • Real-time analytics dashboard
                      </div>
                    </div>
                  )}
                </div>

                {frame >= 4200 && (
                  <div style={{
                    marginTop: 24,
                    background: 'linear-gradient(90deg, rgba(96, 165, 250, 0.1), rgba(96, 165, 250, 0.05))',
                    border: '1px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: 12,
                    padding: 16,
                    opacity: fadeIn(frame, 4200, 20),
                  }}>
                    <div style={{fontSize: 18, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Popular Gateways:</span> AWS API Gateway, Kong, NGINX, Apigee, Azure API Management
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 6: CDN + API Gateway Together (4275-4950 frames / 142.5-165s) */}
      {frame >= 4275 && frame < 4950 && (
        <>
          <Title text="CDN + API Gateway: Complete Flow" subtitle="Cache Miss → API Call → Cache Hit Lifecycle" startFrame={4275} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 4560 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.66} startFrame={4285} size={90} />
              <Character type="architect" x={width * 0.75} y={height * 0.66} startFrame={4285} size={90} />

              <Dialogue
                speaker="junior"
                text="Walk me through a real production scenario. What exactly happens from the first request to a cached response?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={4305}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Sure! Let's trace the lifecycle: cache miss, API gateway routing, and then cache hit. This is the standard flow for modern apps."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={4425}
                maxWidth={540}
              />
            </>
          )}

          {/* Detailed Flow Diagram with complete lifecycle - SIMPLIFIED LAYOUT */}
          {frame >= 4650 && (
            <div style={{
              position: 'absolute',
              top: height * 0.14,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 4650, 20),
            }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 20,
                padding: 24,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 20, textAlign: 'center', letterSpacing: '1px'}}>
                  Complete Request Flow: User → CDN → API Gateway → Backend
                </div>

                <div style={{position: 'relative', height: 280}}>
                  {/* User/Browser */}
                  <div style={{
                    position: 'absolute',
                    top: 100,
                    left: 60,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 4680, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 100,
                      height: 80,
                      background: 'linear-gradient(145deg, #60a5fa, #3b82f6)',
                      borderRadius: 12,
                      border: '1px solid #93c5fd',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 32}}>👤</div>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>User</div>
                    </div>
                    <div style={{fontSize: 18, color: '#60a5fa', marginTop: 6, fontWeight: '500'}}>Tokyo</div>
                  </div>

                  {/* CDN Edge Server */}
                  <div style={{
                    position: 'absolute',
                    top: 95,
                    left: width * 0.30,
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    opacity: fadeIn(frame, 4710, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 120,
                      height: 90,
                      background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
                      borderRadius: 12,
                      border: '1px solid #a78bfa',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 32}}>🌏</div>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>CDN Edge</div>
                    </div>
                    <div style={{fontSize: 18, color: '#a78bfa', marginTop: 6, fontWeight: '500'}}>Edge Cache</div>
                  </div>

                  {/* API Gateway */}
                  <div style={{
                    position: 'absolute',
                    top: 90,
                    left: width * 0.55,
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    opacity: fadeIn(frame, 4740, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 140,
                      height: 100,
                      background: 'linear-gradient(145deg, #f59e0b, #d97706)',
                      borderRadius: 12,
                      border: '1px solid #fbbf24',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                      transform: `scale(${pulse(frame, 60)})`,
                    }}>
                      <div style={{fontSize: 36}}>🚪</div>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>API Gateway</div>
                    </div>
                    <div style={{fontSize: 18, color: '#f59e0b', marginTop: 6, fontWeight: '500'}}>Smart Router</div>
                  </div>

                  {/* Backend Services */}
                  <div style={{
                    position: 'absolute',
                    top: 95,
                    right: 80,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 4770, 20),
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: 120,
                      height: 90,
                      background: 'linear-gradient(145deg, #10b981, #059669)',
                      borderRadius: 12,
                      border: '1px solid #34d399',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}>
                      <div style={{fontSize: 32}}>⚙️</div>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Services</div>
                    </div>
                    <div style={{fontSize: 18, color: '#10b981', marginTop: 6, fontWeight: '500'}}>Backend</div>
                  </div>

                  {/* Connection Arrows - Properly aligned to component centers */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                    <defs>
                      <filter id="glow-complete-flow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* User to CDN */}
                    <Arrow
                      x1={s6UserX + 50}
                      y1={s6UserY}
                      x2={s6CdnX - 60}
                      y2={s6CdnY}
                      color={theme.colors.client}
                      startFrame={4717}
                      label="Request"
                    />

                    {/* CDN to Gateway */}
                    <Arrow
                      x1={s6CdnX + 60}
                      y1={s6CdnY}
                      x2={s6GatewayX - 70}
                      y2={s6GatewayY}
                      color={theme.colors.eventStream}
                      startFrame={4747}
                      label="API Call"
                    />

                    {/* Gateway to Services */}
                    <Arrow
                      x1={s6GatewayX + 70}
                      y1={s6GatewayY}
                      x2={s6ServicesX - 60}
                      y2={s6ServicesY}
                      color={theme.colors.backend}
                      startFrame={4777}
                      label="Route"
                    />

                    {/* Response flow back - Services to Gateway */}
                    <Arrow
                      x1={s6ServicesX - 60}
                      y1={s6ServicesY + 20}
                      x2={s6GatewayX + 70}
                      y2={s6GatewayY + 20}
                      color={theme.colors.success}
                      startFrame={4807}
                      dashed={true}
                    />

                    {/* Gateway to CDN (caching) */}
                    <Arrow
                      x1={s6GatewayX - 70}
                      y1={s6GatewayY + 20}
                      x2={s6CdnX + 60}
                      y2={s6CdnY + 20}
                      color={theme.colors.cdn}
                      startFrame={4830}
                      label="Cache!"
                    />

                    {/* Data flow particles - User to CDN */}
                    <DataFlowParticle
                      x1={s6UserX + 50}
                      y1={s6UserY}
                      x2={s6CdnX - 60}
                      y2={s6CdnY}
                      startFrame={4725}
                      duration={45}
                      color={theme.colors.client}
                    />
                    <DataFlowParticle
                      x1={s6UserX + 50}
                      y1={s6UserY}
                      x2={s6CdnX - 60}
                      y2={s6CdnY}
                      startFrame={4755}
                      duration={45}
                      color={theme.colors.client}
                    />

                    {/* CDN to Gateway */}
                    <DataFlowParticle
                      x1={s6CdnX + 60}
                      y1={s6CdnY}
                      x2={s6GatewayX - 70}
                      y2={s6GatewayY}
                      startFrame={4755}
                      duration={45}
                      color={theme.colors.eventStream}
                    />
                    <DataFlowParticle
                      x1={s6CdnX + 60}
                      y1={s6CdnY}
                      x2={s6GatewayX - 70}
                      y2={s6GatewayY}
                      startFrame={4785}
                      duration={45}
                      color={theme.colors.eventStream}
                    />

                    {/* Gateway to Services */}
                    <DataFlowParticle
                      x1={s6GatewayX + 70}
                      y1={s6GatewayY}
                      x2={s6ServicesX - 60}
                      y2={s6ServicesY}
                      startFrame={4785}
                      duration={45}
                      color={theme.colors.backend}
                    />
                    <DataFlowParticle
                      x1={s6GatewayX + 70}
                      y1={s6GatewayY}
                      x2={s6ServicesX - 60}
                      y2={s6ServicesY}
                      startFrame={4815}
                      duration={45}
                      color={theme.colors.backend}
                    />

                    {/* Response - Services to Gateway */}
                    <DataFlowParticle
                      x1={s6ServicesX - 60}
                      y1={s6ServicesY + 20}
                      x2={s6GatewayX + 70}
                      y2={s6GatewayY + 20}
                      startFrame={4815}
                      duration={45}
                      color={theme.colors.success}
                    />
                    <DataFlowParticle
                      x1={s6ServicesX - 60}
                      y1={s6ServicesY + 20}
                      x2={s6GatewayX + 70}
                      y2={s6GatewayY + 20}
                      startFrame={4845}
                      duration={45}
                      color={theme.colors.success}
                    />

                    {/* Caching - Gateway to CDN */}
                    <DataFlowParticle
                      x1={s6GatewayX - 70}
                      y1={s6GatewayY + 20}
                      x2={s6CdnX + 60}
                      y2={s6CdnY + 20}
                      startFrame={4837}
                      duration={45}
                      color={theme.colors.cdn}
                    />
                    <DataFlowParticle
                      x1={s6GatewayX - 70}
                      y1={s6GatewayY + 20}
                      x2={s6CdnX + 60}
                      y2={s6CdnY + 20}
                      startFrame={4867}
                      duration={45}
                      color={theme.colors.cdn}
                    />
                  </svg>
                </div>

                {/* Flow explanation */}
                {frame >= 4860 && (
                  <div style={{
                    marginTop: 24,
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid #8b5cf6',
                    borderRadius: 12,
                    padding: 20,
                    opacity: fadeIn(frame, 4860, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.9}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Complete Flow:</span> User → CDN (cache check) → API Gateway (auth/route) → Services →
                      <span style={{color: '#10b981', fontWeight: 'bold'}}> Response back</span> →
                      <span style={{color: '#06b6d4', fontWeight: 'bold'}}> Cached at CDN!</span> →
                      Next request served in ~8ms 🚀
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Detailed Production Flow Explanation - Architect Level */}
          {frame >= 4650 && (
            <div style={{
              position: 'absolute',
              top: height * 0.52,
              left: width * 0.04,
              right: width * 0.04,
              opacity: fadeIn(frame, 4650, 20),
            }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 20,
                padding: 24,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#60a5fa', textShadow: '0 0 20px rgba(96, 165, 250, 0.5)', marginBottom: 16, textAlign: 'center', letterSpacing: '1px'}}>
                  Production Request Lifecycle
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontSize: 18, color: '#e2e8f0', lineHeight: 1.8}}>
                  {/* Flow 1: Static Asset Cache MISS */}
                  <div style={{opacity: fadeIn(frame, 4695, 15)}}>
                    <div style={{fontSize: 20, color: '#ef4444', fontWeight: 'bold', marginBottom: 8}}>
                      📦 Static Asset - Cache MISS (~85ms)
                    </div>
                    <div>
                      1. User → <span style={{color: '#fbbf24'}}>GET /bundle.js</span><br/>
                      2. CDN Edge: Cache check → <span style={{color: '#ef4444'}}>MISS</span><br/>
                      3. Forward to Origin (60ms latency)<br/>
                      4. Origin → <span style={{color: '#10b981'}}>Cache-Control: 1 year</span><br/>
                      5. <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Store at Edge</span> → Serve to user<br/>
                      <span style={{fontSize: 18, color: '#94a3b8'}}>⏱️ 85ms (one-time penalty)</span>
                    </div>
                  </div>

                  {/* Flow 2: API Request Through Gateway */}
                  <div style={{opacity: fadeIn(frame, 4747, 15)}}>
                    <div style={{fontSize: 20, color: '#f59e0b', fontWeight: 'bold', marginBottom: 8}}>
                      🚪 API via Gateway - First Call (~50ms)
                    </div>
                    <div>
                      1. User → <span style={{color: '#fbbf24'}}>GET /api/products</span><br/>
                      2. API Gateway: JWT validation<br/>
                      3. Rate limit: 100/min → <span style={{color: '#10b981'}}>✓ Pass</span><br/>
                      4. Route to Service → DB query<br/>
                      5. Response + <span style={{color: '#10b981'}}>Cache-Control: 60s</span><br/>
                      6. <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Cached at CDN Edge!</span><br/>
                      <span style={{fontSize: 18, color: '#94a3b8'}}>⏱️ 50ms (full API flow)</span>
                    </div>
                  </div>

                  {/* Flow 3: Static Asset Cache HIT */}
                  <div style={{opacity: fadeIn(frame, 4800, 15)}}>
                    <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>
                      ⚡ Static Asset - Cache HIT (~5ms)
                    </div>
                    <div>
                      1. Another user → <span style={{color: '#fbbf24'}}>GET /bundle.js</span><br/>
                      2. CDN Edge: Cache check → <span style={{color: '#10b981', fontWeight: 'bold'}}>HIT!</span><br/>
                      3. <span style={{color: '#8b5cf6'}}>Serve from memory</span><br/>
                      4. No origin/gateway needed<br/>
                      5. 94% faster (85ms → 5ms)<br/>
                      <span style={{fontSize: 18, color: '#94a3b8'}}>⏱️ 5ms (edge cache win!)</span>
                    </div>
                  </div>

                  {/* Flow 4: API Cache HIT */}
                  <div style={{opacity: fadeIn(frame, 4852, 15)}}>
                    <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 8}}>
                      🚀 API via CDN - Cache HIT (~8ms)
                    </div>
                    <div>
                      1. User → <span style={{color: '#fbbf24'}}>GET /api/products</span><br/>
                      2. <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>CDN intercepts!</span> Cache check → <span style={{color: '#10b981'}}>HIT!</span><br/>
                      3. Serve cached API response<br/>
                      4. <span style={{color: '#ef4444', fontWeight: 'bold'}}>No API Gateway/Service hit!</span><br/>
                      5. 84% faster (50ms → 8ms)<br/>
                      6. Massive backend load reduction<br/>
                      <span style={{fontSize: 18, color: '#94a3b8'}}>⏱️ 8ms (CDN serving API!)</span>
                    </div>
                  </div>
                </div>

                {/* Production Considerations */}
                {frame >= 4905 && (
                  <div style={{
                    marginTop: 16,
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid #8b5cf6',
                    borderRadius: 12,
                    padding: 16,
                    opacity: fadeIn(frame, 4905, 15),
                  }}>
                    <div style={{fontSize: 20, color: '#a78bfa', fontWeight: 'bold', marginBottom: 8, textAlign: 'center'}}>
                      🏗️ Production Patterns
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
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

      {/* Scene 7: Real-World Examples & Next Steps (4950-5400 frames / 165-180s) */}
      {frame >= 4950 && frame < 5400 && (
        <>
          <Title text="Real-World Impact" subtitle="Industry Examples & What's Next" startFrame={4950} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 5100 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.65} startFrame={4960} size={100} />
              <Character type="architect" x={width * 0.75} y={height * 0.65} startFrame={4960} size={100} />
            </>
          )}

          {/* Real-World Examples */}
          {frame >= 4995 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.12,
              right: width * 0.12,
              opacity: fadeIn(frame, 4995, 20),
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

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 2.2}}>
                  <div style={{opacity: fadeIn(frame, 5055, 15)}}>
                    <span style={{fontSize: 24}}>🎬</span> <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Netflix:</span> Cloudflare CDN + Zuul API Gateway → Serves 200M+ users globally
                  </div>
                  <div style={{opacity: fadeIn(frame, 5115, 15)}}>
                    <span style={{fontSize: 24}}>🛒</span> <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Amazon:</span> CloudFront CDN + Custom Gateway → 99.99% availability
                  </div>
                  <div style={{opacity: fadeIn(frame, 5175, 15)}}>
                    <span style={{fontSize: 24}}>🎵</span> <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Spotify:</span> Fastly CDN + Kong Gateway → Handles billions of API requests/day
                  </div>
                </div>

                {frame >= 5235 && (
                  <div style={{
                    marginTop: 24,
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid #8b5cf6',
                    borderRadius: 16,
                    padding: 20,
                    opacity: fadeIn(frame, 5235, 20),
                  }}>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: '#a78bfa', textAlign: 'center', marginBottom: 10}}>
                      🚀 What's Next?
                    </div>
                    <div style={{fontSize: 24, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.8}}>
                      Next up: <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Database Scaling & Caching</span><br/>
                      Learn about sharding, replication, Redis, and more!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {frame < 5100 && (
            <Dialogue
              speaker="junior"
              text="This is brilliant! So the CDN handles the speed, and the Gateway manages the complexity. A perfect team!"
              x={width * 0.10}
              y={height * 0.64}
              startFrame={5010}
              maxWidth={500}
            />
          )}
        </>
      )}

    </AbsoluteFill>
  );
};
