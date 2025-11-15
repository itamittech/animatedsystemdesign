import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Client-Server, DNS & Proxies - Architect's Perspective
 * Production-level technical depth with elegant animations
 * Story-driven but technically rigorous
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

      {/* Scene 1: IP Addressing & Network Fundamentals (0-360 frames / 0-12s) */}
      {frame >= 0 && frame < 360 && (
        <>
          <Title text="Internet Fundamentals for Production Systems" subtitle="Building Blocks of Distributed Architecture" startFrame={0} />

          <Character type="architect" x={width * 0.5 - 60} y={height * 0.78} startFrame={30} size={100} />

          <Dialogue
            speaker="architect"
            text="Let's understand the production internet stack from an architect's perspective. We'll start with IP addressing."
            x={width * 0.5 - 420}
            y={height * 0.88}
            startFrame={60}
            maxWidth={840}
          />

          {frame >= 120 && (
            <div style={{
              position: 'absolute',
              top: height * 0.22,
              left: width * 0.15,
              right: width * 0.15,
              opacity: fadeIn(frame, 120, 20),
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 40,
              }}>
                {/* IPv4 */}
                <div style={{
                  flex: 1,
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '3px solid rgba(96, 165, 250, 0.5)',
                  borderRadius: 16,
                  padding: 24,
                  transform: `scale(${pulse(frame, 140, 60)})`,
                }}>
                  <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.client, marginBottom: 16}}>
                    📡 IPv4 Address Space
                  </div>
                  <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2}}>
                    • <span style={{color: '#fbbf24', fontWeight: 'bold'}}>32-bit address:</span> 192.168.1.10<br/>
                    • <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Total IPs:</span> ~4.3 billion (exhausted)<br/>
                    • <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Private ranges:</span><br/>
                    &nbsp;&nbsp;10.0.0.0/8 (Class A)<br/>
                    &nbsp;&nbsp;172.16.0.0/12 (Class B)<br/>
                    &nbsp;&nbsp;192.168.0.0/16 (Class C)<br/>
                    • <span style={{color: '#fbbf24', fontWeight: 'bold'}}>NAT/PAT:</span> Address conservation
                  </div>
                </div>

                {/* Network Stack */}
                <div style={{
                  flex: 1,
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '3px solid rgba(16, 185, 129, 0.5)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 200, 15),
                }}>
                  <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.success, marginBottom: 16}}>
                    🔧 OSI Layer Context
                  </div>
                  <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2}}>
                    • <span style={{color: '#10b981', fontWeight: 'bold'}}>Layer 3 (Network):</span> IP routing<br/>
                    • <span style={{color: '#10b981', fontWeight: 'bold'}}>Layer 4 (Transport):</span> TCP/UDP<br/>
                    • <span style={{color: '#10b981', fontWeight: 'bold'}}>Layer 7 (Application):</span> HTTP/DNS<br/>
                    • <span style={{color: '#10b981', fontWeight: 'bold'}}>TCP handshake:</span> SYN, SYN-ACK, ACK<br/>
                    • <span style={{color: '#10b981', fontWeight: 'bold'}}>MTU:</span> 1500 bytes (Ethernet)
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: 24,
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '2px solid rgba(245, 158, 11, 0.4)',
                borderRadius: 12,
                padding: 20,
                opacity: fadeIn(frame, 260, 15),
              }}>
                <div style={{fontSize: 17, color: '#e2e8f0', lineHeight: 1.8}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Production Insight:</span> Modern apps use <span style={{fontWeight: 'bold'}}>dual-stack (IPv4+IPv6)</span> for compatibility. AWS VPCs support both. IPv6 uses <span style={{fontWeight: 'bold'}}>128-bit addresses</span> (2001:0db8:85a3::8a2e:0370:7334), solving exhaustion.
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: DNS Deep Dive (360-780 frames / 12-26s) */}
      {frame >= 360 && frame < 780 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 320,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 360, 15),
          }}>
            DNS: Hierarchical Distributed Database
          </div>

          {/* DNS Hierarchy Diagram */}
          <div style={{
            position: 'absolute',
            top: height * 0.18,
            left: width * 0.12,
            right: width * 0.12,
            opacity: fadeIn(frame, 380, 15),
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
              padding: 16,
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              textAlign: 'center',
            }}>
              <div style={{fontSize: 28}}>🌍</div>
              <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 8}}>Root DNS</div>
              <div style={{fontSize: 12, color: '#fca5a5', marginTop: 4}}>13 root servers</div>
            </div>

            {/* TLD DNS */}
            <div style={{
              position: 'absolute',
              top: 120,
              left: width * 0.25,
              width: 160,
              backgroundColor: theme.colors.cache,
              borderRadius: 12,
              border: '3px solid #f59e0b',
              padding: 14,
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              textAlign: 'center',
              opacity: fadeIn(frame, 420, 15),
            }}>
              <div style={{fontSize: 24}}>🔗</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff', marginTop: 6}}>TLD DNS</div>
              <div style={{fontSize: 11, color: '#fcd34d', marginTop: 4}}>.com .org .net</div>
            </div>

            {/* Authoritative DNS */}
            <div style={{
              position: 'absolute',
              top: 120,
              left: width * 0.51,
              width: 160,
              backgroundColor: theme.colors.success,
              borderRadius: 12,
              border: '3px solid #10b981',
              padding: 14,
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              textAlign: 'center',
              opacity: fadeIn(frame, 440, 15),
            }}>
              <div style={{fontSize: 24}}>📋</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff', marginTop: 6}}>Authoritative</div>
              <div style={{fontSize: 11, color: '#6ee7b7', marginTop: 4}}>google.com NS</div>
            </div>

            {/* Flow arrows */}
            {frame >= 460 && (
              <>
                <FlowLine
                  x1={width * 0.38 + 90}
                  y1={80}
                  x2={width * 0.25 + 80}
                  y2={120}
                  label="❶ Query .com"
                  color="#fbbf24"
                  startFrame={460}
                />
                <FlowLine
                  x1={width * 0.38 + 90}
                  y1={80}
                  x2={width * 0.51 + 80}
                  y2={120}
                  label="❷ Query google"
                  color={theme.colors.success}
                  startFrame={500}
                />
              </>
            )}
          </div>

          {/* DNS Technical Details */}
          <div style={{
            position: 'absolute',
            top: height * 0.52,
            left: width * 0.08,
            right: width * 0.08,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 16,
            padding: 24,
            opacity: fadeIn(frame, 480, 15),
          }}>
            <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 18}}>
              🏗️ DNS Resolution Flow (Production Details)
            </div>
            <div style={{display: 'flex', gap: 30, fontSize: 14, color: '#e2e8f0', lineHeight: 2}}>
              <div style={{flex: 1}}>
                <div style={{opacity: fadeIn(frame, 520, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>1. Recursive Resolver:</span> ISP/8.8.8.8 caches ~24hrs
                </div>
                <div style={{opacity: fadeIn(frame, 560, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>2. Root Server:</span> Returns .com TLD nameserver
                </div>
                <div style={{opacity: fadeIn(frame, 600, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>3. TLD Server:</span> Returns google.com NS (Route53)
                </div>
                <div style={{opacity: fadeIn(frame, 640, 10)}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>4. Authoritative:</span> Returns A record with IP
                </div>
              </div>
              <div style={{flex: 1}}>
                <div style={{opacity: fadeIn(frame, 560, 10)}}>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Record Types:</span><br/>
                  • A: IPv4 (142.250.185.46)<br/>
                  • AAAA: IPv6<br/>
                  • CNAME: Alias (www → apex)<br/>
                  • MX: Mail server<br/>
                  • TXT: Verification/SPF
                </div>
              </div>
            </div>
            <div style={{marginTop: 16, fontSize: 15, color: '#fbbf24', opacity: fadeIn(frame, 680, 10)}}>
              <span style={{fontWeight: 'bold'}}>⚡ Performance:</span> Uncached: 50-100ms | Browser cache: &lt;1ms | DNS prefetch via &lt;link rel="dns-prefetch"&gt;
            </div>
          </div>

          <Character type="architect" x={width * 0.05} y={height * 0.85} startFrame={370} size={90} />
        </>
      )}

      {/* Scene 3: TLS/SSL & HTTPS (780-1200 frames / 26-40s) */}
      {frame >= 780 && frame < 1200 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 280,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 780, 15),
          }}>
            TLS/SSL: Transport Layer Security
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.18,
            left: width * 0.08,
            right: width * 0.08,
            display: 'flex',
            gap: 24,
            opacity: fadeIn(frame, 800, 15),
          }}>
            {/* TLS Handshake */}
            <div style={{
              flex: 1,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(139, 92, 246, 0.5)',
              borderRadius: 16,
              padding: 22,
            }}>
              <div style={{fontSize: 20, fontWeight: 'bold', color: '#a78bfa', marginBottom: 16}}>
                🔐 TLS 1.3 Handshake (1-RTT)
              </div>
              <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 2}}>
                <div style={{opacity: fadeIn(frame, 840, 10)}}>
                  <span style={{color: '#a78bfa', fontWeight: 'bold'}}>1. ClientHello:</span> Cipher suites + extensions
                </div>
                <div style={{opacity: fadeIn(frame, 880, 10)}}>
                  <span style={{color: '#a78bfa', fontWeight: 'bold'}}>2. ServerHello:</span> Certificate + key share
                </div>
                <div style={{opacity: fadeIn(frame, 920, 10)}}>
                  <span style={{color: '#a78bfa', fontWeight: 'bold'}}>3. Derive Keys:</span> ECDHE for perfect forward secrecy
                </div>
                <div style={{opacity: fadeIn(frame, 960, 10)}}>
                  <span style={{color: '#a78bfa', fontWeight: 'bold'}}>4. Encrypted:</span> All subsequent traffic
                </div>
                <div style={{marginTop: 12, fontSize: 13, color: '#fbbf24', opacity: fadeIn(frame, 1000, 10)}}>
                  ⚡ TLS 1.3: ~100ms | TLS 1.2: ~200ms (2-RTT)
                </div>
              </div>
            </div>

            {/* Certificate Management */}
            <div style={{
              flex: 1,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(16, 185, 129, 0.5)',
              borderRadius: 16,
              padding: 22,
            }}>
              <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.success, marginBottom: 16}}>
                📜 Certificate Management
              </div>
              <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 2}}>
                <div style={{opacity: fadeIn(frame, 860, 10)}}>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Certificate Authority:</span> Let's Encrypt/DigiCert
                </div>
                <div style={{opacity: fadeIn(frame, 900, 10)}}>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Validation:</span> DV, OV, EV levels
                </div>
                <div style={{opacity: fadeIn(frame, 940, 10)}}>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Expiry:</span> 90 days (Let's Encrypt automation)
                </div>
                <div style={{opacity: fadeIn(frame, 980, 10)}}>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Wildcard:</span> *.example.com coverage
                </div>
                <div style={{marginTop: 12, fontSize: 13, color: '#fbbf24', opacity: fadeIn(frame, 1020, 10)}}>
                  🔧 Tools: Certbot, ACM, cert-manager (K8s)
                </div>
              </div>
            </div>
          </div>

          {/* HTTP/2 vs HTTP/3 */}
          <div style={{
            position: 'absolute',
            top: height * 0.58,
            left: width * 0.08,
            right: width * 0.08,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 16,
            padding: 24,
            opacity: fadeIn(frame, 1040, 15),
          }}>
            <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 18}}>
              🚀 HTTP Evolution: 1.1 → 2 → 3 (QUIC)
            </div>
            <div style={{display: 'flex', gap: 40, fontSize: 14, color: '#e2e8f0', lineHeight: 2}}>
              <div style={{flex: 1}}>
                <div style={{fontWeight: 'bold', color: '#60a5fa', marginBottom: 8}}>HTTP/2 (2015)</div>
                • Multiplexing (no head-of-line blocking)<br/>
                • Binary framing (vs text)<br/>
                • Server push (proactive resources)<br/>
                • Header compression (HPACK)<br/>
                • Single TCP connection
              </div>
              <div style={{flex: 1}}>
                <div style={{fontWeight: 'bold', color: '#10b981', marginBottom: 8}}>HTTP/3 (2022)</div>
                • QUIC over UDP (not TCP)<br/>
                • 0-RTT reconnection<br/>
                • Built-in encryption (no TLS layer)<br/>
                • Connection migration (mobile)<br/>
                • Adopted: Google, Cloudflare, AWS
              </div>
            </div>
          </div>

          <Character type="architect" x={width * 0.88} y={height * 0.85} startFrame={790} size={90} />

          <Dialogue
            speaker="architect"
            text="Production systems use TLS 1.3 for performance. HTTP/3 reduces latency by 30% on mobile networks with packet loss."
            x={width * 0.88 - 620}
            y={height * 0.9}
            startFrame={820}
            maxWidth={600}
          />
        </>
      )}

      {/* Scene 4: Proxy Architecture (1200-1680 frames / 40-56s) */}
      {frame >= 1200 && frame < 1680 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 240,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1200, 15),
          }}>
            Production Proxy Architecture
          </div>

          {/* Components */}
          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.08}}>
            <div style={{
              width: 130,
              height: 105,
              backgroundColor: theme.colors.client,
              borderRadius: 12,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 36}}>💻</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Client</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 6, fontSize: 12, color: '#94a3b8'}}>192.168.1.10</div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.22,
            left: width * 0.26,
            opacity: fadeIn(frame, 1240, 15),
          }}>
            <div style={{
              width: 130,
              height: 105,
              backgroundColor: '#8b5cf6',
              borderRadius: 12,
              border: '3px solid #a78bfa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 1240, 60)})`,
            }}>
              <div style={{fontSize: 36}}>🔀</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Forward Proxy</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 6, fontSize: 12, color: '#a78bfa', fontWeight: 'bold'}}>Squid :3128</div>
          </div>

          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.47}}>
            <div style={{
              width: 120,
              height: 95,
              backgroundColor: theme.colors.cache,
              borderRadius: 12,
              border: '3px solid #f59e0b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 32}}>🌐</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>DNS</div>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.22,
            left: width * 0.66,
            opacity: fadeIn(frame, 1280, 15),
          }}>
            <div style={{
              width: 130,
              height: 105,
              backgroundColor: theme.colors.loadBalancer,
              borderRadius: 12,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 1280, 60)})`,
            }}>
              <div style={{fontSize: 36}}>🔀</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Reverse Proxy</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 6, fontSize: 12, color: '#60a5fa', fontWeight: 'bold'}}>NGINX :443</div>
          </div>

          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.84}}>
            <div style={{
              width: 120,
              height: 95,
              backgroundColor: theme.colors.server,
              borderRadius: 12,
              border: '3px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 32}}>🖥️</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>App Server</div>
            </div>
          </div>

          {/* Elegant flow lines */}
          {frame >= 1320 && (
            <>
              <FlowLine x1={width * 0.08 + 130} y1={height * 0.22 + 52} x2={width * 0.26} y2={height * 0.22 + 52} color={theme.colors.client} startFrame={1320} />
              <FlowLine x1={width * 0.26 + 130} y1={height * 0.22 + 50} x2={width * 0.47} y2={height * 0.22 + 47} color="#fbbf24" startFrame={1360} label="DNS Query" />
              <FlowLine x1={width * 0.47 + 120} y1={height * 0.22 + 52} x2={width * 0.66} y2={height * 0.22 + 52} color={theme.colors.loadBalancer} startFrame={1400} />
              <FlowLine x1={width * 0.66 + 130} y1={height * 0.22 + 52} x2={width * 0.84} y2={height * 0.22 + 47} color={theme.colors.success} startFrame={1440} label="HTTP" />

              {/* Animated particles */}
              {frame >= 1480 && (
                <>
                  <DataFlowStream x1={width * 0.08 + 130} y1={height * 0.22 + 52} x2={width * 0.26} y2={height * 0.22 + 52} startFrame={1480} />
                  <DataFlowStream x1={width * 0.26 + 130} y1={height * 0.22 + 50} x2={width * 0.47} y2={height * 0.22 + 47} startFrame={1520} />
                  <DataFlowStream x1={width * 0.47 + 120} y1={height * 0.22 + 52} x2={width * 0.66} y2={height * 0.22 + 52} startFrame={1560} />
                  <DataFlowStream x1={width * 0.66 + 130} y1={height * 0.22 + 52} x2={width * 0.84} y2={height * 0.22 + 47} startFrame={1600} />
                </>
              )}
            </>
          )}

          {/* Technical details */}
          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.08,
            width: 380,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(139, 92, 246, 0.5)',
            borderRadius: 14,
            padding: 20,
            opacity: fadeIn(frame, 1340, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12}}>
              🏢 Forward Proxy (Squid)
            </div>
            <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
              • ACL-based access control<br/>
              • SSL bumping for HTTPS inspection<br/>
              • Cache: disk (SSD) + memory (RAM)<br/>
              • Authentication: LDAP/Kerberos<br/>
              • Logging: access.log, cache.log<br/>
              • Monitoring: Prometheus exporter
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.52,
            width: 400,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 14,
            padding: 20,
            opacity: fadeIn(frame, 1380, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 12}}>
              🌐 Reverse Proxy (NGINX)
            </div>
            <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.8}}>
              • TLS termination: libssl (OpenSSL 3.x)<br/>
              • HTTP/2 & HTTP/3 (QUIC) support<br/>
              • Static caching: proxy_cache_path<br/>
              • Rate limiting: limit_req_zone<br/>
              • Load balancing: upstream directive<br/>
              • WebSocket proxying: Upgrade header
            </div>
          </div>

          <Character type="architect" x={width * 0.05} y={height * 0.82} startFrame={1210} size={90} />

          <Dialogue
            speaker="architect"
            text="In enterprise: Forward proxy for egress control + reverse proxy for ingress. Both log, cache, and secure traffic differently."
            x={width * 0.05 + 100}
            y={height * 0.87}
            startFrame={1250}
            maxWidth={650}
          />
        </>
      )}

      {/* Scene 5: Complete Production Flow (1680-2160 frames / 56-72s) */}
      {frame >= 1680 && frame < 2160 && (
        <>
          <div style={{
            position: 'absolute',
            top: 30,
            left: width / 2 - 380,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1680, 15),
            textAlign: 'center',
          }}>
            Production Request Flow with Latency Breakdown
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.16,
            left: width * 0.08,
            right: width * 0.08,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 16,
            padding: 26,
            opacity: fadeIn(frame, 1700, 15),
          }}>
            <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 20}}>
              Complete Request Journey (Technical Breakdown)
            </div>
            <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2.3}}>
              <div style={{opacity: fadeIn(frame, 1740, 10)}}>
                <span style={{color: theme.colors.client, fontWeight: 'bold'}}>① CLIENT → Forward Proxy:</span> TCP handshake (3-way) + HTTP CONNECT method for HTTPS tunneling
              </div>
              <div style={{opacity: fadeIn(frame, 1790, 10)}}>
                <span style={{color: '#a78bfa', fontWeight: 'bold'}}>② Proxy → DNS:</span> Recursive query to 8.8.8.8 or internal resolver (bind9). Checks cache first (TTL-aware).
              </div>
              <div style={{opacity: fadeIn(frame, 1840, 10)}}>
                <span style={{color: theme.colors.cache, fontWeight: 'bold'}}>③ DNS Resolution:</span> Root → TLD → Authoritative. Returns A/AAAA record. DNSSEC validation if enabled.
              </div>
              <div style={{opacity: fadeIn(frame, 1890, 10)}}>
                <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>④ Proxy → Reverse Proxy:</span> TLS 1.3 handshake (1-RTT). ClientHello/ServerHello + certificate chain validation.
              </div>
              <div style={{opacity: fadeIn(frame, 1940, 10)}}>
                <span style={{color: theme.colors.server, fontWeight: 'bold'}}>⑤ NGINX → App Server:</span> HTTP/2 over plain HTTP (no TLS). Connection pool reuse. Keep-alive timeout: 65s.
              </div>
              <div style={{marginTop: 18, fontSize: 16, opacity: fadeIn(frame, 2000, 10)}}>
                <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Latency Budget:</span> DNS (50ms) + TLS (100ms) + Proxy (10ms) + App (80ms) + Network (30ms) = <span style={{fontWeight: 'bold'}}>270ms total</span>
              </div>
              <div style={{marginTop: 8, fontSize: 16, color: '#10b981', opacity: fadeIn(frame, 2060, 10)}}>
                <span style={{fontWeight: 'bold'}}>⚡ Optimized (cached):</span> DNS (0ms) + TLS resume (30ms) + HTTP/2 multiplexing = <span style={{fontWeight: 'bold'}}>~50ms</span>
              </div>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.65,
            left: width * 0.08,
            right: width * 0.08,
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            border: '3px solid rgba(245, 158, 11, 0.5)',
            borderRadius: 12,
            padding: 22,
            opacity: fadeIn(frame, 2020, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: '#fbbf24', marginBottom: 14}}>
              🔧 Production Troubleshooting Checklist
            </div>
            <div style={{display: 'flex', gap: 30, fontSize: 14, color: '#e2e8f0', lineHeight: 2}}>
              <div style={{flex: 1}}>
                • <span style={{fontWeight: 'bold'}}>DNS issues:</span> `dig +trace example.com`<br/>
                • <span style={{fontWeight: 'bold'}}>TLS problems:</span> `openssl s_client -connect host:443`<br/>
                • <span style={{fontWeight: 'bold'}}>Proxy logs:</span> Check access/error logs<br/>
                • <span style={{fontWeight: 'bold'}}>Latency:</span> `curl -w "@curl-format.txt" -o /dev/null -s URL`
              </div>
              <div style={{flex: 1}}>
                • <span style={{fontWeight: 'bold'}}>TCP dump:</span> `tcpdump -i any port 443`<br/>
                • <span style={{fontWeight: 'bold'}}>Keep-alive:</span> Connection pool exhaustion?<br/>
                • <span style={{fontWeight: 'bold'}}>MTU issues:</span> Packet fragmentation on VPN<br/>
                • <span style={{fontWeight: 'bold'}}>Monitoring:</span> Prometheus + Grafana dashboards
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 6: Key Architect Takeaways (2160-2460 frames / 72-82s) */}
      {frame >= 2160 && frame < 2460 && (
        <>
          <div style={{
            position: 'absolute',
            top: 50,
            left: width / 2 - 280,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 2160, 15),
          }}>
            Production Architecture Principles
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.18,
            left: width * 0.08,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2180, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.client, marginBottom: 12}}>
              🌐 Network & DNS
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • Dual-stack (IPv4 + IPv6) everywhere<br/>
              • DNS: Use Cloudflare/Route53 for GSLB<br/>
              • TTL strategy: 300s staging, 3600s prod<br/>
              • DNSSEC for zone signing/validation<br/>
              • Anycast DNS for global resilience
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.18,
            left: width * 0.52,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(139, 92, 246, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2220, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12}}>
              🔐 Security & TLS
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • TLS 1.3 only (disable 1.0/1.1)<br/>
              • HSTS headers (Strict-Transport-Security)<br/>
              • Certificate pinning for mobile apps<br/>
              • Let's Encrypt + automation (certbot)<br/>
              • mTLS for service-to-service auth
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.08,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(16, 185, 129, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2260, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.success, marginBottom: 12}}>
              🔀 Proxy Strategy
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • Forward: Squid/HAProxy for egress<br/>
              • Reverse: NGINX/Envoy for ingress<br/>
              • Service mesh: Istio/Linkerd for mTLS<br/>
              • WAF integration (ModSecurity/Cloudflare)<br/>
              • Rate limiting at edge (not app layer)
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.52,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(245, 158, 11, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2300, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: '#fbbf24', marginBottom: 12}}>
              ⚡ Performance
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • HTTP/3 (QUIC) for mobile clients<br/>
              • Connection pooling (keep-alive 65s)<br/>
              • TCP Fast Open (TFO) when possible<br/>
              • BBR congestion control (Linux kernel)<br/>
              • CDN for static assets (Cloudflare/Fastly)
            </div>
          </div>

          <Character type="architect" x={width * 0.45} y={height * 0.82} startFrame={2170} size={100} />

          <Dialogue
            speaker="architect"
            text="These patterns scale to billions of requests. Netflix, AWS, Google all use this exact stack with HTTP/3, TLS 1.3, and distributed DNS."
            x={width * 0.45 - 500}
            y={height * 0.9}
            startFrame={2200}
            maxWidth={980}
          />
        </>
      )}

      {/* Scene 7: What's Next (2460-2700 frames / 82-90s) */}
      {frame >= 2460 && frame < 2700 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 150,
            left: width / 2 - 320,
            fontSize: 42,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 2460, 20),
          }}>
            Next: Load Balancing at Scale
          </div>

          <div style={{
            position: 'absolute',
            top: height / 2 - 40,
            left: width / 2 - 480,
            fontSize: 19,
            color: '#94a3b8',
            textAlign: 'center',
            lineHeight: 2,
            opacity: fadeIn(frame, 2500, 20),
          }}>
            Now that you understand the production internet stack,<br/>
            let's explore <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>distributing traffic across backend servers</span><br/>
            for high availability and horizontal scalability.<br/>
            <br/>
            <span style={{fontSize: 17, color: '#60a5fa'}}>
              • L4 (TCP) vs L7 (HTTP) load balancing algorithms<br/>
              • Health checks, circuit breakers, and failover<br/>
              • Global Server Load Balancing (GeoDNS + GSLB)
            </span>
          </div>

          <Character type="junior" x={width * 0.32} y={height * 0.7} startFrame={2480} size={120} />
          <Character type="architect" x={width * 0.62} y={height * 0.7} startFrame={2480} size={120} />

          <div style={{
            position: 'absolute',
            bottom: 90,
            left: width / 2 - 340,
            fontSize: 22,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '16px 32px',
            borderRadius: 12,
            border: '3px solid rgba(96, 165, 250, 0.4)',
            opacity: fadeIn(frame, 2560, 20),
          }}>
            📚 Phase 1: Foundational Infrastructure (Topic 1 of 4) ✅
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
