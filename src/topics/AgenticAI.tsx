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
        fontSize: 28,
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
}> = ({text, x, y, width, height, color, startFrame, fontSize = 24, textColor = '#ffffff'}) => {
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
            fontSize: 22,
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

export const AgenticAI: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Introduction (0-16s / 0-480 frames) */}
      {frame >= 0 && frame < 480 && (
        <>
          <Title text="Agentic AI & Tool Use" x={width / 2 - 380} y={50} color="#c084fc" startFrame={0} />

          {frame < 270 && (
            <>
              <Character type="developer" x={width * 0.25} y={height / 2 - 100} startFrame={30} />
              <Character type="architect" x={width * 0.75} y={height / 2 - 100} startFrame={30} />

              <Dialogue
                speaker="developer"
                text="Sarah, LLMs are great for chat, but they just talk. How do we make them actually DO things? Like write code, search the web, or automate tasks?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={60}
                maxWidth={650}
              />

              <Dialogue
                speaker="architect"
                text="That's where Agentic AI comes in! We give LLMs access to tools and let them decide when to use them. They become agents that can think, plan, act, and learn from results. Let me show you!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={180}
                maxWidth={580}
              />
            </>
          )}

          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 2: Chatbot vs Agent (16-36s / 480-1080 frames) */}
      {frame >= 480 && frame < 1080 && (
        <>
          <Title text="Chatbot vs Agent" x={width / 2 - 280} y={50} color="#c084fc" startFrame={480} />

          {frame < 930 && (
            <>
              <Character type="architect" x={width * 0.75} y={height / 2 + 50} startFrame={510} />

              <Dialogue
                speaker="architect"
                text="See the difference? Agents aren't just smart - they're capable. They decide which tools to use and can complete multi-step tasks without constant guidance!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={840}
                maxWidth={580}
              />
            </>
          )}

          {/* Chatbot (Passive) */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 140,
              width: 480,
              opacity: frame >= 540 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20}}>
              💬 Traditional Chatbot (Passive)
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '2px solid #64748b',
                fontSize: 24,
                color: '#cbd5e1',
                lineHeight: 2,
              }}
            >
              <div style={{color: '#22d3ee', marginBottom: 15}}>
                <strong>User:</strong> "What's the weather in Paris?"
              </div>
              <div style={{color: '#94a3b8', marginBottom: 20}}>
                <strong>Chatbot:</strong> "I don't have access to real-time weather. Please check a weather website."
              </div>

              <div style={{color: '#22d3ee', marginBottom: 15}}>
                <strong>User:</strong> "Find bugs in my code"
              </div>
              <div style={{color: '#94a3b8', marginBottom: 30}}>
                <strong>Chatbot:</strong> "Please paste your code and I'll review it."
              </div>

              <div style={{color: '#ef4444', fontSize: 22, fontStyle: 'italic'}}>
                ❌ Can only respond with text<br />
                ❌ Can't take action<br />
                ❌ Can't access external data
              </div>
            </div>
          </div>

          {/* Agent (Active) */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 140,
              width: 480,
              opacity: frame >= 720 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 20}}>
              🤖 AI Agent (Active)
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '2px solid #10b981',
                fontSize: 24,
                color: '#cbd5e1',
                lineHeight: 2,
              }}
            >
              <div style={{color: '#22d3ee', marginBottom: 15}}>
                <strong>User:</strong> "What's the weather in Paris?"
              </div>
              <div style={{color: '#10b981', marginBottom: 5}}>
                <strong>Agent:</strong> [Calls weather API tool]
              </div>
              <div style={{color: '#94a3b8', marginBottom: 20}}>
                "It's 18°C and partly cloudy in Paris right now."
              </div>

              <div style={{color: '#22d3ee', marginBottom: 15}}>
                <strong>User:</strong> "Find bugs in my code"
              </div>
              <div style={{color: '#10b981', marginBottom: 5}}>
                <strong>Agent:</strong> [Reads files, runs linter]
              </div>
              <div style={{color: '#94a3b8', marginBottom: 30}}>
                "Found 3 issues: undefined variable on line 42..."
              </div>

              <div style={{color: '#10b981', fontSize: 22, fontStyle: 'italic'}}>
                ✅ Uses tools to get data<br />
                ✅ Takes actions autonomously<br />
                ✅ Solves problems end-to-end
              </div>
            </div>
          </div>


          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 3: The Agent Loop (36-60s / 1080-1800 frames) */}
      {frame >= 1080 && frame < 1800 && (
        <>
          <Title text="The Agent Loop: Think-Act-Observe" x={width / 2 - 500} y={50} color="#c084fc" startFrame={1080} />

          {frame < 1590 && (
            <>
              <Character type="developer" x={width * 0.25} y={height / 2 + 80} startFrame={1110} />

              <Dialogue
                speaker="developer"
                text="So agents can loop through this cycle autonomously, using results to inform next steps? That's like a self-driving research assistant!"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1500}
                maxWidth={650}
              />
            </>
          )}

          {/* Agent Loop Diagram */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 150,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              🔄 The Autonomous Agent Loop
            </div>

            {/* Circular flow */}
            <div style={{position: 'relative', width: 600, height: 450}}>
              {/* 1. Think */}
              <Box
                text="1️⃣ THINK"
                x={220}
                y={0}
                width={160}
                height={80}
                color="#7c3aed"
                startFrame={1140}
                fontSize={20}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 145,
                  top: 85,
                  fontSize: 22,
                  color: '#cbd5e1',
                  width: 310,
                  textAlign: 'center',
                  opacity: frame >= 1170 ? 1 : 0,
                }}
              >
                Analyze task, plan approach
              </div>

              <Arrow x1={300} y1={80} x2={460} y2={160} color="#22d3ee" startFrame={1200} />

              {/* 2. Act */}
              <Box
                text="2️⃣ ACT"
                x={440}
                y={180}
                width={160}
                height={80}
                color="#10b981"
                startFrame={1230}
                fontSize={20}
              />
              <div
                style={{
                  position: 'absolute',
                  right: -60,
                  top: 210,
                  fontSize: 22,
                  color: '#cbd5e1',
                  width: 200,
                  opacity: frame >= 1260 ? 1 : 0,
                }}
              >
                Call tools, execute actions
              </div>

              <Arrow x1={520} y1={260} x2={380} y2={340} color="#22d3ee" startFrame={1290} />

              {/* 3. Observe */}
              <Box
                text="3️⃣ OBSERVE"
                x={220}
                y={350}
                width={160}
                height={80}
                color="#fbbf24"
                startFrame={1320}
                fontSize={20}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 145,
                  top: 435,
                  fontSize: 22,
                  color: '#cbd5e1',
                  width: 310,
                  textAlign: 'center',
                  opacity: frame >= 1350 ? 1 : 0,
                }}
              >
                Review results, learn outcome
              </div>

              <Arrow x1={220} y1={390} x2={80} y2={260} color="#22d3ee" startFrame={1380} />

              {/* 4. Repeat */}
              <Box
                text="4️⃣ REPEAT?"
                x={0}
                y={180}
                width={160}
                height={80}
                color="#c084fc"
                startFrame={1410}
                fontSize={20}
              />
              <div
                style={{
                  position: 'absolute',
                  left: -80,
                  top: 210,
                  fontSize: 22,
                  color: '#cbd5e1',
                  width: 200,
                  opacity: frame >= 1440 ? 1 : 0,
                }}
              >
                Task done? Or iterate?
              </div>

              <Arrow x1={80} y1={180} x2={220} y2={80} color="#22d3ee" startFrame={1470} label="Continue" />
            </div>
          </div>

          {/* Example walkthrough */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 160,
              width: 460,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #c084fc',
              opacity: frame >= 1530 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 28, color: '#c084fc', fontWeight: 'bold', marginBottom: 15}}>
              📝 Example: "Research competitors"
            </div>
            <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 2}}>
              <div style={{opacity: frame >= 1560 ? 1 : 0}}>
                <strong style={{color: '#7c3aed'}}>1. THINK:</strong><br />
                "I need to search web, extract info, summarize"<br /><br />
              </div>

              <div style={{opacity: frame >= 1620 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>2. ACT:</strong><br />
                Calls web_search("competitor products")<br /><br />
              </div>

              <div style={{opacity: frame >= 1680 ? 1 : 0}}>
                <strong style={{color: '#fbbf24'}}>3. OBSERVE:</strong><br />
                Got 10 results, need more details on top 3<br /><br />
              </div>

              <div style={{opacity: frame >= 1740 ? 1 : 0}}>
                <strong style={{color: '#c084fc'}}>4. REPEAT:</strong><br />
                Calls web_fetch() for each, then summarizes
              </div>
            </div>
          </div>


          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 4: Tool Calling & Real Examples (60-82s / 1800-2460 frames) */}
      {frame >= 1800 && frame < 2460 && (
        <>
          <Title text="Tool Calling in Action" x={width / 2 - 350} y={50} color="#c084fc" startFrame={1800} />

          {frame < 2250 && (
            <>
              <Character type="architect" x={width * 0.75} y={height / 2 - 50} startFrame={1830} />

              <Dialogue
                speaker="architect"
                text="Tool calling transforms LLMs from passive assistants to active agents. They become part of your automation layer, integrating with APIs, databases, and external services!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={2160}
                maxWidth={580}
              />
            </>
          )}

          {/* How Tool Calling Works */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 140,
              width: 520,
              opacity: frame >= 1860 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20}}>
              🛠️ How Tool Calling Works
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                fontSize: 22,
                color: '#cbd5e1',
                lineHeight: 2,
              }}
            >
              <div style={{opacity: frame >= 1890 ? 1 : 0, marginBottom: 20}}>
                <strong style={{color: '#22d3ee'}}>1. Tool Definition:</strong><br />
                <code style={{fontSize: 20, color: '#fbbf24'}}>
                  {`{
  "name": "web_search",
  "description": "Search the web",
  "parameters": {"query": "string"}
}`}
                </code>
              </div>

              <div style={{opacity: frame >= 1980 ? 1 : 0, marginBottom: 20}}>
                <strong style={{color: '#22d3ee'}}>2. LLM Decides to Use It:</strong><br />
                <span style={{color: '#94a3b8'}}>
                  "I need current info, I'll call web_search"
                </span>
              </div>

              <div style={{opacity: frame >= 2070 ? 1 : 0, marginBottom: 20}}>
                <strong style={{color: '#22d3ee'}}>3. System Executes Tool:</strong><br />
                <code style={{fontSize: 20, color: '#10b981'}}>
                  web_search("latest AI trends")
                </code>
              </div>

              <div style={{opacity: frame >= 2160 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>4. Results Back to LLM:</strong><br />
                <span style={{color: '#94a3b8'}}>
                  LLM gets data, integrates into response
                </span>
              </div>
            </div>
          </div>

          {/* Real-World Examples */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 140,
              width: 480,
              opacity: frame >= 2250 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 20}}>
              🌍 Real-World Agents
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                fontSize: 24,
                color: '#cbd5e1',
                lineHeight: 2,
              }}
            >
              <div style={{marginBottom: 15}}>
                <strong style={{color: '#c084fc'}}>💻 Code Assistants:</strong><br />
                Read files, write code, run tests, debug<br />
                <span style={{fontSize: 20, color: '#94a3b8'}}>Ex: Claude Code, GitHub Copilot Workspace</span>
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#c084fc'}}>🔬 Research Agents:</strong><br />
                Search web, read papers, synthesize info<br />
                <span style={{fontSize: 20, color: '#94a3b8'}}>Ex: Perplexity, GPT Researcher</span>
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#c084fc'}}>🤝 Customer Support:</strong><br />
                Check orders, update tickets, escalate issues<br />
                <span style={{fontSize: 20, color: '#94a3b8'}}>Ex: Intercom AI, Zendesk bots</span>
              </div>

              <div>
                <strong style={{color: '#c084fc'}}>⚙️ Workflow Automation:</strong><br />
                Trigger APIs, process data, send notifications<br />
                <span style={{fontSize: 20, color: '#94a3b8'}}>Ex: Zapier AI, n8n with LLMs</span>
              </div>
            </div>
          </div>


          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Created by Amit Mishra | Powered by Claude Code
          </div>
        </>
      )}

      {/* Scene 5: Key Takeaways (82-100s / 2460-3000 frames) */}
      {frame >= 2460 && frame < 3000 && (
        <>
          <Title text="Key Takeaways" x={width / 2 - 220} y={50} color="#c084fc" startFrame={2460} />

          {frame < 2820 && (
            <>
              <Character type="developer" x={width * 0.25} y={height / 2 - 100} startFrame={2490} />
              <Character type="architect" x={width * 0.75} y={height / 2 - 100} startFrame={2490} />

              <Dialogue
                speaker="developer"
                text="Agents are LLMs with superpowers! Give them tools and they can automate complex workflows. This is the future of software!"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={2580}
                maxWidth={650}
              />

              <Dialogue
                speaker="architect"
                text="Exactly! And to make tool integration seamless and secure, there's a new standard called MCP. It's like REST APIs for AI agents. Let's explore it next!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={2730}
                maxWidth={580}
              />
            </>
          )}

          {/* Takeaways */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 180,
              width: 1000,
              fontSize: 28,
              color: '#cbd5e1',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 30,
                borderRadius: 12,
                border: '2px solid #7c3aed',
                opacity: frame >= 2550 ? 1 : 0,
                lineHeight: 2,
              }}
            >
              <div style={{fontSize: 24, color: '#c084fc', fontWeight: 'bold', marginBottom: 20}}>
                📚 What We Learned
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>1. Chatbot → Agent:</strong>{' '}
                From passive text to active problem-solving
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>2. The Agent Loop:</strong>{' '}
                Think → Act (use tools) → Observe → Repeat
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>3. Tool Calling:</strong>{' '}
                LLMs decide when/how to use external functions and APIs
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>4. Real Impact:</strong>{' '}
                Code assistants, research, support, automation
              </div>

              <div style={{marginTop: 25, fontSize: 24, color: '#22d3ee', fontStyle: 'italic'}}>
                🎯 Next: Model Context Protocol (MCP) - The standard for connecting AI to your data & tools!
              </div>
            </div>
          </div>


          {/* Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 30,
              fontSize: 22,
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
