import React from 'react';
import {useCurrentFrame, useVideoConfig, AbsoluteFill, spring} from 'remotion';

const Title: React.FC<{text: string; x: number; y: number; color?: string; size?: number; startFrame?: number}> = ({
  text,
  x,
  y,
  color = '#ffffff',
  size = 48,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: size,
        fontWeight: 'bold',
        color,
        opacity,
      }}
    >
      {text}
    </div>
  );
};

const Character: React.FC<{
  type: 'developer' | 'architect';
  x: number;
  y: number;
  scale?: number;
  startFrame?: number;
}> = ({type, x, y, scale = 1, startFrame = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const animation = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  const char = type === 'developer' ? '👨‍💻' : '👩‍💼';

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: 80 * scale,
        transform: `scale(${animation})`,
      }}
    >
      {char}
    </div>
  );
};

const Dialogue: React.FC<{
  speaker: 'developer' | 'architect';
  text: string;
  x: number;
  y: number;
  startFrame: number;
  maxWidth?: number;
}> = ({speaker, text, x, y, startFrame, maxWidth = 500}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const slideIn = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  const translateX = speaker === 'developer' ? -50 * (1 - slideIn) : 50 * (1 - slideIn);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        maxWidth,
        backgroundColor: speaker === 'developer' ? '#1e3a8a' : '#581c87',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        fontSize: 18,
        lineHeight: 1.6,
        transform: `translateX(${translateX}px)`,
        opacity: slideIn,
      }}
    >
      <div style={{fontWeight: 'bold', marginBottom: 10, color: speaker === 'developer' ? '#60a5fa' : '#c084fc'}}>
        {speaker === 'developer' ? 'Alex (Developer)' : 'Sarah (Architect)'}
      </div>
      {text}
    </div>
  );
};

const Box: React.FC<{
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  startFrame: number;
  fontSize?: number;
  textColor?: string;
}> = ({text, x, y, width, height, color, startFrame, fontSize = 16, textColor = '#ffffff'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const fadeIn = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        backgroundColor: color,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize,
        fontWeight: 'bold',
        color: textColor,
        opacity: fadeIn,
        transform: `scale(${fadeIn})`,
      }}
    >
      {text}
    </div>
  );
};

