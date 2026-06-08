# 🎥 fleet-midee-connector

> *Bridge between fleet MIDI output and the Midee browser visualizer*

Midee is a browser-based MIDI visualizer (github.com/aayushdutt/midee) that can record performances as MP4 video. This connector takes our fleet MIDI and opens it ready for visualization + recording.

## Quick Start

```bash
node lib/midee-bridge.js path/to/file.mid
# Opens ./render.html in the browser with Midee loaded
```

## Architecture

```
Our MIDI → Midee Bridge → HTML page → Midee CDN → Visualizer → MP4 Export
```

## Ensign: Flicker — Fleet Visual Recorder
Summon: `/ensign flicker visualize path/to/file.mid`
