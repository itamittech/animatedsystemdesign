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
 * Improved visuals, larger fonts, and better examples.
 */
export const RESTAPIDesign: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Define Scene Timings (in frames)
  const sceneDurations = {
    intro: 300,
    resources: 600, // Increased for better reading time
    methods: 660,
    statusCodes: 600,
    versioning: 540,
    pagination: 540,
    hateoas: 540,
    summary: 360,
  };

  // Calculate start frames
  const starts = {
    intro: 0,
    resources: sceneDurations.intro,
    methods: sceneDurations.intro + sceneDurations.resources,
    statusCodes: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods,
    versioning: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.statusCodes,
    pagination: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.statusCodes + sceneDurations.versioning,
    hateoas: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination,
    summary: sceneDurations.intro + sceneDurations.resources + sceneDurations.methods + sceneDurations.statusCodes + sceneDurations.versioning + sceneDurations.pagination + sceneDurations.hateoas,
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
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
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
            text="Sarah, our new mobile app needs an API. Should I just make some endpoints like /getUsers and /saveProduct?"
            x={280}
            y={height - 500}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Hold on, Alex! That's 'RPC' style. For a true REST API, we need to think in Resources, not Actions. Let's design it properly."
            x={width - 800}
            y={height - 500}
            startFrame={180}
            maxWidth={520}
          />
        </>
      )}

      {/* Scene 2: Resource-Based URLs */}
      {frame >= starts.resources && frame < starts.methods && (
        <>
          <Title text="1. Resource-Oriented Design" subtitle="URLs are Nouns, Methods are Verbs" startFrame={starts.resources} y={50} />

          <Character type="junior" x={100} y={height - 250} startFrame={starts.resources} size={90} />
          <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.resources} size={90} />

          <Dialogue
             speaker="architect"
             text="In RPC, you put the action in the URL. In REST, the URL is the resource, and the HTTP method is the action."
             x={width - 800}
             y={height - 400}
             startFrame={starts.resources + 20}
             maxWidth={600}
          />

          {/* Comparison Table */}
          <div style={{position: 'absolute', top: 250, width: '100%', padding: '0 100px'}}>
             {/* Headers */}
             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, marginBottom: 30, opacity: fadeIn(frame, starts.resources + 50, 20)}}>
                <div style={{fontSize: 32, fontWeight: 'bold', color: theme.text.muted, textAlign: 'right', alignSelf: 'center'}}>Goal</div>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.error, textAlign: 'center'}}>❌ RPC Style</div>
                <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.success, textAlign: 'center'}}>✅ REST Style</div>
             </div>

             {/* Row 1: Read */}
             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, marginBottom: 30, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 80, 20)}}>
                <div style={{fontSize: 28, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Get User</div>
                <ComparisonCard color={theme.colors.error} main="POST /getUser" sub="Body: {id: 1}" />
                <ComparisonCard color={theme.colors.success} main="GET /users/1" sub="" />
             </div>

             {/* Row 2: Create */}
             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, marginBottom: 30, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 120, 20)}}>
                <div style={{fontSize: 28, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Create</div>
                <ComparisonCard color={theme.colors.error} main="POST /createUser" sub="" />
                <ComparisonCard color={theme.colors.success} main="POST /users" sub="" />
             </div>

             {/* Row 3: Delete */}
             <div style={{display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, alignItems: 'center', opacity: fadeIn(frame, starts.resources + 160, 20)}}>
                <div style={{fontSize: 28, color: theme.text.primary, textAlign: 'right', fontWeight: 'bold'}}>Delete</div>
                <ComparisonCard color={theme.colors.error} main="GET /deleteUser?id=1" sub="" />
                <ComparisonCard color={theme.colors.success} main="DELETE /users/1" sub="" />
             </div>
          </div>
        </>
      )}

      {/* Scene 3: HTTP Methods */}
      {frame >= starts.methods && frame < starts.statusCodes && (
        <>
          <Title text="2. HTTP Methods Semantics" subtitle="Understanding Safety & Idempotency" startFrame={starts.methods} y={50} />

          <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.methods} size={90} />
          <Dialogue
            speaker="architect"
            text="Use the right verb! Idempotency is key: it means making the same request multiple times has the same effect as making it once."
            x={width - 800}
            y={height - 400}
            startFrame={starts.methods + 20}
            maxWidth={600}
          />

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, padding: '0 80px', marginTop: 220}}>
             {/* GET */}
             <div style={{opacity: fadeIn(frame, starts.methods + 50, 20)}}>
                <MethodCard
                  method="GET"
                  color={theme.colors.info}
                  desc="Retrieve resource"
                  safe={true}
                  idempotent={true}
                  example="GET /users/1"
                />
             </div>

             {/* POST */}
             <div style={{opacity: fadeIn(frame, starts.methods + 70, 20)}}>
                <MethodCard
                  method="POST"
                  color={theme.colors.success}
                  desc="Create new resource"
                  safe={false}
                  idempotent={false}
                  example="POST /users"
                />
             </div>

             {/* PUT */}
             <div style={{opacity: fadeIn(frame, starts.methods + 90, 20)}}>
                <MethodCard
                  method="PUT"
                  color={theme.colors.warning}
                  desc="Replace completely"
                  safe={false}
                  idempotent={true}
                  example="PUT /users/1"
                />
             </div>

             {/* PATCH */}
             <div style={{opacity: fadeIn(frame, starts.methods + 110, 20)}}>
                <MethodCard
                  method="PATCH"
                  color={theme.colors.messageQueue}
                  desc="Partial update"
                  safe={false}
                  idempotent={false}
                  example="PATCH /users/1"
                />
             </div>

             {/* DELETE */}
             <div style={{opacity: fadeIn(frame, starts.methods + 130, 20)}}>
                <MethodCard
                  method="DELETE"
                  color={theme.colors.error}
                  desc="Remove resource"
                  safe={false}
                  idempotent={true}
                  example="DELETE /users/1"
                />
             </div>

             {/* Legend/Info */}
             <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 20,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: fadeIn(frame, starts.methods + 150, 20)
             }}>
                <div style={{fontSize: 24, color: theme.text.primary, marginBottom: 10}}>
                   <strong>Safe:</strong> No side effects (Read-only)
                </div>
                <div style={{fontSize: 24, color: theme.text.primary}}>
                   <strong>Idempotent:</strong> Retry safe (Result is same)
                </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 4: Status Codes */}
      {frame >= starts.statusCodes && frame < starts.versioning && (
        <>
          <Title text="3. Standard Status Codes" subtitle="Communicate Clearly with Your Client" startFrame={starts.statusCodes} y={50} />

          <Character type="junior" x={100} y={height - 250} startFrame={starts.statusCodes} size={90} />
          <Dialogue
            speaker="junior"
            text="So I shouldn't return 200 OK if something failed?"
            x={250}
            y={height - 400}
            startFrame={starts.statusCodes + 20}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Never! That breaks monitoring tools. Use 4xx for client errors and 5xx for server crashes."
            x={width - 800}
            y={height - 400}
            startFrame={starts.statusCodes + 120}
            maxWidth={550}
          />
          <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.statusCodes} size={90} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginTop: 250}}>
             {/* 2xx Success */}
             <StatusCodeGroup
               title="2xx Success"
               color={theme.colors.success}
               codes={[
                 {code: 200, text: 'OK'},
                 {code: 201, text: 'Created'},
                 {code: 204, text: 'No Content'},
               ]}
               startFrame={starts.statusCodes + 150}
             />

             {/* 4xx Client Error */}
             <StatusCodeGroup
               title="4xx Client Error"
               color={theme.colors.warning}
               codes={[
                 {code: 400, text: 'Bad Request'},
                 {code: 401, text: 'Unauthorized'},
                 {code: 403, text: 'Forbidden'},
                 {code: 404, text: 'Not Found'},
               ]}
               startFrame={starts.statusCodes + 180}
             />

             {/* 5xx Server Error */}
             <StatusCodeGroup
               title="5xx Server Error"
               color={theme.colors.error}
               codes={[
                 {code: 500, text: 'Internal Error'},
                 {code: 502, text: 'Bad Gateway'},
                 {code: 503, text: 'Unavailable'},
               ]}
               startFrame={starts.statusCodes + 210}
             />
          </div>
        </>
      )}

      {/* Scene 5: Versioning */}
      {frame >= starts.versioning && frame < starts.pagination && (
        <>
          <Title text="4. API Versioning" subtitle="Handling Breaking Changes" startFrame={starts.versioning} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 250} startFrame={starts.versioning} size={90} />
          <Dialogue
             speaker="architect"
             text="When you change the response format, you must version your API. I recommend URI versioning for simplicity."
             x={width / 2 - 450}
             y={height - 400}
             startFrame={starts.versioning + 20}
             maxWidth={900}
          />

          <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
             {/* URI Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 60, 20), flex: 1, maxWidth: 600}}>
                <div style={{
                   background: theme.colors.info,
                   color: '#000',
                   padding: 20,
                   borderRadius: 15,
                   fontSize: 32,
                   fontWeight: 'bold',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: 15
                }}>
                   <span style={{fontSize: 40}}>🔗</span> URI Versioning
                </div>
                <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 10, fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>
                      GET /v1/users
                   </div>
                   <div style={{textAlign: 'center', fontSize: 40, color: theme.text.muted}}>⬇️</div>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 10, fontSize: 32, fontFamily: 'monospace', color: theme.colors.success, border: `2px solid ${theme.colors.success}`}}>
                      GET /v2/users
                   </div>
                </div>
             </div>

             {/* Header Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 100, 20), flex: 1, maxWidth: 600}}>
                <div style={{
                   background: theme.colors.server,
                   color: '#000',
                   padding: 20,
                   borderRadius: 15,
                   fontSize: 32,
                   fontWeight: 'bold',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: 15
                }}>
                   <span style={{fontSize: 40}}>🎩</span> Header Versioning
                </div>
                <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 10, fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>
                      Accept-Version: v1
                   </div>
                </div>
                <div style={{marginTop: 20, fontSize: 24, color: theme.text.secondary}}>
                   Keeps URLs clean, but harder to test in browser.
                </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 6: Pagination */}
      {frame >= starts.pagination && frame < starts.hateoas && (
         <>
            <Title text="5. Pagination" subtitle="Handling Large Datasets" startFrame={starts.pagination} y={50} />

            <Character type="junior" x={100} y={height - 250} startFrame={starts.pagination} size={90} />
            <Dialogue
               speaker="junior"
               text="If I have 1 million users, returning them all will crash the app!"
               x={250}
               y={height - 400}
               startFrame={starts.pagination + 20}
               maxWidth={500}
            />

            <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
               <div style={{opacity: fadeIn(frame, starts.pagination + 50, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.info, marginBottom: 20, textAlign: 'center'}}>Offset Pagination</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 20, border: `2px solid ${theme.colors.info}`, width: 500}}>
                     <div style={{fontSize: 28, fontFamily: 'monospace', color: theme.text.primary, marginBottom: 20}}>
                        GET /users?page=2&limit=10
                     </div>
                     <div style={{display: 'flex', gap: 10}}>
                        {[1, 2, 3].map(i => (
                           <div key={i} style={{flex: 1, height: 10, background: i === 2 ? theme.colors.info : 'rgba(255,255,255,0.2)', borderRadius: 5}} />
                        ))}
                     </div>
                     <div style={{marginTop: 15, fontSize: 24, color: theme.text.secondary}}>• Easy to implement</div>
                     <div style={{fontSize: 24, color: theme.text.secondary}}>• Slow for large data</div>
                  </div>
               </div>

               <div style={{opacity: fadeIn(frame, starts.pagination + 80, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.success, marginBottom: 20, textAlign: 'center'}}>Cursor Pagination</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 20, border: `2px solid ${theme.colors.success}`, width: 500}}>
                     <div style={{fontSize: 28, fontFamily: 'monospace', color: theme.text.primary, marginBottom: 20}}>
                        GET /users?after=idx_123
                     </div>
                     <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                        <div style={{width: 50, height: 50, background: 'rgba(255,255,255,0.1)', borderRadius: 5}} />
                        <Arrow x1={0} y1={0} x2={50} y2={0} color={theme.colors.success} label="" startFrame={starts.pagination + 90} />
                        <div style={{width: 50, height: 50, background: theme.colors.success, borderRadius: 5}} />
                     </div>
                     <div style={{marginTop: 15, fontSize: 24, color: theme.text.secondary}}>• High performance</div>
                     <div style={{fontSize: 24, color: theme.text.secondary}}>• Good for infinite scroll</div>
                  </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 7: HATEOAS */}
      {frame >= starts.hateoas && frame < starts.summary && (
         <>
            <Title text="6. HATEOAS" subtitle="Hypermedia As The Engine Of Application State" startFrame={starts.hateoas} y={50} />

            <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.hateoas} size={90} />
            <Dialogue
               speaker="architect"
               text="It means the API includes links to tell the client what they can do next. It's self-discoverable!"
               x={width - 800}
               y={height - 400}
               startFrame={starts.hateoas + 20}
               maxWidth={550}
            />

            <div style={{display: 'flex', justifyContent: 'center', marginTop: 220}}>
               <div style={{
                  background: '#1e293b',
                  padding: 40,
                  borderRadius: 20,
                  border: `3px solid ${theme.colors.success}`,
                  width: 900,
                  fontSize: 28,
                  fontFamily: 'monospace',
                  color: '#e2e8f0',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  opacity: fadeIn(frame, starts.hateoas + 50, 20)
               }}>
                  <div>{'{'}</div>
                  <div style={{paddingLeft: 40}}><span style={{color: '#60a5fa'}}>"id"</span>: 123,</div>
                  <div style={{paddingLeft: 40}}><span style={{color: '#60a5fa'}}>"balance"</span>: 500,</div>
                  <div style={{paddingLeft: 40, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 8}}>
                     <span style={{color: '#34d399'}}>"_links"</span>: {'{'}
                  </div>
                  <div style={{paddingLeft: 80, background: 'rgba(16, 185, 129, 0.2)'}}>
                      <span style={{color: '#facc15'}}>"deposit"</span>: "/accounts/123/deposit",
                  </div>
                  <div style={{paddingLeft: 80, background: 'rgba(16, 185, 129, 0.2)'}}>
                      <span style={{color: '#facc15'}}>"withdraw"</span>: "/accounts/123/withdraw"
                  </div>
                  <div style={{paddingLeft: 40, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 8}}>{'}'}</div>
                  <div>{'}'}</div>
               </div>
            </div>

            <div style={{position: 'absolute', top: 750, left: 0, width: '100%', textAlign: 'center', opacity: fadeIn(frame, starts.hateoas + 80, 20)}}>
               <div style={{fontSize: 32, color: theme.colors.success, fontWeight: 'bold'}}>
                  ⬆️ The API guides the client!
               </div>
            </div>
         </>
      )}

      {/* Scene 8: Summary */}
      {frame >= starts.summary && (
         <>
            <Title text="Summary Checklist" subtitle="Design like a Pro" startFrame={starts.summary} y={50} />

            <div style={{position: 'absolute', top: 200, left: width/2 - 600, width: 1200}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                  <SummaryItem text="Use Nouns for URLs (/products)" icon="📦" delay={0} start={starts.summary} />
                  <SummaryItem text="Use correct HTTP verbs (GET, POST...)" icon="🗣️" delay={20} start={starts.summary} />
                  <SummaryItem text="Use standard Status Codes (200, 404...)" icon="🚦" delay={40} start={starts.summary} />
                  <SummaryItem text="Version your API (/v1/...)" icon="📅" delay={60} start={starts.summary} />
               </div>
            </div>

            <Character type="junior" x={150} y={height - 250} startFrame={starts.summary + 120} size={110} />
            <Dialogue
               speaker="junior"
               text="This is crystal clear! I'll refactor our API design right away."
               x={280}
               y={height - 500}
               startFrame={starts.summary + 140}
               maxWidth={500}
            />
         </>
      )}
    </AbsoluteFill>
  );
};

