import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Health Checks & Monitoring (Phase 7.4)
 * Duration: 80 seconds (2400 frames at 30fps)
 */

export const HealthChecksMonitoring: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 600;
  const scene2End = 1200;
  const scene3End = 1800;
  const scene4End = 2400;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Credit Bookmark */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(96, 165, 250, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {frame < scene1End && (
        <>
          <Title text="Health Checks & Monitoring" subtitle="Know When Your System is Sick" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 360 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} size={110} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} size={110} />

              <Dialogue
                speaker="junior"
                text="How do we know if our services are actually healthy and working?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={90}
                maxWidth={500}
              />
              <Dialogue
                speaker="architect"
                text="Health checks! Periodic probes that verify services are alive and ready. Let me show you the different types."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={240}
                maxWidth={540}
              />
            </>
          )}

          {/* Content appears after conversation */}
          <div style={{position: 'absolute', top: 360, left: width / 2 - 750, width: 1500, opacity: fadeIn(frame, 390, 30)}}>
            <div style={{display: 'flex', gap: 30}}>
              {[{icon: '💓', title: 'Liveness Probe', desc: 'Is the service alive?', check: 'Restart if fails', color: '#10b981'}, {icon: '🚀', title: 'Readiness Probe', desc: 'Ready to serve traffic?', check: 'Remove from load balancer', color: '#3b82f6'}, {icon: '🏁', title: 'Startup Probe', desc: 'Finished starting up?', check: 'Wait before other checks', color: '#f59e0b'}].map((probe, i) => (
                <div key={i} style={{flex: 1, padding: 24, background: `linear-gradient(135deg, ${probe.color}22, ${probe.color}11)`, border: `3px solid ${probe.color}`, borderRadius: 14, opacity: fadeIn(frame, 420 + i * 30, 20)}}>
                  <div style={{fontSize: 48, textAlign: 'center', marginBottom: 16}}>{probe.icon}</div>
                  <h3 style={{fontSize: 26, fontWeight: 700, color: probe.color, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>{probe.title}</h3>
                  <div style={{fontSize: 20, color: theme.text.secondary, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.body.fontFamily}}>{probe.desc}</div>
                  <div style={{fontSize: 18, color: theme.text.muted, textAlign: 'center', fontFamily: theme.typography.body.fontFamily}}>{probe.check}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Deep Health Checks" subtitle="Beyond Simple Pings" startFrame={scene1End} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < scene1End + 450 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene1End + 10} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={scene1End + 10} size={95} />

              <Dialogue
                speaker="junior"
                text="What makes a health check effective? Just checking if the service is alive?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene1End + 40}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="No, shallow checks can lie! You need deep checks that verify dependencies. Let me show you the difference..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={scene1End + 150}
                maxWidth={540}
              />
            </>
          )}

          {/* Content appears after conversation */}
          {frame >= scene1End + 260 && (
            <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
              <div style={{marginBottom: 40, opacity: fadeIn(frame, scene1End + 260, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>❌ Shallow Health Check</h2>
                <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '2px solid #ef4444', borderRadius: 12, textAlign: 'center'}}>
                  <div style={{fontSize: 24, color: '#fecaca', fontFamily: 'monospace', marginBottom: 16}}>GET /health → return 200 OK</div>
                  <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily}}>⚠️ Service responds but database is down = False positive!</div>
                </div>
              </div>
              <div style={{opacity: fadeIn(frame, scene1End + 320, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>✅ Deep Health Check</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                  {[{icon: '🗄️', text: 'Database connection pool', check: 'Can connect + execute simple query'}, {icon: '🔌', text: 'External API dependencies', check: 'Ping critical services'}, {icon: '💾', text: 'Disk space', check: '> 10% free space available'}, {icon: '🧠', text: 'Memory usage', check: '< 90% heap used'}, {icon: '📊', text: 'Message queue', check: 'Can publish/consume messages'}, {icon: '🔐', text: 'Cache layer', check: 'Redis/Memcached accessible'}].map((item, i) => (
                    <div key={i} style={{width: 750, padding: 20, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene1End + 350 + i * 15, 15)}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                        <span style={{fontSize: 36}}>{item.icon}</span>
                        <div style={{flex: 1}}>
                          <div style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 4, fontFamily: theme.typography.heading.fontFamily}}>{item.text}</div>
                          <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily}}>{item.check}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Monitoring Metrics" subtitle="The Golden Signals" startFrame={scene2End} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < scene2End + 420 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene2End + 10} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={scene2End + 10} size={95} />

              <Dialogue
                speaker="junior"
                text="Health checks tell us if a service is up. But what metrics should we monitor to understand performance?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene2End + 40}
                maxWidth={500}
              />

              <Dialogue
                speaker="architect"
                text="Google's SRE team identified four golden signals that catch most production issues. Let me show you..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={scene2End + 150}
                maxWidth={540}
              />
            </>
          )}

          {/* Content appears after conversation */}
          {frame >= scene2End + 240 && (
            <div style={{position: 'absolute', top: 280, left: width / 2 - 750, width: 1500, opacity: fadeIn(frame, scene2End + 240, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#f59e0b', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎯 Four Golden Signals (Google SRE)</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 40}}>
                {[{icon: '⏱️', title: 'Latency', desc: 'Response time (p50, p95, p99)', alert: '> 500ms for 5min'}, {icon: '📊', title: 'Traffic', desc: 'Requests per second', alert: 'Sudden spike or drop'}, {icon: '❌', title: 'Errors', desc: 'Error rate (%)', alert: '> 1% error rate'}, {icon: '💾', title: 'Saturation', desc: 'Resource utilization', alert: 'CPU/Memory > 80%'}].map((signal, i) => (
                  <div key={i} style={{width: 700, padding: 24, background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.1))', border: '3px solid #f59e0b', borderRadius: 14, opacity: fadeIn(frame, scene2End + 270 + i * 20, 20)}}>
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: 16}}>
                      <span style={{fontSize: 40}}>{signal.icon}</span>
                      <div style={{flex: 1}}>
                        <h3 style={{fontSize: 26, fontWeight: 700, color: '#fbbf24', margin: 0, marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{signal.title}</h3>
                        <div style={{fontSize: 20, color: '#fde68a', marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>{signal.desc}</div>
                        <div style={{fontSize: 18, color: '#fef3c7', fontFamily: 'monospace'}}>Alert: {signal.alert}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene2End + 420, 25)}}>
                <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                  <strong style={{fontSize: 24, color: '#c4b5fd'}}>RED Method</strong> (alternative): Rate, Errors, Duration<br />
                  <strong style={{fontSize: 24, color: '#c4b5fd'}}>USE Method</strong> (resources): Utilization, Saturation, Errors
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Alerting Best Practices" subtitle="Tools & Avoiding Fatigue" startFrame={scene3End} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < scene3End + 360 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene3End + 10} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={scene3End + 10} size={95} />

              <Dialogue
                speaker="junior"
                text="How do we set up alerts without getting woken up at 3am for every little thing?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene3End + 40}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="That's alert fatigue - a real problem! Let me show you best practices and tools that help..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={scene3End + 150}
                maxWidth={540}
              />
            </>
          )}

          {/* Content appears after conversation */}
          {frame >= scene3End + 240 && (
            <div style={{position: 'absolute', top: 280, left: width / 2 - 750, width: 1500}}>
              <div style={{marginBottom: 40, opacity: fadeIn(frame, scene3End + 240, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>⚠️ Avoiding Alert Fatigue</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                  {['🎯 Alert on symptoms, not causes (user impact)', '⏰ Set appropriate thresholds (not too sensitive)', '🔕 Silence during known maintenance windows', '📊 Aggregate similar alerts (not 100 emails)', '🚨 Escalation: Warning → Critical → Page', '📝 Include runbook links in alerts'].map((tip, i) => (
                    <div key={i} style={{width: 720, padding: '16px 24px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))', border: '2px solid #ef4444', borderRadius: 12, fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 270 + i * 12, 15)}}>{tip}</div>
                  ))}
                </div>
              </div>
              <div style={{padding: 28, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))', border: '3px solid #10b981', borderRadius: 16, opacity: fadeIn(frame, scene3End + 390, 30), boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)'}}>
                <h3 style={{fontSize: 28, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛠️ Popular Tools</h3>
                <div style={{fontSize: 24, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>Prometheus + Grafana • Datadog • New Relic • Dynatrace<br />PagerDuty (alerting) • Sentry (error tracking)</div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
