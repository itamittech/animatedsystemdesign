import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Disaster Recovery & Backup (Phase 7.5)
 * Duration: 85 seconds (2550 frames at 30fps)
 */

export const DisasterRecoveryBackup: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 600;
  const scene2End = 1200;
  const scene3End = 1890;
  const scene4End = 2550;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Disaster Recovery & Backup" subtitle="Planning for the Worst" />
          <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="What if our entire datacenter goes offline? Or we accidentally delete the production database?" x={width * 0.10} y={height * 0.64} startFrame={90} />
          <Dialogue speaker="architect" text="That's why we need DR planning! Define RTO and RPO, maintain backups, and test recovery procedures regularly." x={width * 0.60} y={height * 0.64} startFrame={240} />
          <div style={{position: 'absolute', top: 360, left: width / 2 - 700, width: 1400, opacity: fadeIn(frame, 390, 30)}}>
            <div style={{display: 'flex', gap: 40, justifyContent: 'center'}}>
              {[{icon: '⏱️', title: 'RTO', full: 'Recovery Time Objective', desc: 'How long can we be down?', example: 'RTO = 1 hour'}, {icon: '📊', title: 'RPO', full: 'Recovery Point Objective', desc: 'How much data can we lose?', example: 'RPO = 15 minutes'}].map((metric, i) => (
                <div key={i} style={{width: 650, padding: 28, background: `linear-gradient(135deg, ${i === 0 ? '#3b82f6' : '#10b981'}22, ${i === 0 ? '#3b82f6' : '#10b981'}11)`, border: `3px solid ${i === 0 ? '#3b82f6' : '#10b981'}`, borderRadius: 16, opacity: fadeIn(frame, 420 + i * 30, 25), boxShadow: `0 0 24px ${i === 0 ? '#3b82f6' : '#10b981'}44`}}>
                  <div style={{fontSize: 52, textAlign: 'center', marginBottom: 12}}>{metric.icon}</div>
                  <h3 style={{fontSize: 32, fontWeight: 700, color: i === 0 ? '#60a5fa' : '#6ee7b7', textAlign: 'center', marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{metric.title}</h3>
                  <div style={{fontSize: 22, color: theme.text.secondary, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.body.fontFamily}}>{metric.full}</div>
                  <div style={{fontSize: 20, color: theme.text.muted, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.body.fontFamily}}>{metric.desc}</div>
                  <div style={{fontSize: 22, color: i === 0 ? '#dbeafe' : '#d1fae5', textAlign: 'center', fontFamily: 'monospace', fontWeight: 700}}>{metric.example}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Backup Strategies" subtitle="Full, Incremental, Differential" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{display: 'flex', gap: 30, marginBottom: 40}}>
              {[{title: 'Full Backup', icon: '📦', desc: 'Complete copy of all data', pros: 'Fast restore', cons: 'Slow, storage intensive', color: '#3b82f6'}, {title: 'Incremental', icon: '➕', desc: 'Only changed since last backup', pros: 'Fast, space efficient', cons: 'Slower restore (chain)', color: '#10b981'}, {title: 'Differential', icon: '📊', desc: 'Changed since last full backup', pros: 'Faster restore than incremental', cons: 'Grows over time', color: '#f59e0b'}].map((type, i) => (
                <div key={i} style={{flex: 1, padding: 24, background: `linear-gradient(135deg, ${type.color}22, ${type.color}11)`, border: `3px solid ${type.color}`, borderRadius: 14, opacity: fadeIn(frame, scene1End + 30 + i * 30, 25), boxShadow: `0 0 20px ${type.color}44`}}>
                  <div style={{fontSize: 48, textAlign: 'center', marginBottom: 12}}>{type.icon}</div>
                  <h3 style={{fontSize: 26, fontWeight: 700, color: type.color, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>{type.title}</h3>
                  <div style={{fontSize: 20, color: theme.text.secondary, marginBottom: 16, textAlign: 'center', fontFamily: theme.typography.body.fontFamily}}>{type.desc}</div>
                  <div style={{fontSize: 18, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                    <strong style={{color: '#10b981'}}>✓ {type.pros}</strong><br />
                    <strong style={{color: '#ef4444'}}>✗ {type.cons}</strong>
                  </div>
                </div>
              ))}
            </div>
            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene1End + 180, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📅 Common Strategy: 3-2-1 Rule</h3>
              <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                <strong>3</strong> copies of data • <strong>2</strong> different media types • <strong>1</strong> copy offsite
              </div>
            </div>
          </div>
          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene1End + 240} />
          <Dialogue speaker="junior" text="So full backup weekly, incremental daily! And always test restores!" x={width * 0.10} y={height * 0.64} startFrame={scene1End + 270} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Failover Strategies" subtitle="Cold, Warm, Hot Standby" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 850, width: 1700}}>
            <div style={{display: 'flex', gap: 24}}>
              {[{title: 'Cold Standby', icon: '🧊', desc: 'Backup data exists, but no running infrastructure', rto: '> 1 hour', cost: '💰 Cheapest', color: '#06b6d4'}, {title: 'Warm Standby', icon: '🔥', desc: 'Minimal infrastructure running, can scale up', rto: '5-30 minutes', cost: '💰💰 Moderate', color: '#f59e0b'}, {title: 'Hot Standby', icon: '⚡', desc: 'Fully duplicated infrastructure, instant failover', rto: '< 1 minute', cost: '💰💰💰 Expensive', color: '#ef4444'}].map((strategy, i) => (
                <div key={i} style={{flex: 1, padding: 24, background: `linear-gradient(135deg, ${strategy.color}22, ${strategy.color}11)`, border: `3px solid ${strategy.color}`, borderRadius: 14, opacity: fadeIn(frame, scene2End + 30 + i * 30, 25), boxShadow: `0 0 20px ${strategy.color}44`}}>
                  <div style={{fontSize: 52, textAlign: 'center', marginBottom: 16}}>{strategy.icon}</div>
                  <h3 style={{fontSize: 28, fontWeight: 700, color: strategy.color, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>{strategy.title}</h3>
                  <div style={{fontSize: 20, color: theme.text.secondary, marginBottom: 16, textAlign: 'center', lineHeight: 1.5, fontFamily: theme.typography.body.fontFamily}}>{strategy.desc}</div>
                  <div style={{fontSize: 22, color: strategy.color, textAlign: 'center', marginBottom: 8, fontFamily: 'monospace', fontWeight: 700}}>RTO: {strategy.rto}</div>
                  <div style={{fontSize: 20, color: theme.text.muted, textAlign: 'center', fontFamily: theme.typography.body.fontFamily}}>{strategy.cost}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop: 40, padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene2End + 180, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🌍 Multi-Region Failover</h3>
              <div style={{fontSize: 20, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                Replicate to different geographic regions (US-East, EU-West, etc.)<br />
                DNS failover or Global Load Balancer routes traffic to healthy region
              </div>
            </div>
          </div>
          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene2End + 240} />
          <Dialogue speaker="architect" text="Choose based on business requirements. Financial services need hot standby. Internal tools can use cold." x={width * 0.60} y={height * 0.64} startFrame={scene2End + 270} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Testing & Best Practices" subtitle="Hope is Not a Strategy" />
          <div style={{position: 'absolute', top: 280, left: width / 2 - 700, width: 1400}}>
            <div style={{marginBottom: 40, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>🧪 Test Your DR Plan!</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {['🔥 Schedule regular DR drills (quarterly)', '⏱️ Measure actual RTO/RPO (not assumptions)', '📝 Document runbooks with step-by-step recovery', '👥 Train team on recovery procedures', '🔄 Automate recovery where possible', '📊 Post-mortem after every incident'].map((practice, i) => (
                  <div key={i} style={{width: 670, padding: '18px 24px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))', border: '2px solid #ef4444', borderRadius: 12, fontSize: 22, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 60 + i * 12, 15), boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)'}}>{practice}</div>
                ))}
              </div>
            </div>
            <div style={{padding: 28, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))', border: '3px solid #10b981', borderRadius: 16, opacity: fadeIn(frame, scene3End + 210, 30), boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)'}}>
              <p style={{fontSize: 26, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', margin: 0, lineHeight: 1.6, fontWeight: 600}}>💡 <strong style={{color: '#6ee7b7'}}>The DR plan you don't test is the one that will fail.</strong><br />Practice recovery until it's boring!</p>
            </div>
          </div>
          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene3End + 270} />
          <Dialogue speaker="junior" text="Test, test, test! Because when disaster strikes, there's no time to figure it out!" x={width * 0.10} y={height * 0.64} startFrame={scene3End + 300} />
          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
