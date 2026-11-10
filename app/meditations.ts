export type Meditation = {
  id: "body" | "breath" | "listening";
  name: string;
  description: string;
  // Prompts are drawn from these pools to build a fresh sequence each sit.
  // `opening` settles you in, `core` is the body of the practice (shuffled,
  // so every line must read on its own), `closing` eases you out.
  opening: string[];
  core: string[];
  closing: string[];
};

export const meditations: Meditation[] = [
  {
    id: "body",
    name: "Body scan",
    description: "Head to toe",
    opening: [
      "Find a comfortable seat.",
      "Let your weight settle.",
      "Arrive right here.",
      "Settle into this moment.",
      "Let the body grow still.",
      "Take a slow breath in.",
      "Release the day for now.",
      "Let yourself be heavy.",
    ],
    core: [
      "Notice the top of your head.",
      "Soften your forehead.",
      "Let your brow smooth out.",
      "Feel your face soften.",
      "Unclench your jaw.",
      "Let your jaw hang loose.",
      "Soften around your mouth.",
      "Relax your cheeks.",
      "Notice your temples.",
      "Let your scalp loosen.",
      "Feel the back of your head.",
      "Soften your throat.",
      "Notice your neck.",
      "Let your neck lengthen.",
      "Drop your shoulders down.",
      "Let your shoulders fall.",
      "Soften your collarbones.",
      "Notice your upper arms.",
      "Let your arms grow heavy.",
      "Feel your elbows.",
      "Soften your forearms.",
      "Notice your wrists.",
      "Let your hands grow heavy.",
      "Unfurl your fingers.",
      "Feel each fingertip.",
      "Soften your palms.",
      "Notice your chest.",
      "Feel your heartbeat.",
      "Let your breath move freely.",
      "Notice the rise of your chest.",
      "Soften behind your ribs.",
      "Feel your upper back.",
      "Let your spine settle.",
      "Soften the small of your back.",
      "Notice your belly.",
      "Let your belly soften.",
      "Feel your breath in your belly.",
      "Notice your hips.",
      "Let your hips grow heavy.",
      "Soften your lower back.",
      "Feel your thighs.",
      "Let your legs grow heavy.",
      "Soften behind your knees.",
      "Notice your calves.",
      "Feel your ankles.",
      "Let your feet grow heavy.",
      "Soften the soles of your feet.",
      "Notice each toe.",
      "Feel the whole body at once.",
      "Let the body grow soft.",
    ],
    closing: [
      "Feel the whole body resting.",
      "Take one slow breath.",
      "Notice how you feel now.",
      "Let the stillness stay.",
      "Carry this calm with you.",
      "Wiggle your fingers slowly.",
      "Return gently to the room.",
      "Thank yourself for this time.",
    ],
  },
  {
    id: "breath",
    name: "Breath",
    description: "Follow the breath",
    opening: [
      "Find a comfortable seat.",
      "Let your weight settle.",
      "Arrive where you are.",
      "Let your shoulders soften.",
      "Settle into stillness.",
      "There is nowhere to be.",
      "Let the body grow quiet.",
      "Begin right here.",
    ],
    core: [
      "Follow one full breath.",
      "Notice the breath arriving.",
      "Let the exhale lengthen.",
      "Feel the pause after the breath.",
      "Let the breath find its pace.",
      "Notice where the breath begins.",
      "Notice where the breath ends.",
      "Let each breath be slow.",
      "Feel the air move in.",
      "Feel the air move out.",
      "Rest in the quiet pause.",
      "Let the breath grow gentle.",
      "Notice the rise of each breath.",
      "Notice the fall of each breath.",
      "Let attention ride the breath.",
      "Sense the breath without changing it.",
      "Welcome the next breath in.",
      "Soften around the breath.",
      "Count one slow breath through.",
      "Notice the cool air entering.",
      "Notice the warm air leaving.",
      "Let the breath deepen on its own.",
      "Feel the chest expand softly.",
      "Feel the belly rise gently.",
      "Let the mind rest on breathing.",
      "Notice the space between breaths.",
      "Trace the breath all the way down.",
      "Let one breath dissolve the last.",
      "Feel the breath at the nostrils.",
      "Let the exhale empty fully.",
      "Notice how the breath moves you.",
      "Let breathing carry you.",
      "Find the rhythm beneath thinking.",
      "Let the breath slow itself.",
      "Notice the stillness at the top.",
      "Stay with this single breath.",
      "Let the air settle the mind.",
      "Sense the breath as a wave.",
      "Feel each breath complete itself.",
      "Let the breath be effortless.",
      "Notice the gentle turning point.",
      "Come back to the breath kindly.",
      "Let the breath anchor you.",
      "Watch the breath come and go.",
      "Let one calm breath be enough.",
      "Notice the softness of breathing.",
      "Allow the breath to find ease.",
    ],
    closing: [
      "Take one slow breath.",
      "Notice how you feel now.",
      "Let the breath return to normal.",
      "Rest in this quiet a moment.",
      "Carry this calm with you.",
      "Let the practice settle.",
      "Thank yourself for this time.",
      "Return gently to the room.",
    ],
  },
  {
    id: "listening",
    name: "Listening",
    description: "Notice what's around you",
    opening: [
      "Find a comfortable seat.",
      "Let your weight settle.",
      "Arrive where you are.",
      "Soften your shoulders.",
      "Let the body grow still.",
      "Settle into this moment.",
      "Let your hands rest.",
      "Begin to grow quiet.",
    ],
    core: [
      "Notice the sounds around you.",
      "Let sound come to you.",
      "Find the nearest sound.",
      "Reach for the farthest sound.",
      "Notice a sound far away.",
      "Rest in the quietest sound.",
      "Find the loudest sound.",
      "Notice the space between sounds.",
      "Let sounds arrive and fade.",
      "Notice a sound that stays.",
      "Notice a sound passing by.",
      "Hear sound without naming it.",
      "Let one sound dissolve.",
      "Notice sound behind you.",
      "Notice sound in front.",
      "Hear the room itself.",
      "Let the loud and soft mix.",
      "Follow one sound as it fades.",
      "Notice the silence underneath.",
      "Let a sound rise and pass.",
      "Receive each sound fully.",
      "Notice how sounds layer.",
      "Find a sound just appearing.",
      "Let sounds wash over you.",
      "Notice a steady hum.",
      "Hear a sudden sound.",
      "Rest in open hearing.",
      "Let near and far blend.",
      "Notice the texture of sound.",
      "Hear sound as pure sound.",
      "Notice a sound you missed.",
      "Let the quiet hold you.",
      "Notice sounds above you.",
      "Notice sounds below you.",
      "Let one sound lead to another.",
      "Hear the edges of silence.",
      "Notice a faint sound.",
      "Let a sharp sound soften.",
      "Notice the gaps in sound.",
      "Welcome whatever you hear.",
      "Notice a sound coming closer.",
      "Notice a sound moving away.",
      "Let sound fill the space.",
      "Rest in the field of sound.",
      "Notice a sound and let it go.",
      "Hear the stillness between.",
    ],
    closing: [
      "Take one slow breath.",
      "Let the sounds settle.",
      "Notice how you feel now.",
      "Return to the room.",
      "Carry this quiet with you.",
      "Let the stillness stay.",
      "Come gently back.",
      "Rest a moment longer.",
    ],
  },
];

