## Descrição

Este repositório contém a "resposta" à um desafio proposto pela Linx Impulse, em 2019, como parte de seu processo seletivo. Trata-se de uma simples Landing Page que contém alguns produtos cujos dados são pegos dinamicamente através de uma requisição GET à uma API.

Você pode conferir o resultado final clicando [aqui](https://linx-impulse-desafio-ivo.netlify.app/)

### Formulários

Pelo fato de o desafio não expor o que fazer com os dados colocados pelo usuário nos formulários, decidi simplesmente capturá-los e mostrá-los no _console_.

### Explicação das Funções

As funções que fazem o website estático funcionar são bem simplórias. Com elas, é decidido quais/quantos produtos carregar com base no clique; a criação dos cartões de produtos, realizada com a resposta recebida pela API; a formatação do número recebido como "preço" em valor monetário através da função "numToReais" presente no arquivo _helpers.js_.
