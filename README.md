# Board Games 

## Introdução

Os jogos de tabuleiro estão se tornando cada vez mais populares como hobby em todo o mundo. Com uma comunidade crescente e engajada, os jogos de tabuleiro oferecem uma ampla variedade de experiências, desde estratégia e construção até narrativa e cooperação. Este projeto visa fornecer uma plataforma simples e eficaz para explorar alguns dos jogos de tabuleiro mais populares globalmente.

## Descrição do Projeto

Este projeto consiste em uma página web que permite aos usuários pesquisar informações sobre jogos de tabuleiro. Os jogos são consultados com base em informações armazenadas em uma base de dados JavaScript. A página oferece uma interface de pesquisa onde você pode digitar termos e visualizar os resultados que correspondem aos critérios fornecidos.

## Funcionalidades

- **Pesquisa de Jogos**: Você pode digitar um termo na barra de pesquisa para procurar jogos pelo nome, mecânicas ou palavras-chaves.
- **Exibição de Detalhes dos Jogos ou Explicação de Mecânicas:** Mostra detalhes sobre cada jogo (incluindo nome, descrição, editora, número de jogadores, idade recomendada, tempo médio, mecânicas, complexidade e avaliação) e/ou uma descrição explicativa de como funciona as mecânicas de jogos.
- **Mensagens de Resultado:** Informa ao usuário se nenhum resultado foi encontrado.

## Estrutura do Projeto

### Arquivos e Pastas

- `index.html`: Página principal com a interface de pesquisa e exibição de resultados.
- `style.css`: Folha de estilos para a página, incluindo layout e aparência.
- `dados.js`: Contém a base de dados com informações sobre os jogos.
- `app.js`: Contém a lógica de pesquisa e manipulação de dados para exibir resultados.
- `1.png` e `2.png`: São as imagens de fundo utilizadas.

### Base de Dados (dados.js)

A base de dados é uma lista de objetos JavaScript onde cada objeto representa um jogo de tabuleiro. Cada jogo possui os seguintes atributos:

- `nome`: Nome do jogo ou Tipo de Mecânica.
- `editora`: Editora responsável pelo jogo.
- `descricao`: Descrição do jogo ou a Explicação da Mecânica.
- `numeroJogadores`: Número mínimo e máximo de jogadores.
- `idadeRecomendada`: Idade recomendada para o jogo.
- `tempoMedio`: Tempo médio de jogo.
- `mecanicas`: Mecânicas principais do jogo.
- `complexidade`: Complexidade do jogo.
- `avaliacao`: Avaliação geral do jogo.
- `tags`: Tags associadas ao jogo.

### Pesquisa (app.js)

Este arquivo contém a lógica para a pesquisa e exibição dos resultados. Veja a seguir uma descrição detalhada das funções principais:

1. **`primeiraLetraMaiuscula(texto)`**
   - Capitaliza a primeira letra de uma string e retorna a string modificada.

2. **`criarResultadoHTML(dado)`**
   - Gera o HTML para exibir as informações de um jogo. Inclui nome, descrição, editora, número de jogadores, idade recomendada, tempo médio, mecânicas, complexidade e avaliação.

3. **`presencaTexto(texto, pesquisa)`**
   - Verifica se um texto de pesquisa está presente em uma string, ignorando diferenças de maiúsculas e minúsculas.

4. **`pesquisar()`**
   - Obtém o valor do campo de pesquisa e filtra os dados dos jogos com base nesse valor. Atualiza a seção de resultados com os jogos que correspondem à pesquisa ou exibe uma mensagem de "Nada foi encontrado" se não houver correspondências.

### Estilos (style.css)

- **Layout de Resultados com Pesquisa Ativa**: Layout em grid com colunas e espaço entre itens.
- **Estilo no Modo de Impressão**: Alinha resultados em linha com cor de texto branca.
- **Imagem de Fundo ao Ativar Pesquisa**: Altera a imagem de fundo quando a pesquisa está ativa.

## Como Usar

1. Digite um termo na barra de pesquisa para encontrar jogos que correspondem ao critério.
2. Visualize os resultados na grade abaixo da barra de pesquisa.

## Tecnologias Utilizadas

- **HTML** para estrutura da página.
- **CSS** para estilização.
- **JavaScript** para interatividade e lógica de pesquisa.

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: isabelammf@gmail.com
