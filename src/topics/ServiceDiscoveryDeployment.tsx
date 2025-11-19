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
  dashed?: boolean;
}> = ({x1, y1, x2, y2, color = '#ffffff', startFrame = 0, label, dashed = false}) => {
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
      {label && (
        <div
          style={{
            position: 'absolute',
            left: (x1 + x2) / 2 - 30,
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

export const ServiceDiscoveryDeployment: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Service Discovery Problem (0-25s / 0-750 frames) */}
      {frame >= 0 && frame < 750 && (
        <>
          <Title text="Service Discovery & Deployment" x={width / 2 - 560} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={width * 0.25} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="With microservices auto-scaling and restarting, how does Order Service find Payment Service? IPs keep changing!"
            x={width * 0.10}
            y={height * 0.64}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="That's the Service Discovery problem! Services register themselves in a registry, and other services query it to find them dynamically."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={180}
            maxWidth={580}
          />

          {/* Service Discovery Visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 180,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              📋 Service Registry Pattern
            </div>

            <div style={{position: 'relative', height: 350}}>
              {/* Service Registry */}
              <div
                style={{
                  position: 'absolute',
                  left: 400,
                  top: 0,
                  width: 200,
                  height: 120,
                  backgroundColor: '#7c3aed',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  opacity: frame >= 330 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 28, fontWeight: 'bold', color: '#fff'}}>
                  Service Registry
                </div>
                <div style={{fontSize: 18, color: '#e9d5ff', marginTop: 8}}>
                  (Consul, Eureka, etcd)
                </div>
              </div>

              {/* Services */}
              <Box text="Payment 1" x={0} y={170} width={120} height={50} color="#f59e0b" startFrame={390} fontSize={20} />
              <Box text="Payment 2" x={140} y={170} width={120} height={50} color="#f59e0b" startFrame={420} fontSize={20} />
              <Box text="Order 1" x={820} y={170} width={120} height={50} color="#10b981" startFrame={450} fontSize={20} />

              {/* Registration arrows */}
              <Arrow x1={60} y1={170} x2={450} y2={120} color="#22d3ee" startFrame={480} label="Register" />
              <Arrow x1={200} y1={170} x2={480} y2={120} color="#22d3ee" startFrame={510} label="Register" />

              {/* Discovery arrow */}
              <Arrow x1={820} y1={195} x2={600} y2={100} color="#10b981" startFrame={570} label="Query" />
              <Arrow x1={600} y1={80} x2={820} y2={170} color="#c084fc" startFrame={600} dashed label="Response" />

              {/* Explanation */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 250,
                  width: 1000,
                  backgroundColor: '#1e293b',
                  padding: 18,
                  borderRadius: 12,
                  opacity: frame >= 630 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 2}}>
                  <strong style={{color: '#22d3ee'}}>1. Register:</strong> Payment instances register with registry (IP,
                  port, health endpoint)
                  <br />
                  <strong style={{color: '#10b981'}}>2. Discover:</strong> Order Service queries registry: "Where are
                  Payment instances?"
                  <br />
                  <strong style={{color: '#c084fc'}}>3. Response:</strong> Get list of healthy instances with load balancing
                </div>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 2: Health Checks & Heartbeats (25-45s / 750-1350 frames) */}
      {frame >= 750 && frame < 1350 && (
        <>
          <Title text="Health Checks & Self-Healing" x={width / 2 - 480} y={50} color="#c084fc" startFrame={750} />

          <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={780} />

          <Dialogue
            speaker="architect"
            text="Services send heartbeats to prove they're healthy. If heartbeats stop, the registry removes them. Automatic self-healing!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={810}
            maxWidth={580}
          />

          {/* Health Check Flow */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 480,
              top: 170,
              opacity: frame >= 900 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              💓 Health Check Mechanism
            </div>

            <div style={{position: 'relative', height: 300}}>
              {/* Timeline */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 960,
                  backgroundColor: '#1e293b',
                  padding: 25,
                  borderRadius: 12,
                  border: '2px solid #10b981',
                }}
              >
                <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 2}}>
                  <div style={{opacity: frame >= 930 ? 1 : 0}}>
                    <strong style={{color: '#22d3ee'}}>t=0s:</strong> Payment Service starts, registers with registry
                  </div>
                  <div style={{opacity: frame >= 1020 ? 1 : 0}}>
                    <strong style={{color: '#22d3ee'}}>t=10s:</strong> Heartbeat sent → "I'm healthy!" ✅
                  </div>
                  <div style={{opacity: frame >= 1110 ? 1 : 0}}>
                    <strong style={{color: '#22d3ee'}}>t=20s:</strong> Heartbeat sent → "I'm healthy!" ✅
                  </div>
                  <div style={{opacity: frame >= 1200 ? 1 : 0}}>
                    <strong style={{color: '#ef4444'}}>t=30s:</strong> Service crashes! No heartbeat ❌
                  </div>
                  <div style={{opacity: frame >= 1260 ? 1 : 0}}>
                    <strong style={{color: '#f59e0b'}}>t=60s:</strong> Registry timeout - marks service as DOWN
                  </div>
                  <div style={{opacity: frame >= 1290 ? 1 : 0}}>
                    <strong style={{color: '#10b981'}}>Result:</strong> Traffic automatically routed to healthy instances
                  </div>
                </div>
              </div>

              {/* Health Check Endpoint */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 200,
                  width: 960,
                  backgroundColor: '#0f172a',
                  padding: 20,
                  borderRadius: 12,
                  border: '2px solid #0ea5e9',
                  opacity: frame >= 1230 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 22, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 10}}>
                  💻 Health Check Endpoint
                </div>
                <pre
                  style={{
                    fontSize: 20,
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: 'monospace',
                  }}
                >
{`GET /health
Response: { "status": "UP", "database": "UP", "cache": "UP" }`}
                </pre>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 3: Deployment Strategies (45-70s / 1350-2100 frames) */}
      {frame >= 1350 && frame < 2100 && (
        <>
          <Title text="Deployment Strategies" x={width / 2 - 400} y={50} color="#c084fc" startFrame={1350} />

          <Character type="developer" x={width * 0.25} y={height / 2 + 100} startFrame={1380} />

          <Dialogue
            speaker="developer"
            text="How do I deploy new versions without downtime? Just replace all instances?"
            x={width * 0.10}
            y={height * 0.64}
            startFrame={1410}
            maxWidth={650}
          />

          {/* Deployment Patterns */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 540,
              top: 160,
              opacity: frame >= 1500 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🚀 Zero-Downtime Deployment
            </div>

            <div style={{display: 'flex', gap: 25, marginBottom: 20}}>
              {/* Blue-Green */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #0ea5e9',
                }}
              >
                <div style={{fontSize: 28, color: '#0ea5e9', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  🔵🟢 Blue-Green
                </div>
                <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>How:</strong>
                  <br />
                  • Run two identical environments
                  <br />
                  • Blue = current, Green = new
                  <br />
                  • Switch traffic instantly
                  <br />
                  • Easy rollback (switch back)
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Best for:</strong>
                  <br />
                  Critical services, instant rollback needed
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>❌ Cost:</strong>
                  <br />
                  2x infrastructure during deployment
                </div>
              </div>

              {/* Canary */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1e293b',
                  padding: 20,
                  borderRadius: 12,
                  border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                }}
              >
                <div style={{fontSize: 28, color: '#f59e0b', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                  🐤 Canary Release
                </div>
                <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.9}}>
                  <strong style={{color: '#22d3ee'}}>How:</strong>
                  <br />
                  • Deploy to small % of users (5%)
                  <br />
                  • Monitor metrics & errors
                  <br />
                  • Gradually increase to 100%
                  <br />
                  • Rollback if issues detected
                  <br />
                  <br />
                  <strong style={{color: '#10b981'}}>✅ Best for:</strong>
                  <br />
                  Risk mitigation, gradual rollout
                  <br />
                  <br />
                  <strong style={{color: '#ef4444'}}>❌ Complexity:</strong>
                  <br />
                  Need traffic routing & monitoring
                </div>
              </div>
            </div>

            {/* Rolling Deployment */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #10b981',
                opacity: frame >= 1800 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 12}}>
                🔄 Rolling Deployment (Most Common)
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.9}}>
                <strong style={{color: '#22d3ee'}}>How it works:</strong> Replace instances one by one or in small batches
                <br />
                <br />
                <strong>Step 1:</strong> Deploy v2 to instance 1, wait for health check
                <br />
                <strong>Step 2:</strong> Deploy v2 to instance 2, wait for health check
                <br />
                <strong>Step 3:</strong> Continue until all instances upgraded
                <br />
                <br />
                <strong style={{color: '#10b981'}}>✅ Benefit:</strong> No extra infrastructure, gradual, safe
              </div>
            </div>
          </div>

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 4: Container Orchestration Intro (70-90s / 2100-2700 frames) */}
      {frame >= 2100 && frame < 2700 && (
        <>
          <Title text="Container Orchestration" x={width / 2 - 420} y={50} color="#c084fc" startFrame={2100} />

          <Character type="architect" x={width * 0.75} y={height / 2 - 100} startFrame={2130} />
          <Character type="developer" x={width * 0.25} y={height / 2 - 100} startFrame={2160} />

          <Dialogue
            speaker="architect"
            text="All this - service discovery, health checks, deployments - is handled automatically by Kubernetes. It's become the standard for microservices!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={2190}
            maxWidth={580}
          />

          {/* Kubernetes Overview */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 170,
              opacity: frame >= 2280 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#6366f1', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              ☸️ Kubernetes (K8s) Handles Everything
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '3px solid #6366f1',
              }}
            >
              <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 2.2}}>
                <div style={{opacity: frame >= 2340 ? 1 : 0}}>
                  <strong style={{color: '#22d3ee'}}>• Service Discovery:</strong> Built-in DNS, service names
                </div>
                <div style={{opacity: frame >= 2400 ? 1 : 0}}>
                  <strong style={{color: '#10b981'}}>• Health Checks:</strong> Liveness & readiness probes
                </div>
                <div style={{opacity: frame >= 2460 ? 1 : 0}}>
                  <strong style={{color: '#f59e0b'}}>• Auto-Scaling:</strong> Horizontal Pod Autoscaler (HPA)
                </div>
                <div style={{opacity: frame >= 2520 ? 1 : 0}}>
                  <strong style={{color: '#c084fc'}}>• Rolling Updates:</strong> Declarative deployments with rollback
                </div>
                <div style={{opacity: frame >= 2580 ? 1 : 0}}>
                  <strong style={{color: '#ec4899'}}>• Load Balancing:</strong> Service mesh integration (Istio/Linkerd)
                </div>
                <div style={{opacity: frame >= 2640 ? 1 : 0}}>
                  <strong style={{color: '#0ea5e9'}}>• Self-Healing:</strong> Automatic restarts, rescheduling
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                backgroundColor: '#0f172a',
                padding: 18,
                borderRadius: 10,
                border: '2px solid #10b981',
                opacity: frame >= 2580 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', textAlign: 'center'}}>
                💡 K8s is the operating system for microservices - abstracting away infrastructure complexity!
              </div>
            </div>
          </div>

          {frame < 2580 && (
            <Dialogue
              speaker="architect"
              text="Now you know how services find each other, stay healthy, and deploy safely. This is the operational foundation for microservices!"
              x={width * 0.60}
              y={height * 0.64}
              startFrame={2340}
              maxWidth={580}
            />
          )}

          {frame >= 2580 && (
            <Dialogue
              speaker="developer"
              text="Perfect! Containerize with Docker, deploy to Kubernetes, and it handles discovery, scaling, and deployments automatically. Ready for production!"
              x={width * 0.10}
              y={height * 0.64}
              startFrame={2580}
              maxWidth={650}
            />
          )}

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
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
