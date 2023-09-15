export interface NotionDatabaseResults {
  id: string;
  cover: Cover | null;
  properties: {
    상태: PhotosStatus;
    곡명: PhotosMusic;
    '인원, 구성': PhotosMember;
  };
}

export interface Cover {
  [key: string]: {
    url: string;
  };
}

interface NotionProperty {
  id: string;
  type: string;
}
interface PhotosStatus {
  multi_select: MultiSelect[];
}

interface PhotosMember {
  rich_text: RichText[];
}
interface PhotosMusic {
  title: Title[];
}

// 타입 별 데이터
interface MultiSelect {
  id: string;
  name: string;
  color: string;
}
interface RichText {
  type: string;
  text: {
    content: string;
    link?: string;
  };
  plain_text: string;
}
interface Title {
  type: string;
  plain_text: string;
}

// 캘린더
export interface ScheduleItem {
  날짜: ScheduleProperty;
  태그: ScheduleProperty;
  이름: ScheduleProperty;
  key: string;
}

export interface ScheduleProperty {
  id: string;
  type: 'date' | 'multi_select' | 'title';

  date?: object;
  multi_select?: object;
  title?: object;
}
