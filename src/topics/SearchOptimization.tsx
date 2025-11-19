import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {Title} from '../components/Title';
import {Character} from '../components/Character';
import {Dialogue} from '../components/Dialogue';
import {fadeIn} from '../design-system/animations';

/**
 * Search Optimization (Phase 9.2)
 * Duration: 75 seconds (2250 frames at 30fps)
 *
 * Scene 1 (0-19s): Fuzzy Matching & Typo Tolerance
 * Scene 2 (19-38s): Autocomplete & Suggestions
 * Scene 3 (38-56s): Faceted Search & Geo-Search
 * Scene 4 (56-75s): Search Result Ranking & Personalization
 */

export const SearchOptimization: React.FC = () => {
  const frame = useCurrentFrame();
  const width = 1920;
  const height = 1080;

  const scene1End = 570;
  const scene2End = 1140;
  const scene3End = 1680;
  const scene4End = 2250;

  return (
    <AbsoluteFill style={{backgroundColor: theme.background.primary}}>
      {frame < scene1End && (
        <>
          <Title text="Search Optimization" subtitle="Advanced Search Techniques" />
          <Character type="junior" x={200} y={height / 2 + 100} startFrame={30} />
          <Character type="architect" x={width - 400} y={height / 2 + 100} startFrame={30} />
          <Dialogue speaker="junior" text="Users misspell words all the time. How do we handle 'iPohne' instead of 'iPhone'?" x={100} y={height - 280} startFrame={90} />
          <Dialogue speaker="architect" text="Fuzzy matching! We calculate edit distance and tolerate typos. Let me show you the algorithms!" x={width - 750} y={height - 280} startFrame={240} />

          <div style={{position: 'absolute', top: 340, left: width / 2 - 850, width: 1700, opacity: fadeIn(frame, 390, 30)}}>
            <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 24, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>🎯 Fuzzy Matching & Typo Tolerance</h2>

            <div style={{marginBottom: 30}}>
              <div style={{padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14, marginBottom: 20}}>
                <h3 style={{fontSize: 26, fontWeight: 700, color: '#60a5fa', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>📏 Levenshtein Distance (Edit Distance)</h3>
                <div style={{fontSize: 20, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, marginBottom: 16, lineHeight: 1.7}}>
                  Minimum number of single-character edits (insertions, deletions, substitutions) to transform one string into another
                </div>
                <div style={{display: 'flex', gap: 30}}>
                  <div style={{flex: 1}}>
                    <div style={{fontFamily: 'monospace', fontSize: 22, color: '#93c5fd', marginBottom: 10}}>
                      "kitten" → "sitting"
                    </div>
                    <div style={{fontSize: 18, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8, opacity: fadeIn(frame, 420, 20)}}>
                      1. k → s (substitute)<br />
                      2. e → i (substitute)<br />
                      3. insert g<br />
                      <strong style={{color: '#60a5fa'}}>Distance = 3</strong>
                    </div>
                  </div>
                  <div style={{flex: 1, opacity: fadeIn(frame, 450, 20)}}>
                    <div style={{fontFamily: 'monospace', fontSize: 22, color: '#93c5fd', marginBottom: 10}}>
                      "iPhone" vs "iPohne"
                    </div>
                    <div style={{fontSize: 18, color: '#dbeafe', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      1. swap 'h' and 'n'<br />
                      <br />
                      <strong style={{color: '#60a5fa'}}>Distance = 2</strong><br />
                      <strong style={{color: '#6ee7b7'}}>✓ Accept (distance ≤ 2)</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', gap: 20, opacity: fadeIn(frame, 480, 25)}}>
                <div style={{flex: 1, padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🎯 N-gram Matching</h4>
                  <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                    Break words into overlapping chunks:<br />
                    <strong>"search"</strong> → se, ea, ar, rc, ch<br />
                    <strong>"saerch"</strong> → sa, ae, er, rc, ch<br />
                    Match score: 2/5 = 40% similar
                  </div>
                </div>
                <div style={{flex: 1, padding: 20, background: 'rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b', borderRadius: 12}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#fbbf24', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🔊 Phonetic Matching</h4>
                  <div style={{fontSize: 18, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                    Match by sound (Soundex, Metaphone):<br />
                    <strong>"Smith"</strong> → S530<br />
                    <strong>"Smythe"</strong> → S530<br />
                    Match! Sounds the same
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene1End && frame < scene2End && (
        <>
          <Title text="Autocomplete & Suggestions" subtitle="Search as You Type" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, opacity: fadeIn(frame, scene1End + 30, 25), textAlign: 'center'}}>
              <h3 style={{fontSize: 28, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>⚡ Autocomplete Requirements</h3>
              <p style={{fontSize: 22, color: '#e9d5ff', margin: 0, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.6}}>
                Must be FAST (&lt; 100ms) and relevant. Users type 3-5 chars/second!
              </p>
            </div>

            {/* Trie Data Structure */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene1End + 60, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#3b82f6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🌳 Trie (Prefix Tree) for Autocomplete</h2>

              <div style={{display: 'flex', gap: 30}}>
                <div style={{flex: 1}}>
                  <div style={{padding: 24, background: 'rgba(59, 130, 246, 0.15)', border: '3px solid #3b82f6', borderRadius: 14}}>
                    <h4 style={{fontSize: 24, fontWeight: 700, color: '#60a5fa', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>Visual: Trie Structure</h4>
                    <svg width="720" height="320" opacity={fadeIn(frame, scene1End + 90, 20)}>
                      {/* Root */}
                      <circle cx={360} cy={30} r={20} fill="#3b82f6" opacity={fadeIn(frame, scene1End + 105, 15)} />
                      <text x={360} y={38} textAnchor="middle" fill="#fff" fontSize={18} fontWeight="700">ROOT</text>

                      {/* Level 1: c, s */}
                      <g opacity={fadeIn(frame, scene1End + 120, 15)}>
                        <line x1={360} y1={50} x2={260} y2={90} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={260} cy={100} r={18} fill="#10b981" />
                        <text x={260} y={107} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">c</text>

                        <line x1={360} y1={50} x2={460} y2={90} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={460} cy={100} r={18} fill="#10b981" />
                        <text x={460} y={107} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">s</text>
                      </g>

                      {/* Level 2: ca, se */}
                      <g opacity={fadeIn(frame, scene1End + 135, 15)}>
                        <line x1={260} y1={118} x2={200} y2={158} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={200} cy={170} r={18} fill="#10b981" />
                        <text x={200} y={177} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">a</text>

                        <line x1={460} y1={118} x2={420} y2={158} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={420} cy={170} r={18} fill="#10b981" />
                        <text x={420} y={177} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">e</text>

                        <line x1={460} y1={118} x2={500} y2={158} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={500} cy={170} r={18} fill="#10b981" />
                        <text x={500} y={177} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">h</text>
                      </g>

                      {/* Level 3: cat, car, search, shop */}
                      <g opacity={fadeIn(frame, scene1End + 150, 15)}>
                        <line x1={200} y1={188} x2={160} y2={228} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={160} cy={240} r={18} fill="#f59e0b" />
                        <text x={160} y={247} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">t</text>
                        <text x={160} y={270} textAnchor="middle" fill="#fbbf24" fontSize={14}>cat</text>

                        <line x1={200} y1={188} x2={240} y2={228} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={240} cy={240} r={18} fill="#f59e0b" />
                        <text x={240} y={247} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">r</text>
                        <text x={240} y={270} textAnchor="middle" fill="#fbbf24" fontSize={14}>car</text>

                        <line x1={420} y1={188} x2={380} y2={228} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={380} cy={240} r={18} fill="#f59e0b" />
                        <text x={380} y={247} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">a...</text>
                        <text x={380} y={270} textAnchor="middle" fill="#fbbf24" fontSize={14}>search</text>

                        <line x1={500} y1={188} x2={500} y2={228} stroke="#60a5fa" strokeWidth={2} />
                        <circle cx={500} cy={240} r={18} fill="#f59e0b" />
                        <text x={500} y={247} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="700">o...</text>
                        <text x={500} y={270} textAnchor="middle" fill="#fbbf24" fontSize={14}>shop</text>
                      </g>

                      <text x={360} y={310} textAnchor="middle" fill="#94a3b8" fontSize={18}>
                        Query "se" → Traverse s→e → Return all children: [search]
                      </text>
                    </svg>
                  </div>
                </div>

                <div style={{flex: 1}}>
                  <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14, marginBottom: 20, opacity: fadeIn(frame, scene1End + 180, 25)}}>
                    <h4 style={{fontSize: 24, fontWeight: 700, color: '#6ee7b7', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>⚡ Why Trie is Fast</h4>
                    <div style={{fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      <strong>O(k)</strong> where k = query length<br />
                      Type "sea" (3 chars) → 3 lookups<br />
                      <br />
                      <strong style={{color: '#6ee7b7'}}>Not dependent on:</strong><br />
                      • Number of documents<br />
                      • Size of vocabulary<br />
                      <br />
                      <strong style={{color: '#fbbf24'}}>Perfect for autocomplete!</strong>
                    </div>
                  </div>

                  <div style={{padding: 20, background: 'rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b', borderRadius: 12, opacity: fadeIn(frame, scene1End + 210, 25)}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#fbbf24', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🎯 Ranking Suggestions</h4>
                    <div style={{fontSize: 18, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                      1. <strong>Popularity:</strong> Most searched<br />
                      2. <strong>Recency:</strong> Trending queries<br />
                      3. <strong>Personal:</strong> User history<br />
                      4. <strong>Context:</strong> Location, device
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene1End + 300} />
          <Dialogue speaker="junior" text="Trie data structure for prefix matching! O(k) complexity makes autocomplete instant!" x={100} y={height - 280} startFrame={scene1End + 330} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene2End && frame < scene3End && (
        <>
          <Title text="Faceted Search & Geo-Search" subtitle="Advanced Filtering" />

          <div style={{position: 'absolute', top: 270, left: width / 2 - 820, width: 1640}}>
            {/* Faceted Search */}
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene2End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#8b5cf6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(139, 92, 246, 0.6)'}}>🎛️ Faceted Search (Filters)</h2>

              <div style={{padding: 24, background: 'rgba(139, 92, 246, 0.15)', border: '3px solid #8b5cf6', borderRadius: 14, marginBottom: 20}}>
                <div style={{fontSize: 22, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, marginBottom: 16, textAlign: 'center'}}>
                  <strong style={{color: '#c4b5fd'}}>Allow users to filter results by multiple dimensions simultaneously</strong>
                </div>
                <div style={{display: 'flex', gap: 20}}>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#a78bfa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>E-commerce Example</h4>
                    <div style={{fontSize: 19, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8, opacity: fadeIn(frame, scene2End + 60, 20)}}>
                      Search: <strong>"laptop"</strong><br />
                      <br />
                      <strong style={{color: '#c4b5fd'}}>Facets (Filters):</strong><br />
                      • Brand: [Apple, Dell, HP]<br />
                      • Price: [$500-$1000, $1000-$1500]<br />
                      • RAM: [8GB, 16GB, 32GB]<br />
                      • Rating: [4+ stars, 3+ stars]<br />
                      • In Stock: [Yes, No]
                    </div>
                  </div>
                  <div style={{flex: 1, opacity: fadeIn(frame, scene2End + 90, 20)}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#a78bfa', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Implementation</h4>
                    <div style={{fontSize: 18, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      <strong>Elasticsearch Aggregations:</strong><br />
                      <div style={{fontFamily: 'monospace', fontSize: 17, color: '#c4b5fd', background: 'rgba(139, 92, 246, 0.2)', padding: 16, borderRadius: 8, marginTop: 12}}>
                        {`{
  "aggs": {
    "brands": {
      "terms": {"field": "brand"}
    },
    "price_ranges": {
      "range": {"field": "price",
        "ranges": [
          {"from": 500, "to": 1000},
          {"from": 1000, "to": 1500}
        ]
      }
    }
  }
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12, opacity: fadeIn(frame, scene2End + 135, 25)}}>
                <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>💡 Why Facets Matter</h4>
                <div style={{fontSize: 20, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.7}}>
                  Users refine search iteratively: Search "laptop" (10K results) → Filter by Apple (500) → 16GB RAM (50) → Perfect!
                </div>
              </div>
            </div>

            {/* Geo-Search */}
            <div style={{opacity: fadeIn(frame, scene2End + 180, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#3b82f6', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🌍 Geo-Spatial Search</h2>
              <div style={{display: 'flex', gap: 20}}>
                {[
                  {
                    title: 'Geohash',
                    desc: 'Encode lat/lon into short string',
                    example: 'SF: "9q8yy" (5 chars = ~5km)',
                    how: 'Divide world recursively into grid',
                    color: '#3b82f6'
                  },
                  {
                    title: 'Bounding Box',
                    desc: 'Rectangle: min/max lat/lon',
                    example: 'lat: [37.7, 37.8], lon: [-122.5, -122.4]',
                    how: 'Simple range queries, fast!',
                    color: '#10b981'
                  },
                  {
                    title: 'Radius Search',
                    desc: 'Find within distance from point',
                    example: 'Restaurants within 5km of me',
                    how: 'Calculate distance, filter by radius',
                    color: '#f59e0b'
                  }
                ].map((method, i) => (
                  <div key={i} style={{flex: 1, padding: 20, background: `linear-gradient(135deg, ${method.color}22, ${method.color}11)`, border: `2px solid ${method.color}`, borderRadius: 12, opacity: fadeIn(frame, scene2End + 210 + i * 20, 20), boxShadow: `0 0 16px ${method.color}44`}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: method.color, marginBottom: 10, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>{method.title}</h4>
                    <div style={{fontSize: 18, color: theme.text.muted, fontFamily: theme.typography.body.fontFamily, lineHeight: 1.7}}>
                      <strong style={{color: theme.text.secondary}}>{method.desc}</strong><br />
                      <br />
                      <div style={{fontFamily: 'monospace', fontSize: 16, color: method.color}}>{method.example}</div><br />
                      {method.how}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Character type="architect" x={width - 400} y={height - 200} startFrame={scene2End + 300} />
          <Dialogue speaker="architect" text="Facets let users drill down, geo-search finds nearby results. Both critical for modern search!" x={width - 750} y={height - 280} startFrame={scene2End + 330} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}

      {frame >= scene3End && frame < scene4End && (
        <>
          <Title text="Search Result Ranking" subtitle="Beyond TF-IDF" />

          <div style={{position: 'absolute', top: 280, left: width / 2 - 820, width: 1640}}>
            <div style={{marginBottom: 30, opacity: fadeIn(frame, scene3End + 30, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#f59e0b', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center', textShadow: '0 0 24px rgba(245, 158, 11, 0.6)'}}>🏆 Advanced Ranking Algorithms</h2>

              <div style={{padding: 24, background: 'rgba(245, 158, 11, 0.15)', border: '3px solid #f59e0b', borderRadius: 14, marginBottom: 20}}>
                <h3 style={{fontSize: 26, fontWeight: 700, color: '#fbbf24', marginBottom: 16, fontFamily: theme.typography.heading.fontFamily}}>📊 BM25 (Best Match 25)</h3>
                <div style={{fontSize: 20, color: '#fde68a', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                  <strong style={{color: '#fbbf24'}}>Improvement over TF-IDF</strong> - considers document length and term saturation<br />
                  <br />
                  <strong>Key improvements:</strong><br />
                  • Short docs don't unfairly rank higher<br />
                  • Diminishing returns (10 vs 11 occurrences ≈ same)<br />
                  • Tunable parameters (k1, b) for different corpora<br />
                  <br />
                  <div style={{fontFamily: 'monospace', fontSize: 18, color: '#fef3c7', background: 'rgba(245, 158, 11, 0.2)', padding: 16, borderRadius: 8, marginTop: 12}}>
                    Default in Elasticsearch, Solr, Lucene
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', gap: 20, opacity: fadeIn(frame, scene3End + 90, 25)}}>
                <div style={{flex: 1, padding: 20, background: 'rgba(139, 92, 246, 0.15)', border: '2px solid #8b5cf6', borderRadius: 12}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>🎯 Field Boosting</h4>
                  <div style={{fontSize: 18, color: '#e9d5ff', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    Weight fields differently:<br />
                    • Title: <strong style={{color: '#c4b5fd'}}>boost = 3</strong><br />
                    • Description: <strong style={{color: '#a78bfa'}}>boost = 1</strong><br />
                    • Tags: <strong style={{color: '#a78bfa'}}>boost = 2</strong><br />
                    <br />
                    Match in title scores 3x higher!
                  </div>
                </div>

                <div style={{flex: 1, padding: 20, background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: 12}}>
                  <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>📈 Function Score Query</h4>
                  <div style={{fontSize: 18, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                    Combine multiple signals:<br />
                    • Text relevance (BM25)<br />
                    • Popularity (view count)<br />
                    • Recency (published date)<br />
                    • User rating<br />
                    <br />
                    Custom formula for final score!
                  </div>
                </div>
              </div>
            </div>

            <div style={{opacity: fadeIn(frame, scene3End + 150, 25)}}>
              <h2 style={{fontSize: 32, fontWeight: 700, color: '#10b981', marginBottom: 20, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>🤖 Personalization & Learning to Rank</h2>
              <div style={{padding: 24, background: 'rgba(16, 185, 129, 0.15)', border: '3px solid #10b981', borderRadius: 14}}>
                <div style={{display: 'flex', gap: 24}}>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Personalization</h4>
                    <div style={{fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      • Search history<br />
                      • Click-through rate (CTR)<br />
                      • Purchase history<br />
                      • Location, language<br />
                      • Device type<br />
                      <br />
                      <strong style={{color: '#6ee7b7'}}>User A ≠ User B for same query</strong>
                    </div>
                  </div>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: 22, fontWeight: 700, color: '#6ee7b7', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily}}>Learning to Rank (LTR)</h4>
                    <div style={{fontSize: 19, color: '#d1fae5', fontFamily: theme.typography.body.fontFamily, lineHeight: 1.8}}>
                      Machine learning models:<br />
                      • Train on click data<br />
                      • Features: 50+ signals<br />
                      • Models: LambdaMART, RankNet<br />
                      • A/B test new rankings<br />
                      <br />
                      <strong style={{color: '#6ee7b7'}}>Google, Amazon use this!</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{marginTop: 20, padding: 24, background: 'rgba(239, 68, 68, 0.15)', border: '3px solid #ef4444', borderRadius: 14, opacity: fadeIn(frame, scene3End + 210, 25)}}>
              <h3 style={{fontSize: 26, fontWeight: 700, color: '#fca5a5', marginBottom: 12, fontFamily: theme.typography.heading.fontFamily, textAlign: 'center'}}>⚠️ Search Quality Metrics</h3>
              <div style={{fontSize: 20, color: '#fecaca', fontFamily: theme.typography.body.fontFamily, textAlign: 'center', lineHeight: 1.8}}>
                <strong>Precision:</strong> % of results that are relevant | <strong>Recall:</strong> % of relevant docs found | <strong>NDCG:</strong> Ranking quality (0-1)<br />
                Track these! Optimize based on user behavior (clicks, time on page, conversions)
              </div>
            </div>
          </div>

          <Character type="junior" x={200} y={height - 200} startFrame={scene3End + 270} />
          <Dialogue speaker="junior" text="BM25 for relevance, field boosting for importance, LTR for personalization. Search is complex!" x={100} y={height - 280} startFrame={scene3End + 300} />

          <div style={{position: 'absolute', bottom: 20, right: 30, fontSize: 22, color: '#64748b', fontFamily: 'monospace'}}>Created by Amit Mishra | Powered by Claude Code</div>
        </>
      )}
    </AbsoluteFill>
  );
};
