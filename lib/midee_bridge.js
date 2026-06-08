#!/usr/bin/env node
const fs=require('fs'),path=require('path');
const midiFile=process.argv[2];
if(!midiFile||!fs.existsSync(midiFile)){console.log('Usage: node lib/midee_bridge.js file.mid');process.exit(1);}
const data=fs.readFileSync(midiFile).toString('base64');
const html=`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Fleet MIDI</title>
<style>body{margin:0;background:#0a0a1a;color:#eee;font-family:monospace}
#info{position:fixed;bottom:20px;left:20px;z-index:10;font-size:12px;opacity:0.5}</style>
</head><body>
<div id="viz">Loading...</div>
<div id="info">🎵 ${path.basename(midiFile)}</div>
<script>
const midi='${data}';
console.log('Fleet MIDI loaded:',${JSON.stringify(path.basename(midiFile))});
// Open midee.vercel.app and paste this base64 data
</script>
</body></html>`;
const out=path.join(__dirname,'..','examples',path.basename(midiFile,'.mid')+'.html');
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,html);
console.log('✅ Midee visualizer:',out);
