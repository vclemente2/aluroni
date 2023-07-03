import styles from "./Item.module.scss";
import { Prato } from "../../../../types/Prato";
import { TagsPrato } from "../../../../components/TagsPrato";
import { useNavigate } from "react-router-dom";

export function Item(props: Prato) {
  const { title, description, photo, id } = props;
  const navigate = useNavigate();
  return (
    <div
      className={styles.item}
      onClick={() => {
        navigate(`/prato/${id}`);
      }}
    >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title}></img>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato prato={props} />
      </div>
    </div>
  );
}
