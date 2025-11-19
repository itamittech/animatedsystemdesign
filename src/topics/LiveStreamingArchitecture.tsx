import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Live Streaming Architecture (Phase 10.2)
 * Duration: 85 seconds (2550 frames at 30fps)
 *
 * Scene 1 (0-21s): Live Streaming Challenges & Protocols
 * Scene 2 (21-43s): HLS vs DASH - Adaptive Bitrate Streaming
 * Scene 3 (43-64s): Video Encoding & Transcoding Pipeline
 * Scene 4 (64-85s): Architecture: Twitch/YouTube Live Scale
 */

export const LiveStreamingArchitecture: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 630;
  const scene2End = 1290;
  const scene3End = 1920;
  const scene4End = 2550;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Live Streaming Architecture" subtitle="Delivering Video at Scale" />
          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="How does Twitch stream to millions of viewers with minimal lag? What's the architecture?" x={100} y={height - 280} startFrame={90} />
          <Dialogue speaker="architect" text="Adaptive bitrate streaming! HLS/DASH protocols + CDN edge caching. Let's break it down!" x={width - 750} y={height - 280} startFrame={240} />

          <div style={{position: 'absolute', top: 340, left: width / 2 - 850, width: 1700, opacity: fadeIn(frame, 390, 30)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>📹 Live Streaming Challenges</h2>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 30}}>
              {[
                {icon: '🌐', challenge: 'Global Distribution', issue: 'Millions of viewers worldwide', solution: 'CDN with edge locations'},
                {icon: '📶', challenge: 'Variable Bandwidth', issue: 'Users on WiFi, 4G, 5G, slow networks', solution: 'Adaptive bitrate (ABR)'},
                {icon: '⏱️', challenge: 'Low Latency', issue: 'Live = real-time (seconds of delay)', solution: 'Low-latency HLS, WebRTC'},
                {icon: '💾', challenge: 'Huge Data', issue: '1080p60 = 5-8 Mbps per viewer', solution: 'Compression (H.264, H.265)'},
                {icon: '📱', challenge: 'Multi-Device', issue: 'Web, mobile, TV, game consoles', solution: 'Standardized protocols (HLS, DASH)'},
                {icon: '🔄', challenge: 'Resilience', issue: 'Handle streamer disconnect, CDN failure', solution: 'Automatic failover'}
              ].map((item, i) => (
                <div key={i} style={{width: 530, padding: 18, background: `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))`, border: '2px solid #8b5cf6', borderRadius: 12, opacity: fadeIn(frame, 420 + i * 15, 15), boxShadow: '0 0 16px rgba(139, 92, 246, 0.3)', display: 'flex', alignItems: 'flex-start', gap: 14}}>
                  <div style={{fontSize: 36}}>{item.icon}</div>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 20, fontWeight: 700, color: '#c4b5fd', marginBottom: 6, fontFamily: theme.typography.heading.fontFamily}}>{item.challenge}</h4>
                    <div style={{fontSize: 17, color: '#e9d5ff', marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>
                      <strong>Issue:</strong> {item.issue}
                    </div>
                    <div style={{fontSize: 17, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily}}>
                      <strong style={{color: '#6ee7b7'}}>Solution:</strong> {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14, opacity: fadeIn(frame, 540, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📡 Streaming Protocols</h3>
              <div style={{fontSize: 21, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                <strong>HLS (HTTP Live Streaming):</strong> Apple, widely supported, 10-30s latency<br />
                <strong>DASH (Dynamic Adaptive Streaming over HTTP):</strong> Open standard, similar to HLS<br />
                <strong>WebRTC:</strong> Sub-second latency, but complex scaling (used for video calls)
              </div>
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="HLS & Adaptive Bitrate Streaming" subtitle="How Quality Adjusts Automatically" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🎬 HLS: HTTP Live Streaming</h3>
              <p style={{fontSize: 22, color: '#d1fae5', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Break video into small chunks (segments), serve via HTTP, adapt quality dynamically
              </p>
            </div>

            {/* HLS Architecture */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene1End + 60, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#3b82f6', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📦 HLS File Structure</h3>
              <div style={{padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14}}>
                <div style={{display: 'flex', gap: 30}}>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Master Playlist (.m3u8)</h4>
                    <div style={{fontFamily: 'monospace', fontSize: 17, color: '#93c5fd', background: 'rgba(59, 130, 246, 0.2)', padding: 16, borderRadius: 8, lineHeight: 1.8}}>
                      #EXTM3U<br />
                      #EXT-X-STREAM-INF:BANDWIDTH=800000<br />
                      low/index.m3u8<br />
                      #EXT-X-STREAM-INF:BANDWIDTH=2000000<br />
                      medium/index.m3u8<br />
                      #EXT-X-STREAM-INF:BANDWIDTH=5000000<br />
                      high/index.m3u8
                    </div>
                    <div style={{fontSize: 18, color: '#dbeafe', marginTop: 12, fontFamily: theme.typography.body.fontFamily}}>
                      Points to different quality levels
                    </div>
                  </div>

                  <div style={{flex: 1, opacity: fadeIn(frame, scene1End + 90, 25)}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Media Playlist</h4>
                    <div style={{fontFamily: 'monospace', fontSize: 17, color: '#93c5fd', background: 'rgba(59, 130, 246, 0.2)', padding: 16, borderRadius: 8, lineHeight: 1.8}}>
                      #EXTM3U<br />
                      #EXT-X-TARGETDURATION:10<br />
                      #EXTINF:10.0,<br />
                      segment0.ts<br />
                      #EXTINF:10.0,<br />
                      segment1.ts<br />
                      #EXTINF:10.0,<br />
                      segment2.ts
                    </div>
                    <div style={{fontSize: 18, color: '#dbeafe', marginTop: 12, fontFamily: theme.typography.body.fontFamily}}>
                      10-second video chunks (.ts files)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adaptive Bitrate */}
            <div style={{opacity: fadeIn(frame, scene1End + 150, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#10b981', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📊 Adaptive Bitrate (ABR) Explained</h3>
              <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14}}>
                <div style={{display: 'flex', gap: 24, marginBottom: 20}}>
                  {[
                    {quality: '360p', bitrate: '800 Kbps', size: '~1 MB/10s', use: 'Slow network (3G)'},
                    {quality: '720p', bitrate: '2 Mbps', size: '~2.5 MB/10s', use: 'Medium (4G)'},
                    {quality: '1080p', bitrate: '5 Mbps', size: '~6 MB/10s', use: 'Fast (WiFi, 5G)'}
                  ].map((level, i) => (
                    <div key={i} style={{flex: 1, padding: 18, background: `linear-gradient(135deg, rgba(16, 185, 129, ${0.25 - i * 0.05}), rgba(16, 185, 129, 0.1))`, border: '2px solid #10b981', borderRadius: 10, opacity: fadeIn(frame, scene1End + 180 + i * 20, 20)}}>
                      <h5 style={{fontSize: 24, fontWeight: 700, color: '#6ee7b7', textAlign: 'center', marginBottom: 10, fontFamily: theme.typography.heading.fontFamily}}>{level.quality}</h5>
                      <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                        Bitrate: {level.bitrate}<br />
                        Size: {level.size}<br />
                        Use: {level.use}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{padding: 20, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 10, opacity: fadeIn(frame, scene1End + 270, 25)}}>
                  <div style={{fontSize: 21, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                    <strong style={{color: '#6ee7b7'}}>Player logic:</strong> Measure download speed → If fast, request high quality → If slow, drop to lower quality<br />
                    Switch seamlessly between segments!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 360} />
          <Dialogue speaker="junior" text="Break video into segments, provide multiple qualities, let player choose based on bandwidth!" x={100} y={height - 280} startFrame={scene1End + 390} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Video Encoding & Transcoding Pipeline" subtitle="From Camera to Viewers" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 850, width: 1700}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14, opacity: fadeIn(frame, scene2End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#fbbf24', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🎥 Encoding vs Transcoding</h3>
              <div style={{fontSize: 22, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                <strong>Encoding:</strong> Compress raw video (camera → H.264/H.265/VP9)<br />
                <strong>Transcoding:</strong> Convert to multiple resolutions & bitrates (1080p → 720p, 480p, 360p)
              </div>
            </div>

            {/* Pipeline */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene2End + 60, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#8b5cf6', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🔄 Live Streaming Pipeline</h3>
              <svg width="1700" height="320" opacity={fadeIn(frame, scene2End + 90, 20)}>
                {/* Streamer */}
                <g opacity={fadeIn(frame, scene2End + 105, 15)}>
                  <rect x={50} y={50} width={160} height={80} rx={10} fill="#3b82f6" stroke="#60a5fa" strokeWidth={3} />
                  <text x={130} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">📹 Streamer</text>
                  <text x={130} y={110} textAnchor="middle" fill="#dbeafe" fontSize={16}>OBS/Twitch App</text>
                </g>

                {/* Ingest Server */}
                <g opacity={fadeIn(frame, scene2End + 135, 15)}>
                  <rect x={300} y={50} width={180} height={80} rx={10} fill="#10b981" stroke="#34d399" strokeWidth={3} />
                  <text x={390} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Ingest Server</text>
                  <text x={390} y={110} textAnchor="middle" fill="#d1fae5" fontSize={16}>RTMP receiver</text>
                </g>

                {/* Transcoder */}
                <g opacity={fadeIn(frame, scene2End + 165, 15)}>
                  <rect x={580} y={30} width={200} height={120} rx={10} fill="#f59e0b" stroke="#fbbf24" strokeWidth={3} />
                  <text x={680} y={75} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Transcoder</text>
                  <text x={680} y={100} textAnchor="middle" fill="#fef3c7" fontSize={16}>FFmpeg cluster</text>
                  <text x={680} y={125} textAnchor="middle" fill="#fde68a" fontSize={15}>1080p→720p→480p→360p</text>
                </g>

                {/* Packager */}
                <g opacity={fadeIn(frame, scene2End + 195, 15)}>
                  <rect x={880} y={50} width={180} height={80} rx={10} fill="#8b5cf6" stroke="#a78bfa" strokeWidth={3} />
                  <text x={970} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">Packager</text>
                  <text x={970} y={110} textAnchor="middle" fill="#e9d5ff" fontSize={16}>Create HLS/DASH</text>
                </g>

                {/* CDN */}
                <g opacity={fadeIn(frame, scene2End + 225, 15)}>
                  <rect x={1160} y={50} width={160} height={80} rx={10} fill="#06b6d4" stroke="#22d3ee" strokeWidth={3} />
                  <text x={1240} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">🌐 CDN</text>
                  <text x={1240} y={110} textAnchor="middle" fill="#cffafe" fontSize={16}>Edge caching</text>
                </g>

                {/* Viewers */}
                <g opacity={fadeIn(frame, scene2End + 255, 15)}>
                  <rect x={1420} y={50} width={160} height={80} rx={10} fill="#ec4899" stroke="#f472b6" strokeWidth={3} />
                  <text x={1500} y={85} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="700">👥 Viewers</text>
                  <text x={1500} y={110} textAnchor="middle" fill="#fce7f3" fontSize={16}>Millions!</text>
                </g>

                {/* Arrows */}
                <g opacity={fadeIn(frame, scene2End + 120, 15)}>
                  <line x1={210} y1={90} x2={300} y2={90} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={255} y={82} textAnchor="middle" fill="#94a3b8" fontSize={14}>RTMP</text>
                </g>
                <g opacity={fadeIn(frame, scene2End + 150, 15)}>
                  <line x1={480} y1={90} x2={580} y2={90} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={530} y={82} textAnchor="middle" fill="#94a3b8" fontSize={14}>Raw</text>
                </g>
                <g opacity={fadeIn(frame, scene2End + 180, 15)}>
                  <line x1={780} y1={90} x2={880} y2={90} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={830} y={82} textAnchor="middle" fill="#94a3b8" fontSize={14}>Multi-res</text>
                </g>
                <g opacity={fadeIn(frame, scene2End + 210, 15)}>
                  <line x1={1060} y1={90} x2={1160} y2={90} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={1110} y={82} textAnchor="middle" fill="#94a3b8" fontSize={14}>.m3u8</text>
                </g>
                <g opacity={fadeIn(frame, scene2End + 240, 15)}>
                  <line x1={1320} y1={90} x2={1420} y2={90} stroke="#94a3b8" strokeWidth={3} markerEnd="url(#arrow-gray)" />
                  <text x={1370} y={82} textAnchor="middle" fill="#94a3b8" fontSize={14}>HLS</text>
                </g>

                {/* Latency annotation */}
                <g opacity={fadeIn(frame, scene2End + 285, 15)}>
                  <text x={850} y={200} textAnchor="middle" fill="#ef4444" fontSize={20} fontWeight="700">Total Latency: 10-30 seconds (standard HLS)</text>
                  <text x={850} y={230} textAnchor="middle" fill="#6ee7b7" fontSize={18}>Low-Latency HLS: 2-5 seconds (LL-HLS with chunked transfer)</text>
                </g>

                <defs>
                  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#94a3b8" />
                  </marker>
                </defs>
              </svg>
            </div>

            <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, opacity: fadeIn(frame, scene2End + 330, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#fca5a5', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎯 Codecs: H.264 vs H.265 vs AV1</h3>
              <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                <strong style={{color: '#fbbf24'}}>H.264 (AVC):</strong> Most compatible, widely supported, 1080p@5Mbps<br />
                <strong style={{color: '#a78bfa'}}>H.265 (HEVC):</strong> 50% better compression, but licensing costs, 1080p@2.5Mbps<br />
                <strong style={{color: '#6ee7b7'}}>AV1:</strong> Royalty-free, best compression, but slower encode (YouTube uses it)
              </div>
            </div>
          </div>

          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 390} />
          <Dialogue speaker="architect" text="Ingest raw stream, transcode to multiple qualities, package as HLS, distribute via CDN!" x={width - 750} y={height - 280} startFrame={scene2End + 420} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Production Architecture" subtitle="Twitch/YouTube Live Scale" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(16, 185, 129, 0.6)'}}>🏗️ Scaling Considerations</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                {[
                  {icon: '🌍', title: 'Multi-Region Ingest', desc: 'Streamer uploads to nearest region (lower latency)', detail: 'AWS IVS, Twitch use global ingest points'},
                  {icon: '⚙️', title: 'Parallel Transcoding', desc: 'Transcode different qualities on different servers', detail: 'FFmpeg workers in auto-scaling cluster'},
                  {icon: '💾', title: 'DVR & Recording', desc: 'Save stream segments for rewind/replay', detail: 'S3/GCS storage, viewer can seek back'},
                  {icon: '📊', title: 'Analytics & Monitoring', desc: 'Track viewer count, buffering rate, quality switches', detail: 'Datadog, custom metrics dashboards'},
                  {icon: '🔐', title: 'Access Control', desc: 'Subscriber-only streams, token-based auth', detail: 'Signed URLs with expiration'},
                  {icon: '💬', title: 'Chat Integration', desc: 'Real-time chat alongside video', detail: 'WebSocket for chat, separate from video'}
                ].map((item, i) => (
                  <div key={i} style={{width: 520, padding: 20, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene3End + 60 + i * 15, 15), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: 14}}>
                      <div style={{fontSize: 36}}>{item.icon}</div>
                      <div style={{flex: 1}}>
                        <h4 style={{fontSize: 21, fontWeight: 700, color: '#6ee7b7', marginBottom: 6, fontFamily: theme.typography.heading.fontFamily}}>{item.title}</h4>
                        <div style={{fontSize: 18, color: '#d1fae5', marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>{item.desc}</div>
                        <div style={{fontSize: 16, color: '#a7f3d0', fontFamily: theme.typography.body.fontFamily}}>{item.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 210, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#3b82f6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🛠️ Managed Services</h2>
              <div style={{display: 'flex', gap: 20}}>
                {[
                  {name: 'AWS IVS (Interactive Video Service)', features: ['Managed ingest', 'Auto-transcoding', 'HLS delivery', 'Low-latency mode'], pricing: 'Pay per stream hour'},
                  {name: 'Mux Video', features: ['Video API', 'Automatic ABR', 'Analytics', 'Player SDKs'], pricing: 'Pay per minute encoded'},
                  {name: 'Cloudflare Stream', features: ['Global CDN', 'Encoding included', 'Player embed', 'Storage included'], pricing: '$5 per 1000 mins'}
                ].map((service, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: 'rgba(59, 130, 246, 0.15)', border: '2px solid #3b82f6', borderRadius: 12, opacity: fadeIn(frame, scene3End + 240 + i * 20, 20)}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>{service.name}</h4>
                    {service.features.map((feat, j) => (
                      <div key={j} style={{fontSize: 17, color: '#dbeafe', marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>• {feat}</div>
                    ))}
                    <div style={{marginTop: 12, padding: 10, background: 'rgba(59, 130, 246, 0.2)', borderRadius: 8, fontSize: 17, color: '#93c5fd', textAlign: 'center', fontFamily: theme.typography.body.fontFamily}}>{service.pricing}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene3End + 330, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>💡 Best Practices</h3>
              <div style={{fontSize: 21, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.9}}>
                • Use CDN for delivery (99% of traffic handled by edge)<br />
                • Monitor buffering rate (rebuffering = bad UX)<br />
                • Implement fallback (if high quality fails, drop to lower)<br />
                • Pre-roll ads only, not mid-roll (avoid disrupting live experience)
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 420} />
          <Dialogue speaker="junior" text="Global ingest, parallel transcoding, CDN delivery, and managed services make it scalable!" x={100} y={height - 280} startFrame={scene3End + 450} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
