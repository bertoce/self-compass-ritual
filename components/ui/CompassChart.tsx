'use client';

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { RatedDimension } from '@/lib/types';

interface CompassChartProps {
  dimensions: RatedDimension[];
}

export default function CompassChart({ dimensions }: CompassChartProps) {
  const data = dimensions.map(d => ({
    dimension: d.label.length > 10 ? d.label.slice(0, 9) + '…' : d.label,
    'Home Self': 100,
    'Current Self': Math.round(d.score),
  }));

  return (
    <div className="w-full stage-enter">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart data={data} margin={{ top: 16, right: 24, bottom: 16, left: 24 }}>
          <PolarGrid
            stroke="#D8D0C4"
            strokeWidth={0.5}
          />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{
              fill: '#6B6458',
              fontSize: 10,
              fontFamily: 'var(--font-geist-sans)',
              fontWeight: 300,
              letterSpacing: '0.06em',
            }}
          />
          <Radar
            name="Home Self"
            dataKey="Home Self"
            stroke="#D8D0C4"
            fill="transparent"
            strokeWidth={0.75}
            strokeDasharray="3 3"
          />
          <Radar
            name="Current Self"
            dataKey="Current Self"
            stroke="#B8844A"
            fill="#B8844A"
            fillOpacity={0.08}
            strokeWidth={1}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Legend — hairline precise */}
      <div className="flex items-center justify-center gap-8 mt-2">
        <div className="flex items-center gap-2.5">
          <div className="w-5 border-t border-dashed" style={{ borderColor: '#D8D0C4' }} />
          <span className="text-xs text-stone-light tracking-widest uppercase" style={{ fontSize: 9, letterSpacing: '0.1em' }}>Home</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 border-t" style={{ borderColor: '#B8844A' }} />
          <span className="text-xs text-stone-light tracking-widest uppercase" style={{ fontSize: 9, letterSpacing: '0.1em' }}>Now</span>
        </div>
      </div>
    </div>
  );
}
