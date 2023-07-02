import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import styles from "./Menu.module.scss";

export function Menu() {
  const rotas = [
    {
      label: "Inicio",
      to: "/"
    },
    {
      label: "Cardápio",
      to: "/cardapio"
    },
    {
      label: "Sobre",
      to: "/sobre"
    }
  ];
  return (
    <nav className={styles.menu}>
      <img src={Logo} alt="Logo da Aluroni" />
      <ul className={styles.menu__list}>
        {rotas.map((rota) => (
          <li key={rota.label} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
