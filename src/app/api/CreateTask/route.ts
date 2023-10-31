import { db } from '@/db';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const { taskTitle, taskDescription, tags } = await req.json();
    const task = await db.task.create({
      data: {
        taskTitle,
        taskDescription,
        tags,
      },
    });
    return new Response('Success', { status: 200 });
  } catch (error) {
    console.error('Error creating task:', error);
    return new Response('Failure', { status: 500 });
  }
};
