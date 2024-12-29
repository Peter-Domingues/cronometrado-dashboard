import { FC, ReactNode, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./SideMenu.module.css";

type Props = {
  children: ReactNode;
};

const SideMenu: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {!isOpen && (
        <div className={styles.iconButton} onClick={toggleMenu}>
          <FiMenu size={24} />
        </div>
      )}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.iconButtonClose} onClick={toggleMenu}>
          <FiX size={24} />
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.mainContent} ${isOpen ? styles.shrink : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default SideMenu;
