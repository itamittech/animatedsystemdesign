import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Client-Server, DNS & Proxies - A Cinematic Journey
 * Starting from first principles: What is an IP address?
 * Building a complete connected system like a movie
 */
export const ClientServerDNSProxies: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Thick animated arrow component
  const ThickArrow: React.FC<{
    x1: number; y1: number; x2: number; y2: number;
    label?: string; color?: string; startFrame: number; animated?: boolean;
  }> = ({x1, y1, x2, y2, label, color = theme.colors.success, startFrame, animated = false}) => {
    const opacity = fadeIn(frame, startFrame, 10);
    const progress = animated && frame >= startFrame
      ? interpolate(frame - startFrame, [0, 30], [0, 1], {extrapolateRight: 'clamp'})
      : 1;

    const currentX2 = x1 + (x2 - x1) * progress;
    const currentY2 = y1 + (y2 - y1) * progress;

    return (
      <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity}}>
        <defs>
          <marker
            id={`arrowhead-${startFrame}`}
            markerWidth="12"
            markerHeight="12"
            refX="6"
            refY="6"
            orient="auto"
          >
            <polygon points="0 0, 12 6, 0 12" fill={color} />
          </marker>
        </defs>
        <line
          x1={x1}
          y1={y1}
          x2={currentX2}
          y2={currentY2}
          stroke={color}
          strokeWidth="6"
          markerEnd={`url(#arrowhead-${startFrame})`}
        />
        {label && progress === 1 && (
          <text
            x={(x1 + currentX2) / 2}
            y={(y1 + currentY2) / 2 - 10}
            fill="#fff"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            style={{opacity: fadeIn(frame, startFrame + 15, 10)}}
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

      {/* Scene 1: What is an IP Address? (0-300 frames / 0-10s) */}
      {frame >= 0 && frame < 300 && (
        <>
          <Title text="How the Internet Really Works" subtitle="Let's Start from the Beginning" startFrame={0} />

          <Character type="architect" x={width * 0.5 - 60} y={height * 0.75} startFrame={30} size={110} />

          <Dialogue
            speaker="architect"
            text="Before we dive into DNS and proxies, let's understand the foundation: What is an IP address?"
            x={width * 0.5 - 380}
            y={height * 0.87}
            startFrame={60}
            maxWidth={760}
          />

          {/* Show a computer with IP address */}
          {frame >= 120 && (
            <div style={{
              position: 'absolute',
              top: height * 0.3,
              left: width * 0.5 - 200,
              opacity: fadeIn(frame, 120, 20),
            }}>
              <div style={{
                width: 180,
                height: 150,
                backgroundColor: theme.colors.client,
                borderRadius: 20,
                border: '5px solid #60a5fa',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 16px 32px rgba(0,0,0,0.5)',
                transform: `scale(${pulse(frame, 120, 60)})`,
              }}>
                <div style={{fontSize: 56}}>💻</div>
                <div style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 12}}>Your Computer</div>
                <div style={{
                  marginTop: 12,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#fbbf24',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  padding: '8px 16px',
                  borderRadius: 8,
                }}>
                  192.168.1.10
                </div>
              </div>

              <div style={{
                marginTop: 20,
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid rgba(96, 165, 250, 0.5)',
                borderRadius: 12,
                padding: 20,
                width: 400,
                marginLeft: -110,
                opacity: fadeIn(frame, 180, 15),
              }}>
                <div style={{fontSize: 17, fontWeight: 'bold', color: theme.colors.client, marginBottom: 10}}>
                  🔢 IP Address = Digital Street Address
                </div>
                <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 1.7}}>
                  • Every device needs a unique identifier<br/>
                  • Format: 4 numbers (0-255) separated by dots<br/>
                  • Example: 192.168.1.10 (your computer)<br/>
                  • Example: 142.250.185.46 (Google's server)
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: The Problem - Humans don't remember IPs (300-600 frames / 10-20s) */}
      {frame >= 300 && frame < 600 && (
        <>
          <div style={{
            position: 'absolute',
            top: 50,
            left: width / 2 - 200,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 300, 15),
          }}>
            The Problem We Need to Solve
          </div>

          {/* User's computer */}
          <div style={{position: 'absolute', top: height * 0.3, left: width * 0.15}}>
            <div style={{
              width: 160,
              height: 130,
              backgroundColor: theme.colors.client,
              borderRadius: 16,
              border: '4px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 48}}>👤</div>
              <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 8}}>You</div>
            </div>
          </div>

          {/* What you type */}
          <div style={{
            position: 'absolute',
            top: height * 0.3 + 50,
            left: width * 0.35,
            opacity: fadeIn(frame, 340, 15),
          }}>
            <div style={{
              backgroundColor: 'rgba(251, 191, 36, 0.2)',
              border: '3px solid #fbbf24',
              borderRadius: 12,
              padding: '16px 24px',
            }}>
              <div style={{fontSize: 14, color: '#fbbf24', marginBottom: 8}}>You type in browser:</div>
              <div style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>www.google.com</div>
            </div>
          </div>

          {/* Google's server with IP */}
          <div style={{
            position: 'absolute',
            top: height * 0.3,
            left: width * 0.68,
            opacity: fadeIn(frame, 380, 15),
          }}>
            <div style={{
              width: 160,
              height: 130,
              backgroundColor: theme.colors.server,
              borderRadius: 16,
              border: '4px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 48}}>🖥️</div>
              <div style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 8}}>Google</div>
              <div style={{
                marginTop: 8,
                fontSize: 14,
                fontWeight: 'bold',
                color: '#10b981',
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: '6px 12px',
                borderRadius: 6,
              }}>
                142.250.185.46
              </div>
            </div>
          </div>

          {/* The problem! */}
          {frame >= 420 && (
            <div style={{
              position: 'absolute',
              top: height * 0.58,
              left: width * 0.25,
              width: 550,
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '4px solid #ef4444',
              borderRadius: 16,
              padding: 24,
              opacity: fadeIn(frame, 420, 20),
            }}>
              <div style={{fontSize: 22, fontWeight: 'bold', color: '#ef4444', marginBottom: 12}}>
                ❌ The Problem
              </div>
              <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.8}}>
                Your browser needs Google's <span style={{color: '#fbbf24', fontWeight: 'bold'}}>IP address</span> (142.250.185.46) to connect.<br/>
                But you typed a <span style={{color: '#60a5fa', fontWeight: 'bold'}}>domain name</span> (www.google.com).<br/><br/>
                <span style={{fontSize: 18, fontWeight: 'bold', color: '#ef4444'}}>How does your computer find the IP?</span>
              </div>
            </div>
          )}

          <Character type="junior" x={width * 0.12} y={height * 0.75} startFrame={310} size={90} />
          <Character type="architect" x={width * 0.78} y={height * 0.75} startFrame={310} size={90} />
        </>
      )}

      {/* Scene 3: DNS - The Solution! (600-960 frames / 20-32s) */}
      {frame >= 600 && frame < 960 && (
        <>
          <div style={{
            position: 'absolute',
            top: 50,
            left: width / 2 - 280,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 600, 15),
          }}>
            Solution: DNS - The Internet's Phone Book
          </div>

          {/* Your Computer */}
          <div style={{position: 'absolute', top: height * 0.28, left: width * 0.08}}>
            <div style={{
              width: 140,
              height: 115,
              backgroundColor: theme.colors.client,
              borderRadius: 14,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 42}}>💻</div>
              <div style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Your PC</div>
            </div>
            <div style={{
              marginTop: 8,
              textAlign: 'center',
              fontSize: 13,
              color: '#94a3b8',
              fontWeight: 'bold',
            }}>192.168.1.10</div>
          </div>

          {/* DNS Server */}
          <div style={{
            position: 'absolute',
            top: height * 0.28,
            left: width * 0.42,
            opacity: fadeIn(frame, 630, 20),
          }}>
            <div style={{
              width: 140,
              height: 115,
              backgroundColor: theme.colors.cache,
              borderRadius: 14,
              border: '4px solid #f59e0b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 630, 60)})`,
            }}>
              <div style={{fontSize: 42}}>🌐</div>
              <div style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>DNS Server</div>
            </div>
            <div style={{
              marginTop: 8,
              textAlign: 'center',
              fontSize: 12,
              color: '#f59e0b',
              fontWeight: 'bold',
            }}>Port 53 (UDP)</div>
          </div>

          {/* Google Server */}
          <div style={{
            position: 'absolute',
            top: height * 0.28,
            left: width * 0.76,
            opacity: fadeIn(frame, 660, 20),
          }}>
            <div style={{
              width: 140,
              height: 115,
              backgroundColor: theme.colors.server,
              borderRadius: 14,
              border: '3px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 42}}>🖥️</div>
              <div style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Google</div>
            </div>
            <div style={{
              marginTop: 8,
              textAlign: 'center',
              fontSize: 13,
              color: '#10b981',
              fontWeight: 'bold',
            }}>142.250.185.46</div>
          </div>

          {/* Step 1: DNS Query */}
          {frame >= 700 && (
            <ThickArrow
              x1={width * 0.08 + 140}
              y1={height * 0.28 + 50}
              x2={width * 0.42}
              y2={height * 0.28 + 50}
              label="❶ What is google.com's IP?"
              color="#fbbf24"
              startFrame={700}
              animated
            />
          )}

          {/* Step 2: DNS Response */}
          {frame >= 760 && (
            <ThickArrow
              x1={width * 0.42 + 140}
              y1={height * 0.28 + 80}
              x2={width * 0.08 + 140}
              y2={height * 0.28 + 80}
              label="❷ It's 142.250.185.46"
              color={theme.colors.success}
              startFrame={760}
              animated
            />
          )}

          {/* Step 3: Connect to Google */}
          {frame >= 820 && (
            <ThickArrow
              x1={width * 0.08 + 70}
              y1={height * 0.28 + 115}
              x2={width * 0.76 + 70}
              y2={height * 0.28 + 115}
              label="❸ Connect to 142.250.185.46"
              color={theme.colors.loadBalancer}
              startFrame={820}
              animated
            />
          )}

          {/* Explanation */}
          <div style={{
            position: 'absolute',
            top: height * 0.58,
            left: width * 0.15,
            width: 720,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(16, 185, 129, 0.5)',
            borderRadius: 16,
            padding: 24,
            opacity: fadeIn(frame, 680, 20),
          }}>
            <div style={{fontSize: 20, fontWeight: 'bold', color: theme.colors.success, marginBottom: 14}}>
              ✅ How DNS Works
            </div>
            <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 1.9}}>
              <div style={{opacity: fadeIn(frame, 720, 10)}}>
                <span style={{color: '#fbbf24', fontWeight: 'bold'}}>❶ Your PC asks DNS:</span> "What's the IP for google.com?"
              </div>
              <div style={{opacity: fadeIn(frame, 780, 10)}}>
                <span style={{color: theme.colors.success, fontWeight: 'bold'}}>❷ DNS responds:</span> "It's 142.250.185.46" (looks up in database)
              </div>
              <div style={{opacity: fadeIn(frame, 840, 10)}}>
                <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>❸ Your PC connects:</span> Now you can talk to Google's server!
              </div>
              <div style={{opacity: fadeIn(frame, 880, 10), marginTop: 12, color: '#fbbf24'}}>
                <span style={{fontWeight: 'bold'}}>⚡ Speed:</span> First lookup: ~50-100ms | Cached: &lt;1ms
              </div>
            </div>
          </div>

          <Character type="architect" x={width * 0.45} y={height * 0.88} startFrame={610} size={100} />
        </>
      )}

      {/* Scene 4: Real World - Add Forward Proxy (960-1380 frames / 32-46s) */}
      {frame >= 960 && frame < 1380 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 300,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 960, 15),
          }}>
            Real World: Corporate Networks Add a Proxy
          </div>

          {/* Your Computer */}
          <div style={{position: 'absolute', top: height * 0.25, left: width * 0.05}}>
            <div style={{
              width: 120,
              height: 100,
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
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Your PC</div>
            </div>
          </div>

          {/* Forward Proxy */}
          <div style={{
            position: 'absolute',
            top: height * 0.25,
            left: width * 0.23,
            opacity: fadeIn(frame, 990, 20),
          }}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: '#8b5cf6',
              borderRadius: 12,
              border: '4px solid #a78bfa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 990, 60)})`,
            }}>
              <div style={{fontSize: 36}}>🔀</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>FORWARD</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>PROXY</div>
            </div>
            <div style={{
              marginTop: 6,
              textAlign: 'center',
              fontSize: 11,
              color: '#a78bfa',
              fontWeight: 'bold',
            }}>Squid :3128</div>
          </div>

          {/* DNS */}
          <div style={{position: 'absolute', top: height * 0.25, left: width * 0.45}}>
            <div style={{
              width: 110,
              height: 90,
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

          {/* Reverse Proxy */}
          <div style={{
            position: 'absolute',
            top: height * 0.25,
            left: width * 0.64,
            opacity: fadeIn(frame, 1020, 20),
          }}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: theme.colors.loadBalancer,
              borderRadius: 12,
              border: '4px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              transform: `scale(${pulse(frame, 1020, 60)})`,
            }}>
              <div style={{fontSize: 36}}>🔀</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>REVERSE</div>
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>PROXY</div>
            </div>
            <div style={{
              marginTop: 6,
              textAlign: 'center',
              fontSize: 11,
              color: '#60a5fa',
              fontWeight: 'bold',
            }}>NGINX :443</div>
          </div>

          {/* Google Server */}
          <div style={{position: 'absolute', top: height * 0.25, left: width * 0.84}}>
            <div style={{
              width: 120,
              height: 100,
              backgroundColor: theme.colors.server,
              borderRadius: 12,
              border: '3px solid #10b981',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 36}}>🖥️</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Server</div>
            </div>
          </div>

          {/* Draw the complete flow */}
          {frame >= 1060 && (
            <>
              <ThickArrow
                x1={width * 0.05 + 120}
                y1={height * 0.25 + 40}
                x2={width * 0.23}
                y2={height * 0.25 + 40}
                label="❶"
                color={theme.colors.client}
                startFrame={1060}
                animated
              />
              <ThickArrow
                x1={width * 0.23 + 120}
                y1={height * 0.25 + 35}
                x2={width * 0.45}
                y2={height * 0.25 + 35}
                label="❷ DNS"
                color="#fbbf24"
                startFrame={1100}
                animated
              />
              <ThickArrow
                x1={width * 0.45 + 110}
                y1={height * 0.25 + 50}
                x2={width * 0.64}
                y2={height * 0.25 + 50}
                label="❸"
                color={theme.colors.loadBalancer}
                startFrame={1140}
                animated
              />
              <ThickArrow
                x1={width * 0.64 + 120}
                y1={height * 0.25 + 50}
                x2={width * 0.84}
                y2={height * 0.25 + 50}
                label="❹"
                color={theme.colors.success}
                startFrame={1180}
                animated
              />
            </>
          )}

          {/* Explanation boxes */}
          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.08,
            width: 380,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(139, 92, 246, 0.5)',
            borderRadius: 12,
            padding: 18,
            opacity: fadeIn(frame, 1050, 15),
          }}>
            <div style={{fontSize: 17, fontWeight: 'bold', color: '#a78bfa', marginBottom: 10}}>
              🏢 Forward Proxy (Client-Side)
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.7}}>
              • Sits between YOU and internet<br/>
              • Corporate firewall/monitoring<br/>
              • Caches frequently accessed sites<br/>
              • Logs all traffic<br/>
              • Example: Squid proxy port 3128
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.52,
            width: 380,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 12,
            padding: 18,
            opacity: fadeIn(frame, 1090, 15),
          }}>
            <div style={{fontSize: 17, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 10}}>
              🌐 Reverse Proxy (Server-Side)
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.7}}>
              • Sits in front of SERVERS<br/>
              • SSL/TLS termination<br/>
              • Load balancing to backends<br/>
              • Hides server IPs<br/>
              • Example: NGINX port 443
            </div>
          </div>

          <Character type="architect" x={width * 0.05} y={height * 0.82} startFrame={970} size={90} />

          <Dialogue
            speaker="architect"
            text="In production, traffic flows through BOTH proxies: Forward proxy for corporate control, Reverse proxy for server protection!"
            x={width * 0.05 + 100}
            y={height * 0.87}
            startFrame={1010}
            maxWidth={620}
          />
        </>
      )}

      {/* Scene 5: Complete Flow Animation (1380-2100 frames / 46-70s) */}
      {frame >= 1380 && frame < 2100 && (
        <>
          <div style={{
            position: 'absolute',
            top: 30,
            left: width / 2 - 360,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1380, 15),
            textAlign: 'center',
          }}>
            Complete Journey: Your Request Travels Through 5 Steps
          </div>

          {/* All 5 components in a line */}
          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.05}}>
            <div style={{
              width: 110,
              height: 95,
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
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>CLIENT</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 8, fontSize: 22, fontWeight: 'bold', color: theme.colors.client}}>①</div>
          </div>

          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.23}}>
            <div style={{
              width: 110,
              height: 95,
              backgroundColor: '#8b5cf6',
              borderRadius: 12,
              border: '3px solid #a78bfa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 32}}>🔀</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>FORWARD</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 8, fontSize: 22, fontWeight: 'bold', color: '#a78bfa'}}>②</div>
          </div>

          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.41}}>
            <div style={{
              width: 110,
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
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>DNS</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 8, fontSize: 22, fontWeight: 'bold', color: theme.colors.cache}}>③</div>
          </div>

          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.59}}>
            <div style={{
              width: 110,
              height: 95,
              backgroundColor: theme.colors.loadBalancer,
              borderRadius: 12,
              border: '3px solid #60a5fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize: 32}}>🔀</div>
              <div style={{fontSize: 11, fontWeight: 'bold', color: '#fff'}}>REVERSE</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 8, fontSize: 22, fontWeight: 'bold', color: theme.colors.loadBalancer}}>④</div>
          </div>

          <div style={{position: 'absolute', top: height * 0.22, left: width * 0.77}}>
            <div style={{
              width: 110,
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
              <div style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>SERVER</div>
            </div>
            <div style={{textAlign: 'center', marginTop: 8, fontSize: 22, fontWeight: 'bold', color: theme.colors.server}}>⑤</div>
          </div>

          {/* Thick connecting arrows */}
          {frame >= 1430 && (
            <>
              <ThickArrow
                x1={width * 0.05 + 110}
                y1={height * 0.22 + 47}
                x2={width * 0.23}
                y2={height * 0.22 + 47}
                color={theme.colors.client}
                startFrame={1430}
                animated
              />
              <ThickArrow
                x1={width * 0.23 + 110}
                y1={height * 0.22 + 47}
                x2={width * 0.41}
                y2={height * 0.22 + 47}
                color="#a78bfa"
                startFrame={1480}
                animated
              />
              <ThickArrow
                x1={width * 0.41 + 110}
                y1={height * 0.22 + 47}
                x2={width * 0.59}
                y2={height * 0.22 + 47}
                color="#fbbf24"
                startFrame={1530}
                animated
              />
              <ThickArrow
                x1={width * 0.59 + 110}
                y1={height * 0.22 + 47}
                x2={width * 0.77}
                y2={height * 0.22 + 47}
                color={theme.colors.loadBalancer}
                startFrame={1580}
                animated
              />
            </>
          )}

          {/* Step-by-step technical explanation */}
          <div style={{
            position: 'absolute',
            top: height * 0.5,
            left: width * 0.08,
            right: width * 0.08,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 16,
            padding: 24,
            opacity: fadeIn(frame, 1450, 15),
          }}>
            <div style={{fontSize: 22, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 18}}>
              Complete Request Journey (Technical Details):
            </div>
            <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 2.2}}>
              <div style={{opacity: fadeIn(frame, 1490, 10)}}>
                <span style={{color: theme.colors.client, fontWeight: 'bold'}}>① CLIENT (192.168.1.10):</span> You type "google.com" → Request sent to corporate proxy
              </div>
              <div style={{opacity: fadeIn(frame, 1540, 10)}}>
                <span style={{color: '#a78bfa', fontWeight: 'bold'}}>② FORWARD PROXY (Squid :3128):</span> Logs request, checks cache → Forwards to DNS
              </div>
              <div style={{opacity: fadeIn(frame, 1590, 10)}}>
                <span style={{color: theme.colors.cache, fontWeight: 'bold'}}>③ DNS (Port 53 UDP):</span> Returns A record: google.com → 142.250.185.46 (TTL: 300s)
              </div>
              <div style={{opacity: fadeIn(frame, 1640, 10)}}>
                <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>④ REVERSE PROXY (NGINX :443):</span> Terminates TLS, forwards HTTP to backend servers
              </div>
              <div style={{opacity: fadeIn(frame, 1690, 10)}}>
                <span style={{color: theme.colors.server, fontWeight: 'bold'}}>⑤ SERVER (142.250.185.46:80):</span> Processes request, returns HTML/JSON response
              </div>
              <div style={{opacity: fadeIn(frame, 1760, 10), marginTop: 16, fontSize: 16}}>
                <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⚡ Total Time:</span> DNS (50ms) + TLS handshake (100ms) + Processing (80ms) = <span style={{fontWeight: 'bold'}}>~230ms</span>
              </div>
              <div style={{opacity: fadeIn(frame, 1820, 10), color: '#10b981', fontSize: 16}}>
                <span style={{fontWeight: 'bold'}}>⚡ With Caching:</span> Browser cache + DNS cache + Proxy cache = <span style={{fontWeight: 'bold'}}>&lt;20ms</span>
              </div>
            </div>
          </div>

          {/* Animated data flow particles */}
          {frame >= 1630 && (
            <>
              <DataFlowStream x1={width * 0.05 + 110} y1={height * 0.22 + 47} x2={width * 0.23} y2={height * 0.22 + 47} startFrame={1630} />
              <DataFlowStream x1={width * 0.23 + 110} y1={height * 0.22 + 47} x2={width * 0.41} y2={height * 0.22 + 47} startFrame={1680} />
              <DataFlowStream x1={width * 0.41 + 110} y1={height * 0.22 + 47} x2={width * 0.59} y2={height * 0.22 + 47} startFrame={1730} />
              <DataFlowStream x1={width * 0.59 + 110} y1={height * 0.22 + 47} x2={width * 0.77} y2={height * 0.22 + 47} startFrame={1780} />
            </>
          )}
        </>
      )}

      {/* Scene 6: Key Architect Takeaways (2100-2400 frames / 70-80s) */}
      {frame >= 2100 && frame < 2400 && (
        <>
          <div style={{
            position: 'absolute',
            top: 50,
            left: width / 2 - 240,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 2100, 15),
          }}>
            Production Architect Takeaways
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.18,
            left: width * 0.08,
            width: 400,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2120, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.client, marginBottom: 12}}>
              🔢 IP Addresses
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • IPv4: 192.168.1.10 (private)<br/>
              • IPv6: 2001:0db8::1 (future)<br/>
              • Public vs Private ranges<br/>
              • NAT for address conservation
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.18,
            left: width * 0.52,
            width: 400,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(245, 158, 11, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2160, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.cache, marginBottom: 12}}>
              🌐 DNS Production Tips
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • Use Cloudflare/Route53 for speed<br/>
              • TTL: 300s (dev), 3600s (prod)<br/>
              • CNAME for flexibility<br/>
              • Always have secondary DNS
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.48,
            left: width * 0.08,
            width: 400,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(139, 92, 246, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2200, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: '#a78bfa', marginBottom: 12}}>
              🔀 Proxy Strategy
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • Forward: Client-side control<br/>
              • Reverse: Server-side protection<br/>
              • Both needed in enterprise<br/>
              • NGINX/Squid most common
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: height * 0.48,
            left: width * 0.52,
            width: 400,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '3px solid rgba(16, 185, 129, 0.5)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2240, 15),
          }}>
            <div style={{fontSize: 19, fontWeight: 'bold', color: theme.colors.success, marginBottom: 12}}>
              ⚡ Performance Tips
            </div>
            <div style={{fontSize: 14, color: '#e2e8f0', lineHeight: 1.8}}>
              • Cache at every layer<br/>
              • DNS prefetching in browsers<br/>
              • HTTP/2 for multiplexing<br/>
              • CDN for global reach
            </div>
          </div>

          <Character type="architect" x={width * 0.42} y={height * 0.8} startFrame={2110} size={110} />

          <Dialogue
            speaker="architect"
            text="Master these fundamentals! Every distributed system—Netflix, AWS, Google—is built on these exact same principles."
            x={width * 0.42 - 450}
            y={height * 0.88}
            startFrame={2150}
            maxWidth={880}
          />
        </>
      )}

      {/* Scene 7: What's Next (2400-2700 frames / 80-90s) */}
      {frame >= 2400 && frame < 2700 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 150,
            left: width / 2 - 320,
            fontSize: 42,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 2400, 20),
          }}>
            Next: Load Balancing
          </div>

          <div style={{
            position: 'absolute',
            top: height / 2 - 40,
            left: width / 2 - 450,
            fontSize: 19,
            color: '#94a3b8',
            textAlign: 'center',
            lineHeight: 2,
            opacity: fadeIn(frame, 2440, 20),
          }}>
            Now that you understand how requests flow through the internet,<br/>
            let's learn how to <span style={{color: theme.colors.loadBalancer, fontWeight: 'bold'}}>distribute traffic across multiple servers</span><br/>
            for high availability and scalability!<br/>
            <br/>
            <span style={{fontSize: 17, color: '#60a5fa'}}>
              • Round Robin, Least Connections, IP Hash algorithms<br/>
              • Layer 4 vs Layer 7 load balancing<br/>
              • Health checks and automatic failover
            </span>
          </div>

          <Character type="junior" x={width * 0.32} y={height * 0.7} startFrame={2420} size={120} />
          <Character type="architect" x={width * 0.62} y={height * 0.7} startFrame={2420} size={120} />

          <div style={{
            position: 'absolute',
            bottom: 90,
            left: width / 2 - 320,
            fontSize: 22,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '16px 32px',
            borderRadius: 12,
            border: '3px solid rgba(96, 165, 250, 0.4)',
            opacity: fadeIn(frame, 2520, 20),
          }}>
            📚 Phase 1: Foundational Infrastructure (Topic 1 of 4) ✅
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
