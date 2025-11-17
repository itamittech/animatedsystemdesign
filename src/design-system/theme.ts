/**
 * Design System for Animated System Design
 * Consistent color coding and styling across all topics
 */

export const theme = {
  // Background colors
  background: {
    primary: '#0a0e27',
    secondary: '#1a1f3a',
    card: '#252b4a',
    highlight: '#2d3454',
  },

  // Component colors - semantic coding for architecture diagrams
  colors: {
    // Client-side components
    client: '#60a5fa', // Light blue
    frontend: '#818cf8', // Indigo

    // Server-side components
    server: '#34d399', // Green
    backend: '#10b981', // Emerald

    // Load balancers and proxies
    loadBalancer: '#f59e0b', // Amber
    reverseProxy: '#fb923c', // Orange

    // Databases
    database: '#ec4899', // Pink
    cache: '#f472b6', // Light pink

    // Message queues and streaming
    messageQueue: '#a78bfa', // Purple
    eventStream: '#8b5cf6', // Violet

    // Storage
    storage: '#14b8a6', // Teal
    cdn: '#06b6d4', // Cyan

    // Monitoring and logging
    monitoring: '#eab308', // Yellow
    logging: '#facc15', // Light yellow

    // Network and infrastructure
    network: '#6366f1', // Indigo blue
    infrastructure: '#4f46e5', // Deep indigo

    // Data flow
    dataFlow: '#94a3b8', // Slate gray

    // Success/Error states
    success: '#22c55e', // Green
    error: '#ef4444', // Red
    warning: '#f59e0b', // Amber
    info: '#3b82f6', // Blue
  },

  // Text colors
  text: {
    primary: '#f1f5f9',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
    accent: '#60a5fa',
  },

  // Animation timing
  animation: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    verySlow: 1.0,
  },

  // Font settings - Enhanced for better readability
  typography: {
    title: {
      fontSize: 72,
      fontWeight: 'bold' as const,
      fontFamily: 'Inter, sans-serif',
    },
    heading: {
      fontSize: 52,
      fontWeight: '600' as const,
      fontFamily: 'Inter, sans-serif',
    },
    subheading: {
      fontSize: 40,
      fontWeight: '500' as const,
      fontFamily: 'Inter, sans-serif',
    },
    body: {
      fontSize: 32,
      fontWeight: 'normal' as const,
      fontFamily: 'Inter, sans-serif',
    },
    code: {
      fontSize: 28,
      fontWeight: 'normal' as const,
      fontFamily: 'JetBrains Mono, monospace',
    },
    label: {
      fontSize: 24,
      fontWeight: '500' as const,
      fontFamily: 'Inter, sans-serif',
    },
    smallLabel: {
      fontSize: 20,
      fontWeight: '500' as const,
      fontFamily: 'Inter, sans-serif',
    },
  },

  // Spacing
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 64,
  },

  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
} as const;

export type Theme = typeof theme;
