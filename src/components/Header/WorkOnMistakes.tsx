import { FC } from "react";

/**
 * Компонент отрисовывает элемент работа над ошибками
 */

type WorkOnMistakesProps = {
  img: string,
  title: string,
  link: string,
  finalText: string,
}

const WorkOnMistakes: FC<WorkOnMistakesProps> = ({ img, link, title, finalText }) => {
  return (
    <div className="work-on-mistakes">
      <img src={img} alt="image" className="work-on-mistakes__img" />
      <a href={link} className="work-on-mistakes__title">{title}</a>
      <p className="work-on-mistakes__final">{finalText}</p>
    </div>
  );
}

export default WorkOnMistakes;