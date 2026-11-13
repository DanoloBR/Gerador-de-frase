import { useState } from "react";

const SITUACOES = {
  Disponível: { cor: "#7ee0a8", proximo: "Ocupado" },
  Ocupado: { cor: "#f38ba8", proximo: "Ausente" },
  Ausente: { cor: "#f9e2af", proximo: "Disponível" },
};

export default function IndicadorStatus() {
  const [status, setStatus] = useState("Disponível");
  const { cor, proximo } = SITUACOES[status];

  return (
    <div className="demo-cartao">
      <div className="orbe-status" style={{ "--cor-status": cor }} />
      <p>
        Status atual: <strong>{status}</strong>
      </p>
      <button
        type="button"
        className="demo-botao"
        onClick={() => setStatus(proximo)}
      >
        Mudar status
      </button>
    </div>
  );
}