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

export const AIInAction: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: User Types Request (0-20s / 0-600 frames) */}
      {frame >= 0 && frame < 600 && (
        <>
          <Title text="AI in Action: End-to-End Example" x={width / 2 - 500} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Sarah, we've learned about LLMs, agents, and MCP. But what actually happens when I type 'create a linkedlist implementation in java' in Claude?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Perfect question! Let me show you the ENTIRE journey - from your keystrokes to code on disk. You'll see how every concept we learned works together in real-time. Watch!"
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={580}
          />

          {/* User Input Visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 250,
              opacity: frame >= 300 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 22, color: '#22d3ee', fontWeight: 'bold', marginBottom: 20}}>
              👤 User Input
            </div>
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '2px solid #22d3ee',
                width: 850,
                fontSize: 18,
                color: '#cbd5e1',
                fontFamily: 'monospace',
              }}
            >
              <div style={{color: '#22d3ee', marginBottom: 10}}>Claude Desktop / Web Interface:</div>
              <div style={{backgroundColor: '#0f172a', padding: 15, borderRadius: 8, color: '#10b981'}}>
                <span style={{opacity: frame >= 330 ? 1 : 0}}>create</span>
                <span style={{opacity: frame >= 360 ? 1 : 0}}> a</span>
                <span style={{opacity: frame >= 390 ? 1 : 0}}> linkedlist</span>
                <span style={{opacity: frame >= 420 ? 1 : 0}}> implementation</span>
                <span style={{opacity: frame >= 450 ? 1 : 0}}> in</span>
                <span style={{opacity: frame >= 480 ? 1 : 0}}> java</span>
                <span style={{opacity: frame >= 510 ? 1 : 0, color: '#22d3ee', animation: 'blink 1s infinite'}}>|</span>
              </div>
            </div>
          </div>

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

      {/* Scene 2: LLM Processing (20-45s / 600-1350 frames) */}
      {frame >= 600 && frame < 1350 && (
        <>
          <Title text="Step 1: LLM Understanding" x={width / 2 - 370} y={50} color="#c084fc" startFrame={600} />

          <Character type="architect" x={width - 300} y={height / 2 + 100} startFrame={630} />

          {/* Tokenization */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 140,
              opacity: frame >= 660 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 15}}>
              🔤 Tokenization
            </div>
            <div style={{position: 'relative', height: 70, marginBottom: 20}}>
              <Box text="create" x={0} y={0} width={90} height={60} color="#0ea5e9" startFrame={690} fontSize={14} />
              <Box text="linked" x={100} y={0} width={90} height={60} color="#0ea5e9" startFrame={710} fontSize={14} />
              <Box text="list" x={200} y={0} width={70} height={60} color="#0ea5e9" startFrame={730} fontSize={14} />
              <Box text="in" x={280} y={0} width={50} height={60} color="#0ea5e9" startFrame={750} fontSize={14} />
              <Box text="java" x={340} y={0} width={70} height={60} color="#0ea5e9" startFrame={770} fontSize={14} />
            </div>
            <div style={{fontSize: 14, color: '#cbd5e1', marginTop: 15}}>
              Text → Tokens (numerical representations)
            </div>
          </div>

          {/* Transformer Processing */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 320,
              width: 850,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #7c3aed',
              opacity: frame >= 840 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#c084fc', fontWeight: 'bold', marginBottom: 15}}>
              🧠 Transformer Neural Network
            </div>
            <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.9}}>
              <div style={{opacity: frame >= 870 ? 1 : 0}}>
                <strong style={{color: '#fbbf24'}}>Self-Attention:</strong> Understanding relationships<br/>
                <span style={{fontSize: 13, color: '#94a3b8'}}>
                  "create" → coding task | "linkedlist" → data structure | "java" → programming language
                </span>
              </div>
              <div style={{marginTop: 15, opacity: frame >= 960 ? 1 : 0}}>
                <strong style={{color: '#fbbf24'}}>Deep Layers (96 layers):</strong> Building understanding<br/>
                <span style={{fontSize: 13, color: '#94a3b8'}}>
                  Layer 1-30: Syntax understanding | Layer 31-60: Semantic meaning | Layer 61-96: Intent & planning
                </span>
              </div>
              <div style={{marginTop: 15, opacity: frame >= 1050 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>Output Understanding:</strong><br/>
                <span style={{fontSize: 13, color: '#22d3ee'}}>
                  ✓ Task: Generate code<br/>
                  ✓ Type: LinkedList data structure<br/>
                  ✓ Language: Java<br/>
                  ✓ Deliverable: Full implementation with Node class
                </span>
              </div>
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="The LLM tokenizes your input, runs it through 96 transformer layers with self-attention, and understands: 'User wants a Java LinkedList implementation.' Now comes the agent part!"
            x={width - 750}
            y={height - 280}
            startFrame={1140}
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

      {/* Scene 3: Agentic Decision Making (45-70s / 1350-2100 frames) */}
      {frame >= 1350 && frame < 2100 && (
        <>
          <Title text="Step 2: Agentic AI - Think & Plan" x={width / 2 - 450} y={50} color="#c084fc" startFrame={1350} />

          <Character type="developer" x={200} y={height / 2 + 100} startFrame={1380} />

          {/* The Agent Loop */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 150,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              🤖 Agent Decision Making
            </div>

            {/* Think Phase */}
            <div
              style={{
                backgroundColor: '#581c87',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                opacity: frame >= 1410 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                1️⃣ THINK
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.8}}>
                <div style={{opacity: frame >= 1440 ? 1 : 0}}>
                  💭 "User wants LinkedList in Java"<br/>
                </div>
                <div style={{opacity: frame >= 1500 ? 1 : 0}}>
                  💭 "I need to create a .java file"<br/>
                </div>
                <div style={{opacity: frame >= 1560 ? 1 : 0}}>
                  💭 "I should use file write tool via MCP"
                </div>
              </div>
            </div>

            {/* Plan Phase */}
            <div
              style={{
                backgroundColor: '#1e40af',
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
                opacity: frame >= 1620 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#60a5fa', fontWeight: 'bold', marginBottom: 10}}>
                2️⃣ PLAN
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.8}}>
                <div style={{opacity: frame >= 1650 ? 1 : 0}}>
                  📋 Step 1: Generate LinkedList code<br/>
                </div>
                <div style={{opacity: frame >= 1710 ? 1 : 0}}>
                  📋 Step 2: Create file: LinkedList.java<br/>
                </div>
                <div style={{opacity: frame >= 1770 ? 1 : 0}}>
                  📋 Step 3: Write code to file using MCP<br/>
                </div>
                <div style={{opacity: frame >= 1830 ? 1 : 0}}>
                  📋 Step 4: Confirm success to user
                </div>
              </div>
            </div>

            {/* Decision */}
            <div
              style={{
                backgroundColor: '#065f46',
                padding: 20,
                borderRadius: 12,
                opacity: frame >= 1890 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 18, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
                ✅ DECISION
              </div>
              <div style={{fontSize: 14, color: '#cbd5e1'}}>
                Tool to use: <strong style={{color: '#22d3ee'}}>write_file()</strong> via MCP Filesystem Server
              </div>
            </div>
          </div>

          {/* Code Generation Preview */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 170,
              width: 420,
              backgroundColor: '#1e293b',
              padding: 20,
              borderRadius: 12,
              border: '2px solid #10b981',
              opacity: frame >= 1950 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 16, color: '#10b981', fontWeight: 'bold', marginBottom: 10}}>
              💻 Generated Code (in memory)
            </div>
            <pre style={{fontSize: 11, color: '#cbd5e1', lineHeight: 1.5, margin: 0, fontFamily: 'monospace'}}>
{`public class LinkedList {
  private Node head;

  class Node {
    int data;
    Node next;

    Node(int d) {
      data = d;
      next = null;
    }
  }

  // Methods: add, remove...
}`}
            </pre>
          </div>

          <Dialogue
            speaker="developer"
            text="So the agent thinks through the problem, plans the steps, generates the code, and decides to use a file-writing tool. That's the 'agentic' part - autonomous decision making!"
            x={100}
            y={height - 280}
            startFrame={1920}
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

      {/* Scene 4: MCP Tool Calling (70-95s / 2100-2850 frames) */}
      {frame >= 2100 && frame < 2850 && (
        <>
          <Title text="Step 3: MCP - Connecting to Filesystem" x={width / 2 - 530} y={50} color="#c084fc" startFrame={2100} />

          <Character type="architect" x={width - 300} y={height / 2 + 80} startFrame={2130} />

          {/* MCP Flow */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 150,
            }}
          >
            <div style={{fontSize: 22, color: '#22d3ee', fontWeight: 'bold', marginBottom: 25}}>
              🔌 Model Context Protocol in Action
            </div>

            {/* Step by step flow */}
            <div style={{position: 'relative', height: 500}}>
              {/* 1. Claude makes tool call */}
              <div
                style={{
                  position: 'relative',
                  marginBottom: 25,
                  opacity: frame >= 2160 ? 1 : 0,
                }}
              >
                <Box text="Claude (LLM)" x={0} y={0} width={180} height={70} color="#7c3aed" startFrame={2160} fontSize={16} />
                <div style={{position: 'absolute', left: 190, top: 20, fontSize: 14, color: '#cbd5e1', width: 350}}>
                  Calls: <code style={{color: '#fbbf24'}}>write_file("LinkedList.java", code)</code>
                </div>
              </div>

              {/* Arrow */}
              <div style={{marginTop: 90, marginBottom: 20, opacity: frame >= 2250 ? 1 : 0}}>
                <Arrow x1={90} y1={0} x2={90} y2={60} color="#22d3ee" startFrame={2250} />
              </div>

              {/* 2. MCP Client */}
              <div
                style={{
                  position: 'relative',
                  marginBottom: 25,
                  marginTop: 70,
                  opacity: frame >= 2310 ? 1 : 0,
                }}
              >
                <Box text="MCP Client" x={0} y={0} width={180} height={70} color="#0ea5e9" startFrame={2310} fontSize={16} />
                <div style={{position: 'absolute', left: 190, top: 20, fontSize: 14, color: '#cbd5e1', width: 350}}>
                  Routes request to MCP Filesystem Server
                </div>
              </div>

              {/* Arrow */}
              <div style={{marginTop: 160, marginBottom: 20, opacity: frame >= 2400 ? 1 : 0}}>
                <Arrow x1={90} y1={0} x2={90} y2={60} color="#22d3ee" startFrame={2400} />
              </div>

              {/* 3. MCP Server */}
              <div
                style={{
                  position: 'relative',
                  marginBottom: 25,
                  marginTop: 140,
                  opacity: frame >= 2460 ? 1 : 0,
                }}
              >
                <Box text="MCP Filesystem" x={0} y={0} width={180} height={70} color="#22d3ee" startFrame={2460} fontSize={15} />
                <div style={{position: 'absolute', left: 190, top: 15, fontSize: 14, color: '#cbd5e1', width: 350}}>
                  Authenticates, validates permissions,<br/>
                  writes file to disk
                </div>
              </div>

              {/* Arrow */}
              <div style={{marginTop: 230, marginBottom: 20, opacity: frame >= 2550 ? 1 : 0}}>
                <Arrow x1={90} y1={0} x2={90} y2={60} color="#10b981" startFrame={2550} />
              </div>

              {/* 4. File on Disk */}
              <div
                style={{
                  position: 'relative',
                  marginTop: 220,
                  opacity: frame >= 2610 ? 1 : 0,
                }}
              >
                <Box text="💾 LinkedList.java" x={0} y={0} width={200} height={70} color="#10b981" startFrame={2610} fontSize={16} />
                <div style={{position: 'absolute', left: 210, top: 25, fontSize: 14, color: '#10b981'}}>
                  ✅ File created on disk!
                </div>
              </div>
            </div>
          </div>

          {/* Security & Benefits */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 170,
              width: 480,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #22d3ee',
              opacity: frame >= 2670 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#22d3ee', fontWeight: 'bold', marginBottom: 15}}>
              🔒 Why MCP?
            </div>
            <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 2}}>
              <strong style={{color: '#10b981'}}>Security:</strong><br/>
              • Claude never sees your file paths<br/>
              • MCP Server handles permissions<br/>
              • Sandboxed execution<br/><br/>

              <strong style={{color: '#10b981'}}>Standardization:</strong><br/>
              • Same protocol for all tools<br/>
              • Works with any LLM (Claude, GPT, etc.)<br/>
              • Reusable MCP servers<br/><br/>

              <strong style={{color: '#10b981'}}>Composability:</strong><br/>
              • Combine filesystem + database + APIs<br/>
              • Build complex workflows
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="MCP is the secure bridge! Claude doesn't directly access your filesystem - the MCP server handles authentication, permissions, and actual I/O. Clean separation of concerns!"
            x={width - 750}
            y={height - 280}
            startFrame={2700}
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

      {/* Scene 5: Complete Flow & Takeaways (95-120s / 2850-3600 frames) */}
      {frame >= 2850 && frame < 3600 && (
        <>
          <Title text="The Complete Picture" x={width / 2 - 300} y={50} color="#c084fc" startFrame={2850} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2880} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2910} />

          {/* Complete Flow Diagram */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 150,
              width: 1040,
              opacity: frame >= 2940 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
              🎯 Everything Working Together
            </div>

            <div
              style={{
                backgroundColor: '#1e293b',
                padding: 30,
                borderRadius: 12,
                border: '2px solid #7c3aed',
                lineHeight: 2.2,
                fontSize: 16,
                color: '#cbd5e1',
              }}
            >
              <div style={{opacity: frame >= 2970 ? 1 : 0}}>
                <strong style={{color: '#22d3ee'}}>1. User Input</strong> → "create a linkedlist implementation in java"
              </div>

              <div style={{opacity: frame >= 3030 ? 1 : 0, marginTop: 10}}>
                <strong style={{color: '#c084fc'}}>2. LLM Processing</strong> → Tokenization → Transformer (96 layers) → Understands intent
              </div>

              <div style={{opacity: frame >= 3090 ? 1 : 0, marginTop: 10}}>
                <strong style={{color: '#fbbf24'}}>3. Agentic AI</strong> → Thinks & Plans → Decides to use write_file tool
              </div>

              <div style={{opacity: frame >= 3150 ? 1 : 0, marginTop: 10}}>
                <strong style={{color: '#10b981'}}>4. MCP</strong> → Routes to Filesystem Server → Securely writes file
              </div>

              <div style={{opacity: frame >= 3210 ? 1 : 0, marginTop: 10}}>
                <strong style={{color: '#10b981'}}>5. Result</strong> → LinkedList.java created on disk → User gets confirmation
              </div>

              <div
                style={{
                  marginTop: 25,
                  padding: 20,
                  backgroundColor: '#0f172a',
                  borderRadius: 8,
                  border: '1px solid #7c3aed',
                  opacity: frame >= 3270 ? 1 : 0,
                }}
              >
                <div style={{fontSize: 18, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                  ⏱️ All of this happens in ~2-5 seconds!
                </div>
                <div style={{fontSize: 14, color: '#94a3b8'}}>
                  From your keystrokes → Neural network inference → Agent planning → Tool execution → File on disk
                </div>
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="Wow! Every concept we learned - LLMs, deep learning, agents, tool calling, MCP - they all work together seamlessly. This is what modern AI looks like in production!"
            x={100}
            y={height - 280}
            startFrame={3300}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! You now understand the full AI stack. From theory to practice. You're ready to build and architect AI-powered systems. Go create something amazing!"
            x={width - 750}
            y={height - 280}
            startFrame={3420}
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
