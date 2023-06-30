import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";

type IOpcao = (typeof filtros)[0];

export function Filtros() {
  function selecionarFiltro(opcao: IOpcao) {}

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          key={opcao.id}
          className={styles.filtros__filtro}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
