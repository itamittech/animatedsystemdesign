import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';
import {Box} from '../components/Box';
import {Arrow} from '../components/Arrow';

/**
 * FIX Protocol: The Language of Financial Markets
 * Duration: 120 seconds (3600 frames at 30fps)
 *
 * Scene 1 (0-20s): Introduction - What is FIX?
 * Scene 2 (20-50s): How FIX Works - Core Concepts & Message Structure
 * Scene 3 (50-80s): Key Features - Heartbeats, Sequence Numbers, Storage
 * Scene 4 (80-105s): Why is FIX Still Dominant?
 * Scene 5 (105-120s): Summary & Modern Context
 */

export const FixProtocol: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  // Scene timing
  const scene1End = 600; // 0-20s
  const scene2End = 1500; // 20-50s
  const scene3End = 2400; // 50-80s
  const scene4End = 3150; // 80-105s
  const scene5End = 3600; // 105-120s

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Scene 1: Introduction - What is FIX? */}
      {frame < scene1End && (
        <>
          <Title text="FIX Protocol" subtitle="The Language of Financial Markets" />
          <Character type="junior" x={width * 0.25} y={height * 0.5} startFrame={30} />
          <Character type="architect" x={width * 0.75} y={height * 0.5} startFrame={30} />

          <Dialogue
            speaker="junior"
            text="Sarah, I've seen 'FIX Protocol' in job descriptions for finance roles. What exactly is it?"
            x={width * 0.1}
            y={height * 0.65}
            startFrame={60}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question, Alex! FIX, or Financial Information Exchange, is a standard communication protocol for the real-time exchange of securities transaction information."
            x={width * 0.6}
            y={height * 0.65}
            startFrame={90}
            maxWidth={540}
          />
        </>
      )}

      {/* Scene 2: How FIX Works - Core Concepts */}
      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="How FIX Works" subtitle="Sessions, Messages, and the FIX Engine" />
          <Character type="junior" x={width * 0.25} y={height * 0.85} startFrame={scene1End + 10} />
          <Character type="architect" x={width * 0.75} y={height * 0.85} startFrame={scene1End + 10} />
          <Box
            x={width * 0.15}
            y={height * 0.3}
            width={400}
            height={200}
            color={theme.colors.client}
            label="Buy-Side (e.g., Hedge Fund)"
            icon="🏢"
            startFrame={scene1End}
          />
          <Box
            x={width * 0.65}
            y={height * 0.3}
            width={400}
            height={200}
            color={theme.colors.server}
            label="Sell-Side (e.g., Broker)"
            icon="🏦"
            startFrame={scene1End}
          />
          <Arrow
            x1={width * 0.15 + 400}
            y1={height * 0.3 + 100}
            x2={width * 0.65}
            y2={height * 0.3 + 100}
            color={theme.colors.dataFlow}
            label="FIX Session (TCP/IP)"
            startFrame={scene1End + 20}
          />
        </>
      )}

      {/* Scene 3: Key Features - Reliability */}
      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Guaranteed Delivery" subtitle="Sequence Numbers, Heartbeats & State" />
          <Box
            x={width / 2 - 200}
            y={height / 2 - 100}
            width={400}
            height={200}
            color={theme.colors.messageQueue}
            label="FIX Engine"
            icon="⚙️"
            startFrame={scene2End}
          />
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: fadeIn(frame, scene2End + 30, 30),
              color: theme.text.primary,
              fontSize: '2rem',
              textAlign: 'center',
            }}
          >
            <p>Incoming Msg SeqNum: 101</p>
            <p>Expected SeqNum: 101</p>
            <p>Status: ✅</p>
          </div>
        </>
      )}

      {/* Scene 4: Why is FIX Still Dominant? */}
      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Why FIX Still Dominates" subtitle="Adoption, Reliability, and Performance" />
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            position: 'absolute',
            top: '30%',
            opacity: fadeIn(frame, scene3End + 20, 30),
          }}>
            <div style={{textAlign: 'center', color: theme.text.primary, fontSize: '2rem'}}>
              <span style={{fontSize: '4rem'}}>🏆</span>
              <p>Industry Standard</p>
            </div>
            <div style={{textAlign: 'center', color: theme.text.primary, fontSize: '2rem'}}>
              <span style={{fontSize: '4rem'}}>🚀</span>
              <p>Low Latency</p>
            </div>
            <div style={{textAlign: 'center', color: theme.text.primary, fontSize: '2rem'}}>
              <span style={{fontSize: '4rem'}}>🔒</span>
              <p>High Reliability</p>
            </div>
          </div>
        </>
      )}

      {/* Scene 5: Summary & Modern Context */}
      {frame >= scene4End && frame < scene5End && (
        <>
          <Title text="FIX: The Lingua Franca of Finance" subtitle="Summary and Evolution" />
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: fadeIn(frame, scene4End + 30, 30),
              color: theme.text.primary,
              fontSize: '2.5rem',
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: theme.background.secondary,
              borderRadius: theme.borderRadius.lg,
            }}
          >
            <p>
              FIX: The battle-tested, high-performance protocol that powers the global financial markets.
            </p>
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
