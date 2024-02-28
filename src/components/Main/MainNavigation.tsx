import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе навигацию мэйн
 */

const MainNavigation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="main__navication">
      {children}
    </nav>
  );
}

export default MainNavigation;