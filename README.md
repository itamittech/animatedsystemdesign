# Animated System Design

<!-- Test commit after making repo private -->
Educational system design content with professional animations using Remotion. Designed for experienced architects to explore deep technical concepts through visual storytelling.

## Project Structure

```
animatedsystemdesign/
├── src/
│   ├── components/          # Reusable animated components
│   │   ├── Box.tsx         # Component boxes (servers, databases, etc.)
│   │   ├── Arrow.tsx       # Data flow arrows with labels
│   │   ├── Title.tsx       # Topic titles with animations
│   │   ├── TextBox.tsx     # Information cards
│   │   ├── Character.tsx   # Character avatars (Junior Dev, Architect)
│   │   ├── Dialogue.tsx    # Speech bubbles for conversations
│   │   └── DataFlowParticle.tsx  # Animated traffic particles
│   ├── design-system/       # Consistent design tokens
│   │   ├── theme.ts        # Color coding and typography
│   │   └── animations.ts   # Reusable animation functions
│   ├── topics/             # System design topics
│   │   ├── LoadBalancingBasics.tsx     # Technical version
│   │   └── LoadBalancingEnhanced.tsx   # Character-driven version ⭐
│   ├── Root.tsx            # Remotion composition registry
│   └── index.ts            # Entry point
├── package.json
├── tsconfig.json
├── studio.js               # Cross-platform launcher script
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

### Phase 1: Foundational Infrastructure ✅ COMPLETE

#### 1.1 Client-Server, DNS & Proxies
**Duration**: 110 seconds | **Status**: ✅ Complete
Foundation of how the internet works from request to response.

#### 1.2 Load Balancing (Two Versions)

**LoadBalancingBasics** - Technical deep dive with diagrams (30 seconds).

**LoadBalancingEnhanced** ⭐ - Complete 86-second masterclass from basics to production architectures!

Interactive storytelling format featuring:
- **Alex** (Junior Developer 👨‍💻) - Asks questions from a learning perspective
- **Sarah** (Solutions Architect 👩‍💼) - Explains concepts with real-world insights

**What's Enhanced:**
- 🎭 **Character dialogue** - Natural conversation flow from basic to advanced
- ✨ **Animated data flow particles** - Visual representation of traffic flowing through systems
- 🎬 **Progressive complexity** - Starts simple, builds to production-ready concepts
- 💡 **Visual storytelling** - Each scene tells a story with animations
- 🏆 **Complete curriculum** - All essential load balancing topics in one video
- ⏱️ **Readable pacing** - Extended scenes for complex topics, giving time to absorb information

**Duration**: 86 seconds @ 30fps (2580 frames)

#### 1.3 CDN & API Gateway
**Duration**: 180 seconds | **Status**: ✅ Complete
Combined comprehensive video covering Content Delivery Networks and API Gateway patterns.

**Topics Covered**:
- Edge locations and global distribution
- Cache hit/miss optimization
- API Gateway routing, authentication, rate limiting
- Complete request flow with bidirectional caching
- Production lifecycle examples

#### 1.4 REST API Design Best Practices
**Duration**: 130 seconds | **Status**: ✅ Complete
Essential REST API design principles for building intuitive APIs.

**Topics Covered**:
- Resource-based URLs (nouns vs verbs)
- HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Status codes and error handling
- API versioning strategies
- Pagination and filtering patterns
- HATEOAS (Hypermedia as the Engine of Application State)

### Phase 2: Communication Protocols & APIs ✅ COMPLETE

#### 2.1 REST API Design ✅ Complete
See above (1.4).

#### 2.2 GraphQL vs REST
**Duration**: 90 seconds | **Status**: ✅ Complete
Comprehensive comparison of GraphQL and REST API architectures.

**Topics Covered**:
- Over-fetching and under-fetching problems
- GraphQL query language and schema
- When to use GraphQL vs REST
- Decision matrix with real-world examples
- Ecosystem tools (Apollo, Relay, DataLoader)

#### 2.3 gRPC & Protocol Buffers
**Duration**: 90 seconds | **Status**: ✅ Complete
High-performance RPC for microservices communication.

**Topics Covered**:
- Protocol Buffers binary serialization (90% smaller than JSON)
- HTTP/2 multiplexing and 4 streaming types
- Performance benchmarks vs REST
- When to use gRPC vs REST/GraphQL
- Ecosystem tools (protoc, grpcurl, Envoy)

### Phase 3: Data Storage & Management (In Progress)

#### 3.1 Database Fundamentals
**Duration**: 70 seconds | **Status**: ✅ Complete
The core concepts every engineer must know about databases.

**Topics Covered**:
- ACID properties (Atomicity, Consistency, Isolation, Durability)
- SQL vs NoSQL decision tree
- Normalization vs Denormalization trade-offs
- Indexes and query optimization (B-tree)
- CAP Theorem (Consistency, Availability, Partition Tolerance)

#### 3.2 SQL Databases & Relational Design
**Duration**: 85 seconds | **Status**: ✅ Complete
Deep dive into SQL databases, internals, and when to use them.

**Topics Covered**:
- When to use SQL databases (data integrity, complex relationships, ACID)
- PostgreSQL vs MySQL internals and architecture
- Indexing strategies: B-tree (ranges, sorting) vs Hash (equality)
- Transactions and isolation levels (Read Uncommitted to Serializable)
- Vertical scaling limits and when to move beyond

#### 3.3 NoSQL Databases
**Duration**: 90 seconds | **Status**: ✅ Complete
Comprehensive guide to NoSQL database types and when to use each.

**Topics Covered**:
- Document stores: MongoDB & DynamoDB (JSON documents, flexible schema)
- Key-value stores: Redis & Memcached (caching, sessions, sub-ms latency)
- Column-family: Cassandra & HBase (time-series, IoT, massive writes)
- Graph databases: Neo4j (relationships, social networks, recommendations)
- Use case decision matrix for choosing the right NoSQL type

#### 3.4 Database Replication
**Duration**: 80 seconds | **Status**: ✅ Complete
Scaling reads and ensuring high availability through database replication.

**Topics Covered**:
- Master-slave replication (one master, multiple read replicas)
- Master-master replication (bi-directional, write conflicts)
- Synchronous vs asynchronous replication trade-offs
- Read replicas for scaling and geo-distribution
- Replication lag handling strategies (read your writes, monotonic reads)

#### 3.5 Database Sharding
**Duration**: 85 seconds | **Status**: ✅ Complete
Horizontal partitioning strategies for scaling databases to billions of rows.

**Topics Covered**:
- What is sharding: Horizontal partitioning across multiple databases
- Shard key strategies: Hash-based, Range-based, Geographic sharding
- Consistent hashing: Minimizing data movement when adding/removing shards
- Cross-shard query challenges: JOINs, aggregations, unique constraints
- Resharding approaches: Stop writes, dual writes, virtual shards

#### 3.6 Distributed Transactions
**Duration**: 105 seconds | **Status**: ✅ Complete
Maintaining data consistency across multiple services and databases.

**Topics Covered**:
- The distributed transaction problem (e-commerce order example)
- Two-Phase Commit (2PC): Prepare and commit phases, blocking nature
- 2PC problems: Blocking, single point of failure, high latency
- Saga Pattern: Local transactions with compensating transactions
- Saga implementation: Choreography (event-driven) vs Orchestration (centralized)
- Eventual consistency and idempotency patterns
- When to avoid distributed transactions (rethink boundaries, use single DB)
- Best practices: Timeouts, retries, monitoring, testing failures

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

## Rendering Videos

### Quick Start - Render Individual Videos

Use these npm scripts to render specific videos:

```bash
# Phase 1: Foundational Infrastructure
npm run render:fundamentals        # Client-Server, DNS & Proxies (110s)
npm run render:loadbalancing-basic # Load Balancing Basics (30s)
npm run render:loadbalancing       # Load Balancing Enhanced (86s) ⭐
npm run render:cdn-api-gateway     # CDN & API Gateway (180s)

