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

export const MicroservicesCommunication: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Synchronous vs Asynchronous (0-30s / 0-900 frames) */}
      {frame >= 0 && frame < 900 && (
        <>
          <Title text="Microservices Communication" x={width / 2 - 500} y={50} color="#c084fc" startFrame={0} />

          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={30} />
          <Character type="developer" x={200} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="architect"
            text="Without a shared database, services communicate via APIs. Two main patterns: Synchronous (request-response) and Asynchronous (events/messages)."
            x={width - 750}
            y={height - 280}
            startFrame={90}
            maxWidth={580}
          />

          {/* Sync vs Async Comparison */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 210 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              Communication Patterns
            </div>

            <div style={{display: 'flex', gap: 60}}>
              {/* Synchronous */}
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
                  ⚡ Synchronous
                </div>

                <div style={{position: 'relative', height: 200, marginBottom: 15}}>
                  <Box
                    text="Order Service"
                    x={20}
                    y={0}
                    width={140}
                    height={60}
                    color="#10b981"
                    startFrame={270}
                    fontSize={13}
                  />
                  <Box
                    text="Payment Service"
                    x={280}
                    y={0}
                    width={140}
                    height={60}
                    color="#f59e0b"
                    startFrame={300}
                    fontSize={13}
                  />

                  <Arrow x1={160} y1={30} x2={280} y2={30} color="#22d3ee" startFrame={360} label="Request" />
                  <Arrow x1={280} y1={45} x2={160} y2={45} color="#10b981" startFrame={420} label="Response" />

                  <div
                    style={{
                      position: 'absolute',
                      left: 20,
                      top: 90,
                      fontSize: 13,
                      color: '#cbd5e1',
                      opacity: frame >= 480 ? 1 : 0,
                    }}
                  >
                    <strong style={{color: '#0ea5e9'}}>Waits for response</strong>
                    <br />
                    (blocking call)
                  </div>
                </div>

                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>Protocols:</strong>
                  <br />
                  • REST (HTTP/JSON)
                  <br />
                  • gRPC (Protocol Buffers)
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Use when:</strong>
                  <br />
                  • Need immediate response
                  <br />• Simple request-reply
                </div>
              </div>

              {/* Asynchronous */}
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
                  📨 Asynchronous
                </div>

                <div style={{position: 'relative', height: 200, marginBottom: 15}}>
                  <Box
                    text="Order Service"
                    x={10}
                    y={0}
                    width={130}
                    height={60}
                    color="#10b981"
                    startFrame={540}
                    fontSize={13}
                  />
                  <Box text="Message Queue" x={160} y={0} width={130} height={60} color="#7c3aed" startFrame={570} fontSize={12} />
                  <Box
                    text="Email Service"
                    x={310}
                    y={0}
                    width={130}
                    height={60}
                    color="#ec4899"
                    startFrame={600}
                    fontSize={12}
                  />

                  <Arrow x1={140} y1={30} x2={160} y2={30} color="#22d3ee" startFrame={630} label="Publish" />
                  <Arrow x1={290} y1={30} x2={310} y2={30} color="#c084fc" startFrame={690} label="Subscribe" />

                  <div
                    style={{
                      position: 'absolute',
                      left: 10,
                      top: 90,
                      fontSize: 13,
                      color: '#cbd5e1',
                      opacity: frame >= 750 ? 1 : 0,
                    }}
                  >
                    <strong style={{color: '#c084fc'}}>Fire and forget</strong>
                    <br />
                    (non-blocking)
                  </div>
                </div>

                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>Technologies:</strong>
                  <br />
                  • Kafka, RabbitMQ
                  <br />
                  • AWS SQS, SNS
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Use when:</strong>
                  <br />
                  • Decoupling services
                  <br />• Long-running tasks
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

      {/* Scene 2: API Gateway Pattern (30-55s / 900-1650 frames) */}
      {frame >= 900 && frame < 1650 && (
        <>
          <Title text="API Gateway Pattern" x={width / 2 - 370} y={50} color="#c084fc" startFrame={900} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={930} />

          <Dialogue
            speaker="developer"
            text="With 10 microservices, the mobile app needs to call all of them separately? That's a lot of network calls!"
            x={100}
            y={height - 280}
            startFrame={960}
            maxWidth={650}
          />

          {/* API Gateway Diagram */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 160,
              opacity: frame >= 1050 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🌐 API Gateway: Single Entry Point
            </div>

            <div style={{position: 'relative', height: 450}}>
              {/* Clients */}
              <div style={{opacity: frame >= 1080 ? 1 : 0}}>
                <Box text="📱 Mobile App" x={0} y={0} width={140} height={60} color="#6366f1" startFrame={1080} fontSize={14} />
                <Box text="💻 Web App" x={0} y={75} width={140} height={60} color="#8b5cf6" startFrame={1110} fontSize={14} />
                <Box text="🖥️ Desktop App" x={0} y={150} width={140} height={60} color="#a855f7" startFrame={1140} fontSize={14} />
              </div>

              {/* API Gateway */}
              <div style={{opacity: frame >= 1170 ? 1 : 0}}>
                <div
                  style={{
                    position: 'absolute',
                    left: 240,
                    top: 30,
                    width: 200,
                    height: 150,
                    backgroundColor: '#0ea5e9',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  🌐 API Gateway
                </div>
              </div>

              {/* Arrows from clients to gateway */}
              <Arrow x1={140} y1={30} x2={240} y2={105} color="#22d3ee" startFrame={1200} />
              <Arrow x1={140} y1={105} x2={240} y2={105} color="#22d3ee" startFrame={1200} />
              <Arrow x1={140} y1={180} x2={240} y2={105} color="#22d3ee" startFrame={1200} />

              {/* Microservices */}
              <div style={{opacity: frame >= 1260 ? 1 : 0}}>
                <Box text="👤 User" x={550} y={0} width={110} height={50} color="#7c3aed" startFrame={1260} fontSize={13} />
                <Box text="📦 Product" x={680} y={0} width={110} height={50} color="#0ea5e9" startFrame={1290} fontSize={13} />
                <Box text="🛒 Order" x={810} y={0} width={110} height={50} color="#10b981" startFrame={1320} fontSize={13} />
                <Box text="💳 Payment" x={550} y={70} width={110} height={50} color="#f59e0b" startFrame={1350} fontSize={13} />
                <Box text="📊 Inventory" x={680} y={70} width={110} height={50} color="#ec4899" startFrame={1380} fontSize={13} />
                <Box text="📧 Notify" x={810} y={70} width={110} height={50} color="#06b6d4" startFrame={1410} fontSize={13} />
              </div>

              {/* Arrows from gateway to services */}
              <Arrow x1={440} y1={80} x2={550} y2={25} color="#10b981" startFrame={1440} />
              <Arrow x1={440} y1={90} x2={680} y2={25} color="#10b981" startFrame={1440} />
              <Arrow x1={440} y1={100} x2={810} y2={25} color="#10b981" startFrame={1440} />
              <Arrow x1={440} y1={110} x2={550} y2={95} color="#10b981" startFrame={1440} />
              <Arrow x1={440} y1={120} x2={680} y2={95} color="#10b981" startFrame={1440} />
              <Arrow x1={440} y1={130} x2={810} y2={95} color="#10b981" startFrame={1440} />

              {/* Benefits */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 240,
                  width: 950,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  opacity: frame >= 1500 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#22d3ee', fontWeight: 'bold', marginBottom: 10}}>
                  ✅ API Gateway Benefits
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong>• Request Routing:</strong> Routes /users to User Service, /products to Product Service
                  <br />
                  <strong>• API Composition:</strong> Aggregates data from multiple services into one response
                  <br />
                  <strong>• Authentication:</strong> Validates JWT tokens before routing to services
                  <br />
                  <strong>• Rate Limiting:</strong> Prevents abuse, throttles requests per client
                  <br />
                  <strong>• Protocol Translation:</strong> REST → gRPC, HTTP → WebSocket
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

      {/* Scene 3: Backend for Frontend (BFF) (55-75s / 1650-2250 frames) */}
      {frame >= 1650 && frame < 2250 && (
        <>
          <Title text="Backend for Frontend (BFF)" x={width / 2 - 480} y={50} color="#c084fc" startFrame={1650} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={1680} />

          <Dialogue
            speaker="architect"
            text="When mobile needs different data than web (smaller payloads, different fields), use BFF pattern - one API gateway per client type."
            x={width - 750}
            y={height - 280}
            startFrame={1710}
            maxWidth={580}
          />

          {/* BFF Pattern */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 160,
              opacity: frame >= 1800 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              📱 Backend for Frontend Pattern
            </div>

            <div style={{position: 'relative', height: 400}}>
              {/* Clients */}
              <Box text="📱 Mobile" x={0} y={0} width={140} height={70} color="#6366f1" startFrame={1830} fontSize={16} />
              <Box text="💻 Web" x={0} y={110} width={140} height={70} color="#8b5cf6" startFrame={1860} fontSize={16} />
              <Box text="🖥️ Desktop" x={0} y={220} width={140} height={70} color="#a855f7" startFrame={1890} fontSize={16} />

              {/* BFF Gateways */}
              <Box text="Mobile BFF" x={240} y={0} width={160} height={70} color="#0ea5e9" startFrame={1920} fontSize={15} />
              <Box text="Web BFF" x={240} y={110} width={160} height={70} color="#0ea5e9" startFrame={1950} fontSize={15} />
              <Box text="Desktop BFF" x={240} y={220} width={160} height={70} color="#0ea5e9" startFrame={1980} fontSize={15} />

              <Arrow x1={140} y1={35} x2={240} y2={35} color="#22d3ee" startFrame={2010} />
              <Arrow x1={140} y1={145} x2={240} y2={145} color="#22d3ee" startFrame={2010} />
              <Arrow x1={140} y1={255} x2={240} y2={255} color="#22d3ee" startFrame={2010} />

              {/* Shared Microservices */}
              <div
                style={{
                  position: 'absolute',
                  left: 520,
                  top: 60,
                  width: 280,
                  height: 180,
                  backgroundColor: '#1e293b',
                  borderRadius: 12,
                  border: '2px solid #10b981',
                  padding: 15,
                  opacity: frame >= 2040 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 15, color: '#10b981', fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>
                  Shared Services
                </div>
                <div style={{fontSize: 13, color: '#cbd5e1', lineHeight: 1.8}}>
                  • User Service
                  <br />
                  • Product Service
                  <br />
                  • Order Service
                  <br />
                  • Payment Service
                  <br />• Inventory Service
                </div>
              </div>

              <Arrow x1={400} y1={35} x2={520} y2={100} color="#10b981" startFrame={2070} />
              <Arrow x1={400} y1={145} x2={520} y2={150} color="#10b981" startFrame={2070} />
              <Arrow x1={400} y1={255} x2={520} y2={200} color="#10b981" startFrame={2070} />

              {/* Example */}
              <div
                style={{
                  position: 'absolute',
                  left: 840,
                  top: 0,
                  width: 380,
                  backgroundColor: '#0f172a',
                  padding: 18,
                  borderRadius: 10,
                  border: '2px solid #fbbf24',
                  opacity: frame >= 2100 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 15, color: '#fbbf24', fontWeight: 'bold', marginBottom: 10}}>
                  Example: Product Page
                </div>
                <div style={{fontSize: 12, color: '#cbd5e1', lineHeight: 1.8}}>
                  <strong style={{color: '#6366f1'}}>📱 Mobile BFF returns:</strong>
                  <br />
                  • Title, price, thumbnail
                  <br />
                  • Star rating only
                  <br />
                  • 50 chars description
                  <br />
                  <br />
                  <strong style={{color: '#8b5cf6'}}>💻 Web BFF returns:</strong>
                  <br />
                  • All product details
                  <br />
                  • Full reviews with text
                  <br />
                  • HD images gallery
                  <br />
                  • Related products
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>Same services, different aggregation!</strong>
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

      {/* Scene 4: Service Mesh (75-100s / 2250-3000 frames) */}
      {frame >= 2250 && frame < 3000 && (
        <>
          <Title text="Service Mesh" x={width / 2 - 230} y={50} color="#c084fc" startFrame={2250} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2280} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2310} />

          {frame < 2460 && (
            <Dialogue
              speaker="developer"
              text="How do I handle retries, timeouts, circuit breakers for all these service-to-service calls? Seems like a lot of code!"
              x={100}
              y={height - 280}
              startFrame={2340}
              maxWidth={650}
            />
          )}

          {frame >= 2460 && frame < 2910 && (
            <Dialogue
              speaker="architect"
              text="Service Mesh! Infrastructure layer that handles all network concerns transparently using sidecar proxies. No code changes needed!"
              x={width - 750}
              y={height - 280}
              startFrame={2460}
              maxWidth={580}
            />
          )}

          {frame >= 2910 && (
            <Dialogue
              speaker="developer"
              text="This is great! We've covered communication patterns, but what happens when services fail? How do we build resilient systems?"
              x={100}
              y={height - 280}
              startFrame={2910}
              maxWidth={650}
            />
          )}

          {/* Service Mesh Visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 480,
              top: 160,
              opacity: frame >= 2550 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🕸️ Service Mesh (Istio / Linkerd)
            </div>

            <div style={{position: 'relative', height: 320}}>
              {/* Service 1 with sidecar */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 280,
                  height: 140,
                  border: '2px dashed #64748b',
                  borderRadius: 10,
                  padding: 10,
                  opacity: frame >= 2580 ? 1 : 0,
                }}
              >
                <Box text="Order Service" x={70} y={10} width={140} height={60} color="#10b981" startFrame={2610} fontSize={14} />
                <Box text="Envoy Proxy" x={70} y={80} width={140} height={50} color="#6366f1" startFrame={2640} fontSize={12} />
                <div style={{position: 'absolute', left: 5, top: 5, fontSize: 11, color: '#64748b'}}>Pod</div>
              </div>

              {/* Service 2 with sidecar */}
              <div
                style={{
                  position: 'absolute',
                  left: 360,
                  top: 0,
                  width: 280,
                  height: 140,
                  border: '2px dashed #64748b',
                  borderRadius: 10,
                  padding: 10,
                  opacity: frame >= 2670 ? 1 : 0,
                }}
              >
                <Box
                  text="Payment Service"
                  x={70}
                  y={10}
                  width={140}
                  height={60}
                  color="#f59e0b"
                  startFrame={2700}
                  fontSize={13}
                />
                <Box text="Envoy Proxy" x={70} y={80} width={140} height={50} color="#6366f1" startFrame={2730} fontSize={12} />
                <div style={{position: 'absolute', left: 5, top: 5, fontSize: 11, color: '#64748b'}}>Pod</div>
              </div>

              {/* Service 3 with sidecar */}
              <div
                style={{
                  position: 'absolute',
                  left: 720,
                  top: 0,
                  width: 280,
                  height: 140,
                  border: '2px dashed #64748b',
                  borderRadius: 10,
                  padding: 10,
                  opacity: frame >= 2760 ? 1 : 0,
                }}
              >
                <Box text="User Service" x={70} y={10} width={140} height={60} color="#7c3aed" startFrame={2790} fontSize={14} />
                <Box text="Envoy Proxy" x={70} y={80} width={140} height={50} color="#6366f1" startFrame={2820} fontSize={12} />
                <div style={{position: 'absolute', left: 5, top: 5, fontSize: 11, color: '#64748b'}}>Pod</div>
              </div>

              {/* Mesh connections */}
              <Arrow x1={210} y1={105} x2={430} y2={105} color="#22d3ee" startFrame={2850} />
              <Arrow x1={570} y1={105} x2={790} y2={105} color="#22d3ee" startFrame={2850} />

              {/* Service Mesh Benefits */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 170,
                  width: 1000,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  opacity: frame >= 2880 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 16, color: '#22d3ee', fontWeight: 'bold', marginBottom: 12}}>
                  ✅ Service Mesh Handles
                </div>
                <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 2, display: 'flex', gap: 40}}>
                  <div style={{flex: 1}}>
                    <strong style={{color: '#10b981'}}>• Traffic Management</strong>
                    <br />
                    Load balancing, routing, retries
                    <br />
                    <br />
                    <strong style={{color: '#0ea5e9'}}>• Security</strong>
                    <br />
                    mTLS encryption, authentication
                  </div>
                  <div style={{flex: 1}}>
                    <strong style={{color: '#f59e0b'}}>• Observability</strong>
                    <br />
                    Metrics, tracing, logging
                    <br />
                    <br />
                    <strong style={{color: '#c084fc'}}>• Resilience</strong>
                    <br />
                    Circuit breakers, timeouts, failover
                  </div>
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
    </AbsoluteFill>
  );
};
