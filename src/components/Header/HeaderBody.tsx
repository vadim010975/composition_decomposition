import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе боди хедера
 */

const HeaderBody: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="header__body">
      {children}
    </div>
  );
}

export default HeaderBody;