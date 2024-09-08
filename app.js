// Função para capitalizar a primeira letra de um texto
function primeiraLetraMaiuscula(texto) {
    return `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`;
}

function pesquisar() {
    // Adiciona a classe 'pesquisa-ativa' ao body para mudar o estilo da página após a pesquisa
    document.body.classList.add('pesquisa-ativa');
    
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor dentro do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Inicializa uma variável vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let mecanicas = [];
    let tags = [];
    
    // Se o campo de pesquisa estiver vazio, exibe todos os resultados apenas os nomes dos jogos
    if (!campoPesquisa) {
        for (let dado of dados) {
            resultados += `
            <div class="item-resultado" id="all">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
            </div>
        `;
        }
    } else {
        // Se há um texto na pesquisa, filtra os dados
        for (let dado of dados) {
            nome = dado.nome.toLowerCase(); // Nome do jogo em minúsculas
            mecanicas = dado.mecanicas.map(i => i.toLowerCase()); // Mecânicas em minúsculas
            tags = dado.tags.map(i => i.toLowerCase()); // Tags em minúsculas

            // Verifica se o campo de pesquisa está presente no nome, nas mecânicas ou nas tags
            if (
                nome.includes(campoPesquisa) || 
                mecanicas.some(mecanica => mecanica.includes(campoPesquisa)) || 
                tags.some(tag => tag.includes(campoPesquisa))
            ) {
                // Cria um novo elemento para o resultado se houver correspondência
                resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.nome}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p><strong>Editora:</strong> ${dado.editora}</p>
                        <p><strong>Número de Jogadores:</strong> ${dado.numeroJogadores.min} a ${dado.numeroJogadores.max}</p>
                        <p><strong>Idade Recomendada:</strong> ${dado.idadeRecomendada}</p>
                        <p><strong>Tempo Médio:</strong> ${dado.tempoMedio}</p>
                        <p><strong>Mecânicas:</strong> ${dado.mecanicas.map(mecanica => primeiraLetraMaiuscula(mecanica)).join(", ")}</p>
                        <p><strong>Complexidade:</strong> ${primeiraLetraMaiuscula(dado.complexidade)}</p>
                        <p><strong>Avaliação:</strong> ${dado.avaliacao}</p>
                    </div>
                `;
            }
        }
    }

    // Se não houver resultados, exibe uma mensagem informando que nada foi encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
