import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * SQUARE VERSION (1080x1080) - All 7 Scenes
 * Optimized for LinkedIn mobile and desktop
 * Best balance of readability and compatibility
 */
export const ClientServerDNSProxiesSquare: React.FC = () => {
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
          right: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '10px 20px',
          borderRadius: 24,
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 18, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 17,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 16, backgroundColor: 'rgba(96, 165, 250, 0.3)'}} />
        <div style={{fontSize: 16, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 18}}>⚡</span> Claude Code
        </div>
      </div>

      {/* Scene 1: The Journey Begins (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="How the Internet Really Works" subtitle="A Journey from google.com to Your Screen" startFrame={0} />

          {/* Characters and dialogues */}
          {frame < 230 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.48} startFrame={30} size={100} />
              <Character type="architect" x={width * 0.73} y={height * 0.48} startFrame={30} size={100} />

              <Dialogue
                speaker="junior"
                text="When I type 'google.com' and press Enter, what actually happens?"
                x={width * 0.08}
                y={height * 0.64}
                startFrame={60}
                maxWidth={420}
              />

              <Dialogue
                speaker="architect"
                text="Great question! First, computers don't understand 'google.com' - they only speak in IP addresses."
                x={width * 0.52}
                y={height * 0.64}
                startFrame={150}
                maxWidth={440}
              />
            </>
          )}

          {/* Show IP Address concept */}
          {frame >= 240 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.15,
              width: 700,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 24,
              opacity: fadeIn(frame, 240, 20),
              transform: `scale(${pulse(frame, 60)})`,
            }}>
              <div style={{fontSize: 26, fontWeight: 'bold', color: theme.colors.client, marginBottom: 14, textAlign: 'center', textShadow: '0 0 20px rgba(96, 165, 250, 0.6)', letterSpacing: '1px'}}>
                💻 IP Address: The Computer's Address
              </div>
              <div style={{fontSize: 17, color: '#e2e8f0', lineHeight: 1.9, textAlign: 'center'}}>
                <div style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 10, textShadow: '0 0 30px rgba(251, 191, 36, 0.7)', letterSpacing: '2px'}}>
                  142.250.185.46
                </div>
                <div style={{fontSize: 22, color: '#94a3b8'}}>
                  Every device has a unique IP address.<br/>
                  <span style={{fontWeight: 'bold', color: '#60a5fa'}}>IPv4</span> uses 32 bits (4.3B addresses)<br/>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>IPv6</span> uses 128 bits - unlimited!
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: DNS Discovery (450-1080 frames / 15-36s) */}
      {frame >= 450 && frame < 1080 && (
        <>
          <Title text="DNS: The Internet's Phone Book" subtitle="How Domain Names Become IP Addresses" startFrame={450} />

          {frame < 640 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.50} startFrame={460} size={90} />
              <Character type="architect" x={width * 0.73} y={height * 0.50} startFrame={460} size={90} />

              <Dialogue
                speaker="junior"
                text="How does that conversion happen?"
                x={width * 0.08}
                y={height * 0.64}
                startFrame={480}
                maxWidth={400}
              />

              <Dialogue
                speaker="architect"
                text="DNS! It's a hierarchy of servers. Let me show you..."
                x={width * 0.52}
                y={height * 0.64}
                startFrame={570}
                maxWidth={440}
              />
            </>
          )}

          {/* DNS Hierarchy */}
          {frame >= 650 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 650, 15),
            }}>
              {/* Browser */}
              <div style={{
                position: 'absolute',
                top: 10,
                left: width * 0.05,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 38}}>💻</div>
                <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.client}}>Your Browser</div>
                <div style={{fontSize: 18, color: '#94a3b8'}}>google.com?</div>
              </div>

              {/* Root DNS */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: width * 0.35,
                width: 150,
                backgroundColor: '#dc2626',
                borderRadius: 12,
                border: '3px solid #ef4444',
                padding: 14,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 26}}>🌍</div>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>Root DNS</div>
                <div style={{fontSize: 17, color: '#fca5a5'}}>13 servers</div>
              </div>

              {/* TLD DNS */}
              <div style={{
                position: 'absolute',
                top: 120,
                left: width * 0.35,
                width: 150,
                backgroundColor: theme.colors.cache,
                borderRadius: 12,
                border: '3px solid #f59e0b',
                padding: 14,
                textAlign: 'center',
                opacity: fadeIn(frame, 720, 15),
              }}>
                <div style={{fontSize: 22}}>🔗</div>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>TLD Server</div>
                <div style={{fontSize: 17, color: '#fcd34d'}}>.com</div>
              </div>

              {/* Authoritative DNS */}
              <div style={{
                position: 'absolute',
                top: 240,
                left: width * 0.35,
                width: 150,
                backgroundColor: theme.colors.success,
                borderRadius: 12,
                border: '3px solid #10b981',
                padding: 14,
                textAlign: 'center',
                opacity: fadeIn(frame, 800, 15),
              }}>
                <div style={{fontSize: 22}}>📋</div>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>Authoritative</div>
                <div style={{fontSize: 17, color: '#6ee7b7'}}>google.com</div>
              </div>

              {/* Flow lines and steps */}
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
                    width: 260,
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid rgba(96, 165, 250, 0.4)',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 680, 10),
                  }}>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.client, marginBottom: 6}}>
                      STEP 1: Browser asks Root
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.5}}>
                      "Where are .com domains?"
                    </div>
                  </div>
                </>
              )}

              {frame >= 750 && (
                <>
                  <FlowLine
                    x1={width * 0.35 + 75}
                    y1={75}
                    x2={width * 0.35 + 75}
                    y2={120}
                    label="2"
                    color="#fbbf24"
                    startFrame={750}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 85,
                    right: 0,
                    width: 260,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 750, 10),
                  }}>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: '#fbbf24', marginBottom: 6}}>
                      STEP 2: Root → TLD
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.5}}>
                      "Ask .com TLD server!"
                    </div>
                  </div>
                </>
              )}

              {frame >= 830 && (
                <>
                  <FlowLine
                    x1={width * 0.35 + 75}
                    y1={180}
                    x2={width * 0.35 + 75}
                    y2={240}
                    label="3"
                    color="#f59e0b"
                    startFrame={830}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 180,
                    right: 0,
                    width: 260,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 830, 10),
                  }}>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: '#f59e0b', marginBottom: 6}}>
                      STEP 3: TLD → google
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.5}}>
                      "Ask google's nameserver!"
                    </div>
                  </div>
                </>
              )}

              {frame >= 910 && (
                <>
                  <FlowLine
                    x1={width * 0.35}
                    y1={280}
                    x2={width * 0.05 + 40}
                    y2={80}
                    label="4"
                    color={theme.colors.success}
                    startFrame={910}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 275,
                    right: 0,
                    width: 260,
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    borderRadius: 10,
                    padding: 12,
                    opacity: fadeIn(frame, 910, 10),
                  }}>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.success, marginBottom: 6}}>
                      STEP 4: Returns IP!
                    </div>
                    <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.5}}>
                      "142.250.185.46"
                    </div>
                  </div>
                </>
              )}

              {frame >= 1000 && (
                <>
                  <DataFlowStream x1={width * 0.05 + 40} y1={35} x2={width * 0.35} y2={50} startFrame={1000} />
                  <DataFlowStream x1={width * 0.35 + 75} y1={75} x2={width * 0.35 + 75} y2={120} startFrame={1010} />
                  <DataFlowStream x1={width * 0.35 + 75} y1={180} x2={width * 0.35 + 75} y2={240} startFrame={1020} />
                  <DataFlowStream x1={width * 0.35} y1={280} x2={width * 0.05 + 40} y2={80} startFrame={1030} />
                </>
              )}
            </div>
          )}

          <Dialogue
            speaker="architect"
            text="See? Four steps to get the IP!"
            x={width * 0.60}
            y={height * 0.66}
            startFrame={990}
            maxWidth={380}
          />
        </>
      )}

      {/* Scene 3: TLS Security (1080-2400 frames / 36-80s) */}
      {frame >= 1080 && frame < 2400 && (
        <>
          <Title text="Making It Secure with TLS" subtitle="Encryption, Certificates & Cryptography" startFrame={1080} />

          {frame < 1230 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.50} startFrame={1090} size={90} />
              <Character type="architect" x={width * 0.73} y={height * 0.50} startFrame={1090} size={90} />

              <Dialogue
                speaker="junior"
                text="How do we know we're really talking to Google?"
                x={width * 0.08}
                y={height * 0.64}
                startFrame={1110}
                maxWidth={400}
              />

              <Dialogue
                speaker="architect"
                text="TLS! It verifies identity, negotiates encryption, and secures data..."
                x={width * 0.52}
                y={height * 0.64}
                startFrame={1140}
                maxWidth={450}
              />
            </>
          )}

          {/* TLS Handshake Visual */}
          {frame >= 1240 && frame < 1400 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1240, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                  TLS Handshake: The Security Dance 🔐
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div style={{flex: 1, textAlign: 'center'}}>
                    <div style={{fontSize: 42, marginBottom: 6}}>💻</div>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.client}}>Browser</div>
                  </div>

                  <div style={{flex: 2, padding: '0 16px'}}>
                    {frame >= 1260 && (
                      <div style={{
                        backgroundColor: 'rgba(96, 165, 250, 0.15)',
                        border: '2px solid rgba(96, 165, 250, 0.4)',
                        borderRadius: 10,
                        padding: 10,
                        marginBottom: 8,
                        opacity: fadeIn(frame, 1260, 10),
                      }}>
                        <div style={{fontSize: 18, color: '#60a5fa', fontWeight: 'bold'}}>1. ClientHello →</div>
                        <div style={{fontSize: 16, color: '#e2e8f0'}}>Cipher suites, TLS version</div>
                      </div>
                    )}

                    {frame >= 1280 && (
                      <div style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        border: '2px solid rgba(16, 185, 129, 0.4)',
                        borderRadius: 10,
                        padding: 10,
                        marginBottom: 8,
                        opacity: fadeIn(frame, 1280, 10),
                      }}>
                        <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold'}}>← 2. ServerHello</div>
                        <div style={{fontSize: 16, color: '#e2e8f0'}}>Certificate chain</div>
                      </div>
                    )}

                    {frame >= 1300 && (
                      <div style={{
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        border: '2px solid rgba(139, 92, 246, 0.4)',
                        borderRadius: 10,
                        padding: 10,
                        marginBottom: 8,
                        opacity: fadeIn(frame, 1300, 10),
                      }}>
                        <div style={{fontSize: 18, color: '#a78bfa', fontWeight: 'bold'}}>3. Key Exchange →</div>
                        <div style={{fontSize: 16, color: '#e2e8f0'}}>Pre-master secret</div>
                      </div>
                    )}

                    {frame >= 1320 && (
                      <div style={{
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        border: '2px solid rgba(245, 158, 11, 0.4)',
                        borderRadius: 10,
                        padding: 10,
                        opacity: fadeIn(frame, 1320, 10),
                      }}>
                        <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', textAlign: 'center'}}>4. ✓ Finished</div>
                        <div style={{fontSize: 16, color: '#e2e8f0', textAlign: 'center'}}>Secure! 🔒</div>
                      </div>
                    )}
                  </div>

                  <div style={{flex: 1, textAlign: 'center'}}>
                    <div style={{fontSize: 42, marginBottom: 6}}>🖥️</div>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.server}}>Server</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cipher Suite */}
          {frame >= 1420 && frame < 1720 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 1420, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.client, marginBottom: 14, textAlign: 'center'}}>
                  Cipher Suite Negotiation
                </div>

                <div style={{
                  backgroundColor: 'rgba(96, 165, 250, 0.1)',
                  border: '2px solid rgba(96, 165, 250, 0.3)',
                  borderRadius: 12,
                  padding: 16,
                  opacity: fadeIn(frame, 1460, 20),
                }}>
                  <div style={{fontSize: 18, fontWeight: 'bold', color: '#fbbf24', marginBottom: 10, textAlign: 'center'}}>
                    TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 12}}>
                    <div style={{opacity: fadeIn(frame, 1510, 20)}}>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa'}}>ECDHE</div>
                      <div style={{fontSize: 18, color: '#94a3b8'}}>Key Exchange</div>
                    </div>
                    <div style={{opacity: fadeIn(frame, 1560, 20)}}>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#10b981'}}>RSA</div>
                      <div style={{fontSize: 18, color: '#94a3b8'}}>Authentication</div>
                    </div>
                    <div style={{opacity: fadeIn(frame, 1610, 20)}}>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#a78bfa'}}>AES-256-GCM</div>
                      <div style={{fontSize: 18, color: '#94a3b8'}}>Bulk Encryption</div>
                    </div>
                    <div style={{opacity: fadeIn(frame, 1660, 20)}}>
                      <div style={{fontSize: 20, fontWeight: 'bold', color: '#fbbf24'}}>SHA384</div>
                      <div style={{fontSize: 18, color: '#94a3b8'}}>Hashing</div>
                    </div>
                  </div>
                </div>

                {frame >= 1690 && (
                  <div style={{marginTop: 14, fontSize: 20, color: '#10b981', textAlign: 'center', opacity: fadeIn(frame, 1690, 20)}}>
                    ✓ Server agrees!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Certificate Chain */}
          {frame >= 1740 && frame < 2040 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.04,
              right: width * 0.04,
              opacity: fadeIn(frame, 1740, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#10b981', marginBottom: 14, textAlign: 'center'}}>
                  Certificate Authority Chain
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div style={{
                    flex: 1,
                    backgroundColor: '#dc2626',
                    border: '3px solid #ef4444',
                    borderRadius: 12,
                    padding: 14,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1780, 25),
                  }}>
                    <div style={{fontSize: 28}}>🏛️</div>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Root CA</div>
                    <div style={{fontSize: 16, color: '#fca5a5'}}>DigiCert</div>
                  </div>

                  <div style={{fontSize: 28, color: '#fbbf24', margin: '0 10px'}}>→</div>

                  <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.cache,
                    border: '3px solid #f59e0b',
                    borderRadius: 12,
                    padding: 14,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1860, 25),
                  }}>
                    <div style={{fontSize: 28}}>📜</div>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Intermediate</div>
                    <div style={{fontSize: 16, color: '#fcd34d'}}>Signed</div>
                  </div>

                  <div style={{fontSize: 28, color: '#fbbf24', margin: '0 10px'}}>→</div>

                  <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.success,
                    border: '3px solid #10b981',
                    borderRadius: 12,
                    padding: 14,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1940, 25),
                  }}>
                    <div style={{fontSize: 28}}>✅</div>
                    <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Server</div>
                    <div style={{fontSize: 16, color: '#6ee7b7'}}>google.com</div>
                  </div>
                </div>

                {frame >= 1970 && (
                  <div style={{marginTop: 14, fontSize: 18, color: '#10b981', textAlign: 'center', opacity: fadeIn(frame, 1970, 20)}}>
                    ✓ Trust chain validated!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Exchange & Encryption */}
          {frame >= 2060 && frame < 2360 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.06,
              right: width * 0.06,
              opacity: fadeIn(frame, 2060, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#a78bfa', marginBottom: 14, textAlign: 'center'}}>
                  Key Exchange & Encryption
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                  <div style={{opacity: fadeIn(frame, 2100, 25)}}>
                    <div style={{
                      backgroundColor: 'rgba(96, 165, 250, 0.1)',
                      border: '2px solid rgba(96, 165, 250, 0.3)',
                      borderRadius: 12,
                      padding: 16,
                    }}>
                      <div style={{fontSize: 24, marginBottom: 8, textAlign: 'center'}}>🔑</div>
                      <div style={{fontSize: 17, fontWeight: 'bold', color: '#60a5fa', marginBottom: 8, textAlign: 'center'}}>
                        ECDHE Key Exchange
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                        • Generate keys<br/>
                        • Exchange public<br/>
                        • Shared secret<br/>
                        • Forward Secrecy
                      </div>
                    </div>
                  </div>

                  <div style={{opacity: fadeIn(frame, 2150, 25)}}>
                    <div style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      border: '2px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: 12,
                      padding: 16,
                    }}>
                      <div style={{fontSize: 24, marginBottom: 8, textAlign: 'center'}}>🔐</div>
                      <div style={{fontSize: 17, fontWeight: 'bold', color: '#a78bfa', marginBottom: 8, textAlign: 'center'}}>
                        AES-256-GCM
                      </div>
                      <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 1.7}}>
                        • Symmetric<br/>
                        • 256-bit key<br/>
                        • Authenticated<br/>
                        • Fast & Secure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Encrypted Tunnel */}
          {frame >= 2215 && (
            <div style={{
              position: 'absolute',
              top: height * 0.28,
              left: width * 0.12,
              right: width * 0.12,
              opacity: fadeIn(frame, 2215, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 16,
                padding: 20,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 36, marginBottom: 10}}>🔒</div>
                <div style={{fontSize: 24, fontWeight: 'bold', color: '#10b981', marginBottom: 12}}>
                  Secure Tunnel Established!
                </div>
                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  ✓ Identity verified<br/>
                  ✓ Encryption negotiated<br/>
                  ✓ Secure keys exchanged<br/>
                  ✓ Data integrity protected
                </div>
                <div style={{marginTop: 12, fontSize: 18, color: '#fbbf24'}}>
                  ⚡ TLS 1.3: ~25ms (vs 50ms in TLS 1.2)
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Proxies (2400-2820 frames / 80-94s) */}
      {frame >= 2400 && frame < 2820 && (
        <>
          <Title text="Proxies: The Smart Helpers" subtitle="Forward vs Reverse Proxies" startFrame={2400} />

          {frame < 2610 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.50} startFrame={2410} size={90} />
              <Character type="architect" x={width * 0.73} y={height * 0.50} startFrame={2410} size={90} />

              <Dialogue
                speaker="junior"
                text="Is there a way to make this faster?"
                x={width * 0.08}
                y={height * 0.64}
                startFrame={2430}
                maxWidth={400}
              />

              <Dialogue
                speaker="architect"
                text="Proxies! They act as smart helpers..."
                x={width * 0.52}
                y={height * 0.64}
                startFrame={2520}
                maxWidth={440}
              />
            </>
          )}

          {/* Proxy Flow - adapted for square */}
          {frame >= 2620 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: 0,
              width: '100%',
              height: 300,
              opacity: fadeIn(frame, 2620, 15),
            }}>
              {(() => {
                const centerY = 60;
                const boxWidth = 120;
                const boxHeight = 110;
                const gap = 100;
                const startX = 80;

                const positions = [
                  { x: startX, label: 'Client', icon: '💻', color: theme.colors.client },
                  { x: startX + boxWidth + gap, label: 'Forward\nProxy', icon: '🔀', color: '#8b5cf6', subtitle: 'Squid' },
                  { x: startX + (boxWidth + gap) * 2, label: 'DNS', icon: '🌐', color: theme.colors.cache },
                  // Row 2
                  { x: startX + boxWidth / 2 + gap / 2, label: 'Reverse\nProxy', icon: '🔀', color: theme.colors.loadBalancer, subtitle: 'NGINX', y: 170 },
                  { x: startX + (boxWidth + gap) * 1.5 + gap / 2, label: 'App\nServer', icon: '🖥️', color: theme.colors.server, y: 170 },
                ];

                return (
                  <>
                    {positions.map((pos, i) => (
                      <div
                        key={i}
                        style={{
                          position: 'absolute',
                          left: pos.x,
                          top: pos.y || (centerY - boxHeight / 2),
                          width: boxWidth,
                          height: boxHeight,
                          backgroundColor: pos.color,
                          borderRadius: 12,
                          border: `3px solid ${pos.color}`,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                        }}
                      >
                        <div style={{ fontSize: 36 }}>{pos.icon}</div>
                        <div style={{ fontSize: 17, fontWeight: 'bold', color: '#fff', textAlign: 'center', whiteSpace: 'pre-line' }}>
                          {pos.label}
                        </div>
                        {pos.subtitle && (
                          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                            {pos.subtitle}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Connecting lines */}
                    {frame >= 2650 && (
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 300 }}>
                        <defs>
                          <marker id="arrowhead-p" markerWidth="10" markerHeight="10" refX="9" refY="4" orient="auto">
                            <polygon points="0 0, 10 4, 0 8" fill="#60a5fa" />
                          </marker>
                        </defs>
                        {/* Top row lines */}
                        <line x1={startX + boxWidth} y1={centerY} x2={startX + boxWidth + gap} y2={centerY} stroke="#60a5fa" strokeWidth="4" markerEnd="url(#arrowhead-p)" />
                        <line x1={startX + (boxWidth + gap) + boxWidth} y1={centerY} x2={startX + (boxWidth + gap) * 2} y2={centerY} stroke="#60a5fa" strokeWidth="4" markerEnd="url(#arrowhead-p)" />
                        {/* Connecting to row 2 */}
                        <line x1={startX + (boxWidth + gap) * 2 + boxWidth / 2} y1={centerY + boxHeight / 2} x2={startX + boxWidth / 2 + gap / 2 + boxWidth / 2} y2={170} stroke="#60a5fa" strokeWidth="4" markerEnd="url(#arrowhead-p)" />
                        {/* Row 2 line */}
                        <line x1={startX + boxWidth / 2 + gap / 2 + boxWidth} y1={170 + boxHeight / 2} x2={startX + (boxWidth + gap) * 1.5 + gap / 2} y2={170 + boxHeight / 2} stroke="#60a5fa" strokeWidth="4" markerEnd="url(#arrowhead-p)" />
                      </svg>
                    )}
                  </>
                );
              })()}

              {/* Explanation */}
              {frame >= 2710 && (
                <div style={{
                  position: 'absolute',
                  bottom: -120,
                  left: 60,
                  right: 60,
                  display: 'flex',
                  gap: 20,
                  opacity: fadeIn(frame, 2710, 15),
                }}>
                  <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '3px solid rgba(139, 92, 246, 0.5)',
                    borderRadius: 12,
                    padding: 16,
                  }}>
                    <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', marginBottom: 8}}>
                      Forward Proxy
                    </div>
                    <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.6}}>
                      • Client-side<br/>
                      • Caches content<br/>
                      • Filters requests
                    </div>
                  </div>
                  <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '3px solid rgba(96, 165, 250, 0.5)',
                    borderRadius: 12,
                    padding: 16,
                  }}>
                    <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 8}}>
                      Reverse Proxy
                    </div>
                    <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.6}}>
                      • Server-side<br/>
                      • Load balancing<br/>
                      • TLS termination
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 5: Complete Flow Summary (2820-3420 frames / 94-114s) */}
      {frame >= 2820 && frame < 3420 && (
        <>
          <Title text="Putting It All Together" subtitle="The Complete Request Journey" startFrame={2820} />

          {frame < 3020 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.50} startFrame={2830} size={90} />
              <Character type="architect" x={width * 0.73} y={height * 0.50} startFrame={2830} size={90} />

              <Dialogue
                speaker="junior"
                text="How do all these pieces work together?"
                x={width * 0.08}
                y={height * 0.64}
                startFrame={2850}
                maxWidth={380}
              />

              <Dialogue
                speaker="architect"
                text="Let me walk you through the complete journey..."
                x={width * 0.52}
                y={height * 0.64}
                startFrame={2940}
                maxWidth={470}
              />
            </>
          )}

          {/* Complete timeline */}
          {frame >= 3030 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.06,
              right: width * 0.06,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 22,
              opacity: fadeIn(frame, 3030, 15),
            }}>
              <div style={{fontSize: 23, fontWeight: 'bold', color: '#60a5fa', marginBottom: 18, textAlign: 'center'}}>
                When You Press Enter on google.com...
              </div>
              <div style={{fontSize: 21, color: '#e2e8f0', lineHeight: 2.3}}>
                <div style={{opacity: fadeIn(frame, 3060, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>1.</span> <span style={{color: theme.colors.client, fontWeight: 'bold'}}>DNS Lookup</span> (~5ms)
                </div>
                <div style={{opacity: fadeIn(frame, 3120, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>2.</span> <span style={{color: '#a78bfa', fontWeight: 'bold'}}>TCP Handshake</span> (~15ms)
                </div>
                <div style={{opacity: fadeIn(frame, 3180, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>3.</span> <span style={{color: '#10b981', fontWeight: 'bold'}}>TLS Handshake</span> (~25ms)
                </div>
                <div style={{opacity: fadeIn(frame, 3240, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>4.</span> <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>HTTP Request</span> (~8ms)
                </div>
                <div style={{opacity: fadeIn(frame, 3300, 15)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>5.</span> <span style={{color: theme.colors.server, fontWeight: 'bold'}}>Server Response</span> (~30ms)
                </div>
              </div>

              {frame >= 3360 && (
                <div style={{
                  marginTop: 18,
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: 10,
                  padding: 16,
                  opacity: fadeIn(frame, 3360, 15),
                }}>
                  <div style={{fontSize: 17, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.9}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Total:</span> <span style={{fontWeight: 'bold', fontSize: 20}}>~85ms</span>
                    {' '}<span style={{color: '#94a3b8'}}>|</span>{' '}
                    <span style={{color: '#10b981', fontWeight: 'bold'}}>Cached:</span> <span style={{fontWeight: 'bold', fontSize: 20}}>~15-25ms!</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 6: Production Best Practices (3420-3840 frames / 114-128s) */}
      {frame >= 3420 && frame < 3840 && (
        <>
          <Title text="Production Best Practices" subtitle="What Architects Need to Know" startFrame={3420} />

          {frame < 3610 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.50} startFrame={3430} size={90} />
              <Character type="architect" x={width * 0.73} y={height * 0.50} startFrame={3430} size={90} />

              <Dialogue
                speaker="junior"
                text="What do I need for production?"
                x={width * 0.08}
                y={height * 0.64}
                startFrame={3450}
                maxWidth={400}
              />

              <Dialogue
                speaker="architect"
                text="Here are the key principles..."
                x={width * 0.52}
                y={height * 0.64}
                startFrame={3520}
                maxWidth={470}
              />
            </>
          )}

          {/* Best practices - 2x2 grid */}
          {frame >= 3620 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.06,
              right: width * 0.06,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              opacity: fadeIn(frame, 3620, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 12,
                padding: 16,
              }}>
                <div style={{fontSize: 17, fontWeight: 'bold', color: theme.colors.client, marginBottom: 8}}>
                  🌐 DNS Strategy
                </div>
                <div style={{fontSize: 17, color: '#e2e8f0', lineHeight: 1.7}}>
                  • Dual-stack (IPv4+6)<br/>
                  • TTL: 3600s<br/>
                  • DNSSEC<br/>
                  • Cloudflare/Route53
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 12,
                padding: 16,
              }}>
                <div style={{fontSize: 17, fontWeight: 'bold', color: '#a78bfa', marginBottom: 8}}>
                  🔐 TLS/Security
                </div>
                <div style={{fontSize: 17, color: '#e2e8f0', lineHeight: 1.7}}>
                  • TLS 1.3 only<br/>
                  • Let's Encrypt<br/>
                  • HSTS headers<br/>
                  • HTTP/3 (QUIC)
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 12,
                padding: 16,
              }}>
                <div style={{fontSize: 17, fontWeight: 'bold', color: theme.colors.success, marginBottom: 8}}>
                  🔀 Proxy Setup
                </div>
                <div style={{fontSize: 17, color: '#e2e8f0', lineHeight: 1.7}}>
                  • NGINX/Envoy<br/>
                  • TLS termination<br/>
                  • Rate limiting<br/>
                  • Static caching
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(245, 158, 11, 0.5)',
                borderRadius: 12,
                padding: 16,
              }}>
                <div style={{fontSize: 17, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>
                  ⚡ Performance
                </div>
                <div style={{fontSize: 17, color: '#e2e8f0', lineHeight: 1.7}}>
                  • Connection pooling<br/>
                  • HTTP/2<br/>
                  • TCP Fast Open<br/>
                  • Monitoring
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 7: What's Next (3840-4080 frames / 128-136s) */}
      {frame >= 3840 && frame < 4080 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 100,
            left: width * 0.1,
            right: width * 0.1,
            fontSize: 36,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 3840, 20),
          }}>
            You've Mastered the Fundamentals! 🎉
          </div>

          {frame < 4000 && (
            <>
              <Character type="junior" x={width * 0.27} y={height * 0.46} startFrame={3860} size={110} />
              <Character type="architect" x={width * 0.73} y={height * 0.46} startFrame={3860} size={110} />

              <Dialogue
                speaker="junior"
                text="This makes sense now! What's next?"
                x={width * 0.08}
                y={height * 0.62}
                startFrame={3880}
                maxWidth={400}
              />

              <Dialogue
                speaker="architect"
                text="Load balancing and distributing traffic!"
                x={width * 0.52}
                y={height * 0.62}
                startFrame={3910}
                maxWidth={420}
              />
            </>
          )}

          <div style={{
            position: 'absolute',
            bottom: 140,
            left: width * 0.1,
            right: width * 0.1,
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '16px 28px',
            borderRadius: 12,
            border: '3px solid rgba(96, 165, 250, 0.5)',
            opacity: fadeIn(frame, 4010, 20),
            textAlign: 'center',
          }}>
            Next Up: Load Balancing & CDNs 🚀
          </div>

          <div style={{
            position: 'absolute',
            bottom: 80,
            left: width * 0.1,
            right: width * 0.1,
            fontSize: 20,
            color: '#94a3b8',
            textAlign: 'center',
            opacity: fadeIn(frame, 4040, 15),
          }}>
            Phase 1: Foundational Infrastructure - Topic 1 of 4 ✅
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
