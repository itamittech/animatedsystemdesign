import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * VERTICAL SAMPLE (1080x1920) - Scene 1 Only
 * Testing mobile LinkedIn format
 */
export const ClientServerDNSProxiesVerticalSample: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Credit Bookmark - repositioned for vertical */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '12px 20px',
          borderRadius: 20,
          border: '2px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 18, color: '#94a3b8', fontWeight: '500'}}>Created by Amit Mishra</div>
        <div style={{fontSize: 16, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 18}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: The Journey Begins - VERTICAL LAYOUT (0-450 frames / 0-15s) */}
      {frame >= 0 && frame < 450 && (
        <>
          <Title text="How the Internet Really Works" subtitle="A Journey from google.com to Your Screen" startFrame={0} />

          {/* Characters stacked vertically with dialogues */}
          {frame < 230 && (
            <>
              {/* Junior character at top */}
              <Character type="junior" x={width * 0.5} y={height * 0.25} startFrame={30} size={100} />

              <Dialogue
                speaker="junior"
                text="When I type 'google.com' and press Enter, what actually happens?"
                x={width * 0.1}
                y={height * 0.35}
                startFrame={60}
                maxWidth={width * 0.8}
              />

              {/* Architect character below */}
              <Character type="architect" x={width * 0.5} y={height * 0.52} startFrame={30} size={100} />

              <Dialogue
                speaker="architect"
                text="Great question! Let's trace this journey together. First, computers don't understand 'google.com' - they only speak in IP addresses."
                x={width * 0.1}
                y={height * 0.62}
                startFrame={150}
                maxWidth={width * 0.8}
              />
            </>
          )}

          {/* IP Address concept - centered for vertical */}
          {frame >= 240 && (
            <div style={{
              position: 'absolute',
              top: height * 0.30,
              left: width * 0.1,
              width: width * 0.8,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              borderRadius: 16,
              padding: 24,
              opacity: fadeIn(frame, 240, 20),
              transform: `scale(${pulse(frame, 60)})`,
            }}>
              <div style={{fontSize: 24, fontWeight: 'bold', color: theme.colors.client, marginBottom: 12, textAlign: 'center', textShadow: '0 0 20px rgba(96, 165, 250, 0.6)', letterSpacing: '1px'}}>
                💻 IP Address: The Computer's Address
              </div>
              <div style={{fontSize: 16, color: '#e2e8f0', lineHeight: 1.8, textAlign: 'center'}}>
                <div style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 10, textShadow: '0 0 30px rgba(251, 191, 36, 0.7)', letterSpacing: '1.5px'}}>
                  142.250.185.46
                </div>
                <div style={{fontSize: 20, color: '#94a3b8'}}>
                  Every device on the internet has a unique IP address.
                </div>
                <div style={{fontSize: 18, color: '#94a3b8', marginTop: 8}}>
                  <span style={{fontWeight: 'bold', color: '#60a5fa'}}>IPv4</span> uses 32 bits (4.3 billion addresses)
                </div>
                <div style={{fontSize: 18, color: '#94a3b8', marginTop: 4}}>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>IPv6</span> uses 128 bits - solving the shortage
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* End screen for sample */}
      {frame >= 450 && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          opacity: fadeIn(frame, 450, 20),
        }}>
          <div style={{fontSize: 36, fontWeight: 'bold', color: theme.colors.client, marginBottom: 16}}>
            📱 Mobile Sample Test
          </div>
          <div style={{fontSize: 24, color: '#94a3b8'}}>
            This is Scene 1 in vertical format (1080x1920)
          </div>
          <div style={{fontSize: 20, color: '#64748b', marginTop: 12}}>
            Test this on LinkedIn mobile to check readability
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
