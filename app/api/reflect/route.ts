import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { buildReflectionPrompt } from '@/lib/prompts';
import { allCards } from '@/lib/values';
import { Stage1Data } from '@/lib/types';

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
    const stage1: Stage1Data = await req.json();

    const prompt = buildReflectionPrompt(stage1, allCards);

    const message = await createWithRetry({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 300,
      temperature: 1,
      messages: [{ role: 'user', content: prompt }],
    });

    const summary = (message.content[0] as { type: string; text: string }).text.trim();

    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Reflect API error:', error);
    return NextResponse.json({ error: 'Failed to generate reflection' }, { status: 500 });
  }
}
