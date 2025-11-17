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
  dashed?: boolean;
}> = ({x1, y1, x2, y2, color = '#ffffff', startFrame = 0, dashed = false}) => {
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
          backgroundColor: dashed ? 'transparent' : color,
          backgroundImage: dashed ? `linear-gradient(to right, ${color} 50%, transparent 50%)` : 'none',
          backgroundSize: dashed ? '10px 3px' : 'auto',
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
    </>
  );
};

export const ServiceDecomposition: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: The Decomposition Challenge (0-25s / 0-750 frames) */}
      {frame >= 0 && frame < 750 && (
        <>
          <Title text="Service Decomposition Patterns" x={width / 2 - 520} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Okay, I'm convinced we need microservices. But how do I actually split up our monolith? Where do I draw the service boundaries?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Random splitting leads to chaos. We use Domain-Driven Design principles to find natural boundaries. Let me show you the strategies."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* The Problem: Wrong Splits */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 420,
              top: 180,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ❌ Bad Decomposition
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                border: '3px solid #ef4444',
                borderRadius: 15,
                padding: 25,
                width: 840,
              }}
            >
              <div style={{fontSize: 24, color: '#cbd5e1', marginBottom: 20}}>
                Splitting by technical layers (Frontend, Backend, Database) creates services that are tightly coupled and
                can't work independently.
              </div>

              <div style={{position: 'relative', height: 280}}>
                {/* Bad example boxes */}
                <Box
                  text="UI Service"
                  x={50}
                  y={0}
                  width={200}
                  height={80}
                  color="#7c3aed"
                  startFrame={360}
                  fontSize={24}
                />
                <Box
                  text="Logic Service"
                  x={320}
                  y={0}
                  width={200}
                  height={80}
                  color="#0ea5e9"
                  startFrame={420}
                  fontSize={24}
                />
                <Box text="Data Service" x={590} y={0} width={200} height={80} color="#10b981" startFrame={480} fontSize={24} />

                {/* Arrows showing tight coupling */}
                <Arrow x1={150} y1={80} x2={420} y2={80} color="#ef4444" startFrame={540} />
                <Arrow x1={420} y1={80} x2={690} y2={80} color="#ef4444" startFrame={540} />
                <Arrow x1={690} y1={100} x2={420} y2={100} color="#ef4444" startFrame={540} />
                <Arrow x1={420} y1={100} x2={150} y2={100} color="#ef4444" startFrame={540} />

                <div
                  style={{
                    position: 'absolute',
                    left: 50,
                    top: 140,
                    fontSize: 22,
                    color: '#ef4444',
                    fontWeight: 'bold',
                    opacity: frame >= 600 ? 1 : 0,
                  }}
                >
                  🚨 Problem: Every change requires coordinating all 3 services!
                  <br />
                  Can't deploy independently. No real benefit over monolith.
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

      {/* Scene 2: Domain-Driven Design (25-50s / 750-1500 frames) */}
      {frame >= 750 && frame < 1500 && (
        <>
          <Title text="Domain-Driven Design (DDD)" x={width / 2 - 450} y={50} color="#c084fc" startFrame={750} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={780} />

          <Dialogue
            speaker="architect"
            text="DDD gives us a systematic way to find boundaries. The key concept is 'Bounded Context' - a clear boundary within which a domain model exists."
            x={width - 750}
            y={height - 280}
            startFrame={810}
            maxWidth={580}
          />

          {/* DDD Concepts */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 160,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              🎯 Core DDD Concepts
            </div>

            {/* Bounded Context */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                width: 850,
                border: '2px solid #10b981',
                opacity: frame >= 870 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
                1. Bounded Context
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                A boundary within which a domain model is valid. Example: "Order" means different things in Order Management
                (order details, status) vs Shipping (delivery address, tracking).
                <br />
                <br />
                <strong style={{color: '#22d3ee'}}>→ Each Bounded Context = One Microservice</strong>
              </div>
            </div>

            {/* Aggregates */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                width: 850,
                border: '2px solid #0ea5e9',
                opacity: frame >= 990 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 28, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 10}}>
                2. Aggregates
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                A cluster of domain objects treated as a single unit. Example: Order (root) + Order Items + Shipping Address.
                <br />
                <br />
                <strong style={{color: '#22d3ee'}}>→ Aggregates define transaction boundaries</strong>
              </div>
            </div>

            {/* Ubiquitous Language */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                width: 850,
                border: '2px solid #c084fc',
                opacity: frame >= 1110 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 28, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                3. Ubiquitous Language
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                Common vocabulary shared by developers and domain experts within a bounded context. Same terms in code,
                conversations, and documentation.
                <br />
                <br />
                <strong style={{color: '#22d3ee'}}>→ Ensures everyone speaks the same language</strong>
              </div>
            </div>
          </div>

          {/* Visual Example on Right */}
          <div
            style={{
              position: 'absolute',
              right: 60,
              top: 180,
              width: 420,
              backgroundColor: '#0f172a',
              padding: 20,
              borderRadius: 12,
              border: '2px solid #fbbf24',
              opacity: frame >= 1230 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
              Example: "Product" in Different Contexts
            </div>
            <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 2}}>
              <strong style={{color: '#10b981'}}>Catalog Context:</strong>
              <br />
              • Name, description, images
              <br />
              • Categories, tags
              <br />
              • SEO metadata
              <br />
              <br />
              <strong style={{color: '#0ea5e9'}}>Inventory Context:</strong>
              <br />
              • SKU, stock levels
              <br />
              • Warehouse locations
              <br />
              • Reorder thresholds
              <br />
              <br />
              <strong style={{color: '#f59e0b'}}>Pricing Context:</strong>
              <br />
              • Base price, discounts
              <br />
              • Tax rules, currency
              <br />• Dynamic pricing logic
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

      {/* Scene 3: Decomposition Strategies (50-75s / 1500-2250 frames) */}
      {frame >= 1500 && frame < 2250 && (
        <>
          <Title text="Decomposition Strategies" x={width / 2 - 430} y={50} color="#c084fc" startFrame={1500} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={1530} />

          <Dialogue
            speaker="developer"
            text="So I look for bounded contexts in my domain. What specific strategies help me identify them?"
            x={100}
            y={height - 280}
            startFrame={1560}
            maxWidth={650}
          />

          {/* Three Strategies */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 560,
              top: 160,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 25, textAlign: 'center'}}>
              🎯 Three Decomposition Strategies
            </div>

            <div style={{display: 'flex', gap: 25}}>
              {/* Strategy 1: Business Capability */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #10b981',
                  opacity: frame >= 1650 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  1. By Business Capability
                </div>
                <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>What it does:</strong>
                  <br />
                  Align services with business functions
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Example:</strong>
                  <br />
                  • User Management
                  <br />
                  • Product Catalog
                  <br />
                  • Order Processing
                  <br />
                  • Payment Processing
                  <br />
                  • Shipping & Fulfillment
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Best for:</strong> Clear business domains
                </div>
              </div>

              {/* Strategy 2: Subdomain */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #0ea5e9',
                  opacity: frame >= 1800 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 28, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  2. By Subdomain (DDD)
                </div>
                <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>What it does:</strong>
                  <br />
                  Separate core, supporting, and generic subdomains
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Example:</strong>
                  <br />
                  <strong style={{color: '#c084fc'}}>Core:</strong> Product recommendations (competitive advantage)
                  <br />
                  <strong style={{color: '#fbbf24'}}>Supporting:</strong> Inventory management
                  <br />
                  <strong style={{color: '#94a3b8'}}>Generic:</strong> Email notifications (use 3rd party)
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Best for:</strong> Focusing on core value
                </div>
              </div>

              {/* Strategy 3: Transaction Boundaries */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #f59e0b',
                  opacity: frame >= 1950 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 28, color: '#f59e0b', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  3. By Transaction
                </div>
                <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>What it does:</strong>
                  <br />
                  Group data that changes together
                  <br />
                  <br />
                  <strong style={{color: '#22d3ee'}}>Example:</strong>
                  <br />
                  Order + Order Items must update atomically → Same service
                  <br />
                  <br />
                  Order + Inventory can be eventual consistency → Different services
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Best for:</strong> Maintaining data consistency
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

      {/* Scene 4: Database Per Service (75-100s / 2250-3000 frames) */}
      {frame >= 2250 && frame < 3000 && (
        <>
          <Title text="Database Per Service Pattern" x={width / 2 - 480} y={50} color="#c084fc" startFrame={2250} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2280} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2310} />

          <Dialogue
            speaker="architect"
            text="Critical rule: Each microservice MUST have its own database. No shared databases! This ensures true independence and loose coupling."
            x={width - 750}
            y={height - 280}
            startFrame={2340}
            maxWidth={580}
          />

          {/* Before/After Comparison */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 2430 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              Database Per Service Pattern
            </div>

            <div style={{display: 'flex', gap: 30, marginBottom: 30}}>
              {/* Before: Shared DB */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #ef4444',
                }}
              >
                <div style={{fontSize: 28, color: '#ef4444', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  ❌ Anti-Pattern: Shared Database
                </div>

                <div style={{position: 'relative', height: 280}}>
                  <Box text="Order Service" x={10} y={0} width={140} height={60} color="#10b981" startFrame={2490} fontSize={20} />
                  <Box
                    text="Payment Service"
                    x={170}
                    y={0}
                    width={140}
                    height={60}
                    color="#f59e0b"
                    startFrame={2520}
                    fontSize={20}
                  />
                  <Box
                    text="Inventory Service"
                    x={330}
                    y={0}
                    width={140}
                    height={60}
                    color="#ec4899"
                    startFrame={2550}
                    fontSize={20}
                  />

                  {/* Shared database */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 120,
                      top: 110,
                      width: 230,
                      height: 100,
                      backgroundColor: '#7c3aed',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: '#fff',
                      opacity: frame >= 2580 ? 1 : 0,
                    }}
                  >
                    💾 Shared Database
                  </div>

                  <Arrow x1={80} y1={60} x2={150} y2={110} color="#ef4444" startFrame={2610} />
                  <Arrow x1={240} y1={60} x2={235} y2={110} color="#ef4444" startFrame={2610} />
                  <Arrow x1={400} y1={60} x2={320} y2={110} color="#ef4444" startFrame={2610} />

                  <div
                    style={{
                      position: 'absolute',
                      left: 20,
                      top: 230,
                      fontSize: 20,
                      color: '#ef4444',
                      opacity: frame >= 2640 ? 1 : 0,
                    }}
                  >
                    • Schema changes break multiple services
                    <br />
                    • Can't scale databases independently
                    <br />• Tight coupling via database
                  </div>
                </div>
              </div>

              {/* After: Separate DBs */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #10b981',
                }}
              >
                <div style={{fontSize: 28, color: '#10b981', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  ✅ Database Per Service
                </div>

                <div style={{position: 'relative', height: 280}}>
                  <Box text="Order Service" x={10} y={0} width={140} height={60} color="#10b981" startFrame={2490} fontSize={20} />
                  <div
                    style={{
                      position: 'absolute',
                      left: 20,
                      top: 80,
                      width: 120,
                      height: 50,
                      backgroundColor: '#065f46',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      color: '#fff',
                      opacity: frame >= 2700 ? 1 : 0,
                    }}
                  >
                    Order DB
                  </div>
                  <Arrow x1={80} y1={60} x2={80} y2={80} color="#10b981" startFrame={2730} />

                  <Box
                    text="Payment Service"
                    x={170}
                    y={0}
                    width={140}
                    height={60}
                    color="#f59e0b"
                    startFrame={2520}
                    fontSize={20}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: 180,
                      top: 80,
                      width: 120,
                      height: 50,
                      backgroundColor: '#78350f',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      color: '#fff',
                      opacity: frame >= 2760 ? 1 : 0,
                    }}
                  >
                    Payment DB
                  </div>
                  <Arrow x1={240} y1={60} x2={240} y2={80} color="#f59e0b" startFrame={2790} />

                  <Box
                    text="Inventory Service"
                    x={330}
                    y={0}
                    width={140}
                    height={60}
                    color="#ec4899"
                    startFrame={2550}
                    fontSize={20}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: 340,
                      top: 80,
                      width: 120,
                      height: 50,
                      backgroundColor: '#831843',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      color: '#fff',
                      opacity: frame >= 2820 ? 1 : 0,
                    }}
                  >
                    Inventory DB
                  </div>
                  <Arrow x1={400} y1={60} x2={400} y2={80} color="#ec4899" startFrame={2850} />

                  <div
                    style={{
                      position: 'absolute',
                      left: 20,
                      top: 150,
                      fontSize: 20,
                      color: '#10b981',
                      opacity: frame >= 2880 ? 1 : 0,
                    }}
                  >
                    • Independent schema evolution
                    <br />
                    • Choose optimal DB type per service
                    <br />
                    • Scale databases independently
                    <br />• True service autonomy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {frame < 2910 && (
            <Dialogue
              speaker="developer"
              text="But what if Order Service needs customer email from User Service? Without a shared database, how do services share data?"
              x={100}
              y={height - 280}
              startFrame={2730}
              maxWidth={650}
            />
          )}

          {frame >= 2910 && (
            <Dialogue
              speaker="architect"
              text="Excellent question! Services communicate via APIs and events. That's exactly what we'll cover next in Microservices Communication patterns!"
              x={width - 750}
              y={height - 280}
              startFrame={2910}
              maxWidth={580}
            />
          )}

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
