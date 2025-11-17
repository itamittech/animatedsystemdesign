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

export const LargeLanguageModels: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Introduction (0-17s / 0-510 frames) */}
      {frame >= 0 && frame < 510 && (
        <>
          <Title text="Large Language Models (LLMs)" x={width / 2 - 480} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Sarah, everyone's talking about LLMs - ChatGPT, Claude, GPT-4... What makes them 'Large'? And why are they so powerful compared to regular neural networks?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Great question! 'Large' refers to scale - billions of parameters, trained on trillions of words. They're deep neural networks specifically designed for language. Let me break down what makes them special!"
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

      {/* Scene 2: What Makes Them "Large"? (17-38s / 510-1140 frames) */}
      {frame >= 510 && frame < 1140 && (
        <>
          <Title text="What Makes Them 'Large'?" x={width / 2 - 380} y={50} color="#c084fc" startFrame={510} />

          <Character type="architect" x={width - 300} y={height / 2 + 50} startFrame={540} />

          {/* Scale comparison */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 520,
              top: 140,
            }}
          >
            <div style={{fontSize: 22, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              📊 The Scale of "Large"
            </div>

            {/* Small Model */}
            <div style={{opacity: frame >= 570 ? 1 : 0}}>
              <div style={{fontSize: 28, color: '#22d3ee', fontWeight: 'bold', marginBottom: 10}}>
                Small Model (BERT-Base)
              </div>
              <div
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: '#0ea5e9',
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />
              <div style={{fontSize: 22, color: '#cbd5e1', marginBottom: 30}}>
                110M parameters<br />
                Training: days on GPUs
              </div>
            </div>

            {/* Medium Model */}
            <div style={{opacity: frame >= 660 ? 1 : 0}}>
              <div style={{fontSize: 28, color: '#a78bfa', fontWeight: 'bold', marginBottom: 10}}>
                Medium Model (GPT-2)
              </div>
              <div
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: '#7c3aed',
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />
              <div style={{fontSize: 22, color: '#cbd5e1', marginBottom: 30}}>
                1.5B parameters<br />
                Training: weeks on GPU clusters
              </div>
            </div>

            {/* Large Model */}
            <div style={{opacity: frame >= 750 ? 1 : 0}}>
              <div style={{fontSize: 28, color: '#c084fc', fontWeight: 'bold', marginBottom: 10}}>
                Large Model (GPT-4, Claude)
              </div>
              <div
                style={{
                  width: 800,
                  height: 40,
                  backgroundColor: '#7c3aed',
                  borderRadius: 8,
                  marginBottom: 8,
                  background: 'linear-gradient(90deg, #7c3aed, #c084fc)',
                }}
              />
              <div style={{fontSize: 22, color: '#cbd5e1', marginBottom: 30}}>
                100B - 1T+ parameters 🤯<br />
                Training: months on thousands of GPUs
              </div>
            </div>

            {/* Training Data */}
            <div
              style={{
                marginTop: 40,
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 8,
                width: 850,
                opacity: frame >= 870 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 28, color: '#fbbf24', fontWeight: 'bold', marginBottom: 12}}>
                📚 Training Data Scale
              </div>
              <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.9}}>
                • Books, articles, websites, code repositories<br />
                • Trillions of tokens (words/subwords)<br />
                • CommonCrawl (web), Wikipedia, GitHub, research papers<br />
                • Cost: <span style={{color: '#ef4444'}}>$10M - $100M+</span> just for training!
              </div>
            </div>
          </div>

          {/* Why Size Matters */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 180,
              width: 420,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #c084fc',
              opacity: frame >= 960 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 15}}>
              Why Scale Matters
            </div>
            <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.9}}>
              <strong style={{color: '#c084fc'}}>Emergent Abilities:</strong><br /><br />

              As models get larger, they gain new capabilities:<br /><br />

              • <strong>Few-shot learning</strong><br />
              • <strong>Reasoning</strong> & chain-of-thought<br />
              • <strong>Code generation</strong><br />
              • <strong>Translation</strong> (100+ languages)<br />
              • <strong>Instruction following</strong><br /><br />

              <span style={{color: '#fbbf24'}}>
                These weren't explicitly trained!<br />
                They emerge from scale.
              </span>
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="Scale unlocks capabilities we didn't expect. It's not just 'bigger is better' - there are qualitative leaps when you hit certain parameter counts. GPT-4 can reason in ways GPT-2 never could!"
            x={width - 750}
            y={height - 280}
            startFrame={1020}
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

      {/* Scene 3: Transformer Architecture (38-60s / 1140-1800 frames) */}
      {frame >= 1140 && frame < 1800 && (
        <>
          <Title text="The Transformer Architecture" x={width / 2 - 430} y={50} color="#c084fc" startFrame={1140} />

          <Character type="developer" x={200} y={height / 2 - 30} startFrame={1170} />

          {/* Simplified Transformer */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 480,
              top: 140,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 25}}>
              🔮 The Secret Sauce: Attention Mechanism
            </div>

            {/* Input text */}
            <div style={{opacity: frame >= 1200 ? 1 : 0}}>
              <div style={{fontSize: 24, color: '#22d3ee', marginBottom: 15}}>
                Input: <strong>"The cat sat on the mat"</strong>
              </div>

              <div style={{position: 'relative', height: 60, marginBottom: 40}}>
                <Box text="The" x={0} y={0} width={80} height={60} color="#0ea5e9" startFrame={1230} fontSize={24} />
                <Box text="cat" x={95} y={0} width={80} height={60} color="#0ea5e9" startFrame={1250} fontSize={24} />
                <Box text="sat" x={190} y={0} width={80} height={60} color="#0ea5e9" startFrame={1270} fontSize={24} />
                <Box text="on" x={285} y={0} width={80} height={60} color="#0ea5e9" startFrame={1290} fontSize={24} />
                <Box text="the" x={380} y={0} width={80} height={60} color="#0ea5e9" startFrame={1310} fontSize={24} />
                <Box text="mat" x={475} y={0} width={80} height={60} color="#0ea5e9" startFrame={1330} fontSize={24} />
              </div>
            </div>

            {/* Attention visualization */}
            <div
              style={{
                marginTop: 100,
                backgroundColor: '#1e293b',
                padding: 25,
                borderRadius: 12,
                border: '2px solid #7c3aed',
                width: 580,
                opacity: frame >= 1380 ? 1 : 0,
              }}
            >
              <div style={{fontSize: 28, color: '#c084fc', fontWeight: 'bold', marginBottom: 15}}>
                🎯 Self-Attention: Words Look at Each Other
              </div>
              <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 1.9}}>
                When processing "cat":<br />
                • <strong>"The"</strong> → low attention (article, not important)<br />
                • <strong>"cat"</strong> → high attention (self reference)<br />
                • <strong>"sat"</strong> → <span style={{color: '#10b981'}}>HIGH attention</span> (action)<br />
                • <strong>"on"</strong> → medium (preposition)<br />
                • <strong>"mat"</strong> → <span style={{color: '#10b981'}}>HIGH attention</span> (location)<br /><br />

                <strong style={{color: '#fbbf24'}}>Each word learns context from ALL other words!</strong>
              </div>
            </div>

            <div
              style={{
                marginTop: 25,
                fontSize: 22,
                color: '#cbd5e1',
                lineHeight: 1.8,
                opacity: frame >= 1500 ? 1 : 0,
              }}
            >
              💡 <strong>Why it works:</strong> Unlike older models (RNNs) that read left-to-right,<br />
              Transformers process <strong>all words in parallel</strong> with attention to relationships.
            </div>
          </div>

          {/* Architecture Layers */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 160,
              width: 440,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #c084fc',
              opacity: frame >= 1590 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 15}}>
              🏗️ Full Architecture
            </div>
            <div style={{fontSize: 24, color: '#cbd5e1', lineHeight: 2}}>
              <div style={{position: 'relative', marginBottom: 12}}>
                <Box text="Input Text" x={0} y={0} width={380} height={50} color="#0ea5e9" startFrame={1620} fontSize={24} />
              </div>
              <div style={{position: 'relative', marginTop: 60, marginBottom: 12}}>
                <Box text="Embeddings" x={0} y={0} width={380} height={50} color="#7c3aed" startFrame={1650} fontSize={24} />
                <div style={{fontSize: 20, color: '#94a3b8', marginTop: 55}}>Convert to numbers</div>
              </div>
              <div style={{position: 'relative', marginTop: 70, marginBottom: 12}}>
                <Box text="Multi-Head Attention" x={0} y={0} width={380} height={50} color="#7c3aed" startFrame={1680} fontSize={24} />
                <div style={{fontSize: 20, color: '#94a3b8', marginTop: 55}}>×96 layers (GPT-3)</div>
              </div>
              <div style={{position: 'relative', marginTop: 70, marginBottom: 12}}>
                <Box text="Feed-Forward Network" x={0} y={0} width={380} height={50} color="#7c3aed" startFrame={1710} fontSize={24} />
              </div>
              <div style={{position: 'relative', marginTop: 60}}>
                <Box text="Output (Next Token)" x={0} y={0} width={380} height={50} color="#10b981" startFrame={1740} fontSize={24} />
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="So attention lets the model understand relationships between words, and stacking many layers lets it build deep understanding. That's brilliant!"
            x={100}
            y={height - 280}
            startFrame={1650}
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

      {/* Scene 4: Capabilities & Limitations (60-84s / 1800-2520 frames) */}
      {frame >= 1800 && frame < 2520 && (
        <>
          <Title text="Capabilities & Limitations" x={width / 2 - 400} y={50} color="#c084fc" startFrame={1800} />

          <Character type="architect" x={width - 300} y={height / 2 - 50} startFrame={1830} />

          {/* Capabilities */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 140,
              width: 520,
              opacity: frame >= 1860 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 20}}>
              ✅ What They're Great At
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
              <div style={{marginBottom: 15, opacity: frame >= 1890 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>💬 Text Generation:</strong><br />
                Write essays, emails, stories, poetry
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 1950 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>💻 Code:</strong><br />
                Generate, debug, explain code in any language
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 2010 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>🌍 Translation:</strong><br />
                100+ languages with context awareness
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 2070 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>🧠 Reasoning:</strong><br />
                Math, logic, step-by-step problem solving
              </div>

              <div style={{opacity: frame >= 2130 ? 1 : 0}}>
                <strong style={{color: '#10b981'}}>📚 Summarization:</strong><br />
                Condense long documents, extract key points
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 140,
              width: 520,
              opacity: frame >= 2190 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 20}}>
              ⚠️ Current Limitations
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
              <div style={{marginBottom: 15, opacity: frame >= 2220 ? 1 : 0}}>
                <strong style={{color: '#ef4444'}}>🎭 Hallucinations:</strong><br />
                Can confidently generate false information
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 2280 ? 1 : 0}}>
                <strong style={{color: '#ef4444'}}>📅 Knowledge Cutoff:</strong><br />
                Only knows data up to training date
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 2340 ? 1 : 0}}>
                <strong style={{color: '#ef4444'}}>🪟 Context Window:</strong><br />
                Limited memory (4K - 200K tokens)
              </div>

              <div style={{marginBottom: 15, opacity: frame >= 2400 ? 1 : 0}}>
                <strong style={{color: '#ef4444'}}>🧮 Math & Facts:</strong><br />
                Can make calculation errors, needs verification
              </div>

              <div style={{opacity: frame >= 2460 ? 1 : 0}}>
                <strong style={{color: '#ef4444'}}>💰 Cost:</strong><br />
                Inference is expensive at scale (GPU time)
              </div>
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="LLMs are incredibly powerful, but they're not magic. Understand their limitations - always verify critical info, use tools for math/facts, and remember they're frozen in time at training!"
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

      {/* Scene 5: Key Takeaways (84-105s / 2520-3150 frames) */}
      {frame >= 2520 && frame < 3150 && (
        <>
          <Title text="Key Takeaways" x={width / 2 - 220} y={50} color="#c084fc" startFrame={2520} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2550} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2580} />

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
                opacity: frame >= 2610 ? 1 : 0,
                lineHeight: 2,
              }}
            >
              <div style={{fontSize: 24, color: '#c084fc', fontWeight: 'bold', marginBottom: 20}}>
                📚 What We Learned
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>1. "Large" = Scale:</strong>{' '}
                Billions of parameters, trillions of tokens, months of training
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>2. Transformers:</strong>{' '}
                Self-attention lets words understand context from all other words
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>3. Emergent Abilities:</strong>{' '}
                Reasoning, code, translation emerge from scale
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>4. Know the Limits:</strong>{' '}
                Hallucinations, knowledge cutoff, context windows, cost
              </div>

              <div style={{marginTop: 25, fontSize: 24, color: '#22d3ee', fontStyle: 'italic'}}>
                🎯 Next: Agentic AI - Making LLMs take action with tools and decision-making!
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="LLMs are just deep neural networks trained at massive scale. The attention mechanism is key, but we need to be aware of their limitations!"
            x={100}
            y={height - 280}
            startFrame={2670}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! And here's where it gets exciting - LLMs alone are passive. But what if we give them tools to act? That's Agentic AI, and we'll cover that next. Ready?"
            x={width - 750}
            y={height - 280}
            startFrame={2790}
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
