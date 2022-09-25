import illustration from "../../assets/illustration.svg";
import "./LandPage.css";

function LandPage({setIsLoggedIn}) {

    function start() {
        setIsLoggedIn(true)
    }  

  return (
    <div className="container">
      <div className="landPage flex f-column f-justify-center">
        <section className="flex f-column f-align-start gap-1">
          <h1 className="title">
            <span>Nu</span> Kenzie
          </h1>
          <p className="slogan">Centralize o controle das suas finanças</p>
          <p className="slogan__headline">de forma rápida e segura</p>
          <button className="btn btn__main" type="button" onClick={start}>Iniciar</button>
        </section>
        <figure className="flex f-justify-center f-align-center">
          <img src={illustration} alt="ilustração Nu Kenzie" className="illustration"/>
        </figure>
      </div>
    </div>
  );
}

export default LandPage;
