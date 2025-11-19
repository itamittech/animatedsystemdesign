import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn, pulse} from '../design-system/animations';

/**
 * Distributed Transactions (Phase 3.6)
 * Covers: 2PC, Saga pattern, Eventual consistency, Compensating transactions, When to avoid
 * Duration: 105 seconds (3150 frames at 30fps)
 */
export const DistributedTransactions: React.FC = () => {
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
        <div style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
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
          <Title text="Distributed Transactions" subtitle="Maintaining Consistency Across Multiple Services" startFrame={0} />

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 270 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.48} startFrame={30} size={90} />
              <Character type="architect" x={width * 0.75} y={height * 0.48} startFrame={30} size={90} />

              <Dialogue
                speaker="junior"
                text="With sharded databases and microservices, how do we ensure data consistency across multiple systems?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={60}
                maxWidth={520}
              />

              <Dialogue
                speaker="architect"
                text="Great question! This is the distributed transaction problem. Let's see it with a real example."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={180}
                maxWidth={640}
              />
            </>
          )}

          {/* The Problem - E-commerce Order Example */}
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
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{fontSize: 28, fontWeight: 'bold', color: '#8b5cf6', marginBottom: 20, textAlign: 'center'}}>
                  🛒 The Problem: E-commerce Order
                </div>

                <div style={{fontSize: 18, color: '#e2e8f0', lineHeight: 2, marginBottom: 20}}>
                  When a customer places an order, we need to update <span style={{color: '#fbbf24', fontWeight: 'bold'}}>multiple services</span>:
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, opacity: fadeIn(frame, 330, 15)}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{fontSize: 32, marginBottom: 8}}>💳</div>
                    <div style={{fontSize: 18, color: '#60a5fa', fontWeight: 'bold', marginBottom: 8}}>Payment Service</div>
                    <div style={{fontSize: 24, color: '#cbd5e1'}}>Charge $100</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      border: '2px solid #10b981',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{fontSize: 32, marginBottom: 8}}>📦</div>
                    <div style={{fontSize: 18, color: '#34d399', fontWeight: 'bold', marginBottom: 8}}>Inventory Service</div>
                    <div style={{fontSize: 24, color: '#cbd5e1'}}>Reserve items</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.2)',
                      border: '2px solid #f59e0b',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{fontSize: 32, marginBottom: 8}}>📧</div>
                    <div style={{fontSize: 18, color: '#fbbf24', fontWeight: 'bold', marginBottom: 8}}>Order Service</div>
                    <div style={{fontSize: 24, color: '#cbd5e1'}}>Create order</div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    padding: 20,
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '2px solid #ef4444',
                    borderRadius: 12,
                    opacity: fadeIn(frame, 450, 15),
                  }}
                >
                  <div style={{fontSize: 20, color: '#ef4444', fontWeight: 'bold', marginBottom: 12}}>
                    ⚠️ What if payment succeeds but inventory fails?
                  </div>
                  <div style={{fontSize: 24, color: '#fca5a5'}}>
                    Customer charged but no order! We need <span style={{fontWeight: 'bold'}}>atomicity across services</span>.
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Scene 2: Two-Phase Commit (2PC) (600-1200 frames / 20-40s) */}
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
              color: '#8b5cf6',
              opacity: fadeIn(frame, 600, 20),
              textAlign: 'center',
            }}
          >
            Two-Phase Commit (2PC)
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 720 && (
            <>
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={600} size={90} />

              <Dialogue
                speaker="architect"
                text="2PC is the traditional approach. It has a PREPARE phase and a COMMIT phase with a coordinator."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={630}
                maxWidth={680}
              />
            </>
          )}

          {/* 2PC Diagram */}
          <div
            style={{
              position: 'absolute',
              top: 140,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 720, 20),
            }}
          >
            {/* Phase 1: Prepare */}
            <div
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '3px solid #3b82f6', boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                borderRadius: 16,
                padding: 24,
                marginBottom: 20,
              }}
            >
              <div style={{fontSize: 26, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                Phase 1: PREPARE (Vote) 🗳️
              </div>

              <div style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                {/* Coordinator */}
                <div
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    border: '3px solid transparent', backgroundImage: 'linear-gradient(rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)), linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
                    borderRadius: 12,
                    padding: 20,
                    textAlign: 'center',
                    width: 180,
                  }}
                >
                  <div style={{fontSize: 24, marginBottom: 8}}>👔</div>
                  <div style={{fontSize: 18, color: '#c4b5fd', fontWeight: 'bold'}}>Coordinator</div>
                  <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 8}}>Can you commit?</div>
                </div>

                <div style={{fontSize: 32, color: '#60a5fa'}}>→</div>

                {/* Participants */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {['Payment DB', 'Inventory DB', 'Order DB'].map((db, idx) => (
                    <div
                      key={db}
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        border: '2px solid #10b981',
                        borderRadius: 10,
                        padding: 12,
                        width: 200,
                        opacity: fadeIn(frame, 780 + idx * 60, 15),
                      }}
                    >
                      <div style={{fontSize: 24, color: '#34d399', fontWeight: 'bold'}}>{db}</div>
                      <div style={{fontSize: 20, color: '#10b981', marginTop: 4}}>✅ YES, ready!</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 2: Commit */}
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 960, 15),
              }}
            >
              <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                Phase 2: COMMIT (or ABORT) ✅
              </div>

              <div style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                <div
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                    border: '3px solid transparent', backgroundImage: 'linear-gradient(rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)), linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
                    borderRadius: 12,
                    padding: 20,
                    textAlign: 'center',
                    width: 180,
                  }}
                >
                  <div style={{fontSize: 24, marginBottom: 8}}>👔</div>
                  <div style={{fontSize: 18, color: '#c4b5fd', fontWeight: 'bold'}}>Coordinator</div>
                  <div style={{fontSize: 22, color: '#cbd5e1', marginTop: 8}}>All YES? COMMIT!</div>
                </div>

                <div style={{fontSize: 32, color: '#10b981'}}>→</div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2}}>
                  <div style={{color: '#10b981'}}>✅ All voted YES → <span style={{fontWeight: 'bold'}}>COMMIT</span></div>
                  <div style={{color: '#ef4444'}}>❌ Any voted NO → <span style={{fontWeight: 'bold'}}>ABORT all</span></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 3: 2PC Problems & Saga Introduction (1200-1950 frames / 40-65s) */}
      {frame >= 1200 && frame < 1950 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#8b5cf6',
              opacity: fadeIn(frame, 1200, 20),
              textAlign: 'center',
            }}
          >
            Saga Pattern - Modern Alternative
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 1410 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={1200} size={90} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={1200} size={90} />

              <Dialogue
                speaker="junior"
                text="What's wrong with 2PC? It sounds perfect!"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={1230}
                maxWidth={500}
              />

              <Dialogue
                speaker="architect"
                text="2PC blocks and can't handle coordinator failures well. Sagas use local transactions with compensations instead!"
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1320}
                maxWidth={700}
              />
            </>
          )}

          <div
            style={{
              position: 'absolute',
              top: 150,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
              opacity: fadeIn(frame, 1410, 20),
            }}
          >
            {/* 2PC Problems */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                borderRadius: 16,
                padding: 20,
                marginBottom: 24,
              }}
            >
              <div style={{fontSize: 24, color: '#ef4444', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                ⚠️ 2PC Problems
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, fontSize: 24, color: '#e2e8f0'}}>
                <div>
                  <span style={{color: '#fca5a5', fontWeight: 'bold'}}>🔒 Blocking</span><br/>
                  <span style={{fontSize: 22, color: '#94a3b8'}}>Resources locked until commit/abort</span>
                </div>
                <div>
                  <span style={{color: '#fca5a5', fontWeight: 'bold'}}>💥 Single Point of Failure</span><br/>
                  <span style={{fontSize: 22, color: '#94a3b8'}}>Coordinator failure = system halt</span>
                </div>
                <div>
                  <span style={{color: '#fca5a5', fontWeight: 'bold'}}>⏱️ High Latency</span><br/>
                  <span style={{fontSize: 22, color: '#94a3b8'}}>Multiple round trips required</span>
                </div>
              </div>
            </div>

            {/* Saga Pattern */}
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                borderRadius: 16,
                padding: 24,
                opacity: fadeIn(frame, 1530, 15),
              }}
            >
              <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                ✓ Saga Pattern: Local Transactions + Compensations
              </div>

              <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                Each service executes its <span style={{color: '#34d399', fontWeight: 'bold'}}>own local transaction</span>. If one fails, run <span style={{color: '#fbbf24', fontWeight: 'bold'}}>compensating transactions</span> to undo previous steps.
              </div>

              {/* Saga Flow */}
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 16,
                  opacity: fadeIn(frame, 1650, 15),
                }}
              >
                <div style={{textAlign: 'center'}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.3)',
                      border: '2px solid #3b82f6',
                      borderRadius: 10,
                      padding: 16,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#60a5fa', fontWeight: 'bold'}}>1. Charge Payment</div>
                    <div style={{fontSize: 20, color: '#10b981'}}>✅ Success</div>
                  </div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>Compensation:<br/>Refund payment</div>
                </div>

                <div style={{fontSize: 24, color: '#10b981'}}>→</div>

                <div style={{textAlign: 'center'}}>
                  <div
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      border: '2px solid #10b981',
                      borderRadius: 10,
                      padding: 16,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{fontSize: 24, color: '#34d399', fontWeight: 'bold'}}>2. Reserve Inventory</div>
                    <div style={{fontSize: 20, color: '#ef4444'}}>❌ Failed!</div>
                  </div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>Compensation:<br/>Release inventory</div>
                </div>

                <div style={{fontSize: 24, color: '#fbbf24'}}>⤺</div>

                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    border: '2px solid #ef4444',
                    borderRadius: 10,
                    padding: 16,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontSize: 24, color: '#fca5a5', fontWeight: 'bold'}}>Rollback</div>
                  <div style={{fontSize: 20, color: '#cbd5e1', marginTop: 4}}>Run compensations<br/>to undo step 1</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 4: Saga Types - Choreography vs Orchestration (1950-2550 frames / 65-85s) */}
      {frame >= 1950 && frame < 2550 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#8b5cf6',
              opacity: fadeIn(frame, 1950, 20),
              textAlign: 'center',
            }}
          >
            Saga Implementation Patterns
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 2070 && (
            <>
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={1950} size={90} />

              <Dialogue
                speaker="architect"
                text="There are two ways to implement Sagas: Choreography (event-driven) and Orchestration (centralized)."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={1980}
                maxWidth={700}
              />
            </>
          )}

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 1700,
            }}
          >
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40}}>
              {/* Choreography */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '3px solid #3b82f6', boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 2070, 15),
                }}
              >
                <div style={{fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  🔄 Choreography
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  Services publish and listen to events. <span style={{color: '#60a5fa', fontWeight: 'bold'}}>No central coordinator</span>.
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
                  <div>1️⃣ Payment → <span style={{color: '#10b981'}}>PaymentCompleted</span></div>
                  <div>2️⃣ Inventory listens → Reserve items</div>
                  <div>3️⃣ Inventory → <span style={{color: '#10b981'}}>InventoryReserved</span></div>
                  <div>4️⃣ Order listens → Create order</div>
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold'}}>✓ Pros:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Loose coupling<br/>• No single point of failure</div>
                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 8}}>✗ Cons:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Hard to track flow<br/>• Complex debugging</div>
                </div>
              </div>

              {/* Orchestration */}
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '3px solid #f59e0b', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 2190, 15),
                }}
              >
                <div style={{fontSize: 24, color: '#f59e0b', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  🎯 Orchestration
                </div>

                <div style={{fontSize: 24, color: '#e2e8f0', lineHeight: 2, marginBottom: 16}}>
                  <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Central orchestrator</span> coordinates the saga steps.
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
                  <div style={{color: '#fbbf24', fontWeight: 'bold', marginBottom: 8}}>Orchestrator controls:</div>
                  <div>1️⃣ Call Payment Service</div>
                  <div>2️⃣ Call Inventory Service</div>
                  <div>3️⃣ Call Order Service</div>
                  <div style={{color: '#ef4444', marginTop: 8}}>If any fails → Run compensations</div>
                </div>

                <div style={{fontSize: 22, color: '#e2e8f0', lineHeight: 1.8}}>
                  <div style={{color: '#10b981', fontWeight: 'bold'}}>✓ Pros:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Easy to understand<br/>• Clear flow control</div>
                  <div style={{color: '#ef4444', fontWeight: 'bold', marginTop: 8}}>✗ Cons:</div>
                  <div style={{fontSize: 20, color: '#94a3b8'}}>• Central dependency<br/>• Orchestrator complexity</div>
                </div>
              </div>
            </div>

            {/* Eventual Consistency Note */}
            <div
              style={{
                marginTop: 24,
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                border: '3px solid transparent', backgroundImage: 'linear-gradient(rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)), linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
                borderRadius: 16,
                padding: 20,
                opacity: fadeIn(frame, 2370, 15),
              }}
            >
              <div style={{fontSize: 22, color: '#c4b5fd', fontWeight: 'bold', marginBottom: 12, textAlign: 'center'}}>
                ⏱️ Key Insight: Eventual Consistency
              </div>
              <div style={{fontSize: 24, color: '#e2e8f0', textAlign: 'center'}}>
                Sagas embrace <span style={{color: '#e9d5ff', fontWeight: 'bold'}}>eventual consistency</span>. The system may be temporarily inconsistent but will eventually become consistent after all compensations complete.
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scene 5: When to Avoid & Best Practices (2550-3150 frames / 85-105s) */}
      {frame >= 2550 && frame <= 3150 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#8b5cf6',
              opacity: fadeIn(frame, 2550, 20),
              textAlign: 'center',
            }}
          >
            When to Avoid & Best Practices
          </div>

          {/* Characters and dialogues - centered and spread for readability */}
          {frame < 2760 && (
            <>
              <Character type="junior" x={width * 0.25} y={height * 0.50} startFrame={2550} size={90} />
              <Character type="architect" x={width * 0.75} y={height * 0.50} startFrame={2550} size={90} />

              <Dialogue
                speaker="junior"
                text="When should we avoid distributed transactions altogether?"
                x={width * 0.10}
                y={height * 0.64}
                startFrame={2580}
                maxWidth={500}
              />

              <Dialogue
                speaker="architect"
                text="Great question! Sometimes the best distributed transaction is the one you don't need. Let's see alternatives."
                x={width * 0.60}
                y={height * 0.64}
                startFrame={2670}
                maxWidth={700}
              />
            </>
          )}

          {frame >= 2760 && (
            <div
              style={{
                position: 'absolute',
                top: 160,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 1700,
                opacity: fadeIn(frame, 2760, 20),
              }}
            >
              {/* When to Avoid */}
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '3px solid #ef4444', boxShadow: '0 0 16px rgba(239, 68, 68, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 20,
                }}
              >
                <div style={{fontSize: 26, color: '#ef4444', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  🚫 When to Avoid Distributed Transactions
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, fontSize: 24, color: '#e2e8f0'}}>
                  <div>
                    <div style={{color: '#fca5a5', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      Rethink Service Boundaries
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1'}}>
                      If you need distributed transactions, maybe you split services wrong! Keep related data together.
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#fca5a5', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      Use Single Database
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1'}}>
                      Don't microservice too early. A well-designed monolith with one DB is simpler and faster.
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#fca5a5', fontWeight: 'bold', fontSize: 24, marginBottom: 8}}>
                      Accept Inconsistency
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1'}}>
                      Not all data needs to be perfectly consistent. Analytics can tolerate delays.
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '3px solid #10b981', boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  borderRadius: 16,
                  padding: 24,
                  opacity: fadeIn(frame, 2880, 15),
                }}
              >
                <div style={{fontSize: 26, color: '#10b981', fontWeight: 'bold', marginBottom: 16, textAlign: 'center'}}>
                  💡 Best Practices
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, fontSize: 24, color: '#e2e8f0'}}>
                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 18, marginBottom: 8}}>
                      ✓ Idempotency
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.7}}>
                      All operations must be safely retryable. Use unique IDs to prevent duplicate processing.
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 18, marginBottom: 8}}>
                      ✓ Timeouts & Retries
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.7}}>
                      Set timeouts for each step. Use exponential backoff for retries with circuit breakers.
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 18, marginBottom: 8}}>
                      ✓ Monitoring & Observability
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.7}}>
                      Track saga state. Alert on stuck transactions. Distributed tracing is essential!
                    </div>
                  </div>

                  <div>
                    <div style={{color: '#34d399', fontWeight: 'bold', fontSize: 18, marginBottom: 8}}>
                      ✓ Test Failure Scenarios
                    </div>
                    <div style={{fontSize: 22, color: '#cbd5e1', lineHeight: 1.7}}>
                      Test compensations! Simulate failures. Chaos engineering helps find issues.
                    </div>
                  </div>
                </div>
              </div>

              {/* Decision Guide */}
              <div
                style={{
                  marginTop: 20,
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '3px solid transparent', backgroundImage: 'linear-gradient(rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)), linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
                  borderRadius: 16,
                  padding: 20,
                  opacity: fadeIn(frame, 3000, 15),
                }}
              >
                <div style={{fontSize: 24, color: '#c4b5fd', fontWeight: 'bold', textAlign: 'center'}}>
                  🎯 Quick Decision Guide
                </div>
                <div style={{fontSize: 24, color: '#e2e8f0', marginTop: 12, textAlign: 'center', lineHeight: 2}}>
                  <span style={{color: '#3b82f6', fontWeight: 'bold'}}>Single service/DB?</span> → Use local transactions (ACID)<br/>
                  <span style={{color: '#10b981', fontWeight: 'bold'}}>Need strong consistency?</span> → Consider 2PC (with caution)<br/>
                  <span style={{color: '#f59e0b', fontWeight: 'bold'}}>Can tolerate eventual consistency?</span> → Use Sagas (recommended)<br/>
                  <span style={{color: '#ef4444', fontWeight: 'bold'}}>Complex coordination needed?</span> → Orchestrated Saga<br/>
                  <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>Fully decoupled services?</span> → Choreographed Saga
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
