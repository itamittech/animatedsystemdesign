import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Message Queue Fundamentals (Phase 6.1)
 * Covers: Queue vs Topic vs Stream, Push vs Pull, Delivery guarantees, Use cases
 * Duration: 120 seconds (3600 frames at 30fps)
 */
export const MessageQueueFundamentals: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {/* Credit Bookmark */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: 30,
          border: '2px solid rgba(139, 92, 246, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          opacity: fadeIn(frame, 30, 20),
          zIndex: 1000,
        }}
      >
        <div style={{fontSize: 24, color: '#94a3b8', fontWeight: '500'}}>Created by</div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Amit Mishra
        </div>
        <div style={{width: 2, height: 20, backgroundColor: 'rgba(139, 92, 246, 0.3)'}} />
        <div style={{fontSize: 22, color: '#64748b', fontStyle: 'italic'}}>
          <span style={{fontSize: 24}}>⚡</span> Powered by Claude Code
        </div>
      </div>

      {/* Scene 1: Introduction - The Problem (0-600 frames / 0-20s) */}
      {frame >= 0 && frame < 600 && (
        <>
          <Title text="Message Queue Fundamentals" subtitle="Asynchronous Communication at Scale" startFrame={0} />

          <Character type="junior" x={200} y={height - 200} startFrame={30} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={30} size={90} />

          <Dialogue
            speaker="junior"
            text="When services need to talk asynchronously, how do we handle that? Just fire HTTP requests and forget?"
            x={220}
            y={height - 280}
            startFrame={60}
            maxWidth={520}
          />

          <Dialogue
            speaker="architect"
            text="That's where message queues come in! They're the backbone of async communication. Let's explore why we need them."
            x={width - 750}
            y={height - 280}
            startFrame={180}
            maxWidth={640}
          />

          {/* The Problem */}
          {frame >= 270 && (
            <div
              style={{
                position: 'absolute',
                top: height * 0.18,
                left: width * 0.08,
                right: width * 0.08,
                opacity: fadeIn(frame, 270, 20),
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '3px solid rgba(139, 92, 246, 0.5)',
                  boxShadow: '0 0 16px rgba(139, 92, 246, 0.3)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: '#8b5cf6',
                    textShadow: '0 0 24px rgba(139, 92, 246, 0.6)',
                    marginBottom: 20,
                    textAlign: 'center',
                  }}
                >
                  🤔 Why Message Queues?
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 20}}>
                  Direct service-to-service calls create <span style={{color: '#fbbf24', fontWeight: 'bold'}}>tight coupling</span> and
                  problems:
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, opacity: fadeIn(frame, 330, 15)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '2px solid #ef4444',
                      boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                      borderRadius: 12,
                      padding: 20,
                    }}
                  >
                    <div style={{fontSize: 24, marginBottom: 8}}>⏱️</div>
                    <div style={{fontSize: 22, color: '#fca5a5', fontWeight: 'bold', marginBottom: 8}}>Blocking Calls</div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>Service A waits for Service B's response, wasting resources</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '2px solid #ef4444',
                      boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                      borderRadius: 12,
                      padding: 20,
                    }}
                  >
                    <div style={{fontSize: 24, marginBottom: 8}}>💥</div>
                    <div style={{fontSize: 22, color: '#fca5a5', fontWeight: 'bold', marginBottom: 8}}>Cascading Failures</div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>If Service B is down, Service A fails too</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '2px solid #ef4444',
                      boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                      borderRadius: 12,
                      padding: 20,
                    }}
                  >
                    <div style={{fontSize: 24, marginBottom: 8}}>📈</div>
                    <div style={{fontSize: 22, color: '#fca5a5', fontWeight: 'bold', marginBottom: 8}}>No Load Smoothing</div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>Traffic spikes overwhelm downstream services</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '2px solid #ef4444',
                      boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                      borderRadius: 12,
                      padding: 20,
                    }}
                  >
                    <div style={{fontSize: 24, marginBottom: 8}}>🔗</div>
                    <div style={{fontSize: 22, color: '#fca5a5', fontWeight: 'bold', marginBottom: 8}}>Tight Coupling</div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>Services must know about each other</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: What is a Message Queue? (600-1200 frames / 20-40s) */}
      {frame >= 600 && frame < 1200 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #10b981 0%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: fadeIn(frame, 600, 20),
              textAlign: 'center',
              filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.4))',
            }}
          >
            What is a Message Queue?
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={600} size={90} />

          <Dialogue
            speaker="architect"
            text="A message queue is like a post office. Producers send messages, and consumers receive them - but they don't need to be online at the same time!"
            x={width - 750}
            y={height - 280}
            startFrame={630}
            maxWidth={700}
          />

          {/* Message Queue Diagram */}
          <div
            style={{
              position: 'absolute',
              top: 140,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1400,
              opacity: fadeIn(frame, 720, 20),
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid #10b981',
                boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div style={{position: 'relative', height: 280, marginBottom: 20}}>
                {/* Producer */}
                <div
                  style={{
                    position: 'absolute',
                    left: 50,
                    top: 80,
                    width: 200,
                    height: 120,
                    backgroundColor: 'rgba(59, 130, 246, 0.3)',
                    border: '3px solid #3b82f6',
                    boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                    borderRadius: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: fadeIn(frame, 750, 15),
                  }}
                >
                  <div style={{fontSize: 40, marginBottom: 8}}>📤</div>
                  <div style={{fontSize: 24, color: '#60a5fa', fontWeight: 'bold', textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'}}>
                    Producer
                  </div>
                  <div style={{fontSize: 20, color: '#cbd5e1', textAlign: 'center'}}>Sends Messages</div>
                </div>

                {/* Queue */}
                <div
                  style={{
                    position: 'absolute',
                    left: 500,
                    top: 40,
                    width: 400,
                    height: 200,
                    backgroundColor: 'rgba(16, 185, 129, 0.3)',
                    border: '3px solid #10b981',
                    boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                    borderRadius: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: fadeIn(frame, 810, 15),
                  }}
                >
                  <div style={{fontSize: 40, marginBottom: 8}}>📬</div>
                  <div
                    style={{
                      fontSize: 28,
                      color: '#10b981',
                      fontWeight: 'bold',
                      marginBottom: 8,
                      textShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                    }}
                  >
                    Message Queue
                  </div>
                  <div style={{fontSize: 20, color: '#cbd5e1', textAlign: 'center', marginBottom: 12}}>
                    Stores & Buffers
                  </div>
                  {/* Messages in queue */}
                  <div style={{display: 'flex', gap: 8}}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: 16,
                          height: 16,
                          backgroundColor: '#22d3ee',
                          borderRadius: 4,
                          opacity: fadeIn(frame, 870 + i * 15, 10),
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Consumer */}
                <div
                  style={{
                    position: 'absolute',
                    right: 50,
                    top: 80,
                    width: 200,
                    height: 120,
                    backgroundColor: 'rgba(245, 158, 11, 0.3)',
                    border: '3px solid #f59e0b',
                    boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                    borderRadius: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: fadeIn(frame, 870, 15),
                  }}
                >
                  <div style={{fontSize: 40, marginBottom: 8}}>📥</div>
                  <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'}}>
                    Consumer
                  </div>
                  <div style={{fontSize: 20, color: '#cbd5e1', textAlign: 'center'}}>Receives Messages</div>
                </div>

                {/* Arrows */}
                <svg style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                  {/* Producer to Queue */}
                  {frame >= 930 && (
                    <>
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#22d3ee" />
                        </marker>
                      </defs>
                      <line x1="250" y1="140" x2="500" y2="140" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrowhead)" />
                      <text x="360" y="125" fill="#22d3ee" fontSize="20" textAnchor="middle">
                        Publish
                      </text>
                    </>
                  )}
                  {/* Queue to Consumer */}
                  {frame >= 990 && (
                    <>
                      <line x1="900" y1="140" x2="1150" y2="140" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowhead)" />
                      <text x="1010" y="125" fill="#fbbf24" fontSize="20" textAnchor="middle">
                        Consume
                      </text>
                    </>
                  )}
                </svg>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '2px solid rgba(139, 92, 246, 0.5)',
                  borderRadius: 10,
                  padding: 20,
                  opacity: fadeIn(frame, 1050, 15),
                }}
              >
                <div style={{fontSize: 24, color: '#e2e8f0', textAlign: 'center', lineHeight: 2}}>
                  <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>Key Benefit:</span> Producer and consumer are{' '}
                  <span style={{color: '#e9d5ff', fontWeight: 'bold'}}>decoupled</span> - they don't need to know about each other or be
                  online simultaneously!
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 3: Queue vs Topic vs Stream (1200-2100 frames / 40-70s) */}
      {frame >= 1200 && frame < 2100 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #c084fc 0%, #f9a8d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: fadeIn(frame, 1200, 20),
              textAlign: 'center',
              filter: 'drop-shadow(0 4px 12px rgba(192, 132, 252, 0.4))',
            }}
          >
            Queue vs Topic vs Stream
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={1200} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={1200} size={90} />

          <Dialogue
            speaker="junior"
            text="I hear about queues, topics, and streams. What's the difference?"
            x={220}
            y={height - 280}
            startFrame={1230}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Great question! They're different messaging patterns. Let me show you the three main types."
            x={width - 750}
            y={height - 280}
            startFrame={1320}
            maxWidth={700}
          />

          <div
            style={{
              position: 'absolute',
              top: 140,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 1410, 20),
            }}
          >
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24}}>
              {/* Queue */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6',
                  boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 1500, 15),
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: '#3b82f6',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    marginBottom: 16,
                    textAlign: 'center',
                  }}
                >
                  📋 Queue
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  One message → <span style={{color: '#60a5fa', fontWeight: 'bold'}}>One consumer</span>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 10,
                    padding: 16,
                    fontSize: 20,
                    color: '#cbd5e1',
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  <div>Producer → Queue → Consumer A</div>
                  <div style={{color: '#94a3b8', fontSize: 18, marginTop: 8}}>
                    (Consumer B doesn't get this message)
                  </div>
                </div>

                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold'}}>✓ Use for:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Task distribution</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Load balancing</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Background jobs</div>
                </div>
              </div>

              {/* Topic */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981',
                  boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 1620, 15),
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: '#10b981',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                    marginBottom: 16,
                    textAlign: 'center',
                  }}
                >
                  📢 Topic
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  One message → <span style={{color: '#34d399', fontWeight: 'bold'}}>All subscribers</span>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 10,
                    padding: 16,
                    fontSize: 20,
                    color: '#cbd5e1',
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  <div>Producer → Topic → Consumer A</div>
                  <div style={{marginLeft: 120}}>↘ Consumer B</div>
                  <div style={{marginLeft: 120}}>↘ Consumer C</div>
                </div>

                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold'}}>✓ Use for:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Event broadcasting</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Pub/Sub pattern</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Notifications</div>
                </div>
              </div>

              {/* Stream */}
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b',
                  boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 1740, 15),
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: '#f59e0b',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
                    marginBottom: 16,
                    textAlign: 'center',
                  }}
                >
                  🌊 Stream
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  Ordered log → <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Replay & Reprocess</span>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: 10,
                    padding: 16,
                    fontSize: 20,
                    color: '#cbd5e1',
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  <div>Stream: [Msg1, Msg2, Msg3...]</div>
                  <div style={{marginTop: 8, color: '#fbbf24'}}>↻ Can read from any offset</div>
                </div>

                <div style={{fontSize: 20, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold'}}>✓ Use for:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Event sourcing</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Audit logs</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Data pipelines</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Push vs Pull & Delivery Guarantees (2100-3000 frames / 70-100s) */}
      {frame >= 2100 && frame < 3000 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: fadeIn(frame, 2100, 20),
              textAlign: 'center',
              filter: 'drop-shadow(0 4px 12px rgba(236, 72, 153, 0.4))',
            }}
          >
            Push vs Pull & Delivery Guarantees
          </div>

          <Character type="architect" x={width - 350} y={height - 200} startFrame={2100} size={90} />

          <Dialogue
            speaker="architect"
            text="Two more critical concepts: how messages are delivered (push vs pull) and delivery guarantees!"
            x={width - 750}
            y={height - 280}
            startFrame={2130}
            maxWidth={700}
          />

          <div
            style={{
              position: 'absolute',
              top: 150,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 2220, 20),
            }}
          >
            {/* Push vs Pull */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid #ec4899',
                boxShadow: '0 0 16px rgba(236, 72, 153, 0.3)',
                borderRadius: 16,
                padding: 24,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  color: '#ec4899',
                  fontWeight: 'bold',
                  textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                🔄 Push vs Pull Models
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32}}>
                <div>
                  <div style={{fontSize: 24, color: '#f472b6', fontWeight: 'bold', marginBottom: 12}}>📤 Push (Broker pushes)</div>
                  <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div>• Queue sends messages to consumer</div>
                    <div>• Consumer must be ready</div>
                    <div>• Example: RabbitMQ, SNS</div>
                  </div>
                </div>

                <div>
                  <div style={{fontSize: 24, color: '#f472b6', fontWeight: 'bold', marginBottom: 12}}>📥 Pull (Consumer pulls)</div>
                  <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div>• Consumer requests messages</div>
                    <div>• Consumer controls rate</div>
                    <div>• Example: Kafka, SQS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Guarantees */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                border: '3px solid #f59e0b',
                boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 2400, 15),
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  color: '#f59e0b',
                  fontWeight: 'bold',
                  textShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                🎯 Delivery Guarantees
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22}}>
                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '2px solid #ef4444',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div style={{fontSize: 24, color: '#fca5a5', fontWeight: 'bold', marginBottom: 12}}>At-most-once</div>
                  <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div style={{marginBottom: 8}}>Message may be lost</div>
                    <div style={{color: '#94a3b8', fontSize: 18}}>Fast but unreliable</div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '2px solid #f59e0b',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div style={{fontSize: 24, color: '#fbbf24', fontWeight: 'bold', marginBottom: 12}}>At-least-once</div>
                  <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div style={{marginBottom: 8}}>May get duplicates</div>
                    <div style={{color: '#94a3b8', fontSize: 18}}>Most common</div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div style={{fontSize: 24, color: '#34d399', fontWeight: 'bold', marginBottom: 12}}>Exactly-once</div>
                  <div style={{fontSize: 20, color: '#cbd5e1', lineHeight: 1.8}}>
                    <div style={{marginBottom: 8}}>Perfect delivery</div>
                    <div style={{color: '#94a3b8', fontSize: 18}}>Slow & complex</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '2px solid rgba(139, 92, 246, 0.5)',
                  borderRadius: 10,
                  padding: 16,
                }}
              >
                <div style={{fontSize: 22, color: '#e2e8f0', textAlign: 'center', lineHeight: 2}}>
                  <span style={{color: '#c4b5fd', fontWeight: 'bold'}}>💡 Pro Tip:</span> Design for{' '}
                  <span style={{color: '#e9d5ff', fontWeight: 'bold'}}>idempotency</span> - make operations safe to retry!
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 5: When to Use Message Queues (3000-3600 frames / 100-120s) */}
      {frame >= 3000 && frame <= 3600 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: fadeIn(frame, 3000, 20),
              textAlign: 'center',
              filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4))',
            }}
          >
            When to Use Message Queues
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={3000} size={90} />
          <Character type="architect" x={width - 350} y={height - 200} startFrame={3000} size={90} />

          <Dialogue
            speaker="junior"
            text="This is powerful! When should I use message queues vs direct calls?"
            x={220}
            y={height - 280}
            startFrame={3030}
            maxWidth={500}
          />

          <Dialogue
            speaker="architect"
            text="Use message queues when you need decoupling, async processing, or load smoothing. Let me show you the decision tree!"
            x={width - 750}
            y={height - 280}
            startFrame={3120}
            maxWidth={700}
          />

          {frame >= 3210 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1700,
                opacity: fadeIn(frame, 3210, 20),
              }}
            >
              {/* Use Cases */}
              <div
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '3px solid #10b981',
                  boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: '#10b981',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                    marginBottom: 20,
                    textAlign: 'center',
                  }}
                >
                  ✅ Perfect Use Cases
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 22, color: '#e2e8f0'}}>
                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      🎬 Async Processing
                    </div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>
                      Video encoding, image processing, report generation - don't make user wait!
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      ⚖️ Load Smoothing
                    </div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>
                      Handle traffic spikes without overwhelming downstream services
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      🔌 Service Decoupling
                    </div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>
                      Services don't need to know about each other - just the queue
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      📧 Event Broadcasting
                    </div>
                    <div style={{fontSize: 20, color: '#cbd5e1'}}>
                      Order placed? Notify inventory, shipping, email, analytics all at once
                    </div>
                  </div>
                </div>
              </div>

              {/* Decision Guide */}
              <div
                style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '3px solid rgba(139, 92, 246, 0.5)',
                  borderRadius: 16,
                  padding: 20,
                  opacity: fadeIn(frame, 3390, 15),
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    color: '#c4b5fd',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(196, 181, 253, 0.5)',
                    textAlign: 'center',
                  }}
                >
                  🎯 Quick Decision Guide
                </div>
                <div style={{fontSize: 24, color: '#e2e8f0', marginTop: 12, textAlign: 'center', lineHeight: 2}}>
                  <span style={{color: '#3b82f6', fontWeight: 'bold'}}>Need immediate response?</span> → Use direct API call
                  <br />
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Can process later?</span> → Use message queue
                  <br />
                  <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Multiple consumers?</span> → Use topic/pub-sub
                  <br />
                  <span style={{color: '#ec4899', fontWeight: 'bold'}}>Need replay/audit?</span> → Use event stream
                  <br />
                  <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Task distribution?</span> → Use work queue
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
