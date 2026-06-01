# Stillwater

A reading meditation. No audio, no narration — the prompts fade in,
linger, and fade back out at the pace of your chosen length. Sit, and
read along.

## Practices

- **Body scan** — head to toe
- **Breath** — follow the breath
- **Listening** — notice what's around you

## Lengths

2, 5, or 10 minutes. The pace adjusts to fit: a 10-minute sit gives
each prompt time to land; a 2-minute sit moves at a brisker rhythm.

## Controls

- Tap the **left** half of the screen (or **←**) to step back a prompt
- Tap the **right** half (or **→** / **space**) to step forward
- **Esc** to end early

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js (App Router) + React 19
- Inter Tight via `next/font/google`
- No animation library — the blur-fade is a single CSS keyframe
  (`prompt-cycle` in `app/globals.css`) driven by the cycle duration

## Layout

```
app/
  layout.tsx        font + metadata
  globals.css       all styles, all motion
  page.tsx          home → player → done
  meditations.ts    practices and prompts
```

To change a prompt, edit `app/meditations.ts`. To change the pacing
curve, edit the `prompt-cycle` keyframe.
