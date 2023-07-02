import styles from "./NotFound.module.scss";
import stylesTema from "../../styles/Tema.module.scss";
import NotFountImg from "../../assets/images/not_found.svg";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTema.container]: true
      })}
    >
      <div className={styles.voltar}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {"< Voltar"}
        </button>
      </div>
      <img src={NotFountImg} alt="Não encontrado" />
    </div>
  );
}
