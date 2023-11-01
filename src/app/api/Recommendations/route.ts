import { NextRequest } from 'next/server';
import cheerio from 'cheerio';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const tags = [
  { dropdownName: 'Tags', name: 'Performance', iconClass: 'fa fa-bolt' },
  { dropdownName: 'Tags', name: 'Security', iconClass: 'fa fa-lock' },
];

const project = [
  { dropdownName: 'Project', name: 'Cloud', iconClass: 'fa fa-cloud' },
  { dropdownName: 'Project', name: 'Message App', iconClass: 'fa fa-comment' },
];

export const POST = async (req: NextRequest) => {
  try {
    const { taskTitle, taskDescription } = await req.json();
    const $ = cheerio.load(taskDescription);
    const description = $.root().text();
    const prompt = `
      below is task title and task description, please recommend a tag and a project for this task.
      Task Description: ${description}
      Task Title: ${taskTitle}
      
      Recommend a tag from the following Tags:
      ${JSON.stringify(tags)}
      
      Recommend a project from the following Projects:
      ${JSON.stringify(project)}
      
      I want you to return just two objects one of tags and another of project that you think are best for this task,
      and I want you to return the object containing the dropdownName, name and iconClass for each of the two objects.
      do not give anyother text just the two objects one from each tags and project.
    `;

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    };

    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);
    const response = chatCompletion.choices[0].message.content;

    // Send the response with the extracted data
    return new Response(response, { status: 200 });
  } catch (error) {
    console.error('Error creating task:', error);
    return new Response('Failure', { status: 500 });
  }
};
