import { useEffect, useState } from "react";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export function Ordenador() {
  const [aberto, setAberto] = useState(false);

  // useEffect();

  return (
    <button
      className={styles.ordenador}
      onClick={() => {
        setAberto(!aberto);
      }}
      onBlur={() => {
        setAberto(false);
      }}
    >
      <span>Ordenar Por</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto
        })}
      >
        {opcoes.map((opcao) => (
          <div key={opcao.value} className={styles.ordenador__option}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
