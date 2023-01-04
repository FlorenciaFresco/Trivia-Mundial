function saludar() {
    const nombre = prompt('Ingrese su nombre, porfavor')
    if (nombre.trim() === "") {
        alert('No ingresaste ningun dato, porfavor ingrese su nombre')
        saludar()
    } else {
        alert(`Te doy la bienvenida ${nombre}`)
        solicitarEdad()
    }
    console.log("Hola " + nombre + " vamos a ver cuanto sabes del mundial!");
}
saludar();

function solicitarEdad(){

    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 18) {
    alert("Sos mayor de edad. Podés ingresar.");
    
    } else {
        alert("Sos menor de edad. No podés ingresar")
    }
}

const questions = [{
    question: ' Cuantas veces Argentina salio campeon?',
    answer: '3',
    affirm: 'Yay! Correcto!',
    rebuttal: 'Error!.'
},
{
    question: 'Cuantas veces salio Francia Campeon?',
    answer: '2',
    affirm: 'Good job!',
    rebuttal: 'Not right.'
}];

for (let i = 0, l = questions.length; i < l; i++) {
    answer = prompt(questions[i].question);

    
    if (answer !== questions[i].answer) {
        alert(questions[i].rebuttal);
        i--;
    } else {
        alert(questions[i].affirm);
    }
}
let ganadores = 'Brasil fue ganador en 1958,1962,1970, 1994 y 2002. Alemania fue ganador en 1954, 1974, 1990 y 2014. Italia fue ganador en 1934, 1938, 1982 y 2006. Argentina fue ganador en 1978, 1986 y 2022. Francia fue ganador en 1998 y 2011. Uruguay fue ganador en 1930 y 1950. España fue ganador en 2010. Ingraterra fue ganador en 1966.';
let palabra = 'Argentina';
console.log(ganadores.search(palabra));

const paisesGanadores = ['Brasil', 'Alemania', 'Italia', 'Argentina', 'Francia', 'Uruguay', 'España', 'Inglaterra'];
function filterItems(query) {
    return paisesGanadores.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
console.log(filterItems('Arg'));

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


