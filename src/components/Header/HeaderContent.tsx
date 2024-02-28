import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе центральную часть боди хедера
 */

const HeaderContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="header__body_content">
      {children}
    </ul>
  );
}

export default HeaderContent;