import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе асайд хедера
 */

const HeaderAside: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="header__aside">
      {children}
    </div>
  );
}

export default HeaderAside;