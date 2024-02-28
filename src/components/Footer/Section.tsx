import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе секцию футера, отрисовывает ее заголовок и привязывает ссылку
 */

type button = {
  link: string,
  img?: string,
  title?: string,
}

export type SectionProps = {
  link: string,
  title: string,
  button?: button,
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, link, title, button }) => {
  return (
    <section className="footer__section">
      <div className="footer__section_title_wrapper">
        <a href={link} className="footer__section_title">{title}</a>
        {button && <a href={button.link} className="footer__section_btn">
          <img src={button.img} alt="image" />
          <p>{button.title}</p>
        </a>}
      </div>
      {children}
    </section>
  );
}
