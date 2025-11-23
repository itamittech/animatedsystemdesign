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

  // Scene Durations (approximate based on plan)
  const sceneDurations = {
    intro: 300,
    capTheorem: 600,
    cpVsAp: 300,
    transition: 300,
    moduloHashing: 400,
    consistentHashing: 800,
    virtualNodes: 600,
    conclusion: 300,
  };

  const starts = {
    intro: 0,
    capTheorem: 300,
    cpVsAp: 900,
    transition: 1200,
    moduloHashing: 1500,
    consistentHashing: 1900,
    virtualNodes: 2700,
    conclusion: 3300,
    end: 3600,
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

      {/* Scene 2: CAP Theorem */}
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

          {/* CAP Triangle Diagram */}
          <div style={{position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
             <svg width={800} height={600}>
                {/* Triangle */}
                <path
                  d="M 400 100 L 700 500 L 100 500 Z"
                  fill="none"
                  stroke={theme.colors.text.secondary}
                  strokeWidth={4}
                  opacity={fadeIn(frame, starts.capTheorem + 50, 30)}
                />

                {/* C Node */}
                <g opacity={fadeIn(frame, starts.capTheorem + 80, 20)}>
                   <circle cx={400} cy={100} r={80} fill={theme.colors.database} />
                   <text x={400} y={100} textAnchor="middle" dy={5} fill="white" fontSize={32} fontWeight="bold">Consistency</text>
                   <text x={400} y={140} textAnchor="middle" fill="white" fontSize={16}>(Every read hits most recent write)</text>
                </g>

                {/* A Node */}
                <g opacity={fadeIn(frame, starts.capTheorem + 120, 20)}>
                   <circle cx={100} cy={500} r={80} fill={theme.colors.server} />
                   <text x={100} y={500} textAnchor="middle" dy={5} fill="white" fontSize={32} fontWeight="bold">Availability</text>
                   <text x={100} y={540} textAnchor="middle" fill="white" fontSize={16}>(Every request gets a response)</text>
                </g>

                {/* P Node */}
                <g opacity={fadeIn(frame, starts.capTheorem + 160, 20)}>
                   <circle cx={700} cy={500} r={80} fill={theme.colors.network} />
                   <text x={700} y={500} textAnchor="middle" dy={5} fill="white" fontSize={32} fontWeight="bold">Partition Tol.</text>
                   <text x={700} y={540} textAnchor="middle" fill="white" fontSize={16}>(System works despite network drops)</text>
                </g>

                {/* Edges - CA */}
                <text x={250} y={280} fill={theme.colors.text.accent} fontSize={24} fontWeight="bold" opacity={fadeIn(frame, starts.capTheorem + 200, 20)}>
                   CA: Traditional RDBMS
                </text>
                {/* Edges - CP */}
                <text x={550} y={280} fill={theme.colors.text.accent} fontSize={24} fontWeight="bold" opacity={fadeIn(frame, starts.capTheorem + 220, 20)}>
                   CP: Banking / Redis
                </text>
                {/* Edges - AP */}
                <text x={400} y={550} textAnchor="middle" fill={theme.colors.text.accent} fontSize={24} fontWeight="bold" opacity={fadeIn(frame, starts.capTheorem + 240, 20)}>
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
                  // Logic: With 4 servers (N=4) -> Map to k % 4
                  // With 3 servers (N=3) -> Map to k % 3
                  const initialTarget = k % 4;
                  const crashedTarget = k % 3; // S2 crashed, so we have S0, S1, S3 (remapped 0,1,2 logic roughly)
                  // Actually standard modulo would shift everything if N changes to 3.
                  // 4 % 4 = 0. 4 % 3 = 1. MOVES.
                  // 5 % 4 = 1. 5 % 3 = 2. MOVES.

                  const isMoving = frame > starts.moduloHashing + 200 && (k % 4) !== (k % 3);

                  // Calculate X based on target
                  const targetIdx = frame > starts.moduloHashing + 200 ? (k % 3) : (k % 4);
                  // If S2 crashed (index 2), then S3 becomes index 2 in the array of [S0, S1, S3]?
                  // Let's simplify visually.
                  // N=4: S0, S1, S2, S3.
                  // N=3: S0, S1, S3 (logically index 0, 1, 2 for modulo?)
                  // This confusing remapping IS the problem.

                  const finalX = 300 + (targetIdx > 1 ? targetIdx + 1 : targetIdx) * 350; // Skip the gap of S2 roughly
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

      {/* Scene 6: Consistent Hashing (The Ring) */}
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
                 {/* Ring */}
                 <circle cx={400} cy={400} r={300} fill="none" stroke={theme.colors.text.muted} strokeWidth={4} strokeDasharray="10,10" />

                 {/* Servers on Ring (0, 90, 180, 270 degrees) */}
                 {[0, 90, 180, 270].map((deg, i) => {
                    const rad = (deg - 90) * (Math.PI / 180);
                    const x = 400 + 300 * Math.cos(rad);
                    const y = 400 + 300 * Math.sin(rad);
                    return (
                       <g key={i}>
                          <circle cx={x} cy={y} r={30} fill={theme.colors.server} stroke="white" strokeWidth={3} />
                          <text x={x} y={y} dy={5} textAnchor="middle" fill="white" fontWeight="bold">S{i}</text>
                       </g>
                    )
                 })}

                 {/* Keys on Ring (Random angles) */}
                 {[45, 120, 200, 300, 350].map((deg, i) => {
                    const rad = (deg - 90) * (Math.PI / 180);
                    const x = 400 + 300 * Math.cos(rad);
                    const y = 400 + 300 * Math.sin(rad);

                    // Determine owner
                    let owner = "S0";
                    if (deg > 0 && deg <= 90) owner = "S1";
                    else if (deg > 90 && deg <= 180) owner = "S2";
                    else if (deg > 180 && deg <= 270) owner = "S3";
                    else owner = "S0"; // > 270 loops back to 0

                    return (
                       <g key={i} opacity={fadeIn(frame, starts.consistentHashing + 50 + i*10, 10)}>
                          <circle cx={x} cy={y} r={10} fill={theme.colors.client} />
                          {/* Mapping line to owner (Next clockwise) */}
                          {frame > starts.consistentHashing + 100 && (
                             <path
                               d={`M ${x} ${y} Q ${400} ${400} ${
                                  // Crude approx of owner coordinates
                                  owner === "S0" ? 400 : owner === "S1" ? 700 : owner === "S2" ? 400 : 100
                               } ${
                                  owner === "S0" ? 100 : owner === "S1" ? 400 : owner === "S2" ? 700 : 400
                               }`}
                               fill="none"
                               stroke={theme.colors.dataFlow}
                               strokeWidth={1}
                               opacity={0.5}
                             />
                          )}
                       </g>
                    )
                 })}

                 {/* Add New Server S4 at 45 degrees */}
                 {frame > starts.consistentHashing + 200 && (
                    <g opacity={fadeIn(frame, starts.consistentHashing + 200, 20)}>
                       <circle cx={400 + 300 * Math.cos((45-90)*Math.PI/180)} cy={400 + 300 * Math.sin((45-90)*Math.PI/180)} r={30} fill={theme.colors.accent} stroke="white" strokeWidth={3} />
                       <text x={400 + 300 * Math.cos((45-90)*Math.PI/180)} y={400 + 300 * Math.sin((45-90)*Math.PI/180)} dy={5} textAnchor="middle" fill="white" fontWeight="bold">S4</text>

                       <text x={400} y={400} textAnchor="middle" fill={theme.colors.success} fontSize={24} fontWeight="bold">
                          Only keys 0-45° move to S4!
                       </text>
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

           <div style={{position: 'absolute', top: 500, width: '100%', textAlign: 'center'}}>
              <svg width={width} height={400}>
                 {/* Linear representation of the ring for clarity */}
                 <line x1={100} y1={200} x2={width-100} y2={200} stroke={theme.colors.text.muted} strokeWidth={4} />

                 {/* Uneven Nodes */}
                 {frame < starts.virtualNodes + 150 && (
                    <>
                       <circle cx={200} cy={200} r={20} fill={theme.colors.server} /> <text x={200} y={240} textAnchor="middle" fill="white">S1</text>
                       <circle cx={300} cy={200} r={20} fill={theme.colors.server} /> <text x={300} y={240} textAnchor="middle" fill="white">S2</text>
                       {/* Huge gap */}
                       <circle cx={800} cy={200} r={20} fill={theme.colors.server} /> <text x={800} y={240} textAnchor="middle" fill="white">S3</text>

                       <rect x={300} y={180} width={500} height={40} fill={theme.colors.error} opacity={0.3} />
                       <text x={550} y={150} textAnchor="middle" fill={theme.colors.error} fontSize={24}>HOT SHARD (S3 overload)</text>
                    </>
                 )}

                 {/* Virtual Nodes */}
                 {frame >= starts.virtualNodes + 150 && (
                    <>
                       {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                          const x = 150 + i * 150;
                          const serverId = (i % 3) + 1;
                          return (
                             <g key={i} opacity={fadeIn(frame, starts.virtualNodes + 150 + i*10, 10)}>
                                <circle cx={x} cy={200} r={15} fill={serverId === 1 ? theme.colors.server : serverId === 2 ? theme.colors.accent : theme.colors.loadBalancer} />
                                <text x={x} y={240} textAnchor="middle" fill="white" fontSize={14}>S{serverId}</text>
                             </g>
                          )
                       })}
                       <text x={width/2} y={100} textAnchor="middle" fill={theme.colors.success} fontSize={32} fontWeight="bold">
                          Uniform Distribution via Virtual Nodes
                       </text>
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