const Arrow: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  startFrame?: number;
  label?: string;
}> = ({x1, y1, x2, y2, color = '#ffffff', startFrame = 0, label}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const animation = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: x1,
          top: y1,
          width: length * animation,
          height: 3,
          backgroundColor: color,
          transformOrigin: '0 0',
          transform: `rotate(${angle}deg)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: x2,
          top: y2,
          width: 0,
          height: 0,
          borderLeft: `10px solid ${color}`,
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          transform: `rotate(${angle}deg) translate(-10px, -6px)`,
          opacity: animation,
        }}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            left: (x1 + x2) / 2,
            top: (y1 + y2) / 2 - 20,
            color,
            fontSize: 14,
            fontWeight: 'bold',
            opacity: animation,
          }}
        >
          {label}
        </div>
      )}
    </>
  );
};

export const ModelContextProtocol: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Introduction (0-16s / 0-480 frames) */}
      {frame >= 0 && frame < 480 && (
        <>
          <Title text="Model Context Protocol (MCP)" x={width / 2 - 460} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Sarah, if every LLM needs custom integrations for every tool and data source, that sounds like a mess! Is there a standard way to connect AI agents to external resources?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="That's exactly the problem MCP solves! Model Context Protocol is like REST APIs for AI - a standard interface for LLMs to securely connect to any data source or tool. Let me show you!"
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 2: The Integration Problem (16-34s / 480-1020 frames) */}
      {frame >= 480 && frame < 1020 && (
        <>
          <Title text="The Integration Problem" x={width / 2 - 370} y={50} color="#c084fc" startFrame={480} />

          <Character type="architect" x={width - 300} y={height / 2 + 50} startFrame={510} />

          {/* Without MCP - Spaghetti */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 140,
              width: 500,
              opacity: frame >= 540 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#ef4444', fontWeight: 'bold', marginBottom: 20}}>
              ❌ Without MCP: Custom Everything
            </div>

            {/* LLM in center */}
            <div style={{position: 'relative', height: 450}}>
              <Box
                text="LLM"
                x={200}
                y={180}
                width={100}
                height={100}
                color="#7c3aed"
                startFrame={570}
                fontSize={20}
              />

              {/* Messy arrows to different resources */}
              <Box text="Database" x={0} y={0} width={120} height={60} color="#0ea5e9" startFrame={600} fontSize={14} />
              <Arrow x1={60} y1={60} x2={220} y2={180} color="#ef4444" startFrame={630} label="Custom" />

              <Box text="Files" x={380} y={0} width={120} height={60} color="#0ea5e9" startFrame={660} fontSize={14} />
              <Arrow x1={440} y1={60} x2={280} y2={180} color="#ef4444" startFrame={690} label="Custom" />

              <Box text="APIs" x={0} y={390} width={120} height={60} color="#0ea5e9" startFrame={720} fontSize={14} />
              <Arrow x1={60} y1={390} x2={220} y2={280} color="#ef4444" startFrame={750} label="Custom" />

              <Box text="Cloud" x={380} y={390} width={120} height={60} color="#0ea5e9" startFrame={780} fontSize={14} />
              <Arrow x1={440} y1={390} x2={280} y2={280} color="#ef4444" startFrame={810} label="Custom" />
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 14,
                color: '#ef4444',
                lineHeight: 1.9,
                opacity: frame >= 840 ? 1 : 0,
              }}
            >
              • Every integration is unique<br />
              • Security risks (hardcoded creds)<br />
              • Hard to maintain & update<br />
              • No portability across LLMs
            </div>
          </div>

          {/* With MCP - Clean */}
          <div
            style={{
              position: 'absolute',
              right: 60,
              top: 140,
              width: 570,
              opacity: frame >= 900 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20}}>
              ✅ With MCP: Standard Interface
            </div>

            {/* LLM → MCP Servers → Resources */}
            <div style={{position: 'relative', height: 450}}>
              <Box
                text="LLM Client"
                x={0}
                y={190}
                width={130}
                height={80}
                color="#7c3aed"
                startFrame={930}
                fontSize={16}
              />

              <Arrow x1={130} y1={230} x2={190} y2={230} color="#10b981" startFrame={960} label="MCP" />

              {/* MCP Servers */}
              <div style={{position: 'absolute', left: 190, top: 0}}>
                <Box text="DB Server" x={0} y={0} width={140} height={60} color="#22d3ee" startFrame={990} fontSize={14} />
                <Box text="File Server" x={0} y={85} width={140} height={60} color="#22d3ee" startFrame={1020} fontSize={14} />
                <Box text="API Server" x={0} y={170} width={140} height={60} color="#22d3ee" startFrame={1050} fontSize={14} />
                <Box text="Cloud Server" x={0} y={255} width={140} height={60} color="#22d3ee" startFrame={1080} fontSize={14} />
              </div>

              {/* Arrows and Resources - now properly spaced */}
              <Arrow x1={330} y1={30} x2={370} y2={30} color="#10b981" startFrame={1110} />
              <Box text="📦 Database" x={370} y={0} width={140} height={60} color="#0ea5e9" startFrame={1110} fontSize={14} />

              <Arrow x1={330} y1={115} x2={370} y2={115} color="#10b981" startFrame={1140} />
              <Box text="📁 Files" x={370} y={85} width={140} height={60} color="#0ea5e9" startFrame={1140} fontSize={14} />

              <Arrow x1={330} y1={200} x2={370} y2={200} color="#10b981" startFrame={1170} />
              <Box text="🌐 APIs" x={370} y={170} width={140} height={60} color="#0ea5e9" startFrame={1170} fontSize={14} />

              <Arrow x1={330} y1={285} x2={370} y2={285} color="#10b981" startFrame={1200} />
              <Box text="☁️ Cloud" x={370} y={255} width={140} height={60} color="#0ea5e9" startFrame={1200} fontSize={14} />
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 14,
                color: '#10b981',
                lineHeight: 1.9,
                opacity: frame >= 1230 ? 1 : 0,
              }}
            >
              • Standard protocol, works anywhere<br />
              • Secure authentication built-in<br />
              • Easy to add new resources<br />
              • Portable across any LLM
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="MCP is the missing layer! Instead of N×M integrations (every LLM to every resource), you build once and it works everywhere. Think microservices for AI!"
            x={width - 750}
            y={height - 280}
            startFrame={900}
            maxWidth={580}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 3: MCP Architecture (34-56s / 1020-1680 frames) */}
      {frame >= 1020 && frame < 1680 && (
        <>
          <Title text="MCP Architecture" x={width / 2 - 280} y={50} color="#c084fc" startFrame={1020} />

          <Character type="developer" x={200} y={height / 2 + 80} startFrame={1050} />

          {/* Architecture diagram */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 140,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              🏗️ The Three Components
            </div>

            {/* 1. MCP Client */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #7c3aed',
                marginBottom: 20,
                opacity: frame >= 1080 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                1️⃣ MCP Client (LLM Application)
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.8}}>
                • Claude Desktop, ChatGPT, custom apps<br />
                • Sends requests to MCP servers<br />
                • Receives data & tool responses
              </div>
            </div>

            {/* 2. MCP Server */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #22d3ee',
                marginBottom: 20,
                opacity: frame >= 1200 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#22d3ee', fontWeight: 'bold', marginBottom: 10}}>
                2️⃣ MCP Server (Middle Layer)
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.8}}>
                • Exposes resources, tools, prompts<br />
                • Handles authentication & security<br />
                • Translates between LLM and data source<br />
                • Can be local or remote (HTTP/WebSocket)
              </div>
            </div>

            {/* 3. Resources */}
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 12,
                border: '2px solid #10b981',
                opacity: frame >= 1320 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
                3️⃣ Resources (Data Sources)
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.8}}>
                • Databases (PostgreSQL, MongoDB)<br />
                • File systems (local, S3, Google Drive)<br />
                • APIs (REST, GraphQL)<br />
                • Tools (calculators, web search, shell)
              </div>
            </div>
          </div>

          {/* Example Flow */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 160,
              width: 480,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #fbbf24',
              opacity: frame >= 1440 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 15}}>
              📝 Example Flow
            </div>
            <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 2}}>
              <div style={{opacity: frame >= 1470 ? 1 : 0}}>
                <strong style={{color: '#7c3aed'}}>User:</strong> "List my recent commits"<br /><br />
              </div>

              <div style={{opacity: frame >= 1530 ? 1 : 0}}>
                <strong style={{color: '#c084fc'}}>Client:</strong><br />
                Calls github-mcp-server.list_commits()<br /><br />
              </div>

              <div style={{opacity: frame >= 1590 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>MCP Server:</strong><br />
                Authenticates, fetches from GitHub API<br /><br />
              </div>

              <div style={{opacity: frame >= 1650 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>Returns:</strong><br />
                JSON data → Client → LLM formats response
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="So MCP servers are like API gateways for AI? They handle the messy details (auth, rate limits, format conversion) and give LLMs a clean interface?"
            x={100}
            y={height - 280}
            startFrame={1530}
            maxWidth={650}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 4: Benefits & Real Examples (56-76s / 1680-2280 frames) */}
      {frame >= 1680 && frame < 2280 && (
        <>
          <Title text="Why MCP Matters" x={width / 2 - 250} y={50} color="#c084fc" startFrame={1680} />

          <Character type="architect" x={width - 300} y={height / 2 - 50} startFrame={1710} />

          {/* Key Benefits */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 140,
              width: 520,
              opacity: frame >= 1740 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20}}>
              🎯 Key Benefits
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                fontSize: 15,
                color: '#cbd5e1',
                lineHeight: 2,
              }}
            >
              <div style={{marginBottom: 15, opacity: frame >= 1770 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>🔒 Security:</strong><br />
                Credentials never exposed to LLM, sandboxed execution
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 1830 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>📦 Composability:</strong><br />
                Mix & match servers (GitHub + Slack + Database)
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 1890 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>🔄 Portability:</strong><br />
                Write once, works with Claude, GPT, Gemini, etc.
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 1950 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>🚀 Ecosystem:</strong><br />
                Growing marketplace of pre-built MCP servers
              </div>

              <div style={{opacity: frame >= 2010 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>🛠️ Developer-Friendly:</strong><br />
                Simple SDK, works in Python, TypeScript, Go
              </div>
            </div>
          </div>

          {/* Real MCP Servers */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 140,
              width: 480,
              opacity: frame >= 2070 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20}}>
              🌍 Real MCP Servers
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                fontSize: 14,
                color: '#cbd5e1',
                lineHeight: 2,
              }}
            >
              <div style={{marginBottom: 12}}>
                <strong style={{color: '#c084fc'}}>@modelcontextprotocol/server-github</strong><br />
                List repos, commits, issues, PRs
              </div>

              <div style={{marginBottom: 12}}>
                <strong style={{color: '#c084fc'}}>@modelcontextprotocol/server-postgres</strong><br />
                Query databases securely
              </div>

              <div style={{marginBottom: 12}}>
                <strong style={{color: '#c084fc'}}>@modelcontextprotocol/server-filesystem</strong><br />
                Read/write files with permissions
              </div>

              <div style={{marginBottom: 12}}>
                <strong style={{color: '#c084fc'}}>@modelcontextprotocol/server-slack</strong><br />
                Send messages, read channels
              </div>

              <div style={{marginBottom: 12}}>
                <strong style={{color: '#c084fc'}}>@modelcontextprotocol/server-google-drive</strong><br />
                Access docs, sheets, files
              </div>

              <div style={{marginTop: 20, fontSize: 13, color: '#22d3ee', fontStyle: 'italic'}}>
                + Hundreds more from the community!<br />
                Check modelcontextprotocol.io
              </div>
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="MCP is enabling an ecosystem! Instead of every company building custom integrations, we're building a marketplace of reusable, secure connectors. It's the Docker of AI integrations!"
            x={width - 750}
            y={height - 280}
            startFrame={2130}
            maxWidth={580}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 5: Key Takeaways (76-95s / 2280-2850 frames) */}
      {frame >= 2280 && frame < 2850 && (
        <>
          <Title text="Key Takeaways" x={width / 2 - 220} y={50} color="#c084fc" startFrame={2280} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2310} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2340} />

          {/* Takeaways */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 180,
              width: 1000,
              fontSize: 18,
              color: '#cbd5e1',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 30,
                borderRadius: 12,
                border: '2px solid #7c3aed',
                opacity: frame >= 2370 ? 1 : 0,
                lineHeight: 2,
              }}
            >
              <div style={{fontSize: 24, color: '#c084fc', fontWeight: 'bold', marginBottom: 20}}>
                📚 What We Learned
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>1. The Problem:</strong>{' '}
                Every LLM needs custom integrations for every data source (N×M complexity)
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>2. MCP Solution:</strong>{' '}
                Standard protocol like REST APIs for AI tool integration
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>3. Architecture:</strong>{' '}
                Client (LLM) → MCP Server → Resources (DB, files, APIs)
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>4. Benefits:</strong>{' '}
                Security, portability, composability, growing ecosystem
              </div>

              <div style={{marginTop: 25, fontSize: 16, color: '#22d3ee', fontStyle: 'italic'}}>
                🎉 You now understand AI foundations! Ready to build intelligent systems?
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="This makes total sense! MCP is standardizing how AI connects to the world, just like HTTP standardized web communication. I can see why this is the future!"
            x={100}
            y={height - 280}
            startFrame={2430}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! You've now learned the full AI stack: ML basics, neural networks, LLMs, agents, and MCP. You're ready to architect AI-powered systems like a pro. Go build something amazing!"
            x={width - 750}
            y={height - 280}
            startFrame={2550}
            maxWidth={580}
          />

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontSize: 14,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
