let dados = [
    {
        nome: "Catan",
        editora: "Kosmos",
        descricao: "Um clássico jogo de estratégia onde você constrói e desenvolve sua civilização enquanto compete por recursos.",
        numeroJogadores: { min: 3, max: 4 },
        idadeRecomendada: 10,
        tempoMedio: "60-90 minutos",
        mecanicas: ["construção", "negociação", "coleta de recursos"],
        complexidade: "média",
        avaliacao: 9,
        tags: ["estratégia", "negociação", "recursos", "família", "jogo de tabuleiro"]
    },
    {
        nome: "Ticket to Ride",
        editora: "Days of Wonder",
        descricao: "Construa rotas de trem através dos Estados Unidos e complete cartões de destino para ganhar pontos.",
        numeroJogadores: { min: 2, max: 5 },
        idadeRecomendada: 8,
        tempoMedio: "30-60 minutos",
        mecanicas: ["construção de rotas", "coleta de cartas"],
        complexidade: "baixa",
        avaliacao: 8.8,
        tags: ["estratégia", "trens", "família", "jogo de tabuleiro"]
    },
    {
        nome: "Carcassonne",
        editora: "Z-Man Games",
        descricao: "Coloque peças de terreno e coloque seus seguidores para ganhar controle de cidades, estradas e campos.",
        numeroJogadores: { min: 2, max: 5 },
        idadeRecomendada: 7,
        tempoMedio: "35-45 minutos",
        mecanicas: ["colocação de peças", "controle de área"],
        complexidade: "baixa",
        avaliacao: 8.5,
        tags: ["estratégia", "colocação de peças", "controle de área", "família", "jogo de tabuleiro"]
    },
    {
        nome: "Pandemic",
        editora: "Z-Man Games",
        descricao: "Trabalhe em equipe para erradicar doenças e salvar o mundo antes que seja tarde demais.",
        numeroJogadores: { min: 2, max: 4 },
        idadeRecomendada: 8,
        tempoMedio: "45-60 minutos",
        mecanicas: ["cooperativo", "gestão de recursos"],
        complexidade: "média",
        avaliacao: 9,
        tags: ["cooperativo", "estratégia", "temático", "jogo de tabuleiro"]
    },
    {
        nome: "Codenames",
        editora: "Czech Games Edition",
        descricao: "Dê pistas para sua equipe adivinhar palavras codificadas antes da equipe adversária.",
        numeroJogadores: { min: 2, max: 8 },
        idadeRecomendada: 14,
        tempoMedio: "15-30 minutos",
        mecanicas: ["dedução", "palavras"],
        complexidade: "baixa",
        avaliacao: 8.6,
        tags: ["party game", "dedução", "comunicação", "estratégia", "jogo de tabuleiro"]
    },
    {
        nome: "Love Letter",
        editora: "Z-Man Games",
        descricao: "Use dedução e estratégia para entregar sua carta à princesa e ganhar seu favor.",
        numeroJogadores: { min: 2, max: 4 },
        idadeRecomendada: 10,
        tempoMedio: "20 minutos",
        mecanicas: ["dedução", "cartas"],
        complexidade: "baixa",
        avaliacao: 8.5,
        tags: ["estratégia", "dedução", "jogo de cartas", "rápido", "jogo de tabuleiro"]
    },
    {
        nome: "Decrypto",
        editora: "IELLO",
        descricao: "Tente codificar e decifrar mensagens para vencer sua equipe adversária.",
        numeroJogadores: { min: 3, max: 8 },
        idadeRecomendada: 12,
        tempoMedio: "30 minutos",
        mecanicas: ["dedução", "palavras"],
        complexidade: "baixa",
        avaliacao: 8.7,
        tags: ["dedução", "estratégia", "party game", "jogo de tabuleiro", "comunicação"]
    },
    {
        nome: "Root",
        editora: "Leader Games",
        descricao: "Controle uma facção diferente em uma luta pelo controle da floresta, cada uma com suas próprias estratégias e mecânicas.",
        numeroJogadores: { min: 2, max: 4 },
        idadeRecomendada: 10,
        tempoMedio: "60-90 minutos",
        mecanicas: ["controle de área", "gestão de mão", "assimétrico"],
        complexidade: "alta",
        avaliacao: 9,
        tags: ["estratégia", "controle de área", "fantasia", "jogo de tabuleiro"]
    },
    {
        nome: "Blood Rage",
        editora: "Cool Mini or Not",
        descricao: "Lidere uma facção viking em batalhas épicas e conquiste territórios para ganhar glória antes do Ragnarok.",
        numeroJogadores: { min: 2, max: 4 },
        idadeRecomendada: 14,
        tempoMedio: "60-90 minutos",
        mecanicas: ["conflito", "controle de área", "gestão de cartas"],
        complexidade: "alta",
        avaliacao: 8.9,
        tags: ["estratégia", "conflito", "mitologia", "jogo de tabuleiro"]
    },
    {
        nome: "Spirit Island",
        descricao: "Defenda sua ilha de invasores estrangeiros em um jogo cooperativo de estratégia com alta complexidade.",
        numeroJogadores: { min: 1, max: 4 },
        idadeRecomendada: 13,
        tempoMedio: "90-120 minutos",
        mecanicas: ["cooperativo", "controle de área", "estratégia"],
        complexidade: "alta",
        avaliacao: 9.2,
        tags: ["cooperativo", "estratégia", "temático", "jogo de tabuleiro", "alta complexidade"]
    },
    {
        nome: "Controle de Recursos - Explicação da mecânica",
        descricao: "Nesta mecânica, os jogadores precisam gerenciar recursos limitados, como dinheiro, materiais ou pontos. O objetivo é alocar esses recursos de forma estratégica para alcançar metas específicas, como construir estruturas, desenvolver habilidades ou cumprir objetivos. É comum em jogos de estratégia e economia.",
        tags: ["gestão de recursos", "economia", "estratégia", "alocação de recursos", "mecânicas"]
    },
    {
        nome: "Trilha - Explicação da mecânica",
        descricao: "Na mecânica de trilha, os jogadores movem suas peças ao longo de um caminho ou trilha no tabuleiro. À medida que avançam, eles podem encontrar eventos, desafios ou bônus. A trilha pode ter diferentes ramificações e obstáculos, exigindo que os jogadores tomem decisões estratégicas sobre como e quando se mover.",
        tags: ["movimentação", "caminho", "eventos", "estratégia", "mecânicas"]
    },
    {
        nome: "Construção de Deck - Explicação da mecânica",
        descricao: "A construção de deck é uma mecânica onde os jogadores montam e personalizam um baralho de cartas que será utilizado durante o jogo. Eles escolhem cartas que representam ações, habilidades ou recursos, e cada jogador tem um deck único. Durante o jogo, os jogadores usam seu deck para realizar ações, enfrentar adversários ou alcançar objetivos.",
        tags: ["cartas", "personalização", "estratégia", "baralho", "mecânicas"]
    },
    {
        nome: "Rolagem de Dados - Explicação da mecânica",
        descricao: "A rolagem de dados envolve lançar dados para determinar o resultado de ações ou eventos no jogo. Cada dado pode ter diferentes faces e valores, que introduzem um elemento de aleatoriedade. Os resultados dos dados podem influenciar o sucesso de uma ação, determinar eventos aleatórios ou afetar a dinâmica do jogo.",
        tags: ["sorte", "aleatoriedade", "resultados", "dados", "mecânicas"]
    },
    {
        nome: "Controle de Área - Explicação da mecânica",
        descricao: "Na mecânica de controle de área, os jogadores competem para dominar áreas específicas do tabuleiro. Eles colocam peças, marcadores ou controle sobre regiões para obter vantagens ou pontos. O objetivo é controlar o maior número de áreas ou pontos estratégicos, enquanto impede que os adversários façam o mesmo.",
        tags: ["domínio", "território", "controle", "estratégia", "mecânicas"]
    }
];
