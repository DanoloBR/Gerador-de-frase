export default function SecaoAula({
  numero,
  titulo,
  paragrafos = [],
  cartoes = [],
  fluxo = [],
  codigo,
  children,
}) {
  return (
    <section className="aula-secao">
      <header className="aula-secao__cabecalho">
        <span className="aula-secao__numero">{numero}</span>
        <h2>{titulo}</h2>
      </header>

      {paragrafos.map((texto) => (
        <p key={texto} className="aula-secao__texto">
          {texto}
        </p>
      ))}

      {fluxo.length > 0 && (
        <ol className="aula-fluxo">
          {fluxo.map((etapa) => (
            <li key={etapa.rotulo} className="aula-fluxo__etapa">
              <strong>{etapa.rotulo}</strong>
              <span>{etapa.texto}</span>
            </li>
          ))}
        </ol>
      )}

      {cartoes.length > 0 && (
        <div className="aula-cartoes">
          {cartoes.map((cartao) => (
            <article key={cartao.titulo} className="aula-cartao">
              <h3>{cartao.titulo}</h3>
              <p>{cartao.texto}</p>
            </article>
          ))}
        </div>
      )}

      {codigo && (
        <pre className="aula-codigo">
          <code>{codigo}</code>
        </pre>
      )}

      {children && <div className="aula-demonstracao">{children}</div>}
    </section>
  );
}