# Phase 2: Communication Protocols & APIs
npm run render:rest-api            # REST API Design (125s)
npm run render:graphql             # GraphQL vs REST (90s)
npm run render:grpc                # gRPC & Protocol Buffers (90s)

# Phase 3: Data Storage & Management
npm run render:database-fundamentals     # Database Fundamentals (70s)
npm run render:sql-databases             # SQL Databases & Relational Design (85s)
npm run render:nosql-databases           # NoSQL Databases (90s)
npm run render:database-replication      # Database Replication (80s)
npm run render:database-sharding         # Database Sharding (85s)
npm run render:distributed-transactions  # Distributed Transactions (105s)

# Render all videos sequentially
npm run render:all
```

### Output Location

All rendered videos are saved to the `out/` directory:
- `out/client-server-dns-proxies.mp4`
- `out/load-balancing-basic.mp4`
- `out/load-balancing-enhanced.mp4`
- `out/cdn-api-gateway.mp4`
- `out/rest-api-design.mp4`
- `out/graphql-vs-rest.mp4`
- `out/grpc-protocol-buffers.mp4`
- `out/database-fundamentals.mp4`
- `out/sql-databases.mp4`
- `out/nosql-databases.mp4`
- `out/database-replication.mp4`
- `out/database-sharding.mp4`
- `out/distributed-transactions.mp4`

### Advanced Rendering Options

**Faster preview (lower quality)**:
```bash
npx remotion render src/index.ts RESTAPIDesign out/preview.mp4 --scale=0.5
```

**Render specific frame range** (test a section):
```bash
npx remotion render src/index.ts CDNandAPIGateway out/test-clip.mp4 --frames=900-1500
```

**Higher quality**:
```bash
npx remotion render src/index.ts LoadBalancingEnhanced out/high-quality.mp4 --quality=100
```

**Custom resolution**:
```bash
npx remotion render src/index.ts RESTAPIDesign out/custom.mp4 --width=2560 --height=1440
```

### Select Composition in Studio

When you run `npm start`, you'll see all compositions in the left panel:

**Phase 1: Foundational Infrastructure**
- ClientServerDNSProxies
- LoadBalancingBasics
- LoadBalancingEnhanced ⭐
- CDNandAPIGateway

**Phase 2: Communication Protocols & APIs**
- RESTAPIDesign
- GraphQLvsREST
- gRPCProtocolBuffers

**Phase 3: Data Storage & Management**
- DatabaseFundamentals
- SQLDatabases
- NoSQLDatabases
- DatabaseReplication
- DatabaseSharding
- DistributedTransactions

## Progress Overview

**Completed**: 13/58 topics (22% complete)
- ✅ Phase 1: Foundational Infrastructure (4/4 complete)
- ✅ Phase 2: Communication Protocols & APIs (3/3 complete)
- ✅ Phase 3: Data Storage & Management (6/6 complete - 100%) 🎉

**Next Up - Phase 4: Caching Strategies**:
1. Caching Fundamentals (Phase 4.1)
2. Multi-Layer Caching (Phase 4.2)
3. Distributed Caching (Phase 4.3)

See `SYSTEM_DESIGN_CURRICULUM.md` for the complete 58-topic roadmap.

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

## Sound Effects (Optional)

The project supports sound effects to enhance the learning experience!

**Status**: Audio infrastructure ready, sound files are optional

**To add sound effects**:
1. See `SOUND_EFFECTS_GUIDE.md` for complete instructions
2. Download free sounds from Mixkit.co or Freesound.org
3. Place in `/public/audio/` folder
4. That's it! Animations work perfectly with or without audio

**Current sound effects support**:
- Scene transitions (whoosh)
- Element appearances (pop)
- Data flow visualization
- Server states (startup, error, success)
- Alerts and warnings

## Complete Curriculum

This project follows a comprehensive 58-topic curriculum across 14 phases. See `SYSTEM_DESIGN_CURRICULUM.md` for the complete roadmap.

**Current Status**: 13/58 topics complete (22%)

**Phase Progress**:
- ✅ Phase 1: Foundational Infrastructure (100% - 4/4)
- ✅ Phase 2: Communication Protocols & APIs (100% - 3/3)
- ✅ Phase 3: Data Storage & Management (100% - 6/6) 🎉
- 📋 Phase 4-14: Planned

**Key Upcoming Topics**:
- Caching Fundamentals (Phase 4.1)
- Multi-Layer & Distributed Caching
- Message Queues & Event Streaming
- Microservices Architecture
- Security & Authentication
- Real-World Case Studies (URL shortener, Social media feed, etc.)

## License

Educational content for system design learning.
