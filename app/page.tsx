"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  durations,
  meditations,
  type DurationMinutes,
  type Meditation,
} from "./meditations";

type View =
  | { kind: "home" }
  | { kind: "playing"; meditation: Meditation; minutes: DurationMinutes }
  | { kind: "done"; meditation: Meditation };

export default function Page() {
  const [view, setView] = useState<View>({ kind: "home" });

  if (view.kind === "home") {
    return (
      <Home
        onStart={(meditation, minutes) =>
          setView({ kind: "playing", meditation, minutes })
        }
      />
    );
  }

  if (view.kind === "playing") {
    return (
      <Player
        meditation={view.meditation}
        minutes={view.minutes}
        onExit={() => setView({ kind: "home" })}
        onFinish={() => setView({ kind: "done", meditation: view.meditation })}
      />
    );
  }

  return (
    <Done
      meditation={view.meditation}
      onHome={() => setView({ kind: "home" })}
    />
  );
}

function Home({
  onStart,
}: {
  onStart: (m: Meditation, minutes: DurationMinutes) => void;
}) {
  const [selected, setSelected] = useState<Meditation["id"]>("breath");
  const [minutes, setMinutes] = useState<DurationMinutes>(5);

  const meditation = meditations.find((m) => m.id === selected)!;

  return (
    <main className="home">
      <header className="brand">stillwater</header>

      <div className="home-body">
        <h1 className="lede">A reading meditation. Sit, and read along.</h1>

        <section>
          <p className="section-label">Practice</p>
          <ul className="options">
            {meditations.map((m) => (
              <li key={m.id}>
                <button
                  className="option"
                  aria-pressed={selected === m.id}
                  onClick={() => setSelected(m.id)}
                >
                  <span className="option-name">{m.name}</span>
                  <span className="option-desc">{m.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="section-label">Length</p>
          <div className="durations">
            {durations.map((d) => (
              <button
                key={d.minutes}
                className="duration"
                aria-pressed={minutes === d.minutes}
                onClick={() => setMinutes(d.minutes)}
              >
                {d.label}
              </button>
            ))}
          </div>
        </section>

        <button className="begin" onClick={() => onStart(meditation, minutes)}>
          Begin
        </button>
      </div>

      <footer className="foot">Tap left or right to move between prompts.</footer>
    </main>
  );
}

function Player({
  meditation,
  minutes,
  onExit,
  onFinish,
}: {
  meditation: Meditation;
  minutes: DurationMinutes;
  onExit: () => void;
  onFinish: () => void;
}) {
  const prompts = meditation.prompts;
  const cycleMs = useMemo(
    () => Math.round((minutes * 60 * 1000) / prompts.length),
    [minutes, prompts.length],
  );

  const [index, setIndex] = useState(0);
  const [nudge, setNudge] = useState(0);

  const advance = useCallback(() => {
    setIndex((i) => {
      if (i >= prompts.length - 1) {
        onFinish();
        return i;
      }
      return i + 1;
    });
  }, [prompts.length, onFinish]);

  const goBack = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
    setNudge((n) => n + 1);
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i >= prompts.length - 1) {
        onFinish();
        return i;
      }
      return i + 1;
    });
    setNudge((n) => n + 1);
  }, [prompts.length, onFinish]);

  useEffect(() => {
    const t = window.setTimeout(advance, cycleMs);
    return () => window.clearTimeout(t);
  }, [index, nudge, cycleMs, advance]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goBack();
      else if (e.key === "ArrowRight" || e.key === " ") goNext();
      else if (e.key === "Escape") onExit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goBack, goNext, onExit]);

  const progress = (index + 1) / prompts.length;

  return (
    <div className="player">
      <div className="progress" aria-hidden>
        <div
          className="progress-bar"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button className="close" onClick={onExit} aria-label="End meditation">
        end
      </button>

      <div className="player-stage">
        <p
          key={`${index}-${nudge}`}
          className="prompt"
          style={{ animationDuration: `${cycleMs}ms` }}
        >
          {prompts[index]}
        </p>
      </div>

      <button
        className="tap-zone left"
        onClick={goBack}
        aria-label="Previous prompt"
      />
      <button
        className="tap-zone right"
        onClick={goNext}
        aria-label="Next prompt"
      />
    </div>
  );
}

function Done({
  meditation,
  onHome,
}: {
  meditation: Meditation;
  onHome: () => void;
}) {
  return (
    <div className="player">
      <div className="done">
        <div>
          <h2>That's it.</h2>
          <p>{meditation.name.toLowerCase()} — complete.</p>
          <button onClick={onHome}>return</button>
        </div>
      </div>
    </div>
  );
}
