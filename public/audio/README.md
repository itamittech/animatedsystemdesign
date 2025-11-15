# Sound Effects Setup

This project supports sound effects to enhance the learning experience!

## Where to Get Free Sound Effects

Download sound effects from these free sources:

1. **Mixkit.co** (Free license) - **RECOMMENDED**
   - UI sounds, alerts, transitions
   - No attribution required
   - https://mixkit.co/free-sound-effects/

2. **Freesound.org** (Creative Commons)
   - Search for: whoosh, beep, error, success
   - Requires free account
   - https://freesound.org/

3. **Zapsplat.com** (Free with attribution)
   - Professional quality sounds
   - https://www.zapsplat.com/

## Sound Effects Needed for Load Balancing Video

Place these **5 files** in this directory (`public/audio/`):

| File | Purpose | Search Terms |
|------|---------|--------------|
| `intro.mp3` | Video start | "intro", "start", "begin" |
| `transition.mp3` | Scene changes | "transition", "whoosh", "scene change" |
| `alert.mp3` | Warning moments | "alert", "notification", "attention" |
| `error.mp3` | Server failure | "error beep", "fail", "warning" |
| `success.mp3` | Success finale | "success", "win", "complete", "ding" |

## Quick Start

1. **Download 5 sound files** from Mixkit.co:
   - Go to https://mixkit.co/free-sound-effects/
   - Search for each sound type (intro, transition, alert, error, success)
   - Download as MP3 files

2. **Rename files** to match the table above exactly:
   - `intro.mp3`
   - `transition.mp3`
   - `alert.mp3`
   - `error.mp3`
   - `success.mp3`

3. **Place files** in this directory (`public/audio/`)

4. **Restart Remotion Studio**:
```bash
npm start
```

## Without Audio

The animations work perfectly without audio! All sound effects are **optional**.

If audio files are missing:
- ✅ Animations still work perfectly
- ✅ No errors in the video
- ⚠️ Browser console will show warnings (safe to ignore)
- 📹 Final rendered video will be silent

## Audio Timing in Load Balancing Video

The 86-second video has sound effects at these moments:
- **Frame 0** (0s): Intro sound
- **Scene transitions**: Frames 120, 270, 450, 690, 960, 1110, 1290, 1470, 1740, 1980, 2160, 2340
- **Frame 200** (6.7s): Alert sound when showing overloaded server
- **Frame 1015** (33.8s): Error sound when server fails
- **Frame 2520** (84s): Success sound for finale

## File Format

- **Preferred**: MP3 (best compatibility)
- **Alternative**: WAV, OGG
- **Keep files small**: < 500KB per sound
