import EmailTemplate from '@/components/upload/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const response = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'Kachalka@resend.dev',
      to: [response.emailToSend],
      subject: `${response.userName} поделился файлом с Вами`,
      react: EmailTemplate({ response }),
      text: 'Файл'
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}