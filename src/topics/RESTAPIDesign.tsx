import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, scale} from '../design-system/animations';

/**
 * REST API Design Masterclass (Enhanced)
 * - Pacing adjusted for readability.
 * - Architectural depth (System Design, Security, Headers).
 * - Improved layouts and font sizes.
 */
export const RESTAPIDesign: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Define Scene Timings (Content-Aware)
  const sceneDurations = {
    intro: 240,         // 8s (Dialogue)
    resources: 420,     // 14s (Comparison Table)
    methods: 480,       // 16s (Large grid, reading time)
    contentTypes: 540,  // 18s (Alex + Sarah Dialogue + Content)
    systemDesign: 900,  // 30s (Complex sequential explanation)
    statusCodes: 420,   // 14s
    versioning: 420,    // 14s
    pagination: 420,    // 14s
    security: 600,      // 20s (New Security Section)
    hateoas: 420,       // 14s
    summary: 360,       // 12s
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
    security: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination,
    hateoas: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination + sceneDurations.security,
    summary: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.contentTypes + sceneDurations.systemDesign + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination + sceneDurations.security + sceneDurations.hateoas,
  };

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary, fontFamily: 'Inter, sans-serif'}}>
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
          <Title text="REST API Design Masterclass" subtitle="From Junior to Architect" startFrame={0} />

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
            text="That's RPC style! REST is about Resources. Let's design a scalable system properly."
            x={width - 800}
            y={height - 500}
            startFrame={120}
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
             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 60, marginBottom: 30, opacity: fadeIn(frame, starts.resources + 30, 20)}}>
                <div style={{fontSize: 32, fontWeight: 'bold', color: theme.text.muted, textAlign: 'right', alignSelf: 'center'}}>Goal</div>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.error, textAlign: 'center'}}>❌ RPC Style</div>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.success, textAlign: 'center'}}>✅ REST Style</div>
             </div>

             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 60, marginBottom: 40, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 50, 20)}}>
                <div style={{fontSize: 32, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Get User</div>
                <ComparisonCard color={theme.colors.error} main="POST /getUser" sub="Body: {id: 1}" />
                <ComparisonCard color={theme.colors.success} main="GET /users/1" sub="" />
             </div>

             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 60, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 70, 20)}}>
                <div style={{fontSize: 32, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Create</div>
                <ComparisonCard color={theme.colors.error} main="POST /createUser" sub="" />
                <ComparisonCard color={theme.colors.success} main="POST /users" sub="" />
             </div>
          </div>
        </>
      )}

      {/* Scene 3: HTTP Methods (Improved Layout) */}
      {frame >= starts.methods && frame < starts.contentTypes && (
        <>
          <Title text="2. HTTP Methods Semantics" subtitle="Safety, Idempotency & Body Rules" startFrame={starts.methods} y={50} />

          {/* New 2-Row Layout for Larger Fonts */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, padding: '0 100px', marginTop: 180}}>
             {/* Read/Write */}
             <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                <MethodCard method="GET" color={theme.colors.info} desc="Read Resource" safe={true} idempotent={true} example="GET /users/1" />
                <MethodCard method="POST" color={theme.colors.success} desc="Create Resource" safe={false} idempotent={false} example="POST /users" />
                <MethodCard method="PUT" color={theme.colors.warning} desc="Replace Full" safe={false} idempotent={true} example="PUT /users/1" />
             </div>

             {/* Update/Delete */}
             <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                <MethodCard method="PATCH" color={theme.colors.messageQueue} desc="Partial Update" safe={false} idempotent={false} example="PATCH /users/1" />
                <MethodCard method="DELETE" color={theme.colors.error} desc="Remove" safe={false} idempotent={true} example="DELETE /users/1" />

                <div style={{
                    opacity: fadeIn(frame, starts.methods + 80, 20),
                    background: theme.background.card,
                    borderRadius: 20,
                    padding: 30,
                    border: `3px solid ${theme.colors.warning}`,
                    marginTop: 10
                }}>
                     <div style={{fontSize: 28, fontWeight: 'bold', color: theme.colors.warning, marginBottom: 15}}>⚠️ Architect's Note</div>
                     <div style={{fontSize: 24, color: theme.text.secondary}}>
                        <strong>GET & DELETE</strong> requests should NOT have a request body.
                     </div>
                 </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 4: Content Negotiation (Alex Questions) */}
      {frame >= starts.contentTypes && frame < starts.systemDesign && (
         <>
            <Title text="3. Data Formats & Negotiation" subtitle="Content-Type, Accept, and Streaming" startFrame={starts.contentTypes} y={50} />

            <Character type="junior" x={150} y={height - 250} startFrame={starts.contentTypes} size={110} />

            {/* Alex Question */}
            <Dialogue
               speaker="junior"
               text="Sarah, do we just always send JSON? What about images?"
               x={280}
               y={height - 450}
               startFrame={starts.contentTypes + 20}
               maxWidth={500}
            />

            {/* Sarah Answer */}
            <Character type="architect" x={width - 250} y={height - 250} startFrame={starts.contentTypes + 100} size={110} />
            <Dialogue
               speaker="architect"
               text="No! We use Headers to negotiate. For binary data, we use specific streams."
               x={width - 800}
               y={height - 450}
               startFrame={starts.contentTypes + 120}
               maxWidth={520}
            />

            <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
               {/* JSON/Standard */}
               <div style={{opacity: fadeIn(frame, starts.contentTypes + 160, 20), flex: 1, maxWidth: 700}}>
                   <div style={{
                       background: theme.colors.info,
                       borderRadius: 15,
                       height: 120,
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       fontSize: 36,
                       fontWeight: 'bold',
                       color: theme.text.primary,
                       border: `2px solid ${theme.colors.info}`,
                       gap: 20
                   }}>
                        <span style={{fontSize: 50}}>📄</span> Standard API
                   </div>
                   <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 30, marginTop: 20}}>
                      <div style={{fontFamily: 'monospace', fontSize: 28, color: theme.text.secondary}}>Content-Type: application/json</div>
                      <div style={{fontFamily: 'monospace', fontSize: 28, color: theme.text.secondary}}>Accept: application/xml</div>
                   </div>
               </div>

               {/* Streaming/Binary */}
               <div style={{opacity: fadeIn(frame, starts.contentTypes + 180, 20), flex: 1, maxWidth: 700}}>
                   <div style={{
                       background: theme.colors.messageQueue,
                       borderRadius: 15,
                       height: 120,
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       fontSize: 36,
                       fontWeight: 'bold',
                       color: theme.text.primary,
                       border: `2px solid ${theme.colors.messageQueue}`,
                       gap: 20
                   }}>
                        <span style={{fontSize: 50}}>🎥</span> Streaming Media
                   </div>
                   <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 30, marginTop: 20}}>
                      <div style={{fontFamily: 'monospace', fontSize: 28, color: theme.text.secondary}}>Content-Type: application/octet-stream</div>
                      <div style={{marginTop: 15, color: theme.colors.warning, fontSize: 24, fontWeight: 'bold'}}>Don't base64 encode large files in JSON!</div>
                   </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 5: System Design Example (Narrative Flow) */}
      {frame >= starts.systemDesign && frame < starts.statusCodes && (
         <>
            <Title text="4. Real-World Example: Video Upload" subtitle="Separating Metadata from Content" startFrame={starts.systemDesign} y={50} />
            <Character type="architect" x={width - 250} y={height - 250} startFrame={starts.systemDesign} size={110} />

            {/* Initial Context */}
            {frame < starts.systemDesign + 150 && (
                <Dialogue
                   speaker="architect"
                   text="Let's design a Video Upload API. We can't just PUT a 5GB file to the metadata endpoint."
                   x={width - 800}
                   y={height - 450}
                   startFrame={starts.systemDesign + 20}
                   maxWidth={520}
                />
            )}

            <div style={{position: 'absolute', top: 200, left: 100, width: width - 350, height: 600}}>

               {/* Step 1: Metadata */}
               <div style={{position: 'absolute', top: 0, left: 0, opacity: fadeIn(frame, starts.systemDesign + 150, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.client}}>1. POST Metadata</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 15, border: `2px solid ${theme.colors.client}`, width: 500, marginTop: 15}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 28}}>POST /videos</div>
                     <div style={{fontFamily: 'monospace', color: theme.text.muted, fontSize: 24}}>{`{ "title": "My Video" }`}</div>
                  </div>
               </div>

               {/* Step 2: Presigned URL */}
               <div style={{position: 'absolute', top: 0, right: 0, opacity: fadeIn(frame, starts.systemDesign + 300, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.server}}>2. Get Upload URL</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 15, border: `2px solid ${theme.colors.server}`, width: 500, marginTop: 15}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.success, fontSize: 24}}>202 Accepted</div>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 24}}>{`{ "uploadUrl": "https://s3..." }`}</div>
                  </div>
               </div>

               {frame >= starts.systemDesign + 150 && frame < starts.systemDesign + 450 && (
                   <Dialogue
                      speaker="architect"
                      text="First, we send metadata. The server returns a secure, temporary Upload URL (like S3 Presigned URL)."
                      x={width - 800}
                      y={height - 450}
                      startFrame={starts.systemDesign + 160}
                      maxWidth={520}
                   />
               )}

               <Arrow x1={550} y1={100} x2={950} y2={100} color={theme.colors.client} startFrame={starts.systemDesign + 250} />

               {/* Step 3: Binary Upload */}
               <div style={{position: 'absolute', top: 350, left: 300, opacity: fadeIn(frame, starts.systemDesign + 500, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.messageQueue}}>3. Upload Binary Content</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 15, border: `2px solid ${theme.colors.messageQueue}`, width: 800, marginTop: 15}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 28}}>PUT https://s3.aws.com/upload/vid_123</div>
                     <div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 15}}>
                        <div style={{fontFamily: 'monospace', color: theme.text.muted, fontSize: 24}}>Body: [Binary Stream]</div>
                        <div style={{padding: '5px 15px', background: theme.colors.messageQueue, borderRadius: 5, color: '#000', fontWeight: 'bold', fontSize: 20}}>RAW BYTES</div>
                     </div>
                     <div style={{fontFamily: 'monospace', color: theme.text.accent, fontSize: 24, marginTop: 10}}>Content-Type: video/mp4</div>
                  </div>
               </div>

               {frame >= starts.systemDesign + 500 && (
                   <Dialogue
                      speaker="architect"
                      text="Then the client uploads the massive file directly to storage using that URL. This keeps our API lightweight!"
                      x={width - 800}
                      y={height - 450}
                      startFrame={starts.systemDesign + 510}
                      maxWidth={520}
                   />
               )}

            </div>
         </>
      )}

      {/* Scene 6: Status Codes */}
      {frame >= starts.statusCodes && frame < starts.versioning && (
        <>
          <Title text="5. Standard Status Codes" subtitle="Communicate Clearly" startFrame={starts.statusCodes} y={50} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
             <StatusCodeGroup title="2xx Success" color={theme.colors.success} codes={[{code: 200, text: 'OK'}, {code: 201, text: 'Created'}, {code: 202, text: 'Accepted'}]} startFrame={starts.statusCodes + 20} />
             <StatusCodeGroup title="4xx Client Error" color={theme.colors.warning} codes={[{code: 400, text: 'Bad Request'}, {code: 401, text: 'Unauthorized'}, {code: 429, text: 'Too Many Req'}]} startFrame={starts.statusCodes + 30} />
             <StatusCodeGroup title="5xx Server Error" color={theme.colors.error} codes={[{code: 500, text: 'Internal Error'}, {code: 503, text: 'Unavailable'}]} startFrame={starts.statusCodes + 40} />
          </div>
        </>
      )}

      {/* Scene 7: Versioning */}
      {frame >= starts.versioning && frame < starts.pagination && (
        <>
          <Title text="6. API Versioning" subtitle="Handling Breaking Changes" startFrame={starts.versioning} y={50} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 80, marginTop: 250}}>
             {/* URI Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 20, 20), flex: 1, maxWidth: 600}}>
                <div style={{background: theme.colors.info, color: '#000', padding: 25, borderRadius: 15, fontSize: 36, fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: 15}}>
                   <span style={{fontSize: 40}}>🔗</span> URI Versioning
                </div>
                <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 15, fontSize: 36, fontFamily: 'monospace', color: theme.text.primary}}>GET /v1/users</div>
                </div>
             </div>

             {/* Header Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 40, 20), flex: 1, maxWidth: 600}}>
                <div style={{background: theme.colors.server, color: '#000', padding: 25, borderRadius: 15, fontSize: 36, fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: 15}}>
                   <span style={{fontSize: 40}}>🎩</span> Header Versioning
                </div>
                <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 15, fontSize: 36, fontFamily: 'monospace', color: theme.text.primary}}>Accept-Version: v1</div>
                </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 8: Pagination (Visuals) */}
      {frame >= starts.pagination && frame < starts.security && (
         <>
            <Title text="7. Pagination Strategies" subtitle="Offset vs Cursor" startFrame={starts.pagination} y={50} />

            <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
               <div style={{opacity: fadeIn(frame, starts.pagination + 20, 20)}}>
                  <div style={{fontSize: 40, fontWeight: 'bold', color: theme.colors.info, marginBottom: 20, textAlign: 'center'}}>Offset Pagination</div>
                  <div style={{background: theme.background.card, padding: 40, borderRadius: 20, border: `3px solid ${theme.colors.info}`, width: 600}}>
                     <div style={{fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>GET /users?page=2</div>
                     <div style={{marginTop: 20, fontSize: 28, color: theme.text.muted}}>⚠️ Slow for large datasets (DB Scan)</div>
                  </div>
               </div>

               <div style={{opacity: fadeIn(frame, starts.pagination + 40, 20)}}>
                  <div style={{fontSize: 40, fontWeight: 'bold', color: theme.colors.success, marginBottom: 20, textAlign: 'center'}}>Cursor Pagination</div>
                  <div style={{background: theme.background.card, padding: 40, borderRadius: 20, border: `3px solid ${theme.colors.success}`, width: 600}}>
                     <div style={{fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>GET /users?after=idx_123</div>
                     <div style={{marginTop: 20, fontSize: 28, color: theme.text.muted}}>✅ Highly efficient (Index Seek)</div>
                  </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 9: API Security (NEW) */}
      {frame >= starts.security && frame < starts.hateoas && (
         <>
            <Title text="8. API Security Essentials" subtitle="Protecting your Resources" startFrame={starts.security} y={50} />
            <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.security} size={90} />

             <Dialogue
               speaker="architect"
               text="Never expose an API without protection. Here is the Architect's Security Checklist."
               x={width - 800}
               y={height - 450}
               startFrame={starts.security + 20}
               maxWidth={550}
            />

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, marginTop: 200}}>
               <SecurityCard
                  title="1. HTTPS / TLS"
                  desc="Encrypts data in transit. Mandatory."
                  icon="🔒"
                  color={theme.colors.success}
                  start={starts.security + 40}
               />
               <SecurityCard
                  title="2. Authentication"
                  desc="OAuth2 / JWT. Know who is calling."
                  icon="🆔"
                  color={theme.colors.info}
                  start={starts.security + 60}
               />
               <SecurityCard
                  title="3. Rate Limiting"
                  desc="Prevent abuse (429 Too Many Requests)."
                  icon="🛑"
                  color={theme.colors.error}
                  start={starts.security + 80}
               />
            </div>
         </>
      )}

      {/* Scene 10: HATEOAS */}
      {frame >= starts.hateoas && frame < starts.summary && (
         <>
            <Title text="9. HATEOAS" subtitle="Hypermedia Links" startFrame={starts.hateoas} y={50} />

            <div style={{display: 'flex', justifyContent: 'center', marginTop: 220}}>
               <div style={{background: '#1e293b', padding: 50, borderRadius: 20, border: `3px solid ${theme.colors.success}`, width: 1000, fontSize: 32, fontFamily: 'monospace', color: '#e2e8f0', opacity: fadeIn(frame, starts.hateoas + 20, 20)}}>
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

      {/* Scene 11: Summary */}
      {frame >= starts.summary && (
         <>
            <Title text="Architect's Checklist" subtitle="Summary" startFrame={starts.summary} y={50} />

            <div style={{position: 'absolute', top: 200, left: width/2 - 600, width: 1200}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                  <SummaryItem text="Design Resources, Not Actions" icon="📦" delay={0} start={starts.summary} />
                  <SummaryItem text="Respect HTTP Verbs & Status Codes" icon="🗣️" delay={10} start={starts.summary} />
                  <SummaryItem text="Use Headers for Negotiation" icon="📄" delay={20} start={starts.summary} />
                  <SummaryItem text="Secure with HTTPS & Rate Limiting" icon="🔒" delay={30} start={starts.summary} />
               </div>
            </div>
         </>
      )}
    </AbsoluteFill>
  );
};

// --- Helper Components ---

const ComparisonCard: React.FC<{color: string; main: string; sub: string}> = ({color, main, sub}) => (
   <div style={{background: 'rgba(255,255,255,0.03)', border: `2px solid ${color}`, borderRadius: 16, padding: '25px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 120}}>
      <div style={{fontSize: 32, color: theme.text.primary, fontWeight: '500', fontFamily: 'monospace'}}>{main}</div>
      {sub && <div style={{fontSize: 24, color: theme.text.muted, marginTop: 8, fontFamily: 'monospace'}}>{sub}</div>}
   </div>
);

const MethodCard: React.FC<{method: string; color: string; desc: string; safe: boolean; idempotent: boolean; example: string}> = ({method, color, desc, safe, idempotent, example}) => (
   <div style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', border: `2px solid ${color}`, borderRadius: 20, padding: 25, display: 'flex', flexDirection: 'column', gap: 10, width: '100%'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <div style={{fontSize: 40, fontWeight: 'bold', color}}>{method}</div>
         <div style={{display: 'flex', gap: 10}}>
             {safe && <span style={{background: theme.colors.info, color: 'black', padding: '2px 8px', borderRadius: 4, fontWeight: 'bold', fontSize: 16}}>SAFE</span>}
             {idempotent && <span style={{background: theme.colors.success, color: 'black', padding: '2px 8px', borderRadius: 4, fontWeight: 'bold', fontSize: 16}}>IDEMPOTENT</span>}
         </div>
      </div>
      <div style={{fontSize: 24, color: theme.text.secondary}}>{desc}</div>
      <div style={{fontSize: 22, fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: 8, borderRadius: 8, color: theme.text.muted}}>{example}</div>
   </div>
);

const StatusCodeGroup: React.FC<{title: string; color: string; codes: {code: number; text: string}[]; startFrame: number}> = ({title, color, codes, startFrame}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{opacity: fadeIn(frame, startFrame, 20), background: 'rgba(255,255,255,0.05)', borderTop: `6px solid ${color}`, borderRadius: 16, padding: 30, width: 450}}>
         <div style={{fontSize: 36, fontWeight: 'bold', color, marginBottom: 20}}>{title}</div>
         <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
            {codes.map((c, i) => (
               <div key={i} style={{fontSize: 32, color: theme.text.primary, display: 'flex', gap: 15}}>
                  <span style={{fontFamily: 'monospace', fontWeight: 'bold', color}}>{c.code}</span>
                  <span>{c.text}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

const SecurityCard: React.FC<{title: string; desc: string; icon: string; color: string; start: number}> = ({title, desc, icon, color, start}) => {
    const frame = useCurrentFrame();
    return (
        <div style={{
            opacity: fadeIn(frame, start, 20),
            transform: `scale(${scale(frame, start, 20, 0.9, 1)})`,
            background: 'rgba(255,255,255,0.05)',
            borderLeft: `8px solid ${color}`,
            borderRadius: 15,
            padding: 30,
            width: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 30
        }}>
            <div style={{fontSize: 50}}>{icon}</div>
            <div style={{flex: 1}}>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.text.primary, marginBottom: 5}}>{title}</div>
                <div style={{fontSize: 28, color: theme.text.secondary}}>{desc}</div>
            </div>
        </div>
    );
};

const SummaryItem: React.FC<{text: string; icon: string; delay: number; start: number}> = ({text, icon, delay, start}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{background: 'rgba(255,255,255,0.08)', padding: 30, borderRadius: 20, display: 'flex', alignItems: 'center', gap: 30, opacity: fadeIn(frame, start + delay, 15), transform: `translateX(${interpolate(frame, [start + delay, start + delay + 15], [-50, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px)`}}>
         <div style={{fontSize: 56}}>{icon}</div>
         <div style={{fontSize: 40, color: theme.text.primary, fontWeight: 'bold'}}>{text}</div>
      </div>
   );
};
