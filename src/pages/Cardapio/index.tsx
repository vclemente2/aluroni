import { Button } from "../../components/Button";
import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export function Cardapio() {
  return (
    <>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A Casa do Código e da Massa</div>
      </header>
      <Button>Teste</Button>
    </>
  );
}
