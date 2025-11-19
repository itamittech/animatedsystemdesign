import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Client-Server, DNS & Proxies - Teaching Through Visual Flow
 * Sarah (student) asks questions, Developer (teacher) explains
 * Developer GUIDES you through each visual flow step-by-step
 */
export const ClientServerDNSProxies: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Elegant animated flow line component (for DNS scene)
  const FlowLine: React.FC<{
    x1: number; y1: number; x2: number; y2: number;
    label?: string; color?: string; startFrame: number;
  }> = ({x1, y1, x2, y2, label, color = theme.colors.success, startFrame}) => {
    const opacity = fadeIn(frame, startFrame, 10);
    const progress = frame >= startFrame
      ? interpolate(frame - startFrame, [0, 20], [0, 1], {extrapolateRight: 'clamp'})
      : 0;

    const currentX2 = x1 + (x2 - x1) * progress;
    const currentY2 = y1 + (y2 - y1) * progress;

    return (
      <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity}}>
        <defs>
          <marker
            id={`arrow-${startFrame}`}
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 8 4, 0 8" fill={color} />
          </marker>
        </defs>
        <line
          x1={x1}
          y1={y1}
          x2={currentX2}
          y2={currentY2}
          stroke={color}
          strokeWidth="2"
          strokeDasharray="4 2"
          markerEnd={`url(#arrow-${startFrame})`}
          opacity="0.8"
        />
        {label && progress > 0.5 && (
          <text
            x={(x1 + currentX2) / 2}
            y={(y1 + currentY2) / 2 - 12}
            fill={color}
            fontSize="22"
            fontWeight="600"
            textAnchor="middle"
            opacity={interpolate(frame - startFrame, [10, 25], [0, 1], {extrapolateRight: 'clamp'})}
          >
            {label}
          </text>
        )}
      </svg>
    );
  };

  // Flowing dot animation component (for proxy scene)
  const FlowingDot: React.FC<{
    x1: number; y1: number; x2: number; y2: number;
    startFrame: number; duration?: number; color?: string;
  }> = ({x1, y1, x2, y2, startFrame, duration = 40, color = '#60a5fa'}) => {
    if (frame < startFrame || frame > startFrame + duration) return null;

    const progress = interpolate(
      frame - startFrame,
      [0, duration],
      [0, 1],
      {extrapolateRight: 'clamp'}
    );

    const currentX = x1 + (x2 - x1) * progress;
    const currentY = y1 + (y2 - y1) * progress;

    return (
      <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
        <circle
          cx={currentX}
          cy={currentY}
          r="6"
          fill={color}
          opacity="0.9"
        >
          <animate attributeName="r" values="6;8;6" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle
          cx={currentX}
          cy={currentY}
          r="10"
          fill={color}
          opacity="0.3"
        />
      </svg>
    );
  };

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

      {/* Scene 1: The Journey Begins (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="How the Internet Really Works" subtitle="A Journey from google.com to Your Screen" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.62} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.56} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="When I type 'google.com' and press Enter, what actually happens? How does my browser know where to go?"
            x={width * 0.05}
            y={height * 0.73}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Let's trace this journey together. First, computers don't understand 'google.com' - they only speak in IP addresses."
            x={width * 0.72 - 280}
            y={height * 0.67}
            startFrame={150}
            maxWidth={520}
          />

          {/* Show IP Address concept */}
          {frame >= 240 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.25,
              width: 600,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 28,
              opacity: fadeIn(frame, 240, 20),
              transform: `scale(${pulse(frame, 60)})`,
            }}>
              <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.client, marginBottom: 16, textAlign: 'center', textShadow: '0 0 20px rgba(96, 165, 250, 0.6)', letterSpacing: '1px'}}>
                💻 IP Address: The Computer's Address
              </div>
              <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 2, textAlign: 'center'}}>
                <div style={{fontSize: 36, fontWeight: 'bold', color: '#fbbf24', marginBottom: 12, textShadow: '0 0 30px rgba(251, 191, 36, 0.7)', letterSpacing: '2px'}}>
                  142.250.185.46
                </div>
                <div style={{fontSize: 24, color: '#94a3b8'}}>
                  Every device on the internet has a unique IP address.<br/>
                  <span style={{fontWeight: 'bold', color: '#60a5fa'}}>IPv4</span> uses 32 bits (4.3 billion addresses - now exhausted!)<br/>
                  <span style={{color: '#10b981', fontWeight: 'bold', textShadow: '0 0 15px rgba(16, 185, 129, 0.6)'}}>IPv6 uses 128 bits</span> - solving the shortage problem
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: DNS Discovery WITH STEP-BY-STEP FLOW (450-1080 frames / 15-36s) */}
      {frame >= 450 && frame < 1080 && (
        <>
          <Title text="DNS: The Internet's Phone Book" subtitle="How Domain Names Become IP Addresses" startFrame={450} />

          <Character type="junior" x={width * 0.15} y={height * 0.64} startFrame={460} size={95} />
          <Character type="architect" x={width * 0.78} y={height * 0.58} startFrame={460} size={95} />

          <Dialogue
            speaker="junior"
            text="Okay, so I typed 'google.com' but computers need IP addresses. How does that conversion happen?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={480}
            maxWidth={450}
          />

          <Dialogue
            speaker="architect"
            text="That's where DNS comes in! It's a hierarchy of servers. Let me show you step by step..."
            x={width * 0.78 - 300}
            y={height * 0.68}
            startFrame={570}
            maxWidth={500}
          />

          {/* DNS Hierarchy WITH GUIDED FLOW */}
          {frame >= 650 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 650, 15),
            }}>
              {/* Browser */}
              <div style={{
                position: 'absolute',
                top: 10,
                left: width * 0.05,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 42}}>💻</div>
                <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.client, marginTop: 6, textShadow: '0 0 15px rgba(96, 165, 250, 0.5)'}}>Your Browser</div>
                <div style={{fontSize: 20, color: '#94a3b8', marginTop: 4, fontStyle: 'italic'}}>google.com?</div>
              </div>

              {/* Root DNS */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: width * 0.35,
                width: 160,
                backgroundColor: '#dc2626',
                borderRadius: 12,
                border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                padding: 16,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
              }}>
                <div style={{fontSize: 28}}>🌍</div>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 6}}>Root DNS</div>
                <div style={{fontSize: 18, color: '#fca5a5', marginTop: 4}}>13 servers</div>
              </div>

              {/* TLD DNS */}
              <div style={{
                position: 'absolute',
                top: 130,
                left: width * 0.35,
                width: 160,
                backgroundColor: theme.colors.cache,
                borderRadius: 12,
                border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                padding: 14,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                opacity: fadeIn(frame, 720, 15),
              }}>
                <div style={{fontSize: 24}}>🔗</div>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 6}}>TLD Server</div>
                <div style={{fontSize: 18, color: '#fcd34d', marginTop: 4}}>.com registry</div>
              </div>

              {/* Authoritative DNS */}
              <div style={{
                position: 'absolute',
                top: 260,
                left: width * 0.35,
                width: 160,
                backgroundColor: theme.colors.success,
                borderRadius: 12,
                border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                padding: 14,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                opacity: fadeIn(frame, 800, 15),
              }}>
                <div style={{fontSize: 24}}>📋</div>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 6}}>Authoritative</div>
                <div style={{fontSize: 18, color: '#6ee7b7', marginTop: 4}}>google.com</div>
              </div>

              {/* STEP-BY-STEP FLOW with Developer narration */}

              {/* Step 1: Browser → Root DNS */}
              {frame >= 680 && (
                <>
                  <FlowLine
                    x1={width * 0.05 + 40}
                    y1={35}
                    x2={width * 0.35}
                    y2={50}
                    label="STEP 1"
                    color={theme.colors.client}
                    startFrame={680}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 300,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid rgba(96, 165, 250, 0.4)',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 680, 10),
                  }}>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.client, marginBottom: 6}}>
                      STEP 1: Browser asks Root
                    </div>
                    <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.6}}>
                      "Where can I find .com domains?"
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Root → TLD */}
              {frame >= 750 && (
                <>
                  <FlowLine
                    x1={width * 0.35 + 80}
                    y1={85}
                    x2={width * 0.35 + 80}
                    y2={130}
                    label="STEP 2"
                    color="#fbbf24"
                    startFrame={750}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 95,
                    right: 0,
                    width: 300,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 750, 10),
                  }}>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: '#fbbf24', marginBottom: 6}}>
                      STEP 2: Root points to TLD
                    </div>
                    <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.6}}>
                      "Ask the .com TLD server!"
                    </div>
                  </div>
                </>
              )}

              {/* Step 3: TLD → Authoritative */}
              {frame >= 830 && (
                <>
                  <FlowLine
                    x1={width * 0.35 + 80}
                    y1={190}
                    x2={width * 0.35 + 80}
                    y2={260}
                    label="STEP 3"
                    color="#f59e0b"
                    startFrame={830}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 195,
                    right: 0,
                    width: 300,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 830, 10),
                  }}>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: '#f59e0b', marginBottom: 6}}>
                      STEP 3: TLD points to google
                    </div>
                    <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.6}}>
                      "Ask google.com's nameserver!"
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Authoritative → Browser (return) */}
              {frame >= 910 && (
                <>
                  <FlowLine
                    x1={width * 0.35}
                    y1={300}
                    x2={width * 0.05 + 40}
                    y2={80}
                    label="STEP 4"
                    color={theme.colors.success}
                    startFrame={910}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 295,
                    right: 0,
                    width: 300,
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    borderRadius: 10,
                    padding: 14,
                    opacity: fadeIn(frame, 910, 10),
                  }}>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.success, marginBottom: 6}}>
                      STEP 4: Returns IP address
                    </div>
                    <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.6}}>
                      "Here it is: 142.250.185.46"
                    </div>
                  </div>
                </>
              )}

              {/* Animated particles showing data flow */}
              {frame >= 1000 && (
                <>
                  <DataFlowStream x1={width * 0.05 + 40} y1={35} x2={width * 0.35} y2={50} startFrame={1000} />
                  <DataFlowStream x1={width * 0.35 + 80} y1={85} x2={width * 0.35 + 80} y2={130} startFrame={1010} />
                  <DataFlowStream x1={width * 0.35 + 80} y1={190} x2={width * 0.35 + 80} y2={260} startFrame={1020} />
                  <DataFlowStream x1={width * 0.35} y1={300} x2={width * 0.05 + 40} y2={80} startFrame={1030} />
                </>
              )}
            </div>
          )}

          {/* Developer explains the flow */}
          {frame >= 990 && (
            <Dialogue
              speaker="architect"
              text="See? Four steps: Browser→Root→TLD→Authoritative→Back to Browser with the IP!"
              x={width * 0.78 - 300}
              y={height * 0.68}
              startFrame={990}
              maxWidth={500}
            />
          )}
        </>
      )}

      {/* Scene 3: Security with TLS IN DETAIL (1080-2040 frames / 36-68s) - EXPANDED */}
      {frame >= 1080 && frame < 2040 && (
        <>
          <Title text="Making It Secure with TLS" subtitle="Encryption, Certificates & Cryptography" startFrame={1080} />

          <Character type="junior" x={width * 0.18} y={height * 0.64} startFrame={1090} size={95} />
          <Character type="architect" x={width * 0.75} y={height * 0.58} startFrame={1090} size={95} />

          <Dialogue
            speaker="junior"
            text="Got it! DNS found the IP. But how do we know we're really talking to Google and not a hacker?"
            x={width * 0.05}
            y={height * 0.74}
            startFrame={1110}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Excellent question! TLS has three jobs: verify identity, negotiate encryption, and secure data. Let me show you the handshake first..."
            x={width * 0.75 - 320}
            y={height * 0.68}
            startFrame={1140}
            maxWidth={540}
          />

          {/* PART 0: TLS Handshake Visual Flow (1140-1260) */}
          {frame >= 1140 && frame < 1260 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.1,
              right: width * 0.1,
              opacity: fadeIn(frame, 1140, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#60a5fa', marginBottom: 20, textAlign: 'center', textShadow: '0 0 20px rgba(96, 165, 250, 0.6)', letterSpacing: '1.5px'}}>
                  TLS Handshake: The Security Dance 🔐
                </div>

                {/* Visual Flow */}
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  {/* Client Side */}
                  <div style={{flex: 1, textAlign: 'center'}}>
                    <div style={{fontSize: 48, marginBottom: 8}}>💻</div>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.client}}>Browser</div>
                  </div>

                  {/* Handshake Steps */}
                  <div style={{flex: 2, padding: '0 20px'}}>
                    {frame >= 1160 && (
                      <div style={{
                        backgroundColor: 'rgba(96, 165, 250, 0.15)',
                        border: '2px solid rgba(96, 165, 250, 0.4)',
                        borderRadius: 10,
                        padding: 12,
                        marginBottom: 10,
                        opacity: fadeIn(frame, 1160, 10),
                      }}>
                        <div style={{fontSize: 22, color: '#60a5fa', fontWeight: 'bold', marginBottom: 4}}>
                          1. ClientHello →
                        </div>
                        <div style={{fontSize: 20, color: '#e2e8f0'}}>
                          Supported cipher suites, TLS version, random number
                        </div>
                      </div>
                    )}

                    {frame >= 1180 && (
                      <div style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        border: '2px solid rgba(16, 185, 129, 0.4)',
                        borderRadius: 10,
                        padding: 12,
                        marginBottom: 10,
                        opacity: fadeIn(frame, 1180, 10),
                      }}>
                        <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 4, textAlign: 'right'}}>
                          ← 2. ServerHello + Certificate
                        </div>
                        <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'right'}}>
                          Chosen cipher suite, certificate chain, random number
                        </div>
                      </div>
                    )}

                    {frame >= 1200 && (
                      <div style={{
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        border: '2px solid rgba(139, 92, 246, 0.4)',
                        borderRadius: 10,
                        padding: 12,
                        marginBottom: 10,
                        opacity: fadeIn(frame, 1200, 10),
                      }}>
                        <div style={{fontSize: 22, color: '#a78bfa', fontWeight: 'bold', marginBottom: 4}}>
                          3. Key Exchange →
                        </div>
                        <div style={{fontSize: 20, color: '#e2e8f0'}}>
                          Client generates & encrypts pre-master secret
                        </div>
                      </div>
                    )}

                    {frame >= 1220 && (
                      <div style={{
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        border: '2px solid rgba(245, 158, 11, 0.4)',
                        borderRadius: 10,
                        padding: 12,
                        opacity: fadeIn(frame, 1220, 10),
                      }}>
                        <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 4, textAlign: 'center'}}>
                          4. ✓ Both send "Finished" (encrypted)
                        </div>
                        <div style={{fontSize: 20, color: '#e2e8f0', textAlign: 'center'}}>
                          Secure tunnel established! 🔒
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Server Side */}
                  <div style={{flex: 1, textAlign: 'center'}}>
                    <div style={{fontSize: 48, marginBottom: 8}}>🖥️</div>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.server}}>Server</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PART 1: Cipher Suite Negotiation (1280-1540) */}
          {frame >= 1280 && frame < 1540 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1280, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.client, marginBottom: 16, textAlign: 'center'}}>
                  Step 1: Cipher Suite Negotiation
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  Browser says: "I support these encryption methods (cipher suites)..."
                </div>

                {/* Cipher Suite Breakdown */}
                <div style={{
                  backgroundColor: 'rgba(96, 165, 250, 0.1)',
                  border: '2px solid rgba(96, 165, 250, 0.3)',
                  borderRadius: 12,
                  padding: 20,
                  marginTop: 16,
                  opacity: fadeIn(frame, 1320, 20),
                }}>
                  <div style={{fontSize: 20, fontWeight: 'bold', background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12, textAlign: 'center', letterSpacing: '1px'}}>
                    TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 16}}>
                    <div style={{opacity: fadeIn(frame, 1360, 15)}}>
                      <div style={{fontSize: 24, fontWeight: 'bold', color: '#60a5fa', textShadow: '0 0 20px rgba(96, 165, 250, 0.5)', marginBottom: 6}}>ECDHE</div>
                      <div style={{fontSize: 22, color: '#94a3b8'}}>Key Exchange<br/>Elliptic Curve Diffie-Hellman</div>
                    </div>
                    <div style={{opacity: fadeIn(frame, 1400, 15)}}>
                      <div style={{fontSize: 24, fontWeight: 'bold', color: '#10b981', textShadow: '0 0 20px rgba(16, 185, 129, 0.5)', marginBottom: 6}}>RSA</div>
                      <div style={{fontSize: 22, color: '#94a3b8'}}>Authentication<br/>Verifies server identity</div>
                    </div>
                    <div style={{opacity: fadeIn(frame, 1440, 15)}}>
                      <div style={{fontSize: 24, fontWeight: 'bold', color: '#a78bfa', marginBottom: 6}}>AES-256-GCM</div>
                      <div style={{fontSize: 22, color: '#94a3b8'}}>Bulk Encryption<br/>Encrypts actual data</div>
                    </div>
                    <div style={{opacity: fadeIn(frame, 1480, 15)}}>
                      <div style={{fontSize: 24, fontWeight: 'bold', color: '#fbbf24', marginBottom: 6}}>SHA384</div>
                      <div style={{fontSize: 22, color: '#94a3b8'}}>Hashing<br/>Data integrity check</div>
                    </div>
                  </div>
                </div>

                {frame >= 1510 && (
                  <div style={{marginTop: 16, fontSize: 24, color: '#10b981', textAlign: 'center', opacity: fadeIn(frame, 1510, 15)}}>
                    ✓ Server picks: "Let's use TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PART 2: Certificate Chain Validation (1560-1820) */}
          {frame >= 1560 && frame < 1820 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 1560, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 26, fontWeight: 'bold', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 16, textAlign: 'center', letterSpacing: '1px'}}>
                  Step 2: Certificate Authority Chain
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 20}}>
                  Server proves identity using a certificate chain...
                </div>

                {/* Certificate Chain Visual */}
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative'}}>
                  {/* Root CA */}
                  <div style={{
                    flex: 1,
                    backgroundColor: '#dc2626',
                    border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                    borderRadius: 12,
                    padding: 16,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1600, 20),
                    transform: `scale(${pulse(frame, 60)})`,
                  }}>
                    <div style={{fontSize: 32, marginBottom: 8}}>🏛️</div>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>Root CA</div>
                    <div style={{fontSize: 20, color: '#fca5a5', marginTop: 6}}>DigiCert/Let's Encrypt</div>
                    <div style={{fontSize: 18, color: '#fca5a5', marginTop: 4}}>Trusted by your OS</div>
                  </div>

                  {/* Arrow */}
                  {frame >= 1650 && (
                    <div style={{fontSize: 32, color: '#fbbf24', margin: '0 12px', opacity: fadeIn(frame, 1650, 15)}}>→</div>
                  )}

                  {/* Intermediate CA */}
                  <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.cache,
                    border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                    borderRadius: 12,
                    padding: 16,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1680, 20),
                    transform: `scale(${pulse(frame, 60)})`,
                  }}>
                    <div style={{fontSize: 32, marginBottom: 8}}>📜</div>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>Intermediate CA</div>
                    <div style={{fontSize: 20, color: '#fcd34d', marginTop: 6}}>Signed by Root</div>
                    <div style={{fontSize: 18, color: '#fcd34d', marginTop: 4}}>Issues server certs</div>
                  </div>

                  {/* Arrow */}
                  {frame >= 1730 && (
                    <div style={{fontSize: 32, color: '#fbbf24', margin: '0 12px', opacity: fadeIn(frame, 1730, 15)}}>→</div>
                  )}

                  {/* Server Certificate */}
                  <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.success,
                    border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    borderRadius: 12,
                    padding: 16,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1760, 20),
                    transform: `scale(${pulse(frame, 60)})`,
                  }}>
                    <div style={{fontSize: 32, marginBottom: 8}}>✅</div>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>Server Cert</div>
                    <div style={{fontSize: 20, color: '#6ee7b7', marginTop: 6}}>google.com</div>
                    <div style={{fontSize: 18, color: '#6ee7b7', marginTop: 4}}>Valid: 90 days</div>
                  </div>
                </div>

                {frame >= 1790 && (
                  <div style={{
                    marginTop: 20,
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    border: '2px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: 10,
                    padding: 16,
                    opacity: fadeIn(frame, 1790, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.8}}>
                      Browser verifies: Root CA (trusted) → Intermediate CA (valid signature) → Server (matches google.com)
                      <br/><span style={{color: '#10b981', fontWeight: 'bold'}}>✓ Trust chain validated!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PART 3: Key Exchange & Encryption (1840-2040) */}
          {frame >= 1840 && frame < 2040 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1840, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#a78bfa', marginBottom: 16, textAlign: 'center'}}>
                  Step 3: Key Exchange & Encryption
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                  <div style={{opacity: fadeIn(frame, 1880, 20)}}>
                    <div style={{
                      backgroundColor: 'rgba(96, 165, 250, 0.1)',
                      border: '2px solid rgba(96, 165, 250, 0.3)',
                      borderRadius: 12,
                      padding: 18,
                    }}>
                      <div style={{fontSize: 28, marginBottom: 10, textAlign: 'center'}}>🔑</div>
                      <div style={{fontSize: 18, fontWeight: 'bold', color: '#60a5fa', marginBottom: 10, textAlign: 'center'}}>
                        ECDHE Key Exchange
                      </div>
                      <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.8}}>
                        • Both sides generate keys<br/>
                        • Exchange public keys<br/>
                        • Compute shared secret<br/>
                        • <span style={{color: '#10b981', fontWeight: 'bold'}}>Perfect Forward Secrecy</span>
                      </div>
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 1930, 20)}}>
                    <div style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      border: '2px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: 12,
                      padding: 18,
                    }}>
                      <div style={{fontSize: 28, marginBottom: 10, textAlign: 'center'}}>🔐</div>
                      <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', marginBottom: 10, textAlign: 'center'}}>
                        AES-256-GCM
                      </div>
                      <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.8}}>
                        • Symmetric encryption<br/>
                        • 256-bit key strength<br/>
                        • GCM mode (authenticated)<br/>
                        • <span style={{color: '#10b981', fontWeight: 'bold'}}>Fast & Secure</span>
                      </div>
                    </div>
                  </div>
                </div>

                {frame >= 1980 && (
                  <div style={{
                    marginTop: 20,
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    border: '2px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: 10,
                    padding: 16,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1980, 15),
                  }}>
                    <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.8}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>SHA-384 Hashing:</span> Every message gets a hash to detect tampering
                      <br/><span style={{fontSize: 22, color: '#94a3b8'}}>Ensures data integrity during transmission</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PART 4: Final - Encrypted Communication (1980-2040) */}
          {frame >= 1980 && (
            <div style={{
              position: 'absolute',
              top: height * 0.28,
              left: width * 0.15,
              right: width * 0.15,
              opacity: fadeIn(frame, 2010, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 16,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 42, marginBottom: 12}}>🔒</div>
                <div style={{fontSize: 28, background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', marginBottom: 14, letterSpacing: '1px', textShadow: '0 0 30px rgba(16, 185, 129, 0.4)'}}>
                  Secure Tunnel Established!
                </div>
                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 1.9}}>
                  ✓ Server identity verified via certificate chain<br/>
                  ✓ Strong encryption negotiated (AES-256-GCM)<br/>
                  ✓ Secure keys exchanged (ECDHE with PFS)<br/>
                  ✓ Data integrity protected (SHA-384 hashing)
                </div>
                <div style={{marginTop: 16, fontSize: 22, color: '#fbbf24'}}>
                  <span style={{fontWeight: 'bold'}}>⚡ TLS 1.3 Handshake:</span> ~25ms (1-RTT) vs TLS 1.2 ~50ms (2-RTT)
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Proxies WITH FLOWING DOT (2040-2460 frames / 68-82s) */}
      {frame >= 2040 && frame < 2460 && (
        <>
          <Title text="Proxies: The Smart Helpers" subtitle="Forward vs Reverse Proxies" startFrame={2040} />

          <Character type="junior" x={width * 0.16} y={height * 0.66} startFrame={2050} size={95} />
          <Character type="architect" x={width * 0.77} y={height * 0.60} startFrame={2050} size={95} />

          <Dialogue
            speaker="junior"
            text="This seems like a lot of work! Is there a way to make it faster?"
            x={width * 0.05}
            y={height * 0.76}
            startFrame={2070}
            maxWidth={460}
          />

          <Dialogue
            speaker="architect"
            text="Absolutely! Proxies act as smart helpers. Watch how requests flow through them..."
            x={width * 0.77 - 320}
            y={height * 0.70}
            startFrame={2160}
            maxWidth={540}
          />

          {/* Proxy Flow Diagram - Simplified horizontal layout */}
          {frame >= 2130 && (
            <div style={{
              position: 'absolute',
              top: height * 0.30,
              left: 0,
              width: '100%',
              opacity: fadeIn(frame, 2130, 15),
            }}>
              {/* Define exact positions for perfect alignment */}
              {(() => {
                const centerY = 50; // Vertical center for all boxes
                const boxWidth = 110;
                const boxHeight = 100;
                const gap = 150; // Gap between boxes
                const startX = 200; // Starting X position

                // Calculate positions for each box
                const positions = [
                  { x: startX, label: 'Client', icon: '💻', color: theme.colors.client, borderColor: '#60a5fa' },
                  { x: startX + boxWidth + gap, label: 'Forward\nProxy', icon: '🔀', color: '#8b5cf6', borderColor: '#a78bfa', subtitle: 'Squid :3128', opacity: fadeIn(frame, 2160, 15) },
                  { x: startX + (boxWidth + gap) * 2, label: 'DNS', icon: '🌐', color: theme.colors.cache, borderColor: '#f59e0b' },
                  { x: startX + (boxWidth + gap) * 3, label: 'Reverse\nProxy', icon: '🔀', color: theme.colors.loadBalancer, borderColor: '#60a5fa', subtitle: 'NGINX :443', opacity: fadeIn(frame, 2200, 15) },
                  { x: startX + (boxWidth + gap) * 4, label: 'App\nServer', icon: '🖥️', color: theme.colors.server, borderColor: '#10b981' },
                ];

                return (
                  <>
                    {/* Render all boxes */}
                    {positions.map((pos, i) => (
                      <div
                        key={i}
                        style={{
                          position: 'absolute',
                          left: pos.x,
                          top: centerY - boxHeight / 2,
                          width: boxWidth,
                          height: boxHeight,
                          backgroundColor: pos.color,
                          borderRadius: 12,
                          border: `3px solid ${pos.borderColor}`,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                          opacity: pos.opacity || 1,
                          transform: i === 1 || i === 3 ? `scale(${pulse(frame, 60)})` : 'scale(1)',
                        }}
                      >
                        <div style={{ fontSize: 36, marginBottom: 4 }}>{pos.icon}</div>
                        <div style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>
                          {pos.label}
                        </div>
                        {pos.subtitle && (
                          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>
                            {pos.subtitle}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Connecting lines and flowing dots */}
                    {frame >= 2180 && (
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
                          </marker>
                        </defs>
                        {/* Draw lines connecting boxes */}
                        {positions.slice(0, -1).map((pos, i) => {
                          const x1 = pos.x + boxWidth;
                          const y1 = centerY;
                          const x2 = positions[i + 1].x;
                          const y2 = centerY;

                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#60a5fa"
                              strokeWidth="4"
                              opacity="0.7"
                              markerEnd="url(#arrowhead)"
                            />
                          );
                        })}
                      </svg>
                    )}

                    {/* Single flowing dot animation from start to end */}
                    {frame >= 2180 && frame < 2180 + 120 && (
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <defs>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        {(() => {
                          const progress = interpolate(
                            frame - 2180,
                            [0, 120],
                            [0, 1],
                            { extrapolateRight: 'clamp' }
                          );

                          const totalDistance = positions[positions.length - 1].x + boxWidth / 2 - (positions[0].x + boxWidth / 2);
                          const currentX = positions[0].x + boxWidth / 2 + totalDistance * progress;

                          return (
                            <>
                              <circle
                                cx={currentX}
                                cy={centerY}
                                r="8"
                                fill="#60a5fa"
                                filter="url(#glow)"
                              >
                                <animate attributeName="r" values="8;10;8" dur="0.6s" repeatCount="indefinite" />
                              </circle>
                              <circle
                                cx={currentX}
                                cy={centerY}
                                r="16"
                                fill="#60a5fa"
                                opacity="0.3"
                              />
                            </>
                          );
                        })()}
                      </svg>
                    )}
                  </>
                );
              })()}

              {/* Explanation below */}
              {frame >= 2180 && (
                <div style={{
                  position: 'absolute',
                  top: 180,
                  left: 200,
                  right: 200,
                  display: 'flex',
                  gap: 30,
                  opacity: fadeIn(frame, 2200, 15),
                }}>
                  <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '3px solid rgba(139, 92, 246, 0.5)',
                    borderRadius: 12,
                    padding: 24,
                  }}>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12, textShadow: '0 0 15px rgba(139, 92, 246, 0.5)'}}>
                      Forward Proxy (Client-Side)
                    </div>
                    <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.9}}>
                      • Sits between client and internet<br/>
                      • Caches frequently requested content<br/>
                      • Filters/blocks websites<br/>
                      • Used in corporate networks
                    </div>
                  </div>
                  <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '3px solid rgba(96, 165, 250, 0.5)',
                    borderRadius: 12,
                    padding: 24,
                  }}>
                    <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 12, textShadow: '0 0 15px rgba(96, 165, 250, 0.5)'}}>
                      Reverse Proxy (Server-Side)
                    </div>
                    <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.9}}>
                      • Sits in front of web servers<br/>
                      • TLS termination & load balancing<br/>
                      • Protects backend servers<br/>
                      • CDN edge servers
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 5: Complete Flow Summary (2460-3060 frames / 82-102s) */}
      {frame >= 2460 && frame < 3060 && (
        <>
          <Title text="Putting It All Together" subtitle="The Complete Request Journey" startFrame={2460} />

          <Character type="junior" x={width * 0.14} y={height * 0.68} startFrame={2470} size={95} />
          <Character type="architect" x={width * 0.79} y={height * 0.62} startFrame={2470} size={95} />

          <Dialogue
            speaker="junior"
            text="Can we see how all these pieces - DNS, TLS, proxies - work together in one flow?"
            x={width * 0.05}
            y={height * 0.78}
            startFrame={2490}
            maxWidth={440}
          />

          <Dialogue
            speaker="architect"
            text="Perfect! Let me walk you through the complete journey with timing..."
            x={width * 0.79 - 340}
            y={height * 0.72}
            startFrame={2580}
            maxWidth={560}
          />

          {/* Complete timeline - MOVED LOWER */}
          {frame >= 2670 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.08,
              right: width * 0.08,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 26,
              opacity: fadeIn(frame, 2670, 15),
            }}>
              <div style={{fontSize: 26, fontWeight: 'bold', background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 20, textAlign: 'center', letterSpacing: '1px'}}>
                When You Press Enter on google.com...
              </div>
              <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2.5}}>
                <div style={{opacity: fadeIn(frame, 2700, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>1.</span> <span style={{color: theme.colors.client, fontWeight: 'bold'}}>DNS Lookup</span> (~5ms): Browser cache or local resolver
                </div>
                <div style={{opacity: fadeIn(frame, 2760, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>2.</span> <span style={{color: '#a78bfa', fontWeight: 'bold'}}>TCP Handshake</span> (~15ms): SYN → SYN-ACK → ACK (1 RTT)
                </div>
                <div style={{opacity: fadeIn(frame, 2820, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>3.</span> <span style={{color: '#10b981', fontWeight: 'bold'}}>TLS Handshake</span> (~25ms): ClientHello → ServerHello → Keys → Finished
                </div>
                <div style={{opacity: fadeIn(frame, 2880, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>4.</span> <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>HTTP Request</span> (~8ms): GET / HTTP/2 (multiplexed)
                </div>
                <div style={{opacity: fadeIn(frame, 2940, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>5.</span> <span style={{color: theme.colors.server, fontWeight: 'bold'}}>Server Response</span> (~30ms): HTML/CSS/JS/Images
                </div>
              </div>

              {frame >= 3000 && (
                <div style={{
                  marginTop: 22,
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: 10,
                  padding: 18,
                  opacity: fadeIn(frame, 3000, 15),
                }}>
                  <div style={{fontSize: 18, color: '#e2e8f0', textAlign: 'center', lineHeight: 2}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Total First Visit:</span> <span style={{fontWeight: 'bold', fontSize: 22}}>~85ms</span>
                    {' '}<span style={{color: '#94a3b8'}}>|</span>{' '}
                    <span style={{color: '#10b981', fontWeight: 'bold'}}>Cached:</span> <span style={{fontWeight: 'bold', fontSize: 22}}>~15-25ms!</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 6: Production Best Practices (3060-3240 frames / 102-108s) */}
      {frame >= 3060 && frame < 3240 && (
        <>
          <Title text="Production Best Practices" subtitle="What Architects Need to Know" startFrame={3060} />

          <Character type="junior" x={width * 0.17} y={height * 0.68} startFrame={3070} size={95} />
          <Character type="architect" x={width * 0.76} y={height * 0.62} startFrame={3070} size={95} />

          <Dialogue
            speaker="junior"
            text="This is amazing! What do I need to remember for real production systems?"
            x={width * 0.05}
            y={height * 0.78}
            startFrame={3090}
            maxWidth={470}
          />

          <Dialogue
            speaker="architect"
            text="Here are the key principles that scale to billions of requests..."
            x={width * 0.76 - 340}
            y={height * 0.72}
            startFrame={3160}
            maxWidth={560}
          />

          {/* Best practices cards */}
          {frame >= 3180 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.08,
              right: width * 0.08,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 18,
              opacity: fadeIn(frame, 3180, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 12,
                padding: 18,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.client, marginBottom: 10}}>
                  🌐 DNS Strategy
                </div>
                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  • Dual-stack (IPv4 + IPv6)<br/>
                  • TTL: 3600s for prod<br/>
                  • DNSSEC for security<br/>
                  • Cloudflare/Route53
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 12,
                padding: 18,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', marginBottom: 10}}>
                  🔐 TLS/Security
                </div>
                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  • TLS 1.3 only<br/>
                  • Let's Encrypt auto-renewal<br/>
                  • HSTS headers<br/>
                  • HTTP/3 (QUIC)
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 12,
                padding: 18,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.success, marginBottom: 10}}>
                  🔀 Proxy Setup
                </div>
                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  • NGINX/Envoy reverse proxy<br/>
                  • TLS termination<br/>
                  • Rate limiting<br/>
                  • Static caching
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(245, 158, 11, 0.5)',
                borderRadius: 12,
                padding: 18,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: '#fbbf24', marginBottom: 10}}>
                  ⚡ Performance
                </div>
                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  • Connection pooling<br/>
                  • HTTP/2 multiplexing<br/>
                  • TCP Fast Open<br/>
                  • Prometheus monitoring
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 7: What's Next (3240-3420 frames / 108-114s) */}
      {frame >= 3240 && frame < 3420 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 120,
            left: width / 2 - 360,
            fontSize: 42,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 3240, 20),
          }}>
            You've Mastered the Fundamentals! 🎉
          </div>

          <Character type="junior" x={width * 0.32} y={height * 0.52} startFrame={3260} size={120} />
          <Character type="architect" x={width * 0.62} y={height * 0.52} startFrame={3260} size={120} />

          <Dialogue
            speaker="junior"
            text="This makes so much sense now! What's next?"
            x={width * 0.32 - 240}
            y={height * 0.64}
            startFrame={3280}
            maxWidth={460}
          />

          <Dialogue
            speaker="architect"
            text="Now let's learn about distributing traffic across multiple servers for high availability!"
            x={width * 0.62 - 180}
            y={height * 0.64}
            startFrame={3310}
            maxWidth={500}
          />

          <div style={{
            position: 'absolute',
            bottom: 140,
            left: width / 2 - 320,
            fontSize: 28,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '20px 36px',
            borderRadius: 14,
            border: '3px solid rgba(96, 165, 250, 0.5)',
            opacity: fadeIn(frame, 3350, 20),
            textAlign: 'center',
            textShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
          }}>
            Next Up: Load Balancing & CDNs 🚀
          </div>

          <div style={{
            position: 'absolute',
            bottom: 80,
            left: width / 2 - 280,
            fontSize: 24,
            color: '#94a3b8',
            textAlign: 'center',
            opacity: fadeIn(frame, 3380, 15),
          }}>
            Phase 1: Foundational Infrastructure - Topic 1 of 4 ✅
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
