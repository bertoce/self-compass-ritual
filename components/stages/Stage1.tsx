'use client';

import { useState } from 'react';
import { valueCards, feltSenseCards, relationalCards } from '@/lib/values';
import { Stage1Data } from '@/lib/types';
import SelectCard from '@/components/ui/SelectCard';

interface Stage1Props {
  onComplete: (data: Stage1Data) => void;
}

const MAX_VALUES = 3;
const MAX_FELT = 3;
const MAX_RELATIONAL = 2;

const SectionLabel = ({ text, count, max }: { text: string; count: number; max: number }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
    <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#3D3936' }}>
      {text}
    </span>
    <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', color: count > 0 ? '#B8844A' : '#C4B9AB' }}>
      {count} / {max}
    </span>
  </div>
);

export default function Stage1({ onComplete }: Stage1Props) {
  const [selectedValues, setSelectedValues]         = useState<string[]>([]);
  const [selectedFelt, setSelectedFelt]             = useState<string[]>([]);
  const [selectedRelational, setSelectedRelational] = useState<string[]>([]);
  const [word, setWord] = useState('');

  const toggle = (id: string, selected: string[], setSelected: (v: string[]) => void, max: number) => {
    if (selected.includes(id)) setSelected(selected.filter(s => s !== id));
    else if (selected.length < max) setSelected([...selected, id]);
  };

  const canContinue = selectedValues.length >= 1 && selectedFelt.length >= 1 && selectedRelational.length >= 1;

  return (
    <div className="stage-enter">

      {/* ── Opening ───────────────────────────── */}
      <div className="rise-1" style={{ marginBottom: 56 }}>
        {/* Stage kicker — weight 500 */}
        <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#B8844A', marginBottom: 20 }}>
          Stage 1 · Root
        </p>
        {/* Question — weight 200 */}
        <p style={{ fontSize: 18, fontWeight: 200, lineHeight: 1.7, color: '#1A1713', marginBottom: 16 }}>
          Call to mind a moment you felt completely yourself.
        </p>
        {/* Guidance — weight 300 */}
        <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: '#3D3936', fontStyle: 'italic' }}>
          At ease. Unguarded. Alive. Stay in that moment as you choose.
        </p>
      </div>

      {/* ── Values ──────────────────────────────── */}
      <div className="rise-2" style={{ marginBottom: 48 }}>
        <SectionLabel text="What mattered most in that moment" count={selectedValues.length} max={MAX_VALUES} />
        <div style={{ borderTop: '1px solid #D8D0C4' }}>
          {valueCards.map(card => (
            <SelectCard key={card.id} card={card}
              selected={selectedValues.includes(card.id)}
              onToggle={id => toggle(id, selectedValues, setSelectedValues, MAX_VALUES)}
              disabled={selectedValues.length >= MAX_VALUES && !selectedValues.includes(card.id)}
            />
          ))}
        </div>
      </div>

      {/* ── Felt sense ──────────────────────────── */}
      <div className="rise-3" style={{ marginBottom: 48 }}>
        <SectionLabel text="How it felt in the body" count={selectedFelt.length} max={MAX_FELT} />
        <div style={{ borderTop: '1px solid #D8D0C4' }}>
          {feltSenseCards.map(card => (
            <SelectCard key={card.id} card={card}
              selected={selectedFelt.includes(card.id)}
              onToggle={id => toggle(id, selectedFelt, setSelectedFelt, MAX_FELT)}
              disabled={selectedFelt.length >= MAX_FELT && !selectedFelt.includes(card.id)}
            />
          ))}
        </div>
      </div>

      {/* ── Relational ──────────────────────────── */}
      <div className="rise-4" style={{ marginBottom: 48 }}>
        <SectionLabel text="Who was there" count={selectedRelational.length} max={MAX_RELATIONAL} />
        <div style={{ borderTop: '1px solid #D8D0C4' }}>
          {relationalCards.map(card => (
            <SelectCard key={card.id} card={card}
              selected={selectedRelational.includes(card.id)}
              onToggle={id => toggle(id, selectedRelational, setSelectedRelational, MAX_RELATIONAL)}
              disabled={selectedRelational.length >= MAX_RELATIONAL && !selectedRelational.includes(card.id)}
            />
          ))}
        </div>
      </div>

      {/* ── Optional word ───────────────────────── */}
      <div className="rise-5" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#3D3936', marginBottom: 14 }}>
          A word for that version of you &nbsp;<span style={{ color: '#C4B9AB', fontWeight: 400 }}>(optional)</span>
        </p>
        <input
          type="text"
          value={word}
          onChange={e => setWord(e.target.value)}
          maxLength={30}
          placeholder="grounded, whole, free…"
          style={{
            width: '100%',
            background: 'transparent',
            outline: 'none',
            borderBottom: '1px solid #D8D0C4',
            paddingBottom: 12,
            fontSize: 14,
            fontWeight: 200,
            letterSpacing: '0.04em',
            color: '#1A1713',
          }}
          className="placeholder-stone-light focus:border-stone transition-colors duration-300"
        />
      </div>

      {/* ── CTA ─────────────────────────────────── */}
      <button
        onClick={() => canContinue && onComplete({ values: selectedValues, feltSenses: selectedFelt, relational: selectedRelational, word: word.trim() })}
        disabled={!canContinue}
        style={{
          width: '100%',
          padding: '18px 0',
          background: canContinue ? '#1A1713' : 'transparent',
          color: canContinue ? '#F8F6F1' : '#C4B9AB',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          border: canContinue ? 'none' : '1px solid #D8D0C4',
          cursor: canContinue ? 'pointer' : 'not-allowed',
          transition: 'all 0.5s ease',
        }}
      >
        {canContinue ? 'See where you are now' : 'Choose at least one from each section'}
      </button>

    </div>
  );
}
