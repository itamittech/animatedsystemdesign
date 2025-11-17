import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Fault Tolerance Fundamentals (Phase 7.1)
 * Duration: 70 seconds (2100 frames at 30fps)
 *
 * Scene 1 (0-18s): Introduction - Why Systems Fail
 * Scene 2 (18-38s): Single Points of Failure & Redundancy
 * Scene 3 (38-55s): Failure Detection & Graceful Degradation
 * Scene 4 (55-70s): Chaos Engineering Principles
 */

export const FaultToleranceFundamentals: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  // Scene timing
  const scene1End = 540;  // 0-18s
  const scene2End = 1140; // 18-38s
  const scene3End = 1650; // 38-55s
  const scene4End = 2100; // 55-70s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - Why Systems Fail */}
      {frame < scene1End && (
        <>
          <Title text="Fault Tolerance Fundamentals" subtitle="Building Resilient Systems" />

          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="Our database server crashed and took down the entire application! How do we prevent this?"
            x={100}
            y={height - 280}
            startFrame={90}
          />

          <Dialogue
            speaker="architect"
            text="That's a single point of failure! Let me teach you fault tolerance - designing systems that continue working even when components fail."
            x={width - 750}
            y={height - 280}
            startFrame={240}
          />

          {/* Common Failures */}
          <div
            style={{
              position: 'absolute',
              top: 360,
              left: width / 2 - 700,
              width: 1400,
              opacity: fadeIn(frame, 390, 30),
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#ef4444',
                marginBottom: 24,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
                textShadow: '0 0 24px rgba(239, 68, 68, 0.6)',
              }}
            >
              ⚠️ Common System Failures
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center'}}>
              {[
                {icon: '💥', text: 'Hardware failures (disk, CPU, RAM)'},
                {icon: '🌐', text: 'Network partitions & latency'},
                {icon: '🐛', text: 'Software bugs & memory leaks'},
                {icon: '⚡', text: 'Power outages & datacenter issues'},
                {icon: '👤', text: 'Human errors (misconfigurations)'},
                {icon: '🔥', text: 'Cascading failures (domino effect)'},
              ].map((failure, i) => (
                <div
                  key={i}
                  style={{
                    width: 650,
                    padding: '20px 28px',
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.1))',
                    border: '2px solid #ef4444',
                    borderRadius: 12,
                    fontSize: 22,
                    color: '#fecaca',
                    fontFamily: theme.typography.body.fontFamily,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    opacity: fadeIn(frame, 420 + i * 12, 15),
                    boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                  }}
                >
                  <span style={{fontSize: 36}}>{failure.icon}</span>
                  {failure.text}
                </div>
              ))}
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

      {/* Scene 2: Single Points of Failure & Redundancy */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Redundancy & Replication" subtitle="Eliminating Single Points of Failure" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 820,
              display: 'flex',
              gap: 80,
            }}
          >
            {/* Single Point of Failure */}
            <div style={{width: 750, opacity: fadeIn(frame, scene1End + 30, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#ef4444',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(239, 68, 68, 0.6)',
                }}
              >
                ❌ Single Point of Failure
              </h2>

              <svg width="700" height="300">
                {/* Users */}
                <g opacity={fadeIn(frame, scene1End + 60, 20)}>
                  {[0, 1, 2].map((i) => (
                    <circle key={i} cx={100} cy={100 + i * 70} r="25" fill="#60a5fa" />
                  ))}
                  <text x={100} y={50} textAnchor="middle" fill="#60a5fa" fontSize="20">Users</text>
                </g>

                {/* Single Server */}
                <g opacity={fadeIn(frame, scene1End + 90, 20)}>
                  <rect x={300} y={130} width={200} height={120} rx={12} fill="#ef4444" stroke="#fca5a5" strokeWidth={3} />
                  <text x={400} y={195} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">
                    Single Server
                  </text>

                  {/* X mark */}
                  <g opacity={fadeIn(frame, scene1End + 150, 20)}>
                    <line x1={320} y1={150} x2={480} y2={230} stroke="#fff" strokeWidth={6} />
                    <line x1={480} y1={150} x2={320} y2={230} stroke="#fff" strokeWidth={6} />
                  </g>
                </g>

                {/* Arrows */}
                {[0, 1, 2].map((i) => (
                  <line
                    key={i}
                    x1={130}
                    y1={100 + i * 70}
                    x2={300}
                    y2={190}
                    stroke="#60a5fa"
                    strokeWidth={2}
                    opacity={fadeIn(frame, scene1End + 120, 15)}
                  />
                ))}
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '2px solid #ef4444',
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  💔 If this server fails:<br />
                  • Entire system goes down<br />
                  • No fallback available<br />
                  • Complete service outage
                </div>
              </div>
            </div>

            {/* Redundant Architecture */}
            <div style={{width: 750, opacity: fadeIn(frame, scene1End + 90, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#10b981',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(16, 185, 129, 0.6)',
                }}
              >
                ✅ Redundant Architecture
              </h2>

              <svg width="700" height="300">
                {/* Users */}
                <g opacity={fadeIn(frame, scene1End + 120, 20)}>
                  {[0, 1, 2].map((i) => (
                    <circle key={i} cx={100} cy={100 + i * 70} r="25" fill="#60a5fa" />
                  ))}
                  <text x={100} y={50} textAnchor="middle" fill="#60a5fa" fontSize="20">Users</text>
                </g>

                {/* Load Balancer */}
                <g opacity={fadeIn(frame, scene1End + 150, 20)}>
                  <ellipse cx={300} cy={190} rx={70} ry={50} fill="#f59e0b" stroke="#fbbf24" strokeWidth={2} />
                  <text x={300} y={198} textAnchor="middle" fill="#000" fontSize="18" fontWeight="700">LB</text>
                </g>

                {/* Multiple Servers */}
                {[0, 1, 2].map((i) => (
                  <g key={i} opacity={fadeIn(frame, scene1End + 180 + i * 15, 15)}>
                    <rect x={440} y={90 + i * 90} width={180} height={70} rx={10} fill="#10b981" stroke="#34d399" strokeWidth={2} />
                    <text x={530} y={130 + i * 90} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">
                      Server {i + 1}
                    </text>
                  </g>
                ))}

                {/* Arrows from Users to LB */}
                {[0, 1, 2].map((i) => (
                  <line
                    key={i}
                    x1={130}
                    y1={100 + i * 70}
                    x2={230}
                    y2={190}
                    stroke="#60a5fa"
                    strokeWidth={2}
                    opacity={fadeIn(frame, scene1End + 180, 15)}
                  />
                ))}

                {/* Arrows from LB to Servers */}
                {[0, 1, 2].map((i) => (
                  <line
                    key={i}
                    x1={370}
                    y1={190}
                    x2={440}
                    y2={125 + i * 90}
                    stroke="#34d399"
                    strokeWidth={2}
                    opacity={fadeIn(frame, scene1End + 210 + i * 10, 10)}
                  />
                ))}
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10b981',
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                <div style={{fontSize: 20, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  💚 If one server fails:<br />
                  • Traffic routes to healthy servers<br />
                  • No service interruption<br />
                  • N+1 redundancy (always spare capacity)
                </div>
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 300} />

          <Dialogue
            speaker="junior"
            text="So we duplicate critical components! If one fails, others take over. Smart!"
            x={100}
            y={height - 280}
            startFrame={scene1End + 330}
          />

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

      {/* Scene 3: Failure Detection & Graceful Degradation */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Detection & Degradation" subtitle="Responding to Failures" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 780,
              width: 1560,
            }}
          >
            {/* Failure Detection */}
            <div style={{marginBottom: 40, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(59, 130, 246, 0.6)',
                }}
              >
                🔍 Failure Detection
              </h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
                {[
                  {icon: '💓', title: 'Health Checks', desc: 'Periodic pings to verify service is alive'},
                  {icon: '⏱️', title: 'Timeouts', desc: 'Detect slow/hanging services'},
                  {icon: '📊', title: 'Metrics Monitoring', desc: 'Track error rates, latency spikes'},
                  {icon: '🔔', title: 'Alerts', desc: 'Notify teams when thresholds breached'},
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      width: 750,
                      padding: 20,
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                      border: '2px solid #3b82f6',
                      borderRadius: 12,
                      opacity: fadeIn(frame, scene2End + 60 + i * 15, 15),
                      boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                      <span style={{fontSize: 40}}>{item.icon}</span>
                      <div>
                        <div style={{fontSize: 24, fontWeight: 700, color: '#60a5fa', fontFamily: theme.typography.heading.fontFamily}}>
                          {item.title}
                        </div>
                        <div style={{fontSize: 20, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily}}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graceful Degradation */}
            <div style={{opacity: fadeIn(frame, scene2End + 180, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#10b981',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(16, 185, 129, 0.6)',
                }}
              >
                ⚡ Graceful Degradation
              </h2>
              <div
                style={{
                  padding: 28,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
                }}
              >
                <div style={{fontSize: 22, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                  <strong style={{color: '#6ee7b7', fontSize: 24}}>Degrade functionality, don't crash!</strong><br /><br />
                  📸 <strong>Example: E-commerce site</strong><br />
                  • Recommendation engine down? → Show popular items instead<br />
                  • Payment gateway slow? → Queue orders for processing<br />
                  • Image CDN fails? → Show placeholder images<br />
                  • Search broken? → Fallback to category browsing<br /><br />
                  💡 Partial functionality &gt; Complete outage
                </div>
              </div>
            </div>
          </div>

          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 300} />

          <Dialogue
            speaker="architect"
            text="Detect failures fast, then gracefully degrade. Users get reduced functionality rather than error pages!"
            x={width - 750}
            y={height - 280}
            startFrame={scene2End + 330}
          />

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

      {/* Scene 4: Chaos Engineering Principles */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Chaos Engineering" subtitle="Test Failures Before They Happen" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 700,
              width: 1400,
              opacity: fadeIn(frame, scene3End + 30, 25),
            }}
          >
            <div
              style={{
                padding: 32,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.15))',
                border: '3px solid #8b5cf6',
                borderRadius: 16,
                marginBottom: 30,
                boxShadow: '0 0 24px rgba(139, 92, 246, 0.4)',
              }}
            >
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#c4b5fd',
                  marginBottom: 20,
                  fontFamily: theme.typography.heading.fontFamily,
                  textAlign: 'center',
                  textShadow: '0 0 24px rgba(139, 92, 246, 0.6)',
                }}
              >
                🔥 What is Chaos Engineering?
              </h2>
              <p
                style={{
                  fontSize: 24,
                  color: '#e9d5ff',
                  fontFamily: theme.typography.body.fontFamily,
                  textAlign: 'center',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Intentionally inject failures into production to test system resilience.<br />
                <strong style={{color: '#c4b5fd'}}>Better to find weaknesses on YOUR terms!</strong>
              </p>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
              {[
                {icon: '🔌', title: 'Kill Instances', desc: 'Randomly terminate servers (Netflix Chaos Monkey)'},
                {icon: '🌐', title: 'Network Latency', desc: 'Inject delays to simulate slow networks'},
                {icon: '💣', title: 'Fail Dependencies', desc: 'Make external APIs unavailable'},
                {icon: '📉', title: 'Resource Exhaustion', desc: 'Consume CPU/Memory to test limits'},
                {icon: '🌍', title: 'Region Failures', desc: 'Simulate entire datacenter going down'},
                {icon: '⏰', title: 'Time Travel', desc: 'Test time-based bugs (leap seconds, DST)'},
              ].map((experiment, i) => (
                <div
                  key={i}
                  style={{
                    width: 670,
                    padding: 20,
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.1))',
                    border: '2px solid #f59e0b',
                    borderRadius: 12,
                    opacity: fadeIn(frame, scene3End + 90 + i * 12, 15),
                    boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                    <span style={{fontSize: 40}}>{experiment.icon}</span>
                    <div>
                      <div style={{fontSize: 24, fontWeight: 700, color: '#fbbf24', fontFamily: theme.typography.heading.fontFamily}}>
                        {experiment.title}
                      </div>
                      <div style={{fontSize: 20, color: '#fde68a', fontFamily: theme.typography.body.fontFamily}}>
                        {experiment.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 180,
              left: width / 2 - 600,
              width: 1200,
              padding: 24,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
              border: '3px solid #10b981',
              borderRadius: 16,
              opacity: fadeIn(frame, scene3End + 240, 30),
              boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
            }}
          >
            <p
              style={{
                fontSize: 24,
                color: '#d1fae5',
                fontFamily: theme.typography.body.fontFamily,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.6,
                fontWeight: 600,
              }}
            >
              💡 <strong style={{color: '#6ee7b7'}}>Tools:</strong> Chaos Monkey, Gremlin, Chaos Mesh, LitmusChaos
            </p>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 300} />

          <Dialogue
            speaker="junior"
            text="Intentionally break things in prod?! That's bold! But I see why - find problems before users do!"
            x={100}
            y={height - 280}
            startFrame={scene3End + 330}
          />

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
