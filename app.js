// Função para capitalizar a primeira letra de um texto
function primeiraLetraMaiuscula(texto) {
    return `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`;
}

// Função para criar o HTML dos resultados
function criarResultadoHTML(dado) {
    return `
        <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            ${dado.editora ? `<p><strong>Editora:</strong> ${dado.editora}</p>` : ''}
            ${dado.numeroJogadores ? `<p><strong>Número de Jogadores:</strong> ${dado.numeroJogadores.min} a ${dado.numeroJogadores.max}</p>` : ''}
            ${dado.idadeRecomendada ? `<p><strong>Idade Recomendada:</strong> ${dado.idadeRecomendada}</p>` : ''}
            ${dado.tempoMedio ? `<p><strong>Tempo Médio:</strong> ${dado.tempoMedio}</p>` : ''}
            ${dado.mecanicas ? `<p><strong>Mecânicas:</strong> ${dado.mecanicas.map(primeiraLetraMaiuscula).join(", ")}</p>` : ''}
            ${dado.complexidade ? `<p><strong>Complexidade:</strong> ${primeiraLetraMaiuscula(dado.complexidade)}</p>` : ''}
            ${dado.avaliacao ? `<p><strong>Avaliação:</strong> ${dado.avaliacao}</p>` : ''}
        </div>
    `;
}

// Função para verificar se o texto de pesquisa está presente em um array
function presencaTexto(texto, pesquisa) {
    return texto.toLowerCase().includes(pesquisa.toLowerCase());
}

function pesquisar() {
    // Adiciona a classe 'pesquisa-ativa' ao body para mudar o estilo da página após a pesquisa
    document.body.classList.add('pesquisa-ativa');
    // Remove a classe 'pesquisa-ativa-p' do body
    document.body.classList.remove('pesquisa-ativa-p');

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor dentro do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa uma variável vazia para armazenar os resultados
    let resultados = "";

    // Se o campo de pesquisa estiver vazio, exibe todos os resultados apenas os nomes dos jogos
    if (!campoPesquisa) {
        // Cria um bloco HTML com o nome de cada item
        resultados = dados.map(dado => `<div class="item-resultado" id="all"><h2>${dado.nome}</h2></div>`).join('');
    } else {
        // Se há um texto na pesquisa, filtra os dados
        for (let dado of dados) {
            // Obtém o nome do dado
            let nome = dado.nome;
            // Concatena e transforma as tags em minúsculas, se existirem
            let tags = dado.tags ? dado.tags.join(' ').toLowerCase() : '';
            // Concatena e transforma as mecânicas em minúsculas, se existirem
            let mecanicas = dado.mecanicas ? dado.mecanicas.join(' ').toLowerCase() : '';

            // Verifica se o texto de pesquisa está presente no nome, nas tags ou nas mecânicas
            if (presencaTexto(nome, campoPesquisa) || presencaTexto(tags, campoPesquisa) || presencaTexto(mecanicas, campoPesquisa)) {
                // Adiciona o HTML gerado para o dado ao resultado
                resultados += criarResultadoHTML(dado);
            }
        }
    }

    // Se não houver resultados, exibe uma mensagem informando que nada foi encontrado
    if (!resultados) {
        // Adiciona a classe 'pesquisa-ativa-p' ao body para exibir a mensagem de nenhuma correspondência
        document.body.classList.add('pesquisa-ativa-p');
        // Define o resultado como uma mensagem de "Nada foi encontrado"
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
