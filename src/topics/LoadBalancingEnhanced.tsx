import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Enhanced Load Balancing with Character-Driven Narrative
 * Alex (Junior Dev) asks questions, Sarah (Architect) explains
 * Progressive complexity from basic to advanced
 */
export const LoadBalancingEnhanced: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.background.primary,
      }}
    >
      {/* Scene 1: Introduction - The Problem (0-120 frames / 0-4s) */}
      {frame < 120 && (
        <>
          <Title text="Load Balancing" subtitle="A Conversation" startFrame={0} />

          <Character type="junior" x={200} y={300} startFrame={20} />
          <Character type="architect" x={width - 400} y={300} startFrame={25} />

          <Dialogue
            speaker="junior"
            text="Sarah, our single server keeps crashing when we get traffic spikes. What should we do?"
            x={350}
            y={320}
            startFrame={50}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question, Alex! We need to scale horizontally with multiple servers and a load balancer. Let me show you..."
            x={width - 950}
            y={480}
            startFrame={80}
            maxWidth={520}
          />
        </>
      )}

      {/* Scene 2: The Basic Problem - Single Server (120-270 frames / 4-9s) */}
      {frame >= 120 && frame < 270 && (
        <>
          <Title
            text="The Problem: Single Server"
            subtitle="Why one server isn't enough"
            startFrame={120}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={120} size={80} />

          <svg width={width} height={height}>
            {/* Multiple clients */}
            {[0, 1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                x={150 + i * 120}
                y={250}
                width={100}
                height={80}
                color={theme.colors.client}
                label={`User ${i + 1}`}
                icon="👤"
                startFrame={130 + i * 5}
              />
            ))}

            {/* Single overloaded server */}
            <Box
              x={850}
              y={400}
              width={220}
              height={150}
              color={theme.colors.error}
              label="Server"
              icon="🖥️"
              subLabel="OVERLOADED!"
              startFrame={160}
            />

            {/* Request arrows */}
            {[0, 1, 2, 3, 4].map((i) => (
              <React.Fragment key={`arrow-${i}`}>
                <Arrow
                  x1={200 + i * 120}
                  y1={330}
                  x2={900}
                  y2={400}
                  color={theme.colors.error}
                  startFrame={170 + i * 3}
                />
                <DataFlowStream
                  x1={200 + i * 120}
                  y1={330}
                  x2={900}
                  y2={400}
                  startFrame={180 + i * 5}
                  color={theme.colors.error}
                  particleCount={3}
                />
              </React.Fragment>
            ))}

            {/* Warning icon */}
            <g opacity={fadeIn(frame, 200, 20)}>
              <circle
                cx={960}
                cy={350}
                r={30}
                fill={theme.colors.warning}
                opacity={0.3}
                style={{
                  transform: `scale(${pulse(frame - 200, 20)})`,
                  transformOrigin: '960px 350px',
                }}
              />
              <text
                x={960}
                y={360}
                textAnchor="middle"
                fontSize={40}
              >
                ⚠️
              </text>
            </g>
          </svg>

          <Dialogue
            speaker="junior"
            text="I see! All traffic goes to one server. That's a single point of failure AND a bottleneck!"
            x={200}
            y={height - 150}
            startFrame={210}
            maxWidth={600}
          />
        </>
      )}

      {/* Scene 3: The Solution - Basic Load Balancing (270-450 frames / 9-15s) */}
      {frame >= 270 && frame < 450 && (
        <>
          <Title
            text="Solution: Distribute the Load"
            subtitle="Multiple servers + Load Balancer"
            startFrame={270}
            y={50}
          />

          <Character type="architect" x={width - 300} y={height - 200} startFrame={270} size={80} />

          <svg width={width} height={height}>
            {/* Clients */}
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                x={150}
                y={250 + i * 150}
                width={120}
                height={90}
                color={theme.colors.client}
                label={`Client ${i + 1}`}
                icon="👤"
                startFrame={280 + i * 5}
              />
            ))}

            {/* Load Balancer */}
            <Box
              x={500}
              y={400}
              width={240}
              height={140}
              color={theme.colors.loadBalancer}
              label="Load Balancer"
              icon="⚖️"
              subLabel="Distributes Traffic"
              startFrame={300}
            />

            {/* Backend Servers */}
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                x={1100}
                y={250 + i * 150}
                width={180}
                height={110}
                color={theme.colors.success}
                label={`Server ${i + 1}`}
                icon="🖥️"
                subLabel="Healthy"
                startFrame={320 + i * 5}
              />
            ))}

            {/* Arrows from clients to LB */}
            {[0, 1, 2].map((i) => (
              <React.Fragment key={`client-lb-${i}`}>
                <Arrow
                  x1={270}
                  y1={295 + i * 150}
                  x2={500}
                  y2={470}
                  color={theme.colors.client}
                  startFrame={340 + i * 5}
                />
                <DataFlowStream
                  x1={270}
                  y1={295 + i * 150}
                  x2={500}
                  y2={470}
                  startFrame={350 + i * 10}
                  color={theme.colors.client}
                />
              </React.Fragment>
            ))}

            {/* Arrows from LB to servers */}
            {[0, 1, 2].map((i) => (
              <React.Fragment key={`lb-server-${i}`}>
                <Arrow
                  x1={740}
                  y1={470}
                  x2={1100}
                  y2={305 + i * 150}
                  color={theme.colors.loadBalancer}
                  label="33%"
                  startFrame={370 + i * 5}
                />
                <DataFlowStream
                  x1={740}
                  y1={470}
                  x2={1100}
                  y2={305 + i * 150}
                  startFrame={380 + i * 10}
                  color={theme.colors.success}
                />
              </React.Fragment>
            ))}
          </svg>

          <Dialogue
            speaker="architect"
            text="Traffic is distributed evenly! If one server fails, the LB routes to healthy servers. No single point of failure."
            x={width - 900}
            y={height - 150}
            startFrame={360}
            maxWidth={650}
          />
        </>
      )}

      {/* Scene 4: Going Deeper - Algorithms (450-630 frames / 15-21s) */}
      {frame >= 450 && frame < 630 && (
        <>
          <Title
            text="Load Balancing Algorithms"
            subtitle="How does it decide where to send traffic?"
            startFrame={450}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={450} size={80} />
          <Character type="architect" x={width - 300} y={height - 200} startFrame={450} size={80} />

          <Dialogue
            speaker="junior"
            text="How does the load balancer decide which server gets each request?"
            x={200}
            y={height - 380}
            startFrame={470}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! There are several algorithms. Let me show you the main ones..."
            x={width - 850}
            y={height - 250}
            startFrame={500}
            maxWidth={520}
          />

          {/* Algorithm Cards */}
          <div style={{position: 'absolute', left: 150, top: 200, opacity: fadeIn(frame, 530, 20)}}>
            <AlgorithmCard
              title="Round Robin"
              icon="🔄"
              description="Cycles through servers sequentially"
              color={theme.colors.info}
            />
          </div>

          <div style={{position: 'absolute', left: 550, top: 200, opacity: fadeIn(frame, 550, 20)}}>
            <AlgorithmCard
              title="Least Connections"
              icon="📊"
              description="Routes to server with fewest active connections"
              color={theme.colors.success}
            />
          </div>

          <div style={{position: 'absolute', left: 950, top: 200, opacity: fadeIn(frame, 570, 20)}}>
            <AlgorithmCard
              title="IP Hash"
              icon="🔑"
              description="Same client → same server (session persistence)"
              color={theme.colors.loadBalancer}
            />
          </div>

          <div style={{position: 'absolute', left: 1350, top: 200, opacity: fadeIn(frame, 590, 20)}}>
            <AlgorithmCard
              title="Weighted"
              icon="⚖️"
              description="Based on server capacity (more powerful = more traffic)"
              color={theme.colors.purple}
            />
          </div>
        </>
      )}

      {/* Scene 5: Advanced - L4 vs L7 (630-810 frames / 21-27s) */}
      {frame >= 630 && frame < 810 && (
        <>
          <Title
            text="Layer 4 vs Layer 7 Load Balancing"
            subtitle="Transport Layer vs Application Layer"
            startFrame={630}
            y={50}
          />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={630} size={80} />

          <Dialogue
            speaker="architect"
            text="For senior architects: L4 (TCP/UDP) is fast but dumb. L7 (HTTP) is smart but slower - can route based on URLs, headers, cookies!"
            x={width / 2 - 400}
            y={height - 380}
            startFrame={660}
            maxWidth={800}
          />

          {/* L4 vs L7 Comparison */}
          <div
            style={{
              position: 'absolute',
              left: 100,
              top: 200,
              width: 800,
              opacity: fadeIn(frame, 690, 20),
            }}
          >
            <div
              style={{
                backgroundColor: theme.background.card,
                padding: 30,
                borderRadius: theme.borderRadius.lg,
                border: `3px solid ${theme.colors.network}`,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: theme.text.primary,
                  fontSize: 40,
                  marginBottom: 20,
                }}
              >
                🔌 Layer 4 (Transport)
              </h3>
              <div style={{color: theme.text.secondary, fontSize: 22, lineHeight: 1.8}}>
                <div>✅ <strong>Fast</strong> - Low latency, high throughput</div>
                <div>✅ <strong>Protocol agnostic</strong> - Works with any TCP/UDP</div>
                <div>❌ <strong>No content awareness</strong> - Can't see HTTP data</div>
                <div style={{marginTop: 15, color: theme.colors.info}}>
                  <strong>Use for:</strong> Databases, game servers, extreme performance needs
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              left: 1000,
              top: 200,
              width: 800,
              opacity: fadeIn(frame, 720, 20),
            }}
          >
            <div
              style={{
                backgroundColor: theme.background.card,
                padding: 30,
                borderRadius: theme.borderRadius.lg,
                border: `3px solid ${theme.colors.frontend}`,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: theme.text.primary,
                  fontSize: 40,
                  marginBottom: 20,
                }}
              >
                🌐 Layer 7 (Application)
              </h3>
              <div style={{color: theme.text.secondary, fontSize: 22, lineHeight: 1.8}}>
                <div>✅ <strong>Smart routing</strong> - URL, headers, cookies</div>
                <div>✅ <strong>SSL termination</strong> - Decrypt once at LB</div>
                <div>✅ <strong>WAF integration</strong> - Security filtering</div>
                <div>❌ <strong>Higher latency</strong> - Must parse HTTP</div>
                <div style={{marginTop: 15, color: theme.colors.info}}>
                  <strong>Use for:</strong> Microservices, A/B testing, canary deployments
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 6: Production Reality - Health Checks & Failure (810-900 frames / 27-30s) */}
      {frame >= 810 && (
        <>
          <Title
            text="Production Reality: Failures Happen"
            subtitle="Health checks and automatic recovery"
            startFrame={810}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={810} size={80} />

          <Dialogue
            speaker="junior"
            text="What happens when a server crashes?"
            x={200}
            y={height - 350}
            startFrame={830}
            maxWidth={450}
          />

          <svg width={width} height={height}>
            {/* Load Balancer */}
            <Box
              x={450}
              y={400}
              width={240}
              height={140}
              color={theme.colors.loadBalancer}
              label="Load Balancer"
              icon="⚖️"
              subLabel="Health Checking"
              startFrame={820}
            />

            {/* Server 1 - Healthy */}
            <Box
              x={1000}
              y={250}
              width={200}
              height={120}
              color={theme.colors.success}
              label="Server 1"
              icon="✅"
              subLabel="Healthy"
              startFrame={840}
            />

            {/* Server 2 - FAILED */}
            <Box
              x={1000}
              y={410}
              width={200}
              height={120}
              color={theme.colors.error}
              label="Server 2"
              icon="❌"
              subLabel="FAILED!"
              startFrame={845}
            />

            {/* Server 3 - Healthy */}
            <Box
              x={1000}
              y={570}
              width={200}
              height={120}
              color={theme.colors.success}
              label="Server 3"
              icon="✅"
              subLabel="Healthy"
              startFrame={850}
            />

            {/* Health check probes */}
            <Arrow
              x1={690}
              y1={470}
              x2={1000}
              y2={300}
              color={theme.colors.success}
              label="HTTP 200 OK"
              startFrame={860}
              dashed
            />
            <Arrow
              x1={690}
              y1={470}
              x2={1000}
              y2={470}
              color={theme.colors.error}
              label="Timeout!"
              startFrame={865}
              dashed
            />
            <Arrow
              x1={690}
              y1={470}
              x2={1000}
              y2={620}
              color={theme.colors.success}
              label="HTTP 200 OK"
              startFrame={870}
              dashed
            />

            {/* Traffic only to healthy servers */}
            <g opacity={fadeIn(frame, 875, 10)}>
              <Arrow
                x1={300}
                y1={470}
                x2={450}
                y2={470}
                color={theme.colors.client}
                label="User Traffic"
                startFrame={875}
              />
              <DataFlowStream
                x1={300}
                y1={470}
                x2={450}
                y2={470}
                startFrame={880}
                color={theme.colors.client}
              />
            </g>

            {/* Routes around failed server */}
            <Arrow
              x1={690}
              y1={450}
              x2={1000}
              y2={290}
              color={theme.colors.loadBalancer}
              label="50%"
              startFrame={880}
            />
            <Arrow
              x1={690}
              y1={490}
              x2={1000}
              y2={610}
              color={theme.colors.loadBalancer}
              label="50%"
              startFrame={885}
            />

            {/* Show it skips failed server with X */}
            {frame > 880 && (
              <line
                x1={690}
                y1={470}
                x2={1000}
                y2={470}
                stroke={theme.colors.error}
                strokeWidth={4}
                strokeDasharray="8,4"
                opacity={0.3}
              />
            )}
          </svg>

          <Dialogue
            speaker="architect"
            text="The LB detects failures via health checks (HTTP probes, TCP checks). Failed servers are removed from rotation automatically. No manual intervention needed!"
            x={width - 950}
            y={height - 200}
            startFrame={870}
            maxWidth={700}
          />
        </>
      )}
    </AbsoluteFill>
  );
};

/**
 * Compact algorithm card component
 */
const AlgorithmCard: React.FC<{
  title: string;
  icon: string;
  description: string;
  color: string;
}> = ({title, icon, description, color}) => {
  return (
    <div
      style={{
        backgroundColor: theme.background.card,
        padding: 20,
        borderRadius: theme.borderRadius.lg,
        width: 340,
        height: 180,
        border: `3px solid ${color}`,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{fontSize: 50, marginBottom: 10}}>{icon}</div>
      <div
        style={{
          color: theme.text.primary,
          fontSize: 26,
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center',
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: theme.text.secondary,
          fontSize: 18,
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        {description}
      </div>
    </div>
  );
};
