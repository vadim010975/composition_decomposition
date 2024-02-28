import { FC } from "react";

/**
 * Компонент отрисовывает строку в секции Погода
 */

type WeatherProps = {
  img: string,
  temperatureNow: string,
  temperatureMorning: string,
  temperatureDay: string,
}

const Weather: FC<WeatherProps> = ({ img, temperatureNow, temperatureMorning, temperatureDay }) => {
  return (
    <li className="weather">
      <img src={img} className="weather__img" />
      <div className="weather__temperature-now">{temperatureNow}</div>
      <div className="weather__temperature-wrapper">
        <div className="weather__temperature-morning">{temperatureMorning}</div>
        <div className="weather__temperature-day">{temperatureDay}</div>
      </div>
    </li>
  );
}

export default Weather;