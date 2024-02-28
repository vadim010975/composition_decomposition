import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе мэйн
 */

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Main;