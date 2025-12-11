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
 * Enhanced with animations, better character placement, and improved content.
 */
export const RESTAPIDesign: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Define Scene Timings (in frames)
  const sceneDurations = {
    intro: 300,
    resources: 540,
    methods: 600,
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

          {/* Adjusted Character Positioning to avoid overlap */}
          <Character type="junior" x={150} y={height - 250} startFrame={30} size={110} />
          <Character type="architect" x={width - 250} y={height - 250} startFrame={30} size={110} />

          <Dialogue
            speaker="junior"
            text="Sarah, our new mobile app needs an API. Should I just make some endpoints like /getUsers and /saveProduct?"
            x={280}
            y={height - 450}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Hold on, Alex! That's 'RPC' style. For a true REST API, we need to think in Resources, not Actions. Let's design it properly."
            x={width - 800}
            y={height - 450}
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
             text="In REST, the URL identifies the 'Thing' (Resource). The HTTP method defines the 'Action'."
             x={width - 800}
             y={height - 400}
             startFrame={starts.resources + 20}
             maxWidth={580}
          />

          <div style={{position: 'absolute', top: 250, width: '100%', display: 'flex', justifyContent: 'center', gap: 100}}>
             {/* Bad Examples */}
             <div style={{opacity: fadeIn(frame, starts.resources + 80, 20)}}>
                <div style={{fontSize: 36, color: theme.colors.error, fontWeight: 'bold', marginBottom: 30, textAlign: 'center'}}>❌ RPC Style (Avoid)</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                   <Box x={0} y={0} width={450} height={80} color={theme.colors.error} label="POST /getAllUsers" startFrame={starts.resources + 90} fontSize={28} />
                   <Box x={0} y={0} width={450} height={80} color={theme.colors.error} label="GET /createNewUser" startFrame={starts.resources + 100} fontSize={28} />
                   <Box x={0} y={0} width={450} height={80} color={theme.colors.error} label="POST /updateUser/123" startFrame={starts.resources + 110} fontSize={28} />
                   <Box x={0} y={0} width={450} height={80} color={theme.colors.error} label="GET /deleteUser?id=123" startFrame={starts.resources + 120} fontSize={28} />
                </div>
             </div>

             {/* Good Examples */}
             <div style={{opacity: fadeIn(frame, starts.resources + 150, 20)}}>
                <div style={{fontSize: 36, color: theme.colors.success, fontWeight: 'bold', marginBottom: 30, textAlign: 'center'}}>✅ RESTful Style</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                   <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <div style={{background: theme.colors.info, padding: '10px 20px', borderRadius: 8, color: 'white', fontWeight: 'bold', width: 80, textAlign: 'center'}}>GET</div>
                      <Box x={0} y={0} width={310} height={70} color={theme.colors.success} label="/users" startFrame={starts.resources + 160} />
                   </div>
                   <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <div style={{background: theme.colors.server, padding: '10px 20px', borderRadius: 8, color: 'white', fontWeight: 'bold', width: 80, textAlign: 'center'}}>POST</div>
                      <Box x={0} y={0} width={310} height={70} color={theme.colors.success} label="/users" startFrame={starts.resources + 170} />
                   </div>
                   <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <div style={{background: theme.colors.warning, padding: '10px 20px', borderRadius: 8, color: 'white', fontWeight: 'bold', width: 80, textAlign: 'center'}}>PUT</div>
                      <Box x={0} y={0} width={310} height={70} color={theme.colors.success} label="/users/123" startFrame={starts.resources + 180} />
                   </div>
                   <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <div style={{background: theme.colors.error, padding: '10px 20px', borderRadius: 8, color: 'white', fontWeight: 'bold', width: 80, textAlign: 'center'}}>DEL</div>
                      <Box x={0} y={0} width={310} height={70} color={theme.colors.success} label="/users/123" startFrame={starts.resources + 190} />
                   </div>
                </div>
             </div>
          </div>

          <Dialogue
            speaker="junior"
            text="Ah, so the URL is the 'noun' and the method is the 'verb'. That makes the API much more predictable!"
            x={200}
            y={height - 400}
            startFrame={starts.resources + 300}
            maxWidth={500}
          />
        </>
      )}

      {/* Scene 3: HTTP Methods */}
      {frame >= starts.methods && frame < starts.statusCodes && (
        <>
          <Title text="2. HTTP Methods Semantics" subtitle="Idempotency & Safety" startFrame={starts.methods} y={50} />

          <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.methods} size={90} />

          <Dialogue
            speaker="architect"
            text="Exactly! And you must respect the semantics. GET is safe (read-only). PUT is for full updates. PATCH is for partial updates."
            x={width - 800}
            y={height - 400}
            startFrame={starts.methods + 20}
            maxWidth={600}
          />

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, padding: '0 100px', marginTop: 200}}>
             {/* GET */}
             <div style={{opacity: fadeIn(frame, starts.methods + 60, 20)}}>
                <Box x={0} y={0} width={350} height={250} color={theme.colors.info} label="GET" icon="🔍" subLabel="Retrieve Data" startFrame={starts.methods + 60} />
                <div style={{marginTop: 15, color: theme.text.secondary, fontSize: 20, lineHeight: 1.5}}>
                   • <strong>Safe:</strong> No side effects<br/>
                   • <strong>Idempotent:</strong> Yes<br/>
                   • <strong>Cacheable:</strong> Yes
                </div>
             </div>

             {/* POST */}
             <div style={{opacity: fadeIn(frame, starts.methods + 90, 20)}}>
                <Box x={0} y={0} width={350} height={250} color={theme.colors.success} label="POST" icon="✨" subLabel="Create New" startFrame={starts.methods + 90} />
                <div style={{marginTop: 15, color: theme.text.secondary, fontSize: 20, lineHeight: 1.5}}>
                   • <strong>Unsafe:</strong> Changes state<br/>
                   • <strong>Idempotent:</strong> ❌ NO<br/>
                   • Creates child resource
                </div>
             </div>

             {/* PUT vs PATCH */}
             <div style={{opacity: fadeIn(frame, starts.methods + 120, 20)}}>
                <div style={{position: 'relative'}}>
                   <Box x={0} y={0} width={350} height={115} color={theme.colors.warning} label="PUT" icon="🔄" subLabel="Replace Fully" startFrame={starts.methods + 120} />
                   <Box x={0} y={135} width={350} height={115} color={theme.colors.purple || '#8b5cf6'} label="PATCH" icon="📝" subLabel="Partial Update" startFrame={starts.methods + 130} />
                </div>
                <div style={{marginTop: 15, color: theme.text.secondary, fontSize: 20, lineHeight: 1.5}}>
                   • <strong>PUT:</strong> Idempotent (Replace)<br/>
                   • <strong>PATCH:</strong> Usually not idempotent
                </div>
             </div>
          </div>

          <div style={{position: 'absolute', top: 750, left: 0, width: '100%', textAlign: 'center', opacity: fadeIn(frame, starts.methods + 180, 20)}}>
             <div style={{background: 'rgba(59, 130, 246, 0.15)', border: `2px solid ${theme.colors.info}`, borderRadius: 15, display: 'inline-block', padding: '20px 40px'}}>
                <h3 style={{color: theme.colors.info, margin: 0, fontSize: 24}}>💡 Why Idempotency Matters?</h3>
                <p style={{color: theme.text.secondary, margin: '10px 0 0', fontSize: 20}}>
                   If a request times out, can the client safely retry it?<br/>
                   PUT/DELETE = Yes (Result is same). POST = No (Might create duplicate).
                </p>
             </div>
          </div>
        </>
      )}

      {/* Scene 4: Status Codes */}
      {frame >= starts.statusCodes && frame < starts.versioning && (
        <>
          <Title text="3. Standard Status Codes" subtitle="Stop Returning 200 OK for Errors!" startFrame={starts.statusCodes} y={50} />

          <Character type="junior" x={100} y={height - 150} startFrame={starts.statusCodes} size={90} />

          <Dialogue
            speaker="junior"
            text="I usually just return 200 OK and put `{ error: 'failed' }` in the JSON body. Is that bad?"
            x={250}
            y={height - 350}
            startFrame={starts.statusCodes + 20}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Yes, that's a nightmare for monitoring and caching layers! Use the proper standardized codes."
            x={width - 800}
            y={height - 350}
            startFrame={starts.statusCodes + 120}
            maxWidth={550}
          />
          <Character type="architect" x={width - 200} y={height - 150} startFrame={starts.statusCodes} size={90} />

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, padding: '0 150px', marginTop: 220}}>
             {/* 2xx & 3xx */}
             <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div style={{opacity: fadeIn(frame, starts.statusCodes + 150, 20)}}>
                   <Box x={0} y={0} width={600} height={120} color={theme.colors.success} label="2xx Success" icon="✅" startFrame={starts.statusCodes + 150} />
                   <div style={{marginLeft: 20, marginTop: 10, fontSize: 22, color: theme.text.secondary}}>
                      • <strong>200 OK:</strong> General success<br/>
                      • <strong>201 Created:</strong> Resource created (POST)<br/>
                      • <strong>204 No Content:</strong> Action done, no body (DELETE)
                   </div>
                </div>

                <div style={{opacity: fadeIn(frame, starts.statusCodes + 180, 20)}}>
                   <Box x={0} y={0} width={600} height={100} color={theme.colors.info} label="3xx Redirection" icon="↩️" startFrame={starts.statusCodes + 180} />
                   <div style={{marginLeft: 20, marginTop: 10, fontSize: 22, color: theme.text.secondary}}>
                      • <strong>304 Not Modified:</strong> Use cached version
                   </div>
                </div>
             </div>

             {/* 4xx & 5xx */}
             <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div style={{opacity: fadeIn(frame, starts.statusCodes + 210, 20)}}>
                   <Box x={0} y={0} width={600} height={150} color={theme.colors.warning} label="4xx Client Error" icon="🚫" startFrame={starts.statusCodes + 210} />
                   <div style={{marginLeft: 20, marginTop: 10, fontSize: 22, color: theme.text.secondary}}>
                      • <strong>400 Bad Request:</strong> Invalid input<br/>
                      • <strong>401 Unauthorized:</strong> Not logged in<br/>
                      • <strong>403 Forbidden:</strong> Logged in, but no permission<br/>
                      • <strong>404 Not Found:</strong> Resource doesn't exist
                   </div>
                </div>

                <div style={{opacity: fadeIn(frame, starts.statusCodes + 240, 20)}}>
                   <Box x={0} y={0} width={600} height={100} color={theme.colors.error} label="5xx Server Error" icon="💥" startFrame={starts.statusCodes + 240} />
                   <div style={{marginLeft: 20, marginTop: 10, fontSize: 22, color: theme.text.secondary}}>
                      • <strong>500 Internal Error:</strong> Server crashed<br/>
                      • <strong>503 Unavailable:</strong> Overloaded/Maintenance
                   </div>
                </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 5: Versioning */}
      {frame >= starts.versioning && frame < starts.pagination && (
        <>
          <Title text="4. API Versioning" subtitle="Breaking Changes Happen. Be Ready." startFrame={starts.versioning} y={50} />

          <Character type="architect" x={width / 2 - 60} y={height - 180} startFrame={starts.versioning} size={90} />

          <Dialogue
             speaker="architect"
             text="Never break existing clients! When you need to make breaking changes (like renaming fields), introduce a new version."
             x={width / 2 - 450}
             y={height - 350}
             startFrame={starts.versioning + 20}
             maxWidth={900}
          />

          <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginTop: 250}}>
             {/* URI Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 60, 20)}}>
                <Box x={0} y={0} width={400} height={200} color={theme.colors.info} label="URI Versioning" icon="🔗" startFrame={starts.versioning + 60} />
                <div style={{background: 'rgba(0,0,0,0.3)', padding: 15, borderRadius: 10, marginTop: 10, fontFamily: 'monospace', fontSize: 22, color: theme.text.primary}}>
                   /v1/users<br/>/v2/users
                </div>
                <div style={{color: theme.colors.success, marginTop: 10, fontSize: 20}}>✅ Easiest to explore</div>
             </div>

             {/* Header Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 90, 20)}}>
                <Box x={0} y={0} width={400} height={200} color={theme.colors.server} label="Header Versioning" icon="🎩" startFrame={starts.versioning + 90} />
                <div style={{background: 'rgba(0,0,0,0.3)', padding: 15, borderRadius: 10, marginTop: 10, fontFamily: 'monospace', fontSize: 22, color: theme.text.primary}}>
                   Accept-Version: v1
                </div>
                <div style={{color: theme.colors.success, marginTop: 10, fontSize: 20}}>✅ Cleaner URLs</div>
             </div>
          </div>

          <div style={{position: 'absolute', top: 700, width: '100%', display: 'flex', justifyContent: 'center', opacity: fadeIn(frame, starts.versioning + 150, 20)}}>
             <div style={{background: theme.colors.background.card, padding: 30, borderRadius: 20, border: `2px solid ${theme.colors.primary}`, maxWidth: 800}}>
                <h3 style={{color: theme.colors.primary, margin: 0}}>⭐ Recommendation</h3>
                <p style={{color: theme.text.secondary, fontSize: 22, lineHeight: 1.5}}>
                   Start with <strong>URI Versioning</strong> (e.g., <code>/api/v1/...</code>). It's explicit, easy to cache, and easy for developers to debug in a browser.
                </p>
             </div>
          </div>
        </>
      )}

      {/* Scene 6: Pagination */}
      {frame >= starts.pagination && frame < starts.hateoas && (
         <>
            <Title text="5. Pagination & Filtering" subtitle="Handling Large Datasets Efficiently" startFrame={starts.pagination} y={50} />

            <Character type="junior" x={100} y={height - 150} startFrame={starts.pagination} size={90} />
            <Dialogue
               speaker="junior"
               text="If I have 1 million users, I assume /users shouldn't return all of them?"
               x={250}
               y={height - 350}
               startFrame={starts.pagination + 20}
               maxWidth={500}
            />

            <div style={{position: 'absolute', top: 250, left: 100, right: 100, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50}}>
               {/* Bad Approach */}
               <div style={{opacity: fadeIn(frame, starts.pagination + 60, 20)}}>
                  <h3 style={{color: theme.colors.error, textAlign: 'center'}}>❌ Return All (Crash)</h3>
                  <Box x={0} y={0} width={600} height={100} color={theme.colors.error} label="GET /users" subLabel="Returns 1,000,000 records" startFrame={starts.pagination + 60} />
                  <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
                     <Box x={0} y={0} width={200} height={100} color={theme.colors.client} label="App" icon="📱" subLabel="💥 Out of Memory" startFrame={starts.pagination + 80} />
                  </div>
               </div>

               {/* Good Approach */}
               <div style={{opacity: fadeIn(frame, starts.pagination + 100, 20)}}>
                  <h3 style={{color: theme.colors.success, textAlign: 'center'}}>✅ Pagination</h3>
                  <Box x={0} y={0} width={600} height={100} color={theme.colors.success} label="GET /users?limit=20{'&'}page=2" subLabel="Returns 20 records" startFrame={starts.pagination + 100} />
                  <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
                     <Box x={0} y={0} width={200} height={100} color={theme.colors.client} label="App" icon="📱" subLabel="Smooth Scroll" startFrame={starts.pagination + 110} />
                  </div>
               </div>
            </div>

            {/* Pagination Types */}
            <div style={{position: 'absolute', top: 600, left: 100, right: 100, opacity: fadeIn(frame, starts.pagination + 150, 20)}}>
               <div style={{display: 'flex', gap: 30, justifyContent: 'center'}}>
                  <div style={{flex: 1, background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 15, border: `1px solid ${theme.colors.info}`}}>
                     <h4 style={{color: theme.colors.info, margin: 0, fontSize: 24}}>Offset Pagination</h4>
                     <code style={{color: theme.text.muted, display: 'block', margin: '10px 0'}}>?page=5{'&'}limit=10</code>
                     <p style={{color: theme.text.secondary}}>Simple, but slow for large data (DB has to count rows).</p>
                  </div>
                  <div style={{flex: 1, background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 15, border: `1px solid ${theme.colors.success}`}}>
                     <h4 style={{color: theme.colors.success, margin: 0, fontSize: 24}}>Cursor Pagination</h4>
                     <code style={{color: theme.text.muted, display: 'block', margin: '10px 0'}}>?after=user_123{'&'}limit=10</code>
                     <p style={{color: theme.text.secondary}}>Very fast, infinite scroll friendly. No random page jumps.</p>
                  </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 7: HATEOAS */}
      {frame >= starts.hateoas && frame < starts.summary && (
         <>
            <Title text="6. HATEOAS" subtitle="Hypermedia As The Engine Of Application State" startFrame={starts.hateoas} y={50} />

            <Character type="architect" x={width - 200} y={height - 150} startFrame={starts.hateoas} size={90} />

            <Dialogue
               speaker="architect"
               text="HATEOAS means the API guides the client. Responses include links to related actions."
               x={width - 800}
               y={height - 350}
               startFrame={starts.hateoas + 20}
               maxWidth={550}
            />

            <div style={{position: 'absolute', top: 200, left: 100, width: 800, opacity: fadeIn(frame, starts.hateoas + 60, 20)}}>
               <h3 style={{color: theme.colors.primary}}>Without HATEOAS</h3>
               <div style={{background: '#1e293b', padding: 20, borderRadius: 10, fontFamily: 'monospace', fontSize: 20, color: '#e2e8f0', border: '1px solid #334155'}}>
                  {`{
  "id": 123,
  "name": "Alice",
  "balance": 500
}`}
               </div>
               <div style={{color: theme.colors.error, marginTop: 10}}>Client must hardcode logic: "If balance {'>'} 0, I can show Transfer button".</div>
            </div>

            <div style={{position: 'absolute', top: 200, right: 100, width: 800, opacity: fadeIn(frame, starts.hateoas + 100, 20)}}>
               <h3 style={{color: theme.colors.success}}>With HATEOAS</h3>
               <div style={{background: '#1e293b', padding: 20, borderRadius: 10, fontFamily: 'monospace', fontSize: 20, color: '#e2e8f0', border: '2px solid #10b981'}}>
                  {`{
  "id": 123,
  "name": "Alice",
  "links": [
    { "rel": "self", "href": "/users/123" },
    { "rel": "deposit", "href": "/users/123/deposit" },
    { "rel": "transfer", "href": "/users/123/transfer" }
  ]
}`}
               </div>
               <div style={{color: theme.colors.success, marginTop: 10}}>API explicitly tells Client what actions are possible now.</div>
            </div>

            <Arrow
               x1={width/2 + 50} y1={400} x2={width/2 - 50} y2={400}
               color={theme.colors.success}
               startFrame={starts.hateoas + 120}
               label="Discoverable!"
            />
         </>
      )}

      {/* Scene 8: Summary */}
      {frame >= starts.summary && (
         <>
            <Title text="Summary Checklist" subtitle="Design like a Pro" startFrame={starts.summary} y={50} />

            <div style={{position: 'absolute', top: 200, left: width/2 - 500, width: 1000}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                  <SummaryItem text="Use Nouns for URLs (/products, not /getProducts)" icon="📦" delay={0} start={starts.summary} />
                  <SummaryItem text="Use correct HTTP verbs (GET, POST, PUT, DELETE)" icon="verb" delay={20} start={starts.summary} />
                  <SummaryItem text="Use standard Status Codes (200, 201, 400, 401, 404, 500)" icon="🚦" delay={40} start={starts.summary} />
                  <SummaryItem text="Version your API (/v1/...) to manage breaking changes" icon="📅" delay={60} start={starts.summary} />
                  <SummaryItem text="Use Pagination for lists (Cursor > Offset)" icon="📄" delay={80} start={starts.summary} />
               </div>
            </div>

            <Character type="junior" x={150} y={height - 180} startFrame={starts.summary + 120} size={110} />
            <Dialogue
               speaker="junior"
               text="This is crystal clear! I'll refactor our API design right away."
               x={280}
               y={height - 400}
               startFrame={starts.summary + 140}
               maxWidth={500}
            />
         </>
      )}
    </AbsoluteFill>
  );
};

const SummaryItem: React.FC<{text: string; icon: string; delay: number; start: number}> = ({text, icon, delay, start}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{
         background: 'rgba(255,255,255,0.08)',
         padding: 20,
         borderRadius: 15,
         display: 'flex',
         alignItems: 'center',
         gap: 20,
         opacity: fadeIn(frame, start + delay, 15),
         transform: `translateX(${interpolate(frame, [start + delay, start + delay + 15], [-50, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px)`
      }}>
         <div style={{fontSize: 40}}>{icon === 'verb' ? '🗣️' : icon}</div>
         <div style={{fontSize: 28, color: theme.text.primary, fontWeight: 'bold'}}>{text}</div>
      </div>
   );
};
