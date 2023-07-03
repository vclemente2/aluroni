import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import stylesTema from "../../styles/Tema.module.scss";

interface PaginaPadraoProps {
  children?: JSX.Element[];
}

export function PaginaPadrao({ children }: PaginaPadraoProps) {
  return (
    <>
      <Header />
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
