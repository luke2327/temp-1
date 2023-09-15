import { NOTION_DATABASE_ID, NOTION_TOKEN } from 'src/config';
import PhotosList from './PhotosList';
import { NotionDatabaseResults } from '@/types/NotionApi';

export default async function PhotosPage() {
  const data: NotionDatabaseResults[] = await getData();
  return (
    <main>
      <div className="pt-6 flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">WHO 연습 현황</h1>
        <PhotosList list={data}></PhotosList>
      </div>
    </main>
  );
}

async function getData() {
  const options = {
    next: { revalidate: 60 },
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };
  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );
  const data = await response.json();
  return data.results;
}
