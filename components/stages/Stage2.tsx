'use client';

import { useState } from 'react';
import { Stage1Data, Stage2Data, RatedDimension } from '@/lib/types';
import { allCards } from '@/lib/values';
import CompassChart from '@/components/ui/CompassChart';

interface Stage2Props {
  stage1: Stage1Data;
  onComplete: (data: Stage2Data) => void;
}

export default function Stage2({ stage1, onComplete }: Stage2Props) {
  const allSelectedIds = [...stage1.values, ...stage1.feltSenses, ...stage1.relational];
  const selectedCards = allSelectedIds
    .map(id => allCards.find(c => c.id === id))
    .filter(Boolean) as typeof allCards;

  const [ratings, setRatings] = useState<Record<string, number>>(
    Object.fromEntries(selectedCards.map(c => [c.id, 50]))
  );
  const [showChart, setShowChart] = useState(false);

  const handleSlider = (id: string, value: number) => {
    setRatings(prev => ({ ...prev, [id]: value }));
    if (!showChart) setShowChart(true);
  };

  const chartDimensions: RatedDimension[] = selectedCards.map(card => ({
    id: card.id, label: card.label, category: card.category, score: ratings[card.id] ?? 50,
  }));

  const avgPresence = Math.round(
    Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length
  );

  const presenceLabel = (score: number) => {
    if (score < 25) return { text: 'Absent',  color: '#B8844A' };
    if (score < 50) return { text: 'Faint',   color: '#9B8E7D' };
    if (score < 75) return { text: 'Partial', color: '#7A9E7E' };
    return              { text: 'Present', color: '#5C8A60' };
  };

  return (
    <div className="stage-enter">

      {/* ── Hierarchy level 1 — stage question ─── */}
      <div className="rise-1" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, color: '#6B8C70', marginBottom: 20 }}>
          Stage 2 · The Gap
        </p>
        <p style={{ fontSize: 18, fontWeight: 200, lineHeight: 1.7, color: '#1A1713', marginBottom: 16 }}>
          Now look at today.
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: '#6B6458' }}>
          For each part of your Home Self, how present is it in your life right now?
        </p>
      </div>

      {/* ── Sliders ─────────────────────────────── */}
      <div className="rise-2" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300, color: '#6B6458', marginBottom: 12 }}>
          Your dimensions
        </p>
        <div style={{ borderTop: '1px solid #D8D0C4' }}>
          {selectedCards.map((card, i) => {
            const score = ratings[card.id] ?? 50;
            const { text, color } = presenceLabel(score);
            return (
              <div key={card.id} className="rise-2" style={{ animationDelay: `${i * 60}ms`, borderBottom: '1px solid #D8D0C4', padding: '24px 0' }}>

                {/* Dimension name + presence label */}
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontSize: 12, fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1A1713' }}>
                    {card.label}
                  </span>
                  <span style={{ fontSize: 9, fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase', color }}>
                    {text}
                  </span>
                </div>

                {/* Slider */}
                <input
                  type="range" min={0} max={100} value={score}
                  onChange={e => handleSlider(card.id, Number(e.target.value))}
                  style={{ background: `linear-gradient(to right, #1A1713 ${score}%, #D8D0C4 ${score}%)` }}
                />

                {/* Range labels */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                  <span style={{ fontSize: 9, color: '#C4B9AB', letterSpacing: '0.08em' }}>Not at all</span>
                  <span style={{ fontSize: 9, color: '#C4B9AB', letterSpacing: '0.08em' }}>Fully present</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Compass — appears after first slider ── */}
      {showChart && (
        <div className="rise-3" style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300, color: '#6B6458' }}>
              Your compass
            </p>
            {avgPresence < 65 && (
              <p style={{ fontSize: 9, color: '#B8844A', letterSpacing: '0.06em' }}>
                {100 - avgPresence}% of your Home Self absent
              </p>
            )}
          </div>
          <div style={{ borderTop: '1px solid #D8D0C4', borderBottom: '1px solid #D8D0C4', padding: '32px 0' }}>
            <CompassChart dimensions={chartDimensions} />
          </div>
          <p style={{ fontSize: 11, fontWeight: 300, lineHeight: 1.75, color: '#6B6458', fontStyle: 'italic', marginTop: 16 }}>
            The outer ring is who you are. The inner shape is where you are living.
          </p>
        </div>
      )}

      {/* ── CTA ─────────────────────────────────── */}
      <button
        onClick={() => onComplete({ ratings: chartDimensions })}
        style={{ width: '100%', padding: '18px 0', background: '#1A1713', color: '#F8F6F1', fontSize: 11, fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', border: 'none', transition: 'opacity 0.4s ease' }}
      >
        Find my ritual
      </button>

    </div>
  );
}
