const perguntas = [
  {
    pergunta: "Qual é a linguagem de programação predominante no desenvolvimento web?",
    respostas: [
      "Java",
      "Python",
      "JavaScript",
    ],
    correta: 2,
  },
  {
    pergunta: "O que significa DOM em JavaScript?",
    respostas: [
      "Document Object Model", "Data Object Model", "Dynamic Output Management",
    ],
    correta: 0,
  },
  {
    pergunta: "Como declarar uma variável em JavaScript?",
    respostas: [
      "var x;", "let x;", "const x;",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do método 'querySelector'?",
    respostas: [
      "Selecionar um elemento pelo ID", "Selecionar um elemento pelo nome da classe", "Selecionar um elemento pelo seletor CSS",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é o AJAX em JavaScript?",
    respostas: [
      "Uma linguagem de programação", "Uma técnica de atualização assíncrona de páginas web", "Um framework de desenvolvimento web",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Networking",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Não há diferença", " '===' compara também o tipo de dado", " '==' compara também o tipo de dado",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é o evento 'click' em JavaScript?",
    respostas: [
      "Um tipo de dado", "Uma função nativa do JavaScript", "Um evento acionado pelo clique do mouse",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é o 'callback' em JavaScript?",
    respostas: [
      "Uma função passada como argumento para outra função", "Um tipo de erro", "Um método de loop",
    ],
    correta: 0,
  },
  {
    pergunta: "Como se faz um loop 'for' em JavaScript?",
    respostas: [
      "for (x = 0; x < 10; x++)", "for (x = 10; x > 0; x--)", "for (x = 0; x <= 10; x++)",
    ],
    correta: 2,
  },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
