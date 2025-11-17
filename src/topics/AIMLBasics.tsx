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

export const AIMLBasics: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Introduction (0-15s / 0-450 frames) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="AI & Machine Learning Basics" x={width / 2 - 400} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Sarah, AI is everywhere now! But I'm confused - what's the difference between AI, Machine Learning, and Deep Learning? Are they the same thing?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Great question! They're related but different. Think of them as nested concepts - AI is the biggest umbrella, ML is a subset of AI, and Deep Learning is a subset of ML. Let me show you the hierarchy!"
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

      {/* Scene 2: The AI Hierarchy (15-33s / 450-990 frames) */}
      {frame >= 450 && frame < 990 && (
        <>
          <Title text="The AI Hierarchy" x={width / 2 - 250} y={50} color="#c084fc" startFrame={450} />

          <Character type="architect" x={width - 300} y={height / 2 - 50} startFrame={480} />

          {/* Nested boxes showing hierarchy - FIXED LAYOUT */}
          {/* Outer AI box */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 150,
              width: 1000,
              height: 600,
              backgroundColor: '#581c8720',
              borderRadius: '8px',
              opacity: frame >= 510 ? 1 : 0,
              border: '2px solid #581c87',
            }}
          >
            <div style={{fontSize: 24, fontWeight: 'bold', color: '#c084fc', padding: 15}}>
              🤖 Artificial Intelligence (AI)
            </div>
            <div style={{fontSize: 22, color: '#cbd5e1', paddingLeft: 20, paddingRight: 20, marginTop: 5, opacity: frame >= 540 ? 1 : 0}}>
              Any system that mimics human intelligence:<br/>
              • Rule-based expert systems<br/>
              • Game playing (Chess, Go)<br/>
              • Robotics, Computer Vision, NLP
            </div>
          </div>

          {/* ML box */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 300,
              width: 900,
              height: 380,
              backgroundColor: '#7c3aed40',
              borderRadius: '8px',
              opacity: frame >= 600 ? 1 : 0,
              border: '2px solid #7c3aed',
            }}
          >
            <div style={{fontSize: 22, fontWeight: 'bold', color: '#a78bfa', padding: 15}}>
              🧠 Machine Learning (ML)
            </div>
            <div style={{fontSize: 22, color: '#cbd5e1', paddingLeft: 20, paddingRight: 20, marginTop: 5, opacity: frame >= 630 ? 1 : 0}}>
              Systems that <strong>learn from data</strong> without explicit programming:<br/>
              • Linear Regression, Decision Trees<br/>
              • Support Vector Machines, Random Forests
            </div>
          </div>

          {/* DL box */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 400,
              top: 450,
              width: 800,
              height: 180,
              backgroundColor: '#7c3aed80',
              borderRadius: '8px',
              opacity: frame >= 690 ? 1 : 0,
              border: '2px solid #a78bfa',
            }}
          >
            <div style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', padding: 15}}>
              🔥 Deep Learning (DL)
            </div>
            <div style={{fontSize: 22, color: '#ffffff', paddingLeft: 20, paddingRight: 20, marginTop: 5, opacity: frame >= 720 ? 1 : 0}}>
              ML using <strong>multi-layer neural networks</strong>:<br/>
              • Image recognition, Language models (GPT, Claude)<br/>
              • Speech recognition, Self-driving cars
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="See the pattern? Each layer is more specialized. AI is the goal, ML is the approach, and Deep Learning is the powerful technique that's driving today's AI revolution!"
            x={width - 750}
            y={height - 280}
            startFrame={780}
            maxWidth={580}
          />

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

      {/* Scene 3: Traditional vs ML Programming (33-51s / 990-1530 frames) */}
      {frame >= 990 && frame < 1530 && (
        <>
          <Title text="Traditional vs ML Programming" x={width / 2 - 450} y={50} color="#c084fc" startFrame={990} />

          <Character type="developer" x={200} y={height / 2 - 50} startFrame={1020} />

          {/* Traditional Programming */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 480,
              top: 150,
              opacity: frame >= 1050 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20}}>
              ⚙️ Traditional Programming
            </div>
            <Box text="Rules" x={20} y={0} width={120} height={80} color="#0ea5e9" startFrame={1080} fontSize={18} />
            <Arrow x1={140} y1={40} x2={200} y2={40} color="#ffffff" startFrame={1110} />
            <Box text="Program" x={200} y={0} width={150} height={80} color="#8b5cf6" startFrame={1110} fontSize={18} />
            <Arrow x1={350} y1={40} x2={410} y2={40} color="#ffffff" startFrame={1140} />
            <Box text="Data" x={410} y={0} width={120} height={80} color="#0ea5e9" startFrame={1140} fontSize={18} />
            <Arrow x1={530} y1={40} x2={590} y2={40} color="#ffffff" startFrame={1170} />
            <Box text="Output" x={590} y={0} width={140} height={80} color="#10b981" startFrame={1170} fontSize={18} />

            <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 100, lineHeight: 1.8}}>
              <strong>Example:</strong> Email Spam Filter<br/>
              <code style={{color: '#fbbf24', fontSize: 20}}>
                if (email.contains("viagra")) spam = true;<br/>
                if (email.contains("winner")) spam = true;<br/>
                if (email.allCaps) spam = true;
              </code>
              <div style={{color: '#ef4444', marginTop: 10}}>
                ❌ Rigid rules, hard to maintain
              </div>
            </div>
          </div>

          {/* Machine Learning */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 + 50,
              top: 150,
              opacity: frame >= 1260 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#c084fc', fontWeight: 'bold', marginBottom: 20}}>
              🧠 Machine Learning
            </div>
            <Box text="Data" x={20} y={0} width={120} height={80} color="#0ea5e9" startFrame={1290} fontSize={18} />
            <Arrow x1={140} y1={40} x2={200} y2={40} color="#ffffff" startFrame={1320} />
            <Box text="Learning" x={200} y={0} width={150} height={80} color="#c084fc" startFrame={1320} fontSize={18} />
            <Arrow x1={350} y1={40} x2={410} y2={40} color="#ffffff" startFrame={1350} />
            <Box text="Model" x={410} y={0} width={140} height={80} color="#10b981" startFrame={1350} fontSize={18} />

            <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 100, lineHeight: 1.8}}>
              <strong>Example:</strong> Email Spam Filter<br/>
              <div style={{color: '#22d3ee', fontSize: 20, marginTop: 5}}>
                Feed 1M emails (spam + not spam)<br/>
                Model learns patterns automatically<br/>
                Adapts to new spam techniques
              </div>
              <div style={{color: '#10b981', marginTop: 10}}>
                ✅ Learns from data, improves over time
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="Ah! So instead of writing explicit rules, we let the machine figure out the patterns from examples. That's why it's called 'learning'!"
            x={100}
            y={height - 280}
            startFrame={1380}
            maxWidth={650}
          />

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

      {/* Scene 4: Where AI Fits in Modern Systems (51-69s / 1530-2070 frames) - FIXED LAYOUT */}
      {frame >= 1530 && frame < 2070 && (
        <>
          <Title text="AI in Modern Systems" x={width / 2 - 350} y={50} color="#c084fc" startFrame={1530} />

          <Character type="architect" x={width - 300} y={height / 2 - 50} startFrame={1560} />

          {/* Use cases - FIXED to not use flexbox with absolute positioned boxes */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 500,
              top: 150,
              fontSize: 28,
              color: '#cbd5e1',
            }}
          >
            <div style={{fontSize: 22, color: '#c084fc', fontWeight: 'bold', marginBottom: 30}}>
              Real-World Use Cases
            </div>

            {/* Recommendation Engine */}
            <div
              style={{
                width: 420,
                padding: 15,
                backgroundColor: '#7c3aed',
                borderRadius: 8,
                marginBottom: 20,
                opacity: frame >= 1590 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 20, fontWeight: 'bold', marginBottom: 8}}>
                🎯 Recommendation Engine
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1'}}>
                Netflix, YouTube, Amazon product suggestions<br/>
                ML Model predicts what you'll like based on behavior
              </div>
            </div>

            {/* Search & Ranking */}
            <div
              style={{
                width: 420,
                padding: 15,
                backgroundColor: '#7c3aed',
                borderRadius: 8,
                marginBottom: 20,
                opacity: frame >= 1680 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 20, fontWeight: 'bold', marginBottom: 8}}>
                🔍 Search & Ranking
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1'}}>
                Google Search, LinkedIn job matches<br/>
                ML ranks results by relevance, not just keywords
              </div>
            </div>

            {/* Chatbots & Assistants */}
            <div
              style={{
                width: 420,
                padding: 15,
                backgroundColor: '#7c3aed',
                borderRadius: 8,
                marginBottom: 20,
                opacity: frame >= 1770 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 20, fontWeight: 'bold', marginBottom: 8}}>
                💬 Chatbots & Assistants
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1'}}>
                Customer support, Siri, Alexa, ChatGPT<br/>
                Deep Learning (LLMs) understand & generate text
              </div>
            </div>

            {/* Fraud Detection */}
            <div
              style={{
                width: 420,
                padding: 15,
                backgroundColor: '#7c3aed',
                borderRadius: 8,
                opacity: frame >= 1860 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 20, fontWeight: 'bold', marginBottom: 8}}>
                🛡️ Fraud Detection
              </div>
              <div style={{fontSize: 22, color: '#cbd5e1'}}>
                Banking, credit cards, payment systems<br/>
                ML detects anomalous patterns in real-time
              </div>
            </div>
          </div>

          {/* System Design Connection */}
          <div
            style={{
              position: 'absolute',
              right: 100,
              top: 180,
              width: 450,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #7c3aed',
              opacity: frame >= 1950 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 15}}>
              🏗️ System Design Perspective
            </div>
            <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.8}}>
              AI models are just another service:<br/><br/>

              • <strong style={{color: '#22d3ee'}}>Model Serving</strong>: Deploy like APIs<br/>
              • <strong style={{color: '#22d3ee'}}>Latency</strong>: Inference time matters<br/>
              • <strong style={{color: '#22d3ee'}}>Scaling</strong>: Load balance requests<br/>
              • <strong style={{color: '#22d3ee'}}>Caching</strong>: Cache predictions<br/>
              • <strong style={{color: '#22d3ee'}}>Versioning</strong>: Model updates<br/>
              • <strong style={{color: '#22d3ee'}}>Monitoring</strong>: Accuracy drift
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="AI isn't magic - it's a component in your system architecture. You apply the same engineering principles: latency, scaling, monitoring. The difference is the service is a trained model, not hand-coded logic!"
            x={width - 750}
            y={height - 280}
            startFrame={1860}
            maxWidth={580}
          />

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

      {/* Scene 5: Key Takeaways (69-90s / 2070-2700 frames) */}
      {frame >= 2070 && frame < 2700 && (
        <>
          <Title text="Key Takeaways" x={width / 2 - 220} y={50} color="#c084fc" startFrame={2070} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2100} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2130} />

          {/* Takeaways */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 180,
              width: 900,
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
                opacity: frame >= 2160 ? 1 : 0,
                lineHeight: 2,
              }}
            >
              <div style={{fontSize: 24, color: '#c084fc', fontWeight: 'bold', marginBottom: 20}}>
                📚 What We Learned
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>1. The Hierarchy:</strong>{' '}
                AI ⊃ Machine Learning ⊃ Deep Learning
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>2. The Paradigm Shift:</strong>{' '}
                Rules-based → Data-driven learning
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>3. Where It Fits:</strong>{' '}
                Recommendations, search, chatbots, fraud detection
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>4. System Design:</strong>{' '}
                Treat ML models like any service - latency, scaling, caching matter
              </div>

              <div style={{marginTop: 25, fontSize: 24, color: '#22d3ee', fontStyle: 'italic'}}>
                🎯 Next: We'll dive into Neural Networks & Deep Learning - the engine behind modern AI!
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="This makes so much sense! AI isn't some mysterious black box - it's data-driven software that learns patterns. And we treat it like any distributed service."
            x={100}
            y={height - 280}
            startFrame={2220}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! Now you're thinking like a modern systems architect. In our next video, we'll explore how neural networks actually work under the hood. Ready?"
            x={width - 750}
            y={height - 280}
            startFrame={2340}
            maxWidth={580}
          />

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
