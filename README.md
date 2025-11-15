# Animated System Design

Educational system design content with professional animations using Remotion. Designed for experienced architects to explore deep technical concepts through visual storytelling.

## Project Structure

```
animatedsystemdesign/
├── src/
│   ├── components/          # Reusable animated components
│   │   ├── Box.tsx         # Component boxes (servers, databases, etc.)
│   │   ├── Arrow.tsx       # Data flow arrows with labels
│   │   ├── Title.tsx       # Topic titles with animations
│   │   └── TextBox.tsx     # Information cards
│   ├── design-system/       # Consistent design tokens
│   │   ├── theme.ts        # Color coding and typography
│   │   └── animations.ts   # Reusable animation functions
│   ├── topics/             # System design topics
│   │   └── LoadBalancingBasics.tsx  # First topic
│   ├── Root.tsx            # Remotion composition registry
│   └── index.ts            # Entry point
├── package.json
├── tsconfig.json
└── remotion.config.ts
```

## Design System

### Color Coding (Consistent across all topics)

- **Client/Frontend**: Blue shades (#60a5fa, #818cf8)
- **Server/Backend**: Green shades (#34d399, #10b981)
- **Load Balancers**: Amber/Orange (#f59e0b, #fb923c)
- **Databases**: Pink shades (#ec4899, #f472b6)
- **Message Queues**: Purple shades (#a78bfa, #8b5cf6)
- **Storage/CDN**: Teal/Cyan (#14b8a6, #06b6d4)
- **Monitoring**: Yellow shades (#eab308, #facc15)
- **Network**: Indigo shades (#6366f1, #4f46e5)

### Animation Principles

- **Entrance**: Fade in + slide/scale (20-30 frames)
- **Flow**: Drawing arrows with labels
- **Emphasis**: Pulse and highlight
- **Timing**: Staggered reveals for related elements

## Topics Implemented

### 1. Load Balancing Basics (30 seconds / 900 frames)

Deep dive into load balancing covering:
- Basic load balancing patterns
- Algorithms: Round Robin, Weighted RR, Least Connections, IP Hash/Consistent Hashing
- Layer 4 vs Layer 7 load balancing
- Health checks and high availability patterns

**Duration**: 30 seconds @ 30fps
**Scenes**:
1. Introduction (0-3s)
2. Basic Pattern (3-9s)
3. Algorithms (9-16s)
4. L4 vs L7 (16-22s)
5. Health Checks & HA (22-30s)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Remotion Studio

```bash
npm start
```

This will open the Remotion Studio in your browser where you can:
- Preview animations
- Scrub through the timeline
- Render videos
- Adjust compositions

### Render Video

```bash
npx remotion render LoadBalancingBasics out/load-balancing.mp4
```

## Next Topics (Planned)

Sequence for comprehensive system design education:

1. ✅ Load Balancing
2. Caching Strategies (Multi-level, CDN, Redis, Cache invalidation)
3. Database Scaling (Replication, Sharding, Partitioning)
4. Message Queues & Event Streaming (Kafka, RabbitMQ, SQS)
5. Microservices Patterns (API Gateway, Service Mesh, Circuit Breaker)
6. Data Consistency (CAP Theorem, Eventually Consistent, SAGA)
7. Rate Limiting & Throttling
8. CDN & Edge Computing
9. Monitoring & Observability (Metrics, Logs, Traces)
10. Disaster Recovery & Backup Strategies

## Development Guidelines

### Adding New Topics

1. Create new file in `src/topics/YourTopic.tsx`
2. Use consistent color coding from `theme.ts`
3. Import and use reusable components from `src/components/`
4. Register composition in `src/Root.tsx`
5. Follow animation timing: ~30 seconds per topic, 30fps

### Component Usage

```tsx
// Server box
<Box
  x={100} y={200}
  width={200} height={120}
  color={theme.colors.server}
  label="API Server"
  icon="🖥️"
  startFrame={30}
/>

// Data flow arrow
<Arrow
  x1={300} y1={260}
  x2={600} y2={260}
  color={theme.colors.dataFlow}
  label="HTTP Request"
  startFrame={50}
/>
```

## Architecture Depth

Content is designed for architects with 10+ years experience:
- Covers trade-offs and decision criteria
- Explains when to use each pattern
- Discusses real-world considerations
- Includes failure modes and edge cases
- References industry standards and protocols

## License

Educational content for system design learning.
