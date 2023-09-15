'use client';

import React from 'react';

import { Button, Card, CardFooter, Image, Link } from '@nextui-org/react';

interface Props {}

export default function IntroCard() {
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardFooter className="absolute z-10 top-0 flex-col items-start bg-black/40 border-b-1 border-default-600 dark:border-default-100">
          <p className="text-tiny text-white/40 uppercase font-bold">
            SINCE 2000 ~
          </p>
          <h4 className="text-white/90 font-medium text-xl">WHO 🎉</h4>
        </CardFooter>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/images/1.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/80">공연, 후원, 찬조는</p>
              <p className="text-tiny text-white/80">
                오른쪽 버튼을 눌러주세요 👉
              </p>
            </div>
          </div>
          <Button
            href="/contact"
            as={Link}
            radius="full"
            size="sm"
            className="bg-gradient-to-tr from-purple-500 to-blue-500"
            color="primary"
            variant="shadow"
          >
            찬조 신청
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
