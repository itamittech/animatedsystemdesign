import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * WebSocket & Real-Time Communication (Phase 10.1)
 * Duration: 80 seconds (2400 frames at 30fps)
 *
 * Scene 1 (0-20s): HTTP Polling vs WebSocket - The Problem
 * Scene 2 (20-40s): WebSocket Protocol & Handshake
 * Scene 3 (40-60s): Server-Sent Events (SSE) vs WebSocket vs Long Polling
 * Scene 4 (60-80s): Scaling WebSockets & Production Patterns
 */

export const WebSocketRealTimeCommunication: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 600;
  const scene2End = 1200;
  const scene3End = 1800;
  const scene4End = 2400;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="WebSocket & Real-Time Communication" subtitle="Bidirectional, Low-Latency Messaging" />
          <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="For a chat app, polling every second generates tons of empty requests. There must be a better way!" x={width * 0.10} y={height * 0.64} startFrame={90} />
          <Dialogue speaker="architect" text="WebSockets! Persistent, bidirectional connection. Server can push data instantly. Let's compare approaches!" x={width * 0.60} y={height * 0.64} startFrame={240} />

          <div style={{position: 'absolute', top: 340, left: width / 2 - 820, width: 1640, opacity: fadeIn(frame, 390, 30)}}>
            <div style={{display: 'flex', gap: 30, marginBottom: 30}}>
              {/* HTTP Polling */}
              <div style={{flex: 1, opacity: fadeIn(frame, 420, 25)}}>
                <h2 style={{fontSize: 28, fontWeight: 700, color: '#ef4444', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>❌ HTTP Polling (Wasteful)</h2>
                <div style={{padding: 20, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, marginBottom: 16}}>
                  <svg width="760" height="200">
                    {/* Client */}
                    <rect x={50} y={40} width={120} height={60} rx={8} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} opacity={fadeIn(frame, 450, 15)} />
                    <text x={110} y={75} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">Client</text>

                    {/* Server */}
                    <rect x={590} y={40} width={120} height={60} rx={8} fill="#10b981" stroke="#34d399" strokeWidth={2} opacity={fadeIn(frame, 465, 15)} />
                    <text x={650} y={75} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">Server</text>

                    {/* Repeated requests */}
                    {[0, 1, 2, 3].map((i) => (
                      <g key={i} opacity={fadeIn(frame, 480 + i * 20, 15)}>
                        <line x1={170} y1={60 + i * 30} x2={590} y2={60 + i * 30} stroke="#60a5fa" strokeWidth={2} markerEnd="url(#arrow-blue)" />
                        <text x={380} y={55 + i * 30} textAnchor="middle" fill="#60a5fa" fontSize={14}>Any updates?</text>
                        <line x1={590} y1={70 + i * 30} x2={170} y2={70 + i * 30} stroke="#ef4444" strokeWidth={2} markerEnd="url(#arrow-red)" />
                        <text x={380} y={85 + i * 30} textAnchor="middle" fill="#fca5a5" fontSize={14}>Nope (empty)</text>
                      </g>
                    ))}

                    <defs>
                      <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#60a5fa" />
                      </marker>
                      <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#fca5a5" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <div style={{fontSize: 18, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  <strong style={{color: '#fca5a5'}}>Problems:</strong><br />
                  • Constant requests (waste bandwidth)<br />
                  • Delayed updates (poll interval)<br />
                  • Server load (handle empty requests)<br />
                  • Battery drain on mobile
                </div>
              </div>

              {/* WebSocket */}
              <div style={{flex: 1, opacity: fadeIn(frame, 450, 25)}}>
                <h2 style={{fontSize: 28, fontWeight: 700, color: '#10b981', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(16, 185, 129, 0.6)'}}>✅ WebSocket (Efficient)</h2>
                <div style={{padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14, marginBottom: 16}}>
                  <svg width="760" height="200">
                    {/* Client */}
                    <rect x={50} y={40} width={120} height={60} rx={8} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} opacity={fadeIn(frame, 480, 15)} />
                    <text x={110} y={75} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">Client</text>

                    {/* Server */}
                    <rect x={590} y={40} width={120} height={60} rx={8} fill="#10b981" stroke="#34d399" strokeWidth={2} opacity={fadeIn(frame, 495, 15)} />
                    <text x={650} y={75} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">Server</text>

                    {/* Handshake */}
                    <g opacity={fadeIn(frame, 510, 15)}>
                      <line x1={170} y1={60} x2={590} y2={60} stroke="#8b5cf6" strokeWidth={3} markerEnd="url(#arrow-purple)" />
                      <text x={380} y={55} textAnchor="middle" fill="#a78bfa" fontSize={14}>Upgrade: websocket</text>
                    </g>

                    {/* Persistent connection */}
                    <g opacity={fadeIn(frame, 525, 15)}>
                      <line x1={380} y1={80} x2={380} y2={160} stroke="#10b981" strokeWidth={4} strokeDasharray="8,4" />
                      <text x={380} y={120} textAnchor="middle" fill="#6ee7b7" fontSize={16} fontWeight="700">Persistent Connection</text>
                    </g>

                    {/* Bidirectional messages */}
                    <g opacity={fadeIn(frame, 540, 15)}>
                      <line x1={170} y1={140} x2={590} y2={140} stroke="#60a5fa" strokeWidth={2} markerEnd="url(#arrow-blue)" />
                      <text x={380} y={135} textAnchor="middle" fill="#60a5fa" fontSize={14}>Message →</text>
                    </g>
                    <g opacity={fadeIn(frame, 555, 15)}>
                      <line x1={590} y1={160} x2={170} y2={160} stroke="#10b981" strokeWidth={2} markerEnd="url(#arrow-green)" />
                      <text x={380} y={155} textAnchor="middle" fill="#34d399" fontSize={14}>← Push anytime!</text>
                    </g>

                    <defs>
                      <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#8b5cf6" />
                      </marker>
                      <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#34d399" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  <strong style={{color: '#6ee7b7'}}>Benefits:</strong><br />
                  • One connection (low overhead)<br />
                  • Instant updates (push from server)<br />
                  • Bidirectional (both can send)<br />
                  • Efficient for real-time apps
                </div>
              </div>
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="WebSocket Protocol" subtitle="How the Handshake Works" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🤝 WebSocket Upgrade Handshake</h3>
              <p style={{fontSize: 22, color: '#e9d5ff', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Starts as HTTP, upgrades to WebSocket protocol
              </p>
            </div>

            {/* Handshake Steps */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene1End + 60, 25)}}>
              <div style={{display: 'flex', gap: 30}}>
                <div style={{flex: 1}}>
                  <h3 style={{fontSize: 26, fontWeight: 700, color: '#3b82f6', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>1️⃣ Client Request</h3>
                  <div style={{padding: 20, background: 'rgba(59, 130, 246, 0.15)', border: '2px solid #3b82f6', borderRadius: 12}}>
                    <div style={{fontFamily: 'monospace', fontSize: 17, color: '#93c5fd', lineHeight: 1.8}}>
                      GET /chat HTTP/1.1<br />
                      Host: example.com<br />
                      <strong style={{color: '#60a5fa'}}>Upgrade: websocket</strong><br />
                      <strong style={{color: '#60a5fa'}}>Connection: Upgrade</strong><br />
                      Sec-WebSocket-Key: x3JJHMbDL...<br />
                      Sec-WebSocket-Version: 13
                    </div>
                  </div>
                </div>

                <div style={{flex: 1, opacity: fadeIn(frame, scene1End + 90, 25)}}>
                  <h3 style={{fontSize: 26, fontWeight: 700, color: '#10b981', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>2️⃣ Server Response</h3>
                  <div style={{padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12}}>
                    <div style={{fontFamily: 'monospace', fontSize: 17, color: '#6ee7b7', lineHeight: 1.8}}>
                      <strong style={{color: '#34d399'}}>HTTP/1.1 101 Switching Protocols</strong><br />
                      Upgrade: websocket<br />
                      Connection: Upgrade<br />
                      Sec-WebSocket-Accept: HSmrc0s...<br />
                      <br />
                      <span style={{color: '#d1fae5'}}>🎉 Connection upgraded!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Handshake */}
            <div style={{opacity: fadeIn(frame, scene1End + 150, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#f59e0b', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>3️⃣ After Handshake: WebSocket Frames</h3>
              <div style={{padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14}}>
                <div style={{display: 'flex', gap: 30, marginBottom: 20}}>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#fbbf24', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Frame Types</h4>
                    <div style={{fontSize: 19, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      • <strong>Text frames:</strong> UTF-8 text<br />
                      • <strong>Binary frames:</strong> Images, files<br />
                      • <strong>Control frames:</strong> Ping/Pong, Close<br />
                      • <strong>Fragmented:</strong> Large messages split
                    </div>
                  </div>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#fbbf24', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Properties</h4>
                    <div style={{fontSize: 19, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      • <strong>Full-duplex:</strong> Send & receive simultaneously<br />
                      • <strong>Low overhead:</strong> 2-14 bytes per frame<br />
                      • <strong>No headers:</strong> Unlike HTTP requests<br />
                      • <strong>Ordered delivery:</strong> Messages in sequence
                    </div>
                  </div>
                </div>

                <div style={{padding: 20, background: 'rgba(245, 158, 11, 0.2)', borderRadius: 10, textAlign: 'center', opacity: fadeIn(frame, scene1End + 210, 25)}}>
                  <div style={{fontSize: 22, color: '#fef3c7', fontFamily: theme.typography.body.fontFamily, fontWeight: 600}}>
                    💡 <strong style={{color: '#fbbf24'}}>Keep-Alive:</strong> Ping/Pong frames every 30-60 seconds to detect dead connections
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene1End + 300} />
          <Dialogue speaker="junior" text="HTTP upgrade handshake, then lightweight frames. Full-duplex with tiny overhead!" x={width * 0.10} y={height * 0.64} startFrame={scene1End + 330} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Comparison: SSE vs WebSocket vs Long Polling" subtitle="Choosing the Right Approach" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 850, width: 1700}}>
            <div style={{display: 'flex', gap: 20, marginBottom: 30, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              {[
                {
                  name: 'Server-Sent Events (SSE)',
                  icon: '📡',
                  direction: 'Server → Client only',
                  transport: 'HTTP (text/event-stream)',
                  reconnect: '✅ Auto-reconnect built-in',
                  use: 'News feeds, stock tickers, notifications',
                  pros: ['Simple (just EventSource API)', 'Auto-reconnect', 'Works over HTTP/2'],
                  cons: ['One-way only', 'Text only (no binary)', 'Browser limit: 6 connections'],
                  color: '#3b82f6'
                },
                {
                  name: 'WebSocket',
                  icon: '⚡',
                  direction: 'Bidirectional (both ways)',
                  transport: 'WebSocket protocol (ws://)',
                  reconnect: '❌ Manual reconnect needed',
                  use: 'Chat, gaming, collaborative editing',
                  pros: ['Full-duplex', 'Binary + text', 'Low latency', 'No connection limit'],
                  cons: ['Complex setup', 'Harder to scale', 'Manual reconnect logic'],
                  color: '#10b981'
                },
                {
                  name: 'Long Polling',
                  icon: '🔄',
                  direction: 'Client → Server (request-response)',
                  transport: 'HTTP (regular requests)',
                  reconnect: '✅ Just retry request',
                  use: 'Fallback when WebSocket blocked',
                  pros: ['Works everywhere (firewall-friendly)', 'Simple', 'No special server'],
                  cons: ['Higher latency', 'More overhead', 'Connection per client'],
                  color: '#f59e0b'
                }
              ].map((method, i) => (
                <div key={i} style={{flex: 1, padding: 20, background: `linear-gradient(135deg, ${method.color}22, ${method.color}11)`, border: `3px solid ${method.color}`, borderRadius: 14, opacity: fadeIn(frame, scene2End + 60 + i * 20, 20), boxShadow: `0 0 20px ${method.color}44`}}>
                  <div style={{fontSize: 40, textAlign: 'center', marginBottom: 12}}>{method.icon}</div>
                  <h3 style={{fontSize: 22, fontWeight: 700, color: method.color, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>{method.name}</h3>

                  <div style={{fontSize: 17, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7, marginBottom: 12}}>
                    <strong style={{color: theme.text.secondary}}>Direction:</strong> {method.direction}<br />
                    <strong style={{color: theme.text.secondary}}>Transport:</strong> {method.transport}<br />
                    <strong style={{color: theme.text.secondary}}>Reconnect:</strong> {method.reconnect}<br />
                    <strong style={{color: theme.text.secondary}}>Use case:</strong> {method.use}
                  </div>

                  <div style={{fontSize: 16, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                    <strong style={{color: '#6ee7b7'}}>Pros:</strong><br />
                    {method.pros.map((pro, j) => (
                      <div key={j}>• {pro}</div>
                    ))}
                    <br />
                    <strong style={{color: '#fca5a5'}}>Cons:</strong><br />
                    {method.cons.map((con, j) => (
                      <div key={j}>• {con}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene2End + 210, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎯 Decision Matrix</h3>
              <div style={{fontSize: 21, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.9}}>
                <strong style={{color: '#60a5fa'}}>SSE:</strong> Simple, one-way push (dashboards, feeds)<br />
                <strong style={{color: '#6ee7b7'}}>WebSocket:</strong> Bidirectional, low-latency (chat, gaming, collaboration)<br />
                <strong style={{color: '#fbbf24'}}>Long Polling:</strong> Fallback when WebSocket unavailable (corporate firewalls)
              </div>
            </div>
          </div>

          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene2End + 300} />
          <Dialogue speaker="architect" text="Choose based on needs: SSE for simple push, WebSocket for bidirectional, Long Polling as fallback!" x={width * 0.60} y={height * 0.64} startFrame={scene2End + 330} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Scaling WebSockets" subtitle="Production Patterns" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>⚠️ Scaling Challenges</h2>
              <div style={{display: 'flex', gap: 20}}>
                {[
                  {problem: 'Sticky Sessions', desc: 'Client must reconnect to same server', solution: 'IP hash in load balancer'},
                  {problem: 'Broadcast Messages', desc: 'Send to all connected clients across servers', solution: 'Redis Pub/Sub for coordination'},
                  {problem: 'Connection Limits', desc: '65K connections per server (file descriptors)', solution: 'Horizontal scaling with multiple servers'}
                ].map((challenge, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: 'rgba(239, 68, 68, 0.15)', border: '2px solid #ef4444', borderRadius: 12, opacity: fadeIn(frame, scene3End + 60 + i * 20, 20), boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)'}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#fca5a5', marginBottom: 10, fontFamily: theme.typography.heading.fontFamily}}>{challenge.problem}</h4>
                    <div style={{fontSize: 18, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7, marginBottom: 12}}>
                      <strong>Issue:</strong> {challenge.desc}
                    </div>
                    <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily}}>
                      <strong style={{color: '#6ee7b7'}}>Solution:</strong> {challenge.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 150, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>✅ Production Architecture</h2>
              <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14}}>
                <svg width="1590" height="280" opacity={fadeIn(frame, scene3End + 180, 20)}>
                  {/* Clients */}
                  {[0, 1, 2].map((i) => (
                    <g key={i} opacity={fadeIn(frame, scene3End + 195 + i * 15, 15)}>
                      <rect x={50 + i * 100} y={30} width={80} height={50} rx={8} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} />
                      <text x={90 + i * 100} y={60} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">Client</text>
                    </g>
                  ))}

                  {/* Load Balancer */}
                  <g opacity={fadeIn(frame, scene3End + 240, 15)}>
                    <rect x={500} y={20} width={180} height={70} rx={10} fill="#f59e0b" stroke="#fbbf24" strokeWidth={3} />
                    <text x={590} y={50} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Load Balancer</text>
                    <text x={590} y={75} textAnchor="middle" fill="#fef3c7" fontSize={16}>(IP hash sticky)</text>
                  </g>

                  {/* WebSocket Servers */}
                  {[0, 1, 2].map((i) => (
                    <g key={i} opacity={fadeIn(frame, scene3End + 270 + i * 15, 15)}>
                      <rect x={900 + i * 200} y={20} width={160} height={70} rx={10} fill="#10b981" stroke="#34d399" strokeWidth={3} />
                      <text x={980 + i * 200} y={50} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">WS Server {i + 1}</text>
                      <text x={980 + i * 200} y={72} textAnchor="middle" fill="#d1fae5" fontSize={14}>10K conns</text>
                    </g>
                  ))}

                  {/* Redis Pub/Sub */}
                  <g opacity={fadeIn(frame, scene3End + 330, 15)}>
                    <rect x={1050} y={140} width={200} height={80} rx={10} fill="#ef4444" stroke="#fca5a5" strokeWidth={3} />
                    <text x={1150} y={170} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Redis Pub/Sub</text>
                    <text x={1150} y={195} textAnchor="middle" fill="#fecaca" fontSize={16}>(Broadcast coord.)</text>
                  </g>

                  {/* Connections */}
                  <g opacity={fadeIn(frame, scene3End + 255, 15)}>
                    <line x={290} y1={55} x2={500} y2={55} stroke="#94a3b8" strokeWidth={2} markerEnd="url(#arrow-gray)" />
                  </g>
                  <g opacity={fadeIn(frame, scene3End + 285, 15)}>
                    {[0, 1, 2].map((i) => (
                      <line key={i} x1={680} y1={55} x2={900 + i * 200} y2={55} stroke="#94a3b8" strokeWidth={2} markerEnd="url(#arrow-gray)" />
                    ))}
                  </g>
                  <g opacity={fadeIn(frame, scene3End + 345, 15)}>
                    {[0, 1, 2].map((i) => (
                      <line key={i} x1={980 + i * 200} y1={90} x2={1150} y2={140} stroke="#ef4444" strokeWidth={2} strokeDasharray="4,2" />
                    ))}
                  </g>

                  <defs>
                    <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                      <polygon points="0 0, 8 4, 0 8" fill="#94a3b8" />
                    </marker>
                  </defs>
                </svg>

                <div style={{marginTop: 20, fontSize: 20, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                  User A connects to Server 1 → Sends message → Server 1 publishes to Redis<br />
                  → All servers receive from Redis → Broadcast to their connected clients!
                </div>
              </div>
            </div>

            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene3End + 210, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛠️ Popular Libraries & Frameworks</h3>
              <div style={{fontSize: 21, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.9}}>
                <strong>Socket.io:</strong> Auto-fallback, rooms, broadcast support<br />
                <strong>SignalR (.NET):</strong> ASP.NET Core, auto-reconnect, groups<br />
                <strong>ws (Node.js):</strong> Lightweight, fast, low-level control
              </div>
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene3End + 270} />
          <Dialogue speaker="junior" text="Sticky sessions for routing, Redis Pub/Sub for broadcast. Scale horizontally with multiple servers!" x={width * 0.10} y={height * 0.64} startFrame={scene3End + 300} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
