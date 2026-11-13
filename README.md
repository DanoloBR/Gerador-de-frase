# Gerador de Frase

Aplicação em React que apresenta o conteúdo da aula sobre **estados** e **consumo de API**, com duas demonstrações interativas:

- **Indicador de status:** um botão alterna entre *Disponível*, *Ocupado* e *Ausente*, e a interface muda conforme o estado.
- **Gerador de frases:** busca uma frase aleatória em uma API externa, com tratamento de carregamento e de erro.

## O que a aula aborda

1. Importância no uso de estados
2. Introdução a API
3. Autoconhecimento e autocuidado (analogia com APIs)
4. Aplicando na prática: axios, estados `carregando` e `erro`, `try...catch...finally` e renderização conforme o estado

## Tecnologias

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [axios](https://axios-http.com)

## Pré-requisitos

- [Node.js](https://nodejs.org) 20.19 ou superior (versão LTS)

## Como executar

```bash
git clone https://github.com/DanoloBR/Gerador-de-frase.git
cd Gerador-de-frase
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão final na pasta `dist/` |
| `npm run preview` | Testa a versão final localmente |

## Estrutura

```
src/
├── main.jsx                  ponto de entrada
├── index.css                 estilos globais
├── Aplicativo.jsx            compõe a página
├── dados/
│   └── conteudoAula.js       textos da aula
├── estilos/
│   └── aula.css              estilos da página
└── componentes/
    ├── SecaoAula.jsx         exibe uma seção do conteúdo
    ├── IndicadorStatus.jsx   demonstração de estado
    └── GeradorFrases.jsx     demonstração de consumo de API
```

## Como o gerador de frases funciona

O componente `GeradorFrases` usa três estados: `frase`, `carregando` e `erro`. A função `buscarFraseAleatoria` faz a requisição com `axios` dentro de um `try...catch...finally`:

- **try:** ativa `carregando` e busca a frase.
- **catch:** guarda uma mensagem de erro em `erro`.
- **finally:** desativa `carregando`, com sucesso ou erro.

A interface mostra "Carregando...", a mensagem de erro ou a frase, conforme o estado.

## API utilizada

`https://dummyjson.com/quotes/random`

A apostila original usa a API `quotable`, que está fora do ar. O DummyJSON retorna o mesmo tipo de dado (frase e autor), então a estrutura da aula continua válida. Para trocar de API, altere a constante `URL_API` em `GeradorFrases.jsx`.
