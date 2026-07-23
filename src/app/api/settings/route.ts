import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { User } from '@/server/models/User';
import { connectToDatabase } from '@/lib/db/mongoose';
import { z } from 'zod';

const AISettingsSchema = z.object({
  model: z.string().min(1, 'Model is required'),
  maxTokens: z.number().min(100).max(8000),
  temperature: z.number().min(0).max(2.0),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return current settings or defaults
    const settings = user.aiSettings || {
      model: 'meta-llama/llama-3.1-8b-instruct:free',
      maxTokens: 4000,
      temperature: 0.7,
    };

    return NextResponse.json({ success: true, data: settings });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const result = AISettingsSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid settings', details: result.error.format() },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findByIdAndUpdate(
      session.user.id,
      { $set: { aiSettings: result.data } },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: user.aiSettings });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
