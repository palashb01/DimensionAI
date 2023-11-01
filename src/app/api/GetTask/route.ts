import { db } from '@/db';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    const tasks = await db.task.findMany();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    console.error('Error creating task:', error);
    return new Response('Failure', { status: 500 });
  }
};
