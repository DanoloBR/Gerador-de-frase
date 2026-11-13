import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const URL_API = "https://dummyjson.com/quotes/random";

export default function GeradorFrases() {
  const [frase, setFrase] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarFraseAleatoria = useCallback(async () => {
    try {
      setCarregando(true);
      setErro(null); // limpa o erro de uma tentativa anterior

      const resposta = await axios.get(URL_API);
      const dados = resposta.data;

      setFrase({
        conteudo: dados.quote ?? dados.content, // aceita os dois formatos
        autor: dados.author,
      });
    } catch (falha) {
      setErro("Erro ao buscar a frase");
      console.error("Erro ao buscar a frase:", falha);
    } finally {
      setCarregando(false); // sempre executa, com sucesso ou erro
    }
  }, []);

  // Busca a primeira frase quando o componente aparece
  useEffect(() => {
    buscarFraseAleatoria();
  }, [buscarFraseAleatoria]);

  let corpo = null;

  if (carregando) {
    corpo = <p className="frase-estado">Carregando...</p>;
  } else if (erro) {
    corpo = <p className="frase-estado frase-estado--erro">{erro}</p>;
  } else if (frase) {
    corpo = (
      <figure className="frase-citacao">
        <blockquote>“{frase.conteudo}”</blockquote>
        <figcaption>— {frase.autor}</figcaption>
      </figure>
    );
  }

  return (
    <div className="demo-cartao">
      <div className="frase-corpo">{corpo}</div>
      <button
        type="button"
        className="demo-botao"
        onClick={buscarFraseAleatoria}
        disabled={carregando}
      >
        {carregando ? "Buscando..." : "Nova frase"}
      </button>
    </div>
  );
}