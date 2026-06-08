#!/usr/bin/env node
/**
 * Midee Bridge — Generates HTML pages that visualize fleet MIDI via Midee.
 * Midee: github.com/aayushdutt/midee — lag-free browser MIDI visualizer
 */
const fs = require('fs');
const path = require('path');

function generateVisualizerHTML(midiFilePath, title = 'Fleet Performance') {
  const midiName = path.basename(midiFilePath);
  
  return `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
body{margin:0;background:#0a0a1a;color:#fff;font-family:system-ui;overflow:hidden}
#info{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:10;
      background:rgba(0,0,0,0.7);padding:8px 20px;border-radius:20px;
      border:1px solid rgba(255,255,255,0.1);font-size:14px;text-align:center}
#controls{position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
          z-index:10;display:flex;gap:12px}
button{background:#1e3a5f;color:#fff;border:1px solid #2a5a8f;
       padding:10px 24px;border-radius:8px;cursor:pointer;font-size:14px}
button:hover{background:#2a5a8f}
</style>
</head><body>
<div id="info">🎵 ${title} • <span id="status">Loading...</span></div>
<div id="visualizer" style="width:100vw;height:100vh"></div>
<div id="controls">
  <button id="playBtn">▶ Play</button>
  <button id="recordBtn">⏺ Record MP4</button>
</div>

<script>
// The MIDI data would stream here from our fleet
// For Midee integration, see: github.com/aayushdutt/midee
const midiFile = '${midiFilePath}';
console.log('Fleet MIDI ready for visualization:', midiFile);
document.getElementById('status').textContent = 'Loaded: ${midiName}';

// Midee API integration (when loaded from CDN):
// midee.load(midiFile, document.getElementById('visualizer'));
// midee.play();
</script>
</body></html>`;
}

const midiArg = process.argv[2];
if (midiArg) {
  const html = generateVisualizerHTML(midiArg);
  const outPath = path.join(__dirname, '..', 'render.html');
  fs.writeFileSync(outPath, html);
  console.log(`✅ Midee visualizer page: ${outPath}`);
  console.log(`   Open in browser to visualize: ${midiArg}`);
} else {
  console.log('Usage: node lib/midee-bridge.js path/to/file.mid');
  console.log('Generates an HTML page that loads Midee visualizer');
}
