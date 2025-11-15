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

  // Elegant animated flow line component
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
            fontSize="13"
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

      {/* Scene 1: The Journey Begins (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="How the Internet Really Works" subtitle="A Journey from google.com to Your Screen" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.62} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.62} startFrame={30} size={110} />

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
            y={height * 0.73}
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
              transform: `scale(${pulse(frame, 260, 60)})`,
            }}>
              <div style={{fontSize: 26, fontWeight: 'bold', color: theme.colors.client, marginBottom: 16, textAlign: 'center'}}>
                💻 IP Address: The Computer's Address
              </div>
              <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 2, textAlign: 'center'}}>
                <div style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 12}}>
                  142.250.185.46
                </div>
                <div style={{fontSize: 16, color: '#94a3b8'}}>
                  Every device on the internet has a unique IP address.<br/>
                  IPv4 uses 32 bits (4.3 billion addresses - now exhausted!)<br/>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>IPv6 uses 128 bits</span> - solving the shortage problem
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
          <Character type="architect" x={width * 0.78} y={height * 0.64} startFrame={460} size={95} />

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
            y={height * 0.74}
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
                <div style={{fontSize: 14, fontWeight: 'bold', color: theme.colors.client, marginTop: 6}}>Your Browser</div>
                <div style={{fontSize: 12, color: '#94a3b8', marginTop: 4}}>google.com?</div>
              </div>

              {/* Root DNS */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: width * 0.35,
                width: 160,
                backgroundColor: '#dc2626',
                borderRadius: 12,
                border: '3px solid #ef4444',
                padding: 16,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
              }}>
                <div style={{fontSize: 28}}>🌍</div>
                <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 6}}>Root DNS</div>
                <div style={{fontSize: 11, color: '#fca5a5', marginTop: 4}}>13 servers</div>
              </div>

              {/* TLD DNS */}
              <div style={{
                position: 'absolute',
                top: 130,
                left: width * 0.35,
                width: 160,
                backgroundColor: theme.colors.cache,
                borderRadius: 12,
                border: '3px solid #f59e0b',
                padding: 14,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                opacity: fadeIn(frame, 720, 15),
              }}>
                <div style={{fontSize: 24}}>🔗</div>
                <div style={{fontSize: 15, fontWeight: 'bold', color: '#fff', marginTop: 6}}>TLD Server</div>
                <div style={{fontSize: 11, color: '#fcd34d', marginTop: 4}}>.com registry</div>
              </div>

              {/* Authoritative DNS */}
              <div style={{
                position: 'absolute',
                top: 260,
                left: width * 0.35,
                width: 160,
                backgroundColor: theme.colors.success,
                borderRadius: 12,
                border: '3px solid #10b981',
                padding: 14,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                opacity: fadeIn(frame, 800, 15),
              }}>
                <div style={{fontSize: 24}}>📋</div>
                <div style={{fontSize: 15, fontWeight: 'bold', color: '#fff', marginTop: 6}}>Authoritative</div>
                <div style={{fontSize: 11, color: '#6ee7b7', marginTop: 4}}>google.com</div>
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
                    <div style={{fontSize: 14, fontWeight: 'bold', color: theme.colors.client, marginBottom: 6}}>
                      STEP 1: Browser asks Root
                    </div>
                    <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.6}}>
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
                    <div style={{fontSize: 14, fontWeight: 'bold', color: '#fbbf24', marginBottom: 6}}>
                      STEP 2: Root points to TLD
                    </div>
                    <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.6}}>
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
                    <div style={{fontSize: 14, fontWeight: 'bold', color: '#f59e0b', marginBottom: 6}}>
                      STEP 3: TLD points to google
                    </div>
                    <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.6}}>
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
                    <div style={{fontSize: 14, fontWeight: 'bold', color: theme.colors.success, marginBottom: 6}}>
                      STEP 4: Returns IP address
                    </div>
                    <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.6}}>
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
              y={height * 0.74}
              startFrame={990}
              maxWidth={500}
            />
          )}
        </>
      )}

      {/* Scene 3: Security with TLS FLOW (1080-1560 frames / 36-52s) */}
      {frame >= 1080 && frame < 1560 && (
        <>
          <Title text="Making It Secure with TLS" subtitle="Encrypting the Connection" startFrame={1080} />

          <Character type="junior" x={width * 0.18} y={height * 0.64} startFrame={1090} size={100} />
          <Character type="architect" x={width * 0.75} y={height * 0.64} startFrame={1090} size={100} />

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
            text="Excellent question! Watch how TLS creates an encrypted tunnel. It's a handshake..."
            x={width * 0.75 - 320}
            y={height * 0.74}
            startFrame={1200}
            maxWidth={540}
          />

          {/* TLS Handshake WITH VISUAL FLOW */}
          {frame >= 1290 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.12,
              right: width * 0.12,
              opacity: fadeIn(frame, 1290, 15),
            }}>
              {/* Client and Server */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 48}}>💻</div>
                  <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.client, marginTop: 8}}>Your Browser</div>
                </div>

                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 48}}>🖥️</div>
                  <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.server, marginTop: 8}}>Google Server</div>
                </div>
              </div>

              {/* TLS Handshake Steps with arrows */}
              <div style={{marginTop: 30}}>
                {/* Step 1: ClientHello */}
                {frame >= 1320 && (
                  <>
                    <div style={{
                      position: 'absolute',
                      top: 100,
                      left: 120,
                      fontSize: 14,
                      color: '#60a5fa',
                      fontWeight: 'bold',
                      opacity: fadeIn(frame, 1320, 10),
                    }}>
                      ① ClientHello<br/>
                      <span style={{fontSize: 12, color: '#94a3b8'}}>Cipher suites</span>
                    </div>
                    <FlowLine
                      x1={120}
                      y1={120}
                      x2={width * 0.76 - 120}
                      y2={120}
                      color={theme.colors.client}
                      startFrame={1320}
                    />
                  </>
                )}

                {/* Step 2: ServerHello */}
                {frame >= 1360 && (
                  <>
                    <div style={{
                      position: 'absolute',
                      top: 170,
                      right: 120,
                      fontSize: 14,
                      color: '#10b981',
                      fontWeight: 'bold',
                      textAlign: 'right',
                      opacity: fadeIn(frame, 1360, 10),
                    }}>
                      ② ServerHello<br/>
                      <span style={{fontSize: 12, color: '#94a3b8'}}>Certificate + Key</span>
                    </div>
                    <FlowLine
                      x1={width * 0.76 - 120}
                      y1={190}
                      x2={120}
                      y2={190}
                      color={theme.colors.success}
                      startFrame={1360}
                    />
                  </>
                )}

                {/* Step 3: Keys Generated */}
                {frame >= 1400 && (
                  <>
                    <div style={{
                      position: 'absolute',
                      top: 240,
                      left: 120,
                      fontSize: 14,
                      color: '#fbbf24',
                      fontWeight: 'bold',
                      opacity: fadeIn(frame, 1400, 10),
                    }}>
                      ③ Verify & Create Keys<br/>
                      <span style={{fontSize: 12, color: '#94a3b8'}}>ECDHE exchange</span>
                    </div>
                    <FlowLine
                      x1={120}
                      y1={260}
                      x2={width * 0.76 - 120}
                      y2={260}
                      color="#fbbf24"
                      startFrame={1400}
                    />
                  </>
                )}

                {/* Step 4: Encrypted tunnel */}
                {frame >= 1440 && (
                  <div style={{
                    position: 'absolute',
                    top: 310,
                    left: width * 0.2,
                    right: width * 0.2,
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid rgba(16, 185, 129, 0.5)',
                    borderRadius: 12,
                    padding: 16,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1440, 15),
                  }}>
                    <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold'}}>
                      🔒 Encrypted Tunnel Established!
                    </div>
                    <div style={{fontSize: 14, color: '#e2e8f0', marginTop: 8}}>
                      All communication now secure
                    </div>
                  </div>
                )}

                {/* Performance note */}
                {frame >= 1480 && (
                  <div style={{
                    position: 'absolute',
                    top: 400,
                    left: width * 0.15,
                    right: width * 0.15,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 10,
                    padding: 14,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1480, 15),
                  }}>
                    <div style={{fontSize: 15, color: '#e2e8f0'}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ TLS 1.3:</span> ~100ms (1 round trip)<br/>
                      <span style={{fontSize: 13, color: '#94a3b8'}}>vs TLS 1.2: ~200ms (2 round trips)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Proxies WITH FLOW (1560-1980 frames / 52-66s) */}
      {frame >= 1560 && frame < 1980 && (
        <>
          <Title text="Proxies: The Smart Helpers" subtitle="Forward vs Reverse Proxies" startFrame={1560} />

          <Character type="junior" x={width * 0.16} y={height * 0.66} startFrame={1570} size={95} />
          <Character type="architect" x={width * 0.77} y={height * 0.66} startFrame={1570} size={95} />

          <Dialogue
            speaker="junior"
            text="This seems like a lot of work! Is there a way to make it faster?"
            x={width * 0.05}
            y={height * 0.76}
            startFrame={1590}
            maxWidth={460}
          />

          <Dialogue
            speaker="architect"
            text="Absolutely! Proxies act as smart helpers. Watch how requests flow through them..."
            x={width * 0.77 - 320}
            y={height * 0.76}
            startFrame={1680}
            maxWidth={540}
          />

          {/* Proxy Flow Diagram */}
          {frame >= 1770 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 1770, 15),
            }}>
              {/* Components in a row */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative'}}>
                {/* Client */}
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: 100,
                    height: 90,
                    backgroundColor: theme.colors.client,
                    borderRadius: 12,
                    border: '3px solid #60a5fa',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                  }}>
                    <div style={{fontSize: 32}}>💻</div>
                    <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Client</div>
                  </div>
                </div>

                {/* Forward Proxy */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 1800, 15)}}>
                  <div style={{
                    width: 100,
                    height: 90,
                    backgroundColor: '#8b5cf6',
                    borderRadius: 12,
                    border: '3px solid #a78bfa',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    transform: `scale(${pulse(frame, 1800, 60)})`,
                  }}>
                    <div style={{fontSize: 28}}>🔀</div>
                    <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>Forward</div>
                  </div>
                  <div style={{fontSize: 11, color: '#a78bfa', marginTop: 4}}>Squid :3128</div>
                  <div style={{fontSize: 10, color: '#94a3b8', marginTop: 2}}>Client-side</div>
                </div>

                {/* DNS */}
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: 90,
                    height: 80,
                    backgroundColor: theme.colors.cache,
                    borderRadius: 12,
                    border: '3px solid #f59e0b',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                  }}>
                    <div style={{fontSize: 28}}>🌐</div>
                    <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>DNS</div>
                  </div>
                </div>

                {/* Reverse Proxy */}
                <div style={{textAlign: 'center', opacity: fadeIn(frame, 1840, 15)}}>
                  <div style={{
                    width: 100,
                    height: 90,
                    backgroundColor: theme.colors.loadBalancer,
                    borderRadius: 12,
                    border: '3px solid #60a5fa',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    transform: `scale(${pulse(frame, 1840, 60)})`,
                  }}>
                    <div style={{fontSize: 28}}>🔀</div>
                    <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>Reverse</div>
                  </div>
                  <div style={{fontSize: 11, color: '#60a5fa', marginTop: 4}}>NGINX :443</div>
                  <div style={{fontSize: 10, color: '#94a3b8', marginTop: 2}}>Server-side</div>
                </div>

                {/* App Server */}
                <div style={{textAlign: 'center'}}>
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
                  }}>
                    <div style={{fontSize: 28}}>🖥️</div>
                    <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>App</div>
                  </div>
                </div>
              </div>

              {/* FLOW ARROWS showing the complete journey */}
              {frame >= 1880 && (
                <>
                  <FlowLine x1={110} y1={45} x2={width * 0.235} y2={45} label="Request" color={theme.colors.client} startFrame={1880} />
                  <FlowLine x1={width * 0.335} y1={40} x2={width * 0.425} y2={40} label="DNS?" color="#fbbf24" startFrame={1910} />
                  <FlowLine x1={width * 0.515} y1={45} x2={width * 0.645} y2={45} label="HTTPS" color={theme.colors.loadBalancer} startFrame={1940} />
                  <FlowLine x1={width * 0.745} y1={45} x2={width * 0.855} y2={45} label="HTTP" color={theme.colors.success} startFrame={1970} />
                </>
              )}

              {/* Explanation below */}
              {frame >= 1910 && (
                <div style={{
                  marginTop: 140,
                  display: 'flex',
                  gap: 20,
                  opacity: fadeIn(frame, 1910, 15),
                }}>
                  <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '2px solid rgba(139, 92, 246, 0.4)',
                    borderRadius: 10,
                    padding: 16,
                  }}>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: '#a78bfa', marginBottom: 8}}>
                      Forward Proxy
                    </div>
                    <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.7}}>
                      • Caches requests<br/>
                      • Filters content<br/>
                      • Corporate networks
                    </div>
                  </div>
                  <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '2px solid rgba(96, 165, 250, 0.4)',
                    borderRadius: 10,
                    padding: 16,
                  }}>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 8}}>
                      Reverse Proxy
                    </div>
                    <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.7}}>
                      • TLS termination<br/>
                      • Load balancing<br/>
                      • Protects servers
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 5: Complete Flow Summary (1980-2400 frames / 66-80s) */}
      {frame >= 1980 && frame < 2400 && (
        <>
          <Title text="Putting It All Together" subtitle="The Complete Request Journey" startFrame={1980} />

          <Character type="junior" x={width * 0.14} y={height * 0.68} startFrame={1990} size={95} />
          <Character type="architect" x={width * 0.79} y={height * 0.68} startFrame={1990} size={95} />

          <Dialogue
            speaker="junior"
            text="Can we see how all these pieces - DNS, TLS, proxies - work together in one flow?"
            x={width * 0.05}
            y={height * 0.78}
            startFrame={2010}
            maxWidth={440}
          />

          <Dialogue
            speaker="architect"
            text="Perfect! Let me walk you through the complete journey with timing..."
            x={width * 0.79 - 340}
            y={height * 0.78}
            startFrame={2100}
            maxWidth={560}
          />

          {/* Complete timeline */}
          {frame >= 2190 && (
            <div style={{
              position: 'absolute',
              top: height * 0.20,
              left: width * 0.08,
              right: width * 0.08,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 26,
              opacity: fadeIn(frame, 2190, 15),
            }}>
              <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 20, textAlign: 'center'}}>
                When You Press Enter on google.com...
              </div>
              <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 2.5}}>
                <div style={{opacity: fadeIn(frame, 2220, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>1.</span> <span style={{color: theme.colors.client, fontWeight: 'bold'}}>DNS Lookup</span> (~50ms): Browser → Root → TLD → Authoritative → IP
                </div>
                <div style={{opacity: fadeIn(frame, 2260, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>2.</span> <span style={{color: '#a78bfa', fontWeight: 'bold'}}>TCP Handshake</span> (~30ms): SYN → SYN-ACK → ACK
                </div>
                <div style={{opacity: fadeIn(frame, 2300, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>3.</span> <span style={{color: '#10b981', fontWeight: 'bold'}}>TLS Handshake</span> (~100ms): ClientHello → ServerHello → Encrypted tunnel
                </div>
                <div style={{opacity: fadeIn(frame, 2340, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>4.</span> <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>HTTP Request</span>: GET / HTTP/2 (multiplexed)
                </div>
                <div style={{opacity: fadeIn(frame, 2380, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>5.</span> <span style={{color: theme.colors.server, fontWeight: 'bold'}}>Server Response</span> (~80ms): HTML/CSS/JS/Images
                </div>
              </div>

              {frame >= 2420 && (
                <div style={{
                  marginTop: 22,
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: 10,
                  padding: 18,
                  opacity: fadeIn(frame, 2420, 15),
                }}>
                  <div style={{fontSize: 18, color: '#e2e8f0', textAlign: 'center', lineHeight: 2}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ First Visit:</span> <span style={{fontWeight: 'bold', fontSize: 22}}>~260ms</span>
                    {' '}<span style={{color: '#94a3b8'}}>|</span>{' '}
                    <span style={{color: '#10b981', fontWeight: 'bold'}}>Cached:</span> <span style={{fontWeight: 'bold', fontSize: 22}}>~30-50ms!</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 6: Production Best Practices (2400-2580 frames / 80-86s) */}
      {frame >= 2400 && frame < 2580 && (
        <>
          <Title text="Production Best Practices" subtitle="What Architects Need to Know" startFrame={2400} />

          <Character type="junior" x={width * 0.17} y={height * 0.68} startFrame={2410} size={95} />
          <Character type="architect" x={width * 0.76} y={height * 0.68} startFrame={2410} size={95} />

          <Dialogue
            speaker="junior"
            text="This is amazing! What do I need to remember for real production systems?"
            x={width * 0.05}
            y={height * 0.78}
            startFrame={2430}
            maxWidth={470}
          />

          <Dialogue
            speaker="architect"
            text="Here are the key principles that scale to billions of requests..."
            x={width * 0.76 - 340}
            y={height * 0.78}
            startFrame={2500}
            maxWidth={560}
          />

          {/* Best practices cards */}
          {frame >= 2520 && (
            <div style={{
              position: 'absolute',
              top: height * 0.20,
              left: width * 0.08,
              right: width * 0.08,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 18,
              opacity: fadeIn(frame, 2520, 15),
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
                <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
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
                <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
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
                <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
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
                <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
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

      {/* Scene 7: What's Next (2580-2700 frames / 86-90s) */}
      {frame >= 2580 && frame < 2700 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 120,
            left: width / 2 - 360,
            fontSize: 42,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 2580, 20),
          }}>
            You've Mastered the Fundamentals! 🎉
          </div>

          <Character type="junior" x={width * 0.32} y={height * 0.52} startFrame={2600} size={120} />
          <Character type="architect" x={width * 0.62} y={height * 0.52} startFrame={2600} size={120} />

          <Dialogue
            speaker="junior"
            text="This makes so much sense now! What's next?"
            x={width * 0.32 - 240}
            y={height * 0.64}
            startFrame={2620}
            maxWidth={460}
          />

          <Dialogue
            speaker="architect"
            text="Now let's learn about distributing traffic across multiple servers for high availability!"
            x={width * 0.62 - 180}
            y={height * 0.64}
            startFrame={2640}
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
            opacity: fadeIn(frame, 2660, 20),
            textAlign: 'center',
          }}>
            Next Up: Load Balancing & CDNs 🚀
          </div>

          <div style={{
            position: 'absolute',
            bottom: 80,
            left: width / 2 - 280,
            fontSize: 15,
            color: '#94a3b8',
            textAlign: 'center',
            opacity: fadeIn(frame, 2680, 15),
          }}>
            Phase 1: Foundational Infrastructure - Topic 1 of 4 ✅
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
