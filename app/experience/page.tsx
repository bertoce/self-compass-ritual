'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Stage1Data, Stage2Data, Stage3Data } from '@/lib/types';
import Stage1 from '@/components/stages/Stage1';
import Stage2 from '@/components/stages/Stage2';
import Stage3 from '@/components/stages/Stage3';

type CurrentStage = 1 | 2 | 3;

// Turrell Ganzfeld — each stage is a distinct color atmosphere
// Stage 1: soft mauve-rose (introspective, inward, searching)
// Stage 2: muted sage-grey (contemplative, honest, clear-eyed)
// Stage 3: warm amber gold (resolution, warmth, arrival)
const STAGE_BACKGROUNDS: Record<CurrentStage, string> = {
  1: 'radial-gradient(ellipse at 60% 0%,   #E8D8EB 0%, #F5F0F4 40%, #F7F4F0 100%)',
  2: 'radial-gradient(ellipse at 40% 30%,  #D8E0D8 0%, #EEF0E8 45%, #F4F2EC 100%)',
  3: 'radial-gradient(ellipse at 50% 55%,  #E4C87C 0%, #F0E0B0 35%, #F5EDD8 100%)',
};

const STAGE_LABELS: Record<CurrentStage, string> = {
  1: 'Home Self',
  2: 'The Gap',
  3: 'Ritual',
};

export default function ExperiencePage() {
  const [currentStage, setCurrentStage] = useState<CurrentStage>(1);
  const [stage1Data, setStage1Data] = useState<Stage1Data | null>(null);
  const [stage2Data, setStage2Data] = useState<Stage2Data | null>(null);
  const [stage3Data, setStage3Data] = useState<Stage3Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStage1Complete = (data: Stage1Data) => {
    setStage1Data(data);
    setCurrentStage(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStage2Complete = async (data: Stage2Data) => {
    setStage2Data(data);
    setIsLoading(true);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const reflectRes = await fetch('/api/reflect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stage1Data),
      });
      if (!reflectRes.ok) throw new Error('Reflection failed');
      const { summary } = await reflectRes.json();

      const ritualRes = await fetch('/api/ritual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ summary, ratings: data.ratings }),
      });
      if (!ritualRes.ok) throw new Error('Ritual generation failed');
      const { ritualTitle, ritual } = await ritualRes.json();

      setStage3Data({ homeSelfSummary: summary, ritualTitle, ritual });
      setCurrentStage(3);
    } catch (err) {
      console.error(err);
      setError('Something got lost. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestart = () => {
    setCurrentStage(1);
    setStage1Data(null);
    setStage2Data(null);
    setStage3Data(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bgStage = isLoading ? 3 : currentStage;

  return (
    <div
      className="min-h-screen"
      style={{
        background: STAGE_BACKGROUNDS[bgStage],
        transition: 'background 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Header — hairline + wordmark + progress */}
      <header
        style={{
          position: 'sticky', top: 0, zIndex: 10,
          padding: '0 32px 0 48px',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(248, 246, 241, 0.7)',
          borderBottom: '1px solid #D8D0C4',
        }}
      >
        <div style={{ maxWidth: 380, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, paddingBottom: 16 }}>
          <Link
            href="/"
            className="text-stone transition-colors hover:text-stone-mid"
            style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300 }}
          >
            Identity Compass
          </Link>

          {/* Hairline stage progress */}
          <div className="flex items-center gap-4">
            {([1, 2, 3] as CurrentStage[]).map((s, i) => {
              const isDone = currentStage > s || (isLoading && s === 3);
              const isActive = currentStage === s && !isLoading;
              return (
                <div key={s} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: isDone ? '#B8844A' : isActive ? '#1A1713' : '#D8D0C4',
                        transition: 'background 0.8s ease',
                      }}
                    />
                    <span
                      style={{
                        fontSize: 7,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: isActive ? '#1A1713' : '#C4B9AB',
                        fontWeight: 300,
                        transition: 'color 0.8s ease',
                      }}
                    >
                      {STAGE_LABELS[s]}
                    </span>
                  </div>
                  {i < 2 && (
                    <div style={{ width: 12, height: 1, background: '#D8D0C4' }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ padding: '0 32px 0 48px' }}>
        <div style={{ maxWidth: 380, margin: '0 auto', paddingTop: 48, paddingBottom: 96 }}>

        {/* Loading — Turrell breathing light */}
        {isLoading && (
          <div className="stage-enter text-center pt-28">
            <div
              className="luminous-pulse mx-auto mb-10"
              style={{
                width: 1,
                height: 60,
                background: 'linear-gradient(to bottom, transparent, #B8844A, transparent)',
              }}
            />
            <p
              className="text-stone"
              style={{ fontSize: 13, fontWeight: 200, letterSpacing: '0.06em', lineHeight: 1.8 }}
            >
              Sitting with what you shared.
            </p>
            <p
              className="mt-3 text-stone-light"
              style={{ fontSize: 10, fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              Finding your compass
            </p>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div className="stage-enter pt-24 text-center">
            <p
              className="text-stone mb-8"
              style={{ fontSize: 14, fontWeight: 200, lineHeight: 1.8 }}
            >
              Something got lost along the way.
            </p>
            <button
              onClick={() => stage2Data && handleStage2Complete(stage2Data)}
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 300,
                color: '#6B6458',
                borderBottom: '1px solid #D8D0C4',
                paddingBottom: 2,
              }}
            >
              Try again
            </button>
          </div>
        )}

        {/* Stages */}
        {!isLoading && !error && (
          <>
            {currentStage === 1 && (
              <Stage1 onComplete={handleStage1Complete} />
            )}
            {currentStage === 2 && stage1Data && (
              <Stage2 stage1={stage1Data} onComplete={handleStage2Complete} />
            )}
            {currentStage === 3 && stage3Data && (
              <Stage3 data={stage3Data} onRestart={handleRestart} />
            )}
          </>
        )}
        </div>
      </main>
    </div>
  );
}
