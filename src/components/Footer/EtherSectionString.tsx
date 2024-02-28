import { FC } from "react";

/**
 * Компонент отрисовывает строку в секции Эфир
 */

type EtherSectionStringProps = {
  title: string,
  text: string,
}

const EtherSectionString: FC<EtherSectionStringProps> = ({ title, text }) => {
  return (
    <li className="tv-program__string">
      <img src="" alt="image" className="ether__string_icon" />
      <span className="tv-program__string_title">{title}</span>
      <span className="tv-program__string_text">{text}</span>
    </li>
  );
}

export default EtherSectionString;