export const durations = [
  { label: "2 min", minutes: 2 },
  { label: "5 min", minutes: 5 },
  { label: "10 min", minutes: 10 },
] as const;

export type DurationMinutes = (typeof durations)[number]["minutes"];

// A prompt holds the screen for this long, no matter the chosen length.
// The cadence is fixed, so a longer sit simply receives more prompts —
// not the same prompts spread thinner.
export const PROMPT_INTERVAL_MS = 15_000;

// How many prompts a sit of the given length holds at the fixed cadence.
export function promptCount(minutes: number): number {
  return Math.max(1, Math.round((minutes * 60_000) / PROMPT_INTERVAL_MS));
}

// A source of randomness in [0, 1). Defaults to Math.random, but the daily
// meditation passes a date-seeded generator so today's sit is the same all
// day and changes tomorrow.
type Rng = () => number;

function shuffle<T>(items: T[], rng: Rng = Math.random): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(items: T[], rng: Rng = Math.random): T {
  return items[Math.floor(rng() * items.length)]!;
}

// Draw `count` core prompts, reshuffling the pool when it runs out and never
// repeating a line back to back (including against the incoming `prev`).
function drawCore(core: string[], count: number, rng: Rng, prev: string): string[] {
  const out: string[] = [];
  let pool: string[] = [];
  for (let i = 0; i < count; i++) {
    if (pool.length === 0) {
      pool = shuffle(core, rng);
      if (pool.length > 1 && pool[0] === prev) {
        [pool[0], pool[1]] = [pool[1], pool[0]];
      }
    }
    const next = pool.shift()!;
    out.push(next);
    prev = next;
  }
  return out;
}

// Build a fresh sequence for a sit: an opening, a shuffled run of core
// prompts, then a closing. With the default Rng, no two sits are alike; if a
// length needs more prompts than the core pool holds, the pool is reshuffled.
export function generateSession(
  m: Meditation,
  count: number,
  rng: Rng = Math.random,
): string[] {
  if (count <= 0) return [];

  const result: string[] = [];
  const wantOpening = count >= 2;
  const wantClosing = count >= 3;
  const coreCount = count - (wantOpening ? 1 : 0) - (wantClosing ? 1 : 0);

  if (wantOpening) result.push(pick(m.opening, rng));
  result.push(...drawCore(m.core, coreCount, rng, result[result.length - 1] ?? ""));
  if (wantClosing) result.push(pick(m.closing, rng));

  return result;
}

// — Daily meditation —
//
// One sit that is the same for everyone all day and refreshes each morning,
// in the spirit of the Waking Up and Calm "daily" sessions. Each day opens
// with a theme — a Calm-style intention — and moves through awareness prompts
// in the secular, non-dual style of Sam Harris: noticing thoughts arise and
// pass, and resting as the awareness they appear in. Like every sit here it
// is read with the eyes open.

