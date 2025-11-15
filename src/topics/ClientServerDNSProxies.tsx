import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Client-Server, DNS & Proxies - Teaching Through Conversation
 * Sarah (student) asks questions, Developer (teacher) explains
 * Story-driven learning with technical depth
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

          <Character type="junior" x={width * 0.2} y={height * 0.78} startFrame={30} size={110} />
          <Character type="architect" x={width * 0.72} y={height * 0.78} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="When I type 'google.com' and press Enter, what actually happens? How does my browser know where to go?"
            x={width * 0.05}
            y={height * 0.88}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Let's trace this journey together. First, computers don't understand 'google.com' - they only speak in IP addresses."
            x={width * 0.72 - 280}
            y={height * 0.88}
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

      {/* Scene 2: The DNS Discovery (450-960 frames / 15-32s) */}
      {frame >= 450 && frame < 960 && (
        <>
          <Title text="DNS: The Internet's Phone Book" subtitle="How Domain Names Become IP Addresses" startFrame={450} />

          <Character type="junior" x={width * 0.15} y={height * 0.82} startFrame={460} size={100} />
          <Character type="architect" x={width * 0.78} y={height * 0.82} startFrame={460} size={100} />

          <Dialogue
            speaker="junior"
            text="Okay, so I typed 'google.com' but computers need IP addresses. How does that conversion happen?"
            x={width * 0.05}
            y={height * 0.92}
            startFrame={480}
            maxWidth={450}
          />

          <Dialogue
            speaker="architect"
            text="That's where DNS comes in! Think of it as a distributed phone book. But it's not just one server - it's a hierarchy."
            x={width * 0.78 - 300}
            y={height * 0.92}
            startFrame={570}
            maxWidth={520}
          />

          {/* DNS Hierarchy Visualization */}
          {frame >= 660 && (
            <div style={{
              position: 'absolute',
              top: height * 0.15,
              left: width * 0.12,
              right: width * 0.12,
              opacity: fadeIn(frame, 660, 15),
            }}>
              {/* Root DNS */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: width * 0.38,
                width: 180,
                backgroundColor: '#dc2626',
                borderRadius: 12,
                border: '3px solid #ef4444',
                padding: 18,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                transform: `scale(${pulse(frame, 680, 60)})`,
              }}>
                <div style={{fontSize: 32}}>🌍</div>
                <div style={{fontSize: 17, fontWeight: 'bold', color: '#fff', marginTop: 8}}>Root DNS</div>
                <div style={{fontSize: 13, color: '#fca5a5', marginTop: 6}}>13 root servers worldwide</div>
              </div>

              {/* TLD DNS */}
              <div style={{
                position: 'absolute',
                top: 130,
                left: width * 0.2,
                width: 170,
                backgroundColor: theme.colors.cache,
                borderRadius: 12,
                border: '3px solid #f59e0b',
                padding: 16,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                opacity: fadeIn(frame, 720, 15),
              }}>
                <div style={{fontSize: 28}}>🔗</div>
                <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 6}}>TLD Server</div>
                <div style={{fontSize: 12, color: '#fcd34d', marginTop: 4}}>.com .org .net</div>
              </div>

              {/* Authoritative DNS */}
              <div style={{
                position: 'absolute',
                top: 130,
                left: width * 0.56,
                width: 170,
                backgroundColor: theme.colors.success,
                borderRadius: 12,
                border: '3px solid #10b981',
                padding: 16,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                textAlign: 'center',
                opacity: fadeIn(frame, 760, 15),
              }}>
                <div style={{fontSize: 28}}>📋</div>
                <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 6}}>Authoritative</div>
                <div style={{fontSize: 12, color: '#6ee7b7', marginTop: 4}}>google.com's NS</div>
              </div>

              {/* Flow arrows showing the lookup */}
              {frame >= 800 && (
                <>
                  <FlowLine
                    x1={width * 0.38 + 90}
                    y1={75}
                    x2={width * 0.2 + 85}
                    y2={130}
                    label="1. Where is .com?"
                    color="#fbbf24"
                    startFrame={800}
                  />
                  <FlowLine
                    x1={width * 0.38 + 90}
                    y1={75}
                    x2={width * 0.56 + 85}
                    y2={130}
                    label="2. Where is google?"
                    color={theme.colors.success}
                    startFrame={850}
                  />
                </>
              )}

              {/* Explanation box */}
              {frame >= 900 && (
                <div style={{
                  position: 'absolute',
                  top: 280,
                  left: width * 0.08,
                  right: width * 0.08,
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '2px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: 12,
                  padding: 20,
                  opacity: fadeIn(frame, 900, 15),
                }}>
                  <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 2, textAlign: 'center'}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ The Lookup Journey:</span> Your browser asks Root DNS → Root says "ask .com TLD" → TLD says "ask Google's nameserver" → Finally gets IP: <span style={{fontWeight: 'bold', color: theme.colors.client}}>142.250.185.46</span>
                    <br/>
                    <span style={{fontSize: 14, color: '#94a3b8'}}>Cached at every step! First lookup: ~50-100ms | Subsequent: &lt;1ms</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 3: Security Question (960-1440 frames / 32-48s) */}
      {frame >= 960 && frame < 1440 && (
        <>
          <Title text="Making It Secure with TLS" subtitle="Encrypting the Connection" startFrame={960} />

          <Character type="junior" x={width * 0.18} y={height * 0.8} startFrame={970} size={105} />
          <Character type="architect" x={width * 0.75} y={height * 0.8} startFrame={970} size={105} />

          <Dialogue
            speaker="junior"
            text="Got it! DNS found the IP address. But how do we know we're really talking to Google and not a hacker pretending to be Google?"
            x={width * 0.05}
            y={height * 0.9}
            startFrame={990}
            maxWidth={480}
          />

          <Dialogue
            speaker="architect"
            text="Excellent security thinking! That's where TLS comes in - it creates an encrypted tunnel and verifies the server's identity."
            x={width * 0.75 - 320}
            y={height * 0.9}
            startFrame={1080}
            maxWidth={540}
          />

          {/* TLS Handshake Visualization */}
          {frame >= 1170 && (
            <div style={{
              position: 'absolute',
              top: height * 0.14,
              left: width * 0.15,
              right: width * 0.15,
              opacity: fadeIn(frame, 1170, 15),
            }}>
              {/* Client and Server icons */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 48}}>💻</div>
                  <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.client, marginTop: 8}}>Your Browser</div>
                </div>

                <div style={{flex: 1, margin: '0 40px'}}>
                  {/* TLS Handshake Steps */}
                  <div style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '3px solid rgba(139, 92, 246, 0.5)',
                    borderRadius: 14,
                    padding: 24,
                  }}>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: '#a78bfa', marginBottom: 16, textAlign: 'center'}}>
                      🔐 TLS 1.3 Handshake (~100ms)
                    </div>
                    <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2.2}}>
                      <div style={{opacity: fadeIn(frame, 1200, 10)}}>
                        <span style={{color: '#60a5fa', fontWeight: 'bold'}}>① ClientHello:</span> "Here are the encryption methods I support..."
                      </div>
                      <div style={{opacity: fadeIn(frame, 1240, 10)}}>
                        <span style={{color: '#10b981', fontWeight: 'bold'}}>② ServerHello:</span> "Let's use this one. Here's my certificate from Let's Encrypt..."
                      </div>
                      <div style={{opacity: fadeIn(frame, 1280, 10)}}>
                        <span style={{color: '#fbbf24', fontWeight: 'bold'}}>③ Browser Verifies:</span> "Certificate is valid! Let's create encryption keys..."
                      </div>
                      <div style={{opacity: fadeIn(frame, 1320, 10)}}>
                        <span style={{color: '#10b981', fontWeight: 'bold'}}>④ Encrypted Tunnel:</span> "All communication now encrypted! 🔒"
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: 48}}>🖥️</div>
                  <div style={{fontSize: 16, fontWeight: 'bold', color: theme.colors.server, marginTop: 8}}>Google Server</div>
                </div>
              </div>

              {/* Key insight */}
              {frame >= 1360 && (
                <div style={{
                  marginTop: 24,
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: 12,
                  padding: 18,
                  opacity: fadeIn(frame, 1360, 15),
                }}>
                  <div style={{fontSize: 16, color: '#e2e8f0', textAlign: 'center', lineHeight: 2}}>
                    <span style={{color: '#10b981', fontWeight: 'bold'}}>⚡ Why TLS 1.3 is Better:</span> Only 1 round trip (~100ms) vs TLS 1.2's 2 round trips (~200ms)
                    <br/>
                    <span style={{fontSize: 14, color: '#94a3b8'}}>Production systems disable TLS 1.0/1.1 - security vulnerabilities!</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Scene 4: Proxies Optimization (1440-1860 frames / 48-62s) */}
      {frame >= 1440 && frame < 1860 && (
        <>
          <Title text="Proxies: The Smart Helpers" subtitle="Forward vs Reverse Proxies" startFrame={1440} />

          <Character type="junior" x={width * 0.16} y={height * 0.82} startFrame={1450} size={100} />
          <Character type="architect" x={width * 0.77} y={height * 0.82} startFrame={1450} size={100} />

          <Dialogue
            speaker="junior"
            text="This seems like a lot of work for every request! Is there a way to make it faster or more efficient?"
            x={width * 0.05}
            y={height * 0.92}
            startFrame={1470}
            maxWidth={460}
          />

          <Dialogue
            speaker="architect"
            text="Absolutely! That's where proxies come in. They're like smart helpers. Let me show you two important types..."
            x={width * 0.77 - 320}
            y={height * 0.92}
            startFrame={1560}
            maxWidth={540}
          />

          {/* Proxy comparison */}
          {frame >= 1650 && (
            <div style={{
              position: 'absolute',
              top: height * 0.16,
              left: width * 0.08,
              right: width * 0.08,
              display: 'flex',
              gap: 28,
              opacity: fadeIn(frame, 1650, 15),
            }}>
              {/* Forward Proxy */}
              <div style={{
                flex: 1,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 14,
                padding: 24,
              }}>
                <div style={{textAlign: 'center', fontSize: 42, marginBottom: 12}}>🔀</div>
                <div style={{fontSize: 22, fontWeight: 'bold', color: '#a78bfa', marginBottom: 16, textAlign: 'center'}}>
                  Forward Proxy
                </div>
                <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2}}>
                  <div style={{color: '#fbbf24', fontWeight: 'bold', marginBottom: 8}}>Client-Side Helper</div>
                  <div style={{fontSize: 14}}>
                    • Sits between YOU and the internet<br/>
                    • Corporate networks use this<br/>
                    • Can cache common requests<br/>
                    • Filters/monitors traffic<br/>
                    • Common tool: <span style={{color: '#60a5fa', fontWeight: 'bold'}}>Squid (port 3128)</span>
                  </div>
                  <div style={{marginTop: 12, fontSize: 13, color: '#94a3b8', fontStyle: 'italic'}}>
                    "I'll fetch websites on your behalf and cache popular ones!"
                  </div>
                </div>
              </div>

              {/* Reverse Proxy */}
              <div style={{
                flex: 1,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 14,
                padding: 24,
              }}>
                <div style={{textAlign: 'center', fontSize: 42, marginBottom: 12}}>🔀</div>
                <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 16, textAlign: 'center'}}>
                  Reverse Proxy
                </div>
                <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2}}>
                  <div style={{color: '#fbbf24', fontWeight: 'bold', marginBottom: 8}}>Server-Side Helper</div>
                  <div style={{fontSize: 14}}>
                    • Sits in front of web servers<br/>
                    • Handles TLS encryption<br/>
                    • Load balances traffic<br/>
                    • Caches static content<br/>
                    • Common tool: <span style={{color: '#10b981', fontWeight: 'bold'}}>NGINX (port 443)</span>
                  </div>
                  <div style={{marginTop: 12, fontSize: 13, color: '#94a3b8', fontStyle: 'italic'}}>
                    "I'll protect servers and distribute traffic efficiently!"
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: The Complete Flow (1860-2280 frames / 62-76s) */}
      {frame >= 1860 && frame < 2280 && (
        <>
          <Title text="Putting It All Together" subtitle="The Complete Request Journey" startFrame={1860} />

          <Character type="junior" x={width * 0.14} y={height * 0.84} startFrame={1870} size={95} />
          <Character type="architect" x={width * 0.79} y={height * 0.84} startFrame={1870} size={95} />

          <Dialogue
            speaker="junior"
            text="Can we see how all these pieces - DNS, TLS, proxies - work together when I visit google.com?"
            x={width * 0.05}
            y={height * 0.94}
            startFrame={1890}
            maxWidth={440}
          />

          <Dialogue
            speaker="architect"
            text="Great idea! Let me walk you through the complete journey, step by step with real timing..."
            x={width * 0.79 - 340}
            y={height * 0.94}
            startFrame={1980}
            maxWidth={560}
          />

          {/* Complete flow diagram */}
          {frame >= 2070 && (
            <div style={{
              position: 'absolute',
              top: height * 0.12,
              left: width * 0.08,
              right: width * 0.08,
              opacity: fadeIn(frame, 2070, 15),
            }}>
              {/* Step-by-step narration */}
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 16,
                padding: 26,
              }}>
                <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 20, textAlign: 'center'}}>
                  When You Press Enter on google.com...
                </div>
                <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 2.5}}>
                  <div style={{opacity: fadeIn(frame, 2100, 10)}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>1.</span> <span style={{color: theme.colors.client, fontWeight: 'bold'}}>DNS Lookup</span> (~50ms first time, then cached): "What's the IP for google.com?" → 142.250.185.46
                  </div>
                  <div style={{opacity: fadeIn(frame, 2140, 10)}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>2.</span> <span style={{color: '#a78bfa', fontWeight: 'bold'}}>TCP Connection</span> (~30ms): Three-way handshake (SYN, SYN-ACK, ACK) establishes connection
                  </div>
                  <div style={{opacity: fadeIn(frame, 2180, 10)}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>3.</span> <span style={{color: '#10b981', fontWeight: 'bold'}}>TLS Handshake</span> (~100ms): Verify certificate, create encrypted tunnel
                  </div>
                  <div style={{opacity: fadeIn(frame, 2220, 10)}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>4.</span> <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>HTTP Request</span>: "GET / HTTP/2" - asking for the homepage
                  </div>
                  <div style={{opacity: fadeIn(frame, 2260, 10)}}>
                    <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: 20}}>5.</span> <span style={{color: theme.colors.server, fontWeight: 'bold'}}>Server Response</span> (~80ms): NGINX reverse proxy → App servers → Send HTML/CSS/JS
                  </div>
                </div>

                {frame >= 2300 && (
                  <div style={{
                    marginTop: 22,
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 10,
                    padding: 18,
                    opacity: fadeIn(frame, 2300, 15),
                  }}>
                    <div style={{fontSize: 18, color: '#e2e8f0', textAlign: 'center', lineHeight: 2}}>
                      <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Total Time First Visit:</span> <span style={{fontWeight: 'bold', fontSize: 22}}>~260ms</span><br/>
                      <span style={{color: '#10b981', fontWeight: 'bold'}}>⚡ Subsequent Visits (cached):</span> <span style={{fontWeight: 'bold', fontSize: 22}}>~30-50ms!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 6: Production Insights (2280-2580 frames / 76-86s) */}
      {frame >= 2280 && frame < 2580 && (
        <>
          <Title text="Production Best Practices" subtitle="What Architects Need to Know" startFrame={2280} />

          <Character type="junior" x={width * 0.17} y={height * 0.84} startFrame={2290} size={100} />
          <Character type="architect" x={width * 0.76} y={height * 0.84} startFrame={2290} size={100} />

          <Dialogue
            speaker="junior"
            text="This is amazing! All this happens in a fraction of a second. What do I need to remember for real systems?"
            x={width * 0.05}
            y={height * 0.94}
            startFrame={2310}
            maxWidth={470}
          />

          <Dialogue
            speaker="architect"
            text="Let me share the key principles that scale to billions of requests at companies like Google, Netflix, and AWS..."
            x={width * 0.76 - 340}
            y={height * 0.94}
            startFrame={2400}
            maxWidth={560}
          />

          {/* Production insights in cards */}
          {frame >= 2490 && (
            <div style={{
              position: 'absolute',
              top: height * 0.14,
              left: width * 0.08,
              right: width * 0.08,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              opacity: fadeIn(frame, 2490, 15),
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 12,
                padding: 20,
              }}>
                <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.client, marginBottom: 12}}>
                  🌐 DNS Strategy
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.9}}>
                  • Use <span style={{color: '#60a5fa', fontWeight: 'bold'}}>dual-stack</span> (IPv4 + IPv6)<br/>
                  • <span style={{color: '#60a5fa', fontWeight: 'bold'}}>TTL:</span> 300s for dev, 3600s for prod<br/>
                  • Enable <span style={{color: '#60a5fa', fontWeight: 'bold'}}>DNSSEC</span> for security<br/>
                  • Cloudflare/Route53 for global reach
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(139, 92, 246, 0.5)',
                borderRadius: 12,
                padding: 20,
              }}>
                <div style={{fontSize: 19, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12}}>
                  🔐 TLS/Security
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.9}}>
                  • <span style={{color: '#a78bfa', fontWeight: 'bold'}}>TLS 1.3 only</span> (disable 1.0/1.1)<br/>
                  • Let's Encrypt with auto-renewal<br/>
                  • <span style={{color: '#a78bfa', fontWeight: 'bold'}}>HSTS headers</span> enforce HTTPS<br/>
                  • HTTP/3 (QUIC) for mobile clients
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                borderRadius: 12,
                padding: 20,
              }}>
                <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.success, marginBottom: 12}}>
                  🔀 Proxy Setup
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.9}}>
                  • <span style={{color: '#10b981', fontWeight: 'bold'}}>NGINX/Envoy</span> for reverse proxy<br/>
                  • TLS termination at edge<br/>
                  • Rate limiting prevents abuse<br/>
                  • Static content caching (CDN next!)
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(245, 158, 11, 0.5)',
                borderRadius: 12,
                padding: 20,
              }}>
                <div style={{fontSize: 19, fontWeight: 'bold', color: '#fbbf24', marginBottom: 12}}>
                  ⚡ Performance
                </div>
                <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.9}}>
                  • <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Connection pooling</span> (keep-alive)<br/>
                  • HTTP/2 multiplexing (parallel requests)<br/>
                  • TCP Fast Open for faster handshakes<br/>
                  • Monitor with Prometheus + Grafana
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
            text="This makes so much sense now! What should I learn next?"
            x={width * 0.32 - 240}
            y={height * 0.64}
            startFrame={2620}
            maxWidth={460}
          />

          <Dialogue
            speaker="architect"
            text="Now that you understand how requests flow, let's learn about distributing traffic across multiple servers for high availability!"
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
