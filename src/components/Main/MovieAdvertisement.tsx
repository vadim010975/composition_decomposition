import { FC } from "react";

/**
 * Компонент отрисовывает афишу в мэйн
 */

const MovieAdvertisement: FC<{ img: string }> = ({ img }) => {
  return (
    <>
      <img src={img} alt="image" className="main__movie-advertisement" />
    </>
  );
}

export default MovieAdvertisement;