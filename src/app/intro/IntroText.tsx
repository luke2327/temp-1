'use client';

import { INTRO_MESSAGE } from '@/config';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';

export default function IntroText() {
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader className="font-bold text-lg">About Us 🥳</CardHeader>
        <Divider></Divider>
        <CardBody className="text-sm">
          {INTRO_MESSAGE.map((sentence, idx) => (
            <p key={idx}>{sentence}</p>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
