import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, slideIn, pulse} from '../design-system/animations';

/**
 * Apache Kafka & Event Streaming
 * Duration: 120 seconds (3600 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - What is Kafka?
 * Scene 2 (20-50s): Kafka Architecture - Topics, Partitions, Brokers
 * Scene 3 (50-80s): Consumer Groups & Scalability
 * Scene 4 (80-105s): Delivery Guarantees & Durability
 * Scene 5 (105-120s): When to Use Kafka
 */

export const ApacheKafka: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Scene timing
  const scene1End = 600;  // 0-20s
  const scene2End = 1500; // 20-50s
  const scene3End = 2400; // 50-80s
  const scene4End = 3150; // 80-105s
  const scene5End = 3600; // 105-120s

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

      {/* Scene 1: Introduction - What is Kafka? */}
      {frame < scene1End && (
        <>
          <Title text="Apache Kafka" subtitle="High-Throughput Event Streaming Platform" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 180 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} size={110} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} size={110} />

              <Dialogue
                speaker="junior"
                text="I keep hearing about Kafka for handling events. What makes it different from regular message queues?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={60}
                maxWidth={500}
              />

              <Dialogue
                speaker="architect"
                text="Great question! Unlike traditional queues that delete messages after consumption, Kafka is a distributed commit log that keeps events for replay. Let me show you the key challenges it solves..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={90}
                maxWidth={540}
              />
            </>
          )}

          {/* Problem Statement */}
          <div
            style={{
              position: 'absolute',
              top: 300,
              left: width / 2 - 500,
              width: 1000,
              opacity: fadeIn(frame, 30, 25),
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#fbbf24',
                marginBottom: 24,
                fontFamily: theme.typography.heading.fontFamily,
                textShadow: '0 0 24px rgba(251, 191, 36, 0.6)',
              }}
            >
              📊 The Challenge
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
              {[
                'Need to handle millions of events per second',
                'Traditional queues delete messages after consumption',
                'Multiple systems need access to the same event data',
                'Real-time analytics require replay capability',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: 20,
                    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.1))',
                    border: '2px solid #fbbf24',
                    borderRadius: 12,
                    fontSize: 24,
                    color: '#fef3c7',
                    fontFamily: theme.typography.body.fontFamily,
                    opacity: fadeIn(frame, 60 + i * 15, 20),
                    boxShadow: '0 0 16px rgba(251, 191, 36, 0.3)',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Kafka Solution */}
          <div
            style={{
              position: 'absolute',
              top: 700,
              left: width / 2 - 400,
              width: 800,
              padding: 32,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
              border: '3px solid #10b981',
              borderRadius: 16,
              opacity: fadeIn(frame, 180, 30),
              boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
            }}
          >
            <h3
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#6ee7b7',
                marginBottom: 16,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
                textShadow: '0 0 24px rgba(16, 185, 129, 0.6)',
              }}
            >
              💡 Kafka: Distributed Event Streaming Platform
            </h3>
            <p
              style={{
                fontSize: 24,
                color: '#d1fae5',
                fontFamily: theme.typography.body.fontFamily,
                textAlign: 'center',
                lineHeight: 1.6,
                margin: 0,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              A distributed commit log that stores events durably, allows replay,
              and scales horizontally to handle massive throughput
            </p>
          </div>
        </>
      )}

      {/* Scene 2: Kafka Architecture - Topics, Partitions, Brokers */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Kafka Architecture" subtitle="Topics, Partitions & Brokers" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 750 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={610} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={610} size={95} />

              <Dialogue
                speaker="junior"
                text="So how does Kafka actually organize all these events? What's the internal structure?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={630}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Kafka organizes events into Topics, which are split into Partitions across Brokers. Let me show you the architecture..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={660}
                maxWidth={520}
              />
            </>
          )}

          {/* Architecture Diagram */}
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
            {/* Producers */}
            <g opacity={fadeIn(frame, scene1End + 30, 25)}>
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect
                    x={120}
                    y={280 + i * 140}
                    width={180}
                    height={100}
                    rx={12}
                    fill="#3b82f6"
                    stroke="#60a5fa"
                    strokeWidth={2}
                  />
                  <text
                    x={210}
                    y={330 + i * 140}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={24}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Producer {i + 1}
                  </text>
                </g>
              ))}
            </g>

            {/* Kafka Cluster */}
            <g opacity={fadeIn(frame, scene1End + 60, 25)}>
              {/* Cluster Container */}
              <rect
                x={450}
                y={200}
                width={900}
                height={640}
                rx={16}
                fill="rgba(16, 185, 129, 0.1)"
                stroke="#10b981"
                strokeWidth={3}
                strokeDasharray="8,4"
              />
              <text
                x={900}
                y={240}
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize={28}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                🏢 Kafka Cluster
              </text>

              {/* Topic: user-events */}
              <text
                x={520}
                y={300}
                fill="#c4b5fd"
                fontSize={26}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                📂 Topic: user-events
              </text>

              {/* Partitions */}
              {[0, 1, 2].map((partition) => (
                <g key={partition}>
                  <rect
                    x={520 + partition * 260}
                    y={330}
                    width={240}
                    height={180}
                    rx={12}
                    fill="#8b5cf6"
                    stroke="#a78bfa"
                    strokeWidth={2}
                  />
                  <text
                    x={640 + partition * 260}
                    y={365}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={22}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Partition {partition}
                  </text>

                  {/* Event blocks */}
                  {[0, 1, 2, 3].map((event) => (
                    <rect
                      key={event}
                      x={540 + partition * 260 + event * 50}
                      y={400}
                      width={45}
                      height={80}
                      rx={6}
                      fill="#c4b5fd"
                      stroke="#e9d5ff"
                      strokeWidth={1}
                    />
                  ))}

                  <text
                    x={640 + partition * 260}
                    y={495}
                    textAnchor="middle"
                    fill="#e9d5ff"
                    fontSize={18}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Offset 0→3
                  </text>
                </g>
              ))}

              {/* Broker Labels */}
              <text
                x={520}
                y={560}
                fill="#6ee7b7"
                fontSize={20}
                fontFamily={theme.typography.label.fontFamily}
              >
                Broker 1
              </text>
              <text
                x={780}
                y={560}
                fill="#6ee7b7"
                fontSize={20}
                fontFamily={theme.typography.label.fontFamily}
              >
                Broker 2
              </text>
              <text
                x={1040}
                y={560}
                fill="#6ee7b7"
                fontSize={20}
                fontFamily={theme.typography.label.fontFamily}
              >
                Broker 3
              </text>

              {/* Topic: order-events */}
              <text
                x={520}
                y={620}
                fill="#fbbf24"
                fontSize={26}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                📂 Topic: order-events
              </text>

              {/* Order Partitions */}
              {[0, 1].map((partition) => (
                <g key={partition}>
                  <rect
                    x={520 + partition * 390}
                    y={650}
                    width={360}
                    height={160}
                    rx={12}
                    fill="#f59e0b"
                    stroke="#fbbf24"
                    strokeWidth={2}
                  />
                  <text
                    x={700 + partition * 390}
                    y={685}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={22}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Partition {partition}
                  </text>

                  {/* Event blocks */}
                  {[0, 1, 2, 3, 4, 5].map((event) => (
                    <rect
                      key={event}
                      x={540 + partition * 390 + event * 55}
                      y={720}
                      width={50}
                      height={60}
                      rx={6}
                      fill="#fde68a"
                      stroke="#fef3c7"
                      strokeWidth={1}
                    />
                  ))}
                </g>
              ))}
            </g>

            {/* Consumers */}
            <g opacity={fadeIn(frame, scene1End + 90, 25)}>
              {[0, 1].map((i) => (
                <g key={i}>
                  <rect
                    x={1500}
                    y={350 + i * 200}
                    width={180}
                    height={100}
                    rx={12}
                    fill="#ec4899"
                    stroke="#f472b6"
                    strokeWidth={2}
                  />
                  <text
                    x={1590}
                    y={400 + i * 200}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={24}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Consumer {i + 1}
                  </text>
                </g>
              ))}
            </g>

            {/* Arrows from Producers to Kafka */}
            <g opacity={fadeIn(frame, scene1End + 45, 20)}>
              {[0, 1, 2].map((i) => (
                <line
                  key={i}
                  x1={300}
                  y1={330 + i * 140}
                  x2={450}
                  y2={420}
                  stroke="#60a5fa"
                  strokeWidth={3}
                  markerEnd="url(#arrowhead-blue)"
                />
              ))}
            </g>

            {/* Arrows from Kafka to Consumers */}
            <g opacity={fadeIn(frame, scene1End + 105, 20)}>
              {[0, 1].map((i) => (
                <line
                  key={i}
                  x1={1350}
                  y1={480}
                  x2={1500}
                  y2={400 + i * 200}
                  stroke="#f472b6"
                  strokeWidth={3}
                  markerEnd="url(#arrowhead-pink)"
                />
              ))}
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
                id="arrowhead-pink"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#f472b6" />
              </marker>
            </defs>
          </svg>

          {/* Key Concepts */}
          <div
            style={{
              position: 'absolute',
              top: 880,
              left: 120,
              display: 'flex',
              gap: 30,
              opacity: fadeIn(frame, scene1End + 120, 25),
            }}
          >
            {[
              {label: 'Topic', desc: 'Category of events', color: '#c4b5fd'},
              {label: 'Partition', desc: 'Ordered, immutable log', color: '#fbbf24'},
              {label: 'Offset', desc: 'Unique event position', color: '#6ee7b7'},
              {label: 'Broker', desc: 'Kafka server node', color: '#60a5fa'},
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '16px 24px',
                  background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                  border: `2px solid ${item.color}`,
                  borderRadius: 12,
                  boxShadow: `0 0 16px ${item.color}44`,
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: item.color,
                    fontFamily: theme.typography.heading.fontFamily,
                    marginBottom: 6,
                    textShadow: `0 0 16px ${item.color}88`,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    color: theme.text.secondary,
                    fontFamily: theme.typography.body.fontFamily,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Scene 3: Consumer Groups & Scalability */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Consumer Groups" subtitle="Parallel Processing & Load Balancing" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1650 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={1510} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={1510} size={95} />

              <Dialogue
                speaker="junior"
                text="How do multiple consumers work together? Can they read the same events in parallel?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1530}
                maxWidth={470}
              />

              <Dialogue
                speaker="architect"
                text="Excellent question! Consumer Groups allow parallel processing. Each partition goes to one consumer in the group, enabling true horizontal scaling..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1560}
                maxWidth={540}
              />
            </>
          )}

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
            {/* Topic with 4 Partitions */}
            <g opacity={fadeIn(frame, scene2End + 30, 25)}>
              <text
                x={width / 2}
                y={280}
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize={32}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                📂 Topic: transactions (4 partitions)
              </text>

              {[0, 1, 2, 3].map((partition) => (
                <g key={partition}>
                  <rect
                    x={300 + partition * 340}
                    y={320}
                    width={300}
                    height={140}
                    rx={12}
                    fill="#8b5cf6"
                    stroke="#a78bfa"
                    strokeWidth={3}
                  />
                  <text
                    x={450 + partition * 340}
                    y={360}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={24}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Partition {partition}
                  </text>

                  {/* Event blocks */}
                  {[0, 1, 2, 3, 4].map((event) => (
                    <rect
                      key={event}
                      x={320 + partition * 340 + event * 52}
                      y={390}
                      width={48}
                      height={50}
                      rx={6}
                      fill="#c4b5fd"
                      stroke="#e9d5ff"
                      strokeWidth={1}
                    />
                  ))}
                </g>
              ))}
            </g>

            {/* Consumer Group 1 */}
            <g opacity={fadeIn(frame, scene2End + 60, 25)}>
              <text
                x={300}
                y={550}
                fill="#10b981"
                fontSize={28}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                👥 Consumer Group: analytics
              </text>

              {[0, 1, 2, 3].map((consumer) => (
                <g key={consumer}>
                  <rect
                    x={300 + consumer * 340}
                    y={580}
                    width={300}
                    height={100}
                    rx={12}
                    fill="#10b981"
                    stroke="#34d399"
                    strokeWidth={2}
                  />
                  <text
                    x={450 + consumer * 340}
                    y={640}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={22}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Consumer {consumer}
                  </text>
                </g>
              ))}

              {/* Arrows showing partition assignment */}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={i}
                  x1={450 + i * 340}
                  y1={460}
                  x2={450 + i * 340}
                  y2={580}
                  stroke="#34d399"
                  strokeWidth={3}
                  markerEnd="url(#arrowhead-green)"
                />
              ))}
            </g>

            {/* Consumer Group 2 */}
            <g opacity={fadeIn(frame, scene2End + 90, 25)}>
              <text
                x={300}
                y={750}
                fill="#f59e0b"
                fontSize={28}
                fontWeight={700}
                fontFamily={theme.typography.heading.fontFamily}
              >
                👥 Consumer Group: billing
              </text>

              {[0, 1].map((consumer) => (
                <g key={consumer}>
                  <rect
                    x={470 + consumer * 680}
                    y={780}
                    width={470}
                    height={100}
                    rx={12}
                    fill="#f59e0b"
                    stroke="#fbbf24"
                    strokeWidth={2}
                  />
                  <text
                    x={705 + consumer * 680}
                    y={840}
                    textAnchor="middle"
                    fill={theme.text.primary}
                    fontSize={22}
                    fontWeight={700}
                    fontFamily={theme.typography.label.fontFamily}
                  >
                    Consumer {consumer}
                  </text>
                </g>
              ))}

              {/* Arrows showing partition assignment */}
              <line x1={450} y1={460} x2={705} y2={780} stroke="#fbbf24" strokeWidth={3} markerEnd="url(#arrowhead-yellow)" />
              <line x1={790} y1={460} x2={705} y2={780} stroke="#fbbf24" strokeWidth={3} markerEnd="url(#arrowhead-yellow)" />
              <line x1={1130} y1={460} x2={1385} y2={780} stroke="#fbbf24" strokeWidth={3} markerEnd="url(#arrowhead-yellow)" />
              <line x1={1470} y1={460} x2={1385} y2={780} stroke="#fbbf24" strokeWidth={3} markerEnd="url(#arrowhead-yellow)" />
            </g>

            {/* Arrow markers */}
            <defs>
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
              <marker
                id="arrowhead-yellow"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#fbbf24" />
              </marker>
            </defs>
          </svg>

          {/* Key Points */}
          <div
            style={{
              position: 'absolute',
              top: 920,
              left: 200,
              display: 'flex',
              gap: 40,
              opacity: fadeIn(frame, scene2End + 120, 25),
            }}
          >
            {[
              'Each partition → One consumer in group',
              'Multiple groups read same events',
              'Add consumers = More parallelism',
            ].map((text, i) => (
              <div
                key={i}
                style={{
                  padding: '18px 28px',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.1))',
                  border: '2px solid #a78bfa',
                  borderRadius: 12,
                  fontSize: 22,
                  color: '#e9d5ff',
                  fontFamily: theme.typography.body.fontFamily,
                  boxShadow: '0 0 16px rgba(139, 92, 246, 0.3)',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                }}
              >
                ✓ {text}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Scene 4: Delivery Guarantees & Durability */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Delivery Guarantees" subtitle="Reliability & Durability in Kafka" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 2550 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={2410} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={2410} size={95} />

              <Dialogue
                speaker="junior"
                text="What guarantees does Kafka provide for message delivery? How reliable is it?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={2430}
                maxWidth={460}
              />

              <Dialogue
                speaker="architect"
                text="Kafka offers three delivery guarantees - at-most-once, at-least-once, and exactly-once. Each has trade-offs. Let me break them down..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={2460}
                maxWidth={540}
              />
            </>
          )}

          {/* Three Guarantee Types */}
          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 780,
              display: 'flex',
              gap: 40,
            }}
          >
            {[
              {
                title: 'At-Most-Once',
                icon: '⚡',
                color: '#ef4444',
                desc: 'Fast but may lose messages',
                details: ['Producer: acks=0', 'Consumer commits before processing', 'Best for: Metrics, logs'],
              },
              {
                title: 'At-Least-Once',
                icon: '🔄',
                color: '#f59e0b',
                desc: 'May duplicate messages',
                details: ['Producer: acks=1', 'Consumer commits after processing', 'Best for: Most use cases'],
              },
              {
                title: 'Exactly-Once',
                icon: '🎯',
                color: '#10b981',
                desc: 'Guaranteed once, slower',
                details: ['Producer: acks=all + idempotence', 'Transactional writes', 'Best for: Financial data'],
              },
            ].map((guarantee, i) => (
              <div
                key={i}
                style={{
                  width: 480,
                  padding: 28,
                  background: `linear-gradient(135deg, ${guarantee.color}22, ${guarantee.color}11)`,
                  border: `3px solid ${guarantee.color}`,
                  borderRadius: 16,
                  opacity: fadeIn(frame, scene3End + 30 + i * 30, 25),
                  boxShadow: `0 0 20px ${guarantee.color}44`,
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    textAlign: 'center',
                    marginBottom: 16,
                  }}
                >
                  {guarantee.icon}
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: guarantee.color,
                    marginBottom: 12,
                    fontFamily: theme.typography.heading.fontFamily,
                    textAlign: 'center',
                    textShadow: `0 0 20px ${guarantee.color}88`,
                  }}
                >
                  {guarantee.title}
                </h3>
                <p
                  style={{
                    fontSize: 22,
                    color: theme.text.secondary,
                    marginBottom: 20,
                    fontFamily: theme.typography.body.fontFamily,
                    textAlign: 'center',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {guarantee.desc}
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {guarantee.details.map((detail, j) => (
                    <div
                      key={j}
                      style={{
                        fontSize: 18,
                        color: theme.text.muted,
                        fontFamily: theme.typography.body.fontFamily,
                        padding: '10px 16px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 8,
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      • {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Durability Features */}
          <div
            style={{
              position: 'absolute',
              top: 700,
              left: width / 2 - 700,
              width: 1400,
              opacity: fadeIn(frame, scene3End + 120, 30),
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#60a5fa',
                marginBottom: 28,
                fontFamily: theme.typography.heading.fontFamily,
                textAlign: 'center',
                textShadow: '0 0 24px rgba(96, 165, 250, 0.6)',
              }}
            >
              🛡️ Durability & Fault Tolerance
            </h2>
            <div style={{display: 'flex', gap: 30, justifyContent: 'center'}}>
              {[
                {
                  title: 'Replication',
                  desc: 'Events replicated across brokers',
                  icon: '📋',
                  color: '#8b5cf6',
                },
                {
                  title: 'Persistence',
                  desc: 'Written to disk, survives crashes',
                  icon: '💾',
                  color: '#ec4899',
                },
                {
                  title: 'Retention',
                  desc: 'Configurable time/size limits',
                  icon: '⏰',
                  color: '#06b6d4',
                },
                {
                  title: 'Replay',
                  desc: 'Reprocess from any offset',
                  icon: '⏮️',
                  color: '#10b981',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  style={{
                    width: 320,
                    padding: 24,
                    background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}11)`,
                    border: `2px solid ${feature.color}`,
                    borderRadius: 14,
                    textAlign: 'center',
                    boxShadow: `0 0 16px ${feature.color}44`,
                  }}
                >
                  <div style={{fontSize: 42, marginBottom: 12}}>{feature.icon}</div>
                  <h4
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: feature.color,
                      marginBottom: 10,
                      fontFamily: theme.typography.heading.fontFamily,
                      textShadow: `0 0 16px ${feature.color}88`,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 20,
                      color: theme.text.secondary,
                      fontFamily: theme.typography.body.fontFamily,
                      margin: 0,
                      textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Scene 5: When to Use Kafka */}
      {frame >= scene4End && frame < scene5End && (
        <>
          <Title text="When to Use Kafka" subtitle="Ideal Use Cases & Architecture Patterns" />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 3300 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={3160} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={3160} size={95} />

              <Dialogue
                speaker="junior"
                text="This all sounds powerful! When should I actually use Kafka versus other solutions?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={3180}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Great question! Kafka excels at high-throughput event streaming. Let me show you the ideal use cases and when NOT to use it..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={3210}
                maxWidth={540}
              />
            </>
          )}

          {/* Use Cases Grid */}
          <div
            style={{
              position: 'absolute',
              top: 280,
              left: width / 2 - 800,
              width: 1600,
            }}
          >
            {/* Good Use Cases */}
            <div style={{marginBottom: 40}}>
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
                ✅ Perfect For
              </h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 22}}>
                {[
                  {title: 'Event Sourcing', desc: 'Store all state changes as events', icon: '📝'},
                  {title: 'Real-time Analytics', desc: 'Stream processing with Kafka Streams', icon: '📊'},
                  {title: 'Log Aggregation', desc: 'Centralize logs from all services', icon: '📋'},
                  {title: 'CDC (Change Data Capture)', desc: 'Track database changes', icon: '🔄'},
                  {title: 'Microservices Integration', desc: 'Async communication between services', icon: '🔗'},
                  {title: 'IoT Data Pipelines', desc: 'Handle millions of sensor events', icon: '📡'},
                ].map((useCase, i) => (
                  <div
                    key={i}
                    style={{
                      width: 490,
                      padding: 22,
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1))',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      opacity: fadeIn(frame, scene4End + 20 + i * 10, 20),
                      boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                      <span style={{fontSize: 36}}>{useCase.icon}</span>
                      <div>
                        <h4
                          style={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: '#6ee7b7',
                            margin: 0,
                            marginBottom: 6,
                            fontFamily: theme.typography.heading.fontFamily,
                            textShadow: '0 0 16px rgba(16, 185, 129, 0.5)',
                          }}
                        >
                          {useCase.title}
                        </h4>
                        <p
                          style={{
                            fontSize: 19,
                            color: '#d1fae5',
                            margin: 0,
                            fontFamily: theme.typography.body.fontFamily,
                            textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          {useCase.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* When NOT to Use */}
            <div
              style={{
                marginTop: 30,
                opacity: fadeIn(frame, scene4End + 80, 25),
              }}
            >
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#ef4444',
                  marginBottom: 24,
                  fontFamily: theme.typography.heading.fontFamily,
                  textShadow: '0 0 24px rgba(239, 68, 68, 0.6)',
                }}
              >
                ❌ Not Ideal For
              </h2>
              <div style={{display: 'flex', gap: 24}}>
                {[
                  {text: 'Simple request-response patterns (use REST/gRPC)', icon: '🚫'},
                  {text: 'Low-latency queuing (<10ms, use Redis)', icon: '⚠️'},
                  {text: 'Small-scale apps (<1000 msg/sec, use RabbitMQ)', icon: '📉'},
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      padding: 20,
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1))',
                      border: '2px solid #ef4444',
                      borderRadius: 12,
                      fontSize: 20,
                      color: '#fecaca',
                      fontFamily: theme.typography.body.fontFamily,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                      textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <span style={{fontSize: 32}}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              left: width / 2 - 600,
              width: 1200,
              padding: 28,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.15))',
              border: '3px solid #8b5cf6',
              borderRadius: 16,
              opacity: fadeIn(frame, scene4End + 120, 30),
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
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              💡 <strong style={{color: '#c4b5fd'}}>Kafka excels</strong> at high-throughput event streaming,
              providing durability, replay capability, and horizontal scalability for distributed systems
            </p>
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
