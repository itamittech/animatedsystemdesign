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
      {frame < scene1End && (
        <>
          <Title text="Health Checks & Monitoring" subtitle="Know When Your System is Sick" />
          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="How do we know if our services are actually healthy and working?" x={100} y={height - 280} startFrame={90} />
          <Dialogue speaker="architect" text="Health checks! Periodic probes that verify services are alive and ready. Let me show you the different types." x={width - 750} y={height - 280} startFrame={240} />
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
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Deep Health Checks" subtitle="Beyond Simple Pings" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 40, opacity: fadeIn(frame, scene1End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>❌ Shallow Health Check</h2>
              <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '2px solid #ef4444', borderRadius: 12, textAlign: 'center'}}>
                <div style={{fontSize: 24, color: '#fecaca', fontFamily: 'monospace', marginBottom: 16}}>GET /health → return 200 OK</div>
                <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily}}>⚠️ Service responds but database is down = False positive!</div>
              </div>
            </div>
            <div style={{opacity: fadeIn(frame, scene1End + 120, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>✅ Deep Health Check</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {[{icon: '🗄️', text: 'Database connection pool', check: 'Can connect + execute simple query'}, {icon: '🔌', text: 'External API dependencies', check: 'Ping critical services'}, {icon: '💾', text: 'Disk space', check: '> 10% free space available'}, {icon: '🧠', text: 'Memory usage', check: '< 90% heap used'}, {icon: '📊', text: 'Message queue', check: 'Can publish/consume messages'}, {icon: '🔐', text: 'Cache layer', check: 'Redis/Memcached accessible'}].map((item, i) => (
                  <div key={i} style={{width: 750, padding: 20, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene1End + 150 + i * 15, 15)}}>
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
          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 300} />
          <Dialogue speaker="junior" text="So health checks should test actual dependencies, not just that the app is running!" x={100} y={height - 280} startFrame={scene1End + 330} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Monitoring Metrics" subtitle="The Golden Signals" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 750, width: 1500, opacity: fadeIn(frame, scene2End + 30, 25)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#f59e0b', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎯 Four Golden Signals (Google SRE)</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 40}}>
              {[{icon: '⏱️', title: 'Latency', desc: 'Response time (p50, p95, p99)', alert: '> 500ms for 5min'}, {icon: '📊', title: 'Traffic', desc: 'Requests per second', alert: 'Sudden spike or drop'}, {icon: '❌', title: 'Errors', desc: 'Error rate (%)', alert: '> 1% error rate'}, {icon: '💾', title: 'Saturation', desc: 'Resource utilization', alert: 'CPU/Memory > 80%'}].map((signal, i) => (
                <div key={i} style={{width: 700, padding: 24, background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.1))', border: '3px solid #f59e0b', borderRadius: 14, opacity: fadeIn(frame, scene2End + 60 + i * 20, 20)}}>
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
            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene2End + 210, 25)}}>
              <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                <strong style={{fontSize: 24, color: '#c4b5fd'}}>RED Method</strong> (alternative): Rate, Errors, Duration<br />
                <strong style={{fontSize: 24, color: '#c4b5fd'}}>USE Method</strong> (resources): Utilization, Saturation, Errors
              </div>
            </div>
          </div>
          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 270} />
          <Dialogue speaker="architect" text="Track these four signals and you'll catch 90% of production issues!" x={width - 750} y={height - 280} startFrame={scene2End + 300} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Alerting Best Practices" subtitle="Tools & Avoiding Fatigue" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 750, width: 1500}}>
            <div style={{marginBottom: 40, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>⚠️ Avoiding Alert Fatigue</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {['🎯 Alert on symptoms, not causes (user impact)', '⏰ Set appropriate thresholds (not too sensitive)', '🔕 Silence during known maintenance windows', '📊 Aggregate similar alerts (not 100 emails)', '🚨 Escalation: Warning → Critical → Page', '📝 Include runbook links in alerts'].map((tip, i) => (
                  <div key={i} style={{width: 720, padding: '16px 24px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))', border: '2px solid #ef4444', borderRadius: 12, fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 60 + i * 12, 15)}}>{tip}</div>
                ))}
              </div>
            </div>
            <div style={{padding: 28, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))', border: '3px solid #10b981', borderRadius: 16, opacity: fadeIn(frame, scene3End + 180, 30), boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛠️ Popular Tools</h3>
              <div style={{fontSize: 24, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>Prometheus + Grafana • Datadog • New Relic • Dynatrace<br />PagerDuty (alerting) • Sentry (error tracking)</div>
            </div>
          </div>
          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 240} />
          <Dialogue speaker="junior" text="Good alerts wake you up for real problems. Bad alerts get ignored. Got it!" x={100} y={height - 280} startFrame={scene3End + 270} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
