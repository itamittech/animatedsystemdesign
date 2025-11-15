# Sound Effects Setup Guide

## Quick Start

The project now supports sound effects! Audio is **optional** - animations work perfectly without it.

## Recommended Free Sound Libraries

### 1. Mixkit (easiest, no attribution)
**Best for beginners** - No account required, free license
- Visit: https://mixkit.co/free-sound-effects/
- Search for: "whoosh", "pop", "click", "beep"
- Download and place in `/public/audio/`

### 2. Freesound.org (largest library)
- Visit: https://freesound.org/
- Requires free account
- Filter by "Creative Commons 0" for no-attribution sounds

### 3. Zapsplat (professional quality)
- Visit: https://www.zapsplat.com/
- Free with attribution
- Very high quality

## Sound Files Needed

Place these in `/public/audio/` folder:

| File | Purpose | Search Terms |
|------|---------|--------------|
| `whoosh.mp3` | Dialogue slides in | "swoosh", "whoosh", "transition" |
| `pop.mp3` | Elements appear | "pop", "bubble pop", "UI pop" |
| `click.mp3` | UI interactions | "button click", "soft click" |
| `data-flow.mp3` | Traffic flowing | "data", "stream", "digital flow" |
| `server-start.mp3` | Server powers on | "startup", "power up", "boot" |
| `error.mp3` | Server failure | "error beep", "alert", "warning" |
| `success.mp3` | Server healthy | "success", "notification", "ding" |
| `warning.mp3` | Warning state | "warning tone", "caution" |
| `alert.mp3` | Critical alert | "alert", "alarm" |
| `transition.mp3` | Scene changes | "transition", "scene change" |

## Installation Steps

1. Create the audio directory:
```bash
mkdir -p public/audio
```

2. Download sound effects from Mix kit or Freesound

3. Rename files to match the table above

4. Test:
```bash
npm start
```

## Without Sound Effects

If you don't add sound files:
- ✅ Animations still work perfectly
- ✅ No errors in the video
- ⚠️ Browser console will show warnings (safe to ignore)
- 📹 Final rendered video will be silent

## Adding Your Own Sounds

Edit `/src/utils/audio.ts` to customize sound effects:

```typescript
export const soundEffects = {
  whoosh: '/audio/your-custom-whoosh.mp3',
  // ... add more
};
```

## Sound Effect Timing

Sounds are synchronized with animations:
- **Whoosh**: When dialogue appears
- **Pop**: When boxes/characters appear
- **Data flow**: When particles flow
- **Errors/Success**: When servers change state
- **Transitions**: Between major scenes

## Volume Control

Adjust in `/src/utils/audio.ts`:

```typescript
export const volumePresets = {
  background: 0.1,    // Very subtle
  ui: 0.3,            // UI feedback
  emphasis: 0.5,      // Important moments
  alert: 0.6,         // Warnings/errors
};
```

## Tips

1. **Keep files small**: < 500KB per sound
2. **Use MP3 format**: Best compatibility
3. **Test in browser first**: Some sounds may be too loud/quiet
4. **Normalize volumes**: Use Audacity (free) to match volumes

## Troubleshooting

**"Audio file not found" warning**
- Check file path: Should be `public/audio/filename.mp3`
- Check filename matches exactly (case-sensitive)
- Restart Remotion Studio after adding files

**No sound in preview**
- Check browser isn't muted
- Check system volume
- Try a different browser

**Sound in preview but not in rendered video**
- This is normal - add `--audio-codec=aac` to render command
- Or use: `npm run render` (already configured)

## Advanced: Background Music

To add subtle background music:

1. Find a 30-76 second music loop
2. Save as `/public/audio/background.mp3`
3. It will automatically loop throughout the video

Recommended: Ambient, minimal music at low volume (0.05-0.1)

## License Compliance

- **Mixkit**: No attribution required
- **Freesound CC0**: No attribution required
- **Freesound CC-BY**: Add attribution in video description
- **Zapsplat**: Add attribution in video description

Example attribution:
```
Sound effects from Freesound.org:
- "Whoosh" by UserName (CC-BY 4.0)
```