export type DailyMeditation = {
  id: "daily";
  name: string;
  themes: string[];
  opening: string[];
  core: string[];
  closing: string[];
};

export const daily: DailyMeditation = {
  id: "daily",
  name: "Daily",
  themes: [
    "Notice what you can let go of.",
    "Meet this moment as it is.",
    "There is nowhere to be but here.",
    "Let things be exactly as they are.",
    "Notice what you're grateful for.",
    "Soften into the present.",
    "You are already here.",
    "Rest in what is already aware.",
    "Nothing needs fixing right now.",
    "Let the next breath arrive on its own.",
    "Begin again, gently.",
    "Notice the space around your thoughts.",
    "Let awareness be effortless.",
    "Allow this moment to be enough.",
    "Greet whatever arises.",
    "Return to what is simple.",
    "Rest as the one who notices.",
    "Make room for what you feel.",
    "Notice that you are aware.",
    "Let the day set itself down.",
    "Be where you are.",
    "Hold this moment lightly.",
    "Let the mind settle like water.",
    "Welcome this breath, then the next.",
    "Notice the quiet underneath.",
    "Let thoughts pass like weather.",
    "You don't have to carry it all.",
    "Find the ease already here.",
    "Arrive without changing anything.",
    "Let go, just a little.",
    "Rest behind your thoughts.",
    "Notice the awareness you already are.",
  ],
  opening: [
    "Find a comfortable seat.",
    "Let your weight settle.",
    "Arrive right here.",
    "Let the day set itself down.",
    "There is nowhere to be.",
    "Settle into this moment.",
    "Let the body grow still.",
    "Take one slow breath.",
  ],
  core: [
    "Notice thoughts as they arise.",
    "Let each thought pass.",
    "Don't follow the next thought.",
    "Notice the space thoughts appear in.",
    "Who is aware of this moment?",
    "Look for the one who is looking.",
    "Rest as awareness itself.",
    "Notice you are already aware.",
    "Let thoughts come and go like sounds.",
    "Be aware of being aware.",
    "Notice what is hearing this.",
    "Let attention rest wide open.",
    "Notice the field of seeing.",
    "Let the search for a center relax.",
    "Notice that awareness takes no effort.",
    "Let experience appear on its own.",
    "Notice sensations without claiming them.",
    "Let the last thought dissolve.",
    "Rest behind the thinking.",
    "Notice that awareness has no edge.",
    "Let go of the one who is trying.",
    "Notice the knowing of this moment.",
    "Let the mind be open and clear.",
    "Notice what has been here all along.",
    "Let it all be as it is.",
    "Notice you don't have to control this.",
    "Feel the breath arrive.",
    "Let the exhale lengthen.",
    "Feel your hands resting.",
    "Notice the weight of the body.",
    "Feel where the body meets the seat.",
    "Let your shoulders drop.",
    "Notice the breath without changing it.",
    "Feel the air at the nostrils.",
    "Let the belly soften.",
    "Notice the pause between breaths.",
    "Feel the floor beneath you.",
    "Let the face soften.",
    "Notice a sound, then let it go.",
    "Feel the breath move through you.",
    "Notice what you're holding onto.",
    "Let one worry set itself down.",
    "Offer yourself a little kindness.",
    "Notice something good that is here.",
    "Let this moment be enough.",
    "Soften toward whatever you feel.",
    "Let the next moment simply come.",
  ],
  closing: [
    "Take one slow breath.",
    "Notice how you feel now.",
    "Carry this awareness with you.",
    "Let the calm stay with you.",
    "Return gently to your day.",
    "Notice the quiet you found.",
    "Carry this ease forward.",
    "Thank yourself for sitting.",
  ],
};

// FNV-1a string hash → a 32-bit seed for the day.
function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Small, fast seeded PRNG (mulberry32). Deterministic for a given seed.
function mulberry32(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dayKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function dailyRng(date: Date): Rng {
  return mulberry32(hashString(dayKey(date)));
}

// Today's theme — the same line today's sit opens with. Shown on the home
// screen so each day feels distinct before you begin.
export function dailyTheme(date: Date): string {
  return pick(daily.themes, dailyRng(date));
}

// Build today's sit: an opening, today's theme, a date-seeded run of
// awareness prompts, then a closing reflection. Deterministic for the
// calendar day, so it stays the same all day and turns over each morning.
export function generateDaily(date: Date, count: number): string[] {
  const rng = dailyRng(date);
  const theme = pick(daily.themes, rng); // first draw — matches dailyTheme
  if (count <= 1) return [theme];

  const result = [pick(daily.opening, rng), theme];
  const wantClosing = count >= 4;
  const coreCount = Math.max(0, count - result.length - (wantClosing ? 1 : 0));
  result.push(...drawCore(daily.core, coreCount, rng, theme));
  if (wantClosing) result.push(pick(daily.closing, rng));

  return result.slice(0, count);
}
