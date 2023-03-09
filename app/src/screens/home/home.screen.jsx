import "./home.screen.style.css";
import { Header } from "../header/header";
import { useGlobalUser } from "../../context/user/useGlobalUser";
import { useNavigate } from "react-router-dom";

export function HomeScreen() {
  const [user] = useGlobalUser();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="home-box">
        <div className="home-dados">
          <img src={user?.foto} alt="Foto Perfil" />
          <div className="home-infos">
            <p>{user?.nome}</p>
            <p>{user?.email}</p>
            <p>{user?.telefone}</p>
          </div>
        </div>
        <button className="button-header" onClick={() => navigate("/alter")}>
          Alterar usuario
        </button>
      </div>
    </>
  );
}
