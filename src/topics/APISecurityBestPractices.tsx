import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * API Security Best Practices (Phase 8.3)
 * Duration: 75 seconds (2250 frames at 30fps)
 *
 * Scene 1 (0-20s): OWASP API Top 10
 * Scene 2 (20-40s): Input Validation & Injection Prevention
 * Scene 3 (40-58s): CORS, CSRF, XSS Protection
 * Scene 4 (58-75s): API Rate Limiting & Security Headers
 */

export const APISecurityBestPractices: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 600;
  const scene2End = 1200;
  const scene3End = 1740;
  const scene4End = 2250;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="API Security Best Practices" subtitle="Protecting Your APIs from Attacks" />
          {frame < 330 && (
            <>
              <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
              <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />
              <Dialogue speaker="junior" text="Our API is public-facing. What are the biggest security risks we need to protect against?" x={width * 0.10} y={height * 0.64} startFrame={60} />
              <Dialogue speaker="architect" text="Great timing! OWASP publishes the API Security Top 10. Let me show you the most critical vulnerabilities!" x={width * 0.60} y={height * 0.64} startFrame={240} />
            </>
          )}

          <div style={{position: 'absolute', top: 340, left: width / 2 - 850, width: 1700, opacity: fadeIn(frame, 390, 30)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>🚨 OWASP API Security Top 10 (2023)</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
              {[
                {num: '1', name: 'Broken Object Level Authorization', desc: 'Access other users\' data', color: '#ef4444'},
                {num: '2', name: 'Broken Authentication', desc: 'Weak auth mechanisms', color: '#f59e0b'},
                {num: '3', name: 'Broken Object Property Level Auth', desc: 'Expose sensitive fields', color: '#f59e0b'},
                {num: '4', name: 'Unrestricted Resource Consumption', desc: 'No rate limiting = DoS', color: '#f97316'},
                {num: '5', name: 'Broken Function Level Authorization', desc: 'Unauthorized actions', color: '#f59e0b'},
                {num: '6', name: 'Unrestricted Access to Sensitive Business Flows', desc: 'Automate critical flows', color: '#f97316'},
                {num: '7', name: 'Server Side Request Forgery (SSRF)', desc: 'Access internal services', color: '#ef4444'},
                {num: '8', name: 'Security Misconfiguration', desc: 'Default credentials, debug mode', color: '#f59e0b'},
                {num: '9', name: 'Improper Inventory Management', desc: 'Unpatched old API versions', color: '#f97316'},
                {num: '10', name: 'Unsafe Consumption of APIs', desc: 'Trust 3rd party APIs blindly', color: '#f59e0b'}
              ].map((issue, i) => (
                <div key={i} style={{width: 820, padding: '14px 22px', background: `linear-gradient(135deg, ${issue.color}22, ${issue.color}11)`, border: `2px solid ${issue.color}`, borderRadius: 12, opacity: fadeIn(frame, 420 + i * 12, 12), boxShadow: `0 0 16px ${issue.color}44`, display: 'flex', alignItems: 'center', gap: 16}}>
                  <div style={{fontSize: 32, fontWeight: 700, color: issue.color, fontFamily: 'monospace', minWidth: 50}}>{issue.num}</div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 20, fontWeight: 700, color: issue.color, marginBottom: 4, fontFamily: theme.typography.heading.fontFamily}}>{issue.name}</div>
                    <div style={{fontSize: 17, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily}}>{issue.desc}</div>
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
          <Title text="Input Validation & Injection Prevention" subtitle="Never Trust User Input" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene1End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>💉 Injection Attacks</h2>

              <div style={{marginBottom: 24, padding: 24, background: 'rgba(239, 68, 68, 0.2)', border: '3px solid #ef4444', borderRadius: 14, boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'}}>
                <h3 style={{fontSize: 26, fontWeight: 700, color: '#fca5a5', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>❌ SQL Injection (Vulnerable)</h3>
                <div style={{fontFamily: 'monospace', fontSize: 20, color: '#fecaca', marginBottom: 12}}>
                  query = "SELECT * FROM users WHERE id = " + userId;
                </div>
                <div style={{fontSize: 19, color: '#fef3c7', fontFamily: theme.typography.body.fontFamily}}>
                  Attack: userId = "1 OR 1=1" → Returns ALL users! 💀
                </div>
              </div>

              <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.2)', border: '3px solid #10b981', borderRadius: 14, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)', opacity: fadeIn(frame, scene1End + 90, 25)}}>
                <h3 style={{fontSize: 26, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>✅ Parameterized Queries (Safe)</h3>
                <div style={{fontFamily: 'monospace', fontSize: 20, color: '#d1fae5', marginBottom: 12}}>
                  query = "SELECT * FROM users WHERE id = ?", [userId];
                </div>
                <div style={{fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily}}>
                  Database driver escapes input automatically! ✓
                </div>
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene1End + 150, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛡️ Input Validation Best Practices</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
                {[
                  '✓ Whitelist validation (allow known-good, not block known-bad)',
                  '✓ Validate data type, length, format, range',
                  '✓ Use parameterized queries / prepared statements',
                  '✓ Encode output (HTML, URL, SQL, JSON context)',
                  '✓ Sanitize file uploads (check extension, MIME type, scan)',
                  '✓ Use ORM/query builders (Sequelize, Prisma, TypeORM)',
                  '✓ Never concatenate user input into queries',
                  '✓ Implement Content Security Policy (CSP)'
                ].map((practice, i) => (
                  <div key={i} style={{width: 795, padding: '14px 20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene1End + 180 + i * 10, 12), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>{practice}</div>
                ))}
              </div>
            </div>
          </div>

          {frame >= scene1End + 300 && frame < scene1End + 450 && (
            <>
              <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene1End + 300} />
              <Dialogue speaker="junior" text="Always use parameterized queries and validate ALL inputs! No exceptions!" x={width * 0.10} y={height * 0.64} startFrame={scene1End + 330} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="CORS, CSRF, XSS Protection" subtitle="Web Security Fundamentals" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{display: 'flex', gap: 30, marginBottom: 30}}>
              {/* CORS */}
              <div style={{flex: 1, opacity: fadeIn(frame, scene2End + 30, 25)}}>
                <div style={{padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'}}>
                  <h3 style={{fontSize: 28, fontWeight: 700, color: '#60a5fa', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>🌐 CORS (Cross-Origin Resource Sharing)</h3>
                  <div style={{fontSize: 19, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7, marginBottom: 16}}>
                    Browser blocks requests from different origins<br />
                    <strong>Example:</strong> app.com → api.example.com
                  </div>
                  <div style={{fontFamily: 'monospace', fontSize: 18, color: '#93c5fd', background: 'rgba(59, 130, 246, 0.2)', padding: 16, borderRadius: 8, marginBottom: 12}}>
                    Access-Control-Allow-Origin: https://app.com<br />
                    Access-Control-Allow-Methods: GET, POST<br />
                    Access-Control-Allow-Headers: Content-Type
                  </div>
                  <div style={{fontSize: 18, color: '#fca5a5', fontFamily: theme.typography.body.fontFamily}}>
                    ⚠️ NEVER use "*" in production with credentials!
                  </div>
                </div>
              </div>

              {/* CSRF */}
              <div style={{flex: 1, opacity: fadeIn(frame, scene2End + 60, 25)}}>
                <div style={{padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14, boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'}}>
                  <h3 style={{fontSize: 28, fontWeight: 700, color: '#fbbf24', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>🎣 CSRF (Cross-Site Request Forgery)</h3>
                  <div style={{fontSize: 19, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7, marginBottom: 16}}>
                    Attacker tricks user into unwanted action<br />
                    <strong>Example:</strong> Click image → Transfers money
                  </div>
                  <div style={{fontSize: 19, color: '#fef3c7', fontFamily: theme.typography.body.fontFamily, marginBottom: 12}}>
                    <strong>Defense:</strong>
                  </div>
                  <div style={{fontSize: 18, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                    ✓ CSRF tokens (random per session)<br />
                    ✓ SameSite cookie attribute<br />
                    ✓ Check Referer/Origin headers<br />
                    ✓ Re-authenticate for sensitive actions
                  </div>
                </div>
              </div>
            </div>

            {/* XSS */}
            <div style={{opacity: fadeIn(frame, scene2End + 120, 25)}}>
              <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'}}>
                <h3 style={{fontSize: 28, fontWeight: 700, color: '#fca5a5', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>💉 XSS (Cross-Site Scripting)</h3>
                <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7, marginBottom: 16}}>
                  Inject malicious scripts into pages viewed by other users → Steal cookies, hijack sessions
                </div>
                <div style={{display: 'flex', gap: 24}}>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#fca5a5', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Types:</h4>
                    <div style={{fontSize: 18, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                      <strong>Reflected:</strong> URL param → immediate response<br />
                      <strong>Stored:</strong> Saved in DB → shown to all users<br />
                      <strong>DOM-based:</strong> Client-side JavaScript
                    </div>
                  </div>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Defense:</h4>
                    <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                      ✓ Escape/encode ALL user input<br />
                      ✓ Content Security Policy (CSP)<br />
                      ✓ HTTPOnly + Secure cookies<br />
                      ✓ Use frameworks that auto-escape (React, Vue)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {frame >= scene2End + 210 && frame < scene2End + 420 && (
            <>
              <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene2End + 210} />
              <Dialogue speaker="architect" text="CORS controls access, CSRF prevents forged requests, XSS is prevented by escaping output. All critical!" x={width * 0.60} y={height * 0.64} startFrame={scene2End + 240} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="API Rate Limiting & Security Headers" subtitle="Additional Layers of Protection" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>🚦 API Rate Limiting</h2>
              <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, marginBottom: 20}}>
                <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8, textAlign: 'center'}}>
                  Prevent abuse, brute force attacks, and DoS<br />
                  <strong style={{color: '#c4b5fd'}}>Example:</strong> 100 requests/minute per IP, 1000/hour per API key
                </div>
              </div>
              <div style={{display: 'flex', gap: 20}}>
                {[
                  {title: 'Per IP Address', desc: 'Prevent single attacker', limit: '100 req/min'},
                  {title: 'Per API Key', desc: 'Fair usage per user', limit: '1000 req/hour'},
                  {title: 'Per Endpoint', desc: 'Protect expensive ops', limit: '10 req/min'},
                  {title: 'Global Limit', desc: 'Total system capacity', limit: '10K req/sec'}
                ].map((type, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene3End + 90 + i * 15, 15)}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#a78bfa', marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{type.title}</h4>
                    <div style={{fontSize: 18, color: '#e9d5ff', marginBottom: 12, fontFamily: theme.typography.body.fontFamily}}>{type.desc}</div>
                    <div style={{fontSize: 20, color: '#c4b5fd', fontFamily: 'monospace', fontWeight: 700}}>{type.limit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene3End + 180, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🔒 Security Headers</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
                {[
                  {header: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains', desc: 'Enforce HTTPS'},
                  {header: 'X-Content-Type-Options', value: 'nosniff', desc: 'Prevent MIME sniffing'},
                  {header: 'X-Frame-Options', value: 'DENY', desc: 'Prevent clickjacking'},
                  {header: 'Content-Security-Policy', value: "default-src 'self'", desc: 'Control resource loading'},
                  {header: 'X-XSS-Protection', value: '1; mode=block', desc: 'Enable XSS filter'},
                  {header: 'Referrer-Policy', value: 'no-referrer', desc: 'Control referrer info'}
                ].map((h, i) => (
                  <div key={i} style={{width: 750, padding: 18, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene3End + 210 + i * 12, 12), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>
                    <div style={{fontSize: 20, fontWeight: 700, color: '#6ee7b7', marginBottom: 6, fontFamily: 'monospace'}}>{h.header}</div>
                    <div style={{fontSize: 17, color: '#d1fae5', marginBottom: 6, fontFamily: 'monospace', wordBreak: 'break-all'}}>{h.value}</div>
                    <div style={{fontSize: 17, color: '#a7f3d0', fontFamily: theme.typography.body.fontFamily}}>{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {frame >= scene3End + 270 && frame < scene3End + 450 && (
            <>
              <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene3End + 270} />
              <Dialogue speaker="junior" text="Rate limiting prevents abuse, and security headers add multiple layers of defense. Defense in depth!" x={width * 0.10} y={height * 0.64} startFrame={scene3End + 300} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
