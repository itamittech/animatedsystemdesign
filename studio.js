#!/usr/bin/env node
// Wrapper script to launch Remotion Studio
const path = require('path');
const cliPath = path.join(__dirname, 'node_modules', '@remotion', 'cli', 'remotion-cli.js');
require(cliPath);
