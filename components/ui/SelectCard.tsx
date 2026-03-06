'use client';

import { DimensionCard } from '@/lib/types';

interface SelectCardProps {
  card: DimensionCard;
  selected: boolean;
  onToggle: (id: string) => void;
  disabled?: boolean;
}

export default function SelectCard({ card, selected, onToggle, disabled }: SelectCardProps) {
  return (
    <button
      onClick={() => !disabled && onToggle(card.id)}
      disabled={disabled && !selected}
      aria-pressed={selected}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '16px 0',
        borderBottom: '1px solid #D8D0C4',
        background: selected ? 'rgba(184, 132, 74, 0.06)' : 'transparent',
        cursor: disabled && !selected ? 'not-allowed' : 'pointer',
        opacity: disabled && !selected ? 0.3 : 1,
        transition: 'background 0.4s ease, opacity 0.3s ease',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 16,
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Primary label — hierarchy level 3 */}
        <div style={{
          fontSize: 12,
          fontWeight: selected ? 400 : 300,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: selected ? '#B8844A' : '#1A1713',
          marginBottom: 5,
          transition: 'color 0.3s ease, font-weight 0.3s ease',
        }}>
          {card.label}
        </div>

        {/* Description — hierarchy level 4 */}
        <div style={{
          fontSize: 11,
          fontWeight: 300,
          lineHeight: 1.65,
          color: selected ? '#8C6440' : '#6B6458',
          letterSpacing: '0.02em',
          transition: 'color 0.3s ease',
        }}>
          {card.description}
        </div>
      </div>

      {/* Selection dot */}
      <div style={{
        width: 5,
        height: 5,
        borderRadius: '50%',
        marginTop: 4,
        flexShrink: 0,
        background: selected ? '#B8844A' : 'transparent',
        border: `1px solid ${selected ? '#B8844A' : '#C4B9AB'}`,
        transition: 'all 0.35s ease',
      }} />
    </button>
  );
}
