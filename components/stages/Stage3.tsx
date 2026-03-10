'use client';

import { Stage3Data } from '@/lib/types';

interface Stage3Props {
  data: Stage3Data;
  onRestart: () => void;
}

// Escapes special characters for .ics text fields
function icsEscape(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

// Formats a Date as YYYYMMDD for .ics all-day events
function icsDate(d: Date): string {
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

export default function Stage3({ data, onRestart }: Stage3Props) {

  const handleCalendar = () => {
    const today = new Date();
    const start = icsDate(today);

    // UID — unique per practice so duplicate imports don't stack
    const uid = `umbral-${Date.now()}@umbral.app`;

    const description = icsEscape(
      `${data.ritual}\n\nYour nature: ${data.homeSelfSummary}`
    );

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Umbral//Umbral//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTART;VALUE=DATE:${start}`,
      `RRULE:FREQ=DAILY`,
      `SUMMARY:${icsEscape(data.ritualTitle)}`,
      `DESCRIPTION:${description}`,
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      'TRIGGER:PT0S',
      `DESCRIPTION:${icsEscape(data.ritualTitle)}`,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.ritualTitle.toLowerCase().replace(/\s+/g, '-')}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const text = `"${data.ritual}"\n\nUmbral`;
    if (navigator.share) await navigator.share({ title: 'My practice', text });
    else { await navigator.clipboard.writeText(text); }
  };

  return (
    <div className="stage-enter">

      {/* ── Arrival ──────────────────────────────── */}
      <div className="rise-1" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#5A3010', marginBottom: 20 }}>
          Stage 3 · Practice
        </p>
        <p style={{ fontSize: 24, fontWeight: 100, lineHeight: 1.5, letterSpacing: '-0.01em', color: '#1A1713' }}>
          Here you are.
        </p>
      </div>

      {/* ── Your Nature ─────────────────────────── */}
      <div className="rise-2" style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#3D3936', marginBottom: 12 }}>
          Your Root
        </p>
        <div style={{ borderTop: '1px solid #D8D0C4', borderBottom: '1px solid #D8D0C4', padding: '28px 0' }}>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: '#1A1713', letterSpacing: '0.01em' }}>
            {data.homeSelfSummary}
          </p>
        </div>
      </div>

      {/* ── Your Practice ───────────────────────── */}
      <div className="rise-3" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#5A3010', marginBottom: 12 }}>
          Your practice
        </p>
        <div style={{ borderTop: '1px solid rgba(184,132,74,0.3)', borderBottom: '1px solid rgba(184,132,74,0.3)', padding: '28px 0' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5A3010', marginBottom: 16 }}>
            {data.ritualTitle}
          </p>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#1A1713', fontStyle: 'italic', letterSpacing: '0.01em' }}>
            "{data.ritual}"
          </p>
        </div>
        <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: '0.04em', color: '#3D3936', marginTop: 16 }}>
          Start at your pace. Just once. See what emerges.
        </p>
      </div>

      {/* ── Keep this ───────────────────────────── */}
      <div className="rise-4" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#3D3936', marginBottom: 12 }}>
          Keep this
        </p>
        <div style={{ borderTop: '1px solid #D8D0C4' }}>
          {[
            { label: 'Remind me daily', glyph: '↗', fn: handleCalendar },
            { label: 'Share practice',  glyph: '↗', fn: handleShare },
          ].map(({ label, glyph, fn }) => (
            <button key={label} onClick={fn}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #D8D0C4', background: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 400, letterSpacing: '0.08em', color: '#3D3936', transition: 'color 0.3s ease' }}
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
        <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: '#4A4642', fontStyle: 'italic', marginBottom: 28 }}>
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
