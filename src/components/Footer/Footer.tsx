import { PropsWithChildren, FC } from "react";

/**
 * Компонент формирует в себе футер
 */

const Footer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

export default Footer;