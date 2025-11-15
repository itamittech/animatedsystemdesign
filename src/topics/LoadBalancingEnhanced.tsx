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

      {/* Scene 7: Sticky Sessions (900-1080 frames / 30-36s) */}
      {frame >= 900 && frame < 1080 && (
        <>
          <Title
            text="Sticky Sessions & Session Affinity"
            subtitle="Keeping users connected to the same server"
            startFrame={900}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={900} size={80} />

          <Dialogue
            speaker="junior"
            text="What if users need to stay on the same server? Like for shopping carts?"
            x={200}
            y={height - 350}
            startFrame={920}
            maxWidth={500}
          />

          <svg width={width} height={height}>
            <Box
              x={200}
              y={300}
              width={140}
              height={100}
              color={theme.colors.client}
              label="User + 🍪"
              icon="👤"
              subLabel="Session ID: ABC"
              startFrame={950}
            />

            <Box
              x={600}
              y={380}
              width={260}
              height={140}
              color={theme.colors.loadBalancer}
              label="Load Balancer"
              icon="⚖️"
              subLabel="Cookie-based routing"
              startFrame={960}
            />

            <Box x={1200} y={250} width={180} height={110} color={theme.colors.server} label="Server 1" icon="🖥️" startFrame={970} />
            <Box x={1200} y={400} width={180} height={110} color={theme.colors.success} label="Server 2" icon="🖥️" subLabel="User's Server ⭐" startFrame={975} />
            <Box x={1200} y={550} width={180} height={110} color={theme.colors.server} label="Server 3" icon="🖥️" startFrame={980} />

            <Arrow x1={340} y1={350} x2={600} y2={430} color={theme.colors.client} label="Cookie: server=2" startFrame={990} />
            <Arrow x1={860} y1={450} x2={1200} y2={455} color={theme.colors.loadBalancer} label="Always to Server 2" startFrame={1000} />

            {[0, 1, 2].map((i) => (
              <DataFlowStream key={i} x1={340} y1={350} x2={1200} y2={455} startFrame={1010 + i * 20} color={theme.colors.success} particleCount={2} />
            ))}
          </svg>

          <Dialogue
            speaker="architect"
            text="Sticky sessions! Use cookies or IP hash. Same user → same server. Great for stateful apps, but reduces load distribution and failover options."
            x={width - 950}
            y={height - 200}
            startFrame={1020}
            maxWidth={700}
          />

          <div style={{position: 'absolute', right: 50, top: 200, opacity: fadeIn(frame, 1040, 20)}}>
            <InfoCard title="Trade-offs" points={['✅ Session persistence guaranteed', '✅ Simpler application design', '❌ Uneven load distribution', '❌ Harder failover (lost sessions)']} color={theme.colors.warning} />
          </div>
        </>
      )}

      {/* Scene 8: Global Load Balancing (1080-1260 frames / 36-42s) */}
      {frame >= 1080 && frame < 1260 && (
        <>
          <Title text="Global Load Balancing (GSLB)" subtitle="Multi-datacenter, geo-distributed traffic routing" startFrame={1080} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={1080} size={80} />

          <Dialogue
            speaker="architect"
            text="For global scale, we route users to the nearest datacenter using GeoDNS. Disaster recovery built-in!"
            x={width / 2 - 400}
            y={height - 350}
            startFrame={1100}
            maxWidth={800}
          />

          <svg width={width} height={height}>
            <Box x={100} y={200} width={140} height={90} color={theme.colors.client} label="🌍 Europe" icon="👥" startFrame={1120} />
            <Box x={100} y={330} width={140} height={90} color={theme.colors.client} label="🌎 Americas" icon="👥" startFrame={1125} />
            <Box x={100} y={460} width={140} height={90} color={theme.colors.client} label="🌏 Asia" icon="👥" startFrame={1130} />

            <Box x={500} y={330} width={280} height={150} color={theme.colors.network} label="Global Load Balancer" icon="🌐" subLabel="GeoDNS Routing" startFrame={1140} />

            <Box x={1200} y={200} width={200} height={90} color={theme.colors.success} label="EU Datacenter" icon="🏢" subLabel="Frankfurt" startFrame={1150} />
            <Box x={1200} y={330} width={200} height={90} color={theme.colors.success} label="US Datacenter" icon="🏢" subLabel="Virginia" startFrame={1155} />
            <Box x={1200} y={460} width={200} height={90} color={theme.colors.success} label="APAC Datacenter" icon="🏢" subLabel="Singapore" startFrame={1160} />

            <Arrow x1={240} y1={245} x2={500} y2={370} color={theme.colors.client} startFrame={1170} />
            <Arrow x1={780} y1={370} x2={1200} y2={245} color={theme.colors.network} label="Lowest latency" startFrame={1180} />
            <DataFlowStream x1={240} y1={245} x2={1200} y2={245} startFrame={1185} color={theme.colors.success} />

            <Arrow x1={240} y1={375} x2={500} y2={395} color={theme.colors.client} startFrame={1172} />
            <Arrow x1={780} y1={395} x2={1200} y2={375} color={theme.colors.network} startFrame={1182} />
            <DataFlowStream x1={240} y1={375} x2={1200} y2={375} startFrame={1190} color={theme.colors.success} />

            <Arrow x1={240} y1={505} x2={500} y2={420} color={theme.colors.client} startFrame={1174} />
            <Arrow x1={780} y1={420} x2={1200} y2={505} color={theme.colors.network} startFrame={1184} />
            <DataFlowStream x1={240} y1={505} x2={1200} y2={505} startFrame={1195} color={theme.colors.success} />
          </svg>

          <div style={{position: 'absolute', left: 100, top: 600, opacity: fadeIn(frame, 1200, 20)}}>
            <InfoCard title="GSLB Benefits" points={['Reduced latency (users hit nearest DC)', 'Automatic failover between regions', 'Compliance (data residency)', 'DDoS mitigation at edge']} color={theme.colors.network} />
          </div>
        </>
      )}

      {/* Scene 9: Tools Comparison (1260-1440 frames / 42-48s) */}
      {frame >= 1260 && frame < 1440 && (
        <>
          <Title text="Real-World Load Balancers" subtitle="Choosing the right tool for your needs" startFrame={1260} y={50} />

          <Character type="junior" x={150} y={height - 200} startFrame={1260} size={80} />
          <Character type="architect" x={width - 300} y={height - 200} startFrame={1260} size={80} />

          <Dialogue speaker="junior" text="Which load balancer should we actually use?" x={200} y={height - 350} startFrame={1280} maxWidth={450} />

          <Dialogue speaker="architect" text="Depends on your needs! Let me break down the popular options..." x={width - 850} y={height - 250} startFrame={1300} maxWidth={600} />

          <div style={{position: 'absolute', left: 100, top: 200, opacity: fadeIn(frame, 1320, 20)}}>
            <ToolCard name="NGINX" icon="🟢" type="Software LB" pros={['Fast L7 proxy', 'Great documentation', 'Free & open source']} cons={['Config can be complex']} useCase="General purpose, microservices" />
          </div>

          <div style={{position: 'absolute', left: 550, top: 200, opacity: fadeIn(frame, 1335, 20)}}>
            <ToolCard name="HAProxy" icon="🔵" type="Software LB" pros={['Ultra reliable', 'Advanced features', 'TCP & HTTP']} cons={['Steeper learning curve']} useCase="High-traffic, complex routing" />
          </div>

          <div style={{position: 'absolute', left: 1000, top: 200, opacity: fadeIn(frame, 1350, 20)}}>
            <ToolCard name="Envoy" icon="🟣" type="Service Mesh" pros={['Modern architecture', 'Observability', 'Dynamic config']} cons={['Complex setup']} useCase="Microservices, Kubernetes" />
          </div>

          <div style={{position: 'absolute', left: 1450, top: 200, opacity: fadeIn(frame, 1365, 20)}}>
            <ToolCard name="AWS ALB/NLB" icon="🟠" type="Managed Cloud" pros={['Fully managed', 'Auto-scaling', 'AWS integration']} cons={['Vendor lock-in', 'Cost']} useCase="AWS-native applications" />
          </div>

          <div style={{position: 'absolute', left: 100, top: 520, opacity: fadeIn(frame, 1380, 20)}}>
            <InfoCard title="Decision Framework" points={['On-prem → NGINX or HAProxy', 'Cloud → Managed LBs (ALB, Azure LB)', 'Kubernetes → Ingress + Envoy', 'Global → Cloudflare, Akamai']} color={theme.colors.info} />
          </div>
        </>
      )}

      {/* Scene 10: Deployment Patterns (1440-1680 frames / 48-56s) */}
      {frame >= 1440 && frame < 1680 && (
        <>
          <Title text="Advanced Deployment Patterns" subtitle="Canary, Blue-Green, A/B Testing" startFrame={1440} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={1440} size={80} />

          <Dialogue
            speaker="architect"
            text="Load balancers enable sophisticated deployment strategies. Let me show you three critical patterns..."
            x={width / 2 - 450}
            y={height - 350}
            startFrame={1460}
            maxWidth={900}
          />

          <div style={{position: 'absolute', left: 100, top: 200, opacity: fadeIn(frame, 1490, 20)}}>
            <InfoCard title="🐤 Canary Deployment" points={['Route 5-10% traffic to new version', 'Monitor metrics/errors', 'Gradually increase % if healthy', 'Instant rollback if issues']} color={theme.colors.warning} />
          </div>

          <div style={{position: 'absolute', left: 800, top: 200, opacity: fadeIn(frame, 1520, 20)}}>
            <InfoCard title="🔵🟢 Blue-Green" points={['Two identical environments', 'Switch all traffic instantly', 'Easy rollback (switch back)', 'Requires 2x infrastructure']} color={theme.colors.info} />
          </div>

          <div style={{position: 'absolute', left: 1500, top: 200, opacity: fadeIn(frame, 1550, 20)}}>
            <InfoCard title="🅰️🅱️ A/B Testing" points={['Split traffic by user cohort', 'Test features, UX, pricing', 'Data-driven decisions', 'Requires analytics integration']} color={theme.colors.purple} />
          </div>

          <svg width={width} height={height}>
            <Box x={200} y={600} width={120} height={80} color={theme.colors.client} label="Users" icon="👥" startFrame={1580} />
            <Box x={600} y={580} width={200} height={120} color={theme.colors.loadBalancer} label="Smart LB" icon="🎯" subLabel="Traffic splitting" startFrame={1590} />
            <Box x={1100} y={550} width={180} height={90} color={theme.colors.server} label="v1.0 (90%)" icon="🖥️" startFrame={1600} />
            <Box x={1100} y={670} width={180} height={90} color={theme.colors.success} label="v2.0 (10%)" icon="✨" startFrame={1605} />

            <Arrow x1={320} y1={640} x2={600} y2={640} color={theme.colors.client} startFrame={1615} />
            <Arrow x1={800} y1={620} x2={1100} y2={595} color={theme.colors.loadBalancer} label="90%" startFrame={1625} />
            <Arrow x1={800} y1={660} x2={1100} y2={715} color={theme.colors.loadBalancer} label="10%" startFrame={1630} />
            <DataFlowStream x1={320} y1={640} x2={1100} y2={595} startFrame={1635} color={theme.colors.server} particleCount={4} />
            <DataFlowStream x1={320} y1={640} x2={1100} y2={715} startFrame={1640} color={theme.colors.success} particleCount={1} />
          </svg>
        </>
      )}

      {/* Scene 11: SSL/TLS Termination (1680-1860 frames / 56-62s) */}
      {frame >= 1680 && frame < 1860 && (
        <>
          <Title text="SSL/TLS Termination" subtitle="Decrypt once, performance gains" startFrame={1680} y={50} />

          <Character type="junior" x={150} y={height - 200} startFrame={1680} size={80} />

          <Dialogue speaker="junior" text="Do we need SSL on every backend server?" x={200} y={height - 350} startFrame={1700} maxWidth={450} />

          <Dialogue
            speaker="architect"
            text="No! Terminate SSL at the load balancer. Decrypt once, forward as HTTP internally. Huge performance win!"
            x={width - 900}
            y={height - 250}
            startFrame={1730}
            maxWidth={680}
          />

          <svg width={width} height={height}>
            <Box x={100} y={350} width={140} height={100} color={theme.colors.client} label="Client" icon="👤" startFrame={1760} />
            <Box x={500} y={330} width={260} height={140} color={theme.colors.loadBalancer} label="Load Balancer" icon="🔐" subLabel="SSL Termination" startFrame={1770} />

            {[0, 1, 2].map((i) => (
              <Box key={i} x={1100} y={250 + i * 130} width={180} height={100} color={theme.colors.server} label={`Server ${i + 1}`} icon="🖥️" subLabel="HTTP only" startFrame={1780 + i * 5} />
            ))}

            <Arrow x1={240} y1={400} x2={500} y2={400} color={theme.colors.success} label="HTTPS 🔒" startFrame={1800} />
            <DataFlowStream x1={240} y1={400} x2={500} y2={400} startFrame={1805} color={theme.colors.success} />

            {[0, 1, 2].map((i) => (
              <React.Fragment key={i}>
                <Arrow x1={760} y1={400} x2={1100} y2={300 + i * 130} color={theme.colors.server} label="HTTP" startFrame={1815 + i * 5} dashed />
                <DataFlowStream x1={760} y1={400} x2={1100} y2={300 + i * 130} startFrame={1825 + i * 10} color={theme.colors.server} particleCount={2} />
              </React.Fragment>
            ))}
          </svg>

          <div style={{position: 'absolute', right: 50, top: 600, opacity: fadeIn(frame, 1820, 20)}}>
            <InfoCard title="SSL Termination Benefits" points={['✅ Decrypt once (not per server)', '✅ Centralized certificate management', '✅ Backend servers focus on app logic', '⚠️ Internal traffic unencrypted (use VPC)']} color={theme.colors.success} />
          </div>
        </>
      )}

      {/* Scene 12: WebSocket Load Balancing (1860-2040 frames / 62-68s) */}
      {frame >= 1860 && frame < 2040 && (
        <>
          <Title text="WebSocket Load Balancing" subtitle="Long-lived connections require special handling" startFrame={1860} y={50} />

          <Character type="junior" x={150} y={height - 200} startFrame={1860} size={80} />
          <Character type="architect" x={width - 300} y={height - 200} startFrame={1860} size={80} />

          <Dialogue speaker="junior" text="What about WebSockets for our real-time chat?" x={200} y={height - 380} startFrame={1880} maxWidth={500} />

          <Dialogue
            speaker="architect"
            text="Good catch! WebSockets are persistent. You MUST use sticky sessions or consistent hashing."
            x={width - 900}
            y={height - 280}
            startFrame={1910}
            maxWidth={680}
          />

          <svg width={width} height={height}>
            <Box x={150} y={300} width={140} height={100} color={theme.colors.client} label="Chat Client" icon="💬" subLabel="WebSocket" startFrame={1940} />
            <Box x={550} y={350} width={280} height={140} color={theme.colors.loadBalancer} label="Load Balancer" icon="⚖️" subLabel="IP Hash enabled" startFrame={1950} />

            {[0, 1].map((i) => (
              <Box key={i} x={1150} y={300 + i * 150} width={200} height={110} color={i === 1 ? theme.colors.success : theme.colors.server} label={`WS Server ${i + 1}`} icon="🔌" subLabel={i === 1 ? 'Connected ⚡' : ''} startFrame={1960 + i * 5} />
            ))}

            <Arrow x1={290} y1={350} x2={550} y2={410} color={theme.colors.client} label="Initial WS Handshake" startFrame={1980} />
            <Arrow x1={830} y1={420} x2={1150} y2={455} color={theme.colors.loadBalancer} label="Routed to Server 2" startFrame={1990} />
            <DataFlowStream x1={290} y1={350} x2={1150} y2={455} startFrame={2000} color={theme.colors.success} particleCount={3} />

            <g opacity={fadeIn(frame, 2010, 15)}>
              <line x1={290} y1={370} x2={1150} y2={470} stroke={theme.colors.success} strokeWidth={4} strokeDasharray="8,4" />
              <text x={700} y={420} fill={theme.colors.success} fontSize={20} fontWeight="bold">
                Persistent Connection
              </text>
            </g>
          </svg>

          <div style={{position: 'absolute', left: 100, top: 650, opacity: fadeIn(frame, 2015, 20)}}>
            <InfoCard title="WebSocket Considerations" points={['Must use sticky sessions / IP hash', 'Connection draining during deploys', 'Monitor connection pool limits', 'Consider dedicated WS servers']} color={theme.colors.warning} />
          </div>
        </>
      )}

      {/* Scene 13: Rate Limiting & DDoS Protection (2040-2280 frames / 68-76s) */}
      {frame >= 2040 && (
        <>
          <Title text="Rate Limiting & DDoS Protection" subtitle="Protecting your infrastructure" startFrame={2040} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={2040} size={80} />

          <Dialogue
            speaker="architect"
            text="Finally, load balancers are your first line of defense. They can rate limit, detect attacks, and protect backends."
            x={width / 2 - 500}
            y={height - 350}
            startFrame={2060}
            maxWidth={1000}
          />

          <svg width={width} height={height}>
            <Box x={100} y={200} width={140} height={80} color={theme.colors.client} label="Legit User" icon="👤" startFrame={2090} />
            <Box x={100} y={310} width={140} height={80} color={theme.colors.warning} label="Abuser" icon="😈" subLabel="1000 req/s" startFrame={2095} />
            <Box x={100} y={420} width={140} height={80} color={theme.colors.error} label="DDoS Bot" icon="🤖" subLabel="100k req/s" startFrame={2100} />

            <Box x={500} y={280} width={300} height={180} color={theme.colors.loadBalancer} label="Smart Load Balancer" icon="🛡️" subLabel="Rate Limiting + WAF" startFrame={2110} />

            <Box x={1100} y={300} width={200} height={140} color={theme.colors.success} label="Protected Backend" icon="🖥️" subLabel="Safe!" startFrame={2120} />

            <Arrow x1={240} y1={240} x2={500} y2={340} color={theme.colors.success} label="✅ Allowed" startFrame={2130} />
            <DataFlowStream x1={240} y1={240} x2={500} y2={340} startFrame={2135} color={theme.colors.success} />

            <Arrow x1={240} y1={350} x2={500} y2={360} color={theme.colors.warning} label="⚠️ Throttled" startFrame={2140} />

            <g opacity={fadeIn(frame, 2150, 15)}>
              <line x1={240} y1={460} x2={500} y2={390} stroke={theme.colors.error} strokeWidth={6} />
              <line x1={240} y1={390} x2={500} y2={460} stroke={theme.colors.error} strokeWidth={6} />
              <text x={350} y={450} fill={theme.colors.error} fontSize={24} fontWeight="bold" textAnchor="middle">
                ❌ BLOCKED
              </text>
            </g>

            <Arrow x1={800} y1={370} x2={1100} y2={370} color={theme.colors.success} label="Clean traffic only" startFrame={2170} />
            <DataFlowStream x1={800} y1={370} x2={1100} y2={370} startFrame={2175} color={theme.colors.success} particleCount={3} />
          </svg>

          <div style={{position: 'absolute', left: 100, top: 600, opacity: fadeIn(frame, 2190, 20)}}>
            <InfoCard title="Rate Limiting Strategies" points={['Per-IP limits (e.g., 100 req/min)', 'Token bucket algorithm', 'WAF rules (SQL injection, XSS)', 'Challenge bad actors (CAPTCHA)']} color={theme.colors.loadBalancer} />
          </div>

          <div style={{position: 'absolute', right: 50, top: 600, opacity: fadeIn(frame, 2210, 20)}}>
            <InfoCard title="Advanced: Circuit Breaker" points={['Monitor backend health', 'Auto-stop forwarding to failing servers', 'Retry with exponential backoff', 'Graceful degradation']} color={theme.colors.info} />
          </div>

          {frame > 2240 && (
            <div
              style={{
                position: 'absolute',
                left: width / 2 - 300,
                top: 900,
                opacity: fadeIn(frame, 2240, 20),
                backgroundColor: theme.background.highlight,
                padding: 24,
                borderRadius: 16,
                border: `4px solid ${theme.colors.success}`,
              }}
            >
              <h2 style={{margin: 0, color: theme.colors.success, fontSize: 42, textAlign: 'center'}}>🎉 You've Mastered Load Balancing!</h2>
              <p style={{margin: '16px 0 0 0', color: theme.text.primary, fontSize: 24, textAlign: 'center'}}>From basics to production-ready architectures</p>
            </div>
          )}
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

/**
 * Info card for displaying key points
 */
const InfoCard: React.FC<{
  title: string;
  points: string[];
  color: string;
}> = ({title, points, color}) => {
  return (
    <div
      style={{
        backgroundColor: theme.background.card,
        padding: 24,
        borderRadius: theme.borderRadius.lg,
        width: 600,
        border: `3px solid ${color}`,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: 16,
          color: theme.text.primary,
          fontSize: 32,
          fontWeight: 'bold',
        }}
      >
        {title}
      </h3>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        {points.map((point, i) => (
          <div
            key={i}
            style={{
              color: theme.text.secondary,
              fontSize: 20,
              lineHeight: 1.5,
            }}
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Tool comparison card
 */
const ToolCard: React.FC<{
  name: string;
  icon: string;
  type: string;
  pros: string[];
  cons: string[];
  useCase: string;
}> = ({name, icon, type, pros, cons, useCase}) => {
  return (
    <div
      style={{
        backgroundColor: theme.background.card,
        padding: 20,
        borderRadius: theme.borderRadius.lg,
        width: 400,
        border: `3px solid ${theme.colors.network}`,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{fontSize: 40, marginBottom: 8, textAlign: 'center'}}>{icon}</div>
      <h4
        style={{
          margin: 0,
          color: theme.text.primary,
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        {name}
      </h4>
      <div
        style={{
          color: theme.text.muted,
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 12,
        }}
      >
        {type}
      </div>
      <div style={{fontSize: 16, lineHeight: 1.6, color: theme.text.secondary}}>
        <div style={{marginBottom: 8}}>
          {pros.map((p, i) => (
            <div key={i}>✓ {p}</div>
          ))}
        </div>
        <div style={{marginBottom: 8}}>
          {cons.map((c, i) => (
            <div key={i} style={{color: theme.colors.warning}}>
              ⚠ {c}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 12,
            padding: 8,
            backgroundColor: theme.background.highlight,
            borderRadius: 6,
            fontSize: 15,
          }}
        >
          <strong>Best for:</strong> {useCase}
        </div>
      </div>
    </div>
  );
};
