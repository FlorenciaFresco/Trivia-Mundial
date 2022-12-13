const quizData = [
    {
        question: "1. ¿Cuándo tuvo lugar la primera Copa Mundial de Fútbol?",
        a: "1920",
        b: "1930",
        c: "1940",
        d: "1950",
        correct: "b",
    },
    {
        question: "2. ¿Quién es el máximo goleador de la historia de la Copa Mundial de Fútbol?",
        a: "Miroslav Klose",
        b: "Ronaldo Nazario",
        c: "Gerd Müller",
        d: "Pelé",
        correct: "a",
    },
    {
        question: "3. ¿Qué animal fue el escogido para ilustrar la mascota del Mundial de Rusia?",
        a: "Un perro",
        b: "Un gato",
        c: "Un lobo",
        d: "Un loro",
        correct: "c",
    },
    {
        question: "4. Hablando de mascotas, ¿cuál de estas mascotas no pertenece a la historia del Mundial?",
        a: "Fuleco",
        b: "Footix",
        c: "Naranjito",
        d: "TopTip",
        correct: "d",
    },
    {
        question: "5. ¿Cuántos mundiales de fútbol ha ganado Portugal?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a",
    },
    {
        question: "6. ¿Qué nombre recibe el balón oficial?",
        a: "Mannschaft",
        b: "Telstar",
        c: "Bildo",
        d: "Ballstar",
        correct: "b",
    },
    {
        question: "7. ¿Qué equipo ganó el mundial en 1986?",
        a: "Argentina",
        b: "Italia",
        c: "Francia",
        d: "Alemania",
        correct: "a"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }

    }
}
)
