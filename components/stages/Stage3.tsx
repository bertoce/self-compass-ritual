'use client';

import { Stage3Data } from '@/lib/types';

interface Stage3Props {
  data: Stage3Data;
  onRestart: () => void;
}

export default function Stage3({ data, onRestart }: Stage3Props) {
  const handleSave = async () => {
    const text = `UMBRAL\n\n── Your Nature ──\n${data.homeSelfSummary}\n\n── ${data.ritualTitle} ──\n${data.ritual}\n\n─────────────────\numbral.app`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'umbral.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const text = `"${data.ritual}"\n\nUmbral`;
    if (navigator.share) await navigator.share({ title: 'My Umbral', text });
    else { await navigator.clipboard.writeText(text); }
  };

  return (
    <div className="stage-enter">

      {/* ── Arrival ──────────────────────────────── */}
      <div className="rise-1" style={{ marginBottom: 56 }}>
        {/* Stage kicker — weight 500 */}
        <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#B8844A', marginBottom: 20 }}>
          Stage 3 · Your Practice
        </p>
        {/* Arrival — weight 100, vast and quiet */}
        <p style={{ fontSize: 24, fontWeight: 100, lineHeight: 1.5, letterSpacing: '-0.01em', color: '#1A1713' }}>
          Here you are.
        </p>
      </div>

      {/* ── Your Nature ─────────────────────────── */}
      <div className="rise-2" style={{ marginBottom: 48 }}>
        {/* Section label — weight 500 */}
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#6B6458', marginBottom: 12 }}>
          Your Nature
        </p>
        <div style={{ borderTop: '1px solid #D8D0C4', borderBottom: '1px solid #D8D0C4', padding: '28px 0' }}>
          {/* Reflection — weight 300, reading voice */}
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: '#1A1713', letterSpacing: '0.01em' }}>
            {data.homeSelfSummary}
          </p>
        </div>
      </div>

      {/* ── Your Practice ───────────────────────── */}
      <div className="rise-3" style={{ marginBottom: 56 }}>
        {/* Section label — weight 500, amber */}
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#B8844A', marginBottom: 12 }}>
          Your practice
        </p>
        <div style={{ borderTop: '1px solid rgba(184,132,74,0.3)', borderBottom: '1px solid rgba(184,132,74,0.3)', padding: '28px 0' }}>
          {/* Practice title — weight 600, the one concrete wall */}
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8844A', marginBottom: 16 }}>
            {data.ritualTitle}
          </p>
          {/* Practice body — weight 300, reading voice */}
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#1A1713', fontStyle: 'italic', letterSpacing: '0.01em' }}>
            "{data.ritual}"
          </p>
        </div>
        <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: '0.04em', color: '#6B6458', marginTop: 16 }}>
          Start at your pace. Just once. See what emerges.
        </p>
      </div>

      {/* ── Keep this ───────────────────────────── */}
      <div className="rise-4" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#6B6458', marginBottom: 12 }}>
          Keep this
        </p>
        <div style={{ borderTop: '1px solid #D8D0C4' }}>
          {[
            { label: 'Save to device', glyph: '↓', fn: handleSave },
            { label: 'Share practice',  glyph: '↗', fn: handleShare },
          ].map(({ label, glyph, fn }) => (
            <button key={label} onClick={fn}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #D8D0C4', background: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 400, letterSpacing: '0.08em', color: '#6B6458', transition: 'color 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#B8844A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B6458')}
            >
              <span>{label}</span>
              <span style={{ fontSize: 10, color: '#C4B9AB' }}>{glyph}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Closing ─────────────────────────────── */}
      <div className="rise-5" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: '#9B9085', fontStyle: 'italic', marginBottom: 28 }}>
          This is yours. It grows through return, not perfection.
        </p>
        <button onClick={onRestart}
          style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 400, color: '#C4B9AB', background: 'none', cursor: 'pointer', borderBottom: '1px solid #D8D0C4', paddingBottom: 2, transition: 'color 0.3s ease' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#1A1713')}
          onMouseLeave={e => (e.currentTarget.style.color = '#C4B9AB')}
        >
          Begin again
        </button>
      </div>

    </div>
  );
}
