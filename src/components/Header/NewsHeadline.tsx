import { FC } from "react";

/**
 * Компонент отрисовывает новостные заголовки (в HeaderContent)
 */

type NewsHeadlineProps = {
  img: string,
  title: string,
  link: string,
}

const NewsHeadline: FC<NewsHeadlineProps> = ({ img, title, link }) => {
  return (
    <li className="news-headline">
      <img src={img} alt="image" className="news-headline__img"/>
      <a href={link} className="news-headline__title">{title}</a>
    </li>
  );
}

export default NewsHeadline;