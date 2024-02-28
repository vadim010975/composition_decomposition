import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе хедер
 */

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="header">
      {children}
    </header>
  );
}

export default Header;