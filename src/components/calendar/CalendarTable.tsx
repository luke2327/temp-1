'use client';

import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import { ScheduleItem } from '@/types/NotionApi';

export default function CalendarTable({ list }: { list: ScheduleItem[] }) {
  const columns = [
    { key: '날짜', label: '날짜' },
    { key: '태그', label: '태그' },
    { key: '이름', label: '이름' },
  ];

  return (
    <div className="w-[23rem] max-w-[78rem] md:p-6 flex flex-col justify-center items-center rounded-2xl">
      <Table
        isStriped
        className="max-w-[20rem]"
        aria-label="Example table with dynamic content"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'이번달 일정이 없습니다.'} items={list}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => {
                const data = getKeyValue(item, columnKey);
                if (data.type == 'date') {
                  return (
                    <TableCell className="text-tiny w-24">
                      {data.date.start}
                    </TableCell>
                  );
                } else if (data.type == 'title') {
                  return (
                    <TableCell className="text-tiny">
                      {data.title[0].plain_text}
                    </TableCell>
                  );
                }
                return (
                  <TableCell className="text-tiny w-16">
                    {data.multi_select &&
                      data.multi_select.map(
                        ({ name, key }: { name: string; key: string }) => (
                          <span key={key}>{name}</span>
                        )
                      )}
                  </TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
