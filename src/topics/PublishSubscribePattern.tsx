import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, slideIn} from '../design-system/animations';

/**
 * Publish-Subscribe Pattern (Phase 5.3)
 * Duration: 70 seconds (2100 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - What is Pub-Sub?
 * Scene 2 (20-40s): Pub-Sub vs Message Queue
 * Scene 3 (40-55s): Topic-based vs Content-based
 * Scene 4 (55-70s): Real-world Use Cases & When to Use
 */

export const PublishSubscribePattern: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  // Scene timing
  const scene1End = 600;  // 0-20s
  const scene2End = 1200; // 20-40s
  const scene3End = 1650; // 40-55s
  const scene4End = 2100; // 55-70s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - What is Pub-Sub? */}
      {frame < scene1End && (
        <>
          <Title text="Publish-Subscribe Pattern" subtitle="Decoupled Event Distribution" />

          <Character type="junior" x={width * 0.25} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height / 2 + 100} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="We learned about message queues and Kafka. What's a publish-subscribe pattern, and how is it different?"
            x={width * 0.10}
            y={height * 0.64}
            startFrame={90}
          />

          <Dialogue
            speaker="architect"
            text="Pub-Sub decouples publishers from subscribers. Publishers send messages to topics without knowing who subscribes. It's perfect for broadcasting events to multiple consumers!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={240}
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

      {/* Scene 2: Pub-Sub vs Message Queue */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Pub-Sub vs Message Queue" subtitle="Understanding the Differences" />

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
            {/* Message Queue (Left Side) */}
            <g opacity={fadeIn(frame, scene1End + 30, 25)}>
              <text
                x={480}
                y={280}
                textAnchor="middle"
                fill="#fbbf24"
                fontSize={32}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                📮 Message Queue
              </text>

              {/* Producer */}
              <rect
                x={200}
                y={320}
                width={160}
                height={80}
                rx={12}
                fill="#3b82f6"
                stroke="#60a5fa"
                strokeWidth={2}
              />
              <text
                x={280}
                y={365}
                textAnchor="middle"
                fill={theme.text.primary}
                fontSize={22}
                fontWeight={700}
                fontFamily={theme.typography.label.fontFamily}
              >
                Producer
              </text>

              {/* Queue */}
              <rect
                x={400}
                y={320}
                width={160}
                height={80}
                rx={12}
                fill="#8b5cf6"
                stroke="#a78bfa"
                strokeWidth={2}
              />
              <text
                x={480}
                y={365}
                textAnchor="middle"
                fill={theme.text.primary}
                fontSize={22}
                fontWeight={700}
                fontFamily={theme.typography.label.fontFamily}
              >
                Queue
              </text>

              {/* Consumer */}
              <rect
                x={600}
                y={320}
                width={160}
                height={80}
                rx={12}
                fill="#ec4899"
                stroke="#f472b6"
                strokeWidth={2}
              />
              <text
                x={680}
                y={365}
                textAnchor="middle"
                fill={theme.text.primary}
                fontSize={22}
                fontWeight={700}
                fontFamily={theme.typography.label.fontFamily}
              >
                Consumer
              </text>

              {/* Arrows */}
              <line x1={360} y1={360} x2={400} y2={360} stroke="#60a5fa" strokeWidth={3} markerEnd="url(#arrowhead-blue)" />
              <line x1={560} y1={360} x2={600} y2={360} stroke="#a78bfa" strokeWidth={3} markerEnd="url(#arrowhead-purple)" />

              {/* Key Points */}
              <text x={200} y={450} fill="#d1fae5" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                ✓ One message → One consumer
              </text>
              <text x={200} y={485} fill="#d1fae5" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                ✓ Point-to-point delivery
              </text>
              <text x={200} y={520} fill="#d1fae5" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                ✓ Load balancing across consumers
              </text>
            </g>

            {/* Pub-Sub (Right Side) */}
            <g opacity={fadeIn(frame, scene1End + 60, 25)}>
              <text
                x={1280}
                y={280}
                textAnchor="middle"
                fill="#10b981"
                fontSize={32}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                📡 Pub-Sub
              </text>

              {/* Publisher */}
              <rect
                x={1000}
                y={320}
                width={160}
                height={80}
                rx={12}
                fill="#3b82f6"
                stroke="#60a5fa"
                strokeWidth={2}
              />
              <text
                x={1080}
                y={365}
                textAnchor="middle"
                fill={theme.text.primary}
                fontSize={22}
                fontWeight={700}
                fontFamily={theme.typography.label.fontFamily}
              >
                Publisher
              </text>

              {/* Topic */}
              <ellipse
                cx={1280}
                cy={360}
                rx={80}
                ry={60}
                fill="#10b981"
                stroke="#34d399"
                strokeWidth={2}
              />
              <text
                x={1280}
                y={370}
                textAnchor="middle"
                fill={theme.text.primary}
                fontSize={22}
                fontWeight={700}
                fontFamily={theme.typography.label.fontFamily}
              >
                Topic
              </text>

              {/* Subscribers */}
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect
                    x={1420}
                    y={280 + i * 100}
                    width={140}
                    height={70}
                    rx={12}
                    fill="#ec4899"
                    stroke="#f472b6"
                    strokeWidth={2}
                  />
                  <text
                    x={1490}
                    y={320 + i * 100}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={20}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Sub {i + 1}
                  </text>
                  {/* Arrow from Topic to Subscriber */}
                  <line
                    x1={1360}
                    y1={360}
                    x2={1420}
                    y2={315 + i * 100}
                    stroke="#34d399"
                    strokeWidth={3}
                    markerEnd="url(#arrowhead-green)"
                  />
                </g>
              ))}

              {/* Arrow from Publisher to Topic */}
              <line x1={1160} y1={360} x2={1200} y2={360} stroke="#60a5fa" strokeWidth={3} markerEnd="url(#arrowhead-blue)" />

              {/* Key Points */}
              <text x={1000} y={570} fill="#d1fae5" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                ✓ One message → Many subscribers
              </text>
              <text x={1000} y={605} fill="#d1fae5" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                ✓ Broadcasting events
              </text>
              <text x={1000} y={640} fill="#d1fae5" fontSize={20} fontFamily={theme.typography.body.fontFamily}>
                ✓ Decoupled communication
              </text>
            </g>

            {/* Arrow markers */}
            <defs>
              <marker
                id="arrowhead-blue"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
              </marker>
              <marker
                id="arrowhead-purple"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#a78bfa" />
              </marker>
              <marker
                id="arrowhead-green"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#34d399" />
              </marker>
            </defs>
          </svg>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene1End + 90} />

          <Dialogue
            speaker="junior"
            text="So in Pub-Sub, all subscribers get the same message? That's different from queues where only one consumer gets it!"
            x={width * 0.10}
            y={height * 0.64}
            startFrame={scene1End + 120}
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

      {/* Scene 3: Topic-based vs Content-based */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Topic-based vs Content-based" subtitle="Two Filtering Approaches" />

          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 800,
              display: 'flex',
              gap: 80,
            }}
          >
            {/* Topic-based */}
            <div
              style={{
                width: 700,
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
                📂 Topic-Based Routing
              </h2>

              <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                {[
                  {label: 'Topic: user.signup', color: '#8b5cf6'},
                  {label: 'Topic: order.created', color: '#10b981'},
                  {label: 'Topic: payment.failed', color: '#ef4444'},
                ].map((topic, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '20px 28px',
                      background: `linear-gradient(135deg, ${topic.color}22, ${topic.color}11)`,
                      border: `2px solid ${topic.color}`,
                      borderRadius: 12,
                      opacity: fadeIn(frame, scene2End + 60 + i * 20, 20),
                      boxShadow: `0 0 16px ${topic.color}44`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: topic.color,
                        fontFamily: theme.typography.heading.fontFamily,
                        textShadow: `0 0 16px ${topic.color}88`,
                      }}
                    >
                      {topic.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 30,
                  padding: 24,
                  background: 'rgba(96, 165, 250, 0.1)',
                  border: '2px solid #60a5fa',
                  borderRadius: 12,
                  opacity: fadeIn(frame, scene2End + 140, 25),
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    color: theme.text.secondary,
                    fontFamily: theme.typography.body.fontFamily,
                    lineHeight: 1.6,
                  }}
                >
                  ✓ Subscribe to specific topics<br />
                  ✓ Simple & performant<br />
                  ✓ AWS SNS, Google Pub/Sub
                </div>
              </div>
            </div>

            {/* Content-based */}
            <div
              style={{
                width: 700,
                opacity: fadeIn(frame, scene2End + 90, 25),
              }}
            >
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#f59e0b',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(245, 158, 11, 0.6)',
                }}
              >
                🔍 Content-Based Filtering
              </h2>

              <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                {[
                  {label: 'Filter: price > 1000', color: '#8b5cf6'},
                  {label: 'Filter: region = "US"', color: '#10b981'},
                  {label: 'Filter: priority = "high"', color: '#ef4444'},
                ].map((filter, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '20px 28px',
                      background: `linear-gradient(135deg, ${filter.color}22, ${filter.color}11)`,
                      border: `2px solid ${filter.color}`,
                      borderRadius: 12,
                      opacity: fadeIn(frame, scene2End + 120 + i * 20, 20),
                      boxShadow: `0 0 16px ${filter.color}44`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: filter.color,
                        fontFamily: theme.typography.heading.fontFamily,
                        textShadow: `0 0 16px ${filter.color}88`,
                      }}
                    >
                      {filter.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 30,
                  padding: 24,
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '2px solid #f59e0b',
                  borderRadius: 12,
                  opacity: fadeIn(frame, scene2End + 200, 25),
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    color: theme.text.secondary,
                    fontFamily: theme.typography.body.fontFamily,
                    lineHeight: 1.6,
                  }}
                >
                  ✓ Filter by message attributes<br />
                  ✓ More flexible routing<br />
                  ✓ SNS Message Filtering
                </div>
              </div>
            </div>
          </div>

          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={scene2End + 240} />

          <Dialogue
            speaker="architect"
            text="Topic-based is simpler - subscribe to 'orders'. Content-based is powerful - subscribe to orders WHERE amount > $1000!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={scene2End + 270}
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

      {/* Scene 4: Real-world Use Cases & When to Use */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="When to Use Pub-Sub" subtitle="Real-World Applications" />

          {/* Use Cases Grid */}
          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 800,
              width: 1600,
            }}
          >
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 28}}>
              {[
                {
                  title: 'Notifications',
                  desc: 'Send alerts to email, SMS, push',
                  icon: '📢',
                  color: '#3b82f6',
                  example: 'Order confirmation → Email + SMS + Push',
                },
                {
                  title: 'Event Broadcasting',
                  desc: 'Notify multiple services of events',
                  icon: '📡',
                  color: '#8b5cf6',
                  example: 'User signup → Analytics + CRM + Email',
                },
                {
                  title: 'Fan-out Processing',
                  desc: 'Parallel processing of same event',
                  icon: '🌟',
                  color: '#10b981',
                  example: 'Image upload → Thumbnail + Compress + Scan',
                },
                {
                  title: 'Real-time Updates',
                  desc: 'Push updates to multiple clients',
                  icon: '⚡',
                  color: '#f59e0b',
                  example: 'Stock price → All subscribed dashboards',
                },
                {
                  title: 'Microservices Events',
                  desc: 'Decouple service communication',
                  icon: '🔗',
                  color: '#ec4899',
                  example: 'Payment success → Inventory + Shipping',
                },
                {
                  title: 'IoT Data Distribution',
                  desc: 'Distribute sensor data to consumers',
                  icon: '📡',
                  color: '#06b6d4',
                  example: 'Temperature sensor → Monitor + Alert + Log',
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  style={{
                    width: 490,
                    padding: 24,
                    background: `linear-gradient(135deg, ${useCase.color}22, ${useCase.color}11)`,
                    border: `2px solid ${useCase.color}`,
                    borderRadius: 14,
                    opacity: fadeIn(frame, scene3End + 30 + i * 15, 20),
                    boxShadow: `0 0 16px ${useCase.color}44`,
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: 16}}>
                    <span style={{fontSize: 40}}>{useCase.icon}</span>
                    <div style={{flex: 1}}>
                      <h4
                        style={{
                          fontSize: 26,
                          fontWeight: 700,
                          color: useCase.color,
                          margin: 0,
                          marginBottom: 8,
                          fontFamily: theme.typography.heading.fontFamily,
                          textShadow: `0 0 16px ${useCase.color}88`,
                        }}
                      >
                        {useCase.title}
                      </h4>
                      <p
                        style={{
                          fontSize: 20,
                          color: theme.text.secondary,
                          margin: 0,
                          marginBottom: 10,
                          fontFamily: theme.typography.body.fontFamily,
                        }}
                      >
                        {useCase.desc}
                      </p>
                      <div
                        style={{
                          fontSize: 18,
                          color: theme.text.muted,
                          fontFamily: 'monospace',
                          fontStyle: 'italic',
                        }}
                      >
                        {useCase.example}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Tools */}
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
              opacity: fadeIn(frame, scene3End + 180, 30),
              boxShadow: '0 0 24px rgba(139, 92, 246, 0.4)',
            }}
          >
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#c4b5fd',
                marginBottom: 16,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
              }}
            >
              🛠️ Popular Pub-Sub Tools
            </h3>
            <div
              style={{
                fontSize: 24,
                color: theme.text.secondary,
                fontFamily: theme.typography.body.fontFamily,
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              AWS SNS • Google Cloud Pub/Sub • Azure Service Bus • Redis Pub/Sub • Apache Pulsar
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height - 200} startFrame={scene3End + 240} />

          <Dialogue
            speaker="junior"
            text="Perfect! So use Pub-Sub when I need to broadcast the same event to multiple independent consumers. Got it!"
            x={width * 0.10}
            y={height * 0.64}
            startFrame={scene3End + 270}
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
