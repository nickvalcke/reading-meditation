# Stillwater

A reading meditation. No audio, no narration — the prompts fade in,
linger, and fade back out at a steady pace. Sit, and read along, eyes
open. Every sit is freshly generated, so no two are quite the same.

## Daily

One featured sit that's the same all day and refreshes each morning — in
the spirit of the Waking Up and Calm daily meditations. Each day opens
with a theme (a Calm-style intention) and moves through awareness prompts
in the secular, non-dual style of Sam Harris: noticing thoughts arise and
pass, and resting as the awareness they appear in. Today's theme is shown
on the home screen before you begin. It's deterministic by date, so
everyone gets the same sit on a given day.

## Practices

- **Body scan** — head to toe
- **Breath** — follow the breath
- **Listening** — notice what's around you

## Lengths

2, 5, or 10 minutes. The rhythm is the same at every length — one
prompt every 15 seconds. A longer sit simply holds more prompts, rather
than spreading the same ones thinner.

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
  meditations.ts    practice prompt pools + session generator
```

Each practice is a set of prompt pools (`opening`, `core`, `closing`).
At the start of every sit, `generateSession` draws an opening, shuffles
a run of core prompts, and adds a closing — so each sit is unique. The
number of prompts is set by the length and the fixed cadence.

The **daily** sit (`daily` + `generateDaily`) works the same way but with
its own pools plus a `themes` pool, and draws from a PRNG seeded by the
date — so it's identical all day and turns over each morning rather than
being random per sit.

To add or change prompts, edit the pools in `app/meditations.ts`. To
change the cadence (and so how many prompts a sit holds), edit
`PROMPT_INTERVAL_MS`. To change the blur-fade itself, edit the
`prompt-cycle` keyframe in `app/globals.css`.
