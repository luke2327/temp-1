'use client';

import React from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Link,
} from '@nextui-org/react';
import { BsInstagram, BsPhone } from 'react-icons/bs';
import { INFO_INSTA, INFO_PHONE } from '@/config';

export default function SnsCard() {
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="/images/logo.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">WHO</p>
            <Link href="https://instagram.com" size="sm" isExternal>
              <p className="text-small text-default-500 flex justify-start items-center gap-2">
                <BsInstagram></BsInstagram>
                <span>Insta : {INFO_INSTA}</span>
              </p>
            </Link>
            <p className="text-small text-default-500 flex justify-start items-center gap-2">
              <BsPhone></BsPhone>
              <span>phone : {INFO_PHONE}</span>
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-sm">고등학생 응원단 WHO</p>
        </CardBody>
      </Card>
    </div>
  );
}
