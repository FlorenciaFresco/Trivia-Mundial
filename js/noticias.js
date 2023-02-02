const paisesGanadores = document.querySelector("#paises-ganadores");

fetch("./js/ganadores.json")
    .then(response => response.json())
    .then(data => {
        mostrarGanadores(data);
    })

function mostrarGanadores(ganadores) {
    ganadores.forEach(ganador => {
        const li = document.createElement("li");
        li.innerText = ganador.pais + " ha ganado " + ganador.copas + " copas del Mundial de Futbol.";
        paisesGanadores.append(li);
    });
}


class Campeones {
    constructor(pais, trofeos) {
        this.pais = pais;
        this.trofeos = trofeos;
    }
}

const brasil = new Campeones("Brasil", "5 trofeos");
const alemania = new Campeones("Alemania", "4 trofeos");
const italia = new Campeones("Italia", "4 trofeos");
const argentina = new Campeones("Argentina", "3 trofeos");
const francia = new Campeones("Francia", "2 trofeos");
const uruguay = new Campeones("Uruguay", "2 trofeos");
const españa = new Campeones("España", "1 trofeos");
const inglaterra = new Campeones("Inglaterra", "1 trofeos");

console.log(brasil.trofeos);
console.log(alemania.trofeos);
console.log(italia.trofeos);
console.log(argentina.trofeos);
console.log(francia.trofeos);
console.log(uruguay.trofeos);
console.log(españa.trofeos);
console.log(inglaterra.trofeos);
