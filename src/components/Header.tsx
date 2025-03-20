import styles from './Header.module.css'

import imgLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt="ToDo List" />
    </header>
  );
}
