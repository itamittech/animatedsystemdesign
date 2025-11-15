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
 * Client-Server Architecture, DNS & Proxies
 * A comprehensive guide to how the internet works from user request to server response
 * Alex (Junior Dev) learns about the foundational building blocks of web architecture
 */
export const ClientServerDNSProxies: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Helper component for DNS Server
  const DNSServer: React.FC<{x: number; y: number; startFrame: number}> = ({x, y, startFrame}) => (
    <div style={{position: 'absolute', left: x, top: y, opacity: fadeIn(frame, startFrame, 15)}}>
      <div style={{
        width: 100,
        height: 80,
        backgroundColor: theme.colors.cache,
        borderRadius: 12,
        border: `3px solid ${theme.colors.cache}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      }}>
        <div style={{fontSize: 32}}>🌐</div>
        <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff', marginTop: 4}}>DNS</div>
      </div>
    </div>
  );

  // Helper component for Proxy Server
  const ProxyServer: React.FC<{x: number; y: number; label: string; color: string; startFrame: number}> =
    ({x, y, label, color, startFrame}) => (
    <div style={{position: 'absolute', left: x, top: y, opacity: fadeIn(frame, startFrame, 15)}}>
      <div style={{
        width: 120,
        height: 100,
        backgroundColor: color,
        borderRadius: 12,
        border: `3px solid ${color}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        transform: `scale(${pulse(frame, startFrame, 60)})`,
      }}>
        <div style={{fontSize: 32}}>🔀</div>
        <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff', marginTop: 4}}>{label}</div>
      </div>
    </div>
  );

  // Info card component
  const InfoCard: React.FC<{title: string; points: string[]; x: number; y: number; startFrame: number; width?: number}> =
    ({title, points, x, y, startFrame, width = 400}) => (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      width,
      backgroundColor: 'rgba(30, 41, 59, 0.95)',
      border: '2px solid rgba(96, 165, 250, 0.3)',
      borderRadius: 12,
      padding: 20,
      opacity: fadeIn(frame, startFrame, 15),
    }}>
      <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.loadBalancer, marginBottom: 12}}>
        {title}
      </div>
      {points.map((point, i) => (
        <div key={i} style={{
          fontSize: 14,
          color: '#e2e8f0',
          marginBottom: 6,
          paddingLeft: 16,
          position: 'relative',
          opacity: fadeIn(frame, startFrame + 10 + i * 5, 10),
        }}>
          <span style={{position: 'absolute', left: 0, color: theme.colors.success}}>•</span>
          {point}
        </div>
      ))}
    </div>
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.background.primary,
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
          gap: 12,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
        }}
      >
        <div style={{fontSize: 16, color: '#94a3b8', fontWeight: '500', letterSpacing: '0.5px'}}>
          Created by
        </div>
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.5px',
        }}>
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(96, 165, 250, 0.3)'}} />
        <div style={{fontSize: 14, color: '#64748b', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 6}}>
          <span style={{fontSize: 16}}>⚡</span>
          Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Title + Introduction (0-180 frames / 0-6s) */}
      {frame >= 0 && frame < 180 && (
        <>
          <Title text="Client-Server, DNS & Proxies" subtitle="How the Internet Works" startFrame={0} />

          <Character type="junior" x={width * 0.2} y={height * 0.6} startFrame={30} />
          <Character type="architect" x={width * 0.7} y={height * 0.6} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="Sarah, when I type a URL, how does my browser actually connect to the server?"
            x={width * 0.2 + 140}
            y={height * 0.5}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Let's trace the complete journey from your browser to the server."
            x={width * 0.7 - 520}
            y={height * 0.5}
            startFrame={90}
            maxWidth={500}
          />
        </>
      )}

      {/* Scene 2: Client-Server Model Basics (180-450 frames / 6-15s) */}
      {frame >= 180 && frame < 450 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 200,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 180, 15),
          }}>
            Step 1: Client-Server Model
          </div>

          {/* Client (Browser) */}
          <Box
            x={width * 0.15}
            y={height * 0.35}
            width={140}
            height={100}
            color={theme.colors.client}
            label="Client (Browser)"
            icon="💻"
            startFrame={200}
          />

          {/* Server */}
          <Box
            x={width * 0.7}
            y={height * 0.35}
            width={140}
            height={100}
            color={theme.colors.server}
            label="Server"
            icon="🖥️"
            startFrame={200}
          />

          {/* Bidirectional arrows */}
          <Arrow
            x1={width * 0.15 + 140}
            y1={height * 0.35 + 40}
            x2={width * 0.7}
            y2={height * 0.35 + 40}
            color={theme.colors.success}
            label="Request"
            startFrame={220}
          />

          <Arrow
            x1={width * 0.7}
            y1={height * 0.35 + 60}
            x2={width * 0.15 + 140}
            y2={height * 0.35 + 60}
            color={theme.colors.loadBalancer}
            label="Response"
            startFrame={240}
          />

          <Character type="architect" x={width * 0.45} y={height * 0.65} startFrame={200} size={100} />

          <Dialogue
            speaker="architect"
            text="The client makes requests, the server processes them and sends responses. Simple request-response model!"
            x={width * 0.45 + 110}
            y={height * 0.6}
            startFrame={260}
            maxWidth={500}
          />

          <InfoCard
            title="Client-Server Basics"
            points={[
              'Client: Initiates requests (browser, mobile app)',
              'Server: Processes & responds (web server, API)',
              'Stateless: Each request independent',
              'Stateful: Server remembers client state'
            ]}
            x={width * 0.15}
            y={height * 0.55}
            startFrame={280}
            width={420}
          />
        </>
      )}

      {/* Scene 3: DNS Resolution Process (450-750 frames / 15-25s) */}
      {frame >= 450 && frame < 750 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 250,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 450, 15),
          }}>
            Step 2: DNS Resolution (Domain → IP)
          </div>

          {/* Client */}
          <Box
            x={width * 0.1}
            y={height * 0.3}
            width={120}
            height={80}
            color={theme.colors.client}
            label="Browser"
            icon="🌐"
            startFrame={460}
          />

          {/* DNS Server */}
          <DNSServer x={width * 0.4} y={height * 0.3} startFrame={480} />

          {/* Target Server */}
          <Box
            x={width * 0.7}
            y={height * 0.3}
            width={120}
            height={80}
            color={theme.colors.server}
            label="example.com"
            icon="🖥️"
            startFrame={500}
          />

          {/* DNS Query */}
          <Arrow
            x1={width * 0.1 + 120}
            y1={height * 0.3 + 30}
            x2={width * 0.4}
            y2={height * 0.3 + 30}
            color={theme.colors.warning}
            label="Query: example.com?"
            startFrame={520}
          />

          {/* DNS Response */}
          <Arrow
            x1={width * 0.4 + 100}
            y1={height * 0.3 + 50}
            x2={width * 0.1 + 120}
            y2={height * 0.3 + 50}
            color={theme.colors.success}
            label="192.168.1.1"
            startFrame={540}
          />

          {/* Connect to IP */}
          <Arrow
            x1={width * 0.1 + 60}
            y1={height * 0.3 + 80}
            x2={width * 0.7 + 60}
            y2={height * 0.3}
            color={theme.colors.loadBalancer}
            label="Connect to IP"
            startFrame={560}
          />

          <Character type="junior" x={width * 0.15} y={height * 0.65} startFrame={480} size={100} />

          <Dialogue
            speaker="junior"
            text="So DNS translates domain names to IP addresses? Like a phone book!"
            x={width * 0.15 + 110}
            y={height * 0.6}
            startFrame={500}
            maxWidth={480}
          />

          <InfoCard
            title="DNS Hierarchy"
            points={[
              '1. Browser cache (instant)',
              '2. OS cache (milliseconds)',
              '3. ISP DNS (network lookup)',
              '4. Root → TLD → Authoritative DNS',
              'TTL: Cache expiration time'
            ]}
            x={width * 0.5}
            y={height * 0.55}
            startFrame={580}
            width={420}
          />
        </>
      )}

      {/* Scene 4: HTTP/HTTPS Request Flow (750-1050 frames / 25-35s) */}
      {frame >= 750 && frame < 1050 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 200,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 750, 15),
          }}>
            Step 3: HTTP/HTTPS Request
          </div>

          {/* Client */}
          <Box
            x={width * 0.15}
            y={height * 0.3}
            width={140}
            height={100}
            color={theme.colors.client}
            label="Client"
            icon="💻"
            startFrame={760}
          />

          {/* Server */}
          <Box
            x={width * 0.65}
            y={height * 0.3}
            width={140}
            height={100}
            color={theme.colors.server}
            label="Web Server"
            icon="🖥️"
            startFrame={760}
          />

          {/* HTTP Request */}
          <Arrow
            x1={width * 0.15 + 140}
            y1={height * 0.3 + 35}
            x2={width * 0.65}
            y2={height * 0.3 + 35}
            color={theme.colors.warning}
            label="GET /api/users"
            startFrame={780}
          />

          {/* Data particles for HTTPS */}
          {frame >= 800 && (
            <DataFlowStream
              x1={width * 0.15 + 140}
              y1={height * 0.3 + 35}
              x2={width * 0.65}
              y2={height * 0.3 + 35}
              startFrame={800}
            />
          )}

          {/* HTTP Response */}
          <Arrow
            x1={width * 0.65}
            y1={height * 0.3 + 65}
            x2={width * 0.15 + 140}
            y2={height * 0.3 + 65}
            color={theme.colors.success}
            label="200 OK + JSON"
            startFrame={820}
          />

          <Character type="architect" x={width * 0.42} y={height * 0.52} startFrame={770} size={100} />

          <Dialogue
            speaker="architect"
            text="HTTP is the protocol. HTTPS adds encryption with SSL/TLS to protect data in transit!"
            x={width * 0.42 + 110}
            y={height * 0.48}
            startFrame={790}
            maxWidth={500}
          />

          <InfoCard
            title="HTTP Methods"
            points={[
              'GET: Retrieve data',
              'POST: Create new resource',
              'PUT: Update entire resource',
              'PATCH: Partial update',
              'DELETE: Remove resource'
            ]}
            x={width * 0.15}
            y={height * 0.6}
            startFrame={840}
            width={350}
          />

          <InfoCard
            title="HTTPS = HTTP + TLS"
            points={[
              '🔒 Encrypted communication',
              '🔑 Certificate validation',
              '✅ Data integrity',
              '⚡ HTTP/2 & HTTP/3 support'
            ]}
            x={width * 0.54}
            y={height * 0.6}
            startFrame={860}
            width={340}
          />
        </>
      )}

      {/* Scene 5: Forward Proxy Explained (1050-1500 frames / 35-50s) */}
      {frame >= 1050 && frame < 1500 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 200,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1050, 15),
          }}>
            Forward Proxy (Client-Side)
          </div>

          {/* Multiple Clients */}
          <Box
            x={width * 0.1}
            y={height * 0.25}
            width={100}
            height={70}
            color={theme.colors.client}
            label="Client 1"
            icon="💻"
            startFrame={1060}
          />
          <Box
            x={width * 0.1}
            y={height * 0.4}
            width={100}
            height={70}
            color={theme.colors.client}
            label="Client 2"
            icon="📱"
            startFrame={1070}
          />

          {/* Forward Proxy */}
          <ProxyServer
            x={width * 0.35}
            y={height * 0.3}
            label="Forward Proxy"
            color="#8b5cf6"
            startFrame={1080}
          />

          {/* Internet / Servers */}
          <Box
            x={width * 0.65}
            y={height * 0.25}
            width={120}
            height={70}
            color={theme.colors.server}
            label="google.com"
            icon="🌐"
            startFrame={1090}
          />
          <Box
            x={width * 0.65}
            y={height * 0.4}
            width={120}
            height={70}
            color={theme.colors.server}
            label="github.com"
            icon="🌐"
            startFrame={1100}
          />

          {/* Arrows from clients to proxy */}
          <Arrow
            x1={width * 0.1 + 100}
            y1={height * 0.25 + 35}
            x2={width * 0.35}
            y2={height * 0.3 + 50}
            color={theme.colors.warning}
            startFrame={1110}
          />
          <Arrow
            x1={width * 0.1 + 100}
            y1={height * 0.4 + 35}
            x2={width * 0.35}
            y2={height * 0.3 + 50}
            color={theme.colors.warning}
            startFrame={1120}
          />

          {/* Arrows from proxy to servers */}
          <Arrow
            x1={width * 0.35 + 120}
            y1={height * 0.3 + 35}
            x2={width * 0.65}
            y2={height * 0.25 + 35}
            color={theme.colors.success}
            startFrame={1130}
          />
          <Arrow
            x1={width * 0.35 + 120}
            y1={height * 0.3 + 65}
            x2={width * 0.65}
            y2={height * 0.4 + 35}
            color={theme.colors.success}
            startFrame={1140}
          />

          <Character type="junior" x={width * 0.15} y={height * 0.65} startFrame={1070} size={100} />

          <Dialogue
            speaker="junior"
            text="Why would clients need a proxy in the middle?"
            x={width * 0.15 + 110}
            y={height * 0.6}
            startFrame={1090}
            maxWidth={450}
          />

          <Character type="architect" x={width * 0.58} y={height * 0.65} startFrame={1150} size={100} />

          <Dialogue
            speaker="architect"
            text="Forward proxies help with corporate firewalls, content filtering, caching, and hiding client IPs!"
            x={width * 0.58 - 520}
            y={height * 0.6}
            startFrame={1170}
            maxWidth={500}
          />

          <InfoCard
            title="Forward Proxy Use Cases"
            points={[
              '🏢 Corporate firewall & monitoring',
              '🔒 Privacy: Hide client IP address',
              '🚫 Content filtering (block sites)',
              '📦 Caching frequently accessed content',
              '🌍 Bypass geo-restrictions (VPNs)'
            ]}
            x={width * 0.28}
            y={height * 0.6}
            startFrame={1200}
            width={440}
          />
        </>
      )}

      {/* Scene 6: Reverse Proxy Explained (1500-1950 frames / 50-65s) */}
      {frame >= 1500 && frame < 1950 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 220,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1500, 15),
          }}>
            Reverse Proxy (Server-Side)
          </div>

          {/* Clients */}
          <Box
            x={width * 0.08}
            y={height * 0.25}
            width={100}
            height={70}
            color={theme.colors.client}
            label="Client 1"
            icon="💻"
            startFrame={1510}
          />
          <Box
            x={width * 0.08}
            y={height * 0.4}
            width={100}
            height={70}
            color={theme.colors.client}
            label="Client 2"
            icon="📱"
            startFrame={1520}
          />

          {/* Reverse Proxy */}
          <ProxyServer
            x={width * 0.35}
            y={height * 0.3}
            label="Reverse Proxy"
            color={theme.colors.loadBalancer}
            startFrame={1530}
          />

          {/* Backend Servers */}
          <Box
            x={width * 0.68}
            y={height * 0.22}
            width={100}
            height={70}
            color={theme.colors.server}
            label="Server 1"
            icon="🖥️"
            startFrame={1540}
          />
          <Box
            x={width * 0.68}
            y={height * 0.35}
            width={100}
            height={70}
            color={theme.colors.server}
            label="Server 2"
            icon="🖥️"
            startFrame={1550}
          />
          <Box
            x={width * 0.68}
            y={height * 0.48}
            width={100}
            height={70}
            color={theme.colors.server}
            label="Server 3"
            icon="🖥️"
            startFrame={1560}
          />

          {/* Arrows from clients to reverse proxy */}
          <Arrow
            x1={width * 0.08 + 100}
            y1={height * 0.25 + 35}
            x2={width * 0.35}
            y2={height * 0.3 + 50}
            color={theme.colors.warning}
            startFrame={1570}
          />
          <Arrow
            x1={width * 0.08 + 100}
            y1={height * 0.4 + 35}
            x2={width * 0.35}
            y2={height * 0.3 + 50}
            color={theme.colors.warning}
            startFrame={1580}
          />

          {/* Arrows from reverse proxy to servers */}
          <Arrow
            x1={width * 0.35 + 120}
            y1={height * 0.3 + 30}
            x2={width * 0.68}
            y2={height * 0.22 + 35}
            color={theme.colors.success}
            startFrame={1590}
          />
          <Arrow
            x1={width * 0.35 + 120}
            y1={height * 0.3 + 50}
            x2={width * 0.68}
            y2={height * 0.35 + 35}
            color={theme.colors.success}
            startFrame={1600}
          />
          <Arrow
            x1={width * 0.35 + 120}
            y1={height * 0.3 + 70}
            x2={width * 0.68}
            y2={height * 0.48 + 35}
            color={theme.colors.success}
            startFrame={1610}
          />

          <Character type="architect" x={width * 0.15} y={height * 0.68} startFrame={1530} size={100} />

          <Dialogue
            speaker="architect"
            text="Reverse proxies sit in front of servers. Clients don't even know the backend servers exist!"
            x={width * 0.15 + 110}
            y={height * 0.63}
            startFrame={1550}
            maxWidth={500}
          />

          <InfoCard
            title="Reverse Proxy Benefits"
            points={[
              '⚖️ Load balancing across servers',
              '🔒 SSL/TLS termination',
              '📦 Caching static content',
              '🛡️ Security: Hide server IPs',
              '🌐 NGINX, Caddy, Apache'
            ]}
            x={width * 0.5}
            y={height * 0.63}
            startFrame={1620}
            width={400}
          />

          <div style={{
            position: 'absolute',
            top: height * 0.15,
            left: width * 0.25,
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.warning,
            backgroundColor: 'rgba(251, 191, 36, 0.15)',
            padding: '8px 16px',
            borderRadius: 8,
            border: '2px solid rgba(251, 191, 36, 0.4)',
            opacity: fadeIn(frame, 1640, 15),
          }}>
            💡 Clients think they're talking to one server!
          </div>
        </>
      )}

      {/* Scene 7: Complete Request Journey (1950-2250 frames / 65-75s) */}
      {frame >= 1950 && frame < 2250 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 250,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 1950, 15),
          }}>
            Complete Journey: Browser → Server
          </div>

          {/* Step-by-step visualization */}
          <div style={{
            position: 'absolute',
            top: height * 0.2,
            left: width * 0.1,
            right: width * 0.1,
            opacity: fadeIn(frame, 1960, 15),
          }}>
            {/* Browser */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 120,
              height: 80,
              backgroundColor: theme.colors.client,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: fadeIn(frame, 1970, 10),
            }}>
              <div style={{fontSize: 32}}>🌐</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>1. Browser</div>
            </div>

            <div style={{
              position: 'absolute',
              left: 130,
              top: 30,
              fontSize: 24,
              color: theme.colors.success,
              opacity: fadeIn(frame, 1985, 10),
            }}>→</div>

            {/* DNS */}
            <div style={{
              position: 'absolute',
              left: 180,
              top: 0,
              width: 120,
              height: 80,
              backgroundColor: theme.colors.cache,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: fadeIn(frame, 2000, 10),
            }}>
              <div style={{fontSize: 32}}>🌐</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>2. DNS</div>
            </div>

            <div style={{
              position: 'absolute',
              left: 310,
              top: 30,
              fontSize: 24,
              color: theme.colors.success,
              opacity: fadeIn(frame, 2015, 10),
            }}>→</div>

            {/* Reverse Proxy */}
            <div style={{
              position: 'absolute',
              left: 360,
              top: 0,
              width: 120,
              height: 80,
              backgroundColor: theme.colors.loadBalancer,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: fadeIn(frame, 2030, 10),
            }}>
              <div style={{fontSize: 32}}>🔀</div>
              <div style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>3. Proxy</div>
            </div>

            <div style={{
              position: 'absolute',
              left: 490,
              top: 30,
              fontSize: 24,
              color: theme.colors.success,
              opacity: fadeIn(frame, 2045, 10),
            }}>→</div>

            {/* Web Server */}
            <div style={{
              position: 'absolute',
              left: 540,
              top: 0,
              width: 120,
              height: 80,
              backgroundColor: theme.colors.server,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: fadeIn(frame, 2060, 10),
            }}>
              <div style={{fontSize: 32}}>🖥️</div>
              <div style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>4. Server</div>
            </div>
          </div>

          <Character type="junior" x={width * 0.25} y={height * 0.55} startFrame={1970} size={100} />
          <Character type="architect" x={width * 0.65} y={height * 0.55} startFrame={1970} size={100} />

          <Dialogue
            speaker="junior"
            text="Wow! So many hops just to load a webpage?"
            x={width * 0.25 + 110}
            y={height * 0.5}
            startFrame={2000}
            maxWidth={420}
          />

          <Dialogue
            speaker="architect"
            text="Yes! But it all happens in milliseconds. Caching at each layer makes it even faster."
            x={width * 0.65 - 540}
            y={height * 0.5}
            startFrame={2040}
            maxWidth={520}
          />

          <InfoCard
            title="Optimization at Each Layer"
            points={[
              '🌐 Browser cache: Instant load',
              '🔍 DNS cache: Skip resolution',
              '🔀 Proxy cache: Serve from edge',
              '💾 Server cache: Reduce DB load',
              '⚡ Result: <100ms response time'
            ]}
            x={width * 0.25}
            y={height * 0.65}
            startFrame={2080}
            width={450}
          />
        </>
      )}

      {/* Scene 8: Decision Framework (2250-2550 frames / 75-85s) */}
      {frame >= 2250 && frame < 2550 && (
        <>
          <div style={{
            position: 'absolute',
            top: 40,
            left: width / 2 - 180,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
            opacity: fadeIn(frame, 2250, 15),
          }}>
            When to Use Each?
          </div>

          <InfoCard
            title="✅ Use Forward Proxy When:"
            points={[
              'Corporate network content filtering',
              'Monitoring employee internet usage',
              'Hiding client IP addresses (privacy)',
              'Caching for multiple clients',
              'Accessing geo-restricted content'
            ]}
            x={width * 0.08}
            y={height * 0.2}
            startFrame={2260}
            width={420}
          />

          <InfoCard
            title="✅ Use Reverse Proxy When:"
            points={[
              'Load balancing across servers',
              'SSL/TLS termination (certificate mgmt)',
              'Serving static content (CDN)',
              'Protecting backend server IPs',
              'API gateway functionality'
            ]}
            x={width * 0.52}
            y={height * 0.2}
            startFrame={2280}
            width={420}
          />

          <InfoCard
            title="🛠️ Popular Tools"
            points={[
              'NGINX: Reverse proxy, web server, load balancer',
              'HAProxy: High-performance load balancer',
              'Caddy: Auto HTTPS, easy config',
              'Squid: Forward proxy caching',
              'Envoy: Service mesh sidecar proxy'
            ]}
            x={width * 0.08}
            y={height * 0.55}
            startFrame={2300}
            width={420}
          />

          <div style={{
            position: 'absolute',
            top: height * 0.55,
            left: width * 0.52,
            width: 420,
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: 12,
            padding: 20,
            opacity: fadeIn(frame, 2320, 15),
          }}>
            <div style={{fontSize: 18, fontWeight: 'bold', color: theme.colors.success, marginBottom: 12}}>
              💡 Pro Tip
            </div>
            <div style={{fontSize: 15, color: '#e2e8f0', lineHeight: 1.6}}>
              In production, you'll often use BOTH:
              <br/>• Forward proxy for outbound traffic
              <br/>• Reverse proxy for inbound traffic
              <br/><br/>
              Example: Corporate app with NGINX reverse proxy + Squid forward proxy for API calls.
            </div>
          </div>

          <Character type="architect" x={width * 0.45} y={height * 0.88} startFrame={2270} size={90} />

          <Dialogue
            speaker="architect"
            text="Master these fundamentals—they're the building blocks for every distributed system!"
            x={width * 0.45 - 460}
            y={height * 0.83}
            startFrame={2300}
            maxWidth={440}
          />
        </>
      )}

      {/* Scene 9: Closing (2550-2700 frames / 85-90s) */}
      {frame >= 2550 && frame < 2700 && (
        <>
          <div style={{
            position: 'absolute',
            top: height / 2 - 100,
            left: width / 2 - 300,
            fontSize: 36,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            opacity: fadeIn(frame, 2550, 20),
          }}>
            Next: Load Balancing Deep Dive
          </div>

          <div style={{
            position: 'absolute',
            top: height / 2,
            left: width / 2 - 350,
            fontSize: 20,
            color: '#94a3b8',
            textAlign: 'center',
            lineHeight: 1.8,
            opacity: fadeIn(frame, 2580, 20),
          }}>
            Now that you understand how requests reach servers,<br/>
            let's explore how to distribute traffic across multiple servers<br/>
            for high availability and scalability!
          </div>

          <Character type="junior" x={width * 0.35} y={height * 0.7} startFrame={2560} size={110} />
          <Character type="architect" x={width * 0.6} y={height * 0.7} startFrame={2560} size={110} />

          <div style={{
            position: 'absolute',
            bottom: 100,
            left: width / 2 - 200,
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colors.loadBalancer,
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
            padding: '12px 24px',
            borderRadius: 8,
            border: '2px solid rgba(96, 165, 250, 0.4)',
            opacity: fadeIn(frame, 2620, 20),
          }}>
            📚 Phase 1: Foundational Infrastructure
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
