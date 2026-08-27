const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma nova ferramenta de Inteligência Artificial capaz de responder dúvidas, gerar textos e resolver tarefas complexas em segundos. Qual é sua primeira atitude?",
        alternativas: [
            {
                texto: "Exploro a ferramenta imediatamente para entender como ela pode facilitar minha rotina de estudos e trabalho.",
                afirmacao: "Demonstrou curiosidade inicial e abertura para integrar novas tecnologias ao seu cotidiano."
            },
            {
                texto: "Sinto receio sobre como essas automações podem impactar empregos e a privacidade de dados.",
                afirmacao: "Manteve um olhar crítico e cauteloso quanto aos impactos sociais e éticos da tecnologia."
            }
        ]
    },
    {
        enunciado: "Sua escola ou empresa propõe um projeto importante sobre inovação. Como você decide utilizar a IA na preparação?",
        alternativas: [
            {
                texto: "Uso a IA como um assistente de brainstorming para gerar ideias, mas reviso e escrevo o conteúdo final por conta própria.",
                afirmacao: "Adotou a IA de forma colaborativa, preservando seu pensamento crítico e autoria."
            },
            {
                texto: "Prefiro realizar toda a pesquisa em fontes tradicionais, sem utilizar geradores automáticos de texto.",
                afirmacao: "Valorizou métodos convencionais de pesquisa e o desenvolvimento 100% autoral do conhecimento."
            }
        ]
    },
    {
        enunciado: "Chegou o momento de criar os elementos visuais da sua apresentação. Qual estratégia você escolhe?",
        alternativas: [
            {
                texto: "Utilizo um gerador de imagens por IA para criar ilustrações personalizadas em poucos minutos.",
                afirmacao: "Aproveitou o potencial das ferramentas gerativas para otimizar o tempo e a produção visual."
            },
            {
                texto: "Crio os visuais manualmente ou utilizando softwares de edição tradicionais para ter controle total do design.",
                afirmacao: "Priorizou o processo criativo artesanal e o domínio de ferramentas de design."
            }
        ]
    },
    {
        enunciado: "Em um debate sobre direitos autorais e artes geradas por IA, qual posicionamento mais se alinha ao seu pensamento?",
        alternativas: [
            {
                texto: "Defendo que a IA é apenas uma nova ferramenta artística, assim como a fotografia foi no passado.",
                afirmacao: "Enxerga a tecnologia como uma evolução natural dos instrumentos de expressão humana."
            },
            {
                texto: "Acredito que as artes de IA devem ter regulamentação rígida para proteger o trabalho dos artistas humanos.",
                afirmacao: "Defende a proteção do trabalho autoral humano frente ao avanço dos algoritmos."
            }
        ]
    },
    {
        enunciado: "Olhando para os próximos anos, como você enxerga a relação entre humanos e IA?",
        alternativas: [
            {
                texto: "Acredito na coexistência: a IA cuidará de tarefas repetitivas enquanto os humanos focam em empatia e criatividade.",
                afirmacao: "Projecta um futuro de cooperação onde a IA potencializa as capacidades humanas regionais e globais."
            },
            {
                texto: "Acho necessário desacelerar o desenvolvimento até entendermos completamente as consequências de longo prazo.",
                afirmacao: "Aposta na prudência e no estabelecimento de limites éticos claros antes da expansão desmedida."
            }
        ]
    }
]; // O fechamento da lista foi adicionado aqui

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2026, seu perfil sobre IA é...";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaResultado.classList.add("mostrar");
}

mostraPergunta();