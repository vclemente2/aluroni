import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Logo Aluroni" />
    </footer>
  );
}
