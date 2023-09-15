import { GMAIL_APP_PASSWORD, GMAIL_ID } from '@/config';
import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export type EmailData = {
  name: string;
  phone: string;
  location: string;
  date?: string;
  etc?: string;
};

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const res = await sendEmail(body);
    return new NextResponse(JSON.stringify({ message: 'success' }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'fail' }), {
      status: 500,
    });
  }
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_ID,
    pass: GMAIL_APP_PASSWORD,
  },
});

async function sendEmail({ name, phone, location, date, etc }: EmailData) {
  const subject = `[찬조신청] ${location} ${name}`;
  const to = `${GMAIL_ID}@gmail.com`;
  const from = name;
  const html = `
  <div style='margin:20px;'>
    <h2>찬조신청 메일입니다. 🥳</h2>
    <br>
    <div align='left' style='border:1px solid black); font-family:verdana');>
      <div>
        <p>성함, 단체 : ${name}</p>
        <p>전화 번호 : ${phone}</p>
        <p>지역 : ${location}</p>
        <p>날짜 : ${date}</p>
        <p>요청 사항 : ${etc}</p>
      <div>
      <br/>
    </div>
  `;

  return transporter.sendMail({
    to,
    subject,
    from,
    html,
  });
}
