import { NOTION_CALENDAR_ID, NOTION_TOKEN } from 'src/config';
import Calendar from '@/components/calendar/Calendar';
import CalendarTable from '@/components/calendar/CalendarTable';
import { ScheduleItem } from '@/types/NotionApi';

export default async function Home() {
  const list = await getData();

  return (
    <main>
      <Calendar list={list}></Calendar>
      <CalendarTable list={list}></CalendarTable>
    </main>
  );
}

async function getData() {
  const moment = require('moment');

  const options = {
    next: { revalidate: 60 },
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      filter: {
        property: '날짜',
        date: { on_or_after: moment().format('YYYY-MM-01') },
      },
      sorts: [
        {
          property: '날짜',
          direction: 'ascending',
        },
      ],
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_CALENDAR_ID}/query`,
    options
  );
  const data = await response.json();

  const results: any[] = data.results;
  const list: ScheduleItem[] = results?.map(({ id, properties }, idx, arr) => {
    return { ...properties, key: id };
  });

  return list || [];
}
