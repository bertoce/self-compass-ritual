import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { buildRitualPrompt } from '@/lib/prompts';
import { RatedDimension } from '@/lib/types';

const client = new Anthropic();

async function createWithRetry(params: Parameters<typeof client.messages.create>[0], retries = 3): Promise<Anthropic.Message> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await client.messages.create({ ...params, stream: false });
    } catch (error: unknown) {
      const isOverloaded = error instanceof Error && 'status' in error && (error as { status: number }).status === 529;
      if (isOverloaded && attempt < retries) {
        await new Promise(res => setTimeout(res, attempt * 1500));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}

export async function POST(req: NextRequest) {
  try {
    const { summary, ratings }: { summary: string; ratings: RatedDimension[] } = await req.json();

    // Surface the 2–3 dimensions with the most gap
    const lowestRated = [...ratings]
      .sort((a, b) => a.score - b.score)
      .slice(0, 3);

    const prompt = buildRitualPrompt(summary, lowestRated);

    const message = await createWithRetry({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }],
    });

    const raw = (message.content[0] as { type: string; text: string }).text.trim();

    // Parse TITLE: and RITUAL: from the response
    const titleMatch = raw.match(/TITLE:\s*(.+)/);
    const ritualMatch = raw.match(/RITUAL:\s*([\s\S]+)/);

    const ritualTitle = titleMatch?.[1]?.trim() ?? 'Your Daily Ritual';
    const ritual = ritualMatch?.[1]?.trim() ?? raw;

    return NextResponse.json({ ritualTitle, ritual });
  } catch (error) {
    console.error('Ritual API error:', error);
    return NextResponse.json({ error: 'Failed to generate ritual' }, { status: 500 });
  }
}
