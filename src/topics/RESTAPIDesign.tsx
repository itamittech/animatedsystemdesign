import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * REST API Design Best Practices
 * - Reduced duration (faster pacing)
 * - Added architectural depth (Content-Type, Streaming, System Design Example)
 * - Updated Branding
 */
export const RESTAPIDesign: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Define Scene Timings (in frames) - Reduced by ~30%
  const sceneDurations = {
    intro: 210,         // 7s
    resources: 360,     // 12s
    methods: 420,       // 14s
    contentTypes: 480,  // 16s (New: Headers, Body constraints)
    systemDesign: 600,  // 20s (New: Video Upload Example)
    statusCodes: 420,   // 14s
    versioning: 360,    // 12s
    pagination: 360,    // 12s
    hateoas: 360,       // 12s
    summary: 240,       // 8s
  };

  // Calculate start frames
  const starts = {
    intro: 0,
    resources: sceneDurations.intro,
    methods: sceneDurations.intro + sceneDurations.resources,
    contentTypes: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods,
    systemDesign: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes,
    statusCodes: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign,
    versioning: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes,
    pagination: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes + sceneDurations.versioning,
    hateoas: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination,
    summary: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination + sceneDurations.hateoas,
  };

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary, fontFamily: 'Inter, sans-serif'}}>
      {/* Updated Credit Bookmark */}
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
          <span style={{fontSize: 24}}>🧞</span> Powered by Jules
        </div>
      </div>

      {/* Scene 1: Introduction */}
      {frame < starts.resources && (
        <>
          <Title text="REST API Design Masterclass" subtitle="Building Intuitive, Scalable & Secure APIs" startFrame={0} />

          <Character type="junior" x={150} y={height - 250} startFrame={30} size={110} />
          <Character type="architect" x={width - 250} y={height - 250} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="Sarah, I need to design an API. Should I just make endpoints like /getUsers?"
            x={280}
            y={height - 500}
            startFrame={30}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="That's RPC style! REST is about Resources. Let's design a system properly."
            x={width - 800}
            y={height - 500}
            startFrame={100}
            maxWidth={520}
          />
        </>
      )}

      {/* Scene 2: Resource-Based URLs */}
      {frame >= starts.resources && frame < starts.methods && (
        <>
          <Title text="1. Resource-Oriented Design" subtitle="URLs are Nouns, Methods are Verbs" startFrame={starts.resources} y={50} />

          <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.resources} size={90} />

          <Dialogue
             speaker="architect"
             text="In REST, the URL identifies the resource. The method defines the action."
             x={width - 800}
             y={height - 400}
             startFrame={starts.resources + 20}
             maxWidth={600}
          />

          {/* Comparison Table */}
          <div style={{position: 'absolute', top: 250, width: '100%', padding: '0 100px'}}>
             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, marginBottom: 20, opacity: fadeIn(frame, starts.resources + 30, 20)}}>
                <div style={{fontSize: 32, fontWeight: 'bold', color: theme.text.muted, textAlign: 'right', alignSelf: 'center'}}>Goal</div>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.error, textAlign: 'center'}}>❌ RPC Style</div>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.success, textAlign: 'center'}}>✅ REST Style</div>
             </div>

             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, marginBottom: 20, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 50, 20)}}>
                <div style={{fontSize: 28, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Get User</div>
                <ComparisonCard color={theme.colors.error} main="POST /getUser" sub="Body: {id: 1}" />
                <ComparisonCard color={theme.colors.success} main="GET /users/1" sub="" />
             </div>

             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 70, 20)}}>
                <div style={{fontSize: 28, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Create</div>
                <ComparisonCard color={theme.colors.error} main="POST /createUser" sub="" />
                <ComparisonCard color={theme.colors.success} main="POST /users" sub="" />
             </div>
          </div>
        </>
      )}

      {/* Scene 3: HTTP Methods */}
      {frame >= starts.methods && frame < starts.contentTypes && (
        <>
          <Title text="2. HTTP Methods Semantics" subtitle="Safety, Idempotency & Body Rules" startFrame={starts.methods} y={50} />

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, padding: '0 80px', marginTop: 180}}>
             <div style={{opacity: fadeIn(frame, starts.methods + 20, 10)}}>
                <MethodCard method="GET" color={theme.colors.info} desc="Read Resource" safe={true} idempotent={true} example="GET /users/1" />
             </div>
             <div style={{opacity: fadeIn(frame, starts.methods + 30, 10)}}>
                <MethodCard method="POST" color={theme.colors.success} desc="Create Resource" safe={false} idempotent={false} example="POST /users" />
             </div>
             <div style={{opacity: fadeIn(frame, starts.methods + 40, 10)}}>
                <MethodCard method="PUT" color={theme.colors.warning} desc="Replace Full" safe={false} idempotent={true} example="PUT /users/1" />
             </div>
             <div style={{opacity: fadeIn(frame, starts.methods + 50, 10)}}>
                <MethodCard method="PATCH" color={theme.colors.messageQueue} desc="Partial Update" safe={false} idempotent={false} example="PATCH /users/1" />
             </div>
             <div style={{opacity: fadeIn(frame, starts.methods + 60, 10)}}>
                <MethodCard method="DELETE" color={theme.colors.error} desc="Remove" safe={false} idempotent={true} example="DELETE /users/1" />
             </div>

             <div style={{opacity: fadeIn(frame, starts.methods + 80, 20), background: theme.background.card, borderRadius: 20, padding: 20, border: `2px solid ${theme.colors.warning}`}}>
                 <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.warning, marginBottom: 10}}>⚠️ Architect's Note</div>
                 <div style={{fontSize: 20, color: theme.text.secondary}}>
                    <strong>GET & DELETE</strong> requests should NOT have a request body.
                 </div>
                 <div style={{fontSize: 20, color: theme.text.secondary, marginTop: 5}}>
                    Pass parameters in the URL query string instead.
                 </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 4: Content Negotiation & Streaming (NEW) */}
      {frame >= starts.contentTypes && frame < starts.systemDesign && (
         <>
            <Title text="3. Data Formats & Negotiation" subtitle="Content-Type, Accept, and Streaming" startFrame={starts.contentTypes} y={50} />

            <Character type="architect" x={150} y={height - 250} startFrame={starts.contentTypes} size={90} />
            <Dialogue
               speaker="architect"
               text="It's not just JSON! Use headers to negotiate formats and handle binary data correctly."
               x={280}
               y={height - 400}
               startFrame={starts.contentTypes + 20}
               maxWidth={500}
            />

            <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 220}}>
               {/* JSON/Standard */}
               <div style={{opacity: fadeIn(frame, starts.contentTypes + 40, 20), flex: 1, maxWidth: 600}}>
                   <Box x={0} y={0} width={600} height={100} color={theme.colors.info} label="Standard API" icon="📄" startFrame={starts.contentTypes + 40} fontSize={32} />
                   <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 20, marginTop: 20}}>
                      <div style={{fontFamily: 'monospace', fontSize: 24, color: theme.text.secondary}}>Content-Type: application/json</div>
                      <div style={{fontFamily: 'monospace', fontSize: 24, color: theme.text.secondary}}>Accept: application/xml</div>
                   </div>
               </div>

               {/* Streaming/Binary */}
               <div style={{opacity: fadeIn(frame, starts.contentTypes + 60, 20), flex: 1, maxWidth: 600}}>
                   <Box x={0} y={0} width={600} height={100} color={theme.colors.messageQueue} label="Streaming Media" icon="🎥" startFrame={starts.contentTypes + 60} fontSize={32} />
                   <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 20, marginTop: 20}}>
                      <div style={{fontFamily: 'monospace', fontSize: 24, color: theme.text.secondary}}>Content-Type: application/octet-stream</div>
                      <div style={{fontFamily: 'monospace', fontSize: 24, color: theme.text.secondary}}>Content-Type: application/x-mpegURL (HLS)</div>
                      <div style={{marginTop: 10, color: theme.colors.warning, fontSize: 20}}>Don't base64 encode large files in JSON!</div>
                   </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 5: System Design Example (NEW) */}
      {frame >= starts.systemDesign && frame < starts.statusCodes && (
         <>
            <Title text="4. Real-World Example: Video Upload" subtitle="Separating Metadata from Content" startFrame={starts.systemDesign} y={50} />

            <div style={{position: 'absolute', top: 200, left: 100, width: width - 200, height: 600}}>
               {/* Step 1 */}
               <div style={{position: 'absolute', top: 0, left: 0, opacity: fadeIn(frame, starts.systemDesign + 20, 20)}}>
                  <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.client}}>1. Create Metadata (POST)</div>
                  <div style={{background: theme.background.card, padding: 20, borderRadius: 10, border: `2px solid ${theme.colors.client}`, width: 400, marginTop: 10}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 20}}>POST /videos</div>
                     <div style={{fontFamily: 'monospace', color: theme.text.muted, fontSize: 18}}>{`{ "title": "My Video", "tags": [...] }`}</div>
                  </div>
               </div>

               {/* Step 2 */}
               <div style={{position: 'absolute', top: 0, right: 0, opacity: fadeIn(frame, starts.systemDesign + 40, 20)}}>
                  <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.server}}>Response (202 Accepted)</div>
                  <div style={{background: theme.background.card, padding: 20, borderRadius: 10, border: `2px solid ${theme.colors.server}`, width: 400, marginTop: 10}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 20}}>{`{ "id": "vid_123", "uploadUrl": "https://s3..." }`}</div>
                  </div>
               </div>

               <Arrow x1={520} y1={80} x2={1000} y2={80} color={theme.colors.client} startFrame={starts.systemDesign + 30} />

               {/* Step 3 */}
               <div style={{position: 'absolute', top: 250, left: 400, opacity: fadeIn(frame, starts.systemDesign + 60, 20)}}>
                  <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.messageQueue}}>2. Upload Binary Content (PUT)</div>
                  <div style={{background: theme.background.card, padding: 20, borderRadius: 10, border: `2px solid ${theme.colors.messageQueue}`, width: 600, marginTop: 10}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 20}}>PUT /upload/vid_123</div>
                     <div style={{fontFamily: 'monospace', color: theme.text.muted, fontSize: 18}}>Body: [Binary Data Stream]</div>
                     <div style={{fontFamily: 'monospace', color: theme.text.accent, fontSize: 18}}>Content-Type: video/mp4</div>
                  </div>
               </div>

               {/* Step 4 */}
               <div style={{position: 'absolute', top: 500, left: 200, opacity: fadeIn(frame, starts.systemDesign + 90, 20)}}>
                   <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.info}}>3. Get Video (GET)</div>
                   <div style={{marginTop: 10, fontFamily: 'monospace', fontSize: 24}}>GET /videos/vid_123</div>
               </div>

               <Arrow x1={450} y1={550} x2={900} y2={550} color={theme.colors.info} startFrame={starts.systemDesign + 100} />

               <div style={{position: 'absolute', top: 500, right: 200, opacity: fadeIn(frame, starts.systemDesign + 110, 20)}}>
                   <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.success}}>Returns Metadata + Stream URL</div>
               </div>
            </div>
         </>
      )}

      {/* Scene 6: Status Codes */}
      {frame >= starts.statusCodes && frame < starts.versioning && (
        <>
          <Title text="5. Standard Status Codes" subtitle="Communicate Clearly" startFrame={starts.statusCodes} y={50} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginTop: 250}}>
             <StatusCodeGroup title="2xx Success" color={theme.colors.success} codes={[{code: 200, text: 'OK'}, {code: 201, text: 'Created'}, {code: 202, text: 'Accepted'}]} startFrame={starts.statusCodes + 20} />
             <StatusCodeGroup title="4xx Client Error" color={theme.colors.warning} codes={[{code: 400, text: 'Bad Request'}, {code: 401, text: 'Unauthorized'}, {code: 404, text: 'Not Found'}]} startFrame={starts.statusCodes + 30} />
             <StatusCodeGroup title="5xx Server Error" color={theme.colors.error} codes={[{code: 500, text: 'Internal Error'}, {code: 503, text: 'Unavailable'}]} startFrame={starts.statusCodes + 40} />
          </div>
        </>
      )}

      {/* Scene 7: Versioning */}
      {frame >= starts.versioning && frame < starts.pagination && (
        <>
          <Title text="6. API Versioning" subtitle="Handling Breaking Changes" startFrame={starts.versioning} y={50} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
             {/* URI Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 20, 20), flex: 1, maxWidth: 600}}>
                <div style={{background: theme.colors.info, color: '#000', padding: 20, borderRadius: 15, fontSize: 32, fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: 15}}>
                   <span style={{fontSize: 40}}>🔗</span> URI Versioning
                </div>
                <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 10, fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>GET /v1/users</div>
                </div>
             </div>

             {/* Header Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 40, 20), flex: 1, maxWidth: 600}}>
                <div style={{background: theme.colors.server, color: '#000', padding: 20, borderRadius: 15, fontSize: 32, fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: 15}}>
                   <span style={{fontSize: 40}}>🎩</span> Header Versioning
                </div>
                <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 10, fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>Accept-Version: v1</div>
                </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 8: Pagination */}
      {frame >= starts.pagination && frame < starts.hateoas && (
         <>
            <Title text="7. Pagination Strategies" subtitle="Offset vs Cursor" startFrame={starts.pagination} y={50} />

            <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
               <div style={{opacity: fadeIn(frame, starts.pagination + 20, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.info, marginBottom: 20, textAlign: 'center'}}>Offset Pagination</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 20, border: `2px solid ${theme.colors.info}`, width: 500}}>
                     <div style={{fontSize: 28, fontFamily: 'monospace', color: theme.text.primary}}>GET /users?page=2&limit=10</div>
                     <div style={{marginTop: 15, fontSize: 24, color: theme.text.muted}}>Simple but slow for large sets</div>
                  </div>
               </div>

               <div style={{opacity: fadeIn(frame, starts.pagination + 40, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.success, marginBottom: 20, textAlign: 'center'}}>Cursor Pagination</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 20, border: `2px solid ${theme.colors.success}`, width: 500}}>
                     <div style={{fontSize: 28, fontFamily: 'monospace', color: theme.text.primary}}>GET /users?after=idx_123</div>
                     <div style={{marginTop: 15, fontSize: 24, color: theme.text.muted}}>Fast & Scalable</div>
                  </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 9: HATEOAS */}
      {frame >= starts.hateoas && frame < starts.summary && (
         <>
            <Title text="8. HATEOAS" subtitle="Hypermedia Links" startFrame={starts.hateoas} y={50} />

            <div style={{display: 'flex', justifyContent: 'center', marginTop: 220}}>
               <div style={{background: '#1e293b', padding: 40, borderRadius: 20, border: `3px solid ${theme.colors.success}`, width: 900, fontSize: 28, fontFamily: 'monospace', color: '#e2e8f0', opacity: fadeIn(frame, starts.hateoas + 20, 20)}}>
                  <div>{'{'}</div>
                  <div style={{paddingLeft: 40}}>"id": 123,</div>
                  <div style={{paddingLeft: 40, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 8}}>
                     <span style={{color: '#34d399'}}>"_links"</span>: {'{'}
                  </div>
                  <div style={{paddingLeft: 80, background: 'rgba(16, 185, 129, 0.2)'}}>"deposit": "/accounts/123/deposit"</div>
                  <div style={{paddingLeft: 40, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 8}}>{'}'}</div>
                  <div>{'}'}</div>
               </div>
            </div>
         </>
      )}

      {/* Scene 10: Summary */}
      {frame >= starts.summary && (
         <>
            <Title text="Summary Checklist" subtitle="Design like a Pro" startFrame={starts.summary} y={50} />

            <div style={{position: 'absolute', top: 200, left: width/2 - 600, width: 1200}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                  <SummaryItem text="Use Nouns for URLs" icon="📦" delay={0} start={starts.summary} />
                  <SummaryItem text="Use correct HTTP Verbs" icon="🗣️" delay={10} start={starts.summary} />
                  <SummaryItem text="Negotiate Content-Type" icon="📄" delay={20} start={starts.summary} />
                  <SummaryItem text="Version & Paginate" icon="📅" delay={30} start={starts.summary} />
               </div>
            </div>
         </>
      )}
    </AbsoluteFill>
  );
};

