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
        fontSize: 28,
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
}> = ({text, x, y, width, height, color, startFrame, fontSize = 24, textColor = '#ffffff'}) => {
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
            fontSize: 18,
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

export const MicroservicesInAction: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Intro - Complete Flow (0-25s / 0-750 frames) */}
      {frame >= 0 && frame < 750 && (
        <>
          <Title text="Microservices in Action: End-to-End" x={width / 2 - 600} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Let's see everything we learned in action! Can you walk me through a real order from start to finish?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Perfect! I'll show you a complete e-commerce order. You'll see decomposition, communication, resilience, sagas, and deployment - all working together!"
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* Architecture Overview */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 180,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🎯 Scenario: Place an Order
            </div>

            <div style={{position: 'relative', height: 330}}>
              {/* User */}
              <Box text="👤 User" x={0} y={20} width={100} height={50} color="#6366f1" startFrame={360} fontSize={24} />

              {/* API Gateway */}
              <Box text="API Gateway" x={150} y={20} width={130} height={50} color="#0ea5e9" startFrame={390} fontSize={20} />

              {/* Microservices */}
              <div style={{opacity: frame >= 420 ? 1 : 0}}>
                <Box text="Order" x={340} y={0} width={100} height={45} color="#10b981" startFrame={420} fontSize={20} />
                <Box text="Payment" x={340} y={55} width={100} height={45} color="#f59e0b" startFrame={450} fontSize={20} />
                <Box text="Inventory" x={340} y={110} width={100} height={45} color="#ec4899" startFrame={480} fontSize={20} />
                <Box text="Email" x={340} y={165} width={100} height={45} color="#06b6d4" startFrame={510} fontSize={20} />
              </div>

              {/* Service Registry */}
              <div
                style={{
                  position: 'absolute',
                  left: 490,
                  top: 40,
                  width: 140,
                  height: 80,
                  backgroundColor: '#7c3aed',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: frame >= 540 ? 1 : 0,
                }}
              >
                Service Registry
              </div>

              {/* Message Queue */}
              <div
                style={{
                  position: 'absolute',
                  left: 680,
                  top: 40,
                  width: 140,
                  height: 80,
                  backgroundColor: '#8b5cf6',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: frame >= 570 ? 1 : 0,
                }}
              >
                Message Queue
              </div>

              {/* Orchestrator */}
              <div
                style={{
                  position: 'absolute',
                  left: 870,
                  top: 40,
                  width: 140,
                  height: 80,
                  backgroundColor: '#c026d3',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: frame >= 600 ? 1 : 0,
                }}
              >
                Saga Orchestrator
              </div>

              {/* Summary */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 240,
                  width: 1040,
                  backgroundColor: '#1e293b',
                  padding: 18,
                  borderRadius: 12,
                  opacity: frame >= 630 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 22, color: '#cbd5e1', textAlign: 'center'}}>
                  <strong style={{color: '#22d3ee'}}>User → API Gateway → Microservices</strong> working together via{' '}
                  <strong style={{color: '#c084fc'}}>Service Discovery</strong>,{' '}
                  <strong style={{color: '#fbbf24'}}>Async Messages</strong>, and{' '}
                  <strong style={{color: '#10b981'}}>Saga Coordination</strong>
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
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 2: Request Flow - Happy Path (25-60s / 750-1800 frames) */}
      {frame >= 750 && frame < 1800 && (
        <>
          <Title text="Happy Path: Order Success" x={width / 2 - 400} y={50} color="#c084fc" startFrame={750} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={780} />

          <Dialogue
            speaker="architect"
            text="Watch the complete flow. Each service is independent, but they coordinate perfectly through async messages and saga orchestration."
            x={width - 750}
            y={height - 280}
            startFrame={810}
            maxWidth={580}
          />

          {/* Complete Flow */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 900 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ✅ Complete Order Flow
            </div>

            {/* Visual Flow Diagram */}
            <div style={{position: 'relative', height: 250, marginBottom: 20}}>
              {/* Services */}
              <div style={{position: 'absolute', left: 0, top: 0, opacity: frame >= 930 ? 1 : 0}}>
                <div
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: '#6366f1',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  👤 User
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 140,
                  top: 0,
                  opacity: frame >= 960 ? 1 : 0,
                  transform: frame >= 960 && frame < 1050 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s',
                  boxShadow: frame >= 960 && frame < 1050 ? '0 0 20px rgba(34, 211, 238, 0.6)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 40,
                    backgroundColor: '#0ea5e9',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Gateway
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 70,
                  opacity: frame >= 1050 ? 1 : 0,
                  transform: frame >= 1050 && frame < 1140 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s',
                  boxShadow: frame >= 1050 && frame < 1140 ? '0 0 20px rgba(16, 185, 129, 0.6)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 40,
                    backgroundColor: '#10b981',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Order
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 140,
                  top: 70,
                  opacity: frame >= 1140 ? 1 : 0,
                  transform: frame >= 1140 && frame < 1230 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s',
                  boxShadow: frame >= 1140 && frame < 1230 ? '0 0 20px rgba(192, 38, 211, 0.6)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 40,
                    backgroundColor: '#c026d3',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Saga Orch
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 140,
                  opacity: frame >= 1230 ? 1 : 0,
                  transform: frame >= 1230 && frame < 1320 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s',
                  boxShadow: frame >= 1230 && frame < 1320 ? '0 0 20px rgba(245, 158, 11, 0.6)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 40,
                    backgroundColor: '#f59e0b',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Payment
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 140,
                  top: 140,
                  opacity: frame >= 1320 ? 1 : 0,
                  transform: frame >= 1320 && frame < 1410 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s',
                  boxShadow: frame >= 1320 && frame < 1410 ? '0 0 20px rgba(236, 72, 153, 0.6)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 40,
                    backgroundColor: '#ec4899',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Inventory
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 210,
                  opacity: frame >= 1410 ? 1 : 0,
                  transform: frame >= 1410 && frame < 1500 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s',
                  boxShadow: frame >= 1410 && frame < 1500 ? '0 0 20px rgba(6, 182, 212, 0.6)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 40,
                    backgroundColor: '#06b6d4',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Email
                </div>
              </div>

              {/* Animated Arrows */}
              <svg style={{position: 'absolute', left: 0, top: 0, width: 300, height: 250, pointerEvents: 'none'}}>
                <defs>
                  <marker id="arrow-flow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#22d3ee" />
                  </marker>
                </defs>

                {frame >= 960 && (
                  <line x1="100" y1="20" x2="140" y2="20" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrow-flow)" />
                )}
                {frame >= 1050 && (
                  <line x1="195" y1="40" x2="55" y2="70" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-flow)" />
                )}
                {frame >= 1140 && (
                  <line x1="110" y1="90" x2="140" y2="90" stroke="#c026d3" strokeWidth="2" markerEnd="url(#arrow-flow)" />
                )}
                {frame >= 1230 && (
                  <line x1="195" y1="110" x2="55" y2="140" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-flow)" />
                )}
                {frame >= 1320 && (
                  <line x1="110" y1="160" x2="140" y2="160" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrow-flow)" />
                )}
                {frame >= 1410 && (
                  <line x1="195" y1="180" x2="55" y2="210" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow-flow)" />
                )}
              </svg>

              {/* Step Labels */}
              <div style={{position: 'absolute', left: 300, top: 0, width: 700}}>
                <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 2.5}}>
                  <div style={{opacity: frame >= 960 ? 1 : 0}}>
                    <strong style={{color: '#22d3ee'}}>1.</strong> POST /orders
                  </div>
                  <div style={{opacity: frame >= 1050 ? 1 : 0}}>
                    <strong style={{color: '#10b981'}}>2.</strong> Order created → event published
                  </div>
                  <div style={{opacity: frame >= 1140 ? 1 : 0}}>
                    <strong style={{color: '#c084fc'}}>3.</strong> Saga coordinates transaction
                  </div>
                  <div style={{opacity: frame >= 1230 ? 1 : 0}}>
                    <strong style={{color: '#f59e0b'}}>4.</strong> Charge card (circuit breaker)
                  </div>
                  <div style={{opacity: frame >= 1320 ? 1 : 0}}>
                    <strong style={{color: '#ec4899'}}>5.</strong> Reserve stock
                  </div>
                  <div style={{opacity: frame >= 1410 ? 1 : 0}}>
                    <strong style={{color: '#06b6d4'}}>6.</strong> Send confirmation (async)
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      padding: 10,
                      backgroundColor: '#065f46',
                      borderRadius: 8,
                      opacity: frame >= 1500 ? 1 : 0,
                    }}
                  >
                    <strong style={{color: '#10b981'}}>✅ Order Complete!</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Patterns Used */}
            <div
              style={{
                marginTop: 20,
                backgroundColor: '#0f172a',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #0ea5e9',
                opacity: frame >= 1590 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 24, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 10}}>
                🎯 Patterns in Action
              </div>
              <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.9}}>
                • <strong>Service Discovery:</strong> Services find each other via registry
                <br />
                • <strong>API Gateway:</strong> Single entry point for user
                <br />
                • <strong>Circuit Breaker:</strong> Payment protected from failures
                <br />
                • <strong>Saga Orchestration:</strong> Coordinates distributed transaction
                <br />• <strong>Async Messaging:</strong> Email sent via message queue
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 3: Failure Path - Saga Compensation (60-90s / 1800-2700 frames) */}
      {frame >= 1800 && frame < 2700 && (
        <>
          <Title text="Failure Path: Saga Compensation" x={width / 2 - 510} y={50} color="#c084fc" startFrame={1800} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={1830} />

          <Dialogue
            speaker="developer"
            text="What if Inventory Service fails? We've already charged the customer!"
            x={100}
            y={height - 280}
            startFrame={1860}
            maxWidth={650}
          />

          {/* Compensation Flow */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 170,
              opacity: frame >= 1950 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#ef4444', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ❌ Out of Stock - Saga Rolls Back
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '2px solid #ef4444',
              }}
            >
              <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 2.2}}>
                <div style={{opacity: frame >= 2010 ? 1 : 0}}>
                  <strong style={{color: '#10b981'}}>✅ T1: Order created</strong> → order_id: 12345
                </div>

                <div style={{opacity: frame >= 2100 ? 1 : 0}}>
                  <strong style={{color: '#10b981'}}>✅ T2: Payment charged</strong> → payment_id: 67890, $99.99 charged
                </div>

                <div style={{opacity: frame >= 2190 ? 1 : 0}}>
                  <strong style={{color: '#ef4444'}}>❌ T3: Inventory reservation FAILED</strong> → Out of stock!
                </div>

                <div
                  style={{
                    marginTop: 15,
                    padding: 15,
                    backgroundColor: '#78350f',
                    borderRadius: 8,
                    opacity: frame >= 2280 ? 1 : 0,
                  }}
                >
                  <strong style={{color: '#fbbf24'}}>🔄 Saga Orchestrator triggers compensations:</strong>
                  <br />
                  <br />
                  <strong>C2:</strong> Refund payment ($99.99 back to customer)
                  <br />
                  <strong>C1:</strong> Cancel order (mark as CANCELLED)
                  <br />
                  <strong>Email:</strong> Send "Sorry, out of stock" notification
                </div>

                <div
                  style={{
                    marginTop: 15,
                    padding: 15,
                    backgroundColor: '#065f46',
                    borderRadius: 8,
                    opacity: frame >= 2460 ? 1 : 0,
                  }}
                >
                  <strong style={{color: '#10b981'}}>✅ Result:</strong> Order rolled back cleanly. Customer NOT charged.
                  System consistent!
                </div>
              </div>
            </div>

            {/* Resilience in Action */}
            <div
              style={{
                marginTop: 20,
                backgroundColor: '#0f172a',
                padding: 18,
                borderRadius: 12,
                border: '2px solid #c084fc',
                opacity: frame >= 2550 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 22, color: '#c084fc', fontWeight: 'bold', marginBottom: 8}}>
                🛡️ Resilience Patterns Protected Us
              </div>
              <div style={{fontSize: 20, color: '#cbd5e1'}}>
                Circuit breaker prevented cascade failure. Saga ensured data consistency. Compensating transactions rolled back
                gracefully!
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 4: Summary & Takeaways (90-120s / 2700-3600 frames) */}
      {frame >= 2700 && frame < 3600 && (
        <>
          <Title text="The Complete Microservices Picture" x={width / 2 - 560} y={50} color="#c084fc" startFrame={2700} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2730} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2760} />

          {/* Complete Summary */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 2820 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🎯 Everything We Learned Working Together
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '3px solid #7c3aed',
                lineHeight: 2.3,
                fontSize: 24,
                color: '#cbd5e1',
              }}
            >
              <div style={{opacity: frame >= 2880 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>1. Service Decomposition</strong> → DDD, bounded contexts, database per
                service
              </div>

              <div style={{opacity: frame >= 2970 ? 1 : 0}}>
                <strong style={{color: '#0ea5e9'}}>2. Communication</strong> → API Gateway, BFF, sync/async, service mesh
              </div>

              <div style={{opacity: frame >= 3060 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>3. Resilience</strong> → Circuit breaker, retry, timeout, bulkhead,
                fallbacks
              </div>

              <div style={{opacity: frame >= 3150 ? 1 : 0}}>
                <strong style={{color: '#fbbf24'}}>4. Distributed Transactions</strong> → Sagas, event sourcing, CQRS,
                compensations
              </div>

              <div style={{opacity: frame >= 3240 ? 1 : 0}}>
                <strong style={{color: '#c084fc'}}>5. Operations</strong> → Service discovery, health checks, rolling
                deployments, Kubernetes
              </div>

              <div
                style={{
                  marginTop: 20,
                  padding: 18,
                  backgroundColor: '#0f172a',
                  borderRadius: 8,
                  border: '1px solid #10b981',
                  opacity: frame >= 3330 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', textAlign: 'center'}}>
                  💡 Microservices = Trade Complexity for Scalability
                </div>
                <div style={{fontSize: 20, color: '#94a3b8', textAlign: 'center', marginTop: 8}}>
                  More moving parts, but independent scaling, deployment, and team autonomy
                </div>
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="Incredible! From monolith to fully orchestrated microservices. I understand decomposition, communication, resilience, sagas, and deployment. Ready to architect microservices!"
            x={100}
            y={height - 280}
            startFrame={3390}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! You've mastered the entire stack. Start simple, decompose strategically, apply these patterns, and you'll build scalable, resilient systems. Go build something amazing!"
            x={width - 750}
            y={height - 280}
            startFrame={3480}
            maxWidth={580}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 22,
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
