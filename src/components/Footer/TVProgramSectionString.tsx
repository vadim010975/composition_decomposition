import { FC } from "react";

/**
 * Компонент отрисовывает строку в секции ТВ программа
 */

type TVProgramSectionStringProps = {
  time: string,
  title: string,
  text: string,
}

const TVProgramSectionString: FC<TVProgramSectionStringProps> = ({ time, title, text }) => {
    return (
    <li className="tv-program__string">
      <span className="tv-program__string_time">{time}</span>
      <span className="tv-program__string_title">{title}</span>
      <span className="tv-program__string_text">{text}</span>
    </li>
  );
}

export default TVProgramSectionString;