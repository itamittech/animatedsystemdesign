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
            left: (x1 + x2) / 2 - 30,
            top: (y1 + y2) / 2 - 25,
            color,
            fontSize: 12,
            fontWeight: 'bold',
            opacity: animation,
            backgroundColor: '#0f172a',
            padding: '3px 8px',
            borderRadius: 5,
          }}
        >
          {label}
        </div>
      )}
    </>
  );
};

export const DistributedSagas: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: The Distributed Transaction Problem (0-25s / 0-750 frames) */}
      {frame >= 0 && frame < 750 && (
        <>
          <Title text="Distributed Transactions & Sagas" x={width / 2 - 550} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="In a monolith, I use database transactions for consistency. How do I ensure an order is either fully created OR fully rolled back when it spans Order, Payment, and Inventory services?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="The distributed transaction problem! Each service has its own database, so traditional ACID transactions don't work. We use Sagas instead."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* The Problem Visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 170,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ⚠️ Why Traditional Transactions Don't Work
            </div>

            <div style={{position: 'relative', height: 350}}>
              {/* Three services with separate DBs */}
              <Box text="Order Service" x={0} y={0} width={150} height={60} color="#10b981" startFrame={330} fontSize={14} />
              <div
                style={{
                  position: 'absolute',
                  left: 15,
                  top: 70,
                  fontSize: 11,
                  color: '#94a3b8',
                  opacity: frame >= 360 ? 1 : 0,
                }}
              >
                💾 Order DB
              </div>

              <Box
                text="Payment Service"
                x={350}
                y={0}
                width={150}
                height={60}
                color="#f59e0b"
                startFrame={390}
                fontSize={13}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 365,
                  top: 70,
                  fontSize: 11,
                  color: '#94a3b8',
                  opacity: frame >= 420 ? 1 : 0,
                }}
              >
                💾 Payment DB
              </div>

              <Box
                text="Inventory Service"
                x={700}
                y={0}
                width={150}
                height={60}
                color="#ec4899"
                startFrame={450}
                fontSize={13}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 715,
                  top: 70,
                  fontSize: 11,
                  color: '#94a3b8',
                  opacity: frame >= 480 ? 1 : 0,
                }}
              >
                💾 Inventory DB
              </div>

              {/* Problem scenario */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 120,
                  width: 1000,
                  backgroundColor: '#7f1d1d',
                  padding: 20,
                  borderRadius: 12,
                  opacity: frame >= 510 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#fca5a5', fontWeight: 'bold', marginBottom: 10}}>
                  💥 The Failure Scenario
                </div>
                <div style={{fontSize: 14, color: '#fecaca', lineHeight: 2}}>
                  <strong style={{color: '#10b981'}}>✅ Step 1:</strong> Order Service creates order → SUCCESS
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Step 2:</strong> Payment Service charges card → SUCCESS
                  <br />
                  <strong style={{color: '#ef4444'}}>❌ Step 3:</strong> Inventory Service reserves stock → FAILS (out of
                  stock!)
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>Problem:</strong> Order created, payment charged, but no inventory!
                  <br />
                  Customer charged for nothing. Data inconsistent across services. 🚨
                </div>
              </div>

              {/* No distributed transaction coordinator */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 280,
                  fontSize: 13,
                  color: '#94a3b8',
                  opacity: frame >= 660 ? 1 : 0,
                }}
              >
                ⚠️ Can't use 2-Phase Commit (2PC) - too slow, single point of failure, doesn't scale
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

      {/* Scene 2: Saga Pattern Explained (25-55s / 750-1650 frames) */}
      {frame >= 750 && frame < 1650 && (
        <>
          <Title text="The Saga Pattern" x={width / 2 - 300} y={50} color="#c084fc" startFrame={750} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={780} />

          <Dialogue
            speaker="architect"
            text="A Saga is a sequence of local transactions. If one fails, we run compensating transactions to undo previous steps. It's eventual consistency!"
            x={width - 750}
            y={height - 280}
            startFrame={810}
            maxWidth={580}
          />

          {/* Saga Flow */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 160,
              opacity: frame >= 900 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              📖 Saga: Order Processing Example
            </div>

            <div style={{position: 'relative', height: 450}}>
              {/* Happy Path */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 500,
                  backgroundColor: '#065f46',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #10b981',
                  opacity: frame >= 930 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  ✅ Happy Path (All Succeed)
                </div>
                <div style={{fontSize: 14, color: '#d1fae5', lineHeight: 2}}>
                  <strong>T1:</strong> Create Order → order_id: 123
                  <br />↓<br />
                  <strong>T2:</strong> Charge Payment → payment_id: 456
                  <br />↓<br />
                  <strong>T3:</strong> Reserve Inventory → reservation_id: 789
                  <br />↓<br />
                  <strong>T4:</strong> Send Confirmation Email
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Result:</strong> Order complete! 🎉
                </div>
              </div>

              {/* Failure Path with Compensation */}
              <div
                style={{
                  position: 'absolute',
                  left: 540,
                  top: 0,
                  width: 500,
                  backgroundColor: '#7f1d1d',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #ef4444',
                  opacity: frame >= 1110 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 18, color: '#ef4444', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  ❌ Failure Path (T3 Fails)
                </div>
                <div style={{fontSize: 14, color: '#fecaca', lineHeight: 2}}>
                  <strong style={{color: '#10b981'}}>T1:</strong> Create Order → ✅ order_id: 123
                  <br />↓<br />
                  <strong style={{color: '#10b981'}}>T2:</strong> Charge Payment → ✅ payment_id: 456
                  <br />↓<br />
                  <strong style={{color: '#ef4444'}}>T3:</strong> Reserve Inventory → ❌ OUT OF STOCK
                  <br />↓ <strong style={{color: '#fbbf24'}}>COMPENSATE!</strong>
                  <br />
                  <strong style={{color: '#fbbf24'}}>C2:</strong> Refund Payment (undo T2)
                  <br />↓<br />
                  <strong style={{color: '#fbbf24'}}>C1:</strong> Cancel Order (undo T1)
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Result:</strong> Order rolled back 🔄
                </div>
              </div>

              {/* Key Insight */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 330,
                  width: 1040,
                  backgroundColor: '#0f172a',
                  padding: 20,
                  borderRadius: 12,
                  border: '2px solid #0ea5e9',
                  opacity: frame >= 1350 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 12}}>
                  💡 Key Insight: Compensating Transactions
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  Every transaction <strong>T</strong> must have a compensating transaction <strong>C</strong> that undoes
                  its effects.
                  <br />
                  Example: If T2 = "Charge Payment", then C2 = "Refund Payment"
                  <br />
                  Compensations execute in <strong>reverse order</strong> (C3 → C2 → C1)
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

      {/* Scene 3: Choreography vs Orchestration (55-80s / 1650-2400 frames) */}
      {frame >= 1650 && frame < 2400 && (
        <>
          <Title text="Saga Coordination: Two Patterns" x={width / 2 - 520} y={50} color="#c084fc" startFrame={1650} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={1680} />

          <Dialogue
            speaker="developer"
            text="Who coordinates the saga? Who decides when to run compensations?"
            x={100}
            y={height - 280}
            startFrame={1710}
            maxWidth={650}
          />

          {/* Two Patterns */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 1800 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              Two Saga Coordination Patterns
            </div>

            <div style={{display: 'flex', gap: 60}}>
              {/* Choreography */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #0ea5e9',
                }}
              >
                <div style={{fontSize: 20, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  🎭 Choreography
                </div>

                <div style={{position: 'relative', height: 220, marginBottom: 15}}>
                  <Box text="Order" x={30} y={0} width={95} height={50} color="#10b981" startFrame={1860} fontSize={13} />
                  <Box text="Payment" x={150} y={0} width={95} height={50} color="#f59e0b" startFrame={1890} fontSize={12} />
                  <Box text="Inventory" x={270} y={0} width={95} height={50} color="#ec4899" startFrame={1920} fontSize={12} />

                  <Arrow x1={125} y1={50} x2={150} y2={25} color="#22d3ee" startFrame={1950} label="Event" />
                  <Arrow x1={245} y1={50} x2={270} y2={25} color="#22d3ee" startFrame={1980} label="Event" />
                  <Arrow x1={270} y1={35} x2={125} y2={60} color="#ef4444" startFrame={2010} label="Fail Event" />

                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 110,
                      fontSize: 12,
                      color: '#cbd5e1',
                      opacity: frame >= 2040 ? 1 : 0,
                    }}
                  >
                    Services react to events
                    <br />
                    Each knows its own compensation
                  </div>
                </div>

                <div style={{fontSize: 13, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#10b981'}}>✅ Pros:</strong>
                  <br />
                  • Simple, decoupled
                  <br />
                  • No single point of failure
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>❌ Cons:</strong>
                  <br />
                  • Hard to understand flow
                  <br />• Cyclic dependencies risk
                </div>
              </div>

              {/* Orchestration */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #c084fc',
                }}
              >
                <div style={{fontSize: 20, color: '#c084fc', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  🎼 Orchestration
                </div>

                <div style={{position: 'relative', height: 220, marginBottom: 15}}>
                  <Box
                    text="Orchestrator"
                    x={130}
                    y={0}
                    width={120}
                    height={50}
                    color="#7c3aed"
                    startFrame={2100}
                    fontSize={13}
                  />

                  <Box text="Order" x={10} y={90} width={80} height={45} color="#10b981" startFrame={2130} fontSize={11} />
                  <Box text="Payment" x={105} y={90} width={80} height={45} color="#f59e0b" startFrame={2160} fontSize={11} />
                  <Box text="Inventory" x={200} y={90} width={80} height={45} color="#ec4899" startFrame={2190} fontSize={11} />
                  <Box text="Email" x={295} y={90} width={80} height={45} color="#06b6d4" startFrame={2220} fontSize={11} />

                  <Arrow x1={190} y1={50} x2={50} y2={90} color="#22d3ee" startFrame={2250} />
                  <Arrow x1={190} y1={50} x2={145} y2={90} color="#22d3ee" startFrame={2250} />
                  <Arrow x1={190} y1={50} x2={240} y2={90} color="#22d3ee" startFrame={2250} />
                  <Arrow x1={190} y1={50} x2={335} y2={90} color="#22d3ee" startFrame={2250} />
                </div>

                <div style={{fontSize: 13, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#10b981'}}>✅ Pros:</strong>
                  <br />
                  • Clear saga logic
                  <br />
                  • Easier to debug & monitor
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>❌ Cons:</strong>
                  <br />
                  • Single point of failure
                  <br />• Orchestrator complexity
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

      {/* Scene 4: Event Sourcing & CQRS Intro (80-100s / 2400-3000 frames) */}
      {frame >= 2400 && frame < 3000 && (
        <>
          <Title text="Event Sourcing & CQRS" x={width / 2 - 420} y={50} color="#c084fc" startFrame={2400} />

          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2430} />
          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2460} />

          <Dialogue
            speaker="architect"
            text="Sagas work great with Event Sourcing. Instead of storing current state, store all events that happened. You can rebuild state and have perfect audit trail!"
            x={width - 750}
            y={height - 280}
            startFrame={2490}
            maxWidth={580}
          />

          {/* Event Sourcing */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 160,
              opacity: frame >= 2580 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              📚 Event Sourcing Pattern
            </div>

            <div style={{display: 'flex', gap: 30, marginBottom: 25}}>
              {/* Traditional */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '2px solid #64748b',
                }}
              >
                <div style={{fontSize: 16, color: '#94a3b8', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  Traditional: Store State
                </div>
                <div
                  style={{
                    backgroundColor: '#0f172a',
                    padding: 15,
                    borderRadius: 8,
                    fontSize: 13,
                    color: '#cbd5e1',
                    fontFamily: 'monospace',
                  }}
                >
                  Order #123:
                  <br />
                  status: "SHIPPED"
                  <br />
                  total: $99.99
                  <br />
                  <br />
                  <span style={{color: '#ef4444'}}>❌ Lost history!</span>
                </div>
              </div>

              {/* Event Sourcing */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '2px solid #10b981',
                }}
              >
                <div style={{fontSize: 16, color: '#10b981', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  Event Sourcing: Store Events
                </div>
                <div
                  style={{
                    backgroundColor: '#0f172a',
                    padding: 15,
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#cbd5e1',
                    fontFamily: 'monospace',
                  }}
                >
                  OrderCreated(#123, $99.99)
                  <br />
                  PaymentCharged($99.99)
                  <br />
                  InventoryReserved(item: 456)
                  <br />
                  OrderShipped(tracking: ABC)
                  <br />
                  <br />
                  <span style={{color: '#10b981'}}>✅ Full audit trail!</span>
                </div>
              </div>
            </div>

            {/* CQRS */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #0ea5e9',
                opacity: frame >= 2760 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 12}}>
                🔀 CQRS (Command Query Responsibility Segregation)
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                <strong style={{color: '#22d3ee'}}>Idea:</strong> Separate models for writes (commands) and reads (queries)
                <br />
                <br />
                <strong style={{color: '#fbbf24'}}>Command Side:</strong> Stores events, handles writes
                <br />
                <strong style={{color: '#c084fc'}}>Query Side:</strong> Denormalized read models, optimized for queries
                <br />
                <br />
                <strong style={{color: '#10b981'}}>Benefit:</strong> Scale reads and writes independently, optimize each
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="Got it! Sagas handle distributed transactions with compensations. Event Sourcing gives us the event history. CQRS separates reads from writes. These patterns work together!"
            x={100}
            y={height - 280}
            startFrame={2850}
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
