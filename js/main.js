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

const ganadores = ["Uruguay 1930", "Italia 1934", "Italia 1938", "Uruguay 1950", "Alemania 1954", "Brasil 1958", "Brasil 1962", "Inglaterra 1966", "Brasil 1970", "Alemania 1974", "Argentina 1978", "Italia 1982", "Argentina 1986", "Alemania 1990", "Brasil 1994", "Francia 1998", "Brasil 2002", "Italia 2006", "España 2010", "Alemania 2014", "Francia 2018", "Argentina 2022"]
const newArray = ganadores.filter(winner => {
    console.log(winner);
    return winner.length > 2;
})
console.log(newArray)

console.log(ganadores);
console.log(ganadores[10]);
console.log(ganadores[12]);
console.log(ganadores[21]);

ganadores.push("Argentina 2026?");
console.log(ganadores);

console.log(ganadores.indexOf("Argentina 2022"));


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



