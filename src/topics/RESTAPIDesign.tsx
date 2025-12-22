import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {theme} from '../design-system/theme';
import {Arrow} from '../components/Arrow';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, scale} from '../design-system/animations';

/**
 * REST API Design Masterclass (Architectural Level)
 * - Pacing adjusted: Tighter content, explicit explanation time.
 * - Deep dive System Design, Versioning, HATEOAS.
 */
export const RESTAPIDesign: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Adjusted timings (Slower pacing for complex scenes as requested)
  const sceneDurations = {
    intro: 360,         // 12s
    resources: 540,     // 18s
    methods: 600,       // 20s (Increased for more verbs + staggered animation)
    contentTypes: 720,  // 24s (Increased for headers explanation)
    systemDesign: 1200, // 40s (Increased for conversational flow)
    statusCodes: 480,   // 16s (Increased for creative visual)
    versioning: 540,    // 18s
    pagination: 480,    // 16s
    security: 540,      // 18s
    hateoas: 750,       // 25s
    summary: 300,       // 10s
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
            text="That's RPC style! REST uses Resources (Nouns) and Methods (Verbs). Let's dive deep."
            x={width - 800}
            y={height - 500}
            startFrame={150}
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
             text="Resources are logical entities. Avoid actions in URLs."
             x={width - 800}
             y={height - 400}
             startFrame={starts.resources + 20}
             maxWidth={600}
          />

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

      {/* Scene 3: HTTP Methods (Enhanced with Staggered Animation & More Verbs) */}
      {frame >= starts.methods && frame < starts.contentTypes && (
        <>
          <Title text="2. HTTP Methods Semantics" subtitle="Safety, Idempotency & Body Rules" startFrame={starts.methods} y={50} />

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, padding: '0 100px', marginTop: 180}}>
             {/* Column 1: Read/Safe Methods */}
             <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div style={{fontSize: 28, color: theme.text.muted, marginBottom: 10, textAlign: 'center', opacity: fadeIn(frame, starts.methods + 10, 10)}}>Safe / Read-Only</div>

                <div style={{opacity: fadeIn(frame, starts.methods + 20, 20), transform: `translateY(${interpolate(frame, [starts.methods + 20, starts.methods + 40], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="GET" color={theme.colors.info} desc="Read Resource" safe={true} idempotent={true} example="GET /users/1" />
                </div>

                <div style={{opacity: fadeIn(frame, starts.methods + 50, 20), transform: `translateY(${interpolate(frame, [starts.methods + 50, starts.methods + 70], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="HEAD" color={theme.colors.info} desc="Headers Only" safe={true} idempotent={true} example="HEAD /users/1" />
                </div>

                <div style={{opacity: fadeIn(frame, starts.methods + 80, 20), transform: `translateY(${interpolate(frame, [starts.methods + 80, starts.methods + 100], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="OPTIONS" color={theme.colors.info} desc="Allowed Methods" safe={true} idempotent={true} example="OPTIONS /users" />
                </div>
             </div>

             {/* Column 2: Write/Unsafe Methods */}
             <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div style={{fontSize: 28, color: theme.text.muted, marginBottom: 10, textAlign: 'center', opacity: fadeIn(frame, starts.methods + 10, 10)}}>Unsafe / Write</div>

                <div style={{opacity: fadeIn(frame, starts.methods + 110, 20), transform: `translateY(${interpolate(frame, [starts.methods + 110, starts.methods + 130], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="POST" color={theme.colors.success} desc="Create Resource" safe={false} idempotent={false} example="POST /users" />
                </div>

                <div style={{opacity: fadeIn(frame, starts.methods + 140, 20), transform: `translateY(${interpolate(frame, [starts.methods + 140, starts.methods + 160], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="PUT" color={theme.colors.warning} desc="Replace Full" safe={false} idempotent={true} example="PUT /users/1" />
                </div>

                <div style={{opacity: fadeIn(frame, starts.methods + 170, 20), transform: `translateY(${interpolate(frame, [starts.methods + 170, starts.methods + 190], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="PATCH" color={theme.colors.messageQueue} desc="Partial Update" safe={false} idempotent={false} example="PATCH /users/1" />
                </div>

                <div style={{opacity: fadeIn(frame, starts.methods + 200, 20), transform: `translateY(${interpolate(frame, [starts.methods + 200, starts.methods + 220], [20, 0], {extrapolateRight: 'clamp'})}px)`}}>
                    <MethodCard method="DELETE" color={theme.colors.error} desc="Remove" safe={false} idempotent={true} example="DELETE /users/1" />
                </div>
             </div>
          </div>
        </>
      )}

      {/* Scene 4: Content Negotiation (Enhanced with Header Explanation) */}
      {frame >= starts.contentTypes && frame < starts.systemDesign && (
         <>
            <Title text="3. Data Formats & Negotiation" subtitle="Content-Type vs Accept" startFrame={starts.contentTypes} y={50} />

            <Character type="junior" x={150} y={height - 250} startFrame={starts.contentTypes} size={110} />
            <Dialogue
               speaker="junior"
               text="Sarah, do we just always send JSON? What about images?"
               x={280}
               y={height - 450}
               startFrame={starts.contentTypes + 20}
               maxWidth={500}
            />

            <Character type="architect" x={width - 250} y={height - 250} startFrame={starts.contentTypes + 100} size={110} />

            {frame < starts.contentTypes + 300 && (
                <Dialogue
                speaker="architect"
                text="We use headers! 'Content-Type' describes what you send. 'Accept' describes what you want."
                x={width - 800}
                y={height - 450}
                startFrame={starts.contentTypes + 120}
                maxWidth={520}
                />
            )}

            {/* Header Visual Explanation */}
            <div style={{
                position: 'absolute',
                top: 250,
                left: width/2 - 400,
                width: 800,
                opacity: interpolate(frame, [starts.contentTypes + 150, starts.contentTypes + 170, starts.contentTypes + 330, starts.contentTypes + 350], [0, 1, 1, 0])
            }}>
                <div style={{background: theme.background.card, border: `2px solid ${theme.colors.highlight}`, borderRadius: 20, padding: 40}}>
                    <div style={{marginBottom: 30}}>
                        <div style={{color: theme.colors.client, fontSize: 32, fontWeight: 'bold', marginBottom: 10}}>➡️ Content-Type</div>
                        <div style={{fontSize: 24, color: theme.text.secondary}}>Tells the server: "Here is the format of the data I am sending you."</div>
                        <div style={{fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: 15, borderRadius: 10, marginTop: 10, color: theme.colors.client}}>Content-Type: application/json</div>
                    </div>
                    <div>
                        <div style={{color: theme.colors.server, fontSize: 32, fontWeight: 'bold', marginBottom: 10}}>⬅️ Accept</div>
                        <div style={{fontSize: 24, color: theme.text.secondary}}>Tells the server: "Please send me the response in this format."</div>
                        <div style={{fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: 15, borderRadius: 10, marginTop: 10, color: theme.colors.server}}>Accept: application/xml</div>
                    </div>
                </div>
            </div>

            {frame >= starts.contentTypes + 300 && (
                <Dialogue
                speaker="architect"
                text="Exactly. We can negotiate JSON for data or Streams for binary."
                x={width - 800}
                y={height - 450}
                startFrame={starts.contentTypes + 300}
                maxWidth={520}
                />
            )}

            <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 250}}>
               {/* JSON/Standard */}
               <div style={{opacity: fadeIn(frame, starts.contentTypes + 350, 20), flex: 1, maxWidth: 700}}>
                   <div style={{background: theme.colors.info, borderRadius: 15, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, border: `2px solid ${theme.colors.info}`}}>
                        <span style={{fontSize: 40}}>📄</span>
                        <span style={{fontSize: 32, fontWeight: 'bold', color: '#000'}}>Standard API</span>
                   </div>
                   <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 30, marginTop: 20}}>
                      <div style={{fontFamily: 'monospace', fontSize: 28, color: theme.text.secondary}}>Content-Type: application/json</div>
                      <div style={{fontFamily: 'monospace', fontSize: 28, color: theme.text.secondary}}>Accept: application/xml</div>
                   </div>
               </div>

               {/* Streaming/Binary */}
               <div style={{opacity: fadeIn(frame, starts.contentTypes + 370, 20), flex: 1, maxWidth: 700}}>
                   <div style={{background: theme.colors.messageQueue, borderRadius: 15, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, border: `2px solid ${theme.colors.messageQueue}`}}>
                        <span style={{fontSize: 40}}>🎥</span>
                        <span style={{fontSize: 32, fontWeight: 'bold', color: '#000'}}>Streaming Media</span>
                   </div>
                   <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: 15, padding: 30, marginTop: 20}}>
                      <div style={{fontFamily: 'monospace', fontSize: 28, color: theme.text.secondary}}>Content-Type: application/octet-stream</div>
                      <div style={{marginTop: 15, color: theme.colors.warning, fontSize: 24, fontWeight: 'bold'}}>Don't base64 encode large files in JSON!</div>
                   </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 5: System Design Example (Interleaved Conversational Flow) */}
      {frame >= starts.systemDesign && frame < starts.statusCodes && (
         <>
            <Title text="4. Real-World Example: Video Upload" subtitle="Separating Metadata from Content" startFrame={starts.systemDesign} y={50} />
            <Character type="architect" x={width - 250} y={height - 250} startFrame={starts.systemDesign} size={110} />

            {/* Intro Dialogue */}
            {frame < starts.systemDesign + 150 && (
                <Dialogue
                   speaker="architect"
                   text="Let's design a Video Upload API. We split metadata and binary upload for scalability."
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
               {frame >= starts.systemDesign + 250 && frame < starts.systemDesign + 400 && (
                 <Dialogue
                    speaker="architect"
                    text="The server saves the metadata and returns a pre-signed URL for the actual upload."
                    x={width - 800}
                    y={height - 450}
                    startFrame={starts.systemDesign + 250}
                    maxWidth={520}
                 />
               )}

               <div style={{position: 'absolute', top: 0, right: 0, opacity: fadeIn(frame, starts.systemDesign + 280, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.server}}>2. Get Upload URL</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 15, border: `2px solid ${theme.colors.server}`, width: 500, marginTop: 15}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.success, fontSize: 24}}>202 Accepted</div>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 24}}>{`{ "uploadUrl": "https://s3..." }`}</div>
                  </div>
               </div>

               <Arrow x1={550} y1={100} x2={950} y2={100} color={theme.colors.client} startFrame={starts.systemDesign + 350} />

               {/* Step 3: Binary Upload */}
               {frame >= starts.systemDesign + 450 && frame < starts.systemDesign + 650 && (
                 <Dialogue
                    speaker="architect"
                    text="Now the client uploads the heavy binary file directly to storage (S3), bypassing the API."
                    x={width - 800}
                    y={height - 450}
                    startFrame={starts.systemDesign + 450}
                    maxWidth={520}
                 />
               )}

               <div style={{position: 'absolute', top: 350, left: 300, opacity: fadeIn(frame, starts.systemDesign + 480, 20)}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.messageQueue}}>3. Upload Binary Content</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 15, border: `2px solid ${theme.colors.messageQueue}`, width: 800, marginTop: 15}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 28}}>PUT https://s3.aws.com/upload/vid_123</div>
                     <div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 15}}>
                        <div style={{padding: '5px 15px', background: theme.colors.messageQueue, borderRadius: 5, color: '#000', fontWeight: 'bold', fontSize: 20}}>RAW BYTES</div>
                        <div style={{fontFamily: 'monospace', color: theme.text.muted, fontSize: 24}}>Content-Type: video/mp4</div>
                     </div>
                  </div>
               </div>

               {/* Step 4: GET */}
               <div style={{position: 'absolute', top: 600, left: 300, opacity: fadeIn(frame, starts.systemDesign + 730, 20), transform: `scale(${scale(frame, starts.systemDesign+730, 20, 0.9, 1)})`}}>
                  <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.info}}>4. Get Video</div>
                  <div style={{background: theme.background.card, padding: 30, borderRadius: 15, border: `4px solid ${theme.colors.info}`, width: 800, marginTop: 15, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'}}>
                     <div style={{fontFamily: 'monospace', color: theme.text.primary, fontSize: 32, fontWeight: 'bold'}}>GET /videos/vid_123</div>
                     <div style={{marginTop: 10, fontSize: 24, color: theme.text.secondary}}>Returns: Metadata + Streaming URL (m3u8)</div>
                  </div>
               </div>

               {frame >= starts.systemDesign + 700 && (
                   <Dialogue
                      speaker="architect"
                      text="Finally, the GET API returns the metadata and a streaming URL (HLS), not the raw file."
                      x={width - 800}
                      y={height - 450}
                      startFrame={starts.systemDesign + 700}
                      maxWidth={520}
                   />
               )}
            </div>
         </>
      )}

      {/* Scene 6: Status Codes (Creative Visuals) */}
      {frame >= starts.statusCodes && frame < starts.versioning && (
        <>
          <Title text="5. Standard Status Codes" subtitle="The Traffic Signals of the Web" startFrame={starts.statusCodes} y={50} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginTop: 250, padding: '0 50px'}}>
             <CreativeStatusCode
                type="success"
                title="2xx Success"
                icon="✅"
                color={theme.colors.success}
                codes={['200 OK', '201 Created', '202 Accepted']}
                startFrame={starts.statusCodes + 20}
             />
             <CreativeStatusCode
                type="client_error"
                title="4xx Client Error"
                icon="⚠️"
                color={theme.colors.warning}
                codes={['400 Bad Request', '401 Unauthorized', '429 Too Many Req']}
                startFrame={starts.statusCodes + 50}
             />
             <CreativeStatusCode
                type="server_error"
                title="5xx Server Error"
                icon="🔥"
                color={theme.colors.error}
                codes={['500 Internal Error', '503 Unavailable']}
                startFrame={starts.statusCodes + 80}
             />
          </div>
        </>
      )}

      {/* Scene 7: Versioning (Detailed) */}
      {frame >= starts.versioning && frame < starts.pagination && (
        <>
          <Title text="6. API Versioning Strategy" subtitle="When and How to Break" startFrame={starts.versioning} y={50} />

          <div style={{display: 'flex', justifyContent: 'center', gap: 80, marginTop: 200}}>
             {/* URI Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 20, 20), flex: 1, maxWidth: 600}}>
                <div style={{background: theme.colors.info, color: '#000', padding: 25, borderRadius: 15, fontSize: 36, fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: 15}}>
                   <span style={{fontSize: 40}}>🔗</span> URI Versioning
                </div>
                <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 15, fontSize: 36, fontFamily: 'monospace', color: theme.text.primary}}>GET /v1/users</div>
                   <div style={{fontSize: 24, color: theme.text.muted, marginTop: 10}}>✅ Easy to browse/cache</div>
                   <div style={{fontSize: 24, color: theme.text.muted}}>❌ Pollutes URL space</div>
                </div>
             </div>

             {/* Header Versioning */}
             <div style={{opacity: fadeIn(frame, starts.versioning + 60, 20), flex: 1, maxWidth: 600}}>
                <div style={{background: theme.colors.server, color: '#000', padding: 25, borderRadius: 15, fontSize: 36, fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: 15}}>
                   <span style={{fontSize: 40}}>🎩</span> Header Versioning
                </div>
                <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', gap: 15}}>
                   <div style={{background: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 15, fontSize: 36, fontFamily: 'monospace', color: theme.text.primary}}>Accept-Version: v1</div>
                   <div style={{fontSize: 24, color: theme.text.muted, marginTop: 10}}>✅ Clean URLs (RESTful)</div>
                   <div style={{fontSize: 24, color: theme.text.muted}}>❌ Harder to test in browser</div>
                </div>
             </div>
          </div>

          <Dialogue
             speaker="architect"
             text="Use URI versioning for public APIs (DX). Use Header versioning for internal microservices."
             x={width / 2 - 300}
             y={height - 250}
             startFrame={starts.versioning + 120}
             maxWidth={600}
          />
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
                     <div style={{fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>GET /users?offset=20&limit=10</div>
                     <div style={{marginTop: 20, fontSize: 24, color: theme.text.muted}}>
                        • <strong>Skip</strong> 20 rows<br/>
                        • <strong>Take</strong> 10 rows
                     </div>
                     <div style={{marginTop: 20, fontSize: 28, color: theme.colors.error, fontWeight: 'bold'}}>⚠️ Slow at scale (Offset penalty)</div>
                  </div>
               </div>

               <div style={{opacity: fadeIn(frame, starts.pagination + 60, 20)}}>
                  <div style={{fontSize: 40, fontWeight: 'bold', color: theme.colors.success, marginBottom: 20, textAlign: 'center'}}>Cursor Pagination</div>
                  <div style={{background: theme.background.card, padding: 40, borderRadius: 20, border: `3px solid ${theme.colors.success}`, width: 600}}>
                     <div style={{fontSize: 32, fontFamily: 'monospace', color: theme.text.primary}}>GET /users?after=user_id_123</div>
                     <div style={{marginTop: 20, fontSize: 24, color: theme.text.muted}}>
                        • <strong>Seek</strong> to ID {'>'} 123<br/>
                        • <strong>Take</strong> 10 rows
                     </div>
                     <div style={{marginTop: 20, fontSize: 28, color: theme.colors.success, fontWeight: 'bold'}}>✅ O(1) Performance</div>
                  </div>
               </div>
            </div>
         </>
      )}

      {/* Scene 9: API Security */}
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

      {/* Scene 10: HATEOAS (Enhanced Depth) */}
      {frame >= starts.hateoas && frame < starts.summary && (
         <>
            <Title text="9. HATEOAS" subtitle="Dynamic State Transitions" startFrame={starts.hateoas} y={50} />
            <Character type="architect" x={width - 200} y={height - 250} startFrame={starts.hateoas} size={90} />

            <Dialogue
               speaker="architect"
               text="HATEOAS makes your API self-discoverable. The client adapts as the state changes!"
               x={width - 800}
               y={height - 450}
               startFrame={starts.hateoas + 20}
               maxWidth={550}
            />

            <div style={{display: 'flex', justifyContent: 'center', marginTop: 220, gap: 50}}>

               {/* State 1: Positive Balance */}
               <div style={{
                   background: '#1e293b',
                   padding: 40,
                   borderRadius: 20,
                   border: `3px solid ${theme.colors.success}`,
                   width: 800,
                   fontSize: 28,
                   fontFamily: 'monospace',
                   color: '#e2e8f0',
                   opacity: interpolate(frame, [starts.hateoas + 40, starts.hateoas + 60, starts.hateoas + 350, starts.hateoas + 370], [0, 1, 1, 0])
               }}>
                  <div style={{color: theme.colors.success, fontSize: 32, marginBottom: 20, fontWeight: 'bold'}}>State: Active (Balance {'>'} 0)</div>
                  <div>{'{'}</div>
                  <div style={{paddingLeft: 40}}>"id": 123,</div>
                  <div style={{paddingLeft: 40}}>"balance": <span style={{color: theme.colors.success}}>500</span>,</div>
                  <div style={{paddingLeft: 40, marginTop: 10}}>"_links": {'{'}</div>
                  <div style={{paddingLeft: 80, background: 'rgba(59, 130, 246, 0.2)'}}>"deposit": "/accounts/123/deposit",</div>
                  <div style={{paddingLeft: 80, background: 'rgba(16, 185, 129, 0.2)'}}>"withdraw": "/accounts/123/withdraw"</div>
                  <div style={{paddingLeft: 40}}>{'}'}</div>
                  <div>{'}'}</div>
                  <div style={{marginTop: 20, color: theme.colors.success}}>✅ "Withdraw" is available</div>
               </div>

               {/* State 2: Negative Balance (Overdraft) */}
               <div style={{
                   position: 'absolute',
                   background: '#1e293b',
                   padding: 40,
                   borderRadius: 20,
                   border: `3px solid ${theme.colors.error}`,
                   width: 800,
                   fontSize: 28,
                   fontFamily: 'monospace',
                   color: '#e2e8f0',
                   opacity: fadeIn(frame, starts.hateoas + 380, 20)
               }}>
                  <div style={{color: theme.colors.error, fontSize: 32, marginBottom: 20, fontWeight: 'bold'}}>State: Overdrawn (Balance &lt; 0)</div>
                  <div>{'{'}</div>
                  <div style={{paddingLeft: 40}}>"id": 123,</div>
                  <div style={{paddingLeft: 40}}>"balance": <span style={{color: theme.colors.error}}>-50</span>,</div>
                  <div style={{paddingLeft: 40, marginTop: 10}}>"_links": {'{'}</div>
                  <div style={{paddingLeft: 80, background: 'rgba(59, 130, 246, 0.2)'}}>"deposit": "/accounts/123/deposit"</div>
                  {/* Withdraw is missing */}
                  <div style={{paddingLeft: 40}}>{'}'}</div>
                  <div>{'}'}</div>
                  <div style={{marginTop: 20, color: theme.colors.error}}>❌ "Withdraw" link REMOVED</div>
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
   <div style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))', border: `2px solid ${color}`, borderRadius: 20, padding: 25, display: 'flex', flexDirection: 'column', gap: 10, width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <div style={{fontSize: 36, fontWeight: 'bold', color}}>{method}</div>
         <div style={{display: 'flex', gap: 8}}>
             {safe && <span style={{background: 'rgba(255,255,255,0.15)', color: theme.colors.info, padding: '2px 8px', borderRadius: 4, fontWeight: 'bold', fontSize: 14, border: `1px solid ${theme.colors.info}`}}>SAFE</span>}
             {idempotent && <span style={{background: 'rgba(255,255,255,0.15)', color: theme.colors.success, padding: '2px 8px', borderRadius: 4, fontWeight: 'bold', fontSize: 14, border: `1px solid ${theme.colors.success}`}}>IDEMPOTENT</span>}
         </div>
      </div>
      <div style={{fontSize: 22, color: theme.text.secondary}}>{desc}</div>
      <div style={{fontSize: 20, fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: 8, borderRadius: 8, color: theme.text.muted}}>{example}</div>
   </div>
);

const CreativeStatusCode: React.FC<{type: string; title: string; icon: string; color: string; codes: string[]; startFrame: number}> = ({type, title, icon, color, codes, startFrame}) => {
   const frame = useCurrentFrame();
   return (
      <div style={{
          opacity: fadeIn(frame, startFrame, 20),
          transform: `scale(${scale(frame, startFrame, 20, 0.8, 1)})`,
          background: 'rgba(255,255,255,0.05)',
          border: `3px solid ${color}`,
          borderRadius: 24,
          padding: 30,
          width: 450,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: `0 0 40px ${color}30` // Glow effect
      }}>
         <div style={{
             fontSize: 60,
             background: 'rgba(255,255,255,0.1)',
             borderRadius: '50%',
             width: 100,
             height: 100,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             marginBottom: 20,
             border: `4px solid ${color}`,
             boxShadow: `0 0 20px ${color}`
         }}>
             {icon}
         </div>
         <div style={{fontSize: 32, fontWeight: 'bold', color, marginBottom: 20}}>{title}</div>
         <div style={{display: 'flex', flexDirection: 'column', gap: 10, width: '100%'}}>
            {codes.map((c, i) => (
               <div key={i} style={{fontSize: 24, color: theme.text.primary, background: 'rgba(0,0,0,0.2)', padding: '10px 20px', borderRadius: 10, fontFamily: 'monospace', textAlign: 'center'}}>
                  {c}
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
