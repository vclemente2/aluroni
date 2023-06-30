import { useEffect, useState } from "react";
import { Item } from "./Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

interface ItensProps {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export function Itens({ busca, filtro, ordenador }: ItensProps) {
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string): boolean {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testaFiltro(id: number): boolean {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
