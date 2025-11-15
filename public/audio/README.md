# Sound Effects Setup

This project supports sound effects to enhance the learning experience!

## Where to Get Free Sound Effects

Download sound effects from these free sources:

1. **Freesound.org** (Creative Commons)
   - Search for: whoosh, pop, click, beep, error, success
   - Requires free account
   - https://freesound.org/

2. **Mixkit.co** (Free license)
   - UI sounds, alerts, transitions
   - No attribution required
   - https://mixkit.co/free-sound-effects/

3. **Zapsplat.com** (Free with attribution)
   - Huge library
   - https://www.zapsplat.com/

## Sound Effects Needed

Place these files in `/public/audio/`:

### UI Sounds
- `whoosh.mp3` - Smooth transition sound (for slides, fades)
- `pop.mp3` - Quick pop for elements appearing
- `click.mp3` - Click/select sound

### Data Flow
- `data-flow.mp3` - Flowing/streaming sound for traffic

### System Sounds
- `server-start.mp3` - Server powering up
- `error.mp3` - Error alert (server crash)
- `success.mp3` - Success chime (server healthy)

### Alerts
- `warning.mp3` - Warning tone
- `alert.mp3` - Alert notification

### Transitions
- `transition.mp3` - Scene change sound

### Background (Optional)
- `background.mp3` - Subtle ambient music loop

## Recommended Search Terms

When searching for sounds:
- **Whoosh**: "swoosh", "transition", "whoosh"
- **Pop**: "pop", "bubble pop", "UI pop"
- **Click**: "button click", "UI click", "soft click"
- **Data Flow**: "data transfer", "stream", "digital flow"
- **Server Start**: "computer startup", "power up", "boot"
- **Error**: "error beep", "alert error", "warning beep"
- **Success**: "success chime", "notification", "ding"

## File Format

- **Preferred**: MP3 (best compatibility)
- **Alternative**: WAV, OGG
- **Keep files small**: < 1MB per sound

## Installation

1. Create the audio folder:
```bash
mkdir -p public/audio
```

2. Download sound effects from sources above

3. Rename files to match the names in the list above

4. Place in `public/audio/` folder

## Without Audio

The animations work perfectly without audio! All sound effects are optional. If audio files are missing, the project will:
- Continue to work normally
- Show a warning in browser console (can be ignored)
- Display animations without sound

## Testing Audio

After adding audio files:
```bash
npm start
```

Open the composition and play - you should hear sounds at:
- Scene transitions
- Character appearances
- Data flow animations
- Server errors/success
- UI element animations
