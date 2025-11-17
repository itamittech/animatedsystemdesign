import React from 'react';
import {useCurrentFrame, useVideoConfig, AbsoluteFill, spring} from 'remotion';

const Title: React.FC<{text: string; x: number; y: number; color?: string; size?: number; startFrame?: number}> = ({
  text,
  x,
  y,
  color = '#ffffff',
  size = 48,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: size,
        fontWeight: 'bold',
        color,
        opacity,
      }}
    >
      {text}
    </div>
  );
};

const Character: React.FC<{
  type: 'developer' | 'architect';
  x: number;
  y: number;
  scale?: number;
  startFrame?: number;
}> = ({type, x, y, scale = 1, startFrame = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const animation = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  const char = type === 'developer' ? '👨‍💻' : '👩‍💼';

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: 80 * scale,
        transform: `scale(${animation})`,
      }}
    >
      {char}
    </div>
  );
};

const Dialogue: React.FC<{
  speaker: 'developer' | 'architect';
  text: string;
  x: number;
  y: number;
  startFrame: number;
  maxWidth?: number;
}> = ({speaker, text, x, y, startFrame, maxWidth = 500}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const slideIn = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  const translateX = speaker === 'developer' ? -50 * (1 - slideIn) : 50 * (1 - slideIn);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        maxWidth,
        backgroundColor: speaker === 'developer' ? '#1e3a8a' : '#581c87',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        fontSize: 18,
        lineHeight: 1.6,
        transform: `translateX(${translateX}px)`,
        opacity: slideIn,
      }}
    >
      <div style={{fontWeight: 'bold', marginBottom: 10, color: speaker === 'developer' ? '#60a5fa' : '#c084fc'}}>
        {speaker === 'developer' ? 'Alex (Developer)' : 'Sarah (Architect)'}
      </div>
      {text}
    </div>
  );
};

const Box: React.FC<{
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  startFrame: number;
  fontSize?: number;
  textColor?: string;
}> = ({text, x, y, width, height, color, startFrame, fontSize = 16, textColor = '#ffffff'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const fadeIn = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        backgroundColor: color,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize,
        fontWeight: 'bold',
        color: textColor,
        opacity: fadeIn,
        transform: `scale(${fadeIn})`,
      }}
    >
      {text}
    </div>
  );
};

