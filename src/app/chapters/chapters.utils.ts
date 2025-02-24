import { Chapter, CreateChapter } from './types';

export const createChapterData: CreateChapter = {
  chapterNumber: 0,
  chapterSummary: '',
  bookId: 0,
};

export function insertChapter(chapters: Chapter[], chapter: Chapter) {
  const index = chapters.findIndex(
    (ch) => ch.chapterNumber > chapter.chapterNumber
  );

  if (index === -1) {
    chapters.push(chapter);
  } else {
    chapters.splice(index, 0, chapter);
  }
}
