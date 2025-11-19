import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {TextBox} from '../components/TextBox';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Load Balancing Basics - Deep dive into load balancing architecture
 * For experienced architects - covers L4/L7, algorithms, and trade-offs
 */
export const LoadBalancingBasics: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.background.primary,
      }}
    >
      {/* Scene 1: Title (0-180 frames / 0-6s) */}
      {frame < 180 && (
        <>
          <Title
            text="Load Balancing"
            subtitle="Distribution, Scalability, and High Availability"
            startFrame={0}
          />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 150 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} size={110} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} size={110} />

              <Dialogue
                speaker="junior"
                text="We learned how DNS and TLS work. Now how do we handle millions of requests without a single server becoming overwhelmed?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={60}
                maxWidth={500}
              />

              <Dialogue
                speaker="architect"
                text="That's where load balancing comes in! It's the art of distributing traffic across multiple servers for scalability and high availability."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={150}
                maxWidth={520}
              />
            </>
          )}
        </>
      )}

      {/* Scene 2: Basic Load Balancing (180-540 frames / 6-18s) */}
      {frame >= 180 && frame < 540 && (
        <>
          <Title
            text="Basic Load Balancing"
            subtitle="Single Load Balancer Pattern"
            startFrame={180}
            y={60}
          />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 360 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={190} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={190} size={95} />

              <Dialogue
                speaker="junior"
                text="So the load balancer sits between clients and servers. How does it decide where to send each request?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={210}
                maxWidth={460}
              />

              <Dialogue
                speaker="architect"
                text="Great question! Let me show you the basic pattern first, then we'll explore different algorithms..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={270}
                maxWidth={500}
              />
            </>
          )}


          {frame >= 370 && (
            <svg width={width} height={height}>
              {/* Clients */}
              <Box
                x={100}
                y={300}
                width={180}
                height={120}
                color={theme.colors.client}
                label="Client 1"
                icon="👤"
                startFrame={370}
              />
              <Box
                x={100}
                y={450}
                width={180}
                height={120}
                color={theme.colors.client}
                label="Client 2"
                icon="👤"
                startFrame={375}
              />
              <Box
                x={100}
                y={600}
                width={180}
                height={120}
                color={theme.colors.client}
                label="Client 3"
                icon="👤"
                startFrame={380}
              />

              {/* Load Balancer */}
              <Box
                x={500}
                y={425}
                width={220}
                height={150}
                color={theme.colors.loadBalancer}
                label="Load Balancer"
                icon="⚖️"
                subLabel="L4/L7"
                startFrame={390}
              />

              {/* Backend Servers */}
              <Box
                x={1000}
                y={250}
                width={200}
                height={130}
                color={theme.colors.server}
                label="Server 1"
                icon="🖥️"
                subLabel="Active"
                startFrame={405}
              />
              <Box
                x={1000}
                y={425}
                width={200}
                height={130}
                color={theme.colors.server}
                label="Server 2"
                icon="🖥️"
                subLabel="Active"
                startFrame={410}
              />
              <Box
                x={1000}
                y={600}
                width={200}
                height={130}
                color={theme.colors.server}
                label="Server 3"
                icon="🖥️"
                subLabel="Active"
                startFrame={415}
              />

              {/* Arrows from clients to LB */}
              <Arrow
                x1={280}
                y1={360}
                x2={500}
                y2={475}
                color={theme.colors.client}
                label="Request"
                startFrame={425}
              />
              <Arrow
                x1={280}
                y1={510}
                x2={500}
                y2={500}
                color={theme.colors.client}
                label="Request"
                startFrame={430}
              />
              <Arrow
                x1={280}
                y1={660}
                x2={500}
                y2={525}
                color={theme.colors.client}
                label="Request"
                startFrame={435}
              />

              {/* Arrows from LB to servers */}
              <Arrow
                x1={720}
                y1={475}
                x2={1000}
                y2={315}
                color={theme.colors.loadBalancer}
                label="33%"
                startFrame={450}
              />
              <Arrow
                x1={720}
                y1={500}
                x2={1000}
                y2={490}
                color={theme.colors.loadBalancer}
                label="33%"
                startFrame={455}
              />
              <Arrow
                x1={720}
                y1={525}
                x2={1000}
                y2={665}
                color={theme.colors.loadBalancer}
                label="34%"
                startFrame={460}
              />
            </svg>
          )}

          {frame >= 470 && (
            <TextBox
              x={1300}
              y={250}
              width={550}
              title="Considerations"
              points={[
                'LB becomes a single point of failure',
                'Bottleneck for high-traffic systems',
                'Need health checks for server failures',
                'Session persistence required for stateful apps',
              ]}
              startFrame={470}
            />
          )}
        </>
      )}

      {/* Scene 3: Load Balancing Algorithms (540-960 frames / 18-32s) */}
      {frame >= 540 && frame < 960 && (
        <>
          <Title
            text="Load Balancing Algorithms"
            subtitle="Choosing the Right Distribution Strategy"
            startFrame={540}
            y={60}
          />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 720 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={550} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={550} size={95} />

              <Dialogue
                speaker="junior"
                text="Round robin seems simple, but what if servers have different capacities or some requests take longer than others?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={570}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Excellent thinking! That's why we have different algorithms. Let me show you the options and their trade-offs..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={630}
                maxWidth={520}
              />
            </>
          )}


          {frame >= 730 && (
            <>
              <div
                style={{
                  position: 'absolute',
                  left: 100,
                  top: 200,
                  opacity: fadeIn(frame, 730, 20),
                }}
              >
                <AlgorithmCard
                  title="Round Robin"
                  description="Distributes requests sequentially across servers"
                  pros={['Simple implementation', 'Equal distribution']}
                  cons={['Ignores server load', 'Inefficient for varied workloads']}
                  useCase="Homogeneous servers with similar capacity"
                  startFrame={730}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 100,
                  top: 450,
                  opacity: fadeIn(frame, 770, 20),
                }}
              >
                <AlgorithmCard
                  title="Weighted Round Robin"
                  description="Like RR but with weights for server capacity"
                  pros={['Accounts for server capacity', 'Flexible allocation']}
                  cons={['Requires capacity configuration', 'Still ignores runtime load']}
                  useCase="Heterogeneous infrastructure with known capacities"
                  startFrame={770}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 1000,
                  top: 200,
                  opacity: fadeIn(frame, 810, 20),
                }}
              >
                <AlgorithmCard
                  title="Least Connections"
                  description="Routes to server with fewest active connections"
                  pros={['Dynamic load consideration', 'Better for long-lived connections']}
                  cons={['More complex state tracking', 'May not reflect actual load']}
                  useCase="Long-lived connections (WebSockets, databases)"
                  startFrame={810}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 1000,
                  top: 450,
                  opacity: fadeIn(frame, 850, 20),
                }}
              >
                <AlgorithmCard
                  title="IP Hash / Consistent Hashing"
                  description="Routes based on client IP hash for session affinity"
                  pros={['Built-in session persistence', 'No session storage needed']}
                  cons={['Uneven distribution possible', 'Sticky sessions can reduce failover']}
                  useCase="Stateful applications requiring session affinity"
                  startFrame={850}
                />
              </div>
            </>
          )}
        </>
      )}

      {/* Scene 4: L4 vs L7 Load Balancing (960-1440 frames / 32-48s) */}
      {frame >= 960 && frame < 1440 && (
        <>
          <Title
            text="Layer 4 vs Layer 7"
            subtitle="OSI Model: Transport vs Application Layer"
            startFrame={960}
            y={60}
          />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1140 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={970} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={970} size={95} />

              <Dialogue
                speaker="junior"
                text="I keep hearing about L4 and L7 load balancing. What's the difference and when should I use each?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={990}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Critical question for architects! L4 operates at the transport layer, L7 at the application layer. Each has specific trade-offs..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1050}
                maxWidth={540}
              />
            </>
          )}


          {frame >= 1150 && (
            <svg width={width} height={height}>
              {/* L4 Section */}
              <g>
                <rect
                  x={100}
                  y={250}
                  width={800}
                  height={350}
                  rx={theme.borderRadius.lg}
                  fill={theme.background.card}
                  opacity={fadeIn(frame, 1150, 20)}
                />
                <text
                  x={500}
                  y={290}
                  textAnchor="middle"
                  fill={theme.text.primary}
                  fontSize={theme.typography.heading.fontSize}
                  fontWeight="bold"
                  opacity={fadeIn(frame, 1150, 20)}
                >
                  Layer 4 (Transport)
                </text>

                <Box
                  x={150}
                  y={330}
                  width={300}
                  height={100}
                  color={theme.colors.network}
                  label="TCP/UDP"
                  icon="🔌"
                  startFrame={1170}
                />

                <foreignObject x={150} y={450} width={700} height={130}>
                  <div
                    style={{
                      opacity: fadeIn(frame, 1190, 20),
                      color: theme.text.secondary,
                      fontSize: 22,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong style={{color: theme.colors.success}}>Pros:</strong>{' '}
                    Fast, low latency, protocol agnostic
                    <br />
                    <strong style={{color: theme.colors.error}}>Cons:</strong>{' '}
                    No content awareness, limited routing options
                    <br />
                    <strong style={{color: theme.colors.info}}>Use:</strong>{' '}
                    High throughput, low latency requirements
                  </div>
                </foreignObject>
              </g>

              {/* L7 Section */}
              <g>
                <rect
                  x={1000}
                  y={250}
                  width={800}
                  height={350}
                  rx={theme.borderRadius.lg}
                  fill={theme.background.card}
                  opacity={fadeIn(frame, 1220, 20)}
                />
                <text
                  x={1400}
                  y={290}
                  textAnchor="middle"
                  fill={theme.text.primary}
                  fontSize={theme.typography.heading.fontSize}
                  fontWeight="bold"
                  opacity={fadeIn(frame, 1220, 20)}
                >
                  Layer 7 (Application)
                </text>

                <Box
                  x={1050}
                  y={330}
                  width={300}
                  height={100}
                  color={theme.colors.frontend}
                  label="HTTP/HTTPS"
                  icon="🌐"
                  startFrame={1240}
                />

                <foreignObject x={1050} y={450} width={700} height={130}>
                  <div
                    style={{
                      opacity: fadeIn(frame, 1260, 20),
                      color: theme.text.secondary,
                      fontSize: 22,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong style={{color: theme.colors.success}}>Pros:</strong>{' '}
                    Content-based routing, SSL termination, caching
                    <br />
                    <strong style={{color: theme.colors.error}}>Cons:</strong>{' '}
                    Higher latency, more CPU intensive
                    <br />
                    <strong style={{color: theme.colors.info}}>Use:</strong>{' '}
                    Microservices, A/B testing, canary deployments
                  </div>
                </foreignObject>
              </g>
            </svg>
          )}

          {frame >= 1290 && (
            <TextBox
              x={100}
              y={650}
              width={1700}
              title="Architectural Decision"
              points={[
                'L4: Best for non-HTTP protocols, extreme performance needs, simple routing',
                'L7: Essential for HTTP routing rules, SSL offload, WAF integration, modern microservices',
                'Hybrid: Use L4 for initial fan-out, L7 for fine-grained routing within clusters',
              ]}
              startFrame={1290}
            />
          )}
        </>
      )}

      {/* Scene 5: Health Checks & High Availability (1440-1980 frames / 48-66s) */}
      {frame >= 1440 && frame < 1980 && (
        <>
          <Title
            text="Health Checks & HA"
            subtitle="Ensuring Resilience and Availability"
            startFrame={1440}
            y={60}
          />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1620 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={1450} size={95} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={1450} size={95} />

              <Dialogue
                speaker="junior"
                text="What happens when a server fails? How does the load balancer know not to send traffic to a dead server?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1470}
                maxWidth={480}
              />

              <Dialogue
                speaker="architect"
                text="Crucial for production! Health checks constantly monitor servers, and HA patterns prevent the load balancer from being a single point of failure..."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1530}
                maxWidth={540}
              />
            </>
          )}


          {frame >= 1630 && (
            <svg width={width} height={height}>
              {/* Primary LB */}
              <Box
                x={400}
                y={300}
                width={240}
                height={140}
                color={theme.colors.loadBalancer}
                label="Primary LB"
                icon="⚖️"
                subLabel="Active"
                startFrame={1630}
              />

              {/* Secondary LB */}
              <Box
                x={400}
                y={480}
                width={240}
                height={140}
                color={theme.colors.loadBalancer}
                label="Secondary LB"
                icon="⚖️"
                subLabel="Standby (VRRP)"
                startFrame={1640}
              />

              {/* Servers with health status */}
              <Box
                x={900}
                y={250}
                width={220}
                height={120}
                color={theme.colors.success}
                label="Server 1"
                icon="✓"
                subLabel="Healthy"
                startFrame={1660}
              />
              <Box
                x={900}
                y={400}
                width={220}
                height={120}
                color={theme.colors.error}
                label="Server 2"
                icon="✗"
                subLabel="Unhealthy"
                startFrame={1670}
              />
              <Box
                x={900}
                y={550}
                width={220}
                height={120}
                color={theme.colors.success}
                label="Server 3"
                icon="✓"
                subLabel="Healthy"
                startFrame={1680}
              />

              {/* Health check arrows */}
              <Arrow
                x1={640}
                y1={350}
                x2={900}
                y2={300}
                color={theme.colors.success}
                label="HTTP /health"
                startFrame={1700}
                dashed
              />
              <Arrow
                x1={640}
                y1={370}
                x2={900}
                y2={460}
                color={theme.colors.error}
                label="Failed"
                startFrame={1710}
                dashed
              />
              <Arrow
                x1={640}
                y1={390}
                x2={900}
                y2={610}
                color={theme.colors.success}
                label="TCP :80"
                startFrame={1720}
                dashed
              />

              {/* Traffic flow (only to healthy servers) */}
              <Arrow
                x1={100}
                y1={370}
                x2={400}
                y2={370}
                color={theme.colors.client}
                label="Traffic"
                startFrame={1740}
              />
              <Arrow
                x1={640}
                y1={340}
                x2={900}
                y2={290}
                color={theme.colors.loadBalancer}
                label="50%"
                startFrame={1760}
              />
              <Arrow
                x1={640}
                y1={410}
                x2={900}
                y2={600}
                color={theme.colors.loadBalancer}
                label="50%"
                startFrame={1770}
              />
            </svg>
          )}

          {frame >= 1790 && (
            <>
              <TextBox
                x={1200}
                y={250}
                width={650}
                title="Health Check Types"
                points={[
                  'Active: Periodic probes (HTTP, TCP, custom)',
                  'Passive: Monitor actual traffic responses',
                  'Configure: Interval, timeout, thresholds',
                  'Graceful degradation on failures',
                ]}
                startFrame={1790}
              />

              <TextBox
                x={1200}
                y={550}
                width={650}
                title="HA Patterns"
                points={[
                  'Active-Passive: VRRP/Keepalived failover',
                  'Active-Active: DNS/Anycast distribution',
                  'Multi-region: Global load balancing',
                  'Consider: Split-brain, quorum, monitoring',
                ]}
                startFrame={1830}
              />
            </>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};

/**
 * Component for displaying algorithm information cards
 */
const AlgorithmCard: React.FC<{
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  useCase: string;
  startFrame: number;
}> = ({title, description, pros, cons, useCase, startFrame}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 20);

  return (
    <div
      style={{
        backgroundColor: theme.background.card,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        width: 800,
        border: `2px solid ${theme.colors.network}`,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        opacity,
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: 12,
          color: theme.text.primary,
          fontSize: 32,
          fontWeight: 'bold',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          marginBottom: 16,
          color: theme.text.secondary,
          fontSize: 20,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
      <div style={{display: 'flex', gap: 22, marginBottom: 12}}>
        <div style={{flex: 1}}>
          <span style={{color: theme.colors.success, fontSize: 18}}>
            ✓ {pros.join(' • ')}
          </span>
        </div>
      </div>
      <div style={{marginBottom: 12}}>
        <span style={{color: theme.colors.error, fontSize: 18}}>
          ✗ {cons.join(' • ')}
        </span>
      </div>
      <div
        style={{
          backgroundColor: theme.background.highlight,
          padding: 12,
          borderRadius: 8,
          borderLeft: `3px solid ${theme.colors.info}`,
        }}
      >
        <span style={{color: theme.text.muted, fontSize: 18}}>
          <strong style={{color: theme.text.secondary}}>Best for:</strong> {useCase}
        </span>
      </div>
    </div>
  );
};