// Helper Components (Simplified for brevity/speed)

const ComparisonCard: React.FC<{color: string; main: string; sub: string}> = ({color, main, sub}) => (
   <div style={{background: 'rgba(255,255,255,0.03)', border: `2px solid ${color}`, borderRadius: 16, padding: '20px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 100}}>
      <div style={{fontSize: 28, color: theme.text.primary, fontWeight: '500', fontFamily: 'monospace'}}>{main}</div>
      {sub && <div style={{fontSize: 20, color: theme.text.muted, marginTop: 5, fontFamily: 'monospace'}}>{sub}</div>}
   </div>
);

const MethodCard: React.FC<{method: string; color: string; desc: string; safe: boolean; idempotent: boolean; example: string}> = ({method, color, desc, safe, idempotent, example}) => (
   <div style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', border: `2px solid ${color}`, borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 10}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <div style={{fontSize: 32, fontWeight: 'bold', color}}>{method}</div>
      </div>
      <div style={{fontSize: 20, color: theme.text.secondary}}>{desc}</div>
      <div style={{fontSize: 18, fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: 8, borderRadius: 8, color: theme.text.muted}}>{example}</div>
   </div>
);

const StatusCodeGroup: React.FC<{title: string; color: string; codes: {code: number; text: string}[]; startFrame: number}> = ({title, color, codes, startFrame}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{opacity: fadeIn(frame, startFrame, 20), background: 'rgba(255,255,255,0.05)', borderTop: `6px solid ${color}`, borderRadius: 16, padding: 30, width: 400}}>
         <div style={{fontSize: 32, fontWeight: 'bold', color, marginBottom: 20}}>{title}</div>
         <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
            {codes.map((c, i) => (
               <div key={i} style={{fontSize: 28, color: theme.text.primary, display: 'flex', gap: 15}}>
                  <span style={{fontFamily: 'monospace', fontWeight: 'bold', color}}>{c.code}</span>
                  <span>{c.text}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

const SummaryItem: React.FC<{text: string; icon: string; delay: number; start: number}> = ({text, icon, delay, start}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{background: 'rgba(255,255,255,0.08)', padding: 24, borderRadius: 15, display: 'flex', alignItems: 'center', gap: 24, opacity: fadeIn(frame, start + delay, 15), transform: `translateX(${interpolate(frame, [start + delay, start + delay + 15], [-50, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px)`}}>
         <div style={{fontSize: 48}}>{icon}</div>
         <div style={{fontSize: 32, color: theme.text.primary, fontWeight: 'bold'}}>{text}</div>
      </div>
   );
};
