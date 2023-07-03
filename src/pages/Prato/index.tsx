import styles from "./Prato.module.scss";
import { useNavigate, useParams } from "react-router-dom";

import cardapio from "../../data/cardapio.json";
import { NotFound } from "../NotFound";
import { TagsPrato } from "../../components/TagsPrato";
import { PaginaPadrao } from "../PaginaPadrao";

export function Prato() {
  const { id } = useParams();
  const prato = cardapio.find((prato) => prato.id === Number(id));

  const navigate = useNavigate();

  if (!prato) return <NotFound />;

  return (
    <PaginaPadrao>
      <button onClick={() => navigate(-1)} className={styles.voltar}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <TagsPrato prato={prato} />
        </div>
      </section>
    </PaginaPadrao>
  );
}
