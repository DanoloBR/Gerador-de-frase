import SecaoAula from "./componentes/SecaoAula.jsx";
import IndicadorStatus from "./componentes/IndicadorStatus.jsx";
import GeradorFrases from "./componentes/GeradorFrases.jsx";
import { introducao, secoes } from "./dados/conteudoAula.js";
import "./estilos/aula.css";

const demonstracoes = {
  status: <IndicadorStatus />,
  frases: <GeradorFrases />,
};

function Aplicativo() {
  return (
    <main className="aula-pagina">
      <header className="aula-topo">
        <span className="aula-topo__etiqueta">{introducao.etiqueta}</span>
        <h1>{introducao.titulo}</h1>
        <p>{introducao.subtitulo}</p>
      </header>

      {secoes.map(({ demonstracao, ...secao }) => (
        <SecaoAula key={secao.id} {...secao}>
          {demonstracao ? demonstracoes[demonstracao] : null}
        </SecaoAula>
      ))}
    </main>
  );
}

export default Aplicativo;