# Board Games Populares

## Introdução

Os jogos de tabuleiro estão se tornando cada vez mais populares como hobby em todo o mundo. Com uma comunidade crescente e engajada, os jogos de tabuleiro oferecem uma ampla variedade de experiências, desde estratégia e construção até narrativa e cooperação. Este projeto visa fornecer uma plataforma simples e eficaz para explorar alguns dos jogos de tabuleiro mais populares globalmente.

## Descrição do Projeto

Este projeto consiste em uma página web que permite aos usuários pesquisar por jogos de tabuleiro. Os jogos são consultados com base em informações armazenadas em uma base de dados JavaScript, incluindo o nome, mecânicas e tags associadas. A página oferece uma interface de pesquisa onde você pode digitar termos e visualizar os resultados que correspondem aos critérios fornecidos.

## Funcionalidades

- **Pesquisa de Jogos**: Você pode digitar um termo na barra de pesquisa para procurar jogos pelo nome, mecânicas ou palavras-chaves.
- **Exibição de Resultados**: Os resultados da pesquisa são exibidos em uma grade responsiva, com informações detalhadas sobre cada jogo.

## Estrutura do Projeto

### Arquivos e Pastas

- `index.html`: Página principal com a interface de pesquisa e exibição de resultados.
- `style.css`: Folha de estilos para a página, incluindo layout e aparência.
- `dados.js`: Contém a base de dados com informações sobre os jogos.
- `app.js`: Contém a lógica de pesquisa e manipulação de dados para exibir resultados.
- `background1.png`: É a imagem de fundo utilizada

### Base de Dados (dados.js)

A base de dados é uma lista de objetos JavaScript onde cada objeto representa um jogo de tabuleiro. Cada jogo possui os seguintes atributos:

- `nome`: Nome do jogo.
- `editora`: Editora responsável pelo jogo.
- `descricao`: Descrição do jogo.
- `numeroJogadores`: Número mínimo e máximo de jogadores.
- `idadeRecomendada`: Idade recomendada para o jogo.
- `tempoMedio`: Tempo médio de jogo.
- `mecanicas`: Mecânicas principais do jogo.
- `complexidade`: Complexidade do jogo.
- `avaliacao`: Avaliação geral do jogo.
- `tags`: Tags associadas ao jogo.

### Pesquisa (app.js)

Este arquivo contém a lógica para a pesquisa e exibição dos resultados. Veja a seguir uma descrição detalhada das funções principais:

A função `primeiraLetraMaiuscula()` capitaliza a primeira letra de um texto.

E a função `pesquisar()` realiza a pesquisa com base no valor inserido pelo usuário e atualiza a exibição dos resultados.

1. Obtém o valor do campo de pesquisa e o converte para minúsculas.
3. Filtra os dados com base no campo de pesquisa.
4. Exibe os resultados em uma grade com informações detalhadas sobre cada jogo.

### Estilos (style.css)

- **Layout dos Resultados**: Os resultados são exibidos em uma grade de 3 colunas com um layout responsivo.

## Como Usar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite um termo na barra de pesquisa para encontrar jogos que correspondem ao critério.
3. Visualize os resultados na grade abaixo da barra de pesquisa.


## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: isabelammf@gmail.com
