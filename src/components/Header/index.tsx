import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>A Casa do Código e da Massa</div>
    </header>
  );
}
