import Link from 'next/link';

const Hairline = () => (
  <div style={{ height: 1, background: '#D8D0C4' }} />
);

export default function Home() {
  return (
    <div style={{
      // Turrell Ganzfeld — mauve-rose at top, through warm limestone, to amber gold at base
      background: 'linear-gradient(170deg, #EDE0EB 0%, #F5F0EC 28%, #EEE4D4 62%, #E8D8B8 100%)',
      minHeight: '100vh',
    }}>

      {/* ── HEADER ─────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 10,
        padding: '16px 32px 16px 48px',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(245, 240, 236, 0.80)',
        borderBottom: '1px solid #D8D0C4',
      }}>
        <div style={{ maxWidth: 380, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#1A1713" strokeWidth="0.75" />
              <line x1="16" y1="4" x2="16" y2="28" stroke="#1A1713" strokeWidth="0.75" />
              <line x1="4" y1="16" x2="28" y2="16" stroke="#D8D0C4" strokeWidth="0.5" />
              <circle cx="16" cy="16" r="1.5" fill="#B8844A" />
              <polygon points="16,5 14.5,12 16,10.5 17.5,12" fill="#1A1713" />
            </svg>
            <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300, color: '#1A1713' }}>
              Identity Compass
            </span>
          </div>
          <Link href="/experience" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 300, color: '#6B6458', borderBottom: '1px solid #D8D0C4', paddingBottom: 2 }}>
            Begin
          </Link>
        </div>
      </header>

      <main style={{ padding: '0 32px 0 48px' }}>
        <div style={{ maxWidth: 380, margin: '0 auto' }}>

          {/* ── HERO ───────────────────────────────── */}
          <section style={{ paddingTop: 80, paddingBottom: 80 }}>

            {/* Kicker */}
            <p className="rise-1" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, color: '#B8844A', marginBottom: 28 }}>
              For those who cross worlds
            </p>

            {/* Headline */}
            <h1 className="rise-2" style={{ fontSize: 30, fontWeight: 200, lineHeight: 1.4, letterSpacing: '-0.01em', color: '#1A1713', marginBottom: 24 }}>
              Every time you cross back,<br />
              something lifts.
            </h1>

            {/* Subline */}
            <p className="rise-3" style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#6B6458', marginBottom: 20 }}>
              That isn't the destination. That's you — returning to yourself.
            </p>
            <p className="rise-3" style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#6B6458', marginBottom: 52 }}>
              Most people don't realize that feeling is accessible without the flight.
            </p>

            {/* CTA */}
            <div className="rise-4">
              <Link
                href="/experience"
                className="block text-center"
                style={{ padding: '18px 0', background: '#1A1713', color: '#F8F6F1', fontSize: 11, fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'opacity 0.4s ease' }}
              >
                Begin the experience
              </Link>
              <p style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4B9AB', textAlign: 'center', marginTop: 14 }}>
                10–15 minutes &nbsp;·&nbsp; No account &nbsp;·&nbsp; No writing
              </p>
            </div>
          </section>

          <Hairline />

          {/* ── THE PROBLEM ──────────────────────── */}
          <section style={{ paddingTop: 72, paddingBottom: 72 }}>
            <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, color: '#C4B9AB', marginBottom: 24 }}>
              The problem
            </p>
            <p style={{ fontSize: 16, fontWeight: 200, lineHeight: 1.75, color: '#1A1713', marginBottom: 20 }}>
              Most people are living as two versions of themselves simultaneously.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#6B6458', marginBottom: 16 }}>
              One who knows what matters — rooted in memory, in relationship, in the specific feeling of being seen. One who has quietly become whoever the environment expects.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#6B6458', fontStyle: 'italic' }}>
              The gap between them is real. And almost never named.
            </p>
          </section>

          <Hairline />

          {/* ── WHAT IT IS ───────────────────────── */}
          <section style={{ paddingTop: 72, paddingBottom: 72 }}>
            <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, color: '#C4B9AB', marginBottom: 24 }}>
              What this is
            </p>

            {/* Not / but */}
            <div style={{ borderTop: '1px solid #D8D0C4', marginBottom: 32 }}>
              {[
                ['Not a meditation app', 'Not a personality quiz', 'Not a habit tracker'],
                ['A single conversation', 'that excavates who you already are'],
              ].map((group, gi) => (
                <div key={gi}>
                  {group.map(item => (
                    <div key={item} style={{ borderBottom: '1px solid #D8D0C4', padding: '13px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, fontWeight: gi === 0 ? 300 : 400, color: gi === 0 ? '#9B9085' : '#1A1713', letterSpacing: '0.03em', fontStyle: gi === 0 ? 'normal' : 'italic' }}>
                        {item}
                      </span>
                      {gi === 0 && <span style={{ fontSize: 10, color: '#D8D0C4' }}>—</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#6B6458' }}>
              The closest analogues — therapy, deep friendship, going home — don't scale. This is the portable, daily version of that experience.
            </p>
          </section>

          <Hairline />

          {/* ── WHAT YOU LEAVE WITH ──────────────── */}
          <section style={{ paddingTop: 72, paddingBottom: 72 }}>
            <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, color: '#C4B9AB', marginBottom: 24 }}>
              You leave with
            </p>
            <div style={{ borderTop: '1px solid #D8D0C4' }}>
              {[
                ['I', 'A name for who you are at your core'],
                ['II', 'An honest view of the gap you have been living in'],
                ['III', 'One ritual, specific to you, doable tomorrow'],
              ].map(([num, text]) => (
                <div key={num} style={{ borderBottom: '1px solid #D8D0C4', padding: '20px 0', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 9, fontWeight: 300, color: '#B8844A', letterSpacing: '0.1em', minWidth: 16, paddingTop: 2 }}>{num}</span>
                  <span style={{ fontSize: 13, fontWeight: 300, color: '#1A1713', lineHeight: 1.7 }}>{text}</span>
                </div>
              ))}
            </div>
          </section>

          <Hairline />

          {/* ── CLOSING ──────────────────────────── */}
          <section style={{ paddingTop: 72, paddingBottom: 80 }}>
            <p style={{ fontSize: 20, fontWeight: 200, lineHeight: 1.6, color: '#1A1713', marginBottom: 48 }}>
              The gap is real.<br />
              And closeable.<br />
              Without leaving.
            </p>
            <Link
              href="/experience"
              className="block text-center"
              style={{ padding: '18px 0', background: '#1A1713', color: '#F8F6F1', fontSize: 11, fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              Begin the experience
            </Link>
            <p style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4B9AB', textAlign: 'center', marginTop: 14 }}>
              No account &nbsp;·&nbsp; No signup &nbsp;·&nbsp; 10–15 minutes
            </p>
          </section>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid #D8D0C4', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4B9AB' }}>
          Schwartz Values · Self-Determination Theory
        </p>
      </footer>

    </div>
  );
}
