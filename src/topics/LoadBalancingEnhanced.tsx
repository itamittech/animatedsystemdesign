import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
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

  // Define Scene Timings (in frames)
  // Adjusted pace: Increased durations for better readability
  const sceneDurations = {
    intro: 300,
    singleServer: 210,
    basicLB: 240,
    algorithms: 480,
    l4vsL7: 540,
    healthChecks: 240,
    stickySessions: 420,
    consistentHashing: 480, // New scene
    globalLB: 420,
    tools: 540,
    deployment: 720,
    ssl: 300,
    websockets: 300,
    rateLimiting: 480,
  };

  // Calculate start frames
  const starts = {
    intro: 0,
    singleServer: sceneDurations.intro,
    basicLB: sceneDurations.intro + sceneDurations.singleServer,
    algorithms: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB,
    l4vsL7: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms,
    healthChecks: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7,
    stickySessions: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks,
    consistentHashing: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions,
    globalLB: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions + sceneDurations.consistentHashing,
    tools: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions + sceneDurations.consistentHashing + sceneDurations.globalLB,
    deployment: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions + sceneDurations.consistentHashing + sceneDurations.globalLB + sceneDurations.tools,
    ssl: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions + sceneDurations.consistentHashing + sceneDurations.globalLB + sceneDurations.tools + sceneDurations.deployment,
    websockets: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions + sceneDurations.consistentHashing + sceneDurations.globalLB + sceneDurations.tools + sceneDurations.deployment + sceneDurations.ssl,
    rateLimiting: sceneDurations.intro + sceneDurations.singleServer + sceneDurations.basicLB + sceneDurations.algorithms + sceneDurations.l4vsL7 + sceneDurations.healthChecks + sceneDurations.stickySessions + sceneDurations.consistentHashing + sceneDurations.globalLB + sceneDurations.tools + sceneDurations.deployment + sceneDurations.ssl + sceneDurations.websockets,
  };

  // --- Scene 2 Calculations (Single Server) ---
  const s2StartY = 250;
  const s2SpacingX = 120;
  const s2StartX = (width - (5 * 100 + 4 * 20)) / 2 - 200; // Centered-ish
  const s2ServerX = width - 400;
  const s2ServerY = 400;
  const s2ServerCenterY = s2ServerY + 75; // Height 150/2

  // --- Scene 3 Calculations (Basic Load Balancing) ---
  const s3ClientX = 200;
  const s3ClientStartY = 250;
  const s3ClientGap = 150;
  const s3LbX = width / 2 - 120; // Center
  const s3LbY = 400;
  const s3LbCenterY = s3LbY + 70; // Height 140/2
  const s3ServerX = width - 350;
  const s3ServerStartY = 250;

  // --- Scene 6 Calculations (Health Checks) ---
  const s6LbX = 450;
  const s6LbY = 400;
  const s6LbCenterY = s6LbY + 70;
  const s6ServerX = 1100;
  const s6ServerStartY = 250;
  const s6ServerGap = 160;

  // --- Scene 7 Calculations (Sticky Sessions) ---
  const s7UserX = 250;
  const s7UserY = 350;
  const s7LbX = 650;
  const s7LbY = 380;
  const s7ServerX = 1250;
  const s7ServerStartY = 250;
  const s7ServerGap = 150;

  // --- New Scene: Consistent Hashing ---
  const ringCenterX = width / 2;
  const ringCenterY = height / 2 + 50;
  const ringRadius = 250;

  // --- Scene 8 Calculations (Global LB) ---
  const s8RegionX = 150;
  const s8RegionStartY = 220;
  const s8RegionGap = 140;
  const s8LbX = 600;
  const s8LbY = 350;
  const s8DcX = 1300;
  const s8DcStartY = 220;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.background.primary,
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Credit Bookmark - Always visible at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(12px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '1px solid rgba(96, 165, 250, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            fontWeight: '500',
            letterSpacing: '0.5px',
          }}
        >
          Created by
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.5px',
          }}
        >
          Amit Mishra
        </div>
        <div
          style={{
            width: 2,
            height: 20,
            backgroundColor: 'rgba(96, 165, 250, 0.3)',
          }}
        />
        <div
          style={{
            fontSize: 22,
            color: '#64748b',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{fontSize: 24}}>⚡</span>
          Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - The Problem (SLOWED DOWN) */}
      {frame < starts.singleServer && (
        <>
          <Title text="Load Balancing" subtitle="A Conversation" startFrame={0} />

          <Character type="junior" x={width * 0.25} y={300} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={300} startFrame={40} />

          <Dialogue
            speaker="junior"
            text="Sarah, our single server keeps crashing when we get traffic spikes. What should we do?"
            x={350}
            y={320}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question, Alex! We need to scale horizontally with multiple servers and a load balancer. Let me show you..."
            x={width * 0.60}
            y={480}
            startFrame={150}
            maxWidth={520}
          />
        </>
      )}

      {/* Scene 2: The Basic Problem - Single Server */}
      {frame >= starts.singleServer && frame < starts.basicLB && (
        <>
          <Title
            text="The Problem: Single Server"
            subtitle="Why one server isn't enough"
            startFrame={starts.singleServer}
            y={50}
          />

          <Character type="junior" x={100} y={height * 0.64} startFrame={starts.singleServer} size={80} />

          <svg width={width} height={height}>
            {/* Multiple clients */}
            {[0, 1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                x={s2StartX + i * s2SpacingX}
                y={s2StartY}
                width={100}
                height={80}
                color={theme.colors.client}
                label={`User ${i + 1}`}
                icon="👤"
                startFrame={starts.singleServer + 10 + i * 5}
              />
            ))}

            {/* Single overloaded server */}
            <Box
              x={s2ServerX}
              y={s2ServerY}
              width={220}
              height={150}
              color={theme.colors.error}
              label="Server"
              icon="🖥️"
              subLabel="OVERLOADED!"
              startFrame={starts.singleServer + 40}
            />

            {/* Request arrows */}
            {[0, 1, 2, 3, 4].map((i) => (
              <React.Fragment key={`arrow-${i}`}>
                <Arrow
                  x1={s2StartX + i * s2SpacingX + 50}
                  y1={s2StartY + 80}
                  x2={s2ServerX}
                  y2={s2ServerCenterY}
                  color={theme.colors.error}
                  startFrame={starts.singleServer + 50 + i * 3}
                />
                <DataFlowStream
                  x1={s2StartX + i * s2SpacingX + 50}
                  y1={s2StartY + 80}
                  x2={s2ServerX}
                  y2={s2ServerCenterY}
                  startFrame={starts.singleServer + 60 + i * 5}
                  color={theme.colors.error}
                  particleCount={3}
                />
              </React.Fragment>
            ))}

            {/* Warning icon */}
            <g opacity={fadeIn(frame, starts.singleServer + 80, 20)}>
              <circle
                cx={s2ServerX + 110}
                cy={s2ServerY - 30}
                r={30}
                fill={theme.colors.warning}
                opacity={0.8}
                style={{
                  transform: `scale(${pulse(frame - (starts.singleServer + 80), 20)})`,
                  transformOrigin: `${s2ServerX + 110}px ${s2ServerY - 30}px`,
                }}
              />
              <text
                x={s2ServerX + 110}
                y={s2ServerY - 20}
                textAnchor="middle"
                fontSize={30}
                dominantBaseline="middle"
              >
                ⚠️
              </text>
            </g>
          </svg>

          <Dialogue
            speaker="junior"
            text="I see! All traffic goes to one server. That's a single point of failure AND a bottleneck!"
            x={200}
            y={height * 0.64}
            startFrame={starts.singleServer + 90}
            maxWidth={600}
          />
        </>
      )}

      {/* Scene 3: The Solution - Basic Load Balancing */}
      {frame >= starts.basicLB && frame < starts.algorithms && (
        <>
          <Title
            text="Solution: Distribute the Load"
            subtitle="Multiple servers + Load Balancer"
            startFrame={starts.basicLB}
            y={50}
          />

          <Character type="architect" x={width * 0.10} y={height - 200} startFrame={starts.basicLB} size={80} />

          <svg width={width} height={height}>
            {/* Clients */}
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                x={s3ClientX}
                y={s3ClientStartY + i * s3ClientGap}
                width={120}
                height={90}
                color={theme.colors.client}
                label={`Client ${i + 1}`}
                icon="👤"
                startFrame={starts.basicLB + 10 + i * 5}
              />
            ))}

            {/* Load Balancer */}
            <Box
              x={s3LbX}
              y={s3LbY}
              width={240}
              height={140}
              color={theme.colors.loadBalancer}
              label="Load Balancer"
              icon="⚖️"
              subLabel="Distributes Traffic"
              startFrame={starts.basicLB + 30}
            />

            {/* Backend Servers */}
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                x={s3ServerX}
                y={s3ServerStartY + i * s3ClientGap}
                width={180}
                height={110}
                color={theme.colors.success}
                label={`Server ${i + 1}`}
                icon="🖥️"
                subLabel="Healthy"
                startFrame={starts.basicLB + 50 + i * 5}
              />
            ))}

            {/* Arrows from clients to LB */}
            {[0, 1, 2].map((i) => (
              <React.Fragment key={`client-lb-${i}`}>
                <Arrow
                  x1={s3ClientX + 120}
                  y1={s3ClientStartY + i * s3ClientGap + 45}
                  x2={s3LbX}
                  y2={s3LbCenterY}
                  color={theme.colors.client}
                  startFrame={starts.basicLB + 70 + i * 5}
                />
                <DataFlowStream
                  x1={s3ClientX + 120}
                  y1={s3ClientStartY + i * s3ClientGap + 45}
                  x2={s3LbX}
                  y2={s3LbCenterY}
                  startFrame={starts.basicLB + 80 + i * 10}
                  color={theme.colors.client}
                />
              </React.Fragment>
            ))}

            {/* Arrows from LB to servers */}
            {[0, 1, 2].map((i) => (
              <React.Fragment key={`lb-server-${i}`}>
                <Arrow
                  x1={s3LbX + 240}
                  y1={s3LbCenterY}
                  x2={s3ServerX}
                  y2={s3ServerStartY + i * s3ClientGap + 55}
                  color={theme.colors.loadBalancer}
                  label="33%"
                  startFrame={starts.basicLB + 100 + i * 5}
                />
                <DataFlowStream
                  x1={s3LbX + 240}
                  y1={s3LbCenterY}
                  x2={s3ServerX}
                  y2={s3ServerStartY + i * s3ClientGap + 55}
                  startFrame={starts.basicLB + 110 + i * 10}
                  color={theme.colors.success}
                />
              </React.Fragment>
            ))}
          </svg>

          <Dialogue
            speaker="architect"
            text="Traffic is distributed evenly! If one server fails, the LB routes to healthy servers. No single point of failure."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.basicLB + 90}
            maxWidth={650}
          />
        </>
      )}

      {/* Scene 4: Going Deeper - Algorithms */}
      {frame >= starts.algorithms && frame < starts.l4vsL7 && (
        <>
          <Title
            text="Load Balancing Algorithms"
            subtitle="How does it decide where to send traffic?"
            startFrame={starts.algorithms}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.algorithms} size={80} />
          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={starts.algorithms} size={80} />

          <Dialogue
            speaker="junior"
            text="How does the load balancer decide which server gets each request?"
            x={200}
            y={height * 0.64}
            startFrame={starts.algorithms + 20}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! There are several algorithms. Let me show you the main ones..."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.algorithms + 50}
            maxWidth={520}
          />

          {/* Algorithm Cards - Grid Layout - SLOWED DOWN */}
          <div style={{position: 'absolute', left: width * 0.1, top: 200, opacity: fadeIn(frame, starts.algorithms + 80, 20)}}>
            <AlgorithmCard
              title="Round Robin"
              icon="🔄"
              description="Cycles through servers sequentially"
              color={theme.colors.info}
            />
          </div>

          <div style={{position: 'absolute', left: width * 0.3, top: 200, opacity: fadeIn(frame, starts.algorithms + 120, 20)}}>
            <AlgorithmCard
              title="Least Connections"
              icon="📊"
              description="Routes to server with fewest active connections"
              color={theme.colors.success}
            />
          </div>

          <div style={{position: 'absolute', left: width * 0.5, top: 200, opacity: fadeIn(frame, starts.algorithms + 160, 20)}}>
            <AlgorithmCard
              title="IP Hash"
              icon="🔑"
              description="Same client → same server (session persistence)"
              color={theme.colors.loadBalancer}
            />
          </div>

          <div style={{position: 'absolute', left: width * 0.7, top: 200, opacity: fadeIn(frame, starts.algorithms + 200, 20)}}>
            <AlgorithmCard
              title="Weighted"
              icon="⚖️"
              description="Based on server capacity (more powerful = more traffic)"
              color={theme.colors.messageQueue}
            />
          </div>
        </>
      )}

      {/* Scene 5: Advanced - L4 vs L7 */}
      {frame >= starts.l4vsL7 && frame < starts.healthChecks && (
        <>
          <Title
            text="Layer 4 vs Layer 7 Load Balancing"
            subtitle="Transport Layer vs Application Layer"
            startFrame={starts.l4vsL7}
            y={50}
          />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={starts.l4vsL7} size={80} />

          <Dialogue
            speaker="architect"
            text="For senior architects: L4 (TCP/UDP) is fast but dumb. L7 (HTTP) is smart but slower - can route based on URLs, headers, cookies!"
            x={width / 2 - 400}
            y={height * 0.64}
            startFrame={starts.l4vsL7 + 30}
            maxWidth={800}
          />

          {/* L4 vs L7 Comparison - Centered and Styled */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 40,
              marginTop: 200,
              width: '100%',
            }}
          >
            <div
              style={{
                width: 600,
                background: 'linear-gradient(145deg, rgba(37, 43, 74, 0.95), rgba(26, 31, 58, 0.95))',
                padding: 30,
                borderRadius: 20,
                border: `2px solid ${theme.colors.network}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                opacity: fadeIn(frame, starts.l4vsL7 + 60, 20),
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: theme.text.primary,
                  fontSize: 36,
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                🔌 Layer 4 (Transport)
              </h3>
              <div style={{color: theme.text.secondary, fontSize: 22, lineHeight: 1.8}}>
                <div style={{marginBottom: 8}}>✅ <strong>Fast</strong> - Low latency, high throughput</div>
                <div style={{marginBottom: 8}}>✅ <strong>Protocol agnostic</strong> - Works with any TCP/UDP</div>
                <div style={{marginBottom: 12}}>❌ <strong>No content awareness</strong> - Can't see HTTP data</div>
                <div style={{marginTop: 15, color: theme.colors.info, backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: 10, borderRadius: 8}}>
                  <strong>Use for:</strong> Databases, game servers, extreme performance
                </div>
              </div>
            </div>

            <div
              style={{
                width: 600,
                background: 'linear-gradient(145deg, rgba(37, 43, 74, 0.95), rgba(26, 31, 58, 0.95))',
                padding: 30,
                borderRadius: 20,
                border: `2px solid ${theme.colors.frontend}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                opacity: fadeIn(frame, starts.l4vsL7 + 150, 20),
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: theme.text.primary,
                  fontSize: 36,
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                🌐 Layer 7 (Application)
              </h3>
              <div style={{color: theme.text.secondary, fontSize: 22, lineHeight: 1.8}}>
                <div style={{marginBottom: 8}}>✅ <strong>Smart routing</strong> - URL, headers, cookies</div>
                <div style={{marginBottom: 8}}>✅ <strong>SSL termination</strong> - Decrypt once at LB</div>
                <div style={{marginBottom: 12}}>✅ <strong>WAF integration</strong> - Security filtering</div>
                <div style={{marginTop: 15, color: theme.colors.info, backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: 10, borderRadius: 8}}>
                  <strong>Use for:</strong> Microservices, A/B testing, canary deployments
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 6: Production Reality - Health Checks & Failure */}
      {frame >= starts.healthChecks && frame < starts.stickySessions && (
        <>
          <Title
            text="Production Reality: Failures Happen"
            subtitle="Health checks and automatic recovery"
            startFrame={starts.healthChecks}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.healthChecks} size={80} />

          <Dialogue
            speaker="junior"
            text="What happens when a server crashes?"
            x={200}
            y={height * 0.64}
            startFrame={starts.healthChecks + 20}
            maxWidth={450}
          />

          <svg width={width} height={height}>
            {/* Load Balancer */}
            <Box
              x={s6LbX}
              y={s6LbY}
              width={240}
              height={140}
              color={theme.colors.loadBalancer}
              label="Load Balancer"
              icon="⚖️"
              subLabel="Health Checking"
              startFrame={starts.healthChecks + 10}
            />

            {/* Servers */}
            <Box x={s6ServerX} y={s6ServerStartY} width={200} height={120} color={theme.colors.success} label="Server 1" icon="✅" subLabel="Healthy" startFrame={starts.healthChecks + 30} />
            <Box x={s6ServerX} y={s6ServerStartY + s6ServerGap} width={200} height={120} color={theme.colors.error} label="Server 2" icon="❌" subLabel="FAILED!" startFrame={starts.healthChecks + 35} />
            <Box x={s6ServerX} y={s6ServerStartY + s6ServerGap * 2} width={200} height={120} color={theme.colors.success} label="Server 3" icon="✅" subLabel="Healthy" startFrame={starts.healthChecks + 40} />

            {/* Health check probes */}
            <Arrow x1={s6LbX + 240} y1={s6LbCenterY} x2={s6ServerX} y2={s6ServerStartY + 60} color={theme.colors.success} label="HTTP 200 OK" startFrame={starts.healthChecks + 50} dashed />
            <Arrow x1={s6LbX + 240} y1={s6LbCenterY} x2={s6ServerX} y2={s6ServerStartY + s6ServerGap + 60} color={theme.colors.error} label="Timeout!" startFrame={starts.healthChecks + 55} dashed />
            <Arrow x1={s6LbX + 240} y1={s6LbCenterY} x2={s6ServerX} y2={s6ServerStartY + s6ServerGap * 2 + 60} color={theme.colors.success} label="HTTP 200 OK" startFrame={starts.healthChecks + 60} dashed />

            {/* Traffic only to healthy servers */}
            <g opacity={fadeIn(frame, starts.healthChecks + 65, 10)}>
              <Arrow x1={300} y1={s6LbCenterY} x2={s6LbX} y2={s6LbCenterY} color={theme.colors.client} label="User Traffic" startFrame={starts.healthChecks + 65} />
              <DataFlowStream x1={300} y1={s6LbCenterY} x2={s6LbX} y2={s6LbCenterY} startFrame={starts.healthChecks + 70} color={theme.colors.client} />
            </g>

            {/* Routes around failed server */}
            <Arrow x1={s6LbX + 240} y1={s6LbCenterY - 20} x2={s6ServerX} y2={s6ServerStartY + 60} color={theme.colors.loadBalancer} label="50%" startFrame={starts.healthChecks + 70} />
            <Arrow x1={s6LbX + 240} y1={s6LbCenterY + 20} x2={s6ServerX} y2={s6ServerStartY + s6ServerGap * 2 + 60} color={theme.colors.loadBalancer} label="50%" startFrame={starts.healthChecks + 75} />

            {/* Show it skips failed server with X */}
            {frame > starts.healthChecks + 70 && (
              <line
                x1={s6LbX + 240}
                y1={s6LbCenterY}
                x2={s6ServerX}
                y2={s6ServerStartY + s6ServerGap + 60}
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
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.healthChecks + 60}
            maxWidth={700}
          />
        </>
      )}

      {/* Scene 7: Sticky Sessions */}
      {frame >= starts.stickySessions && frame < starts.consistentHashing && (
        <>
          <Title
            text="Sticky Sessions & Session Affinity"
            subtitle="Keeping users connected to the same server"
            startFrame={starts.stickySessions}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.stickySessions} size={80} />

          <Dialogue
            speaker="junior"
            text="What if users need to stay on the same server? Like for shopping carts?"
            x={200}
            y={height * 0.64}
            startFrame={starts.stickySessions + 20}
            maxWidth={500}
          />

          <svg width={width} height={height}>
            <Box
              x={s7UserX}
              y={s7UserY}
              width={140}
              height={100}
              color={theme.colors.client}
              label="User + 🍪"
              icon="👤"
              subLabel="Session ID: ABC"
              startFrame={starts.stickySessions + 50}
            />

            <Box
              x={s7LbX}
              y={s7LbY}
              width={260}
              height={140}
              color={theme.colors.loadBalancer}
              label="Load Balancer"
              icon="⚖️"
              subLabel="Cookie-based routing"
              startFrame={starts.stickySessions + 60}
            />

            <Box x={s7ServerX} y={s7ServerStartY} width={180} height={110} color={theme.colors.server} label="Server 1" icon="🖥️" startFrame={starts.stickySessions + 70} />
            <Box x={s7ServerX} y={s7ServerStartY + s7ServerGap} width={180} height={110} color={theme.colors.success} label="Server 2" icon="🖥️" subLabel="User's Server ⭐" startFrame={starts.stickySessions + 75} />
            <Box x={s7ServerX} y={s7ServerStartY + s7ServerGap * 2} width={180} height={110} color={theme.colors.server} label="Server 3" icon="🖥️" startFrame={starts.stickySessions + 80} />

            <Arrow x1={s7UserX + 140} y1={s7UserY + 50} x2={s7LbX} y2={s7LbY + 70} color={theme.colors.client} label="Cookie: server=2" startFrame={starts.stickySessions + 90} />
            <Arrow x1={s7LbX + 260} y1={s7LbY + 70} x2={s7ServerX} y2={s7ServerStartY + s7ServerGap + 55} color={theme.colors.loadBalancer} label="Always to Server 2" startFrame={starts.stickySessions + 100} />

            {[0, 1, 2].map((i) => (
              <DataFlowStream key={i} x1={s7UserX + 140} y1={s7UserY + 50} x2={s7ServerX} y2={s7ServerStartY + s7ServerGap + 55} startFrame={starts.stickySessions + 110 + i * 20} color={theme.colors.success} particleCount={2} />
            ))}
          </svg>

          <Dialogue
            speaker="architect"
            text="Sticky sessions! Use cookies or IP hash. Same user → same server. Great for stateful apps, but reduces load distribution and failover options."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.stickySessions + 120}
            maxWidth={700}
          />

          <div style={{position: 'absolute', right: 50, top: 650, opacity: fadeIn(frame, starts.stickySessions + 140, 20)}}>
            <InfoCard title="Trade-offs" points={['✅ Session persistence guaranteed', '✅ Simpler application design', '❌ Uneven load distribution', '❌ Harder failover (lost sessions)']} color={theme.colors.warning} />
          </div>
        </>
      )}

      {/* Scene 7.5: Consistent Hashing (NEW SCENE) */}
      {frame >= starts.consistentHashing && frame < starts.globalLB && (
        <>
          <Title
            text="Advanced: Consistent Hashing"
            subtitle="The solution for distributed caching"
            startFrame={starts.consistentHashing}
            y={50}
          />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.consistentHashing} size={80} />
          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={starts.consistentHashing} size={80} />

          <Dialogue
            speaker="junior"
            text="But Sarah, with standard hashing (mod N), if we add one server, almost ALL keys get remapped! It breaks the cache."
            x={200}
            y={height * 0.64}
            startFrame={starts.consistentHashing + 20}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! That's why we use Consistent Hashing. We map both servers and keys to a ring."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.consistentHashing + 60}
            maxWidth={500}
          />

          <svg width={width} height={height}>
             {/* The Ring */}
             <circle
                cx={ringCenterX}
                cy={ringCenterY}
                r={ringRadius}
                fill="none"
                stroke={theme.colors.network}
                strokeWidth={4}
                strokeDasharray="10, 5"
                opacity={fadeIn(frame, starts.consistentHashing + 80, 20)}
             />

             {/* Servers on Ring (0, 120, 240 degrees) */}
             {[0, 1, 2].map((i) => {
                const angle = (i * 120 - 90) * (Math.PI / 180); // Start at top (-90)
                const x = ringCenterX + ringRadius * Math.cos(angle);
                const y = ringCenterY + ringRadius * Math.sin(angle);
                return (
                  <g key={i} opacity={fadeIn(frame, starts.consistentHashing + 100 + i * 10, 20)}>
                     <circle cx={x} cy={y} r={30} fill={theme.colors.server} stroke={theme.text.primary} strokeWidth={2} />
                     <text x={x} y={y} textAnchor="middle" dy=".3em" fontSize={24}>🖥️</text>
                     <text x={x} y={y - 40} textAnchor="middle" fill={theme.text.primary} fontSize={20} fontWeight="bold">S{i+1}</text>
                  </g>
                );
             })}

             {/* Keys (Users) on Ring */}
             {[0, 1, 2, 3, 4, 5].map((i) => {
                const angleDeg = [20, 140, 200, 260, 300, 340][i];
                const angle = (angleDeg - 90) * (Math.PI / 180);
                const x = ringCenterX + ringRadius * Math.cos(angle);
                const y = ringCenterY + ringRadius * Math.sin(angle);

                // Determine which server owns this key (clockwise)
                // S1 at 0 (top), S2 at 120, S3 at 240
                let ownerColor = theme.colors.server;
                let targetX = 0;
                let targetY = 0;
                let isRemapped = false;

                // Logic: Find next server clockwise
                // Angles are 0, 120, 240.
                // Key angles: 20 -> S2(120), 140 -> S3(240), 200 -> S3(240), 260 -> S1(0/360), 300 -> S1, 340 -> S1

                // NEW SERVER S4 appears at 60 degrees at frame starts.consistentHashing + 200
                const showNewServer = frame > starts.consistentHashing + 200;

                if (showNewServer) {
                   // S4 is at 60.
                   // Key at 20 (was S2) -> Now S4. REMAPPED!
                   if (i === 0) { // Angle 20
                      isRemapped = true;
                   }
                }

                return (
                  <g key={i} opacity={fadeIn(frame, starts.consistentHashing + 120 + i * 5, 10)}>
                     <circle cx={x} cy={y} r={10} fill={isRemapped ? theme.colors.warning : theme.colors.client} />
                     {isRemapped && (
                       <circle cx={x} cy={y} r={20} fill="none" stroke={theme.colors.warning} strokeWidth={2} opacity={pulse(frame, 10)} />
                     )}
                  </g>
                );
             })}

             {/* New Server Entry Animation */}
             {frame > starts.consistentHashing + 200 && (
                <g>
                   {(() => {
                      const angle = (60 - 90) * (Math.PI / 180); // 60 degrees
                      const x = ringCenterX + ringRadius * Math.cos(angle);
                      const y = ringCenterY + ringRadius * Math.sin(angle);
                      return (
                         <g opacity={fadeIn(frame, starts.consistentHashing + 200, 10)}>
                            <circle cx={x} cy={y} r={35} fill={theme.colors.success} stroke={theme.text.primary} strokeWidth={3} />
                            <text x={x} y={y} textAnchor="middle" dy=".3em" fontSize={24}>✨</text>
                            <text x={x} y={y - 45} textAnchor="middle" fill={theme.colors.success} fontSize={22} fontWeight="bold">S4 (New)</text>
                         </g>
                      )
                   })()}
                </g>
             )}

             {/* Remapping Indicator */}
             {frame > starts.consistentHashing + 220 && (
               <Dialogue
                  speaker="architect"
                  text="When S4 joins, only keys between S1 and S4 move. The rest stay put! Minimal disruption."
                  x={width/2 - 300}
                  y={height/2}
                  startFrame={starts.consistentHashing + 220}
                  maxWidth={600}
               />
             )}
          </svg>

          <div style={{position: 'absolute', right: 50, top: 200, opacity: fadeIn(frame, starts.consistentHashing + 160, 20)}}>
             <InfoCard title="Consistent Hashing" points={['Keys mapped to ring position', 'Servers mapped to ring position', 'Key handled by next clockwise server', 'Add/Remove node = Minimal data movement']} color={theme.colors.info} width={400} />
          </div>
        </>
      )}

      {/* Scene 8: Global Load Balancing */}
      {frame >= starts.globalLB && frame < starts.tools && (
        <>
          <Title text="Global Load Balancing (GSLB)" subtitle="Multi-datacenter, geo-distributed traffic routing" startFrame={starts.globalLB} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={starts.globalLB} size={80} />

          <Dialogue
            speaker="architect"
            text="For global scale, we route users to the nearest datacenter using GeoDNS. Disaster recovery built-in!"
            x={width / 2 - 400}
            y={height * 0.64}
            startFrame={starts.globalLB + 20}
            maxWidth={800}
          />

          <svg width={width} height={height}>
            <Box x={s8RegionX} y={s8RegionStartY} width={140} height={90} color={theme.colors.client} label="🌍 Europe" icon="👥" startFrame={starts.globalLB + 40} />
            <Box x={s8RegionX} y={s8RegionStartY + s8RegionGap} width={140} height={90} color={theme.colors.client} label="🌎 Americas" icon="👥" startFrame={starts.globalLB + 45} />
            <Box x={s8RegionX} y={s8RegionStartY + s8RegionGap * 2} width={140} height={90} color={theme.colors.client} label="🌏 Asia" icon="👥" startFrame={starts.globalLB + 50} />

            <Box x={s8LbX} y={s8LbY} width={280} height={150} color={theme.colors.network} label="Global Load Balancer" icon="🌐" subLabel="GeoDNS Routing" startFrame={starts.globalLB + 60} />

            <Box x={s8DcX} y={s8DcStartY} width={200} height={90} color={theme.colors.success} label="EU Datacenter" icon="🏢" subLabel="Frankfurt" startFrame={starts.globalLB + 70} />
            <Box x={s8DcX} y={s8DcStartY + s8RegionGap} width={200} height={90} color={theme.colors.success} label="US Datacenter" icon="🏢" subLabel="Virginia" startFrame={starts.globalLB + 75} />
            <Box x={s8DcX} y={s8DcStartY + s8RegionGap * 2} width={200} height={90} color={theme.colors.success} label="APAC Datacenter" icon="🏢" subLabel="Singapore" startFrame={starts.globalLB + 80} />

            {/* Arrows routing to nearest DC */}
            <Arrow x1={s8RegionX + 140} y1={s8RegionStartY + 45} x2={s8LbX} y2={s8LbY + 40} color={theme.colors.client} startFrame={starts.globalLB + 90} />
            <Arrow x1={s8LbX + 280} y1={s8LbY + 40} x2={s8DcX} y2={s8DcStartY + 45} color={theme.colors.network} label="Lowest latency" startFrame={starts.globalLB + 100} />
            <DataFlowStream x1={s8RegionX + 140} y1={s8RegionStartY + 45} x2={s8DcX} y2={s8DcStartY + 45} startFrame={starts.globalLB + 105} color={theme.colors.success} />

            <Arrow x1={s8RegionX + 140} y1={s8RegionStartY + s8RegionGap + 45} x2={s8LbX} y2={s8LbY + 75} color={theme.colors.client} startFrame={starts.globalLB + 92} />
            <Arrow x1={s8LbX + 280} y1={s8LbY + 75} x2={s8DcX} y2={s8DcStartY + s8RegionGap + 45} color={theme.colors.network} startFrame={starts.globalLB + 102} />
            <DataFlowStream x1={s8RegionX + 140} y1={s8RegionStartY + s8RegionGap + 45} x2={s8DcX} y2={s8DcStartY + s8RegionGap + 45} startFrame={starts.globalLB + 110} color={theme.colors.success} />

            <Arrow x1={s8RegionX + 140} y1={s8RegionStartY + s8RegionGap * 2 + 45} x2={s8LbX} y2={s8LbY + 110} color={theme.colors.client} startFrame={starts.globalLB + 94} />
            <Arrow x1={s8LbX + 280} y1={s8LbY + 110} x2={s8DcX} y2={s8DcStartY + s8RegionGap * 2 + 45} color={theme.colors.network} startFrame={starts.globalLB + 104} />
            <DataFlowStream x1={s8RegionX + 140} y1={s8RegionStartY + s8RegionGap * 2 + 45} x2={s8DcX} y2={s8DcStartY + s8RegionGap * 2 + 45} startFrame={starts.globalLB + 115} color={theme.colors.success} />
          </svg>

          <div style={{position: 'absolute', left: 100, top: 650, opacity: fadeIn(frame, starts.globalLB + 120, 20)}}>
            <InfoCard title="GSLB Benefits" points={['Reduced latency (users hit nearest DC)', 'Automatic failover between regions', 'Compliance (data residency)', 'DDoS mitigation at edge']} color={theme.colors.network} />
          </div>
        </>
      )}

      {/* Scene 9: Tools Comparison */}
      {frame >= starts.tools && frame < starts.deployment && (
        <>
          <Title text="Real-World Load Balancers" subtitle="Choosing the right tool for your needs" startFrame={starts.tools} y={50} />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.tools} size={80} />
          <Character type="architect" x={width * 0.60} y={height - 200} startFrame={starts.tools} size={80} />

          <Dialogue speaker="junior" text="Which load balancer should we actually use?" x={200} y={height * 0.64} startFrame={starts.tools + 20} maxWidth={450} />

          <Dialogue speaker="architect" text="Depends on your needs! Let me break down the popular options..." x={width * 0.60} y={height * 0.64} startFrame={starts.tools + 40} maxWidth={600} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 20, width: '100%', marginTop: 180}}>
            <div style={{opacity: fadeIn(frame, starts.tools + 60, 20)}}>
              <ToolCard name="NGINX" icon="🟢" type="Software LB" pros={['Fast L7 proxy', 'Great docs']} cons={['Complex config']} useCase="General purpose" />
            </div>

            <div style={{opacity: fadeIn(frame, starts.tools + 100, 20)}}>
              <ToolCard name="HAProxy" icon="🔵" type="Software LB" pros={['Ultra reliable', 'Advanced features']} cons={['Steep curve']} useCase="High-traffic" />
            </div>

            <div style={{opacity: fadeIn(frame, starts.tools + 140, 20)}}>
              <ToolCard name="Envoy" icon="🟣" type="Service Mesh" pros={['Modern', 'Observability']} cons={['Complex setup']} useCase="Kubernetes" />
            </div>

            <div style={{opacity: fadeIn(frame, starts.tools + 180, 20)}}>
              <ToolCard name="AWS ALB" icon="🟠" type="Managed" pros={['Fully managed', 'Auto-scaling']} cons={['Vendor lock-in']} useCase="AWS apps" />
            </div>
          </div>

          <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 620, opacity: fadeIn(frame, starts.tools + 220, 20)}}>
            <InfoCard title="Decision Framework" points={['On-prem → NGINX or HAProxy', 'Cloud → Managed LBs (ALB, Azure LB)', 'Kubernetes → Ingress (NGINX, Envoy)', 'Global → GSLB (Route53, Cloudflare)']} color={theme.colors.info} />
          </div>
        </>
      )}

      {/* Scene 10: Deployment Patterns (CAROUSEL EFFECT) */}
      {frame >= starts.deployment && frame < starts.ssl && (
        <>
          <Title text="Advanced Deployment Patterns" subtitle="Canary, Blue-Green, A/B Testing" startFrame={starts.deployment} y={50} />

          {/* Intro Phase - Character & Dialogue */}
          {frame < starts.deployment + 100 && (
            <>
              <div style={{opacity: interpolate(frame, [starts.deployment + 90, starts.deployment + 100], [1, 0])}}>
                <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={starts.deployment} size={80} />
                <Dialogue
                  speaker="architect"
                  text="Load balancers enable sophisticated deployment strategies. Let me show you three critical patterns..."
                  x={width / 2 - 450}
                  y={height * 0.64}
                  startFrame={starts.deployment + 20}
                  maxWidth={900}
                />
              </div>
            </>
          )}

          {/* Carousel Container - Centered */}
          <div style={{
            position: 'absolute',
            top: 250,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>

            {/* Phase 1: Canary Deployment (Frames 100 - 300) - Increased Duration */}
            {frame >= starts.deployment + 100 && frame < starts.deployment + 300 && (
              <div style={{
                opacity: interpolate(frame,
                  [starts.deployment + 100, starts.deployment + 120, starts.deployment + 280, starts.deployment + 300],
                  [0, 1, 1, 0]
                ),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <InfoCard title="🐤 Canary Deployment" points={['Route 5-10% to new version', 'Monitor metrics/errors', 'Gradual increase if healthy', 'Instant rollback']} color={theme.colors.warning} width={600} />

                <div style={{marginTop: 40, position: 'relative', width: 1000, height: 300}}>
                   <svg width={1000} height={300}>
                      <Box x={100} y={100} width={120} height={80} color={theme.colors.client} label="Users" icon="👥" startFrame={starts.deployment + 100} />
                      <Box x={400} y={80} width={200} height={120} color={theme.colors.loadBalancer} label="Smart LB" icon="🎯" subLabel="Traffic splitting" startFrame={starts.deployment + 100} />
                      <Box x={750} y={50} width={180} height={90} color={theme.colors.server} label="v1.0 (90%)" icon="🖥️" startFrame={starts.deployment + 100} />
                      <Box x={750} y={170} width={180} height={90} color={theme.colors.success} label="v2.0 (10%)" icon="✨" startFrame={starts.deployment + 100} />

                      <Arrow x1={220} y1={140} x2={400} y2={140} color={theme.colors.client} startFrame={starts.deployment + 110} />
                      <Arrow x1={600} y1={120} x2={750} y2={95} color={theme.colors.loadBalancer} label="90%" startFrame={starts.deployment + 120} />
                      <Arrow x1={600} y1={160} x2={750} y2={215} color={theme.colors.loadBalancer} label="10%" startFrame={starts.deployment + 125} />

                      <DataFlowStream x1={220} y1={140} x2={750} y2={95} startFrame={starts.deployment + 130} color={theme.colors.server} particleCount={4} />
                      <DataFlowStream x1={220} y1={140} x2={750} y2={215} startFrame={starts.deployment + 135} color={theme.colors.success} particleCount={1} />
                   </svg>
                </div>
              </div>
            )}

            {/* Phase 2: Blue-Green Deployment (Frames 300 - 500) - Increased Duration */}
            {frame >= starts.deployment + 300 && frame < starts.deployment + 500 && (
              <div style={{
                opacity: interpolate(frame,
                  [starts.deployment + 300, starts.deployment + 320, starts.deployment + 480, starts.deployment + 500],
                  [0, 1, 1, 0]
                ),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <InfoCard title="🔵🟢 Blue-Green Deployment" points={['Two identical environments', 'Switch traffic instantly (100%)', 'Easy rollback to previous env', '2x infrastructure cost']} color={theme.colors.info} width={600} />

                <div style={{marginTop: 40, position: 'relative', width: 1000, height: 300}}>
                   <svg width={1000} height={300}>
                      <Box x={100} y={100} width={120} height={80} color={theme.colors.client} label="Users" icon="👥" startFrame={starts.deployment + 300} />
                      <Box x={400} y={80} width={200} height={120} color={theme.colors.loadBalancer} label="Load Balancer" icon="🔀" subLabel="Immediate Switch" startFrame={starts.deployment + 300} />

                      {/* Blue Env */}
                      <rect x={730} y={30} width={220} height={100} fill="rgba(59, 130, 246, 0.1)" stroke={theme.colors.info} strokeWidth={2} rx={10} />
                      <Box x={750} y={40} width={180} height={80} color={theme.colors.info} label="Blue (Live)" icon="🔷" startFrame={starts.deployment + 300} />

                      {/* Green Env */}
                      <rect x={730} y={160} width={220} height={100} fill="rgba(16, 185, 129, 0.1)" stroke={theme.colors.success} strokeWidth={2} rx={10} />
                      <Box x={750} y={170} width={180} height={80} color={theme.colors.success} label="Green (Idle)" icon="🟢" startFrame={starts.deployment + 300} />

                      <Arrow x1={220} y1={140} x2={400} y2={140} color={theme.colors.client} startFrame={starts.deployment + 310} />

                      {/* Switch animation */}
                      {frame < starts.deployment + 400 ? (
                         <>
                            <Arrow x1={600} y1={140} x2={750} y2={80} color={theme.colors.info} label="100% Traffic" startFrame={starts.deployment + 320} />
                            <DataFlowStream x1={220} y1={140} x2={750} y2={80} startFrame={starts.deployment + 330} color={theme.colors.info} particleCount={5} />
                         </>
                      ) : (
                         <>
                            <Arrow x1={600} y1={140} x2={750} y2={210} color={theme.colors.success} label="SWITCHED! 100%" startFrame={starts.deployment + 400} />
                            <DataFlowStream x1={220} y1={140} x2={750} y2={210} startFrame={starts.deployment + 400} color={theme.colors.success} particleCount={5} />
                         </>
                      )}
                   </svg>
                </div>
              </div>
            )}

            {/* Phase 3: A/B Testing (Frames 500 - 720) - Increased Duration */}
            {frame >= starts.deployment + 500 && (
              <div style={{
                opacity: interpolate(frame,
                  [starts.deployment + 500, starts.deployment + 520],
                  [0, 1]
                ),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <InfoCard title="🅰️🅱️ A/B Testing" points={['Split by user cohort (e.g. ID)', 'Test specific features/UX', 'Data-driven decisions', 'Analytics integration']} color={theme.colors.messageQueue} width={600} />

                <div style={{marginTop: 40, position: 'relative', width: 1000, height: 300}}>
                   <svg width={1000} height={300}>
                      <Box x={80} y={50} width={140} height={80} color={theme.colors.client} label="Group A" icon="👤" subLabel="ID ends 0-4" startFrame={starts.deployment + 500} />
                      <Box x={80} y={170} width={140} height={80} color={theme.colors.client} label="Group B" icon="👤" subLabel="ID ends 5-9" startFrame={starts.deployment + 500} />

                      <Box x={400} y={110} width={200} height={120} color={theme.colors.loadBalancer} label="Smart LB" icon="🧠" subLabel="Header Routing" startFrame={starts.deployment + 500} />

                      <Box x={750} y={50} width={200} height={90} color={theme.colors.server} label="Feature A" icon="🅰️" subLabel="Original" startFrame={starts.deployment + 500} />
                      <Box x={750} y={170} width={200} height={90} color={theme.colors.messageQueue} label="Feature B" icon="🅱️" subLabel="New Design" startFrame={starts.deployment + 500} />

                      {/* Group A to Feature A */}
                      <Arrow x1={220} y1={90} x2={400} y2={130} color={theme.colors.client} startFrame={starts.deployment + 510} />
                      <Arrow x1={600} y1={130} x2={750} y2={95} color={theme.colors.server} label="Route A" startFrame={starts.deployment + 520} />
                      <DataFlowStream x1={220} y1={90} x2={750} y2={95} startFrame={starts.deployment + 530} color={theme.colors.server} particleCount={2} />

                      {/* Group B to Feature B */}
                      <Arrow x1={220} y1={210} x2={400} y2={170} color={theme.colors.client} startFrame={starts.deployment + 515} />
                      <Arrow x1={600} y1={170} x2={750} y2={215} color={theme.colors.messageQueue} label="Route B" startFrame={starts.deployment + 525} />
                      <DataFlowStream x1={220} y1={210} x2={750} y2={215} startFrame={starts.deployment + 535} color={theme.colors.messageQueue} particleCount={2} />
                   </svg>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Scene 11: SSL/TLS Termination */}
      {frame >= starts.ssl && frame < starts.websockets && (
        <>
          <Title text="SSL/TLS Termination" subtitle="Decrypt once, performance gains" startFrame={starts.ssl} y={50} />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.ssl} size={80} />

          <Dialogue speaker="junior" text="Do we need SSL on every backend server?" x={200} y={height * 0.64} startFrame={starts.ssl + 20} maxWidth={450} />

          <Dialogue
            speaker="architect"
            text="No! Terminate SSL at the load balancer. Decrypt once, forward as HTTP internally. Huge performance win!"
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.ssl + 50}
            maxWidth={680}
          />

          <svg width={width} height={height}>
            <Box x={200} y={350} width={140} height={100} color={theme.colors.client} label="Client" icon="👤" startFrame={starts.ssl + 80} />
            <Box x={600} y={330} width={260} height={140} color={theme.colors.loadBalancer} label="Load Balancer" icon="🔐" subLabel="SSL Termination" startFrame={starts.ssl + 90} />

            {[0, 1, 2].map((i) => (
              <Box key={i} x={1100} y={250 + i * 130} width={180} height={100} color={theme.colors.server} label={`Server ${i + 1}`} icon="🖥️" subLabel="HTTP only" startFrame={starts.ssl + 100 + i * 5} />
            ))}

            <Arrow x1={340} y1={400} x2={600} y2={400} color={theme.colors.success} label="HTTPS 🔒" startFrame={starts.ssl + 110} />
            <DataFlowStream x1={340} y1={400} x2={600} y2={400} startFrame={starts.ssl + 115} color={theme.colors.success} />

            {[0, 1, 2].map((i) => (
              <React.Fragment key={i}>
                <Arrow x1={860} y1={400} x2={1100} y2={300 + i * 130} color={theme.colors.server} label="HTTP" startFrame={starts.ssl + 125 + i * 5} dashed />
                <DataFlowStream x1={860} y1={400} x2={1100} y2={300 + i * 130} startFrame={starts.ssl + 135 + i * 10} color={theme.colors.server} particleCount={2} />
              </React.Fragment>
            ))}
          </svg>

          <div style={{position: 'absolute', right: 50, top: 600, opacity: fadeIn(frame, starts.ssl + 140, 20)}}>
            <InfoCard title="SSL Termination Benefits" points={['✅ Decrypt once (not per server)', '✅ Centralized certificate management', '✅ Backend servers focus on app logic', '⚠️ Internal traffic unencrypted (use VPC)']} color={theme.colors.success} />
          </div>
        </>
      )}

      {/* Scene 12: WebSocket Load Balancing */}
      {frame >= starts.websockets && frame < starts.rateLimiting && (
        <>
          <Title text="WebSocket Load Balancing" subtitle="Long-lived connections require special handling" startFrame={starts.websockets} y={50} />

          <Character type="junior" x={150} y={height - 200} startFrame={starts.websockets} size={80} />
          <Character type="architect" x={width * 0.75} y={height - 200} startFrame={starts.websockets} size={80} />

          <Dialogue speaker="junior" text="What about WebSockets for our real-time chat?" x={200} y={height * 0.64} startFrame={starts.websockets + 20} maxWidth={500} />

          <Dialogue
            speaker="architect"
            text="Good catch! WebSockets are persistent. You MUST use sticky sessions or consistent hashing."
            x={width * 0.60}
            y={height * 0.64}
            startFrame={starts.websockets + 50}
            maxWidth={680}
          />

          <svg width={width} height={height}>
            <Box x={150} y={300} width={140} height={100} color={theme.colors.client} label="Chat Client" icon="💬" subLabel="WebSocket" startFrame={starts.websockets + 80} />
            <Box x={550} y={350} width={280} height={140} color={theme.colors.loadBalancer} label="Load Balancer" icon="⚖️" subLabel="IP Hash enabled" startFrame={starts.websockets + 90} />

            {[0, 1].map((i) => (
              <Box key={i} x={1150} y={300 + i * 150} width={200} height={110} color={i === 1 ? theme.colors.success : theme.colors.server} label={`WS Server ${i + 1}`} icon="🔌" subLabel={i === 1 ? 'Connected ⚡' : ''} startFrame={starts.websockets + 100 + i * 5} />
            ))}

            <Arrow x1={290} y1={350} x2={550} y2={410} color={theme.colors.client} label="Initial WS Handshake" startFrame={starts.websockets + 110} />
            <Arrow x1={830} y1={420} x2={1150} y2={455} color={theme.colors.loadBalancer} label="Routed to Server 2" startFrame={starts.websockets + 120} />
            <DataFlowStream x1={290} y1={350} x2={1150} y2={455} startFrame={starts.websockets + 130} color={theme.colors.success} particleCount={3} />

            <g opacity={fadeIn(frame, starts.websockets + 140, 15)}>
              <line x1={290} y1={370} x2={1150} y2={470} stroke={theme.colors.success} strokeWidth={4} strokeDasharray="8,4" />
              <text x={700} y={420} fill={theme.colors.success} fontSize={20} fontWeight="bold">
                Persistent Connection
              </text>
            </g>
          </svg>

          <div style={{position: 'absolute', left: 100, top: 650, opacity: fadeIn(frame, starts.websockets + 145, 20)}}>
            <InfoCard title="WebSocket Considerations" points={['Must use sticky sessions / IP hash', 'Connection draining during deploys', 'Monitor connection pool limits', 'Consider dedicated WS servers']} color={theme.colors.warning} />
          </div>
        </>
      )}

      {/* Scene 13: Rate Limiting & DDoS Protection */}
      {frame >= starts.rateLimiting && (
        <>
          <Title text="Rate Limiting & DDoS Protection" subtitle="Protecting your infrastructure" startFrame={starts.rateLimiting} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 200} startFrame={starts.rateLimiting} size={80} />

          <Dialogue
            speaker="architect"
            text="Load balancers add a critical security layer. They can rate limit, block malicious traffic, and protect backends from overload."
            x={width / 2 - 500}
            y={height * 0.64}
            startFrame={starts.rateLimiting + 20}
            maxWidth={1000}
          />

          <svg width={width} height={height}>
            <Box x={100} y={200} width={140} height={80} color={theme.colors.client} label="Legit User" icon="👤" startFrame={starts.rateLimiting + 50} />
            <Box x={100} y={310} width={140} height={80} color={theme.colors.warning} label="Abuser" icon="😈" subLabel="1000 req/s" startFrame={starts.rateLimiting + 55} />
            <Box x={100} y={420} width={140} height={80} color={theme.colors.error} label="DDoS Bot" icon="🤖" subLabel="100k req/s" startFrame={starts.rateLimiting + 60} />

            <Box x={500} y={280} width={300} height={180} color={theme.colors.loadBalancer} label="Smart Load Balancer" icon="🛡️" subLabel="Rate Limiting + WAF" startFrame={starts.rateLimiting + 70} />

            <Box x={1100} y={300} width={200} height={140} color={theme.colors.success} label="Protected Backend" icon="🖥️" subLabel="Safe!" startFrame={starts.rateLimiting + 80} />

            <Arrow x1={240} y1={240} x2={500} y2={340} color={theme.colors.success} label="✅ Allowed" startFrame={starts.rateLimiting + 90} />
            <DataFlowStream x1={240} y1={240} x2={500} y2={340} startFrame={starts.rateLimiting + 95} color={theme.colors.success} />

            <Arrow x1={240} y1={350} x2={500} y2={360} color={theme.colors.warning} label="⚠️ Throttled" startFrame={starts.rateLimiting + 100} />

            <g opacity={fadeIn(frame, starts.rateLimiting + 110, 15)}>
              <line x1={240} y1={460} x2={500} y2={390} stroke={theme.colors.error} strokeWidth={6} />
              <line x1={240} y1={390} x2={500} y2={460} stroke={theme.colors.error} strokeWidth={6} />
              <text x={350} y={450} fill={theme.colors.error} fontSize={24} fontWeight="bold" textAnchor="middle">
                ❌ BLOCKED
              </text>
            </g>

            <Arrow x1={800} y1={370} x2={1100} y2={370} color={theme.colors.success} label="Clean traffic only" startFrame={starts.rateLimiting + 130} />
            <DataFlowStream x1={800} y1={370} x2={1100} y2={370} startFrame={starts.rateLimiting + 135} color={theme.colors.success} particleCount={3} />
          </svg>

          <div style={{position: 'absolute', left: 100, top: 620, opacity: fadeIn(frame, starts.rateLimiting + 150, 20)}}>
            <InfoCard title="Rate Limiting Strategies" points={['Per-IP limits (100 req/min)', 'Token bucket algorithm', 'WAF rules (SQL/XSS)', 'Challenge bad actors']} color={theme.colors.loadBalancer} width={600} />
          </div>

          <div style={{position: 'absolute', right: 50, top: 620, opacity: fadeIn(frame, starts.rateLimiting + 170, 20)}}>
            <InfoCard title="Circuit Breaker" points={['Monitor backend health', 'Auto-stop to failing servers', 'Exponential backoff', 'Graceful degradation']} color={theme.colors.info} width={600} />
          </div>

          {frame > starts.rateLimiting + 200 && (
            <div
              style={{
                position: 'absolute',
                left: width / 2 - 350,
                top: 900,
                width: 700,
                opacity: fadeIn(frame, starts.rateLimiting + 200, 20),
                background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.2), rgba(6, 95, 70, 0.2))',
                padding: 32,
                borderRadius: 24,
                border: `2px solid ${theme.colors.success}`,
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              <h2 style={{margin: 0, color: theme.colors.success, fontSize: 42, textAlign: 'center', fontWeight: 'bold'}}>🎉 You've Mastered Load Balancing!</h2>
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
        background: 'linear-gradient(145deg, rgba(37, 43, 74, 0.95), rgba(26, 31, 58, 0.95))',
        padding: 20,
        borderRadius: 20,
        width: 320,
        height: 180,
        border: `2px solid ${color}`,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
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
  width?: number;
}> = ({title, points, color, width = 580}) => {
  return (
    <div
      style={{
        background: 'linear-gradient(145deg, rgba(37, 43, 74, 0.95), rgba(26, 31, 58, 0.95))',
        padding: 24,
        borderRadius: 20,
        width,
        border: `2px solid ${color}`,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: 16,
          color: theme.text.primary,
          fontSize: 28,
          fontWeight: 'bold',
          borderBottom: `2px solid ${color}30`,
          paddingBottom: 8,
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
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <span style={{color, marginRight: 8, fontWeight: 'bold'}}>•</span>
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
        background: 'linear-gradient(145deg, rgba(37, 43, 74, 0.95), rgba(26, 31, 58, 0.95))',
        padding: 20,
        borderRadius: 20,
        width: 360,
        border: `2px solid ${theme.colors.network}`,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div style={{fontSize: 42, marginBottom: 8, textAlign: 'center'}}>{icon}</div>
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
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 16,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: 500,
        }}
      >
        {type}
      </div>
      <div style={{fontSize: 20, lineHeight: 1.6, color: theme.text.secondary}}>
        <div style={{marginBottom: 10}}>
          {pros.map((p, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <span style={{color: theme.colors.success}}>✓</span> {p}
            </div>
          ))}
        </div>
        <div style={{marginBottom: 16}}>
          {cons.map((c, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <span style={{color: theme.colors.error}}>⚠</span> {c}
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 10,
            background: 'rgba(96, 165, 250, 0.1)',
            borderRadius: 10,
            fontSize: 18,
            textAlign: 'center',
            border: `1px solid ${theme.colors.network}40`,
          }}
        >
          <strong style={{color: theme.colors.network}}>Best for:</strong> {useCase}
        </div>
      </div>
    </div>
  );
};
