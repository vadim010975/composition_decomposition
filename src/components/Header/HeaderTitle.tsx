import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе заголовок хедера
 */

const HeaderTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="header__body_title">
      {children}
    </nav>
  );
}

export default HeaderTitle;