const Arrow: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  startFrame?: number;
  label?: string;
}> = ({x1, y1, x2, y2, color = '#ffffff', startFrame = 0, label}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const animation = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: x1,
          top: y1,
          width: length * animation,
          height: 3,
          backgroundColor: color,
          transformOrigin: '0 0',
          transform: `rotate(${angle}deg)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: x2,
          top: y2,
          width: 0,
          height: 0,
          borderLeft: `10px solid ${color}`,
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          transform: `rotate(${angle}deg) translate(-10px, -6px)`,
          opacity: animation,
        }}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            left: (x1 + x2) / 2 - 20,
            top: (y1 + y2) / 2 - 25,
            color,
            fontSize: 11,
            fontWeight: 'bold',
            opacity: animation,
            backgroundColor: '#0f172a',
            padding: '2px 6px',
            borderRadius: 4,
          }}
        >
          {label}
        </div>
      )}
    </>
  );
};

export const MicroservicesResilience: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: The Cascade Failure Problem (0-22s / 0-660 frames) */}
      {frame >= 0 && frame < 660 && (
        <>
          <Title text="Resilience & Fault Tolerance" x={width / 2 - 500} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="If Payment Service goes down, won't the Order Service fail too when it tries to call it? One failure cascades!"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! That's cascade failure - microservices' biggest risk. We use resilience patterns to prevent it. Let me show you."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* Cascade Failure Visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 180,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ⚠️ Cascade Failure Problem
            </div>

            <div style={{position: 'relative', height: 350}}>
              {/* User */}
              <Box text="👤 User" x={0} y={120} width={120} height={60} color="#6366f1" startFrame={330} fontSize={16} />

              {/* API Gateway - turns red when it fails */}
              <div
                style={{
                  position: 'absolute',
                  left: 170,
                  top: 120,
                  width: 140,
                  height: 60,
                  backgroundColor: frame >= 570 ? '#7f1d1d' : '#0ea5e9',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: frame >= 360 ? 1 : 0,
                  transform: `scale(${frame >= 360 ? 1 : 0})`,
                  border: frame >= 570 ? '3px solid #ef4444' : 'none',
                  boxShadow: frame >= 570 ? '0 0 20px rgba(239, 68, 68, 0.6)' : 'none',
                }}
              >
                {frame >= 570 ? '💥 Gateway' : 'API Gateway'}
              </div>

              {/* Order Service - turns red when it fails */}
              <div
                style={{
                  position: 'absolute',
                  left: 370,
                  top: 120,
                  width: 150,
                  height: 60,
                  backgroundColor: frame >= 540 ? '#7f1d1d' : '#10b981',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: frame >= 390 ? 1 : 0,
                  transform: `scale(${frame >= 390 ? 1 : 0})`,
                  border: frame >= 540 ? '3px solid #ef4444' : 'none',
                  boxShadow: frame >= 540 ? '0 0 20px rgba(239, 68, 68, 0.6)' : 'none',
                }}
              >
                {frame >= 540 ? '💥 Order' : 'Order Service'}
              </div>

              {/* Payment Service - failing first */}
              <div
                style={{
                  position: 'absolute',
                  left: 580,
                  top: 120,
                  width: 150,
                  height: 60,
                  backgroundColor: '#ef4444',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: frame >= 420 ? 1 : 0,
                  border: '3px solid #ef4444',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)',
                  animation: frame >= 420 && frame < 510 ? 'pulse 1s infinite' : 'none',
                }}
              >
                💔 Payment DOWN
              </div>

              {/* Cascade effect indicators */}
              {frame >= 510 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 600,
                    top: 90,
                    fontSize: 20,
                    opacity: Math.sin((frame - 510) / 10) * 0.5 + 0.5,
                  }}
                >
                  ⚠️
                </div>
              )}
              {frame >= 540 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 420,
                    top: 90,
                    fontSize: 20,
                    opacity: Math.sin((frame - 540) / 10) * 0.5 + 0.5,
                  }}
                >
                  ⚠️
                </div>
              )}
              {frame >= 570 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 220,
                    top: 90,
                    fontSize: 20,
                    opacity: Math.sin((frame - 570) / 10) * 0.5 + 0.5,
                  }}
                >
                  ⚠️
                </div>
              )}

              <Arrow x1={120} y1={150} x2={170} y2={150} color="#22d3ee" startFrame={450} label="Request" />
              <Arrow x1={310} y1={150} x2={370} y2={150} color="#22d3ee" startFrame={480} label="Call" />
              <Arrow x1={520} y1={150} x2={580} y2={150} color="#ef4444" startFrame={510} label="Timeout!" />

              {/* Explanation */}
              <div
                style={{
                  position: 'absolute',
                  left: 50,
                  top: 220,
                  width: 700,
                  backgroundColor: '#7f1d1d',
                  padding: 20,
                  borderRadius: 12,
                  opacity: frame >= 540 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#fca5a5', fontWeight: 'bold', marginBottom: 10}}>
                  🚨 What Happens
                </div>
                <div style={{fontSize: 14, color: '#fecaca', lineHeight: 1.9}}>
                  1. Payment Service crashes
                  <br />
                  2. Order Service waits 30s for timeout (threads blocked!)
                  <br />
                  3. User waits... API Gateway waits... Everything slow
                  <br />
                  4. More requests pile up → Order Service runs out of threads
                  <br />
                  5. Order Service dies → API Gateway dies → ENTIRE SYSTEM DOWN
                </div>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 2: Circuit Breaker Pattern (22-47s / 660-1410 frames) */}
      {frame >= 660 && frame < 1410 && (
        <>
          <Title text="Circuit Breaker Pattern" x={width / 2 - 400} y={50} color="#c084fc" startFrame={660} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={690} />

          <Dialogue
            speaker="architect"
            text="Circuit Breaker stops calling a failing service, fails fast, and gives it time to recover. Like an electrical circuit breaker!"
            x={width - 750}
            y={height - 280}
            startFrame={720}
            maxWidth={580}
          />

          {/* Circuit Breaker States */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 160,
              opacity: frame >= 810 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ⚡ Circuit Breaker States
            </div>

            <div style={{position: 'relative', height: 480}}>
              {/* CLOSED State */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 300,
                  height: 140,
                  backgroundColor: '#065f46',
                  borderRadius: 12,
                  border: '3px solid #10b981',
                  padding: 15,
                  opacity: frame >= 840 ? 1 : 0,
                  transform: frame >= 990 && frame < 1080 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  boxShadow: frame >= 990 && frame < 1080 ? '0 0 30px rgba(16, 185, 129, 0.5)' : 'none',
                }}
              >
                <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>
                  🟢 CLOSED
                </div>
                <div style={{fontSize: 13, color: '#d1fae5', lineHeight: 1.8}}>
                  <strong>Normal operation</strong>
                  <br />
                  • Requests flow through
                  <br />
                  • Tracking failure rate
                  <br />
                  • If failures {'>'} threshold → OPEN
                  <br />
                  <span style={{fontSize: 11}}>Example: 5 failures in 10s</span>
                </div>
              </div>

              {/* OPEN State */}
              <div
                style={{
                  position: 'absolute',
                  left: 370,
                  top: 0,
                  width: 300,
                  height: 140,
                  backgroundColor: '#7f1d1d',
                  borderRadius: 12,
                  border: '3px solid #ef4444',
                  padding: 15,
                  opacity: frame >= 960 ? 1 : 0,
                  transform: frame >= 1110 && frame < 1200 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  boxShadow: frame >= 1110 && frame < 1200 ? '0 0 30px rgba(239, 68, 68, 0.5)' : 'none',
                }}
              >
                <div style={{fontSize: 18, color: '#ef4444', fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>
                  🔴 OPEN
                </div>
                <div style={{fontSize: 13, color: '#fecaca', lineHeight: 1.8}}>
                  <strong>Circuit tripped!</strong>
                  <br />
                  • Fails fast immediately
                  <br />
                  • No calls to failing service
                  <br />
                  • After timeout → HALF-OPEN
                  <br />
                  <span style={{fontSize: 11}}>Example: Wait 60s</span>
                </div>
              </div>

              {/* HALF-OPEN State */}
              <div
                style={{
                  position: 'absolute',
                  left: 740,
                  top: 0,
                  width: 300,
                  height: 140,
                  backgroundColor: '#78350f',
                  borderRadius: 12,
                  border: '3px solid #f59e0b',
                  padding: 15,
                  opacity: frame >= 1080 ? 1 : 0,
                  transform: frame >= 1230 && frame < 1320 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  boxShadow: frame >= 1230 && frame < 1320 ? '0 0 30px rgba(245, 158, 11, 0.5)' : 'none',
                }}
              >
                <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>
                  🟡 HALF-OPEN
                </div>
                <div style={{fontSize: 13, color: '#fef3c7', lineHeight: 1.8}}>
                  <strong>Testing recovery</strong>
                  <br />
                  • Allow limited requests
                  <br />
                  • If success → CLOSED
                  <br />
                  • If fail → OPEN again
                  <br />
                  <span style={{fontSize: 11}}>Example: Try 3 requests</span>
                </div>
              </div>

              {/* Animated Arrow: CLOSED -> OPEN */}
              {frame >= 990 && (
                <svg style={{position: 'absolute', left: 0, top: 0, width: 1040, height: 200, pointerEvents: 'none'}}>
                  <defs>
                    <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                    </marker>
                    <marker id="arrowhead-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
                    </marker>
                    <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                    </marker>
                  </defs>

                  {/* CLOSED -> OPEN (failures exceed threshold) */}
                  <line
                    x1="300"
                    y1="70"
                    x2="370"
                    y2="70"
                    stroke="#ef4444"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-red)"
                    opacity={frame >= 990 && frame < 1350 ? 1 : 0.3}
                    strokeDasharray={frame >= 990 && frame < 1350 ? "none" : "5,5"}
                  />
                  <text
                    x="335"
                    y="60"
                    textAnchor="middle"
                    fill="#ef4444"
                    fontSize="11"
                    fontWeight="bold"
                    opacity={frame >= 990 ? 1 : 0}
                  >
                    Failures!
                  </text>

                  {/* OPEN -> HALF-OPEN (timeout) */}
                  <line
                    x1="670"
                    y1="70"
                    x2="740"
                    y2="70"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-orange)"
                    opacity={frame >= 1110 && frame < 1350 ? 1 : 0.3}
                    strokeDasharray={frame >= 1110 && frame < 1350 ? "none" : "5,5"}
                  />
                  <text
                    x="705"
                    y="60"
                    textAnchor="middle"
                    fill="#f59e0b"
                    fontSize="11"
                    fontWeight="bold"
                    opacity={frame >= 1110 ? 1 : 0}
                  >
                    Timeout
                  </text>

                  {/* HALF-OPEN -> CLOSED (success) */}
                  <path
                    d="M 890 140 Q 890 200, 150 200 Q 150 180, 150 140"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-green)"
                    opacity={frame >= 1230 && frame < 1350 ? 1 : 0.3}
                    strokeDasharray={frame >= 1230 && frame < 1350 ? "none" : "5,5"}
                  />
                  <text
                    x="520"
                    y="215"
                    textAnchor="middle"
                    fill="#10b981"
                    fontSize="11"
                    fontWeight="bold"
                    opacity={frame >= 1230 ? 1 : 0}
                  >
                    Success!
                  </text>

                  {/* HALF-OPEN -> OPEN (failure) */}
                  <path
                    d="M 740 10 Q 555 -30, 370 10"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-red)"
                    opacity={frame >= 1230 ? 0.4 : 0}
                    strokeDasharray="5,5"
                  />
                  <text
                    x="555"
                    y="-10"
                    textAnchor="middle"
                    fill="#ef4444"
                    fontSize="10"
                    opacity={frame >= 1230 ? 0.6 : 0}
                  >
                    Fail again
                  </text>
                </svg>
              )}

              {/* State Transitions */}
              <Arrow x1={300} y1={70} x2={370} y2={70} color="#ef4444" startFrame={1140} label="Failures" />
              <Arrow x1={670} y1={70} x2={740} y2={70} color="#fbbf24" startFrame={1170} label="Timeout" />
              <Arrow x1={740} y1={100} x2={670} y2={100} color="#ef4444" startFrame={1200} label="Still failing" />
              <Arrow x1={850} y1={140} x2={150} y2={140} color="#10b981" startFrame={1230} label="Recovered!" />

              {/* Code Example */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 180,
                  width: 1040,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '2px solid #0ea5e9',
                  opacity: frame >= 1260 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 12}}>
                  💻 Code Example (Resilience4j)
                </div>
                <pre
                  style={{
                    fontSize: 13,
                    color: '#cbd5e1',
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {`@CircuitBreaker(name = "payment-service", fallbackMethod = "paymentFallback")
public PaymentResponse processPayment(Order order) {
    return paymentClient.charge(order); // Might fail!
}

public PaymentResponse paymentFallback(Order order, Exception ex) {
    // Fallback: Queue for later processing
    return new PaymentResponse("QUEUED", "Will retry later");
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 3: Retry, Timeout, Bulkhead (47-70s / 1410-2100 frames) */}
      {frame >= 1410 && frame < 2100 && (
        <>
          <Title text="More Resilience Patterns" x={width / 2 - 430} y={50} color="#c084fc" startFrame={1410} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={1440} />

          <Dialogue
            speaker="developer"
            text="Circuit Breaker is great! Are there other patterns to make microservices more resilient?"
            x={100}
            y={height - 280}
            startFrame={1470}
            maxWidth={650}
          />

          {/* Three patterns */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 1560 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🛡️ Essential Resilience Patterns
            </div>

            <div style={{display: 'flex', gap: 25, marginBottom: 25}}>
              {/* Retry Pattern */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #0ea5e9',
                }}
              >
                <div style={{fontSize: 18, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  🔄 Retry Pattern
                </div>
                <div style={{fontSize: 13, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>What:</strong> Retry failed requests automatically
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Strategy:</strong>
                  <br />
                  • Exponential backoff
                  <br />
                  • 1s, 2s, 4s, 8s delays
                  <br />
                  • Max 3-5 retries
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>Use for:</strong>
                  <br />
                  Transient failures (network blips)
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>⚠️ Caution:</strong>
                  <br />
                  Only retry idempotent operations!
                </div>
              </div>

              {/* Timeout Pattern */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #f59e0b',
                }}
              >
                <div style={{fontSize: 18, color: '#f59e0b', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  ⏱️ Timeout Pattern
                </div>
                <div style={{fontSize: 13, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>What:</strong> Set maximum wait time for responses
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Strategy:</strong>
                  <br />
                  • Connect timeout: 2s
                  <br />
                  • Read timeout: 5s
                  <br />
                  • Don't wait forever!
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>Use for:</strong>
                  <br />
                  Preventing thread exhaustion
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>⚠️ Caution:</strong>
                  <br />
                  Too short = false failures
                </div>
              </div>

              {/* Bulkhead Pattern */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #c084fc',
                }}
              >
                <div style={{fontSize: 18, color: '#c084fc', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  🚢 Bulkhead Pattern
                </div>
                <div style={{fontSize: 13, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>What:</strong> Isolate resources (thread pools, connections)
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Strategy:</strong>
                  <br />
                  • Payment: 20 threads
                  <br />
                  • Inventory: 30 threads
                  <br />
                  • Notifications: 10 threads
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>Use for:</strong>
                  <br />
                  Preventing cascading failures
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Benefit:</strong>
                  <br />
                  One slow service can't starve others
                </div>
              </div>
            </div>

            {/* Combined Example */}
            <div
              style={{
                backgroundColor: '#0f172a',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #10b981',
                opacity: frame >= 1800 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 16, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                💡 Best Practice: Combine All Patterns!
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 2, textAlign: 'center'}}>
                Timeout (5s) + Retry (3x with backoff) + Circuit Breaker + Bulkhead = Resilient System 🛡️
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 4: Fallback Responses (70-90s / 2100-2700 frames) */}
      {frame >= 2100 && frame < 2700 && (
        <>
          <Title text="Fallback & Graceful Degradation" x={width / 2 - 540} y={50} color="#c084fc" startFrame={2100} />

          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2130} />
          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2160} />

          <Dialogue
            speaker="architect"
            text="When a service fails, provide a fallback response instead of total failure. Degrade gracefully - it's better than complete downtime!"
            x={width - 750}
            y={height - 280}
            startFrame={2190}
            maxWidth={580}
          />

          {/* Fallback Examples */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 160,
              opacity: frame >= 2280 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🔄 Fallback Strategies
            </div>

            {/* Examples */}
            <div style={{marginBottom: 25}}>
              {/* Recommendation Service Down */}
              <div
                style={{
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  marginBottom: 20,
                  border: '2px solid #0ea5e9',
                  opacity: frame >= 2340 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 10}}>
                  Example 1: Recommendation Service Down
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#ef4444'}}>❌ Bad:</strong> Show error, blank page
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Good:</strong> Show "Popular Products" from cache instead
                  <br />
                  <br />
                  <span style={{fontSize: 13, color: '#94a3b8'}}>
                    User still gets value, may not even notice the degradation
                  </span>
                </div>
              </div>

              {/* Payment Service Slow */}
              <div
                style={{
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  marginBottom: 20,
                  border: '2px solid #f59e0b',
                  opacity: frame >= 2430 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#f59e0b', fontWeight: 'bold', marginBottom: 10}}>
                  Example 2: Payment Service Slow
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#ef4444'}}>❌ Bad:</strong> User waits 30s, times out
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Good:</strong> Queue payment for async processing, show "Order
                  Pending" status
                  <br />
                  <br />
                  <span style={{fontSize: 13, color: '#94a3b8'}}>Process payment in background, notify user when done</span>
                </div>
              </div>

              {/* Search Service Down */}
              <div
                style={{
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '2px solid #c084fc',
                  opacity: frame >= 2520 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                  Example 3: Search Service Down
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#ef4444'}}>❌ Bad:</strong> "Search unavailable, try later"
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Good:</strong> Return cached popular searches or browse by category
                  <br />
                  <br />
                  <span style={{fontSize: 13, color: '#94a3b8'}}>
                    Alternative navigation keeps users engaged on the site
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="So we plan for failure, handle it gracefully, and keep the system running even when parts fail. Resilience is about surviving failures, not preventing them!"
            x={100}
            y={height - 280}
            startFrame={2580}
            maxWidth={650}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
