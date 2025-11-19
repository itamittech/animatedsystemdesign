import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, slideIn} from '../design-system/animations';

/**
 * Horizontal vs Vertical Scaling (Phase 6.1)
 * Duration: 65 seconds (1950 frames at 30fps)
 *
 * Scene 1 (0-18s): Introduction - The Scaling Problem
 * Scene 2 (18-36s): Vertical vs Horizontal Visual Comparison
 * Scene 3 (36-50s): Pros & Cons Analysis
 * Scene 4 (50-65s): When to Use Each Approach
 */

export const HorizontalVerticalScaling: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Scene timing
  const scene1End = 540;  // 0-18s
  const scene2End = 1080; // 18-36s
  const scene3End = 1500; // 36-50s
  const scene4End = 1950; // 50-65s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - The Scaling Problem */}
      {frame < scene1End && (
        <>
          <Title text="Horizontal vs Vertical Scaling" subtitle="Two Approaches to Handle Growth" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 330 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} size={110} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} size={110} />

              <Dialogue
                speaker="junior"
                text="Our app is getting slow with more users! How do we handle the increased load?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={90}
                maxWidth={500}
              />

              <Dialogue
                speaker="architect"
                text="Two main strategies: Scale UP (bigger machine) or Scale OUT (more machines). Let me show you the difference!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={240}
                maxWidth={540}
              />
            </>
          )}

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
        </>
      )}

      {/* Scene 2: Vertical vs Horizontal Visual Comparison */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Vertical vs Horizontal Scaling" subtitle="Scale UP vs Scale OUT" />

          <svg
            viewBox={`0 0 ${width} ${height}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width,
              height,
            }}
          >
            {/* Vertical Scaling (Left Side) */}
            <g opacity={fadeIn(frame, scene1End + 30, 25)}>
              <text
                x={480}
                y={280}
                textAnchor="middle"
                fill="#3b82f6"
                fontSize={36}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                ⬆️ Vertical Scaling (Scale UP)
              </text>

              {/* Before: Small Server */}
              <g opacity={fadeIn(frame, scene1End + 60, 20)}>
                <text x={280} y={350} fill="#94a3b8" fontSize={22} fontFamily={theme.typography.label.fontFamily}>
                  Before:
                </text>
                <rect
                  x={250}
                  y={370}
                  width={140}
                  height={100}
                  rx={12}
                  fill="#475569"
                  stroke="#64748b"
                  strokeWidth={2}
                />
                <text x={320} y={405} textAnchor="middle" fill={theme.text.primary} fontSize={20} fontFamily={theme.typography.label.fontFamily}>
                  Server
                </text>
                <text x={320} y={435} textAnchor="middle" fill="#94a3b8" fontSize={18} fontFamily="monospace">
                  4 CPU
                </text>
                <text x={320} y={460} textAnchor="middle" fill="#94a3b8" fontSize={18} fontFamily="monospace">
                  8GB RAM
                </text>
              </g>

              {/* Arrow */}
              <g opacity={fadeIn(frame, scene1End + 90, 20)}>
                <line x1={410} y1={420} x2={470} y2={420} stroke="#3b82f6" strokeWidth={4} markerEnd="url(#arrowhead-blue-thick)" />
                <text x={440} y={410} textAnchor="middle" fill="#60a5fa" fontSize={24} fontWeight={700}>
                  Upgrade
                </text>
              </g>

              {/* After: Bigger Server */}
              <g opacity={fadeIn(frame, scene1End + 120, 20)}>
                <text x={590} y={350} fill="#94a3b8" fontSize={22} fontFamily={theme.typography.label.fontFamily}>
                  After:
                </text>
                <rect
                  x={530}
                  y={350}
                  width={200}
                  height={160}
                  rx={12}
                  fill="#3b82f6"
                  stroke="#60a5fa"
                  strokeWidth={3}
                />
                <text x={630} y={400} textAnchor="middle" fill={theme.text.primary} fontSize={24} fontWeight={700} fontFamily={theme.typography.label.fontFamily}>
                  Bigger Server
                </text>
                <text x={630} y={435} textAnchor="middle" fill="#dbeafe" fontSize={20} fontFamily="monospace">
                  32 CPU
                </text>
                <text x={630} y={465} textAnchor="middle" fill="#dbeafe" fontSize={20} fontFamily="monospace">
                  128GB RAM
                </text>
                <text x={630} y={495} textAnchor="middle" fill="#dbeafe" fontSize={20} fontFamily="monospace">
                  2TB SSD
                </text>
              </g>

              {/* Key Point */}
              <text x={250} y={570} fill="#60a5fa" fontSize={22} fontWeight={700} fontFamily={theme.typography.body.fontFamily}>
                💰 More powerful hardware
              </text>
              <text x={250} y={610} fill="#cbd5e1" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                Add CPU, RAM, Storage to one machine
              </text>
            </g>

            {/* Horizontal Scaling (Right Side) */}
            <g opacity={fadeIn(frame, scene1End + 150, 25)}>
              <text
                x={1320}
                y={280}
                textAnchor="middle"
                fill="#10b981"
                fontSize={36}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                ➡️ Horizontal Scaling (Scale OUT)
              </text>

              {/* Before: One Server */}
              <g opacity={fadeIn(frame, scene1End + 180, 20)}>
                <text x={1120} y={350} fill="#94a3b8" fontSize={22} fontFamily={theme.typography.label.fontFamily}>
                  Before:
                </text>
                <rect
                  x={1090}
                  y={370}
                  width={140}
                  height={100}
                  rx={12}
                  fill="#475569"
                  stroke="#64748b"
                  strokeWidth={2}
                />
                <text x={1160} y={410} textAnchor="middle" fill={theme.text.primary} fontSize={20} fontFamily={theme.typography.label.fontFamily}>
                  Server
                </text>
                <text x={1160} y={440} textAnchor="middle" fill="#94a3b8" fontSize={18} fontFamily="monospace">
                  4 CPU
                </text>
                <text x={1160} y={465} textAnchor="middle" fill="#94a3b8" fontSize={18} fontFamily="monospace">
                  8GB RAM
                </text>
              </g>

              {/* Arrow */}
              <g opacity={fadeIn(frame, scene1End + 210, 20)}>
                <line x1={1250} y1={420} x2={1310} y2={420} stroke="#10b981" strokeWidth={4} markerEnd="url(#arrowhead-green-thick)" />
                <text x={1280} y={410} textAnchor="middle" fill="#34d399" fontSize={24} fontWeight={700}>
                  Add More
                </text>
              </g>

              {/* After: Multiple Servers */}
              <g opacity={fadeIn(frame, scene1End + 240, 20)}>
                <text x={1430} y={350} fill="#94a3b8" fontSize={22} fontFamily={theme.typography.label.fontFamily}>
                  After:
                </text>
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <rect
                      x={1350 + i * 160}
                      y={370}
                      width={140}
                      height={100}
                      rx={12}
                      fill="#10b981"
                      stroke="#34d399"
                      strokeWidth={3}
                    />
                    <text
                      x={1420 + i * 160}
                      y={410}
                      textAnchor="middle"
                      fill={theme.text.primary}
                      fontSize={20}
                      fontWeight={700}
                      fontFamily={theme.typography.label.fontFamily}
                    >
                      Server {i + 1}
                    </text>
                    <text x={1420 + i * 160} y={440} textAnchor="middle" fill="#d1fae5" fontSize={18} fontFamily="monospace">
                      4 CPU
                    </text>
                    <text x={1420 + i * 160} y={465} textAnchor="middle" fill="#d1fae5" fontSize={18} fontFamily="monospace">
                      8GB RAM
                    </text>
                  </g>
                ))}
              </g>

              {/* Key Point */}
              <text x={1090} y={570} fill="#34d399" fontSize={22} fontWeight={700} fontFamily={theme.typography.body.fontFamily}>
                🔄 More identical machines
              </text>
              <text x={1090} y={610} fill="#cbd5e1" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                Add more servers, distribute the load
              </text>
            </g>

            {/* Arrow markers */}
            <defs>
              <marker
                id="arrowhead-blue-thick"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="4"
                orient="auto"
              >
                <polygon points="0 0, 12 4, 0 8" fill="#3b82f6" />
              </marker>
              <marker
                id="arrowhead-green-thick"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="4"
                orient="auto"
              >
                <polygon points="0 0, 12 4, 0 8" fill="#10b981" />
              </marker>
            </defs>
          </svg>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 960 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene1End + 300} size={95} />

              <Dialogue
                speaker="junior"
                text="So vertical is like upgrading my laptop, and horizontal is like buying more laptops to share the work?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene1End + 330}
                maxWidth={480}
              />
            </>
          )}

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
        </>
      )}

      {/* Scene 3: Pros & Cons Analysis */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Comparing Approaches" subtitle="Pros & Cons" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 820,
              display: 'flex',
              gap: 80,
            }}
          >
            {/* Vertical Scaling */}
            <div style={{width: 750, opacity: fadeIn(frame, scene2End + 30, 25)}}>
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
                ⬆️ Vertical Scaling
              </h2>

              {/* Pros */}
              <div style={{marginBottom: 30}}>
                <h3
                  style={{
                    fontSize: 24,
                    color: '#10b981',
                    marginBottom: 16,
                    fontFamily: theme.typography.heading.fontFamily,
                  }}
                >
                  ✅ Pros
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {[
                    'Simple - no code changes needed',
                    'No network latency between components',
                    'Easier to manage (one machine)',
                    'Good for databases & stateful apps',
                  ].map((pro, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 20px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '2px solid #10b981',
                        borderRadius: 10,
                        fontSize: 20,
                        color: '#d1fae5',
                        fontFamily: theme.typography.body.fontFamily,
                        opacity: fadeIn(frame, scene2End + 60 + i * 15, 20),
                      }}
                    >
                      • {pro}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h3
                  style={{
                    fontSize: 24,
                    color: '#ef4444',
                    marginBottom: 16,
                    fontFamily: theme.typography.heading.fontFamily,
                  }}
                >
                  ❌ Cons
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {[
                    'Hardware limits (max CPU/RAM)',
                    'Single point of failure',
                    'Expensive (high-end hardware)',
                    'Downtime during upgrades',
                  ].map((con, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 20px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '2px solid #ef4444',
                        borderRadius: 10,
                        fontSize: 20,
                        color: '#fecaca',
                        fontFamily: theme.typography.body.fontFamily,
                        opacity: fadeIn(frame, scene2End + 120 + i * 15, 20),
                      }}
                    >
                      • {con}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Horizontal Scaling */}
            <div style={{width: 750, opacity: fadeIn(frame, scene2End + 90, 25)}}>
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
                ➡️ Horizontal Scaling
              </h2>

              {/* Pros */}
              <div style={{marginBottom: 30}}>
                <h3
                  style={{
                    fontSize: 24,
                    color: '#10b981',
                    marginBottom: 16,
                    fontFamily: theme.typography.heading.fontFamily,
                  }}
                >
                  ✅ Pros
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {[
                    'Nearly unlimited scaling potential',
                    'High availability (no single point of failure)',
                    'Cost-effective (commodity hardware)',
                    'Rolling updates (no downtime)',
                  ].map((pro, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 20px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '2px solid #10b981',
                        borderRadius: 10,
                        fontSize: 20,
                        color: '#d1fae5',
                        fontFamily: theme.typography.body.fontFamily,
                        opacity: fadeIn(frame, scene2End + 120 + i * 15, 20),
                      }}
                    >
                      • {pro}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h3
                  style={{
                    fontSize: 24,
                    color: '#ef4444',
                    marginBottom: 16,
                    fontFamily: theme.typography.heading.fontFamily,
                  }}
                >
                  ❌ Cons
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {[
                    'Complex architecture needed',
                    'Network latency between servers',
                    'Need load balancer',
                    'Must handle distributed state',
                  ].map((con, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 20px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '2px solid #ef4444',
                        borderRadius: 10,
                        fontSize: 20,
                        color: '#fecaca',
                        fontFamily: theme.typography.body.fontFamily,
                        opacity: fadeIn(frame, scene2End + 180 + i * 15, 20),
                      }}
                    >
                      • {con}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1470 && (
            <>
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={scene2End + 270} size={95} />

              <Dialogue
                speaker="architect"
                text="Exactly! Vertical is easier but hits limits. Horizontal is more complex but scales infinitely!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={scene2End + 300}
                maxWidth={540}
              />
            </>
          )}

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
        </>
      )}

      {/* Scene 4: When to Use Each Approach */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="When to Use Each" subtitle="Making the Right Choice" />

          <div
            style={{
              position: 'absolute',
              top: 260,
              left: width / 2 - 800,
              width: 1600,
            }}
          >
            {/* Use Vertical When */}
            <div style={{marginBottom: 50, opacity: fadeIn(frame, scene3End + 30, 25)}}>
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
                ⬆️ Use Vertical Scaling When:
              </h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
                {[
                  {icon: '🗄️', text: 'Legacy apps that can\'t be distributed'},
                  {icon: '💾', text: 'Databases requiring ACID transactions'},
                  {icon: '⚡', text: 'Low latency is critical (in-memory ops)'},
                  {icon: '🎯', text: 'Quick fix needed (buy time before refactor)'},
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      width: 750,
                      padding: '20px 28px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                      border: '2px solid #3b82f6',
                      borderRadius: 12,
                      fontSize: 22,
                      color: '#dbeafe',
                      fontFamily: theme.typography.body.fontFamily,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 20,
                      opacity: fadeIn(frame, scene3End + 60 + i * 15, 20),
                      boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <span style={{fontSize: 36}}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Use Horizontal When */}
            <div style={{opacity: fadeIn(frame, scene3End + 120, 25)}}>
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
                ➡️ Use Horizontal Scaling When:
              </h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
                {[
                  {icon: '🌐', text: 'Stateless web applications'},
                  {icon: '📈', text: 'Traffic is unpredictable (need auto-scaling)'},
                  {icon: '🔄', text: 'High availability is required'},
                  {icon: '💰', text: 'Cost-effective scaling at massive scale'},
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      width: 750,
                      padding: '20px 28px',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      fontSize: 22,
                      color: '#d1fae5',
                      fontFamily: theme.typography.body.fontFamily,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 20,
                      opacity: fadeIn(frame, scene3End + 150 + i * 15, 20),
                      boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <span style={{fontSize: 36}}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Practice */}
          <div
            style={{
              position: 'absolute',
              bottom: 120,
              left: width / 2 - 700,
              width: 1400,
              padding: 24,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.15))',
              border: '3px solid #8b5cf6',
              borderRadius: 16,
              opacity: fadeIn(frame, scene3End + 240, 30),
              boxShadow: '0 0 24px rgba(139, 92, 246, 0.4)',
            }}
          >
            <p
              style={{
                fontSize: 26,
                color: '#e9d5ff',
                fontFamily: theme.typography.body.fontFamily,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              💡 <strong style={{color: '#c4b5fd'}}>Best Practice:</strong> Start vertical for simplicity,
              then go horizontal when you hit limits. Modern apps often use BOTH!
            </p>
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1920 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={scene3End + 300} size={95} />

              <Dialogue
                speaker="junior"
                text="Got it! Vertical is the easy start, horizontal is for serious scale. Makes sense!"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={scene3End + 330}
                maxWidth={480}
              />
            </>
          )}

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
        </>
      )}
    </AbsoluteFill>
  );
};
