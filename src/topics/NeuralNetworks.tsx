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

const Circle: React.FC<{
  x: number;
  y: number;
  radius: number;
  color: string;
  startFrame: number;
  label?: string;
}> = ({x, y, radius, color, startFrame, label}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const fadeIn = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200},
  });

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: x - radius,
          top: y - radius,
          width: radius * 2,
          height: radius * 2,
          backgroundColor: color,
          borderRadius: '50%',
          opacity: fadeIn,
          transform: `scale(${fadeIn})`,
        }}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            left: x - 15,
            top: y - 8,
            fontSize: 14,
            fontWeight: 'bold',
            color: '#ffffff',
            opacity: fadeIn,
          }}
        >
          {label}
        </div>
      )}
    </>
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

export const NeuralNetworks: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a'}}>
      {/* Scene 1: Introduction (0-16s / 0-480 frames) */}
      {frame >= 0 && frame < 480 && (
        <>
          <Title text="Neural Networks & Deep Learning" x={width / 2 - 500} y={50} color="#c084fc" startFrame={0} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={30} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={60} />

          <Dialogue
            speaker="developer"
            text="Sarah, you mentioned Deep Learning uses neural networks. But what exactly is a neural network? Is it like... simulating a brain?"
            x={100}
            y={height - 280}
            startFrame={90}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Great question! Neural networks are loosely inspired by brain neurons, but they're really just mathematical functions. Let me show you how they work - from a single neuron to deep networks!"
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

      {/* Scene 2: Single Neuron (16-36s / 480-1080 frames) */}
      {frame >= 480 && frame < 1080 && (
        <>
          <Title text="The Building Block: A Neuron" x={width / 2 - 380} y={50} color="#c084fc" startFrame={480} />

          <Character type="architect" x={width - 300} y={height / 2 + 50} startFrame={510} />

          {/* Neuron visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 150,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 30}}>
              🧠 Artificial Neuron (Perceptron)
            </div>

            {/* Input layer */}
            <Circle x={100} y={100} radius={30} color="#0ea5e9" startFrame={540} label="x₁" />
            <Circle x={100} y={200} radius={30} color="#0ea5e9" startFrame={560} label="x₂" />
            <Circle x={100} y={300} radius={30} color="#0ea5e9" startFrame={580} label="x₃" />

            <div style={{position: 'absolute', left: -20, top: 190, fontSize: 16, color: '#22d3ee'}}>
              {frame >= 600 && 'Inputs'}
            </div>

            {/* Weights */}
            {frame >= 620 && (
              <>
                <Arrow x1={130} y1={100} x2={280} y2={200} color="#fbbf24" startFrame={620} label="w₁" />
                <Arrow x1={130} y1={200} x2={280} y2={200} color="#fbbf24" startFrame={640} label="w₂" />
                <Arrow x1={130} y1={300} x2={280} y2={200} color="#fbbf24" startFrame={660} label="w₃" />
              </>
            )}

            {/* Neuron */}
            <Circle x={320} y={200} radius={50} color="#7c3aed" startFrame={690} label="Σ" />

            <div style={{position: 'absolute', left: 280, top: 265, fontSize: 14, color: '#c084fc'}}>
              {frame >= 720 && 'Sum & Activate'}
            </div>

            {/* Output */}
            <Arrow x1={370} y1={200} x2={480} y2={200} color="#10b981" startFrame={750} />
            <Circle x={520} y={200} radius={30} color="#10b981" startFrame={780} label="y" />

            <div style={{position: 'absolute', left: 530, top: 190, fontSize: 16, color: '#10b981'}}>
              {frame >= 810 && 'Output'}
            </div>

            {/* Formula */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 380,
                fontSize: 16,
                color: '#cbd5e1',
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 8,
                width: 550,
                opacity: frame >= 840 ? 1 : 0,
              }}
            >
              <div style={{color: '#fbbf24', fontWeight: 'bold', marginBottom: 10}}>The Math:</div>
              <code style={{fontSize: 15, color: '#22d3ee'}}>
                y = activation(w₁×x₁ + w₂×x₂ + w₃×x₃ + bias)
              </code>
              <div style={{marginTop: 15, fontSize: 14, lineHeight: 1.8}}>
                • Multiply inputs by <strong style={{color: '#fbbf24'}}>weights</strong> (importance)<br />
                • Sum them up, add <strong style={{color: '#fbbf24'}}>bias</strong><br />
                • Apply <strong style={{color: '#10b981'}}>activation function</strong> (e.g., sigmoid, ReLU)
              </div>
            </div>
          </div>

          {/* Example */}
          <div
            style={{
              position: 'absolute',
              right: 100,
              top: 180,
              width: 380,
              backgroundColor: '#1e293b',
              padding: 20,
              borderRadius: 12,
              border: '2px solid #7c3aed',
              opacity: frame >= 900 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 18, color: '#c084fc', fontWeight: 'bold', marginBottom: 15}}>
              Example: Email Spam Neuron
            </div>
            <div style={{fontSize: 14, color: '#cbd5e1', lineHeight: 1.8}}>
              <strong style={{color: '#0ea5e9'}}>Inputs:</strong><br />
              x₁ = suspicious words count<br />
              x₂ = all caps percentage<br />
              x₃ = external link count<br /><br />

              <strong style={{color: '#fbbf24'}}>Weights (learned):</strong><br />
              w₁ = 0.8, w₂ = 0.6, w₃ = 0.4<br /><br />

              <strong style={{color: '#10b981'}}>Output:</strong><br />
              y = 0.95 → Probably spam! 🚨
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="One neuron is simple - it's just weighted inputs, sum, and activation. But magic happens when we stack thousands of these together in layers!"
            x={width - 750}
            y={height - 280}
            startFrame={960}
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

      {/* Scene 3: Neural Network Layers (36-58s / 1080-1740 frames) */}
      {frame >= 1080 && frame < 1740 && (
        <>
          <Title text="Stacking Neurons: Deep Networks" x={width / 2 - 450} y={50} color="#c084fc" startFrame={1080} />

          <Character type="developer" x={200} y={height / 2 + 80} startFrame={1110} />

          {/* Multi-layer network visualization */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 480,
              top: 140,
            }}
          >
            {/* Input Layer */}
            <div style={{position: 'absolute', left: 0, top: 0}}>
              <div style={{fontSize: 16, color: '#22d3ee', fontWeight: 'bold', marginBottom: 15}}>
                Input Layer
              </div>
              <Circle x={40} y={50} radius={25} color="#0ea5e9" startFrame={1140} />
              <Circle x={40} y={120} radius={25} color="#0ea5e9" startFrame={1150} />
              <Circle x={40} y={190} radius={25} color="#0ea5e9" startFrame={1160} />
              <Circle x={40} y={260} radius={25} color="#0ea5e9" startFrame={1170} />
            </div>

            {/* Hidden Layer 1 */}
            <div style={{position: 'absolute', left: 220, top: 0}}>
              <div style={{fontSize: 16, color: '#c084fc', fontWeight: 'bold', marginBottom: 15}}>
                Hidden Layer 1
              </div>
              <Circle x={40} y={30} radius={25} color="#7c3aed" startFrame={1230} />
              <Circle x={40} y={90} radius={25} color="#7c3aed" startFrame={1240} />
              <Circle x={40} y={150} radius={25} color="#7c3aed" startFrame={1250} />
              <Circle x={40} y={210} radius={25} color="#7c3aed" startFrame={1260} />
              <Circle x={40} y={270} radius={25} color="#7c3aed" startFrame={1270} />
            </div>

            {/* Hidden Layer 2 */}
            <div style={{position: 'absolute', left: 440, top: 0}}>
              <div style={{fontSize: 16, color: '#c084fc', fontWeight: 'bold', marginBottom: 15}}>
                Hidden Layer 2
              </div>
              <Circle x={40} y={50} radius={25} color="#7c3aed" startFrame={1330} />
              <Circle x={40} y={120} radius={25} color="#7c3aed" startFrame={1340} />
              <Circle x={40} y={190} radius={25} color="#7c3aed" startFrame={1350} />
              <Circle x={40} y={260} radius={25} color="#7c3aed" startFrame={1360} />
            </div>

            {/* Output Layer */}
            <div style={{position: 'absolute', left: 660, top: 0}}>
              <div style={{fontSize: 16, color: '#10b981', fontWeight: 'bold', marginBottom: 15}}>
                Output Layer
              </div>
              <Circle x={40} y={120} radius={25} color="#10b981" startFrame={1420} />
              <Circle x={40} y={190} radius={25} color="#10b981" startFrame={1430} />
            </div>

            {/* Connections (sample) */}
            {frame >= 1200 && (
              <>
                <Arrow x1={65} y1={190} x2={235} y2={180} color="#64748b80" startFrame={1200} />
                <Arrow x1={65} y1={190} x2={235} y2={240} color="#64748b80" startFrame={1205} />
                <Arrow x1={285} y1={180} x2={455} y2={190} color="#64748b80" startFrame={1300} />
                <Arrow x1={285} y1={240} x2={455} y2={190} color="#64748b80" startFrame={1305} />
                <Arrow x1={505} y1={190} x2={675} y2={190} color="#64748b80" startFrame={1390} />
              </>
            )}
          </div>

          {/* Why "Deep"? */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 160,
              width: 420,
              backgroundColor: '#1e293b',
              padding: 25,
              borderRadius: 12,
              border: '2px solid #c084fc',
              opacity: frame >= 1470 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 20, color: '#fbbf24', fontWeight: 'bold', marginBottom: 15}}>
              Why "Deep" Learning?
            </div>
            <div style={{fontSize: 15, color: '#cbd5e1', lineHeight: 1.9}}>
              <strong style={{color: '#c084fc'}}>Deep = Many Layers</strong><br /><br />

              Each layer learns different abstractions:<br /><br />

              <strong style={{color: '#22d3ee'}}>Image Recognition:</strong><br />
              Layer 1: Edges, corners<br />
              Layer 2: Shapes, textures<br />
              Layer 3: Parts (eyes, wheels)<br />
              Layer 4: Objects (cat, car)<br /><br />

              <strong style={{color: '#10b981'}}>More layers = More complexity!</strong><br />
              GPT-3 has 96 layers 🤯
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="So each layer builds on the previous one, learning increasingly complex patterns? That's brilliant! But how does the network actually 'learn' the right weights?"
            x={100}
            y={height - 280}
            startFrame={1560}
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

      {/* Scene 4: Training vs Inference (58-78s / 1740-2340 frames) */}
      {frame >= 1740 && frame < 2340 && (
        <>
          <Title text="Training vs Inference" x={width / 2 - 330} y={50} color="#c084fc" startFrame={1740} />

          <Character type="architect" x={width - 300} y={height / 2 - 50} startFrame={1770} />

          {/* Training Phase */}
          <div
            style={{
              position: 'absolute',
              left: 80,
              top: 150,
              width: 480,
              opacity: frame >= 1800 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 20}}>
              🏋️ Training Phase (Learning)
            </div>

            <Box text="Training Data" x={0} y={0} width={180} height={70} color="#0ea5e9" startFrame={1830} fontSize={18} />
            <div style={{fontSize: 13, color: '#94a3b8', marginTop: 5, marginLeft: 10}}>
              Millions of labeled examples
            </div>

            <Arrow x1={180} y1={35} x2={240} y2={35} color="#ffffff" startFrame={1860} label="Feed" />

            <Box text="Neural Network" x={240} y={0} width={200} height={70} color="#7c3aed" startFrame={1860} fontSize={18} />
            <div style={{fontSize: 13, color: '#94a3b8', marginTop: 5, marginLeft: 250}}>
              Random weights initially
            </div>

            <div
              style={{
                marginTop: 100,
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 8,
                fontSize: 14,
                color: '#cbd5e1',
                lineHeight: 1.9,
                opacity: frame >= 1920 ? 1 : 0,
              }}
            >
              <strong style={{color: '#fbbf24'}}>The Training Loop:</strong><br />
              1. Feed input → get prediction<br />
              2. Compare with correct answer<br />
              3. Calculate error (loss)<br />
              4. <strong style={{color: '#10b981'}}>Backpropagation</strong>: Adjust weights<br />
              5. Repeat millions of times!<br /><br />

              <div style={{color: '#ef4444'}}>
                ⏱️ Can take hours to weeks<br />
                💰 Requires GPUs/TPUs, lots of $$$
              </div>
            </div>
          </div>

          {/* Inference Phase */}
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 150,
              width: 480,
              opacity: frame >= 2040 ? 1 : 0,
            }}
          >
            <div style={{fontSize: 24, color: '#10b981', fontWeight: 'bold', marginBottom: 20}}>
              🚀 Inference Phase (Using)
            </div>

            <Box text="New Input" x={0} y={0} width={140} height={70} color="#0ea5e9" startFrame={2070} fontSize={18} />
            <div style={{fontSize: 13, color: '#94a3b8', marginTop: 5, marginLeft: 10}}>
              Never seen before
            </div>

            <Arrow x1={140} y1={35} x2={200} y2={35} color="#ffffff" startFrame={2100} label="Feed" />

            <Box text="Trained Model" x={200} y={0} width={180} height={70} color="#7c3aed" startFrame={2100} fontSize={18} />
            <div style={{fontSize: 13, color: '#94a3b8', marginTop: 5, marginLeft: 210}}>
              Fixed weights
            </div>

            <Arrow x1={380} y1={35} x2={440} y2={35} color="#ffffff" startFrame={2130} />

            <Box text="Prediction" x={440} y={0} width={140} height={70} color="#10b981" startFrame={2130} fontSize={18} />

            <div
              style={{
                marginTop: 100,
                backgroundColor: '#1e293b',
                padding: 20,
                borderRadius: 8,
                fontSize: 14,
                color: '#cbd5e1',
                lineHeight: 1.9,
                opacity: frame >= 2160 ? 1 : 0,
              }}
            >
              <strong style={{color: '#10b981'}}>Production Use:</strong><br />
              1. Load trained model<br />
              2. Feed new input<br />
              3. Get instant prediction<br />
              4. No weight updates!<br /><br />

              <div style={{color: '#10b981'}}>
                ⚡ Fast (milliseconds)<br />
                💵 Cheaper, can use CPUs
              </div>
            </div>
          </div>

          <Dialogue
            speaker="architect"
            text="Training is expensive and slow - we're teaching the network. Inference is fast and cheap - we're just using what it learned. In production, you only do inference!"
            x={width - 750}
            y={height - 280}
            startFrame={2190}
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

      {/* Scene 5: Key Takeaways (78-100s / 2340-3000 frames) */}
      {frame >= 2340 && frame < 3000 && (
        <>
          <Title text="Key Takeaways" x={width / 2 - 220} y={50} color="#c084fc" startFrame={2340} />

          <Character type="developer" x={200} y={height / 2 - 100} startFrame={2370} />
          <Character type="architect" x={width - 300} y={height / 2 - 100} startFrame={2400} />

          {/* Takeaways */}
          <div
            style={{
              position: 'absolute',
              left: width / 2 - 450,
              top: 180,
              width: 900,
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
                opacity: frame >= 2430 ? 1 : 0,
                lineHeight: 2,
              }}
            >
              <div style={{fontSize: 24, color: '#c084fc', fontWeight: 'bold', marginBottom: 20}}>
                📚 What We Learned
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>1. Neuron:</strong>{' '}
                Weighted inputs + sum + activation = output
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>2. Deep Networks:</strong>{' '}
                Stack layers to learn complex patterns (edges → shapes → objects)
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>3. Training:</strong>{' '}
                Slow, expensive process to learn weights from data
              </div>

              <div style={{marginBottom: 15}}>
                <strong style={{color: '#fbbf24'}}>4. Inference:</strong>{' '}
                Fast, cheap prediction using trained model
              </div>

              <div style={{marginTop: 25, fontSize: 16, color: '#22d3ee', fontStyle: 'italic'}}>
                🎯 Next: Large Language Models (LLMs) - Deep Learning for text at massive scale!
              </div>
            </div>
          </div>

          <Dialogue
            speaker="developer"
            text="Neural networks make sense now! They're just layers of math that learn patterns. Training is the hard part, but once trained, inference is fast!"
            x={100}
            y={height - 280}
            startFrame={2490}
            maxWidth={650}
          />

          <Dialogue
            speaker="architect"
            text="Exactly! And now you'll understand why LLMs like GPT and Claude are so powerful - they're just really deep neural networks trained on massive amounts of text. Ready to dive in?"
            x={width - 750}
            y={height - 280}
            startFrame={2610}
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
