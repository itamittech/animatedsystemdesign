import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Full-Text Search (Phase 9.1)
 * Duration: 80 seconds (2400 frames at 30fps)
 *
 * Scene 1 (0-20s): Search vs Database Queries - The Problem
 * Scene 2 (20-42s): Inverted Index - The Solution
 * Scene 3 (42-62s): Tokenization, Stemming & Relevance Scoring
 * Scene 4 (62-80s): Search Engines & Best Practices
 */

export const FullTextSearch: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 600;
  const scene2End = 1260;
  const scene3End = 1860;
  const scene4End = 2400;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Full-Text Search" subtitle="How Search Engines Work" />
          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="How does Google search billions of pages in milliseconds? Database LIKE queries are way too slow!" x={100} y={height - 280} startFrame={90} />
          <Dialogue speaker="architect" text="Exactly! Search engines use INVERTED INDEXES, not database scans. Let me show you the difference!" x={width - 750} y={height - 280} startFrame={240} />

          <div style={{position: 'absolute', top: 340, left: width / 2 - 820, width: 1640, opacity: fadeIn(frame, 390, 30)}}>
            <div style={{display: 'flex', gap: 40, marginBottom: 30}}>
              {/* Database LIKE Query */}
              <div style={{flex: 1, opacity: fadeIn(frame, 420, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#ef4444', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(239, 68, 68, 0.6)'}}>❌ Database LIKE Query</h2>
                <div style={{padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, marginBottom: 16}}>
                  <div style={{fontFamily: 'monospace', fontSize: 20, color: '#fecaca', marginBottom: 16}}>
                    SELECT * FROM products<br />
                    WHERE description LIKE '%coffee%'
                  </div>
                  <div style={{fontSize: 19, color: '#fef3c7', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                    <strong style={{color: '#fca5a5'}}>Problem:</strong><br />
                    • Scans EVERY row sequentially<br />
                    • No index support for %word%<br />
                    • O(n) complexity = SLOW!<br />
                    • 1M products = 1M reads
                  </div>
                </div>
                <div style={{padding: 20, background: 'rgba(239, 68, 68, 0.2)', borderRadius: 12, textAlign: 'center'}}>
                  <div style={{fontSize: 28, fontWeight: 700, color: '#fca5a5', fontFamily: theme.typography.heading.fontFamily}}>⏱️ 5-10 seconds</div>
                  <div style={{fontSize: 18, color: '#fecaca', fontFamily: theme.typography.body.fontFamily}}>on 1M documents</div>
                </div>
              </div>

              {/* Search Engine */}
              <div style={{flex: 1, opacity: fadeIn(frame, 450, 25)}}>
                <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(16, 185, 129, 0.6)'}}>✅ Search Engine (Inverted Index)</h2>
                <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14, marginBottom: 16}}>
                  <div style={{fontFamily: 'monospace', fontSize: 20, color: '#d1fae5', marginBottom: 16}}>
                    GET /search?q=coffee
                  </div>
                  <div style={{fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                    <strong style={{color: '#6ee7b7'}}>Solution:</strong><br />
                    • Pre-built index: word → docs<br />
                    • Direct lookup in hash/tree<br />
                    • O(1) or O(log n) = FAST!<br />
                    • 1M products, instant results
                  </div>
                </div>
                <div style={{padding: 20, background: 'rgba(16, 185, 129, 0.2)', borderRadius: 12, textAlign: 'center'}}>
                  <div style={{fontSize: 28, fontWeight: 700, color: '#6ee7b7', fontFamily: theme.typography.heading.fontFamily}}>⚡ 10-50 milliseconds</div>
                  <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily}}>on 1M documents</div>
                </div>
              </div>
            </div>

            <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, 480, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>💡 Key Insight</h3>
              <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                <strong>Trade-off:</strong> Search engines pre-compute indexes (write-time cost) for instant reads (read-time gain)<br />
                Perfect for read-heavy workloads like search!
              </div>
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Inverted Index" subtitle="The Core Data Structure" />

          <div style={{position: 'absolute', top: 260, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#60a5fa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>📖 What is an Inverted Index?</h3>
              <p style={{fontSize: 22, color: '#dbeafe', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Maps words → documents (opposite of documents → words)<br />
                Like a book index: "coffee" → pages 45, 67, 89
              </p>
            </div>

            {/* Example Documents */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene1End + 60, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#f59e0b', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📄 Sample Documents</h3>
              <div style={{display: 'flex', gap: 20}}>
                {[
                  {id: 'Doc 1', text: 'The quick brown fox jumps over lazy dog', color: '#3b82f6'},
                  {id: 'Doc 2', text: 'Quick brown dogs jump high', color: '#10b981'},
                  {id: 'Doc 3', text: 'Lazy cats and quick foxes', color: '#8b5cf6'}
                ].map((doc, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: `${doc.color}22`, border: `2px solid ${doc.color}`, borderRadius: 12, opacity: fadeIn(frame, scene1End + 90 + i * 15, 15)}}>
                    <div style={{fontSize: 22, fontWeight: 700, color: doc.color, marginBottom: 10, fontFamily: theme.typography.heading.fontFamily}}>{doc.id}</div>
                    <div style={{fontSize: 18, color: theme.text.secondary, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.5}}>{doc.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inverted Index Table */}
            <div style={{opacity: fadeIn(frame, scene1End + 150, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#10b981', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🔍 Inverted Index (After Processing)</h3>
              <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14}}>
                <div style={{fontFamily: 'monospace', fontSize: 19, color: '#d1fae5', lineHeight: 2.2}}>
                  <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '12px'}}>
                    <div style={{fontWeight: 700, color: '#6ee7b7'}}>Term (Word)</div>
                    <div style={{fontWeight: 700, color: '#6ee7b7'}}>Document IDs (Posting List)</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 180, 12)}}>brown</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 180, 12)}}>→ [Doc1, Doc2]</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 195, 12)}}>cat</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 195, 12)}}>→ [Doc3]</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 210, 12)}}>dog</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 210, 12)}}>→ [Doc1, Doc2]</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 225, 12)}}>fox</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 225, 12)}}>→ [Doc1, Doc3]</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 240, 12)}}>jump</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 240, 12)}}>→ [Doc1, Doc2]</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 255, 12)}}>lazy</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 255, 12)}}>→ [Doc1, Doc3]</div>

                    <div style={{opacity: fadeIn(frame, scene1End + 270, 12)}}>quick</div>
                    <div style={{opacity: fadeIn(frame, scene1End + 270, 12)}}>→ [Doc1, Doc2, Doc3]</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{marginTop: 20, padding: 20, background: 'rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b', borderRadius: 12, opacity: fadeIn(frame, scene1End + 330, 25)}}>
              <div style={{fontSize: 20, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                <strong style={{color: '#fbbf24'}}>Query: "quick fox"</strong> → Lookup "quick" → [Doc1, Doc2, Doc3], Lookup "fox" → [Doc1, Doc3]<br />
                <strong style={{color: '#6ee7b7'}}>Intersection:</strong> Doc1 and Doc3 contain both terms! ⚡
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 390} />
          <Dialogue speaker="junior" text="So we flip the index! Instead of document → words, we index word → documents. Genius!" x={100} y={height - 280} startFrame={scene1End + 420} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Text Processing & Relevance Scoring" subtitle="Making Search Smart" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            {/* Tokenization & Stemming */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>🔤 Text Processing Pipeline</h2>

              <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, marginBottom: 20}}>
                <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: 'monospace', marginBottom: 12}}>
                  Original: <span style={{color: '#c4b5fd'}}>"The Dogs are Running quickly!"</span>
                </div>
                <div style={{fontSize: 20, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 2}}>
                  <div style={{opacity: fadeIn(frame, scene2End + 60, 15)}}>
                    <strong style={{color: '#a78bfa'}}>1. Lowercase:</strong> "the dogs are running quickly!"
                  </div>
                  <div style={{opacity: fadeIn(frame, scene2End + 75, 15)}}>
                    <strong style={{color: '#a78bfa'}}>2. Tokenize:</strong> ["the", "dogs", "are", "running", "quickly"]
                  </div>
                  <div style={{opacity: fadeIn(frame, scene2End + 90, 15)}}>
                    <strong style={{color: '#a78bfa'}}>3. Remove Stop Words:</strong> ["dogs", "running", "quickly"]
                  </div>
                  <div style={{opacity: fadeIn(frame, scene2End + 105, 15)}}>
                    <strong style={{color: '#a78bfa'}}>4. Stemming:</strong> ["dog", "run", "quick"]
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', gap: 20}}>
                <div style={{flex: 1, padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene2End + 135, 20)}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Why Stemming?</h4>
                  <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                    Match related forms:<br />
                    • run, running, runs → "run"<br />
                    • dog, dogs → "dog"<br />
                    • quick, quickly → "quick"<br />
                    Improves recall!
                  </div>
                </div>
                <div style={{flex: 1, padding: 20, background: 'rgba(239, 68, 68, 0.15)', border: '2px solid #ef4444', borderRadius: 12, opacity: fadeIn(frame, scene2End + 155, 20)}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#fca5a5', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Stop Words</h4>
                  <div style={{fontSize: 18, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                    Common words removed:<br />
                    • "the", "is", "are", "and"<br />
                    • "a", "an", "to", "in"<br />
                    • Low information value<br />
                    Reduces index size!
                  </div>
                </div>
              </div>
            </div>

            {/* Relevance Scoring */}
            <div style={{opacity: fadeIn(frame, scene2End + 210, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#f59e0b', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>📊 Relevance Scoring: TF-IDF</h2>
              <div style={{padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14}}>
                <div style={{fontSize: 22, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, marginBottom: 16, textAlign: 'center'}}>
                  <strong style={{fontSize: 24, color: '#fbbf24'}}>TF-IDF = Term Frequency × Inverse Document Frequency</strong>
                </div>
                <div style={{display: 'flex', gap: 20, marginTop: 16}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 20, fontWeight: 700, color: '#fbbf24', marginBottom: 10, fontFamily: theme.typography.heading.fontFamily}}>TF (Term Frequency)</div>
                    <div style={{fontSize: 18, color: '#fef3c7', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                      How often term appears in doc<br />
                      "coffee" appears 5 times → TF = 5<br />
                      <strong>More frequent = more relevant</strong>
                    </div>
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 20, fontWeight: 700, color: '#fbbf24', marginBottom: 10, fontFamily: theme.typography.heading.fontFamily}}>IDF (Inverse Doc Frequency)</div>
                    <div style={{fontSize: 18, color: '#fef3c7', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                      How rare is the term overall<br />
                      "the" in all docs → IDF = low<br />
                      <strong>Rare words = more valuable</strong>
                    </div>
                  </div>
                </div>
                <div style={{marginTop: 20, padding: 16, background: 'rgba(245, 158, 11, 0.2)', borderRadius: 10, textAlign: 'center'}}>
                  <div style={{fontSize: 20, color: '#fde68a', fontFamily: 'monospace'}}>
                    Score = TF × log(Total Docs / Docs with Term)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 330} />
          <Dialogue speaker="architect" text="Process text first (stem, tokenize), then rank results by TF-IDF. Rare words score higher!" x={width - 750} y={height - 280} startFrame={scene2End + 360} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Search Engines & Best Practices" subtitle="Production-Ready Search" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#3b82f6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(59, 130, 246, 0.6)'}}>🔧 Popular Search Engines</h2>
              <div style={{display: 'flex', gap: 20, marginBottom: 20}}>
                {[
                  {
                    name: 'Elasticsearch',
                    desc: 'Most popular, built on Lucene',
                    features: ['Distributed & scalable', 'RESTful JSON API', 'Real-time search', 'Analytics (aggregations)'],
                    color: '#3b82f6',
                    use: 'General purpose'
                  },
                  {
                    name: 'Apache Solr',
                    desc: 'Enterprise search, also Lucene',
                    features: ['Mature & stable', 'Rich query syntax', 'Faceting built-in', 'Schema flexibility'],
                    color: '#10b981',
                    use: 'Enterprise apps'
                  },
                  {
                    name: 'Algolia',
                    desc: 'Hosted, blazing fast',
                    features: ['Typo tolerance', 'Sub-10ms latency', 'Easy integration', 'Analytics dashboard'],
                    color: '#8b5cf6',
                    use: 'SaaS/websites'
                  }
                ].map((engine, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: `linear-gradient(135deg, ${engine.color}22, ${engine.color}11)`, border: `3px solid ${engine.color}`, borderRadius: 14, opacity: fadeIn(frame, scene3End + 60 + i * 20, 20), boxShadow: `0 0 20px ${engine.color}44`}}>
                    <h3 style={{fontSize: 24, fontWeight: 700, color: engine.color, textAlign: 'center', marginBottom: 8, fontFamily: theme.typography.heading.fontFamily}}>{engine.name}</h3>
                    <div style={{fontSize: 18, color: theme.text.secondary, textAlign: 'center', marginBottom: 12, fontFamily: theme.typography.body.fontFamily, fontStyle: 'italic'}}>{engine.desc}</div>
                    {engine.features.map((feat, j) => (
                      <div key={j} style={{fontSize: 17, color: theme.text.muted, marginBottom: 6, fontFamily: theme.typography.body.fontFamily}}>• {feat}</div>
                    ))}
                    <div style={{marginTop: 12, padding: 10, background: `${engine.color}22`, borderRadius: 8, fontSize: 18, color: engine.color, textAlign: 'center', fontFamily: theme.typography.body.fontFamily, fontWeight: 700}}>
                      {engine.use}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene3End + 150, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>✅ Best Practices</h2>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 18}}>
                {[
                  '🔍 Choose right analyzer (language-specific: English, Spanish, etc.)',
                  '⚡ Use filters for faceting (category, price range, brand)',
                  '📊 Monitor query performance (slow queries, cache hit rate)',
                  '🔄 Bulk index updates (batch writes, not one-by-one)',
                  '💾 Separate read/write clusters (avoid indexing slowdown)',
                  '🎯 Boost important fields (title > description > tags)',
                  '🔑 Use query string wisely (avoid wildcards at start)',
                  '📈 Track search analytics (popular queries, zero results)'
                ].map((practice, i) => (
                  <div key={i} style={{width: 795, padding: '14px 20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))', border: '2px solid #10b981', borderRadius: 12, fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, opacity: fadeIn(frame, scene3End + 180 + i * 10, 12), boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'}}>{practice}</div>
                ))}
              </div>
            </div>

            <div style={{marginTop: 20, padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene3End + 270, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🎯 When to Use Search vs Database</h3>
              <div style={{fontSize: 20, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                <strong style={{color: '#6ee7b7'}}>Use Search Engine:</strong> Full-text queries, fuzzy matching, relevance ranking<br />
                <strong style={{color: '#fca5a5'}}>Use Database:</strong> Exact matches, structured queries, transactional consistency
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 330} />
          <Dialogue speaker="junior" text="Elasticsearch for full-text search, databases for exact lookups. Each tool for the right job!" x={100} y={height - 280} startFrame={scene3End + 360} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
