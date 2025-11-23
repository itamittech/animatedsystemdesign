import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {DataFlowStream} from '../components/DataFlowParticle';
import {fadeIn, pulse, slideInUp} from '../design-system/animations';

/**
 * Consistent Hashing & CAP Theorem
 * Merging two critical distributed system concepts into one narrative flow.
 */
export const ConsistentHashingCAP: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Scene Durations (adjusted for better pacing - neither too fast nor too slow)
  const sceneDurations = {
    intro: 300,
    capTheorem: 750, // Reduced from 900, up from 600
    cpVsAp: 400,
    transition: 300,
    moduloHashing: 450,
    consistentHashing: 1000, // Reduced from 1250
    virtualNodes: 750, // Reduced from 900
    conclusion: 400,
  };

  const starts = {
    intro: 0,
    capTheorem: sceneDurations.intro,
    cpVsAp: sceneDurations.intro + sceneDurations.capTheorem,
    transition: sceneDurations.intro + sceneDurations.capTheorem + sceneDurations.cpVsAp,
    moduloHashing: sceneDurations.intro + sceneDurations.capTheorem + sceneDurations.cpVsAp + sceneDurations.transition,
    consistentHashing: sceneDurations.intro + sceneDurations.capTheorem + sceneDurations.cpVsAp + sceneDurations.transition + sceneDurations.moduloHashing,
    virtualNodes: sceneDurations.intro + sceneDurations.capTheorem + sceneDurations.cpVsAp + sceneDurations.transition + sceneDurations.moduloHashing + sceneDurations.consistentHashing,
    conclusion: sceneDurations.intro + sceneDurations.capTheorem + sceneDurations.cpVsAp + sceneDurations.transition + sceneDurations.moduloHashing + sceneDurations.consistentHashing + sceneDurations.virtualNodes,
    end: sceneDurations.intro + sceneDurations.capTheorem + sceneDurations.cpVsAp + sceneDurations.transition + sceneDurations.moduloHashing + sceneDurations.consistentHashing + sceneDurations.virtualNodes + sceneDurations.conclusion,
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.background.primary,
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Credit Bookmark */}
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
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(96, 165, 250, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Intro */}
      {frame < starts.capTheorem && (
        <>
          <Title text="CAP Theorem & Consistent Hashing" subtitle="Foundations of Distributed Systems" startFrame={0} />

          <Character type="junior" x={width * 0.25} y={300} startFrame={20} />
          <Character type="architect" x={width * 0.75} y={300} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="Sarah, I'm building a global DB. It needs to be 100% Consistent AND Available, even if the network breaks!"
            x={350}
            y={320}
            startFrame={50}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Ah, the impossible dream! You're fighting the laws of distributed physics. Let's talk about the CAP Theorem."
            x={width * 0.60}
            y={480}
            startFrame={150}
            maxWidth={520}
          />
        </>
      )}

      {/* Scene 2: CAP Theorem (Layout fixed to prevent clipping) */}
      {frame >= starts.capTheorem && frame < starts.cpVsAp && (
        <>
          <Title text="The CAP Theorem" subtitle="Pick any two (but really, it's complicated)" startFrame={starts.capTheorem} y={50} />

          <Character type="architect" x={150} y={height - 200} startFrame={starts.capTheorem} size={80} />

          <Dialogue
            speaker="architect"
            text="Consistency, Availability, Partition Tolerance. You can only guarantee two at the same time."
            x={300}
            y={height * 0.7}
            startFrame={starts.capTheorem + 20}
            maxWidth={600}
          />

          {/* CAP Triangle Diagram - Fixed clipping by widening width and centering content */}
          <div style={{position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
             <svg width={1000} height={700} viewBox="0 0 1000 700">
                {/* Triangle */}
                <path
                  d="M 500 100 L 800 450 L 200 450 Z"
                  fill="none"
                  stroke={theme.text.secondary}
                  strokeWidth={4}
                  opacity={fadeIn(frame, starts.capTheorem + 50, 30)}
                />

                {/* C Node (Top Center) */}
                <g opacity={fadeIn(frame, starts.capTheorem + 80, 20)}>
                   <circle cx={500} cy={100} r={80} fill={theme.colors.database} />
                   <text x={500} y={100} textAnchor="middle" dy={5} fill="white" fontSize={32} fontWeight="bold">Consistency</text>
                   <text x={500} y={140} textAnchor="middle" fill="white" fontSize={16}>(Every read hits most recent write)</text>
                </g>

                {/* A Node (Bottom Left) - Moved inward to prevent text clipping */}
                <g opacity={fadeIn(frame, starts.capTheorem + 120, 20)}>
                   <circle cx={200} cy={450} r={80} fill={theme.colors.server} />
                   <text x={200} y={450} textAnchor="middle" dy={5} fill="white" fontSize={32} fontWeight="bold">Availability</text>
                   <text x={200} y={490} textAnchor="middle" fill="white" fontSize={16}>(Every request gets a response)</text>
                </g>

                {/* P Node (Bottom Right) - Moved inward */}
                <g opacity={fadeIn(frame, starts.capTheorem + 160, 20)}>
                   <circle cx={800} cy={450} r={80} fill={theme.colors.network} />
                   <text x={800} y={450} textAnchor="middle" dy={5} fill="white" fontSize={32} fontWeight="bold">Partition Tol.</text>
                   <text x={800} y={490} textAnchor="middle" fill="white" fontSize={16}>(System works despite network drops)</text>
                </g>

                {/* Edges - CA */}
                <text x={250} y={260} fill={theme.text.accent} fontSize={24} fontWeight="bold" opacity={fadeIn(frame, starts.capTheorem + 200, 20)}>
                   CA: Traditional RDBMS
                </text>
                {/* Edges - CP */}
                <text x={550} y={260} fill={theme.text.accent} fontSize={24} fontWeight="bold" opacity={fadeIn(frame, starts.capTheorem + 220, 20)}>
                   CP: Banking / Redis
                </text>
                {/* Edges - AP - Lowered slightly to not hit the triangle bottom edge */}
                <text x={400} y={550} textAnchor="middle" fill={theme.text.accent} fontSize={24} fontWeight="bold" opacity={fadeIn(frame, starts.capTheorem + 240, 20)}>
                   AP: Cassandra / Dynamo
                </text>
             </svg>
          </div>
        </>
      )}

      {/* Scene 3: CP vs AP Examples */}
      {frame >= starts.cpVsAp && frame < starts.transition && (
        <>
           <Title text="Real World Trade-offs" subtitle="When to choose what?" startFrame={starts.cpVsAp} y={50} />

           <div style={{display: 'flex', justifyContent: 'center', gap: 100, marginTop: 250, width: '100%'}}>
              {/* CP Example */}
              <div style={{
                 width: 600,
                 background: 'linear-gradient(145deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
                 border: `2px solid ${theme.colors.database}`,
                 borderRadius: 20,
                 padding: 30,
                 opacity: fadeIn(frame, starts.cpVsAp + 30, 20)
              }}>
                 <div style={{fontSize: 60, textAlign: 'center', marginBottom: 20}}>🏦</div>
                 <h3 style={{color: theme.colors.database, textAlign: 'center', fontSize: 36, marginTop: 0}}>CP (Consistency)</h3>
                 <p style={{color: theme.text.primary, fontSize: 24, lineHeight: 1.5}}>
                    <strong>Banking Systems</strong><br/>
                    If the network partition separates the ATM from the main ledger,
                    <span style={{color: theme.colors.error}}> FAIL the transaction</span>.
                    Better to show error than allow double-spending.
                 </p>
              </div>

              {/* AP Example */}
              <div style={{
                 width: 600,
                 background: 'linear-gradient(145deg, rgba(52, 211, 153, 0.1), rgba(52, 211, 153, 0.05))',
                 border: `2px solid ${theme.colors.server}`,
                 borderRadius: 20,
                 padding: 30,
                 opacity: fadeIn(frame, starts.cpVsAp + 100, 20)
              }}>
                 <div style={{fontSize: 60, textAlign: 'center', marginBottom: 20}}>📱</div>
                 <h3 style={{color: theme.colors.server, textAlign: 'center', fontSize: 36, marginTop: 0}}>AP (Availability)</h3>
                 <p style={{color: theme.text.primary, fontSize: 24, lineHeight: 1.5}}>
                    <strong>Social Media Likes</strong><br/>
                    If connection fails, <span style={{color: theme.colors.success}}>ACCEPT the like</span> locally.
                    Sync later. It's okay if Alice sees 5 likes and Bob sees 6 for a few seconds.
                 </p>
              </div>
           </div>
        </>
      )}

      {/* Scene 4: Transition to Partitioning */}
      {frame >= starts.transition && frame < starts.moduloHashing && (
        <>
           <Title text="Scaling Out" subtitle="From one node to many" startFrame={starts.transition} />
           <Character type="junior" x={width * 0.25} y={300} startFrame={starts.transition} />
           <Character type="architect" x={width * 0.75} y={300} startFrame={starts.transition} />

           <Dialogue
             speaker="junior"
             text="Got it! I'll go with AP for my cache. But I have terabytes of data. I need 100 servers!"
             x={350}
             y={320}
             startFrame={starts.transition + 20}
             maxWidth={500}
           />

           <Dialogue
             speaker="architect"
             text="Right, we need to partition (shard) the data. But how do we map keys to servers efficiently?"
             x={width * 0.60}
             y={480}
             startFrame={starts.transition + 100}
             maxWidth={520}
           />
        </>
      )}

      {/* Scene 5: Modulo Hashing Problem */}
      {frame >= starts.moduloHashing && frame < starts.consistentHashing && (
        <>
           <Title text="The Problem with Modulo Hashing" subtitle="server = hash(key) % N" startFrame={starts.moduloHashing} y={50} />

           <div style={{position: 'absolute', top: 200, left: width/2 - 300}}>
              <h3 style={{color: theme.text.primary, fontSize: 48}}>hash(key) % <span style={{color: theme.colors.error}}>N</span></h3>
           </div>

           {/* Visualizing the crash */}
           <svg width={width} height={height}>
              {/* Servers */}
              {[0, 1, 2, 3].map(i => (
                 <Box
                    key={i}
                    x={300 + i * 350}
                    y={500}
                    width={150}
                    height={150}
                    color={i === 2 && frame > starts.moduloHashing + 150 ? theme.colors.error : theme.colors.server}
                    label={`S${i}`}
                    icon="🖥️"
                    startFrame={starts.moduloHashing + 20}
                    opacity={i === 2 && frame > starts.moduloHashing + 150 ? 0.5 : 1}
                 />
              ))}

              {/* Keys mapping */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map(k => {
                  const initialTarget = k % 4;
                  const targetIdx = frame > starts.moduloHashing + 200 ? (k % 3) : (k % 4);
                  const isMoving = frame > starts.moduloHashing + 200 && (k % 4) !== (k % 3);

                  const finalX = 300 + (targetIdx > 1 ? targetIdx + 1 : targetIdx) * 350;
                  const startX = 300 + (k % 4) * 350;

                  return (
                     <g key={k} style={{
                        transition: 'all 1s ease-in-out',
                        transform: `translate(${isMoving ? finalX - startX : 0}px, 0)`
                     }}>
                        <circle
                           cx={startX + 75}
                           cy={400}
                           r={20}
                           fill={theme.colors.client}
                           opacity={fadeIn(frame, starts.moduloHashing + 50 + k*10, 10)}
                        />
                        <text x={startX + 75} y={405} textAnchor="middle" fill="white" fontSize={14} fontWeight="bold" opacity={fadeIn(frame, starts.moduloHashing + 50 + k*10, 10)}>K{k}</text>
                     </g>
                  )
              })}

              {/* X Mark on S2 */}
              {frame > starts.moduloHashing + 150 && (
                 <text x={300 + 2*350 + 75} y={575} fontSize={100} textAnchor="middle" fill="red" opacity={fadeIn(frame, starts.moduloHashing + 150, 5)}>❌</text>
              )}

              {/* Chaos text */}
              {frame > starts.moduloHashing + 250 && (
                 <text x={width/2} y={800} textAnchor="middle" fill={theme.colors.error} fontSize={40} fontWeight="bold" opacity={fadeIn(frame, starts.moduloHashing + 250, 10)}>
                    CACHE STAMPEDE! Nearly 100% of keys moved!
                 </text>
              )}
           </svg>
        </>
      )}

      {/* Scene 6: Consistent Hashing (The Ring) - Enhanced Explanation */}
      {frame >= starts.consistentHashing && frame < starts.virtualNodes && (
        <>
           <Title text="The Solution: Consistent Hashing" subtitle="Minimizing data movement" startFrame={starts.consistentHashing} y={50} />

           <Character type="architect" x={100} y={height - 150} startFrame={starts.consistentHashing} size={80} />
           <Dialogue
             speaker="architect"
             text="Imagine a ring (0-360°). We hash both Servers and Keys onto it. Keys belong to the next server clockwise."
             x={250} y={height - 250} startFrame={starts.consistentHashing + 20} maxWidth={500}
           />

           {/* The Ring Visualization */}
           <div style={{position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, -50%)'}}>
              <svg width={800} height={800} viewBox="0 0 800 800">
                 {/* Ownership Zones (Arcs) */}
                 {/* S1 Zone (0-90) */}
                 <path d="M 500 400 L 800 400 A 300 300 0 0 1 500 700 Z" fill={theme.colors.server} opacity={0.2} />

                 {/* S2 Zone (90-180) */}
                 <path d="M 500 400 L 500 700 A 300 300 0 0 1 200 400 Z" fill={theme.colors.accent} opacity={0.2} />

                 {/* S3 Zone (180-270) */}
                 <path d="M 500 400 L 200 400 A 300 300 0 0 1 500 100 Z" fill={theme.colors.loadBalancer} opacity={0.2} />

                 {/* S0 Zone (270-0) */}
                 <path d="M 500 400 L 500 100 A 300 300 0 0 1 800 400 Z" fill={theme.colors.database} opacity={0.2} />

                 {/* Ring Outline */}
                 <circle cx={500} cy={400} r={300} fill="none" stroke={theme.text.muted} strokeWidth={4} strokeDasharray="10,10" />

                 {/* Servers on Ring */}
                 {/* S0 (0 deg -> right) - Improved visibility */}
                 <g transform="translate(800, 400)">
                    <circle r={30} fill={theme.colors.database} stroke="white" strokeWidth={3} />
                    <text x={40} y={5} textAnchor="start" fill="white" fontWeight="bold" fontSize={24} style={{textShadow: '0 2px 4px black'}}>S0</text>
                 </g>
                 {/* S1 (90 deg -> bottom) */}
                 <g transform="translate(500, 700)">
                    <circle r={30} fill={theme.colors.server} stroke="white" strokeWidth={3} />
                    <text dy={5} textAnchor="middle" fill="white" fontWeight="bold">S1</text>
                 </g>
                 {/* S2 (180 deg -> left) */}
                 <g transform="translate(200, 400)">
                    <circle r={30} fill={theme.colors.accent} stroke="white" strokeWidth={3} />
                    <text dy={5} textAnchor="middle" fill="white" fontWeight="bold">S2</text>
                 </g>
                 {/* S3 (270 deg -> top) */}
                 <g transform="translate(500, 100)">
                    <circle r={30} fill={theme.colors.loadBalancer} stroke="white" strokeWidth={3} />
                    <text dy={5} textAnchor="middle" fill="white" fontWeight="bold">S3</text>
                 </g>

                 {/* Animated Key Mapping: K1 (30 deg) -> S1 (0-90 range) */}
                 {frame > starts.consistentHashing + 100 && (
                    <g opacity={interpolate(frame, [starts.consistentHashing + 100, starts.consistentHashing + 120, starts.consistentHashing + 380, starts.consistentHashing + 400], [0, 1, 1, 0] as any)}>
                        {/* Key Position: 30 deg (Changed from 45 to be clearly < 45 later) */}
                        <circle cx={500 + 300 * Math.cos(30 * Math.PI/180)} cy={400 + 300 * Math.sin(30 * Math.PI/180)} r={15} fill={theme.colors.client} />
                        <text x={500 + 340 * Math.cos(30 * Math.PI/180)} y={400 + 340 * Math.sin(30 * Math.PI/180)} textAnchor="middle" fill="white" fontSize={24}>K1</text>

                        {/* Probe Animation (Arc 30 to 90) */}
                        {(() => {
                           const progress = interpolate(frame, [starts.consistentHashing + 120, starts.consistentHashing + 200], [0, 1], {extrapolateRight: 'clamp'});
                           const endAngle = 30 + progress * 60; // 30 to 90
                           const x = 500 + 300 * Math.cos(endAngle * Math.PI/180);
                           const y = 400 + 300 * Math.sin(endAngle * Math.PI/180);
                           return (
                              <path d={`M ${500 + 300 * Math.cos(30*Math.PI/180)} ${400 + 300 * Math.sin(30*Math.PI/180)} A 300 300 0 0 1 ${x} ${y}`} stroke={theme.colors.success} strokeWidth={6} fill="none" />
                           )
                        })()}

                        <text x={650} y={650} textAnchor="middle" fill={theme.colors.success} fontSize={28} fontWeight="bold">S1 Zone</text>
                    </g>
                 )}

                 {/* Example 2: K2 (200 deg) -> S3 (270 deg) */}
                 {frame > starts.consistentHashing + 400 && (
                    <g opacity={interpolate(frame, [starts.consistentHashing + 400, starts.consistentHashing + 420, starts.consistentHashing + 680, starts.consistentHashing + 700], [0, 1, 1, 0] as any)}>
                        <circle cx={500 + 300 * Math.cos(200 * Math.PI/180)} cy={400 + 300 * Math.sin(200 * Math.PI/180)} r={15} fill={theme.colors.client} />
                        <text x={500 + 340 * Math.cos(200 * Math.PI/180)} y={400 + 340 * Math.sin(200 * Math.PI/180)} textAnchor="middle" fill="white" fontSize={24}>K2</text>

                        {(() => {
                           const progress = interpolate(frame, [starts.consistentHashing + 420, starts.consistentHashing + 500], [0, 1], {extrapolateRight: 'clamp'});
                           const endAngle = 200 + progress * 70; // 200 to 270
                           const x = 500 + 300 * Math.cos(endAngle * Math.PI/180);
                           const y = 400 + 300 * Math.sin(endAngle * Math.PI/180);
                           return (
                              <path d={`M ${500 + 300 * Math.cos(200*Math.PI/180)} ${400 + 300 * Math.sin(200*Math.PI/180)} A 300 300 0 0 1 ${x} ${y}`} stroke={theme.colors.success} strokeWidth={6} fill="none" />
                           )
                        })()}
                         <text x={350} y={200} textAnchor="middle" fill={theme.colors.success} fontSize={28} fontWeight="bold">S3 Zone</text>
                    </g>
                 )}

                 {/* Add S4 at 45 deg */}
                 {frame > starts.consistentHashing + 700 && (
                    <g opacity={fadeIn(frame, starts.consistentHashing + 700, 20)}>
                       <circle cx={500 + 300 * Math.cos(45 * Math.PI/180)} cy={400 + 300 * Math.sin(45 * Math.PI/180)} r={30} fill={theme.colors.warning} stroke="white" strokeWidth={3} />
                       <text x={500 + 300 * Math.cos(45 * Math.PI/180)} y={400 + 300 * Math.sin(45 * Math.PI/180)} dy={5} textAnchor="middle" fill="white" fontWeight="bold">S4</text>

                       {/* New Zone highlight: 0 to 45 */}
                       <path d={`M 500 400 L ${500+300} 400 A 300 300 0 0 1 ${500 + 300*Math.cos(45*Math.PI/180)} ${400 + 300*Math.sin(45*Math.PI/180)} Z`} fill={theme.colors.warning} opacity={0.3} />

                       <text x={500} y={400} textAnchor="middle" fill={theme.colors.success} fontSize={24} fontWeight="bold">
                          S4 takes 0-45°.<br/>Only K1 moves to S4!
                       </text>

                       {/* Arrow from K1 (30 deg) to S4 (45 deg) explicitly */}
                       <path
                          d={`M ${500 + 300 * Math.cos(30*Math.PI/180)} ${400 + 300 * Math.sin(30*Math.PI/180)} Q ${500 + 320 * Math.cos(37*Math.PI/180)} ${400 + 320 * Math.sin(37*Math.PI/180)} ${500 + 300 * Math.cos(45*Math.PI/180)} ${400 + 300 * Math.sin(45*Math.PI/180)}`}
                          stroke={theme.colors.client}
                          strokeWidth={4}
                          fill="none"
                          markerEnd="url(#arrowhead)"
                       />
                    </g>
                 )}
              </svg>
           </div>
        </>
      )}

      {/* Scene 7: Virtual Nodes */}
      {frame >= starts.virtualNodes && frame < starts.conclusion && (
        <>
           <Title text="Virtual Nodes" subtitle="Solving uneven distribution" startFrame={starts.virtualNodes} y={50} />

           <Dialogue
             speaker="junior"
             text="But wait, if S4 is close to S0, S4 gets very few keys. That's unfair!"
             x={200} y={300} startFrame={starts.virtualNodes} maxWidth={500}
           />

           <Dialogue
             speaker="architect"
             text="Correct. That's 'Data Skew'. We solve it by hashing each server multiple times (S1_a, S1_b, S1_c...)."
             x={width - 550} y={300} startFrame={starts.virtualNodes + 60} maxWidth={500}
           />

           <div style={{position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, -50%)'}}>
              <svg width={1000} height={800} viewBox="0 0 1000 800">
                 <circle cx={500} cy={400} r={300} fill="none" stroke={theme.text.muted} strokeWidth={4} strokeDasharray="10,10" />

                 {/* Phase 1: Uneven Ring (0-150 frames) */}
                 {/* Updated to match Dialogue: S0 and S4 close to each other (0 and 15) */}
                 {frame < starts.virtualNodes + 200 && (
                    <>
                       {/* S0 at 0 deg */}
                       <circle cx={800} cy={400} r={25} fill={theme.colors.database} stroke="white" strokeWidth={2} />
                       <text x={840} y={400} fill="white" fontWeight="bold" fontSize={24}>S0</text>

                       {/* S4 at 15 deg (Very Close) */}
                       <circle cx={500 + 300 * Math.cos(15*Math.PI/180)} cy={400 + 300 * Math.sin(15*Math.PI/180)} r={25} fill={theme.colors.warning} stroke="white" strokeWidth={2} />
                       <text x={500 + 340 * Math.cos(15*Math.PI/180)} y={400 + 340 * Math.sin(15*Math.PI/180)} fill="white" fontWeight="bold" fontSize={24}>S4</text>

                       {/* S1 at 150 deg (Huge gap from 15 to 150) */}
                       <circle cx={500 + 300 * Math.cos(150*Math.PI/180)} cy={400 + 300 * Math.sin(150*Math.PI/180)} r={25} fill={theme.colors.server} stroke="white" strokeWidth={2} />
                       <text x={500 + 340 * Math.cos(150*Math.PI/180)} y={400 + 340 * Math.sin(150*Math.PI/180)} fill="white" fontWeight="bold" fontSize={24}>S1</text>

                       {/* S2 at 240 deg */}
                       <circle cx={500 + 300 * Math.cos(240*Math.PI/180)} cy={400 + 300 * Math.sin(240*Math.PI/180)} r={25} fill={theme.colors.accent} stroke="white" strokeWidth={2} />
                       <text x={500 + 340 * Math.cos(240*Math.PI/180)} y={400 + 340 * Math.sin(240*Math.PI/180)} fill="white" fontWeight="bold" fontSize={24}>S2</text>

                       {/* Hot Zone (15 to 150) - S1 gets huge load because it follows S4 */}
                       <path d={`M 500 400 L ${500 + 300*Math.cos(15*Math.PI/180)} ${400 + 300*Math.sin(15*Math.PI/180)} A 300 300 0 0 1 ${500 + 300*Math.cos(150*Math.PI/180)} ${400 + 300*Math.sin(150*Math.PI/180)} Z`} fill={theme.colors.error} opacity={0.3} />
                       <text x={500} y={600} textAnchor="middle" fill={theme.colors.error} fontSize={30} fontWeight="bold">HOT ZONE! (S1)</text>
                    </>
                 )}

                 {/* Phase 2: Virtual Nodes (200+ frames) */}
                 {frame >= starts.virtualNodes + 200 && (
                    <>
                       <text x={500} y={400} textAnchor="middle" fill={theme.colors.success} fontSize={32} fontWeight="bold" opacity={fadeIn(frame, starts.virtualNodes + 200, 20)}>
                          Virtual Nodes Balance The Ring
                       </text>

                       {/* Generate fake virtual nodes */}
                       {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
                          const offset = (i % 3) * 15; // Slight random offset visually
                          const finalAngle = angle + offset;
                          const rad = finalAngle * Math.PI / 180;
                          const x = 500 + 300 * Math.cos(rad);
                          const y = 400 + 300 * Math.sin(rad);
                          const type = i % 3; // 0=S1, 1=S2, 2=S3
                          const color = type === 0 ? theme.colors.server : type === 1 ? theme.colors.accent : theme.colors.loadBalancer;

                          return (
                             <g key={i} opacity={fadeIn(frame, starts.virtualNodes + 200 + i*10, 10)}>
                                <circle cx={x} cy={y} r={15} fill={color} stroke="white" strokeWidth={1} />
                                {/* Draw small arcs? Too complex. Just showing distribution is enough. */}
                             </g>
                          )
                       })}
                    </>
                 )}
              </svg>
           </div>
        </>
      )}

      {/* Scene 8: Conclusion */}
      {frame >= starts.conclusion && (
        <>
           <Title text="Summary" subtitle="Architecture is about trade-offs" startFrame={starts.conclusion} y={50} />

           <Character type="architect" x={width/2 - 60} y={height - 200} startFrame={starts.conclusion} size={80} />

           <div style={{
              position: 'absolute',
              top: 250,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 40
           }}>
              <div style={{
                 width: 500,
                 background: theme.background.card,
                 padding: 30,
                 borderRadius: 20,
                 border: `2px solid ${theme.colors.database}`,
                 opacity: fadeIn(frame, starts.conclusion + 20, 20)
              }}>
                 <h3 style={{color: theme.colors.database, marginTop: 0}}>CAP Theorem</h3>
                 <ul style={{fontSize: 24, lineHeight: 1.6, color: theme.text.secondary}}>
                    <li>Networks fail (P is mandatory).</li>
                    <li>Choose Consistency (Banking) or Availability (Social).</li>
                 </ul>
              </div>

              <div style={{
                 width: 500,
                 background: theme.background.card,
                 padding: 30,
                 borderRadius: 20,
                 border: `2px solid ${theme.colors.network}`,
                 opacity: fadeIn(frame, starts.conclusion + 40, 20)
              }}>
                 <h3 style={{color: theme.colors.network, marginTop: 0}}>Consistent Hashing</h3>
                 <ul style={{fontSize: 24, lineHeight: 1.6, color: theme.text.secondary}}>
                    <li>Modulo hashing fails at scale.</li>
                    <li>Ring topology minimizes data movement.</li>
                    <li>Virtual nodes ensure balance.</li>
                 </ul>
              </div>
           </div>
        </>
      )}

    </AbsoluteFill>
  );
};
