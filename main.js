const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia: um chat com Inteligência Artificial. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, ficou com receio do impacto da IA na rotina dos trabalhadores."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "De imediato, percebeu a IA como uma grande aliada para otimizar tarefas do dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a popularização da IA, uma professora pediu para a turma criar um trabalho sobre o uso da IA na sala de aula. Como você faz esse trabalho?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de IA para buscar informações e depois escreve com suas próprias palavras.",
                afirmacao: "Usou a inteligência artificial de forma ética e como apoio para suas pesquisas."
            },
            {
                texto: "Escreve o trabalho inteiramente com base em conversas com colegas e pesquisas em livros.",
                afirmacao: "Preferiu confiar em métodos tradicionais de pesquisa sem dependência direta de algoritmos."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o grupo precisava criar uma imagem explicativa. Como procedeu?",
        alternativas: [
            {
                texto: "Criou uma imagem utilizando um gerador de imagem por IA.",
                afirmacao: "Aproveitou as ferramentas gerativas para automatizar a criação visual rápida."
            },
            {
                texto: "Usou um software de edição tradicional para desenhar a imagem manualmente.",
                afirmacao: "Valorizou o processo criativo manual e o controle autoral dos artefatos visuais."
            }
        ]
    }
];

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