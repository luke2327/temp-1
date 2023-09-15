'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';

interface Props {}

export default function AwardList() {
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader className="font-bold text-lg">
          <h2>수상 실적 🏅</h2>
        </CardHeader>
        <Divider></Divider>
        <CardBody className="grid grid-cols-12 text-sm">
          <div className="col-span-6">
            <p>🥇서울시 페스티벌 금상</p>
            <p>🥈부산시 페스티벌 은상</p>
            <p>🥉대구시 페스티벌 동상</p>
            <p>🎖️전주시 페스티벌 인기상</p>
            <p>🎖️광주시 페스티벌 신인상</p>
          </div>
          <div className="col-span-6">
            <p>🥇서울시 페스티벌 금상</p>
            <p>🥈부산시 페스티벌 은상</p>
            <p>🥉대구시 페스티벌 동상</p>
            <p>🎖️전주시 페스티벌 인기상</p>
            <p>🎖️광주시 페스티벌 신인상</p>
          </div>
        </CardBody>
        <Divider></Divider>
        <CardFooter>15개 수상</CardFooter>
      </Card>
    </div>
  );
}
