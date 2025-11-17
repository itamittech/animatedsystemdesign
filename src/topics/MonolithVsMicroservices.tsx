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
}> = ({x1, y1, x2, y2, color = '#ffffff', startFrame = 0}) => {
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
    </>
  );
};

export const MonolithVsMicroservices: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Introduction and The Monolith (0-25s / 0-750 frames) */}
      {frame >= 0 && frame < 750 && (
        <>
          <Title text="Monolith vs Microservices" x={width / 2 - 450} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Sarah, I keep hearing about microservices. Our e-commerce app is currently a monolith. Should we break it up?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Let's understand both architectures first. A monolith isn't bad - it depends on your needs. Let me show you the evolution."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* The Monolith Visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 400,
              top: 180,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🏛️ The Monolith
            </div>

            {/* Single large monolith box */}
            <div
              style={{
                width: 800,
                height: 350,
                backgroundColor: '#1e293b',
                border: '3px solid #3b82f6',
                borderRadius: 15,
                padding: 25,
              }}
            >
              <div style={{fontSize: 20, color: '#3b82f6', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                E-Commerce Application
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
                {/* User Management */}
                <div style={{opacity: frame >= 360 ? 1 : 0}}>
                  <div
                    style={{
                      backgroundColor: '#7c3aed',
                      padding: 15,
                      borderRadius: 10,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>👤 User Management</div>
                    <div style={{fontSize: 12, color: '#e9d5ff', marginTop: 5}}>Auth, Profiles, Sessions</div>
                  </div>
                </div>

                {/* Product Catalog */}
                <div style={{opacity: frame >= 420 ? 1 : 0}}>
                  <div
                    style={{
                      backgroundColor: '#0ea5e9',
                      padding: 15,
                      borderRadius: 10,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>📦 Product Catalog</div>
                    <div style={{fontSize: 12, color: '#e0f2fe', marginTop: 5}}>Listings, Search, Categories</div>
                  </div>
                </div>

                {/* Order Management */}
                <div style={{opacity: frame >= 480 ? 1 : 0}}>
                  <div
                    style={{
                      backgroundColor: '#10b981',
                      padding: 15,
                      borderRadius: 10,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>🛒 Order Management</div>
                    <div style={{fontSize: 12, color: '#d1fae5', marginTop: 5}}>Cart, Checkout, Orders</div>
                  </div>
                </div>

                {/* Payment Processing */}
                <div style={{opacity: frame >= 540 ? 1 : 0}}>
                  <div
                    style={{
                      backgroundColor: '#f59e0b',
                      padding: 15,
                      borderRadius: 10,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>💳 Payment Processing</div>
                    <div style={{fontSize: 12, color: '#fef3c7', marginTop: 5}}>Payments, Refunds, Billing</div>
                  </div>
                </div>

                {/* Inventory */}
                <div style={{opacity: frame >= 600 ? 1 : 0}}>
                  <div
                    style={{
                      backgroundColor: '#ec4899',
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    <div style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>📊 Inventory</div>
                    <div style={{fontSize: 12, color: '#fce7f3', marginTop: 5}}>Stock, Warehouses, Tracking</div>
                  </div>
                </div>

                {/* Notifications */}
                <div style={{opacity: frame >= 660 ? 1 : 0}}>
                  <div
                    style={{
                      backgroundColor: '#06b6d4',
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    <div style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>📧 Notifications</div>
                    <div style={{fontSize: 12, color: '#cffafe', marginTop: 5}}>Email, SMS, Push Alerts</div>
                  </div>
                </div>
              </div>

              {/* Single database indicator */}
              <div
                style={{
                  marginTop: 20,
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#94a3b8',
                  opacity: frame >= 690 ? 1 : 0,
                }}
              >
                💾 Single Shared Database
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

      {/* Scene 2: Monolith Problems at Scale (25-45s / 750-1350 frames) */}
      {frame >= 750 && frame < 1350 && (
        <>
          <Title text="The Monolith Challenge" x={width / 2 - 380} y={50} color="#c084fc" startFrame={750} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={780} />

          <Dialogue
            speaker="architect"
            text="Monoliths work great for startups and small teams. But at scale, you hit some challenges. Let me show you the pain points."
            x={width - 750}
            y={height - 280}
            startFrame={810}
            maxWidth={580}
          />

          {/* Problems List */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 160,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              ⚠️ Challenges at Scale
            </div>

            {/* Problem 1: Scaling */}
            <div
              style={{
                backgroundColor: '#7f1d1d',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                width: 850,
                opacity: frame >= 870 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#fca5a5', fontWeight: 'bold', marginBottom: 10}}>
                1. All-or-Nothing Scaling
              </div>
              <div style={{fontSize: 14, color: '#fecaca', lineHeight: 1.8}}>
                Payment service gets 10x traffic on Black Friday? You must scale the ENTIRE monolith, not just payments.
                Expensive and wasteful.
              </div>
            </div>

            {/* Problem 2: Deployment */}
            <div
              style={{
                backgroundColor: '#78350f',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                width: 850,
                opacity: frame >= 960 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 10}}>
                2. Risky Deployments
              </div>
              <div style={{fontSize: 14, color: '#fde68a', lineHeight: 1.8}}>
                Fix a bug in notifications? Deploy the whole app. One bad line of code can take down EVERYTHING. High risk,
                slow releases.
              </div>
            </div>

            {/* Problem 3: Team Coordination */}
            <div
              style={{
                backgroundColor: '#4c1d95',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                width: 850,
                opacity: frame >= 1050 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                3. Team Bottlenecks
              </div>
              <div style={{fontSize: 14, color: '#e9d5ff', lineHeight: 1.8}}>
                50 developers working on the same codebase. Merge conflicts, code review delays, stepping on each other's toes.
                Productivity drops.
              </div>
            </div>

            {/* Problem 4: Technology Lock-in */}
            <div
              style={{
                backgroundColor: '#134e4a',
                padding: 20,
                borderRadius: 12,
                width: 850,
                opacity: frame >= 1140 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#5eead4', fontWeight: 'bold', marginBottom: 10}}>
                4. Technology Lock-in
              </div>
              <div style={{fontSize: 14, color: '#ccfbf1', lineHeight: 1.8}}>
                Chose Java 10 years ago? Stuck with it. Can't use Python for ML features or Go for high-performance services.
                One stack for everything.
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

      {/* Scene 3: Enter Microservices (45-65s / 1350-1950 frames) */}
      {frame >= 1350 && frame < 1950 && (
        <>
          <Title text="Enter Microservices" x={width / 2 - 330} y={50} color="#c084fc" startFrame={1350} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={1380} />

          <Dialogue
            speaker="developer"
            text="So microservices split the monolith into smaller, independent services that can scale and deploy separately?"
            x={100}
            y={height - 280}
            startFrame={1410}
            maxWidth={650}
          />

          {/* Microservices Architecture */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 1500 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🎯 Microservices Architecture
            </div>

            {/* Show services as separate boxes */}
            <div style={{position: 'relative', height: 450}}>
              {/* Row 1 */}
              <Box
                text="👤 User Service"
                x={0}
                y={0}
                width={170}
                height={90}
                color="#7c3aed"
                startFrame={1530}
                fontSize={14}
              />
              <div style={{position: 'absolute', left: 10, top: 95, fontSize: 11, color: '#94a3b8', opacity: frame >= 1560 ? 1 : 0}}>
                💾 User DB
              </div>

              <Box
                text="📦 Product Service"
                x={200}
                y={0}
                width={170}
                height={90}
                color="#0ea5e9"
                startFrame={1560}
                fontSize={14}
              />
              <div style={{position: 'absolute', left: 210, top: 95, fontSize: 11, color: '#94a3b8', opacity: frame >= 1590 ? 1 : 0}}>
                💾 Product DB
              </div>

              <Box
                text="🛒 Order Service"
                x={400}
                y={0}
                width={170}
                height={90}
                color="#10b981"
                startFrame={1590}
                fontSize={14}
              />
              <div style={{position: 'absolute', left: 410, top: 95, fontSize: 11, color: '#94a3b8', opacity: frame >= 1620 ? 1 : 0}}>
                💾 Order DB
              </div>

              {/* Row 2 */}
              <Box
                text="💳 Payment Service"
                x={0}
                y={150}
                width={170}
                height={90}
                color="#f59e0b"
                startFrame={1620}
                fontSize={14}
              />
              <div style={{position: 'absolute', left: 10, top: 245, fontSize: 11, color: '#94a3b8', opacity: frame >= 1650 ? 1 : 0}}>
                💾 Payment DB
              </div>

              <Box
                text="📊 Inventory Service"
                x={200}
                y={150}
                width={170}
                height={90}
                color="#ec4899"
                startFrame={1650}
                fontSize={13}
              />
              <div style={{position: 'absolute', left: 210, top: 245, fontSize: 11, color: '#94a3b8', opacity: frame >= 1680 ? 1 : 0}}>
                💾 Inventory DB
              </div>

              <Box
                text="📧 Notification Service"
                x={400}
                y={150}
                width={170}
                height={90}
                color="#06b6d4"
                startFrame={1680}
                fontSize={13}
              />
              <div style={{position: 'absolute', left: 410, top: 245, fontSize: 11, color: '#94a3b8', opacity: frame >= 1710 ? 1 : 0}}>
                💾 Notification DB
              </div>

              {/* API Gateway at bottom */}
              <div style={{opacity: frame >= 1740 ? 1 : 0}}>
                <Box
                  text="🌐 API Gateway"
                  x={150}
                  y={310}
                  width={280}
                  height={70}
                  color="#6366f1"
                  startFrame={1740}
                  fontSize={18}
                />
                <Arrow x1={190} y1={310} x2={85} y2={240} color="#22d3ee" startFrame={1770} />
                <Arrow x1={290} y1={310} x2={285} y2={240} color="#22d3ee" startFrame={1770} />
                <Arrow x1={390} y1={310} x2={485} y2={240} color="#22d3ee" startFrame={1770} />
              </div>

              {/* User request arrow */}
              <div style={{opacity: frame >= 1800 ? 1 : 0}}>
                <Arrow x1={290} y1={460} x2={290} y2={380} color="#10b981" startFrame={1800} />
                <div
                  style={{
                    position: 'absolute',
                    left: 230,
                    top: 420,
                    fontSize: 14,
                    color: '#10b981',
                    fontWeight: 'bold',
                  }}
                >
                  📱 User Request
                </div>
              </div>
            </div>
          </div>

          {/* Benefits on the right */}
          <div
            style={{
              position: 'absolute',
              right: 60,
              top: 180,
              width: 420,
              backgroundColor: '#1e293b',
              padding: 20,
              borderRadius: 12,
              border: '2px solid #10b981',
              opacity: frame >= 1830 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 15}}>
              ✅ Benefits
            </div>
            <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 2}}>
              <div style={{opacity: frame >= 1860 ? 1 : 0}}>
                • <strong>Independent scaling</strong><br />
              </div>
              <div style={{opacity: frame >= 1890 ? 1 : 0}}>
                • <strong>Isolated deployments</strong><br />
              </div>
              <div style={{opacity: frame >= 1920 ? 1 : 0}}>
                • <strong>Team autonomy</strong><br />
              </div>
              <div style={{opacity: frame >= 1950 ? 1 : 0}}>
                • <strong>Technology flexibility</strong>
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

      {/* Scene 4: When to Use Each (65-90s / 1950-2700 frames) */}
      {frame >= 1950 && frame < 2700 && (
        <>
          <Title text="When to Use Each?" x={width / 2 - 330} y={50} color="#c084fc" startFrame={1950} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={1980} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2010} />

          {/* Decision Matrix */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 160,
              width: 1000,
              opacity: frame >= 2040 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25, textAlign: 'center'}}>
              🎯 The Decision Matrix
            </div>

            <div style={{display: 'flex', gap: 30}}>
              {/* Start with Monolith */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 25,
                  borderRadius: 12,
                  border: '3px solid #3b82f6',
                  opacity: frame >= 2100 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 20, color: '#3b82f6', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  🏛️ Start with Monolith
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 2}}>
                  <strong style={{color: '#22d3ee'}}>When:</strong><br />
                  • Team {'<'} 10 people<br />
                  • MVP / Early stage<br />
                  • Simple domain<br />
                  • Limited traffic<br />
                  <br />
                  <strong style={{color: '#10b981'}}>Benefits:</strong><br />
                  • Faster development<br />
                  • Easier debugging<br />
                  • Simpler deployment<br />
                  • Lower ops overhead
                </div>
              </div>

              {/* Move to Microservices */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 25,
                  borderRadius: 12,
                  border: '3px solid #10b981',
                  opacity: frame >= 2190 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 15, textAlign: 'center'}}>
                  🎯 Move to Microservices
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 2}}>
                  <strong style={{color: '#22d3ee'}}>When:</strong><br />
                  • Team {'>'} 20 people<br />
                  • Scaling bottlenecks<br />
                  • Different scaling needs<br />
                  • Multiple domains<br />
                  <br />
                  <strong style={{color: '#f59e0b'}}>Trade-offs:</strong><br />
                  • Higher complexity<br />
                  • Network overhead<br />
                  • Distributed debugging<br />
                  • Need DevOps expertise
                </div>
              </div>
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="Start simple with a monolith. As you grow and hit scaling issues, decompose strategically. Netflix started as a monolith, so did Amazon. Don't prematurely optimize!"
            x={width - 750}
            y={height - 280}
            startFrame={2280}
            maxWidth={580}
          />

          <Dialogue
            speaker="developer"
            text="Makes sense! Build what you need now, not what you might need later. When the pain of scaling the monolith exceeds the complexity of microservices, that's when we migrate."
            x={100}
            y={height - 280}
            startFrame={2430}
            maxWidth={650}
          />

          {/* Final Note */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 620,
              width: 900,
              backgroundColor: '#0f172a',
              padding: 20,
              borderRadius: 10,
              border: '2px solid #7c3aed',
              opacity: frame >= 2580 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 16, color: '#c084fc', fontWeight: 'bold', textAlign: 'center'}}>
              💡 Pro Tip: You can also do "Modular Monolith" - organized like microservices but deployed as one. Best of both
              worlds for medium scale!
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
    </AbsoluteFill>
  );
};