// Helper Components

const ComparisonCard: React.FC<{color: string; main: string; sub: string}> = ({color, main, sub}) => (
   <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: `2px solid ${color}`,
      borderRadius: 16,
      padding: '20px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 100
   }}>
      <div style={{fontSize: 28, color: theme.text.primary, fontWeight: '500', fontFamily: 'monospace'}}>
         {main}
      </div>
      {sub && (
         <div style={{fontSize: 20, color: theme.text.muted, marginTop: 5, fontFamily: 'monospace'}}>
            {sub}
         </div>
      )}
   </div>
);

const MethodCard: React.FC<{
   method: string;
   color: string;
   desc: string;
   safe: boolean;
   idempotent: boolean;
   example: string;
}> = ({method, color, desc, safe, idempotent, example}) => (
   <div style={{
      background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
      border: `2px solid ${color}`,
      borderRadius: 20,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 15
   }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <div style={{fontSize: 40, fontWeight: 'bold', color}}>{method}</div>
         <div style={{display: 'flex', gap: 10}}>
            {safe && <Badge text="Safe" color={theme.colors.info} />}
            {idempotent && <Badge text="Idempotent" color={theme.colors.success} />}
         </div>
      </div>
      <div style={{fontSize: 24, color: theme.text.secondary}}>{desc}</div>
      <div style={{fontSize: 20, fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: 10, borderRadius: 8, color: theme.text.muted}}>
         {example}
      </div>
   </div>
);

const Badge: React.FC<{text: string; color: string}> = ({text, color}) => (
   <div style={{background: color, color: '#000', padding: '4px 12px', borderRadius: 10, fontSize: 16, fontWeight: 'bold'}}>
      {text}
   </div>
);

const StatusCodeGroup: React.FC<{
   title: string;
   color: string;
   codes: {code: number; text: string}[];
   startFrame: number;
}> = ({title, color, codes, startFrame}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{
         opacity: fadeIn(frame, startFrame, 20),
         background: 'rgba(255,255,255,0.05)',
         borderTop: `6px solid ${color}`,
         borderRadius: 16,
         padding: 30,
         width: 400
      }}>
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
      <div style={{
         background: 'rgba(255,255,255,0.08)',
         padding: 24,
         borderRadius: 15,
         display: 'flex',
         alignItems: 'center',
         gap: 24,
         opacity: fadeIn(frame, start + delay, 15),
         transform: `translateX(${interpolate(frame, [start + delay, start + delay + 15], [-50, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px)`
      }}>
         <div style={{fontSize: 48}}>{icon}</div>
         <div style={{fontSize: 32, color: theme.text.primary, fontWeight: 'bold'}}>{text}</div>
      </div>
   );
};
