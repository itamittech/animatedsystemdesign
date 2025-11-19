import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * FULL VERTICAL VERSION (1080x1920) - All 7 Scenes
 * Optimized for mobile LinkedIn viewing
 */
export const ClientServerDNSProxiesVertical: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Elegant animated flow line component (for DNS scene) - adapted for vertical
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
          strokeWidth="3"
          strokeDasharray="4 2"
          markerEnd={`url(#arrow-${startFrame})`}
          opacity="0.8"
        />
        {label && progress > 0.5 && (
          <text
            x={(x1 + currentX2) / 2 + 50}
            y={(y1 + currentY2) / 2}
            fill={color}
            fontSize="20"
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
      {/* Credit Bookmark - repositioned for vertical */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '10px 18px',
          borderRadius: 18,
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 16, color: '#94a3b8', fontWeight: '500'}}>Created by Amit Mishra</div>
        <div style={{fontSize: 14, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 16}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: The Journey Begins - VERTICAL LAYOUT (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="How the Internet Really Works" subtitle="From google.com to Your Screen" startFrame={0} />

          {/* Characters stacked vertically with dialogues */}
          {frame < 230 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.22} startFrame={30} size={90} />
              <Dialogue
                speaker="junior"
                text="When I type 'google.com', what actually happens?"
                x={width * 0.1}
                y={height * 0.30}
                startFrame={60}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.44} startFrame={30} size={90} />
              <Dialogue
                speaker="architect"
                text="Great question! Computers don't understand 'google.com' - they only speak in IP addresses."
                x={width * 0.1}
                y={height * 0.52}
                startFrame={150}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* IP Address concept - centered for vertical */}
          {frame >= 240 && (
            <div style={{
              position: 'absolute',
              top: height * 0.32,
              left: width * 0.08,
              width: width * 0.84,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 20,
              opacity: fadeIn(frame, 240, 20),
              transform: `scale(${pulse(frame, 60)})`,
            }}>
              <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.client, marginBottom: 10, textAlign: 'center'}}>
                💻 IP Address
              </div>
              <div style={{fontSize: 28, fontWeight: 'bold', color: '#fbbf24', marginBottom: 10, textAlign: 'center'}}>
                142.250.185.46
              </div>
              <div style={{fontSize: 18, color: '#94a3b8', textAlign: 'center', lineHeight: 1.6}}>
                Every device has a unique IP address
                <br/><span style={{fontWeight: 'bold', color: '#60a5fa'}}>IPv4:</span> 32 bits (4.3B addresses)
                <br/><span style={{color: '#10b981', fontWeight: 'bold'}}>IPv6:</span> 128 bits - unlimited!
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: DNS Discovery - VERTICAL LAYOUT (450-1080 frames / 15-36s) */}
      {frame >= 450 && frame < 1080 && (
        <>
          <Title text="DNS: The Internet's Phone Book" subtitle="Domain Names → IP Addresses" startFrame={450} />

          {frame < 640 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.22} startFrame={460} size={80} />
              <Dialogue
                speaker="junior"
                text="How does that conversion happen?"
                x={width * 0.1}
                y={height * 0.29}
                startFrame={480}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.40} startFrame={460} size={80} />
              <Dialogue
                speaker="architect"
                text="DNS! It's a hierarchy of servers. Let me show you..."
                x={width * 0.1}
                y={height * 0.47}
                startFrame={570}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* DNS Hierarchy - already vertical, just repositioned */}
          {frame >= 650 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: 0,
              width: '100%',
              opacity: fadeIn(frame, 650, 15),
            }}>
              {/* Browser */}
              <div style={{
                position: 'absolute',
                top: 10,
                left: width * 0.08,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 32}}>💻</div>
                <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.client}}>Browser</div>
                <div style={{fontSize: 16, color: '#94a3b8'}}>google.com?</div>
              </div>

              {/* DNS Servers - vertical stack */}
              <div style={{position: 'absolute', left: width * 0.25, top: 0}}>
                {/* Root DNS */}
                <div style={{
                  width: 140,
                  backgroundColor: '#dc2626',
                  borderRadius: 12,
                  border: '3px solid #ef4444',
                  padding: 14,
                  textAlign: 'center',
                  marginBottom: 12,
                }}>
                  <div style={{fontSize: 24}}>🌍</div>
                  <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Root DNS</div>
                  <div style={{fontSize: 16, color: '#fca5a5'}}>13 servers</div>
                </div>

                {/* TLD DNS */}
                <div style={{
                  width: 140,
                  backgroundColor: theme.colors.cache,
                  borderRadius: 12,
                  border: '3px solid #f59e0b',
                  padding: 14,
                  textAlign: 'center',
                  marginBottom: 12,
                  marginTop: 110,
                  opacity: fadeIn(frame, 720, 15),
                }}>
                  <div style={{fontSize: 22}}>🔗</div>
                  <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>TLD Server</div>
                  <div style={{fontSize: 16, color: '#fcd34d'}}>.com</div>
                </div>

                {/* Authoritative DNS */}
                <div style={{
                  width: 140,
                  backgroundColor: theme.colors.success,
                  borderRadius: 12,
                  border: '3px solid #10b981',
                  padding: 14,
                  textAlign: 'center',
                  marginTop: 220,
                  opacity: fadeIn(frame, 800, 15),
                }}>
                  <div style={{fontSize: 22}}>📋</div>
                  <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Authoritative</div>
                  <div style={{fontSize: 16, color: '#6ee7b7'}}>google.com</div>
                </div>
              </div>

              {/* Flow lines */}
              {frame >= 680 && (
                <FlowLine x1={width * 0.08 + 30} y1={35} x2={width * 0.25} y2={50} label="1" color={theme.colors.client} startFrame={680} />
              )}
              {frame >= 750 && (
                <FlowLine x1={width * 0.25 + 70} y1={80} x2={width * 0.25 + 70} y2={120} label="2" color="#fbbf24" startFrame={750} />
              )}
              {frame >= 830 && (
                <FlowLine x1={width * 0.25 + 70} y1={190} y2={230} x2={width * 0.25 + 70} label="3" color="#f59e0b" startFrame={830} />
              )}
              {frame >= 910 && (
                <FlowLine x1={width * 0.25} y1={290} x2={width * 0.08 + 30} y2={80} label="4" color={theme.colors.success} startFrame={910} />
              )}

              {/* Step explanations - stacked vertically */}
              <div style={{position: 'absolute', right: width * 0.05, top: 0, width: width * 0.35}}>
                {frame >= 680 && (
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid rgba(96, 165, 250, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    opacity: fadeIn(frame, 680, 10),
                  }}>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.client}}>STEP 1</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>Browser asks Root</div>
                  </div>
                )}

                {frame >= 750 && (
                  <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    marginTop: 85,
                    opacity: fadeIn(frame, 750, 10),
                  }}>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: '#fbbf24'}}>STEP 2</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>Root → TLD</div>
                  </div>
                )}

                {frame >= 830 && (
                  <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    marginTop: 170,
                    opacity: fadeIn(frame, 830, 10),
                  }}>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: '#f59e0b'}}>STEP 3</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>TLD → Authoritative</div>
                  </div>
                )}

                {frame >= 910 && (
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginTop: 255,
                    opacity: fadeIn(frame, 910, 10),
                  }}>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.success}}>STEP 4</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>Returns IP!</div>
                  </div>
                )}
              </div>

              {frame >= 1000 && (
                <>
                  <DataFlowStream x1={width * 0.08 + 30} y1={35} x2={width * 0.25} y2={50} startFrame={1000} />
                  <DataFlowStream x1={width * 0.25 + 70} y1={80} x2={width * 0.25 + 70} y2={120} startFrame={1010} />
                  <DataFlowStream x1={width * 0.25 + 70} y1={190} x2={width * 0.25 + 70} y2={230} startFrame={1020} />
                  <DataFlowStream x1={width * 0.25} y1={290} x2={width * 0.08 + 30} y2={80} startFrame={1030} />
                </>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 3: TLS Security - VERTICAL LAYOUT (1080-2400 frames / 36-80s) */}
      {frame >= 1080 && frame < 2400 && (
        <>
          <Title text="Making It Secure with TLS" subtitle="Encryption & Certificates" startFrame={1080} />

          {frame < 1230 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.22} startFrame={1090} size={80} />
              <Dialogue
                speaker="junior"
                text="How do we know we're really talking to Google?"
                x={width * 0.1}
                y={height * 0.29}
                startFrame={1110}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.40} startFrame={1090} size={80} />
              <Dialogue
                speaker="architect"
                text="TLS! It verifies identity, negotiates encryption, and secures data..."
                x={width * 0.1}
                y={height * 0.47}
                startFrame={1140}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* TLS Handshake - vertical stack */}
          {frame >= 1240 && frame < 1400 && (
            <div style={{
              position: 'absolute',
              top: height * 0.24,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1240, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 14,
                padding: 18,
              }}>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 14, textAlign: 'center'}}>
                  TLS Handshake 🔐
                </div>

                <div style={{textAlign: 'center', marginBottom: 12}}>
                  <div style={{fontSize: 36, marginBottom: 6}}>💻</div>
                  <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.client}}>Browser</div>
                </div>

                {frame >= 1260 && (
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.15)',
                    border: '2px solid rgba(96, 165, 250, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    opacity: fadeIn(frame, 1260, 10),
                  }}>
                    <div style={{fontSize: 16, color: '#60a5fa', fontWeight: 'bold'}}>1. ClientHello →</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>Cipher suites, TLS version</div>
                  </div>
                )}

                {frame >= 1280 && (
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    opacity: fadeIn(frame, 1280, 10),
                  }}>
                    <div style={{fontSize: 16, color: '#10b981', fontWeight: 'bold'}}>← 2. ServerHello</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>Certificate chain, chosen cipher</div>
                  </div>
                )}

                {frame >= 1300 && (
                  <div style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    border: '2px solid rgba(139, 92, 246, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    opacity: fadeIn(frame, 1300, 10),
                  }}>
                    <div style={{fontSize: 16, color: '#a78bfa', fontWeight: 'bold'}}>3. Key Exchange →</div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>Encrypted pre-master secret</div>
                  </div>
                )}

                {frame >= 1320 && (
                  <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 12,
                    opacity: fadeIn(frame, 1320, 10),
                  }}>
                    <div style={{fontSize: 16, color: '#fbbf24', fontWeight: 'bold', textAlign: 'center'}}>4. ✓ Finished</div>
                    <div style={{fontSize: 14, color: '#e2e8f0', textAlign: 'center'}}>Secure tunnel! 🔒</div>
                  </div>
                )}

                <div style={{textAlign: 'center', marginTop: 12}}>
                  <div style={{fontSize: 36, marginBottom: 6}}>🖥️</div>
                  <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.server}}>Server</div>
                </div>
              </div>
            </div>
          )}

          {/* Cipher Suite */}
          {frame >= 1420 && frame < 1720 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 1420, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 14,
                padding: 18,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.client, marginBottom: 12, textAlign: 'center'}}>
                  Cipher Suite Negotiation
                </div>

                <div style={{
                  backgroundColor: 'rgba(96, 165, 250, 0.1)',
                  border: '2px solid rgba(96, 165, 250, 0.3)',
                  borderRadius: 10,
                  padding: 14,
                  opacity: fadeIn(frame, 1460, 20),
                }}>
                  <div style={{fontSize: 16, fontWeight: 'bold', color: '#fbbf24', marginBottom: 10, textAlign: 'center'}}>
                    TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
                  </div>

                  <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
                    <div style={{marginBottom: 8, opacity: fadeIn(frame, 1510, 20)}}>
                      <span style={{color: '#60a5fa', fontWeight: 'bold'}}>ECDHE:</span> Key Exchange (Elliptic Curve)
                    </div>
                    <div style={{marginBottom: 8, opacity: fadeIn(frame, 1560, 20)}}>
                      <span style={{color: '#10b981', fontWeight: 'bold'}}>RSA:</span> Authentication (Verifies server)
                    </div>
                    <div style={{marginBottom: 8, opacity: fadeIn(frame, 1610, 20)}}>
                      <span style={{color: '#a78bfa', fontWeight: 'bold'}}>AES-256-GCM:</span> Bulk Encryption
                    </div>
                    <div style={{opacity: fadeIn(frame, 1660, 20)}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>SHA384:</span> Data Integrity Hash
                    </div>
                  </div>
                </div>

                {frame >= 1690 && (
                  <div style={{marginTop: 12, fontSize: 16, color: '#10b981', textAlign: 'center', opacity: fadeIn(frame, 1690, 20)}}>
                    ✓ Server agrees to this cipher suite
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Certificate Chain - compact horizontal */}
          {frame >= 1740 && frame < 2040 && (
            <div style={{
              position: 'absolute',
              top: height * 0.28,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 1740, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 14,
                padding: 16,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: '#10b981', marginBottom: 12, textAlign: 'center'}}>
                  Certificate Chain
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8}}>
                  <div style={{
                    flex: 1,
                    backgroundColor: '#dc2626',
                    border: '2px solid #ef4444',
                    borderRadius: 10,
                    padding: 10,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1780, 25),
                  }}>
                    <div style={{fontSize: 24}}>🏛️</div>
                    <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Root CA</div>
                    <div style={{fontSize: 12, color: '#fca5a5'}}>Trusted</div>
                  </div>

                  <div style={{fontSize: 20, color: '#fbbf24'}}>→</div>

                  <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.cache,
                    border: '2px solid #f59e0b',
                    borderRadius: 10,
                    padding: 10,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1860, 25),
                  }}>
                    <div style={{fontSize: 24}}>📜</div>
                    <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Intermediate</div>
                    <div style={{fontSize: 12, color: '#fcd34d'}}>Signed</div>
                  </div>

                  <div style={{fontSize: 20, color: '#fbbf24'}}>→</div>

                  <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.success,
                    border: '2px solid #10b981',
                    borderRadius: 10,
                    padding: 10,
                    textAlign: 'center',
                    opacity: fadeIn(frame, 1940, 25),
                  }}>
                    <div style={{fontSize: 24}}>✅</div>
                    <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Server</div>
                    <div style={{fontSize: 12, color: '#6ee7b7'}}>google.com</div>
                  </div>
                </div>

                {frame >= 1970 && (
                  <div style={{marginTop: 12, fontSize: 14, color: '#10b981', textAlign: 'center', opacity: fadeIn(frame, 1970, 20)}}>
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
              top: height * 0.28,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 2060, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 14,
                padding: 16,
              }}>
                <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12, textAlign: 'center'}}>
                  Key Exchange & Encryption
                </div>

                <div style={{opacity: fadeIn(frame, 2100, 25), marginBottom: 10}}>
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    border: '2px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: 10,
                    padding: 12,
                  }}>
                    <div style={{fontSize: 24, marginBottom: 6, textAlign: 'center'}}>🔑</div>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: '#60a5fa', marginBottom: 6, textAlign: 'center'}}>
                      ECDHE Key Exchange
                    </div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>
                      • Generate keys<br/>
                      • Exchange public keys<br/>
                      • Compute shared secret<br/>
                      • Perfect Forward Secrecy
                    </div>
                  </div>
                </div>

                <div style={{opacity: fadeIn(frame, 2150, 25)}}>
                  <div style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: 10,
                    padding: 12,
                  }}>
                    <div style={{fontSize: 24, marginBottom: 6, textAlign: 'center'}}>🔐</div>
                    <div style={{fontSize: 16, fontWeight: 'bold', color: '#a78bfa', marginBottom: 6, textAlign: 'center'}}>
                      AES-256-GCM
                    </div>
                    <div style={{fontSize: 14, color: '#e2e8f0'}}>
                      • Symmetric encryption<br/>
                      • 256-bit key strength<br/>
                      • Authenticated mode<br/>
                      • Fast & Secure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Final - Encrypted Communication */}
          {frame >= 2215 && (
            <div style={{
              position: 'absolute',
              top: height * 0.32,
              left: width * 0.1,
              right: width * 0.1,
              opacity: fadeIn(frame, 2215, 20),
            }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 14,
                padding: 18,
                textAlign: 'center',
              }}>
                <div style={{fontSize: 32, marginBottom: 10}}>🔒</div>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#10b981', marginBottom: 10}}>
                  Secure Tunnel Established!
                </div>
                <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.8}}>
                  ✓ Server identity verified<br/>
                  ✓ Strong encryption (AES-256)<br/>
                  ✓ Secure keys exchanged<br/>
                  ✓ Data integrity protected
                </div>
                <div style={{marginTop: 10, fontSize: 14, color: '#fbbf24'}}>
                  ⚡ TLS 1.3: ~25ms (vs 50ms in TLS 1.2)
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Proxies - VERTICAL STACK (2400-2820 frames / 80-94s) */}
      {frame >= 2400 && frame < 2820 && (
        <>
          <Title text="Proxies: The Smart Helpers" subtitle="Forward vs Reverse" startFrame={2400} />

          {frame < 2610 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.22} startFrame={2410} size={80} />
              <Dialogue
                speaker="junior"
                text="Is there a way to make this faster?"
                x={width * 0.1}
                y={height * 0.29}
                startFrame={2430}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.40} startFrame={2410} size={80} />
              <Dialogue
                speaker="architect"
                text="Proxies! They act as smart helpers..."
                x={width * 0.1}
                y={height * 0.47}
                startFrame={2520}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* Proxy Flow - vertical stack */}
          {frame >= 2620 && (
            <div style={{
              position: 'absolute',
              top: height * 0.26,
              left: width * 0.5 - 80,
              width: 160,
              opacity: fadeIn(frame, 2620, 15),
            }}>
              {[
                { label: 'Client', icon: '💻', color: theme.colors.client, top: 0 },
                { label: 'Forward\nProxy', icon: '🔀', color: '#8b5cf6', subtitle: 'Squid', top: 150, opacity: fadeIn(frame, 2650, 15) },
                { label: 'DNS', icon: '🌐', color: theme.colors.cache, top: 300 },
                { label: 'Reverse\nProxy', icon: '🔀', color: theme.colors.loadBalancer, subtitle: 'NGINX', top: 450, opacity: fadeIn(frame, 2680, 15) },
                { label: 'App\nServer', icon: '🖥️', color: theme.colors.server, top: 600 },
              ].map((box, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: box.top,
                    width: 160,
                    height: 110,
                    backgroundColor: box.color,
                    borderRadius: 12,
                    border: `3px solid ${box.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                    opacity: box.opacity || 1,
                  }}
                >
                  <div style={{ fontSize: 36 }}>{box.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', textAlign: 'center', whiteSpace: 'pre-line' }}>
                    {box.label}
                  </div>
                  {box.subtitle && (
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                      {box.subtitle}
                    </div>
                  )}
                </div>
              ))}

              {/* Connecting arrows */}
              {frame >= 2650 && (
                <svg style={{ position: 'absolute', top: 0, left: 0, width: 160, height: 720 }}>
                  {[0, 150, 300, 450].map((y, i) => (
                    <g key={i}>
                      <line
                        x1={80}
                        y1={y + 110}
                        x2={80}
                        y2={y + 150}
                        stroke="#60a5fa"
                        strokeWidth="4"
                        markerEnd="url(#arrow-v)"
                      />
                    </g>
                  ))}
                  <defs>
                    <marker id="arrow-v" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                      <polygon points="0 0, 10 5, 0 10" fill="#60a5fa" />
                    </marker>
                  </defs>
                </svg>
              )}
            </div>
          )}

          {/* Explanation boxes */}
          {frame >= 2710 && (
            <div style={{
              position: 'absolute',
              bottom: 120,
              left: width * 0.05,
              right: width * 0.05,
              opacity: fadeIn(frame, 2710, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 12,
                padding: 14,
                marginBottom: 10,
              }}>
                <div style={{fontSize: 16, fontWeight: 'bold', color: '#a78bfa', marginBottom: 8}}>
                  Forward Proxy (Client-Side)
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                  • Caches content<br/>
                  • Filters websites<br/>
                  • Corporate networks
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 12,
                padding: 14,
              }}>
                <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 8}}>
                  Reverse Proxy (Server-Side)
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                  • Load balancing<br/>
                  • TLS termination<br/>
                  • Protects backends
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: Complete Flow Summary (2820-3420 frames / 94-114s) */}
      {frame >= 2820 && frame < 3420 && (
        <>
          <Title text="Putting It All Together" subtitle="The Complete Journey" startFrame={2820} />

          {frame < 3020 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.22} startFrame={2830} size={80} />
              <Dialogue
                speaker="junior"
                text="How do all these pieces work together?"
                x={width * 0.1}
                y={height * 0.29}
                startFrame={2850}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.40} startFrame={2830} size={80} />
              <Dialogue
                speaker="architect"
                text="Let me walk you through the complete journey..."
                x={width * 0.1}
                y={height * 0.47}
                startFrame={2940}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* Complete timeline */}
          {frame >= 3030 && (
            <div style={{
              position: 'absolute',
              top: height * 0.28,
              left: width * 0.08,
              right: width * 0.08,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 14,
              padding: 20,
              opacity: fadeIn(frame, 3030, 15),
            }}>
              <div style={{fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 16, textAlign: 'center'}}>
                When You Press Enter...
              </div>
              <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 2.2}}>
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
                  marginTop: 16,
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: 10,
                  padding: 14,
                  opacity: fadeIn(frame, 3360, 15),
                }}>
                  <div style={{fontSize: 16, color: '#e2e8f0', textAlign: 'center', lineHeight: 1.8}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Total:</span> <span style={{fontWeight: 'bold', fontSize: 20}}>~85ms</span>
                    <br/>
                    <span style={{color: '#10b981', fontWeight: 'bold'}}>Cached:</span> <span style={{fontWeight: 'bold', fontSize: 20}}>~15-25ms!</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 6: Best Practices - SINGLE COLUMN (3420-3840 frames / 114-128s) */}
      {frame >= 3420 && frame < 3840 && (
        <>
          <Title text="Production Best Practices" subtitle="What Architects Need to Know" startFrame={3420} />

          {frame < 3610 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.22} startFrame={3430} size={80} />
              <Dialogue
                speaker="junior"
                text="What do I need for production systems?"
                x={width * 0.1}
                y={height * 0.29}
                startFrame={3450}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.40} startFrame={3430} size={80} />
              <Dialogue
                speaker="architect"
                text="Here are the key principles..."
                x={width * 0.1}
                y={height * 0.47}
                startFrame={3520}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* Best practices - single column */}
          {frame >= 3620 && (
            <div style={{
              position: 'absolute',
              top: height * 0.28,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 3620, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 12,
                padding: 14,
                marginBottom: 10,
              }}>
                <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.client, marginBottom: 8}}>
                  🌐 DNS Strategy
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                  • Dual-stack (IPv4 + IPv6) • TTL: 3600s<br/>
                  • DNSSEC • Cloudflare/Route53
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 12,
                padding: 14,
                marginBottom: 10,
              }}>
                <div style={{fontSize: 16, fontWeight: 'bold', color: '#a78bfa', marginBottom: 8}}>
                  🔐 TLS/Security
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                  • TLS 1.3 only • Let's Encrypt<br/>
                  • HSTS headers • HTTP/3 (QUIC)
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 12,
                padding: 14,
                marginBottom: 10,
              }}>
                <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.success, marginBottom: 8}}>
                  🔀 Proxy Setup
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                  • NGINX/Envoy • TLS termination<br/>
                  • Rate limiting • Static caching
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(245, 158, 11, 0.5)',
                borderRadius: 12,
                padding: 14,
              }}>
                <div style={{fontSize: 16, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>
                  ⚡ Performance
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                  • Connection pooling • HTTP/2<br/>
                  • TCP Fast Open • Monitoring
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
            top: height * 0.35,
            left: width * 0.1,
            right: width * 0.1,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 3840, 20),
          }}>
            You've Mastered<br/>the Fundamentals! 🎉
          </div>

          {frame < 4000 && (
            <>
              <Character type="junior" x={width * 0.5} y={height * 0.50} startFrame={3860} size={100} />
              <Dialogue
                speaker="junior"
                text="This makes sense now! What's next?"
                x={width * 0.1}
                y={height * 0.58}
                startFrame={3880}
                maxWidth={width * 0.8}
              />

              <Character type="architect" x={width * 0.5} y={height * 0.70} startFrame={3860} size={100} />
              <Dialogue
                speaker="architect"
                text="Now let's learn about distributing traffic for high availability!"
                x={width * 0.1}
                y={height * 0.78}
                startFrame={3910}
                maxWidth={width * 0.8}
              />
            </>
          )}

          <div style={{
            position: 'absolute',
            bottom: 200,
            left: width * 0.1,
            right: width * 0.1,
            fontSize: 22,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '16px 24px',
            borderRadius: 12,
            border: '3px solid rgba(96, 165, 250, 0.5)',
            opacity: fadeIn(frame, 4010, 20),
            textAlign: 'center',
          }}>
            Next Up: Load Balancing & CDNs 🚀
          </div>

          <div style={{
            position: 'absolute',
            bottom: 140,
            left: width * 0.1,
            right: width * 0.1,
            fontSize: 18,
            color: '#94a3b8',
            textAlign: 'center',
            opacity: fadeIn(frame, 4040, 15),
          }}>
            Phase 1: Foundational Infrastructure<br/>Topic 1 of 4 ✅
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
