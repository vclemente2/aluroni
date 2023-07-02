import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import stylesTema from "../../styles/Tema.module.scss";

export function PaginaPadrao() {
  return (
    <>
      <Header />
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}
