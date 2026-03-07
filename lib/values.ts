import { DimensionCard } from './types';

// Values cards — grounded in Schwartz Basic Human Values (1992)
export const valueCards: DimensionCard[] = [
  {
    id: 'belonging',
    label: 'Belonging',
    description: 'Family, community, a place that knows you',
    category: 'value',
    icon: '🏡',
  },
  {
    id: 'freedom',
    label: 'Freedom',
    description: 'Choosing your own path, on your own terms',
    category: 'value',
    icon: '🌬️',
  },
  {
    id: 'stillness',
    label: 'Stillness',
    description: 'Quiet. Slowness. A life without urgency',
    category: 'value',
    icon: '🌿',
  },
  {
    id: 'connection',
    label: 'Deep Connection',
    description: 'Being truly known — not just liked',
    category: 'value',
    icon: '🤝',
  },
  {
    id: 'tradition',
    label: 'Tradition',
    description: 'Roots, ancestry, the ways things were done before',
    category: 'value',
    icon: '🌱',
  },
  {
    id: 'purpose',
    label: 'Purpose',
    description: 'Doing something that matters beyond yourself',
    category: 'value',
    icon: '✨',
  },
  {
    id: 'joy',
    label: 'Joy',
    description: 'Pleasure, play, aliveness — not earned, just felt',
    category: 'value',
    icon: '☀️',
  },
  {
    id: 'integrity',
    label: 'Integrity',
    description: 'Living in alignment with what you believe',
    category: 'value',
    icon: '🧭',
  },
];

// Felt sense cards — embodied, somatic, grounded in present-moment awareness (Tolle)
export const feltSenseCards: DimensionCard[] = [
  {
    id: 'calm',
    label: 'Calm',
    description: 'A settled body. No urgency. Nothing to prove.',
    category: 'felt',
    icon: '🌊',
  },
  {
    id: 'lightness',
    label: 'Lightness',
    description: 'Something lifted. Weight set down.',
    category: 'felt',
    icon: '🕊️',
  },
  {
    id: 'aliveness',
    label: 'Aliveness',
    description: 'Fully here. Fully present. Nothing numb.',
    category: 'felt',
    icon: '⚡',
  },
  {
    id: 'confidence',
    label: 'Confidence',
    description: 'No performance needed. You already belong.',
    category: 'felt',
    icon: '🔥',
  },
  {
    id: 'warmth',
    label: 'Warmth',
    description: 'Loved. Safe. Held by people who know you.',
    category: 'felt',
    icon: '🫂',
  },
  {
    id: 'ease',
    label: 'Ease',
    description: "Things flow. You don't have to force anything.",
    category: 'felt',
    icon: '💧',
  },
];

// Relational cards — grounded in Self-Determination Theory (relatedness need)
export const relationalCards: DimensionCard[] = [
  {
    id: 'family',
    label: 'Family',
    description: 'People who have known you the longest',
    category: 'relational',
    icon: '👨‍👩‍👧',
  },
  {
    id: 'friends',
    label: 'Old Friends',
    description: 'People who knew you before your context changed',
    category: 'relational',
    icon: '👫',
  },
  {
    id: 'solitude',
    label: 'Solitude',
    description: 'Just you — no role, no expectation',
    category: 'relational',
    icon: '🌙',
  },
  {
    id: 'community',
    label: 'Community',
    description: 'Neighbors, a place, people who share your world',
    category: 'relational',
    icon: '🏘️',
  },
  {
    id: 'elders',
    label: 'Elders',
    description: 'The wisdom of those who came before you',
    category: 'relational',
    icon: '🌳',
  },
  {
    id: 'partner',
    label: 'A Beloved',
    description: 'Someone who sees the real you — and stays',
    category: 'relational',
    icon: '❤️',
  },
];

export const allCards: DimensionCard[] = [
  ...valueCards,
  ...feltSenseCards,
  ...relationalCards,
];
