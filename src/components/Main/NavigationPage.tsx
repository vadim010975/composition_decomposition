import { FC } from "react";

/**
 * Компонент отрисовывает элемент навигации и привязывет ссылку
 */

type NavigationPageProps = {
  pageName: string,
  link: string,
}

const NavigationPage: FC<NavigationPageProps> = ({ pageName, link }) => {
  return (
    <>
      <a href={link} className="work-on-mistakes__title">{pageName}</a>
    </>
  );
}

export default NavigationPage;