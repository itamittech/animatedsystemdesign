import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse, slideIn} from '../design-system/animations';

/**
 * Client-Server Architecture, DNS & Proxies - Architect's Deep Dive
 * Sequential teaching approach building from first principles
 * Progressive diagram construction showing complete data flow
 */
export const ClientServerDNSProxies: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Base positions for progressive diagram building
  const diagramY = height * 0.35;
  const clientX = width * 0.08;
  const forwardProxyX = width * 0.24;
  const dnsX = width * 0.42;
  const reverseProxyX = width * 0.60;
  const serverX = width * 0.78;

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

      {/* Scene 1: Introduction + What is a Client? (0-240 frames / 0-8s) */}
      {frame >= 0 && frame < 240 && (
        <>
          <Title text="How the Internet Works" subtitle="From Browser to Server - The Complete Journey" startFrame={0} />

          <Character type="architect" x={width * 0.5 - 60} y={height * 0.5} startFrame={30} size={120} />

          <Dialogue
            speaker="architect"
            text="Let's build this step-by-step. We'll start with ONE component at a time, then connect them all."
            x={width * 0.5 - 300}
            y={height * 0.65}
            startFrame={60}
            maxWidth={600}
          />

          {frame >= 120 && (
            <>
              <div style={{
                position: 'absolute',
                top: height * 0.2,
                left: clientX,
                opacity: fadeIn(frame, 120, 20),
              }}>
                <div style={{
                  width: 140,
                  height: 120,
                  backgroundColor: theme.colors.client,
                  borderRadius: 16,
                  border: '4px solid #60a5fa',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                  transform: `scale(${pulse(frame, 120, 60)})`,
                }}>
                  <div style={{fontSize: 48}}>💻</div>
                  <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: 8}}>CLIENT</div>
                  <div style={{fontSize: 12, color: '#ddd', marginTop: 4}}>Your Browser</div>
                </div>

                <div style={{
                  marginTop: 16,
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '2px solid rgba(96, 165, 250, 0.3)',
                  borderRadius: 8,
                  padding: 12,
                  width: 220,
                  marginLeft: -40,
                  opacity: fadeIn(frame, 160, 15),
                }}>
                  <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.5}}>
                    <div style={{color: theme.colors.client, fontWeight: 'bold', marginBottom: 6}}>📱 The Requester</div>
                    • Chrome, Firefox, Safari<br/>
                    • Mobile apps, CLI tools<br/>
                    • <span style={{color: '#fbbf24'}}>Initiates</span> communication<br/>
                    • Waits for response
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* Scene 2: What is a Server? Add to diagram (240-480 frames / 8-16s) */}
      {frame >= 240 && frame < 480 && (
        <>
          <div style={{
            position: 'absolute',
            top: 60,
            left: width / 2 - 150,
            fontSize: 26,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 240, 15),
          }}>
            Step 1: Client ↔ Server Communication
          </div>

          {/* Keep client from previous scene */}
          <div style={{
            position: 'absolute',
            top: diagramY,
            left: clientX,
          }}>
            <div style={{
              width: 140,
              height: 120,
              backgroundColor: theme.colors.client,
              borderRadius: 16,
              border: '4px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 48}}>💻</div>
              <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: 8}}>CLIENT</div>
            </div>
          </div>

          {/* Add server */}
          <div style={{
            position: 'absolute',
            top: diagramY,
            left: serverX - 40,
            opacity: fadeIn(frame, 260, 20),
          }}>
            <div style={{
              width: 140,
              height: 120,
              backgroundColor: theme.colors.server,
              borderRadius: 16,
              border: '4px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 260, 60)})`,
            }}>
              <div style={{fontSize: 48}}>🖥️</div>
              <div style={{fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: 8}}>SERVER</div>
              <div style={{fontSize: 12, color: '#ddd', marginTop: 4}}>192.168.1.100</div>
            </div>

            <div style={{
              marginTop: 16,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 8,
              padding: 12,
              width: 220,
              marginLeft: -40,
              opacity: fadeIn(frame, 300, 15),
            }}>
              <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.5}}>
                <div style={{color: theme.colors.server, fontWeight: 'bold', marginBottom: 6}}>🖥️ The Responder</div>
                • Listens on Port 80/443<br/>
                • Processes requests<br/>
                • Returns HTML/JSON/data<br/>
                • <span style={{color: '#fbbf24'}}>Always running</span>
              </div>
            </div>
          </div>

          {/* Add connection arrows */}
          {frame >= 300 && (
            <>
              <Arrow
                x1={clientX + 140}
                y1={diagramY + 50}
                x2={serverX - 40}
                y2={diagramY + 50}
                color={theme.colors.warning}
                label="HTTP Request"
                startFrame={300}
              />

              {frame >= 320 && (
                <DataFlowStream
                  x1={clientX + 140}
                  y1={diagramY + 50}
                  x2={serverX - 40}
                  y2={diagramY + 50}
                  startFrame={320}
                />
              )}

              <Arrow
                x1={serverX - 40}
                y1={diagramY + 70}
                x2={clientX + 140}
                y2={diagramY + 70}
                color={theme.colors.success}
                label="HTTP Response (200 OK)"
                startFrame={340}
              />
            </>
          )}

          <Character type="architect" x={width * 0.45} y={height * 0.7} startFrame={250} size={100} />

          <Dialogue
            speaker="architect"
            text="Simple request-response model. Client asks, server answers. But there's a problem..."
            x={width * 0.45 - 480}
            y={height * 0.75}
            startFrame={280}
            maxWidth={460}
          />

          {frame >= 380 && (
            <div style={{
              position: 'absolute',
              top: height * 0.15,
              left: width * 0.3,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              padding: '10px 20px',
              borderRadius: 8,
              border: '2px solid rgba(239, 68, 68, 0.4)',
              opacity: fadeIn(frame, 380, 15),
            }}>
              ❓ How does the client know the server's IP address?
            </div>
          )}
        </>
      )}

      {/* Scene 3: DNS Resolution - Add to diagram (480-780 frames / 16-26s) */}
      {frame >= 480 && frame < 780 && (
        <>
          <div style={{
            position: 'absolute',
            top: 60,
            left: width / 2 - 200,
            fontSize: 26,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 480, 15),
          }}>
            Step 2: DNS - The Internet's Phone Book
          </div>

          {/* Keep client */}
          <div style={{position: 'absolute', top: diagramY, left: clientX}}>
            <div style={{
              width: 130,
              height: 110,
              backgroundColor: theme.colors.client,
              borderRadius: 16,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 42}}>💻</div>
              <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>CLIENT</div>
            </div>
          </div>

          {/* Add DNS Server */}
          <div style={{
            position: 'absolute',
            top: diagramY,
            left: dnsX - 20,
            opacity: fadeIn(frame, 500, 20),
          }}>
            <div style={{
              width: 130,
              height: 110,
              backgroundColor: theme.colors.cache,
              borderRadius: 16,
              border: '4px solid #f59e0b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 500, 60)})`,
            }}>
              <div style={{fontSize: 42}}>🌐</div>
              <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 4}}>DNS</div>
              <div style={{fontSize: 11, color: '#ddd'}}>Port 53 (UDP)</div>
            </div>

            <div style={{
              marginTop: 16,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 8,
              padding: 12,
              width: 240,
              marginLeft: -55,
              opacity: fadeIn(frame, 540, 15),
            }}>
              <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.5}}>
                <div style={{color: theme.colors.cache, fontWeight: 'bold', marginBottom: 6}}>🌐 Domain Name System</div>
                • example.com → IP<br/>
                • Hierarchical lookup<br/>
                • Caching at every layer<br/>
                • TTL: 300s - 86400s
              </div>
            </div>
          </div>

          {/* Keep server */}
          <div style={{position: 'absolute', top: diagramY, left: serverX - 20}}>
            <div style={{
              width: 130,
              height: 110,
              backgroundColor: theme.colors.server,
              borderRadius: 16,
              border: '3px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 42}}>🖥️</div>
              <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>SERVER</div>
              <div style={{fontSize: 10, color: '#ddd'}}>192.168.1.100</div>
            </div>
          </div>

          {/* DNS Query Flow */}
          {frame >= 560 && (
            <>
              {/* Client to DNS */}
              <Arrow
                x1={clientX + 130}
                y1={diagramY + 40}
                x2={dnsX - 20}
                y2={diagramY + 40}
                color="#fbbf24"
                label="Query: api.example.com?"
                startFrame={560}
              />

              {/* DNS Response */}
              <Arrow
                x1={dnsX - 20}
                y1={diagramY + 70}
                x2={clientX + 130}
                y2={diagramY + 70}
                color={theme.colors.success}
                label="A Record: 192.168.1.100"
                startFrame={600}
              />

              {/* Now client can connect to server */}
              {frame >= 640 && (
                <>
                  <Arrow
                    x1={dnsX + 110}
                    y1={diagramY + 55}
                    x2={serverX - 20}
                    y2={diagramY + 55}
                    color={theme.colors.client}
                    label="Now connect to IP"
                    startFrame={640}
                  />
                  <DataFlowStream
                    x1={dnsX + 110}
                    y1={diagramY + 55}
                    x2={serverX - 20}
                    y2={diagramY + 55}
                    startFrame={650}
                  />
                </>
              )}
            </>
          )}

          <Character type="junior" x={width * 0.15} y={height * 0.7} startFrame={490} size={100} />
          <Character type="architect" x={width * 0.75} y={height * 0.7} startFrame={490} size={100} />

          <Dialogue
            speaker="junior"
            text="So DNS translates domain names to IP addresses?"
            x={width * 0.15 + 110}
            y={height * 0.65}
            startFrame={510}
            maxWidth={380}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! DNS query happens BEFORE the HTTP request. It's cached at browser, OS, and ISP levels."
            x={width * 0.75 - 540}
            y={height * 0.75}
            startFrame={550}
            maxWidth={520}
          />

          {frame >= 680 && (
            <div style={{
              position: 'absolute',
              top: height * 0.15,
              left: width * 0.25,
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              borderRadius: 8,
              padding: '12px 18px',
              opacity: fadeIn(frame, 680, 15),
            }}>
              <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.6}}>
                <span style={{color: theme.colors.success, fontWeight: 'bold'}}>⚡ Production Tip:</span><br/>
                First lookup: ~50-100ms | Cached: &lt;1ms<br/>
                Use CDN DNS (Cloudflare 1.1.1.1) for speed
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 4: Forward Proxy - Add to diagram (780-1140 frames / 26-38s) */}
      {frame >= 780 && frame < 1140 && (
        <>
          <div style={{
            position: 'absolute',
            top: 60,
            left: width / 2 - 250,
            fontSize: 26,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 780, 15),
          }}>
            Step 3: Forward Proxy (Client-Side Gateway)
          </div>

          {/* Client */}
          <div style={{position: 'absolute', top: diagramY, left: clientX}}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: theme.colors.client,
              borderRadius: 14,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 36}}>💻</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>CLIENT</div>
            </div>
          </div>

          {/* Forward Proxy - NEW */}
          <div style={{
            position: 'absolute',
            top: diagramY,
            left: forwardProxyX - 10,
            opacity: fadeIn(frame, 800, 20),
          }}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: '#8b5cf6',
              borderRadius: 14,
              border: '4px solid #a78bfa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 800, 60)})`,
            }}>
              <div style={{fontSize: 36}}>🔀</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>FORWARD</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>PROXY</div>
            </div>

            <div style={{
              marginTop: 12,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              borderRadius: 8,
              padding: 10,
              width: 220,
              marginLeft: -50,
              opacity: fadeIn(frame, 840, 15),
            }}>
              <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.5}}>
                <div style={{color: '#a78bfa', fontWeight: 'bold', marginBottom: 6}}>🏢 Corporate Proxy</div>
                • Content filtering<br/>
                • Cache responses<br/>
                • Hide client IP<br/>
                • Monitor traffic<br/>
                • Tools: Squid, HAProxy
              </div>
            </div>
          </div>

          {/* DNS */}
          <div style={{position: 'absolute', top: diagramY, left: dnsX}}>
            <div style={{
              width: 110,
              height: 90,
              backgroundColor: theme.colors.cache,
              borderRadius: 14,
              border: '3px solid #f59e0b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 32}}>🌐</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>DNS</div>
            </div>
          </div>

          {/* Server */}
          <div style={{position: 'absolute', top: diagramY, left: serverX}}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: theme.colors.server,
              borderRadius: 14,
              border: '3px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 36}}>🖥️</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>SERVER</div>
            </div>
          </div>

          {/* Data Flow Through Forward Proxy */}
          {frame >= 860 && (
            <>
              {/* Client → Forward Proxy */}
              <Arrow
                x1={clientX + 120}
                y1={diagramY + 30}
                x2={forwardProxyX - 10}
                y2={diagramY + 30}
                color={theme.colors.client}
                label="All requests"
                startFrame={860}
              />

              {/* Forward Proxy → DNS */}
              <Arrow
                x1={forwardProxyX + 110}
                y1={diagramY + 25}
                x2={dnsX}
                y2={diagramY + 25}
                color="#fbbf24"
                label="DNS lookup"
                startFrame={900}
              />

              {/* Forward Proxy → Server */}
              <Arrow
                x1={dnsX + 110}
                y1={diagramY + 50}
                x2={serverX}
                y2={diagramY + 50}
                color={theme.colors.success}
                label="HTTP to internet"
                startFrame={940}
              />

              {frame >= 950 && (
                <DataFlowStream
                  x1={dnsX + 110}
                  y1={diagramY + 50}
                  x2={serverX}
                  y2={diagramY + 50}
                  startFrame={950}
                />
              )}
            </>
          )}

          <Character type="architect" x={width * 0.42} y={height * 0.68} startFrame={790} size={100} />

          <Dialogue
            speaker="architect"
            text="Forward proxy sits between client and internet. All traffic flows through it—perfect for corporate security!"
            x={width * 0.42 + 110}
            y={height * 0.73}
            startFrame={820}
            maxWidth={500}
          />

          {frame >= 1000 && (
            <div style={{
              position: 'absolute',
              top: height * 0.15,
              left: width * 0.15,
              backgroundColor: 'rgba(139, 92, 246, 0.15)',
              border: '2px solid rgba(139, 92, 246, 0.4)',
              borderRadius: 8,
              padding: '12px 16px',
              width: 420,
              opacity: fadeIn(frame, 1000, 15),
            }}>
              <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.6}}>
                <span style={{color: '#a78bfa', fontWeight: 'bold'}}>🔐 Real-World Use:</span><br/>
                Corporate firewall blocks direct internet access. All HTTP/HTTPS<br/>
                traffic goes through Squid proxy on port 3128. Logs every request,<br/>
                blocks malicious domains, caches frequently accessed content.
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 5: Reverse Proxy - Add to diagram (1140-1500 frames / 38-50s) */}
      {frame >= 1140 && frame < 1500 && (
        <>
          <div style={{
            position: 'absolute',
            top: 60,
            left: width / 2 - 260,
            fontSize: 26,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1140, 15),
          }}>
            Step 4: Reverse Proxy (Server-Side Gateway)
          </div>

          {/* Client */}
          <div style={{position: 'absolute', top: diagramY, left: clientX - 10}}>
            <div style={{
              width: 110,
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
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>CLIENT</div>
            </div>
          </div>

          {/* Forward Proxy */}
          <div style={{position: 'absolute', top: diagramY, left: forwardProxyX}}>
            <div style={{
              width: 100,
              height: 80,
              backgroundColor: '#8b5cf6',
              borderRadius: 12,
              border: '2px solid #a78bfa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 28}}>🔀</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>FWD</div>
            </div>
          </div>

          {/* Reverse Proxy - NEW */}
          <div style={{
            position: 'absolute',
            top: diagramY,
            left: reverseProxyX - 20,
            opacity: fadeIn(frame, 1160, 20),
          }}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: theme.colors.loadBalancer,
              borderRadius: 14,
              border: '4px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 1160, 60)})`,
            }}>
              <div style={{fontSize: 36}}>🔀</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>REVERSE</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>PROXY</div>
            </div>

            <div style={{
              marginTop: 12,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '2px solid rgba(96, 165, 250, 0.3)',
              borderRadius: 8,
              padding: 10,
              width: 220,
              marginLeft: -50,
              opacity: fadeIn(frame, 1200, 15),
            }}>
              <div style={{fontSize: 12, color: '#e2e8f0', lineHeight: 1.5}}>
                <div style={{color: theme.colors.loadBalancer, fontWeight: 'bold', marginBottom: 6}}>🌐 NGINX/Caddy</div>
                • SSL/TLS termination<br/>
                • Load balancing<br/>
                • Static file caching<br/>
                • Hide backend servers<br/>
                • Port 80/443 → 3000/8080
              </div>
            </div>
          </div>

          {/* Multiple Backend Servers */}
          <div style={{position: 'absolute', top: diagramY - 60, left: serverX + 20}}>
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
              boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1220, 15),
            }}>
              <div style={{fontSize: 24}}>🖥️</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>App:3000</div>
            </div>
          </div>

          <div style={{position: 'absolute', top: diagramY + 15, left: serverX + 20}}>
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
              boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1240, 15),
            }}>
              <div style={{fontSize: 24}}>🖥️</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>App:3001</div>
            </div>
          </div>

          <div style={{position: 'absolute', top: diagramY + 90, left: serverX + 20}}>
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
              boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1260, 15),
            }}>
              <div style={{fontSize: 24}}>🖥️</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>App:3002</div>
            </div>
          </div>

          {/* Flow through reverse proxy */}
          {frame >= 1280 && (
            <>
              {/* Client → Reverse Proxy */}
              <Arrow
                x1={forwardProxyX + 100}
                y1={diagramY + 40}
                x2={reverseProxyX - 20}
                y2={diagramY + 50}
                color={theme.colors.warning}
                label="HTTPS :443"
                startFrame={1280}
              />

              {/* Reverse Proxy → Backend Servers */}
              <Arrow
                x1={reverseProxyX + 100}
                y1={diagramY + 25}
                x2={serverX + 20}
                y2={diagramY - 25}
                color={theme.colors.success}
                label="HTTP :3000"
                startFrame={1320}
              />

              <Arrow
                x1={reverseProxyX + 100}
                y1={diagramY + 50}
                x2={serverX + 20}
                y2={diagramY + 50}
                color={theme.colors.success}
                startFrame={1340}
              />

              <Arrow
                x1={reverseProxyX + 100}
                y1={diagramY + 75}
                x2={serverX + 20}
                y2={diagramY + 125}
                color={theme.colors.success}
                startFrame={1360}
              />
            </>
          )}

          <Character type="architect" x={width * 0.48} y={height * 0.72} startFrame={1150} size={100} />

          <Dialogue
            speaker="architect"
            text="Reverse proxy protects servers. Clients see ONE entry point. The proxy distributes traffic to multiple backends!"
            x={width * 0.48 - 550}
            y={height * 0.77}
            startFrame={1180}
            maxWidth={530}
          />

          {frame >= 1380 && (
            <div style={{
              position: 'absolute',
              top: height * 0.15,
              left: width * 0.2,
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              borderRadius: 8,
              padding: '12px 16px',
              width: 500,
              opacity: fadeIn(frame, 1380, 15),
            }}>
              <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.6}}>
                <span style={{color: theme.colors.success, fontWeight: 'bold'}}>⚡ Production Example:</span><br/>
                NGINX listens on :443 (HTTPS). Terminates SSL, then forwards<br/>
                HTTP requests to 3 Node.js servers on :3000, :3001, :3002.<br/>
                Round-robin load balancing. Clients never see backend IPs.
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 6: Complete Integration - Everything Together! (1500-2100 frames / 50-70s) */}
      {frame >= 1500 && frame < 2100 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 320,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1500, 15),
            textAlign: 'center',
          }}>
            Complete Journey: Putting It All Together
          </div>

          <div style={{
            position: 'absolute',
            top: 90,
            left: width / 2 - 400,
            fontSize: 16,
            color: '#94a3b8',
            opacity: fadeIn(frame, 1520, 15),
            textAlign: 'center',
          }}>
            When you type "https://api.example.com" and hit Enter, here's what happens...
          </div>

          {/* Complete Flow Diagram */}
          <div style={{position: 'absolute', top: diagramY - 20, left: clientX - 20}}>
            <div style={{
              width: 100,
              height: 85,
              backgroundColor: theme.colors.client,
              borderRadius: 12,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 28}}>💻</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>CLIENT</div>
            </div>
            <div style={{
              fontSize: 24,
              color: theme.colors.client,
              fontWeight: 'bold',
              marginTop: 8,
              textAlign: 'center',
            }}>①</div>
          </div>

          <div style={{position: 'absolute', top: diagramY - 20, left: forwardProxyX - 10}}>
            <div style={{
              width: 100,
              height: 85,
              backgroundColor: '#8b5cf6',
              borderRadius: 12,
              border: '3px solid #a78bfa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1540, 15),
            }}>
              <div style={{fontSize: 28}}>🔀</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>FORWARD</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>PROXY</div>
            </div>
            <div style={{
              fontSize: 24,
              color: '#a78bfa',
              fontWeight: 'bold',
              marginTop: 8,
              textAlign: 'center',
              opacity: fadeIn(frame, 1540, 15),
            }}>②</div>
          </div>

          <div style={{position: 'absolute', top: diagramY - 20, left: dnsX - 20}}>
            <div style={{
              width: 100,
              height: 85,
              backgroundColor: theme.colors.cache,
              borderRadius: 12,
              border: '3px solid #f59e0b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1560, 15),
            }}>
              <div style={{fontSize: 28}}>🌐</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>DNS</div>
            </div>
            <div style={{
              fontSize: 24,
              color: theme.colors.cache,
              fontWeight: 'bold',
              marginTop: 8,
              textAlign: 'center',
              opacity: fadeIn(frame, 1560, 15),
            }}>③</div>
          </div>

          <div style={{position: 'absolute', top: diagramY - 20, left: reverseProxyX - 30}}>
            <div style={{
              width: 100,
              height: 85,
              backgroundColor: theme.colors.loadBalancer,
              borderRadius: 12,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1580, 15),
            }}>
              <div style={{fontSize: 28}}>🔀</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>REVERSE</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>PROXY</div>
            </div>
            <div style={{
              fontSize: 24,
              color: theme.colors.loadBalancer,
              fontWeight: 'bold',
              marginTop: 8,
              textAlign: 'center',
              opacity: fadeIn(frame, 1580, 15),
            }}>④</div>
          </div>

          <div style={{position: 'absolute', top: diagramY - 20, left: serverX + 10}}>
            <div style={{
              width: 100,
              height: 85,
              backgroundColor: theme.colors.server,
              borderRadius: 12,
              border: '3px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              opacity: fadeIn(frame, 1600, 15),
            }}>
              <div style={{fontSize: 28}}>🖥️</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>SERVER</div>
            </div>
            <div style={{
              fontSize: 24,
              color: theme.colors.server,
              fontWeight: 'bold',
              marginTop: 8,
              textAlign: 'center',
              opacity: fadeIn(frame, 1600, 15),
            }}>⑤</div>
          </div>

          {/* Animated Flow */}
          {frame >= 1620 && (
            <>
              <Arrow x1={clientX + 80} y1={diagramY + 30} x2={forwardProxyX - 10} y2={diagramY + 30} color={theme.colors.client} startFrame={1620} />
              <Arrow x1={forwardProxyX + 90} y1={diagramY + 20} x2={dnsX - 20} y2={diagramY + 20} color="#fbbf24" startFrame={1660} />
              <Arrow x1={dnsX + 80} y1={diagramY + 40} x2={reverseProxyX - 30} y2={diagramY + 40} color={theme.colors.loadBalancer} startFrame={1700} />
              <Arrow x1={reverseProxyX + 70} y1={diagramY + 30} x2={serverX + 10} y2={diagramY + 30} color={theme.colors.success} startFrame={1740} />
            </>
          )}

          {/* Step-by-step explanation */}
          <div style={{
            position: 'absolute',
            top: height * 0.6,
            left: width * 0.08,
            right: width * 0.08,
            opacity: fadeIn(frame, 1640, 15),
          }}>
            <div style={{
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '2px solid rgba(96, 165, 250, 0.3)',
              borderRadius: 12,
              padding: 20,
            }}>
              <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 16}}>
                Complete Request Flow (Step-by-Step):
              </div>
              <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 2}}>
                <div style={{opacity: fadeIn(frame, 1660, 10)}}>
                  <span style={{color: theme.colors.client, fontWeight: 'bold'}}>① CLIENT:</span> Browser sends request through corporate proxy (configured in network settings)
                </div>
                <div style={{opacity: fadeIn(frame, 1700, 10)}}>
                  <span style={{color: '#a78bfa', fontWeight: 'bold'}}>② FORWARD PROXY:</span> Logs request, checks cache, forwards to DNS on port 53 (UDP)
                </div>
                <div style={{opacity: fadeIn(frame, 1740, 10)}}>
                  <span style={{color: theme.colors.cache, fontWeight: 'bold'}}>③ DNS:</span> Returns A record: api.example.com → 203.0.113.10 (TTL: 300s)
                </div>
                <div style={{opacity: fadeIn(frame, 1780, 10)}}>
                  <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>④ REVERSE PROXY:</span> NGINX on 203.0.113.10:443 terminates TLS, forwards HTTP to backend
                </div>
                <div style={{opacity: fadeIn(frame, 1820, 10)}}>
                  <span style={{color: theme.colors.server, fontWeight: 'bold'}}>⑤ SERVER:</span> Node.js app on 192.168.1.100:3000 processes, returns JSON response
                </div>
                <div style={{opacity: fadeIn(frame, 1860, 10), marginTop: 12, color: '#fbbf24'}}>
                  <span style={{fontWeight: 'bold'}}>⚡ Total Time:</span> DNS (50ms) + TLS handshake (100ms) + Processing (50ms) = <span style={{fontWeight: 'bold'}}>~200ms</span>
                </div>
                <div style={{opacity: fadeIn(frame, 1900, 10), color: '#10b981'}}>
                  <span style={{fontWeight: 'bold'}}>⚡ With Caching:</span> Subsequent requests: &lt;50ms (everything cached)
                </div>
              </div>
            </div>
          </div>

          <Character type="junior" x={width * 0.2} y={height * 0.25} startFrame={1520} size={90} />
          <Character type="architect" x={width * 0.73} y={height * 0.25} startFrame={1520} size={90} />
        </>
      )}

      {/* Scene 7: Key Takeaways (2100-2400 frames / 70-80s) */}
      {frame >= 2100 && frame < 2400 && (
        <>
          <div style={{
            position: 'absolute',
            top: 60,
            left: width / 2 - 200,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 2100, 15),
          }}>
            Key Architect Takeaways
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.2,
            left: width * 0.08,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '2px solid rgba(96, 165, 250, 0.3)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2120, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.client, marginBottom: 12}}>
              🔑 Client-Server Model
            </div>
            <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.7}}>
              • Stateless: RESTful APIs, scale horizontally<br/>
              • Stateful: WebSockets, sticky sessions needed<br/>
              • Keep servers stateless for easy scaling<br/>
              • Store state in Redis/DB, not in-memory
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.2,
            left: width * 0.52,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '2px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2160, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.cache, marginBottom: 12}}>
              🌐 DNS Strategy
            </div>
            <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.7}}>
              • Use CDN DNS (Cloudflare, Route53) for speed<br/>
              • Set appropriate TTL: 300s dev, 3600s prod<br/>
              • Use CNAME for flexibility (not A records)<br/>
              • Health check integration for failover
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.08,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2200, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12}}>
              🔀 Forward Proxy
            </div>
            <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.7}}>
              • Corporate: Squid, content filtering<br/>
              • Privacy: Hide client IP, VPN use case<br/>
              • Caching: Reduce bandwidth costs<br/>
              • Monitor: Log all outbound traffic
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.52,
            width: 420,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '2px solid rgba(96, 165, 250, 0.3)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2240, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 12}}>
              🔀 Reverse Proxy
            </div>
            <div style={{fontSize: 13, color: '#e2e8f0', lineHeight: 1.7}}>
              • NGINX/Caddy for production apps<br/>
              • SSL termination: 1 cert, not 10<br/>
              • Static caching: Serve from proxy<br/>
              • Hide backend IPs: Security layer
            </div>
          </div>

          <Character type="architect" x={width * 0.45} y={height * 0.8} startFrame={2110} size={110} />

          <Dialogue
            speaker="architect"
            text="These are the building blocks of EVERY distributed system. Master these, and you'll understand how Netflix, Google, and AWS work!"
            x={width * 0.45 - 400}
            y={height * 0.88}
            startFrame={2140}
            maxWidth={780}
          />
        </>
      )}

      {/* Scene 8: What's Next (2400-2700 frames / 80-90s) */}
      {frame >= 2400 && frame < 2700 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 140,
            left: width / 2 - 280,
            fontSize: 38,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 2400, 20),
          }}>
            Next: Load Balancing Deep Dive
          </div>

          <div style={{
            position: 'absolute',
            top: height / 2 - 40,
            left: width / 2 - 420,
            fontSize: 18,
            color: '#94a3b8',
            textAlign: 'center',
            lineHeight: 1.9,
            opacity: fadeIn(frame, 2440, 20),
          }}>
            Now that you understand reverse proxies,<br/>
            let's dive deep into <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>LOAD BALANCING</span>:<br/>
            <br/>
            • Round Robin, Least Connections, IP Hash algorithms<br/>
            • Layer 4 vs Layer 7 load balancing<br/>
            • Health checks and automatic failover<br/>
            • Global Server Load Balancing (GSLB)
          </div>

          <Character type="junior" x={width * 0.32} y={height * 0.72} startFrame={2420} size={120} />
          <Character type="architect" x={width * 0.62} y={height * 0.72} startFrame={2420} size={120} />

          <div style={{
            position: 'absolute',
            bottom: 100,
            left: width / 2 - 280,
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '14px 28px',
            borderRadius: 10,
            border: '2px solid rgba(96, 165, 250, 0.4)',
            opacity: fadeIn(frame, 2520, 20),
          }}>
            📚 Phase 1: Foundational Infrastructure (Topic 1 of 4)
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
