import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Encryption & SSL/TLS (Phase 8.2)
 * Duration: 80 seconds (2400 frames at 30fps)
 *
 * Scene 1 (0-20s): Symmetric vs Asymmetric Encryption
 * Scene 2 (20-40s): TLS Handshake Process
 * Scene 3 (40-60s): Certificate Chain & PKI
 * Scene 4 (60-80s): End-to-End Encryption & Best Practices
 */

export const EncryptionSSLTLS: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  const scene1End = 600;
  const scene2End = 1200;
  const scene3End = 1800;
  const scene4End = 2400;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Encryption & SSL/TLS" subtitle="Protecting Data in Transit & At Rest" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 330 && (
            <>
              <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
              <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />
              <Dialogue speaker="junior" text="How does HTTPS actually encrypt my data? And what's the difference between encryption methods?" x={width * 0.10} y={height * 0.64} startFrame={90} maxWidth={500} />
              <Dialogue speaker="architect" text="Great question! There are two main types: symmetric (same key) and asymmetric (public/private keys). HTTPS uses BOTH!" x={width * 0.60} y={height * 0.64} startFrame={240} maxWidth={520} />
            </>
          )}

          <div style={{position: 'absolute', top: 350, left: width / 2 - 820, width: 1640, opacity: fadeIn(frame, 390, 30)}}>
            <div style={{display: 'flex', gap: 40}}>
              {[
                {
                  title: 'Symmetric Encryption',
                  subtitle: 'One Key for Both',
                  icon: '🔑',
                  color: '#3b82f6',
                  items: [
                    'Same key encrypts AND decrypts',
                    'Very fast (good for large data)',
                    'Problem: How to share key securely?',
                    'Algorithms: AES-256, ChaCha20'
                  ],
                  example: 'Alice and Bob share secret key'
                },
                {
                  title: 'Asymmetric Encryption',
                  subtitle: 'Two Keys (Pair)',
                  icon: '🔐',
                  color: '#10b981',
                  items: [
                    'Public key encrypts, private key decrypts',
                    'Slower (good for small data)',
                    'Solves key distribution problem!',
                    'Algorithms: RSA-2048, ECC'
                  ],
                  example: 'Alice encrypts with Bob\'s public key'
                }
              ].map((type, i) => (
                <div key={i} style={{flex: 1, padding: 28, background: `linear-gradient(135deg, ${type.color}22, ${type.color}11)`, border: `3px solid ${type.color}`, borderRadius: 16, opacity: fadeIn(frame, 420 + i * 30, 25), boxShadow: `0 0 24px ${type.color}44`}}>
                  <div style={{fontSize: 56, textAlign: 'center', marginBottom: 12}}>{type.icon}</div>
                  <h3 style={{fontSize: 32, fontWeight: 700, color: type.color, textAlign: 'center', marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{type.title}</h3>
                  <div style={{fontSize: 22, color: theme.text.secondary, textAlign: 'center', marginBottom: 20, fontFamily: theme.typography.body.fontFamily, fontStyle: 'italic'}}>{type.subtitle}</div>
                  {type.items.map((item, j) => (
                    <div key={j} style={{fontSize: 18, color: theme.text.muted, marginBottom: 10, fontFamily: theme.typography.body.fontFamily}}>• {item}</div>
                  ))}
                  <div style={{marginTop: 16, padding: 16, background: `${type.color}22`, borderRadius: 8, fontSize: 19, color: type.color, textAlign: 'center', fontFamily: theme.typography.body.fontFamily, fontWeight: 600}}>{type.example}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="TLS Handshake" subtitle="How HTTPS Establishes Secure Connection" />

          <div style={{position: 'absolute', top: 260, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🤝 TLS/SSL Handshake Process</h3>
              <p style={{fontSize: 22, color: '#e9d5ff', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Combines asymmetric (for key exchange) + symmetric (for data) encryption
              </p>
            </div>

            <svg width="1640" height="480" opacity={fadeIn(frame, scene1End + 60, 25)}>
              {/* Client */}
              <rect x={100} y={40} width={180} height={90} rx={12} fill="#3b82f6" stroke="#60a5fa" strokeWidth={3} opacity={fadeIn(frame, scene1End + 90, 20)} />
              <text x={190} y={80} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">Client</text>
              <text x={190} y={105} textAnchor="middle" fill="#dbeafe" fontSize={18}>(Browser)</text>

              {/* Server */}
              <rect x={1360} y={40} width={180} height={90} rx={12} fill="#10b981" stroke="#34d399" strokeWidth={3} opacity={fadeIn(frame, scene1End + 120, 20)} />
              <text x={1450} y={80} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">Server</text>
              <text x={1450} y={105} textAnchor="middle" fill="#d1fae5" fontSize={18}>(Website)</text>

              {/* Step 1: ClientHello */}
              <g opacity={fadeIn(frame, scene1End + 150, 15)}>
                <line x1={280} y1={70} x2={1360} y2={70} stroke="#60a5fa" strokeWidth={4} markerEnd="url(#arrow-blue)" />
                <text x={820} y={55} textAnchor="middle" fill="#60a5fa" fontSize={20} fontWeight="700">1. ClientHello</text>
                <text x={820} y={95} textAnchor="middle" fill="#94a3b8" fontSize={17}>"I support TLS 1.3, AES-256"</text>
              </g>

              {/* Step 2: ServerHello + Certificate */}
              <g opacity={fadeIn(frame, scene1End + 180, 15)}>
                <line x1={1360} y1={150} x2={280} y2={150} stroke="#10b981" strokeWidth={4} markerEnd="url(#arrow-green)" />
                <text x={820} y={135} textAnchor="middle" fill="#34d399" fontSize={20} fontWeight="700">2. ServerHello + Certificate</text>
                <text x={820} y={175} textAnchor="middle" fill="#94a3b8" fontSize={17}>"Here's my public key + cert chain"</text>
              </g>

              {/* Step 3: Verify Certificate */}
              <g opacity={fadeIn(frame, scene1End + 210, 15)}>
                <rect x={30} y={200} width={320} height={70} rx={10} fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth={2} />
                <text x={190} y={230} textAnchor="middle" fill="#fbbf24" fontSize={20} fontWeight="700">3. Verify Certificate</text>
                <text x={190} y={255} textAnchor="middle" fill="#fde68a" fontSize={17}>Check signature with CA</text>
              </g>

              {/* Step 4: Key Exchange */}
              <g opacity={fadeIn(frame, scene1End + 240, 15)}>
                <line x1={280} y1={290} x2={1360} y2={290} stroke="#8b5cf6" strokeWidth={4} markerEnd="url(#arrow-purple)" />
                <text x={820} y={275} textAnchor="middle" fill="#a78bfa" fontSize={20} fontWeight="700">4. Key Exchange (Encrypted)</text>
                <text x={820} y={315} textAnchor="middle" fill="#94a3b8" fontSize={17}>"Here's my random, let's generate session key"</text>
              </g>

              {/* Step 5: Both Generate Session Key */}
              <g opacity={fadeIn(frame, scene1End + 270, 15)}>
                <rect x={80} y={340} width={220} height={60} rx={10} fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth={2} />
                <text x={190} y={375} textAnchor="middle" fill="#fca5a5" fontSize={19} fontWeight="700">🔑 Session Key</text>

                <rect x={1340} y={340} width={220} height={60} rx={10} fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth={2} />
                <text x={1450} y={375} textAnchor="middle" fill="#fca5a5" fontSize={19} fontWeight="700">🔑 Session Key</text>

                <text x={820} y={375} textAnchor="middle" fill="#64748b" fontSize={18} fontStyle="italic">(Same symmetric key!)</text>
              </g>

              {/* Step 6: Encrypted Communication */}
              <g opacity={fadeIn(frame, scene1End + 300, 15)}>
                <line x1={280} y1={430} x2={1360} y2={430} stroke="#10b981" strokeWidth={4} strokeDasharray="10,5" />
                <line x1={1360} y1={450} x2={280} y2={450} stroke="#10b981" strokeWidth={4} strokeDasharray="10,5" />
                <text x={820} y={465} textAnchor="middle" fill="#6ee7b7" fontSize={22} fontWeight="700">🔒 All data encrypted with session key (AES-256)</text>
              </g>

              <defs>
                <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <polygon points="0 0, 12 6, 0 12" fill="#60a5fa" />
                </marker>
                <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <polygon points="0 0, 12 6, 0 12" fill="#34d399" />
                </marker>
                <marker id="arrow-purple" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <polygon points="0 0, 12 6, 0 12" fill="#8b5cf6" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Characters and dialogues - hidden when content fully visible */}
          {frame < 1080 && (
            <>
              <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene1End + 360} />
              <Dialogue speaker="architect" text="Asymmetric encryption establishes trust, then switches to fast symmetric encryption for actual data!" x={width * 0.60} y={height * 0.64} startFrame={scene1End + 390} maxWidth={540} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Certificate Chain & PKI" subtitle="Chain of Trust" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '2px solid #3b82f6', borderRadius: 12, opacity: fadeIn(frame, scene2End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>📜 Public Key Infrastructure (PKI)</h3>
              <p style={{fontSize: 22, color: '#dbeafe', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                How do you trust a certificate? Follow the chain to a trusted root!
              </p>
            </div>

            <svg width="1560" height="400" opacity={fadeIn(frame, scene2End + 60, 25)}>
              {/* Root CA */}
              <g opacity={fadeIn(frame, scene2End + 90, 20)}>
                <rect x={620} y={20} width={320} height={100} rx={12} fill="#ef4444" stroke="#fca5a5" strokeWidth={3} />
                <text x={780} y={55} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">🏛️ Root CA</text>
                <text x={780} y={85} textAnchor="middle" fill="#fecaca" fontSize={18}>(Let's Encrypt, DigiCert)</text>
                <text x={780} y={110} textAnchor="middle" fill="#fde68a" fontSize={16}>Self-signed, in browser/OS</text>
              </g>

              {/* Arrow down */}
              <g opacity={fadeIn(frame, scene2End + 120, 15)}>
                <line x1={780} y1={120} x2={780} y2={160} stroke="#94a3b8" strokeWidth={4} markerEnd="url(#arrow-gray)" />
                <text x={850} y={145} fill="#94a3b8" fontSize={18}>Signs ↓</text>
              </g>

              {/* Intermediate CA */}
              <g opacity={fadeIn(frame, scene2End + 150, 20)}>
                <rect x={620} y={160} width={320} height={100} rx={12} fill="#f59e0b" stroke="#fbbf24" strokeWidth={3} />
                <text x={780} y={195} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">🔗 Intermediate CA</text>
                <text x={780} y={225} textAnchor="middle" fill="#fde68a" fontSize={18}>Issued by Root CA</text>
                <text x={780} y={250} textAnchor="middle" fill="#fef3c7" fontSize={16}>Adds security layer</text>
              </g>

              {/* Arrow down */}
              <g opacity={fadeIn(frame, scene2End + 180, 15)}>
                <line x1={780} y1={260} x2={780} y2={300} stroke="#94a3b8" strokeWidth={4} markerEnd="url(#arrow-gray)" />
                <text x={850} y={285} fill="#94a3b8" fontSize={18}>Signs ↓</text>
              </g>

              {/* Server Certificate */}
              <g opacity={fadeIn(frame, scene2End + 210, 20)}>
                <rect x={620} y={300} width={320} height={100} rx={12} fill="#10b981" stroke="#34d399" strokeWidth={3} />
                <text x={780} y={335} textAnchor="middle" fill="#fff" fontSize={24} fontWeight="700">🌐 Server Cert</text>
                <text x={780} y={365} textAnchor="middle" fill="#d1fae5" fontSize={18}>example.com</text>
                <text x={780} y={390} textAnchor="middle" fill="#d1fae5" fontSize={16}>Contains public key</text>
              </g>

              {/* Verification process */}
              <g opacity={fadeIn(frame, scene2End + 240, 20)}>
                <rect x={50} y={160} width={480} height={240} rx={10} fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="8,4" />
                <text x={290} y={145} textAnchor="middle" fill="#a78bfa" fontSize={22} fontWeight="700">Browser Verification:</text>
                <text x={290} y={190} textAnchor="start" fill="#e9d5ff" fontSize={19}>1. Get example.com cert</text>
                <text x={290} y={220} textAnchor="start" fill="#e9d5ff" fontSize={19}>2. Verify signed by Intermediate</text>
                <text x={290} y={250} textAnchor="start" fill="#e9d5ff" fontSize={19}>3. Verify Intermediate signed by Root</text>
                <text x={290} y={280} textAnchor="start" fill="#e9d5ff" fontSize={19}>4. Check Root CA in trust store</text>
                <text x={290} y={310} textAnchor="start" fill="#6ee7b7" fontSize={20} fontWeight="700">✓ Chain verified! 🎉</text>
              </g>

              <defs>
                <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
                </marker>
              </defs>
            </svg>

            <div style={{marginTop: 20, padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '2px solid #ef4444', borderRadius: 12, opacity: fadeIn(frame, scene2End + 300, 25)}}>
              <h3 style={{fontSize: 24, fontWeight: 700, color: '#fca5a5', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>⚠️ Certificate Validation Checks</h3>
              <div style={{display: 'flex', gap: 30, justifyContent: 'center', fontSize: 19, color: '#fecaca', fontFamily: theme.typography.body.fontFamily}}>
                <div>✓ Not expired</div>
                <div>✓ Domain matches</div>
                <div>✓ Valid signature</div>
                <div>✓ Not revoked (CRL/OCSP)</div>
              </div>
            </div>
          </div>

          {/* Characters and dialogues - hidden when content fully visible */}
          {frame < 1680 && (
            <>
              <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene2End + 360} />
              <Dialogue speaker="junior" text="So the chain of trust goes: Root CA → Intermediate CA → Server Certificate. Browser verifies each link!" x={width * 0.10} y={height * 0.64} startFrame={scene2End + 390} maxWidth={500} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="End-to-End Encryption & Best Practices" subtitle="Maximum Security" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 780, width: 1560}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>🔒 End-to-End Encryption (E2EE)</h2>
              <div style={{padding: 28, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 12, marginBottom: 20}}>
                <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                  <strong style={{color: '#c4b5fd', fontSize: 24}}>Only sender and receiver can read messages</strong><br />
                  Even the server can't decrypt! (WhatsApp, Signal)<br /><br />
                  📱 Alice → [Encrypted] → 🖥️ Server → [Encrypted] → 📱 Bob<br />
                  Server only sees encrypted blobs, can't read content
                </div>
              </div>

              <div style={{display: 'flex', gap: 20}}>
                {[
                  {icon: '✅', label: 'E2EE Protects Against', items: ['Server breach', 'Government requests', 'Man-in-the-middle on server', 'Insider threats']},
                  {icon: '⚠️', label: 'E2EE Limitations', items: ['Can\'t search server-side', 'No password recovery', 'Device compromise still risky', 'Metadata still visible']}
                ].map((section, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: i === 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)', border: `2px solid ${i === 0 ? '#10b981' : '#ef4444'}`, borderRadius: 12, opacity: fadeIn(frame, scene3End + 90 + i * 30, 20)}}>
                    <h3 style={{fontSize: 24, fontWeight: 700, color: i === 0 ? '#6ee7b7' : '#fca5a5', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>{section.icon} {section.label}</h3>
                    {section.items.map((item, j) => (
                      <div key={j} style={{fontSize: 19, color: i === 0 ? '#d1fae5' : '#fecaca', marginBottom: 8, fontFamily: theme.typography.body.fontFamily}}>• {item}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene3End + 180, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛡️ Encryption Best Practices</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
                {[
                  '🔒 Use TLS 1.3 (disable older versions)',
                  '🔑 AES-256-GCM for symmetric encryption',
                  '📜 RSA-2048+ or ECC P-256+ for asymmetric',
                  '🗝️ Rotate encryption keys regularly',
                  '💾 Encrypt data at rest (database, backups)',
                  '🚀 Encrypt data in transit (HTTPS, TLS)',
                  '🔐 Use HSTS to enforce HTTPS',
                  '📊 Monitor certificate expiration (auto-renew!)'
                ].map((practice, i) => (
                  <div key={i} style={{width: 755, padding: '14px 20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 210 + i * 10, 12), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>{practice}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Characters and dialogues - hidden when content fully visible */}
          {frame < 2280 && (
            <>
              <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene3End + 330} />
              <Dialogue speaker="architect" text="Always use modern encryption! TLS 1.3, AES-256, rotate keys, and encrypt both in transit and at rest!" x={width * 0.60} y={height * 0.64} startFrame={scene3End + 360} maxWidth={540} />
            </>
          )}

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
