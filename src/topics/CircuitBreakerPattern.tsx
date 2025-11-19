import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Circuit Breaker Pattern (Phase 7.2)
 * Duration: 75 seconds (2250 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - The Cascading Failure Problem
 * Scene 2 (20-42s): Three States: Closed, Open, Half-Open
 * Scene 3 (42-60s): Configuration & Thresholds
 * Scene 4 (60-75s): Fallback Mechanisms & Tools
 */

export const CircuitBreakerPattern: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  // Scene timing
  const scene1End = 600;  // 0-20s
  const scene2End = 1260; // 20-42s
  const scene3End = 1800; // 42-60s
  const scene4End = 2250; // 60-75s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - The Cascading Failure Problem */}
      {frame < scene1End && (
        <>
          <Title text="Circuit Breaker Pattern" subtitle="Preventing Cascading Failures" />

          {/* Characters and dialogues - hide when content appears */}
          {frame < 330 && (
            <>
              <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
              <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />

              <Dialogue
                speaker="junior"
                text="One slow microservice is causing our entire app to hang. All requests are timing out!"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={90}
              />

              <Dialogue
                speaker="architect"
                text="Classic cascading failure! You need a Circuit Breaker - it stops calling a failing service and fails fast instead."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={240}
              />
            </>
          )}

          {/* Problem Visualization */}
          <div
            style={{
              position: 'absolute',
              top: 350,
              left: width / 2 - 600,
              width: 1200,
              opacity: fadeIn(frame, 340, 30),
            }}
          >
            <div
              style={{
                padding: 28,
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15))',
                border: '3px solid #ef4444',
                borderRadius: 16,
                boxShadow: '0 0 24px rgba(239, 68, 68, 0.4)',
              }}
            >
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#fca5a5',
                  marginBottom: 20,
                  fontFamily: theme.typography.heading.fontFamily,
                  textAlign: 'center',
                }}
              >
                💥 Without Circuit Breaker
              </h3>
              <svg width="1144" height="200">
                {/* Service A */}
                <g opacity={fadeIn(frame, 370, 20)}>
                  <rect x={50} y={60} width={200} height={80} rx={10} fill="#3b82f6" stroke="#60a5fa" strokeWidth={2} />
                  <text x={150} y={105} textAnchor="middle" fill="#fff" fontSize={22} fontWeight="700">Service A</text>
                </g>

                {/* Arrow */}
                <g opacity={fadeIn(frame, 400, 15)}>
                  <line x1={250} y1={100} x2={350} y2={100} stroke="#f59e0b" strokeWidth={4} />
                  <text x={300} y={90} textAnchor="middle" fill="#fbbf24" fontSize={18}>keeps trying</text>
                </g>

                {/* Service B (failing) */}
                <g opacity={fadeIn(frame, 430, 20)}>
                  <rect x={350} y={60} width={200} height={80} rx={10} fill="#ef4444" stroke="#fca5a5" strokeWidth={2} />
                  <text x={450} y={105} textAnchor="middle" fill="#fff" fontSize={22} fontWeight="700">Service B</text>
                  <text x={450} y={130} textAnchor="middle" fill="#fecaca" fontSize={18}>(SLOW/DOWN)</text>

                  {/* X marks */}
                  <line x1={370} y1={75} x2={530} y2={125} stroke="#fff" strokeWidth={4} />
                  <line x1={530} y1={75} x2={370} y2={125} stroke="#fff" strokeWidth={4} />
                </g>

                {/* Problems */}
                <g opacity={fadeIn(frame, 460, 20)}>
                  <text x={650} y={60} fill="#fecaca" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                    🔥 Threads blocked waiting
                  </text>
                  <text x={650} y={95} fill="#fecaca" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                    ⏱️ Timeouts everywhere
                  </text>
                  <text x={650} y={130} fill="#fecaca" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                    💥 Resources exhausted
                  </text>
                </g>
              </svg>
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

      {/* Scene 2: Three States: Closed, Open, Half-Open */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Circuit Breaker States" subtitle="Closed → Open → Half-Open" />

          {/* Characters and dialogues - hide when content appears */}
          {frame < scene1End + 180 && (
            <>
              <Character type="junior" x={width * 0.25} y={height / 2} startFrame={scene1End + 30} />

              <Dialogue
                speaker="junior"
                text="So it's like an electrical circuit breaker! Detects problems and trips to prevent damage."
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene1End + 60}
              />
            </>
          )}

          <div
            style={{
              position: 'absolute',
              top: 260,
              left: width / 2 - 850,
              width: 1700,
              opacity: fadeIn(frame, scene1End + 190, 20),
            }}
          >
            <div style={{display: 'flex', gap: 30, justifyContent: 'center'}}>
              {/* Closed State */}
              <div
                style={{
                  width: 520,
                  padding: 24,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
                  border: '3px solid #10b981',
                  borderRadius: 16,
                  opacity: fadeIn(frame, scene1End + 220, 25),
                  boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
                }}
              >
                <div style={{textAlign: 'center', marginBottom: 20}}>
                  <div style={{fontSize: 60, marginBottom: 12}}>✅</div>
                  <h3
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: '#6ee7b7',
                      margin: 0,
                      fontFamily: theme.typography.heading.fontFamily,
                      textShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
                    }}
                  >
                    CLOSED
                  </h3>
                  <div style={{fontSize: 20, color: '#d1fae5', marginTop: 8, fontFamily: theme.typography.body.fontFamily}}>
                    (Normal Operation)
                  </div>
                </div>
                <div style={{fontSize: 20, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  • All requests pass through<br />
                  • Counts failures<br />
                  • If failures &gt; threshold:<br />
                  &nbsp;&nbsp;→ Switch to OPEN
                </div>
              </div>

              {/* Open State */}
              <div
                style={{
                  width: 520,
                  padding: 24,
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15))',
                  border: '3px solid #ef4444',
                  borderRadius: 16,
                  opacity: fadeIn(frame, scene1End + 280, 25),
                  boxShadow: '0 0 24px rgba(239, 68, 68, 0.4)',
                }}
              >
                <div style={{textAlign: 'center', marginBottom: 20}}>
                  <div style={{fontSize: 60, marginBottom: 12}}>🚫</div>
                  <h3
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: '#fca5a5',
                      margin: 0,
                      fontFamily: theme.typography.heading.fontFamily,
                      textShadow: '0 0 20px rgba(239, 68, 68, 0.6)',
                    }}
                  >
                    OPEN
                  </h3>
                  <div style={{fontSize: 20, color: '#fecaca', marginTop: 8, fontFamily: theme.typography.body.fontFamily}}>
                    (Failing Fast)
                  </div>
                </div>
                <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  • All requests rejected<br />
                  • Returns fallback/error<br />
                  • Wait timeout period<br />
                  &nbsp;&nbsp;→ Switch to HALF-OPEN
                </div>
              </div>

              {/* Half-Open State */}
              <div
                style={{
                  width: 520,
                  padding: 24,
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.15))',
                  border: '3px solid #f59e0b',
                  borderRadius: 16,
                  opacity: fadeIn(frame, scene1End + 340, 25),
                  boxShadow: '0 0 24px rgba(245, 158, 11, 0.4)',
                }}
              >
                <div style={{textAlign: 'center', marginBottom: 20}}>
                  <div style={{fontSize: 60, marginBottom: 12}}>🔄</div>
                  <h3
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: '#fbbf24',
                      margin: 0,
                      fontFamily: theme.typography.heading.fontFamily,
                      textShadow: '0 0 20px rgba(245, 158, 11, 0.6)',
                    }}
                  >
                    HALF-OPEN
                  </h3>
                  <div style={{fontSize: 20, color: '#fde68a', marginTop: 8, fontFamily: theme.typography.body.fontFamily}}>
                    (Testing Recovery)
                  </div>
                </div>
                <div style={{fontSize: 20, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                  • Limited requests allowed<br />
                  • Test if service recovered<br />
                  • If success → CLOSED<br />
                  • If fail → OPEN again
                </div>
              </div>
            </div>

            {/* State Transition Diagram */}
            <div
              style={{
                marginTop: 40,
                padding: 24,
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid #8b5cf6',
                borderRadius: 12,
                opacity: fadeIn(frame, scene1End + 430, 30),
              }}
            >
              <svg width="1650" height="120">
                {/* States */}
                <circle cx={275} cy={60} r={40} fill="#10b981" stroke="#34d399" strokeWidth={3} />
                <text x={275} y={70} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">CLOSED</text>

                <circle cx={825} cy={60} r={40} fill="#ef4444" stroke="#fca5a5" strokeWidth={3} />
                <text x={825} y={70} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">OPEN</text>

                <circle cx={1375} cy={60} r={40} fill="#f59e0b" stroke="#fbbf24" strokeWidth={3} />
                <text x={1375} y={65} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">HALF</text>
                <text x={1375} y={82} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">OPEN</text>

                {/* Arrows */}
                <g>
                  {/* Closed to Open */}
                  <line x1={315} y1={55} x2={785} y2={55} stroke="#ef4444" strokeWidth={3} markerEnd="url(#arrow-red)" />
                  <text x={550} y={45} textAnchor="middle" fill="#fca5a5" fontSize={16}>threshold exceeded</text>

                  {/* Open to Half-Open */}
                  <line x1={865} y1={55} x2={1335} y2={55} stroke="#f59e0b" strokeWidth={3} markerEnd="url(#arrow-orange)" />
                  <text x={1100} y={45} textAnchor="middle" fill="#fbbf24" fontSize={16}>timeout elapsed</text>

                  {/* Half-Open to Closed */}
                  <path d="M 1345 95 Q 825 140, 305 95" fill="none" stroke="#10b981" strokeWidth={3} markerEnd="url(#arrow-green)" />
                  <text x={825} y={155} textAnchor="middle" fill="#34d399" fontSize={16}>success</text>

                  {/* Half-Open to Open */}
                  <line x1={1335} y1={65} x2={865} y2={65} stroke="#ef4444" strokeWidth={3} markerEnd="url(#arrow-red)" />
                  <text x={1100} y={85} textAnchor="middle" fill="#fca5a5" fontSize={16}>still failing</text>
                </g>

                <defs>
                  <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                  <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
                  </marker>
                  <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                  </marker>
                </defs>
              </svg>
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

      {/* Scene 3: Configuration & Thresholds */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Circuit Breaker Configuration" subtitle="Tuning for Your System" />

          {/* Characters and dialogues - hide when content appears */}
          {frame < scene2End + 150 && (
            <>
              <Character type="architect" x={width * 0.75} y={height / 2} startFrame={scene2End + 30} />

              <Dialogue
                speaker="architect"
                text="Configuration is key! Too sensitive = false positives. Too lenient = slow failure detection."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={scene2End + 60}
              />
            </>
          )}

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 700,
              width: 1400,
              opacity: fadeIn(frame, scene2End + 160, 20),
            }}
          >
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center'}}>
              {[
                {
                  icon: '🎯',
                  title: 'Failure Threshold',
                  value: '50% error rate or 5 consecutive failures',
                  color: '#ef4444',
                },
                {
                  icon: '⏱️',
                  title: 'Timeout',
                  value: '2-5 seconds per request',
                  color: '#f59e0b',
                },
                {
                  icon: '🔄',
                  title: 'Reset Timeout',
                  value: '30-60 seconds before trying again',
                  color: '#8b5cf6',
                },
                {
                  icon: '🧪',
                  title: 'Half-Open Limit',
                  value: 'Allow 1-3 test requests',
                  color: '#06b6d4',
                },
                {
                  icon: '📊',
                  title: 'Window Size',
                  value: 'Track last 100 requests or 10 seconds',
                  color: '#10b981',
                },
                {
                  icon: '⚙️',
                  title: 'Success Threshold',
                  value: '2-3 successes to close circuit',
                  color: '#3b82f6',
                },
              ].map((config, i) => (
                <div
                  key={i}
                  style={{
                    width: 670,
                    padding: 24,
                    background: `linear-gradient(135deg, ${config.color}22, ${config.color}11)`,
                    border: `3px solid ${config.color}`,
                    borderRadius: 14,
                    opacity: fadeIn(frame, scene2End + 190 + i * 15, 20),
                    boxShadow: `0 0 16px ${config.color}44`,
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                    <div style={{fontSize: 48}}>{config.icon}</div>
                    <div style={{flex: 1}}>
                      <h3
                        style={{
                          fontSize: 26,
                          fontWeight: 700,
                          color: config.color,
                          margin: 0,
                          marginBottom: 8,
                          fontFamily: theme.typography.heading.fontFamily,
                        }}
                      >
                        {config.title}
                      </h3>
                      <div
                        style={{
                          fontSize: 20,
                          color: theme.text.secondary,
                          fontFamily: 'monospace',
                        }}
                      >
                        {config.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Best Practice */}
            <div
              style={{
                marginTop: 40,
                padding: 28,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.15))',
                border: '3px solid #8b5cf6',
                borderRadius: 16,
                opacity: fadeIn(frame, scene2End + 370, 30),
                boxShadow: '0 0 24px rgba(139, 92, 246, 0.4)',
              }}
            >
              <p
                style={{
                  fontSize: 24,
                  color: '#e9d5ff',
                  fontFamily: theme.typography.body.fontFamily,
                  textAlign: 'center',
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                💡 <strong style={{color: '#c4b5fd'}}>Start conservative:</strong> Higher thresholds, longer timeouts.<br />
                Tune based on monitoring and actual failure patterns.
              </p>
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

      {/* Scene 4: Fallback Mechanisms & Tools */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Fallbacks & Tools" subtitle="Graceful Degradation with Circuit Breakers" />

          {/* Characters and dialogues - hide when content appears */}
          {frame < scene3End + 150 && (
            <>
              <Character type="junior" x={width * 0.25} y={height / 2} startFrame={scene3End + 30} />

              <Dialogue
                speaker="junior"
                text="Circuit breaker + fallbacks = resilient system! Fail fast, provide alternatives, and recover automatically!"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene3End + 60}
              />
            </>
          )}

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 750,
              width: 1500,
              opacity: fadeIn(frame, scene3End + 160, 20),
            }}
          >
            {/* Fallback Strategies */}
            <div style={{marginBottom: 40, opacity: fadeIn(frame, scene3End + 190, 25)}}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#10b981',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textAlign: 'center',
                  textShadow: '0 0 24px rgba(16, 185, 129, 0.6)',
                }}
              >
                🛡️ Fallback Strategies
              </h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center'}}>
                {[
                  '💾 Return cached data (stale but useful)',
                  '📋 Default/static response',
                  '🔀 Route to backup service',
                  '⚠️ Graceful error message',
                ].map((strategy, i) => (
                  <div
                    key={i}
                    style={{
                      width: 710,
                      padding: '18px 24px',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      fontSize: 22,
                      color: '#d1fae5',
                      fontFamily: theme.typography.body.fontFamily,
                      opacity: fadeIn(frame, scene3End + 220 + i * 15, 15),
                      boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    {strategy}
                  </div>
                ))}
              </div>
            </div>

            {/* Example */}
            <div
              style={{
                padding: 24,
                background: 'rgba(59, 130, 246, 0.1)',
                border: '2px solid #3b82f6',
                borderRadius: 12,
                marginBottom: 30,
                opacity: fadeIn(frame, scene3End + 310, 25),
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#60a5fa',
                  marginBottom: 16,
                  fontFamily: theme.typography.heading.fontFamily,
                }}
              >
                📸 Example: E-commerce Product Service
              </h3>
              <div style={{fontSize: 20, color: '#dbeafe', fontFamily: 'monospace', lineHeight: 1.8}}>
                <span style={{color: '#10b981'}}>✓ Circuit CLOSED:</span> Fetch from database<br />
                <span style={{color: '#ef4444'}}>✗ Circuit OPEN:</span> Return cached products + "Prices may be outdated"<br />
                <span style={{color: '#f59e0b'}}>⚡ Circuit HALF-OPEN:</span> Try 1 request to test recovery
              </div>
            </div>

            {/* Tools */}
            <div
              style={{
                padding: 28,
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.15))',
                border: '3px solid #f59e0b',
                borderRadius: 16,
                opacity: fadeIn(frame, scene3End + 370, 30),
                boxShadow: '0 0 24px rgba(245, 158, 11, 0.4)',
              }}
            >
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#fbbf24',
                  marginBottom: 16,
                  fontFamily: theme.typography.heading.fontFamily,
                  textAlign: 'center',
                  textShadow: '0 0 20px rgba(245, 158, 11, 0.6)',
                }}
              >
                🛠️ Popular Circuit Breaker Libraries
              </h3>
              <div
                style={{
                  fontSize: 24,
                  color: '#fde68a',
                  fontFamily: theme.typography.body.fontFamily,
                  textAlign: 'center',
                  lineHeight: 1.8,
                }}
              >
                Netflix Hystrix • Resilience4j • Polly (.NET) • Failsafe (Java) • pybreaker (Python)
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
    </AbsoluteFill>
  );
};
