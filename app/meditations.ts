export type Meditation = {
  id: "body" | "breath" | "listening";
  name: string;
  description: string;
  prompts: string[];
};

export const meditations: Meditation[] = [
  {
    id: "body",
    name: "Body scan",
    description: "Head to toe",
    prompts: [
      "Find a comfortable seat.",
      "Let your eyes close.",
      "Take one slow breath in.",
      "And out.",
      "Notice the top of your head.",
      "Soften your forehead.",
      "Let your jaw fall open a little.",
      "Drop your shoulders.",
      "Feel your arms grow heavy.",
      "Notice your chest rising.",
      "And falling.",
      "Soften your stomach.",
      "Let your hips settle.",
      "Release your legs.",
      "Feel your feet on the floor.",
      "Hold the whole body at once.",
      "Notice anywhere still holding on.",
      "Let it go.",
      "One more breath.",
      "When you're ready, open your eyes.",
    ],
  },
  {
    id: "breath",
    name: "Breath",
    description: "Follow the breath",
    prompts: [
      "Sit comfortably.",
      "Close your eyes.",
      "Breathe in through your nose.",
      "Pause.",
      "Breathe out, slowly.",
      "Again. In.",
      "And out.",
      "Notice where the breath begins.",
      "And where it ends.",
      "Let it slow on its own.",
      "Deeper.",
      "If your mind wanders, that's fine.",
      "Just come back.",
      "In.",
      "Out.",
      "Nothing else to do.",
      "One full breath.",
      "And one more.",
      "Open your eyes.",
    ],
  },
  {
    id: "listening",
    name: "Listening",
    description: "Notice what's around you",
    prompts: [
      "Sit still.",
      "Close your eyes.",
      "Notice the loudest sound.",
      "Now the quietest.",
      "Listen behind you.",
      "Listen in front of you.",
      "Listen above.",
      "Listen below.",
      "Notice sounds that come and go.",
      "Notice sounds that stay.",
      "Don't name them.",
      "Just hear.",
      "Listen to your own breath.",
      "Listen to the space between sounds.",
      "Hold all of it at once.",
      "Let it wash through you.",
      "One slow breath.",
      "Notice the room.",
      "Open your eyes.",
    ],
  },
];

export const durations = [
  { label: "2 min", minutes: 2 },
  { label: "5 min", minutes: 5 },
  { label: "10 min", minutes: 10 },
] as const;

export type DurationMinutes = (typeof durations)[number]["minutes"];
