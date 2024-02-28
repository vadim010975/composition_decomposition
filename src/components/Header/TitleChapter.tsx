import { FC } from "react";

/**
 * Компонент отрисовывает разделы заголовка боди хедера
 */

type TitleChapterProps = {
  title: string,
  link: string,
}

const TitleChapter: FC<TitleChapterProps> = ({ title, link }) => {
  return (
    <div className="title__chapter">
      <a href={link} className="title__chapter_title">{title}</a>
    </div>
  );
}

export default TitleChapter;