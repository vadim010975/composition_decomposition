import { FC } from "react";

/**
 * Компонент отрисовывает строку в секции Посещаемое
 */

type VisitedSectionStringProps = {
  title: string,
  text: string,
}

const VisitedSectionString: FC<VisitedSectionStringProps> = ({ title, text }) => {
  return (
    <li className="visited__string">
      <span className="visited__string_title">{title + " - "}</span>
      <span className="visited__string_text">{text}</span>
    </li>
  );
}

export default VisitedSectionString;