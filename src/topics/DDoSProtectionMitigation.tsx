import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * DDoS Protection & Mitigation (Phase 8.4)
 * Duration: 70 seconds (2100 frames at 30fps)
 *
 * Scene 1 (0-18s): What is DDoS? Types of Attacks
 * Scene 2 (18-36s): Detection Techniques
 * Scene 3 (36-53s): Mitigation Strategies
 * Scene 4 (53-70s): DDoS Protection Services & Best Practices
 */

export const DDoSProtectionMitigation: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 540;
  const scene2End = 1080;
  const scene3End = 1590;
  const scene4End = 2100;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="DDoS Protection & Mitigation" subtitle="Defending Against Distributed Attacks" />
          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="What if someone floods our servers with millions of fake requests? How do we defend against that?" x={100} y={height - 280} startFrame={90} />
          <Dialogue speaker="architect" text="That's a DDoS attack! Distributed Denial of Service. There are three main types based on OSI layers. Let me explain!" x={width - 750} y={height - 280} startFrame={240} />

          <div style={{position: 'absolute', top: 350, left: width / 2 - 850, width: 1700, opacity: fadeIn(frame, 390, 30)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>💥 DDoS Attack Types</h2>
            <div style={{display: 'flex', gap: 30}}>
              {[
                {
                  title: 'Volumetric Attacks',
                  subtitle: 'Layer 3/4 (Network/Transport)',
                  icon: '🌊',
                  color: '#ef4444',
                  items: [
                    'UDP flood',
                    'ICMP flood (ping)',
                    'DNS amplification',
                    'NTP amplification'
                  ],
                  goal: 'Saturate bandwidth',
                  measure: 'Measured in Gbps/Tbps'
                },
                {
                  title: 'Protocol Attacks',
                  subtitle: 'Layer 3/4 (Network/Transport)',
                  icon: '🔌',
                  color: '#f59e0b',
                  items: [
                    'SYN flood',
                    'ACK flood',
                    'Ping of Death',
                    'Smurf attack'
                  ],
                  goal: 'Exhaust server resources',
                  measure: 'Measured in packets/sec'
                },
                {
                  title: 'Application Layer',
                  subtitle: 'Layer 7 (Application)',
                  icon: '🎯',
                  color: '#8b5cf6',
                  items: [
                    'HTTP flood',
                    'Slowloris',
                    'DNS query flood',
                    'API endpoint abuse'
                  ],
                  goal: 'Crash web server/app',
                  measure: 'Measured in requests/sec'
                }
              ].map((type, i) => (
                <div key={i} style={{flex: 1, padding: 24, background: `linear-gradient(135deg, ${type.color}22, ${type.color}11)`, border: `3px solid ${type.color}`, borderRadius: 14, opacity: fadeIn(frame, 420 + i * 30, 25), boxShadow: `0 0 24px ${type.color}44`}}>
                  <div style={{fontSize: 48, textAlign: 'center', marginBottom: 12}}>{type.icon}</div>
                  <h3 style={{fontSize: 26, fontWeight: 700, color: type.color, textAlign: 'center', marginBottom: 6, fontFamily: theme.typography.heading.fontFamily}}>{type.title}</h3>
                  <div style={{fontSize: 18, color: theme.text.secondary, textAlign: 'center', marginBottom: 16, fontFamily: theme.typography.body.fontFamily, fontStyle: 'italic'}}>{type.subtitle}</div>
                  {type.items.map((item, j) => (
                    <div key={j} style={{fontSize: 18, color: theme.text.muted, marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>• {item}</div>
                  ))}
                  <div style={{marginTop: 16, padding: 12, background: `${type.color}22`, borderRadius: 8, fontSize: 17, color: type.color, textAlign: 'center', fontFamily: theme.typography.body.fontFamily, fontWeight: 600}}>
                    Goal: {type.goal}<br />
                    {type.measure}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="DDoS Detection Techniques" subtitle="Spotting Attacks Early" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🔍 How to Detect DDoS Attacks</h3>
              <p style={{fontSize: 22, color: '#e9d5ff', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Early detection is critical! Monitor these indicators:
              </p>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 30, opacity: fadeIn(frame, scene1End + 60, 25)}}>
              {[
                {icon: '📊', title: 'Traffic Spike', desc: 'Sudden surge in requests (10x, 100x normal)', color: '#ef4444'},
                {icon: '🌍', title: 'Geographic Anomaly', desc: 'Traffic from unusual countries/regions', color: '#f59e0b'},
                {icon: '🤖', title: 'Bot Signatures', desc: 'Same User-Agent, missing headers, patterns', color: '#f97316'},
                {icon: '⏱️', title: 'Response Time', desc: 'Server latency increases dramatically', color: '#ef4444'},
                {icon: '🔌', title: 'Connection Count', desc: 'Huge spike in TCP/UDP connections', color: '#f59e0b'},
                {icon: '📉', title: 'Service Degradation', desc: 'Legitimate users can\'t access service', color: '#ef4444'}
              ].map((indicator, i) => (
                <div key={i} style={{width: 520, padding: 20, background: `linear-gradient(135deg, ${indicator.color}22, ${indicator.color}11)`, border: `2px solid ${indicator.color}`, borderRadius: 12, opacity: fadeIn(frame, scene1End + 90 + i * 15, 15), boxShadow: `0 0 16px ${indicator.color}44`, display: 'flex', alignItems: 'center', gap: 16}}>
                  <div style={{fontSize: 40}}>{indicator.icon}</div>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: indicator.color, marginBottom: 6, fontFamily: theme.typography.heading.fontFamily}}>{indicator.title}</h4>
                    <div style={{fontSize: 18, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily}}>{indicator.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14, opacity: fadeIn(frame, scene1End + 240, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛠️ Monitoring Tools</h3>
              <div style={{fontSize: 22, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                <strong>Network:</strong> Netflow, sFlow, SNMP monitoring<br />
                <strong>Application:</strong> Prometheus, Grafana, Datadog<br />
                <strong>Security:</strong> WAF logs, IDS/IPS (Snort, Suricata)
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 300} />
          <Dialogue speaker="junior" text="Monitor traffic patterns, watch for spikes, and look for bot signatures. Detection is the first step!" x={100} y={height - 280} startFrame={scene1End + 330} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Mitigation Strategies" subtitle="Defending Your Infrastructure" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛡️ Defense Mechanisms</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {[
                  {
                    icon: '🌐',
                    title: 'Traffic Filtering',
                    techniques: [
                      'IP blacklisting/whitelisting',
                      'Geo-blocking (block regions)',
                      'Rate limiting per IP',
                      'Block invalid packets'
                    ],
                    color: '#3b82f6'
                  },
                  {
                    icon: '☁️',
                    title: 'Distributed Infrastructure',
                    techniques: [
                      'CDN (CloudFlare, Akamai)',
                      'Anycast network (route to nearest)',
                      'Load balancers with auto-scaling',
                      'Multi-region deployment'
                    ],
                    color: '#10b981'
                  },
                  {
                    icon: '🔥',
                    title: 'Application Defenses',
                    techniques: [
                      'Web Application Firewall (WAF)',
                      'CAPTCHA challenges',
                      'JavaScript challenges (bots fail)',
                      'Connection limits per IP'
                    ],
                    color: '#f59e0b'
                  },
                  {
                    icon: '🚪',
                    title: 'Traffic Scrubbing',
                    techniques: [
                      'Route traffic through scrubbing center',
                      'Clean legitimate traffic',
                      'Drop malicious packets',
                      'Return clean traffic to origin'
                    ],
                    color: '#8b5cf6'
                  }
                ].map((strategy, i) => (
                  <div key={i} style={{width: 795, padding: 20, background: `linear-gradient(135deg, ${strategy.color}22, ${strategy.color}11)`, border: `2px solid ${strategy.color}`, borderRadius: 12, opacity: fadeIn(frame, scene2End + 60 + i * 20, 20), boxShadow: `0 0 16px ${strategy.color}44`}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12}}>
                      <span style={{fontSize: 40}}>{strategy.icon}</span>
                      <h3 style={{fontSize: 24, fontWeight: 700, color: strategy.color, fontFamily: theme.typography.heading.fontFamily}}>{strategy.title}</h3>
                    </div>
                    {strategy.techniques.map((tech, j) => (
                      <div key={j} style={{fontSize: 18, color: theme.text.muted, marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>• {tech}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, opacity: fadeIn(frame, scene2End + 210, 25)}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#fca5a5', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>⚡ SYN Flood Defense: SYN Cookies</h3>
              <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                Don't allocate resources until full 3-way handshake completes<br />
                Encode connection state in sequence number → Stateless defense!
              </div>
            </div>
          </div>

          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 270} />
          <Dialogue speaker="architect" text="Combine multiple layers: CDN, WAF, rate limiting, and traffic scrubbing for comprehensive defense!" x={width - 750} y={height - 280} startFrame={scene2End + 300} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="DDoS Protection Services" subtitle="Professional Defense Solutions" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#3b82f6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(59, 130, 246, 0.6)'}}>☁️ DDoS Protection Services</h2>
              <div style={{display: 'flex', gap: 20, marginBottom: 20}}>
                {[
                  {name: 'Cloudflare', features: ['Magic Transit', 'L3/L4/L7 protection', 'Anycast network', 'Free tier available'], capacity: 'Multi-Tbps', color: '#f59e0b'},
                  {name: 'AWS Shield', features: ['Shield Standard (free)', 'Shield Advanced ($3K/mo)', 'Integration with CloudFront', 'DDoS cost protection'], capacity: 'Up to Tbps', color: '#f97316'},
                  {name: 'Akamai Prolexic', features: ['Traffic scrubbing centers', 'BGP routing', 'Always-on protection', 'Enterprise focus'], capacity: 'Multi-Tbps', color: '#3b82f6'}
                ].map((service, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`, border: `3px solid ${service.color}`, borderRadius: 14, opacity: fadeIn(frame, scene3End + 60 + i * 20, 20), boxShadow: `0 0 20px ${service.color}44`}}>
                    <h3 style={{fontSize: 26, fontWeight: 700, color: service.color, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>{service.name}</h3>
                    {service.features.map((feat, j) => (
                      <div key={j} style={{fontSize: 18, color: theme.text.muted, marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>• {feat}</div>
                    ))}
                    <div style={{marginTop: 12, padding: 10, background: `${service.color}22`, borderRadius: 8, fontSize: 19, color: service.color, textAlign: 'center', fontFamily: theme.typography.body.fontFamily, fontWeight: 700}}>
                      {service.capacity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene3End + 150, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>✅ Best Practices</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
                {[
                  '🏗️ Over-provision bandwidth (2-3x normal capacity)',
                  '📊 Establish baseline traffic patterns (know normal)',
                  '🎯 Identify critical services (prioritize protection)',
                  '🔄 Have incident response plan (who does what)',
                  '🌐 Use CDN for static assets (reduce origin load)',
                  '⚡ Implement connection limits and timeouts',
                  '🧪 Test defenses regularly (simulated attacks)',
                  '📞 Keep DDoS protection provider on speed dial'
                ].map((practice, i) => (
                  <div key={i} style={{width: 755, padding: '14px 20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 180 + i * 10, 12), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>{practice}</div>
                ))}
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 300} />
          <Dialogue speaker="junior" text="DDoS is serious! Use professional services, have a plan, and test defenses before you need them!" x={100} y={height - 280} startFrame={scene3End + 330} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
