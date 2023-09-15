'use client';

import styles from '@/styles/photos/PhotosList.module.scss';
import { Cover, NotionDatabaseResults } from '@/types/NotionApi';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Animation from 'src/components/Animation';

interface Props {
  list: NotionDatabaseResults[];
}

export default function PhotosList({ list }: Props) {
  return (
    <div className="md:flex md:gap-4 md:flex-wrap md:flex-grow-0 md:flex-shrink-0 justify-center max-w-[78rem]">
      {list?.map(({ id, cover, properties }, idx) => (
        <Card key={id} className="w-[18rem] min-h-[18rem] my-4">
          <CardBody className="w-full h-full flex justify-center items-center">
            {cover == null ? (
              <Animation></Animation>
            ) : (
              <NotionImage cover={cover}></NotionImage>
            )}
          </CardBody>
          <CardHeader className="w-full flex flex-col justify-center align-center">
            <span className="font-bold ">
              {properties.곡명.title?.map((title) => title.plain_text)}
            </span>
            <div className={styles.practiceStatus}>
              {properties.상태.multi_select?.map((status: any) => (
                <Button size="sm" radius="full" key={status.id} className="">
                  {status.name}
                </Button>
              ))}
            </div>
            <span className="max-w-[18rem] text-sm opacity-50">
              {properties['인원, 구성'].rich_text?.map(
                (rich_text) => rich_text.plain_text
              )}
            </span>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

function NotionImage({ cover }: { cover: Cover }) {
  const keys = Object.keys(cover);

  return (
    <>
      {keys?.map((key, idx) => (
        <Image key={idx} src={cover[key].url} alt="연습 사진" fill></Image>
      ))}
    </>
  );
}
