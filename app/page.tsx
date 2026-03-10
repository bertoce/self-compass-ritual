import Link from 'next/link';

const Hairline = () => (
  <div style={{ height: 1, background: '#D8D0C4' }} />
);

export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(170deg, #CDA5CA 0%, #E5C8A6 28%, #DFBD6C 62%, #CD9D3E 100%)',
      minHeight: '100vh',
    }}>

      {/* ── HEADER ─────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 10,
        padding: '16px 32px 16px 48px',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(248, 240, 232, 0.85)',
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
            <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#1A1713' }}>
              Umbral
            </span>
          </div>
          <Link href="/experience" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, color: '#3D3936', borderBottom: '1px solid #D8D0C4', paddingBottom: 2 }}>
            Begin
          </Link>
        </div>
      </header>

      <main style={{ padding: '0 32px 0 48px' }}>
        <div style={{ maxWidth: 380, margin: '0 auto' }}>

          {/* ── HERO ─────────────────────────────── */}
          <section style={{ paddingTop: 80, paddingBottom: 80 }}>

            <h1 className="rise-1" style={{ fontSize: 28, fontWeight: 100, lineHeight: 1.45, letterSpacing: '-0.01em', color: '#1A1713', marginBottom: 10 }}>
              There are places where you don't have to explain yourself.
            </h1>

            <p className="rise-2" style={{ fontSize: 22, fontWeight: 100, lineHeight: 1.4, letterSpacing: '-0.01em', color: '#1A1713', marginBottom: 36 }}>
              Where you just are.
            </p>

            <p className="rise-3" style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#3D3936', marginBottom: 14 }}>
              You know what it feels like to arrive there.
            </p>
            <p className="rise-3" style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#3D3936', marginBottom: 52 }}>
              This is a practice for arriving there more often.
            </p>

            <div className="rise-4">
              <Link
                href="/experience"
                className="block text-center"
                style={{ padding: '18px 0', background: '#1A1713', color: '#F8F6F1', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'opacity 0.4s ease' }}
              >
                Come in
              </Link>
              <p style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 400, color: '#3D3936', textAlign: 'center', marginTop: 14 }}>
                Just you and a few honest questions.
              </p>
            </div>
          </section>

          {/* ── LEARN MORE ───────────────────────── */}
          <details style={{ marginBottom: 80 }}>
            <summary style={{
              cursor: 'pointer',
              listStyle: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 0',
              borderTop: '1px solid #D8D0C4',
              borderBottom: '1px solid #D8D0C4',
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#3D3936',
              userSelect: 'none',
            }}>
              <span>Learn more</span>
              <span style={{ fontSize: 12, color: '#C4B9AB', fontWeight: 300 }}>↓</span>
            </summary>

            {/* ── WHAT THIS IS ─────────────────── */}
            <section style={{ paddingTop: 56, paddingBottom: 56 }}>
              <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#C4B9AB', marginBottom: 24 }}>
                What this is
              </p>
              <p style={{ fontSize: 16, fontWeight: 200, lineHeight: 1.75, color: '#1A1713', marginBottom: 20 }}>
                You already carry who you are. Life just makes it easy to drift.
              </p>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#3D3936', marginBottom: 16 }}>
                There is a version of you that doesn't need to be built or fixed. It already exists. It shows up in certain moments, certain places, certain people. When you are there, you know it immediately.
              </p>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#3D3936', fontStyle: 'italic' }}>
                Umbral is a conversation that names who that person is, and gives you one small way to return to them each day.
              </p>
            </section>

            <Hairline />

            {/* ── NOT / BUT ────────────────────── */}
            <section style={{ paddingTop: 56, paddingBottom: 56 }}>
              <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#C4B9AB', marginBottom: 24 }}>
                What it is not
              </p>
              <div style={{ borderTop: '1px solid #D8D0C4', marginBottom: 32 }}>
                {[
                  'Not a meditation app',
                  'Not a personality quiz',
                  'Not a habit tracker',
                ].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #D8D0C4', padding: '13px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, fontWeight: 300, color: '#9B9085', letterSpacing: '0.03em' }}>
                      {item}
                    </span>
                    <span style={{ fontSize: 10, color: '#D8D0C4' }}>—</span>
                  </div>
                ))}
                <div style={{ borderBottom: '1px solid #D8D0C4', padding: '13px 0' }}>
                  <span style={{ fontSize: 12, fontWeight: 400, color: '#1A1713', letterSpacing: '0.03em', fontStyle: 'italic' }}>
                    A single conversation that finds who you already are.
                  </span>
                </div>
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#3D3936' }}>
                The closest things to this are therapy, deep friendship, going home. This is what you do between.
              </p>
            </section>

            <Hairline />

            {/* ── YOU LEAVE WITH ───────────────── */}
            <section style={{ paddingTop: 56, paddingBottom: 56 }}>
              <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#C4B9AB', marginBottom: 24 }}>
                You leave with
              </p>
              <div style={{ borderTop: '1px solid #D8D0C4' }}>
                {[
                  ['I',   'A reflection of who you are when most yourself'],
                  ['II',  'An honest look at where your days actually live'],
                  ['III', 'One practice, built from your nature, yours to begin'],
                ].map(([num, text]) => (
                  <div key={num} style={{ borderBottom: '1px solid #D8D0C4', padding: '20px 0', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 9, fontWeight: 500, color: '#B8844A', letterSpacing: '0.1em', minWidth: 16, paddingTop: 2 }}>{num}</span>
                    <span style={{ fontSize: 13, fontWeight: 300, color: '#1A1713', lineHeight: 1.7 }}>{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CTA inside learn more ─────────── */}
            <div style={{ paddingBottom: 56 }}>
              <Link
                href="/experience"
                className="block text-center"
                style={{ padding: '18px 0', background: '#1A1713', color: '#F8F6F1', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                Come in
              </Link>
            </div>

          </details>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid #D8D0C4', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 400, color: '#1A1713' }}>
          Rooted in the science of human values and what makes people feel alive.
        </p>
      </footer>

    </div>
  );
}
