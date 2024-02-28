import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе нижнюю часть хедера
 */

const HeaderFooter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="header__body_footer">
      {children}
    </div>
  );
}

export default HeaderFooter;