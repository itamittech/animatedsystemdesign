import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, slideIn} from '../design-system/animations';

/**
 * Auto-Scaling Strategies (Phase 6.5)
 * Duration: 75 seconds (2250 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - Manual vs Auto-Scaling
 * Scene 2 (20-40s): Reactive vs Predictive Scaling
 * Scene 3 (40-58s): Scaling Metrics & Policies
 * Scene 4 (58-75s): Best Practices & Tools
 */

export const AutoScalingStrategies: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  // Scene timing
  const scene1End = 600;  // 0-20s
  const scene2End = 1200; // 20-40s
  const scene3End = 1740; // 40-58s
  const scene4End = 2250; // 58-75s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - Manual vs Auto-Scaling */}
      {frame < scene1End && (
        <>
          <Title text="Auto-Scaling Strategies" subtitle="Dynamic Infrastructure Management" />

          <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="Traffic spikes during business hours. Should I manually add servers every morning and remove them at night?"
            x={width * 0.10}
            y={height * 0.64}
            startFrame={90}
          />

          <Dialogue
            speaker="architect"
            text="No way! Use auto-scaling! The system automatically adds or removes servers based on demand. Let me show you how it works."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={240}
          />

          {/* Manual vs Auto Visual */}
          <div
            style={{
              position: 'absolute',
              top: 350,
              left: width / 2 - 700,
              display: 'flex',
              gap: 60,
              opacity: fadeIn(frame, 390, 30),
            }}
          >
            {/* Manual Scaling */}
            <div
              style={{
                width: 650,
                padding: 24,
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15))',
                border: '3px solid #ef4444',
                borderRadius: 16,
                boxShadow: '0 0 24px rgba(239, 68, 68, 0.4)',
              }}
            >
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#fca5a5', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>
                ❌ Manual Scaling
              </h3>
              <div style={{fontSize: 22, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                • 🕐 Slow response to traffic changes<br />
                • 😫 Requires 24/7 monitoring<br />
                • 💸 Over-provision to avoid outages<br />
                • 🐌 Human reaction time = downtime
              </div>
            </div>

            {/* Auto-Scaling */}
            <div
              style={{
                width: 650,
                padding: 24,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
                border: '3px solid #10b981',
                borderRadius: 16,
                boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
              }}
            >
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>
                ✅ Auto-Scaling
              </h3>
              <div style={{fontSize: 22, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                • ⚡ Instant response (seconds)<br />
                • 🤖 Automated monitoring & actions<br />
                • 💰 Pay only for what you use<br />
                • 🎯 Match capacity to demand
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

      {/* Scene 2: Reactive vs Predictive Scaling */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Scaling Approaches" subtitle="Reactive vs Predictive" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 820,
              display: 'flex',
              gap: 80,
            }}
          >
            {/* Reactive Scaling */}
            <div style={{width: 750, opacity: fadeIn(frame, scene1End + 30, 25)}}>
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
                📊 Reactive Scaling
              </h2>

              {/* Graph */}
              <svg width="700" height="200" style={{marginBottom: 20}}>
                {/* Axes */}
                <line x1="50" y1="160" x2="650" y2="160" stroke="#475569" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="160" stroke="#475569" strokeWidth="2" />

                {/* Labels */}
                <text x="350" y="190" textAnchor="middle" fill="#94a3b8" fontSize="18">Time</text>
                <text x="20" y="90" textAnchor="middle" fill="#94a3b8" fontSize="18" transform="rotate(-90 20 90)">Load</text>

                {/* Load line (jagged) */}
                <polyline
                  points="50,140 150,120 250,60 350,50 450,80 550,100 650,90"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  opacity={fadeIn(frame, scene1End + 60, 20)}
                />

                {/* Capacity line (stepped, follows load) */}
                <polyline
                  points="50,150 150,150 250,100 350,100 450,100 550,120 650,120"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="8,4"
                  opacity={fadeIn(frame, scene1End + 90, 20)}
                />

                {/* Legend */}
                <line x1="480" y1="30" x2="530" y2="30" stroke="#f59e0b" strokeWidth="3" />
                <text x="540" y="35" fill="#fbbf24" fontSize="18">Actual Load</text>

                <line x1="480" y1="55" x2="530" y2="55" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8,4" />
                <text x="540" y="60" fill="#60a5fa" fontSize="18">Capacity</text>
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '2px solid #3b82f6',
                  borderRadius: 12,
                }}
              >
                <div style={{fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  ✓ Responds to current metrics<br />
                  ✓ CPU &gt; 70% → Scale out<br />
                  ✓ CPU &lt; 30% → Scale in<br />
                  ❌ Lag time before scaling kicks in<br />
                  💡 Best for: Unpredictable workloads
                </div>
              </div>
            </div>

            {/* Predictive Scaling */}
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
                🔮 Predictive Scaling
              </h2>

              {/* Graph */}
              <svg width="700" height="200" style={{marginBottom: 20}}>
                {/* Axes */}
                <line x1="50" y1="160" x2="650" y2="160" stroke="#475569" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="160" stroke="#475569" strokeWidth="2" />

                {/* Labels */}
                <text x="350" y="190" textAnchor="middle" fill="#94a3b8" fontSize="18">Time</text>
                <text x="20" y="90" textAnchor="middle" fill="#94a3b8" fontSize="18" transform="rotate(-90 20 90)">Load</text>

                {/* Predicted load (smooth curve) */}
                <path
                  d="M 50 140 Q 200 100, 350 50 Q 500 80, 650 90"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  opacity={fadeIn(frame, scene1End + 120, 20)}
                />

                {/* Capacity line (anticipates) */}
                <path
                  d="M 50 150 Q 200 110, 350 60 Q 500 85, 650 95"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeDasharray="8,4"
                  opacity={fadeIn(frame, scene1End + 150, 20)}
                />

                {/* Legend */}
                <line x1="430" y1="30" x2="480" y2="30" stroke="#f59e0b" strokeWidth="3" />
                <text x="490" y="35" fill="#fbbf24" fontSize="18">Predicted Load</text>

                <line x1="430" y1="55" x2="480" y2="55" stroke="#10b981" strokeWidth="4" strokeDasharray="8,4" />
                <text x="490" y="60" fill="#34d399" fontSize="18">Proactive Capacity</text>
              </svg>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid #10b981',
                  borderRadius: 12,
                }}
              >
                <div style={{fontSize: 20, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  ✓ ML predicts future demand<br />
                  ✓ Scales BEFORE spike hits<br />
                  ✓ Historical patterns (daily/weekly)<br />
                  ✓ Zero lag time<br />
                  💡 Best for: Predictable patterns
                </div>
              </div>
            </div>
          </div>

          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene1End + 240} />

          <Dialogue
            speaker="architect"
            text="Reactive waits for high CPU then scales. Predictive uses ML to scale before the traffic spike!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={scene1End + 270}
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

      {/* Scene 3: Scaling Metrics & Policies */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Scaling Configuration" subtitle="Metrics, Policies & Cooldowns" />

          {/* Metrics */}
          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 780,
              width: 1560,
              opacity: fadeIn(frame, scene2End + 30, 25),
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#60a5fa',
                marginBottom: 24,
                fontFamily: theme.typography.heading.fontFamily,
                textShadow: '0 0 24px rgba(96, 165, 250, 0.6)',
              }}
            >
              📊 Scaling Metrics
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
              {[
                {icon: '⚙️', title: 'CPU Utilization', desc: 'Most common: Scale at 70%', color: '#3b82f6'},
                {icon: '💾', title: 'Memory Usage', desc: 'Watch for memory leaks', color: '#8b5cf6'},
                {icon: '🌐', title: 'Request Count', desc: 'Requests per instance', color: '#10b981'},
                {icon: '⏱️', title: 'Response Time', desc: 'Latency thresholds', color: '#f59e0b'},
                {icon: '📡', title: 'Network I/O', desc: 'Bandwidth saturation', color: '#06b6d4'},
                {icon: '🎯', title: 'Custom Metrics', desc: 'Queue depth, DB connections', color: '#ec4899'},
              ].map((metric, i) => (
                <div
                  key={i}
                  style={{
                    width: 490,
                    padding: 20,
                    background: `linear-gradient(135deg, ${metric.color}22, ${metric.color}11)`,
                    border: `2px solid ${metric.color}`,
                    borderRadius: 12,
                    opacity: fadeIn(frame, scene2End + 60 + i * 12, 15),
                    boxShadow: `0 0 16px ${metric.color}44`,
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                    <span style={{fontSize: 36}}>{metric.icon}</span>
                    <div>
                      <div style={{fontSize: 24, fontWeight: 700, color: metric.color, fontFamily: theme.typography.heading.fontFamily}}>
                        {metric.title}
                      </div>
                      <div style={{fontSize: 18, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily}}>
                        {metric.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scaling Policies */}
          <div
            style={{
              position: 'absolute',
              bottom: 220,
              left: width / 2 - 780,
              width: 1560,
              opacity: fadeIn(frame, scene2End + 180, 25),
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#10b981',
                marginBottom: 20,
                fontFamily: theme.typography.heading.fontFamily,
                textShadow: '0 0 24px rgba(16, 185, 129, 0.6)',
              }}
            >
              ⚙️ Key Configuration
            </h2>
            <div style={{display: 'flex', gap: 30}}>
              {[
                {label: 'Min/Max Instances', value: '2 - 20 servers', icon: '📊'},
                {label: 'Scale-Out Policy', value: 'CPU > 70% for 2 min', icon: '📈'},
                {label: 'Scale-In Policy', value: 'CPU < 30% for 5 min', icon: '📉'},
                {label: 'Cooldown Period', value: '5 min (prevent flapping)', icon: '⏰'},
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    borderRadius: 12,
                    opacity: fadeIn(frame, scene2End + 210 + i * 15, 15),
                  }}
                >
                  <div style={{fontSize: 32, marginBottom: 8}}>{item.icon}</div>
                  <div style={{fontSize: 18, color: '#6ee7b7', fontWeight: 700, marginBottom: 6, fontFamily: theme.typography.heading.fontFamily}}>
                    {item.label}
                  </div>
                  <div style={{fontSize: 20, color: '#d1fae5', fontFamily: 'monospace'}}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene2End + 300} />

          <Dialogue
            speaker="junior"
            text="Cooldown prevents scaling up and down too quickly. Smart!"
            x={width * 0.10}
            y={height * 0.64}
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

      {/* Scene 4: Best Practices & Tools */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Best Practices & Tools" subtitle="Production-Ready Auto-Scaling" />

          {/* Best Practices */}
          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 780,
              width: 1560,
              opacity: fadeIn(frame, scene3End + 30, 25),
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#8b5cf6',
                marginBottom: 24,
                fontFamily: theme.typography.heading.fontFamily,
                textShadow: '0 0 24px rgba(139, 92, 246, 0.6)',
              }}
            >
              ✅ Best Practices
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
              {[
                '🎯 Design stateless apps (store session in Redis/DB)',
                '⚡ Fast startup time (optimize container image)',
                '🔄 Health checks (do not route to unhealthy instances)',
                '📊 Monitor scaling events and costs',
                '🧪 Test scaling policies under load',
                '⏰ Scale out faster than scale in (better UX)',
              ].map((practice, i) => (
                <div
                  key={i}
                  style={{
                    width: 750,
                    padding: '18px 24px',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
                    border: '2px solid #8b5cf6',
                    borderRadius: 12,
                    fontSize: 22,
                    color: '#e9d5ff',
                    fontFamily: theme.typography.body.fontFamily,
                    opacity: fadeIn(frame, scene3End + 60 + i * 12, 15),
                    boxShadow: '0 0 16px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  {practice}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            style={{
              position: 'absolute',
              bottom: 200,
              left: width / 2 - 700,
              width: 1400,
              padding: 28,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
              border: '3px solid #10b981',
              borderRadius: 16,
              opacity: fadeIn(frame, scene3End + 150, 30),
              boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
            }}
          >
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#6ee7b7',
                marginBottom: 16,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
                textShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
              }}
            >
              🛠️ Popular Auto-Scaling Tools
            </h3>
            <div
              style={{
                fontSize: 24,
                color: '#d1fae5',
                fontFamily: theme.typography.body.fontFamily,
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              Kubernetes HPA • AWS Auto Scaling • GCP Autoscaler • Azure VMSS • Docker Swarm
            </div>
          </div>

          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene3End + 210} />

          <Dialogue
            speaker="architect"
            text="Remember: Scale out aggressively, scale in conservatively. Better to have extra capacity than unhappy users!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={scene3End + 240}
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
