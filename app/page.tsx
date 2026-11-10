"use client";

import { useCallback, useEffect, useState } from "react";
import {
  dailyTheme,
  durations,
  generateDaily,
  generateSession,
  meditations,
  promptCount,
  PROMPT_INTERVAL_MS,
  type DurationMinutes,
  type Meditation,
} from "./meditations";

type View =
  | { kind: "home" }
  | { kind: "playing"; prompts: string[]; title: string }
  | { kind: "done"; title: string };

export default function Page() {
  const [view, setView] = useState<View>({ kind: "home" });

  if (view.kind === "home") {
    return (
      <Home
        onStartPractice={(meditation, minutes) =>
          setView({
            kind: "playing",
            // A fresh, unique sequence is generated for every sit.
            prompts: generateSession(meditation, promptCount(minutes)),
            title: meditation.name.toLowerCase(),
          })
        }
        onStartDaily={(minutes) =>
          setView({
            kind: "playing",
            // Today's sit — the same all day, fresh each morning.
            prompts: generateDaily(new Date(), promptCount(minutes)),
            title: "today's sit",
          })
        }
      />
    );
  }

  if (view.kind === "playing") {
    return (
      <Player
        prompts={view.prompts}
        onExit={() => setView({ kind: "home" })}
        onFinish={() => setView({ kind: "done", title: view.title })}
      />
    );
  }

  return <Done title={view.title} onHome={() => setView({ kind: "home" })} />;
}

function Home({
  onStartPractice,
  onStartDaily,
}: {
  onStartPractice: (m: Meditation, minutes: DurationMinutes) => void;
  onStartDaily: (minutes: DurationMinutes) => void;
}) {
  const [selected, setSelected] = useState<Meditation["id"]>("breath");
  const [minutes, setMinutes] = useState<DurationMinutes>(5);

  // Today's theme depends on the local date, so resolve it after mount to
  // avoid a server/client hydration mismatch.
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  const meditation = meditations.find((m) => m.id === selected)!;
  const minutesLabel = durations.find((d) => d.minutes === minutes)!.label;
  const dateLabel = today
    ? today.toLocaleDateString(undefined, { month: "long", day: "numeric" })
    : "";

  return (
    <main className="home">
      <header className="brand">stillwater</header>

      <div className="home-body">
        <h1 className="lede">A reading meditation. Sit, and read along.</h1>

        <button
          className="daily"
          onClick={() => onStartDaily(minutes)}
          aria-label={`Begin today's meditation, ${minutesLabel}`}
        >
          <span className="daily-head">
            <span className="daily-kicker">Daily</span>
            <span className="daily-date">{dateLabel}</span>
          </span>
          <span className="daily-theme">
            {today ? dailyTheme(today) : "Today's meditation"}
          </span>
          <span className="daily-go">Begin today's sit · {minutesLabel}</span>
        </button>

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

        <button
          className="begin"
          onClick={() => onStartPractice(meditation, minutes)}
        >
          Begin
        </button>
      </div>

      <footer className="foot">Tap left or right to move between prompts.</footer>
    </main>
  );
}

function Player({
  prompts,
  onExit,
  onFinish,
}: {
  prompts: string[];
  onExit: () => void;
  onFinish: () => void;
}) {
  const cycleMs = PROMPT_INTERVAL_MS;

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

function Done({ title, onHome }: { title: string; onHome: () => void }) {
  return (
    <div className="player">
      <div className="done">
        <div>
          <h2>That's it.</h2>
          <p>{title} — complete.</p>
          <button onClick={onHome}>return</button>
        </div>
      </div>
    </div>
  );
}
