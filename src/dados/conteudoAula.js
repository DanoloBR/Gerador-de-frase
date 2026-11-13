export const introducao = {
  etiqueta: "Aula de React",
  titulo: "Estados e consumo de API",
  subtitulo:
    "Do estado local ao consumo de uma API externa, com carregamento e tratamento de erro.",
};

export const secoes = [
  {
    id: "estados",
    numero: "01",
    titulo: "Importância no uso de estados",
    paragrafos: [
      "Em React, o estado permite que os componentes mantenham e atualizem dados ao longo do tempo, reagindo a cliques, digitação e outras mudanças. Assim, a interface fica sempre sincronizada com os valores atuais.",
      "Quando o estado muda, o React renderiza o componente e seus filhos automaticamente, sem atualização manual da tela. Clique no botão abaixo para ver isso acontecer.",
    ],
    cartoes: [
      {
        titulo: "Reatividade",
        texto: "A tela é consequência do estado: mudou o dado, mudou a interface.",
      },
      {
        titulo: "Modularidade",
        texto: "Cada componente pode ter o seu estado, o que facilita testar, manter e reutilizar.",
      },
      {
        titulo: "Fluxo unidirecional",
        texto: "Os dados descem do pai para os filhos por props, o que deixa tudo mais previsível.",
      },
      {
        titulo: "Estado global",
        texto: "Em apps maiores, Redux ou Context API compartilham dados entre componentes distantes.",
      },
    ],
    demonstracao: "status",
  },
  {
    id: "api",
    numero: "02",
    titulo: "Introdução a API",
    paragrafos: [
      "Uma API (Application Programming Interface) é um conjunto de definições e protocolos que permite que softwares conversem entre si.",
      "Pense em um restaurante: você faz o pedido ao garçom, ele leva à cozinha e volta com a resposta. Se faltar ingrediente, o garçom também volta, mas com um erro em vez da pizza esperada.",
    ],
    fluxo: [
      { rotulo: "Você", texto: "Faz o pedido (requisição)" },
      { rotulo: "Garçom", texto: "A API leva e traz as informações" },
      { rotulo: "Cozinha", texto: "O servidor processa o pedido" },
      { rotulo: "Resposta", texto: "Dados esperados ou um erro" },
    ],
  },
  {
    id: "autocuidado",
    numero: "03",
    titulo: "Autoconhecimento e autocuidado",
    paragrafos: [
      "O conceito de API também serve de metáfora para o “eu” como um sistema complexo, cheio de funcionalidades, dados e processos. Pensamentos e emoções são dados valiosos, e perceber seus padrões ajuda a entender as entradas e saídas das suas interações.",
      "Autoconhecimento e autocuidado são interdependentes: ao se entender melhor, você aplica práticas de cuidado mais eficazes e integra melhor todos os aspectos da vida.",
    ],
    cartoes: [
      {
        titulo: "Endpoints ↔ gatilhos e paixões",
        texto: "Assim como um dev precisa conhecer os endpoints, vale conhecer o que te move e o que te afeta.",
      },
      {
        titulo: "Documentação ↔ diário e terapia",
        texto: "Registrar experiências e sentimentos torna os padrões visíveis.",
      },
      {
        titulo: "Limites de requisição ↔ dizer “não”",
        texto: "Uma API tem limites para não sobrecarregar. Você também precisa deles para evitar o esgotamento.",
      },
      {
        titulo: "Monitoramento ↔ check-ins",
        texto: "Avalie com regularidade como está a saúde física e mental e ajuste o que for preciso.",
      },
    ],
  },
  {
    id: "pratica",
    numero: "04",
    titulo: "Aplicando na prática",
    paragrafos: [
      "Para consumir a API de frases usamos o axios, uma biblioteca HTTP baseada em promessas. Depois de instalar, criamos dois estados de apoio, carregando e erro, e uma função assíncrona com try...catch...finally.",
      "O finally garante que o carregamento sempre termine, com sucesso ou erro. O componente então escolhe o que mostrar: carregando, erro ou a frase.",
    ],
    codigo: "npm install axios",
    demonstracao: "frases",
  },
];