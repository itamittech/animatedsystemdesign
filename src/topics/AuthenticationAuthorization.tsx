import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Authentication & Authorization (Phase 8.1)
 * Duration: 85 seconds (2550 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - Authentication vs Authorization
 * Scene 2 (20-43s): Session-based vs Token-based (JWT)
 * Scene 3 (43-65s): OAuth 2.0 Flows
 * Scene 4 (65-85s): Best Practices & Common Mistakes
 */

export const AuthenticationAuthorization: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 600;
  const scene2End = 1290;
  const scene3End = 1950;
  const scene4End = 2550;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Authentication & Authorization" subtitle="Who You Are vs What You Can Do" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 330 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} />
              <Dialogue speaker="junior" text="What's the difference between authentication and authorization? I always confuse them!" x={width * 0.10} y={height * 0.64} startFrame={90} />
              <Dialogue speaker="architect" text="Authentication proves WHO you are (login). Authorization determines WHAT you can do (permissions). Both are critical for security!" x={width * 0.60} y={height * 0.64} startFrame={240} />
            </>
          )}

          <div style={{position: 'absolute', top: 350, left: width / 2 - 820, width: 1640, opacity: fadeIn(frame, 390, 30)}}>
            <div style={{display: 'flex', gap: 40}}>
              {[
                {title: 'Authentication', subtitle: 'WHO are you?', icon: '🔐', color: '#3b82f6', items: ['Verify identity (username + password)', 'Login with credentials', 'Multi-factor authentication (MFA)', 'Biometric verification', 'Examples: Login, SSO, OAuth'], example: '"Prove you are Alice"'},
                {title: 'Authorization', subtitle: 'WHAT can you do?', icon: '🛡️', color: '#10b981', items: ['Check permissions & roles', 'Access control lists (ACL)', 'Role-Based Access Control (RBAC)', 'Attribute-Based Access (ABAC)', 'Examples: Admin, User, Guest'], example: '"Alice can edit, Bob can only view"'}
              ].map((concept, i) => (
                <div key={i} style={{flex: 1, padding: 28, background: `linear-gradient(135deg, ${concept.color}22, ${concept.color}11)`, border: `3px solid ${concept.color}`, borderRadius: 16, opacity: fadeIn(frame, 420 + i * 30, 25), boxShadow: `0 0 24px ${concept.color}44`}}>
                  <div style={{fontSize: 56, textAlign: 'center', marginBottom: 12}}>{concept.icon}</div>
                  <h3 style={{fontSize: 32, fontWeight: 700, color: concept.color, textAlign: 'center', marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{concept.title}</h3>
                  <div style={{fontSize: 24, color: theme.text.secondary, textAlign: 'center', marginBottom: 20, fontFamily: theme.typography.body.fontFamily, fontStyle: 'italic'}}>{concept.subtitle}</div>
                  {concept.items.map((item, j) => (
                    <div key={j} style={{fontSize: 18, color: theme.text.muted, marginBottom: 8, fontFamily: theme.typography.body.fontFamily}}>• {item}</div>
                  ))}
                  <div style={{marginTop: 16, padding: 16, background: `${concept.color}22`, borderRadius: 8, fontSize: 20, color: concept.color, textAlign: 'center', fontFamily: 'monospace', fontWeight: 700}}>{concept.example}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Session vs Token Authentication" subtitle="Stateful vs Stateless" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            <div style={{display: 'flex', gap: 40, marginBottom: 30}}>
              {/* Session-Based */}
              <div style={{flex: 1, opacity: fadeIn(frame, scene1End + 30, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#f59e0b', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🍪 Session-Based (Traditional)</h2>
                <svg width="780" height="280">
                  {/* Client */}
                  <rect x={50} y={40} width={150} height={80} rx={10} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} opacity={fadeIn(frame, scene1End + 60, 20)} />
                  <text x={125} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Client</text>

                  {/* Server */}
                  <rect x={500} y={40} width={150} height={80} rx={10} fill="#10b981" stroke="#34d399" strokeWidth={2} opacity={fadeIn(frame, scene1End + 90, 20)} />
                  <text x={575} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Server</text>

                  {/* Session Store */}
                  <rect x={480} y={160} width={190} height={80} rx={10} fill="#ef4444" stroke="#fca5a5" strokeWidth={2} opacity={fadeIn(frame, scene1End + 120, 20)} />
                  <text x={575} y={195} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">Session Store</text>
                  <text x={575} y={220} textAnchor="middle" fill="#fecaca" fontSize={16}>(Redis/Database)</text>

                  {/* Step 1: Login */}
                  <g opacity={fadeIn(frame, scene1End + 150, 15)}>
                    <line x1={200} y1={70} x2={500} y2={70} stroke="#60a5fa" strokeWidth={3} markerEnd="url(#arrow-blue)" />
                    <text x={350} y={60} textAnchor="middle" fill="#60a5fa" fontSize={16}>1. Login (username/pass)</text>
                  </g>

                  {/* Step 2: Create Session */}
                  <g opacity={fadeIn(frame, scene1End + 180, 15)}>
                    <line x1={575} y1={120} x2={575} y2={160} stroke="#10b981" strokeWidth={3} markerEnd="url(#arrow-green)" />
                    <text x={620} y={145} fill="#34d399" fontSize={16}>2. Store session</text>
                  </g>

                  {/* Step 3: Return Cookie */}
                  <g opacity={fadeIn(frame, scene1End + 210, 15)}>
                    <line x1={500} y1={90} x2={200} y2={90} stroke="#f59e0b" strokeWidth={3} markerEnd="url(#arrow-orange)" />
                    <text x={350} y={108} textAnchor="middle" fill="#fbbf24" fontSize={16}>3. Return session ID cookie</text>
                  </g>

                  <defs>
                    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#60a5fa" /></marker>
                    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#34d399" /></marker>
                    <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#fbbf24" /></marker>
                  </defs>
                </svg>
                <div style={{padding: 20, background: 'rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b', borderRadius: 12, marginTop: 10}}>
                  <div style={{fontSize: 18, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                    ✓ Server stores session state<br />
                    ✓ Simple to invalidate<br />
                    ✗ Stateful (hard to scale)<br />
                    ✗ Needs shared session store
                  </div>
                </div>
              </div>

              {/* Token-Based (JWT) */}
              <div style={{flex: 1, opacity: fadeIn(frame, scene1End + 90, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎫 Token-Based (JWT)</h2>
                <svg width="780" height="280">
                  {/* Client */}
                  <rect x={50} y={40} width={150} height={80} rx={10} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} opacity={fadeIn(frame, scene1End + 120, 20)} />
                  <text x={125} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Client</text>

                  {/* Server */}
                  <rect x={500} y={40} width={150} height={80} rx={10} fill="#10b981" stroke="#34d399" strokeWidth={2} opacity={fadeIn(frame, scene1End + 150, 20)} />
                  <text x={575} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Server</text>

                  {/* JWT Token */}
                  <rect x={250} y={160} width={280} height={70} rx={8} fill="#8b5cf6" stroke="#a78bfa" strokeWidth={2} opacity={fadeIn(frame, scene1End + 210, 20)} />
                  <text x={390} y={190} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">JWT Token (Self-contained)</text>
                  <text x={390} y={215} textAnchor="middle" fill="#e9d5ff" fontSize={14} fontFamily="monospace">header.payload.signature</text>

                  {/* Step 1: Login */}
                  <g opacity={fadeIn(frame, scene1End + 180, 15)}>
                    <line x1={200} y1={70} x2={500} y2={70} stroke="#60a5fa" strokeWidth={3} markerEnd="url(#arrow-blue)" />
                    <text x={350} y={60} textAnchor="middle" fill="#60a5fa" fontSize={16}>1. Login</text>
                  </g>

                  {/* Step 2: Sign JWT */}
                  <g opacity={fadeIn(frame, scene1End + 240, 15)}>
                    <line x1={575} y1={120} x2={470} y2={160} stroke="#8b5cf6" strokeWidth={3} markerEnd="url(#arrow-purple)" />
                    <text x={600} y={145} fill="#a78bfa" fontSize={16}>2. Sign JWT</text>
                  </g>

                  {/* Step 3: Return Token */}
                  <g opacity={fadeIn(frame, scene1End + 270, 15)}>
                    <line x1={500} y1={90} x2={200} y2={90} stroke="#8b5cf6" strokeWidth={3} markerEnd="url(#arrow-purple)" />
                    <text x={350} y={108} textAnchor="middle" fill="#a78bfa" fontSize={16}>3. Return JWT</text>
                  </g>

                  <defs>
                    <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" /></marker>
                  </defs>
                </svg>
                <div style={{padding: 20, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, marginTop: 10}}>
                  <div style={{fontSize: 18, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                    ✓ Stateless (easy to scale)<br />
                    ✓ No server storage needed<br />
                    ✗ Can't invalidate easily<br />
                    ✗ Token size larger than cookie
                  </div>
                </div>
              </div>
            </div>

            <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene1End + 330, 25)}}>
              <h3 style={{fontSize: 24, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🔑 JWT Structure</h3>
              <div style={{fontSize: 20, color: '#d1fae5', fontFamily: 'monospace', textAlign: 'center', lineHeight: 1.8}}>
                <span style={{color: '#ef4444'}}>Header</span> (algorithm) . <span style={{color: '#f59e0b'}}>Payload</span> (user data) . <span style={{color: '#10b981'}}>Signature</span> (verify)<br />
                <span style={{fontSize: 16, color: '#94a3b8'}}>Example: eyJhbGc...iOiJKV1Q.eyJ1c2VyI...joxNTE2.SflKxwRJ...K7pNe4g</span>
              </div>
            </div>
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1110 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene1End + 390} />
              <Dialogue speaker="junior" text="JWT is stateless and scales better, but sessions are easier to revoke. Got it!" x={width * 0.10} y={height * 0.64} startFrame={scene1End + 420} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="OAuth 2.0 Flows" subtitle="Delegated Authorization" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 800, width: 1600, opacity: fadeIn(frame, scene2End + 30, 25)}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '2px solid #3b82f6', borderRadius: 12, textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🔐 OAuth 2.0: "Login with Google/GitHub"</h3>
              <p style={{fontSize: 22, color: '#dbeafe', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Let users authorize your app WITHOUT sharing their password!<br />
                Your app gets an <strong>access token</strong> to act on their behalf.
              </p>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 30}}>
              {[
                {name: 'Authorization Code', useCase: 'Web apps with backend', steps: ['User clicks "Login with Google"', 'Redirect to Google login', 'User approves', 'Google returns auth code', 'Exchange code for token (server-side)'], color: '#10b981', secure: '✓ Most secure'},
                {name: 'Implicit Flow', useCase: 'Single Page Apps (SPA)', steps: ['Redirect to auth server', 'User approves', 'Token in URL fragment', 'SPA uses token directly'], color: '#f59e0b', secure: '⚠️ Less secure (deprecated)'},
                {name: 'Client Credentials', useCase: 'Server-to-server', steps: ['No user involved', 'App authenticates itself', 'Gets access token', 'Calls API'], color: '#8b5cf6', secure: '✓ Secure for machines'},
                {name: 'Password Grant', useCase: 'Legacy/trusted apps', steps: ['User gives username/password to app', 'App sends to auth server', 'Gets token'], color: '#ef4444', secure: '✗ Avoid! Shares password'}
              ].map((flow, i) => (
                <div key={i} style={{width: 760, padding: 20, background: `linear-gradient(135deg, ${flow.color}22, ${flow.color}11)`, border: `2px solid ${flow.color}`, borderRadius: 12, opacity: fadeIn(frame, scene2End + 90 + i * 20, 20), boxShadow: `0 0 16px ${flow.color}44`}}>
                  <h4 style={{fontSize: 24, fontWeight: 700, color: flow.color, marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{flow.name}</h4>
                  <div style={{fontSize: 18, color: theme.text.muted, marginBottom: 12, fontFamily: theme.typography.body.fontFamily, fontStyle: 'italic'}}>{flow.useCase}</div>
                  {flow.steps.map((step, j) => (
                    <div key={j} style={{fontSize: 17, color: theme.text.secondary, marginBottom: 4, fontFamily: theme.typography.body.fontFamily}}>{j + 1}. {step}</div>
                  ))}
                  <div style={{marginTop: 12, fontSize: 18, color: flow.color, fontWeight: 700, fontFamily: theme.typography.body.fontFamily}}>{flow.secure}</div>
                </div>
              ))}
            </div>

            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene2End + 270, 25)}}>
              <div style={{fontSize: 20, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                💡 <strong style={{color: '#c4b5fd'}}>Modern Best Practice:</strong> Authorization Code + PKCE<br />
                (Proof Key for Code Exchange) - Prevents auth code interception
              </div>
            </div>
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1740 && (
            <>
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={scene2End + 330} />
              <Dialogue speaker="architect" text="OAuth lets users login with existing accounts. Use Authorization Code flow for web apps!" x={width * 0.60} y={height * 0.64} startFrame={scene2End + 360} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Security Best Practices" subtitle="Common Mistakes to Avoid" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>✅ Security Best Practices</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {[
                  '🔒 Always use HTTPS (encrypt in transit)',
                  '🔑 Hash passwords with bcrypt/argon2 (NEVER store plain text!)',
                  '⏱️ Implement token expiration (15min access, 7day refresh)',
                  '🔄 Use refresh tokens for long-lived sessions',
                  '🚪 Implement logout (blacklist tokens or short expiry)',
                  '🛡️ Enable MFA for sensitive operations'
                ].map((practice, i) => (
                  <div key={i} style={{width: 750, padding: '16px 24px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, fontSize: 20, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 60 + i * 12, 15), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>{practice}</div>
                ))}
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene3End + 180, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>❌ Common Mistakes</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {[
                  '💣 Storing passwords in plain text',
                  '🔓 Using HTTP instead of HTTPS',
                  '⏰ Tokens that never expire',
                  '🗝️ Weak JWT secrets (use 256+ bits)',
                  '📝 Storing tokens in localStorage (XSS risk)',
                  '🚫 No rate limiting on login endpoint'
                ].map((mistake, i) => (
                  <div key={i} style={{width: 750, padding: '16px 24px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))', border: '2px solid #ef4444', borderRadius: 12, fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 210 + i * 12, 15), boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)'}}>{mistake}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 2400 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene3End + 330} />
              <Dialogue speaker="junior" text="Security is hard! Hash passwords, use HTTPS, expire tokens, and enable MFA. No shortcuts!" x={width * 0.10} y={height * 0.64} startFrame={scene3End + 360} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
