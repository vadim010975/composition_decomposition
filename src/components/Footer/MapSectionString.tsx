import { FC } from "react";

/**
 * Компонент отрисовывает строку в секции Карта
 */

const MapSectionString: FC<{title: string}> = ({ title }) => {
  return (
    <li className="map__string">{title}</li>
  );
}

export default MapSectionString;