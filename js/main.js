function saludar(nombre) {
    console.log("Hola " + nombre + " vamos a ver cuando mundiales gano Argentina");
}
saludar("Profesor");

let edad = prompt("Ingrese su edad");
if (edad >= 18) {
    alert("Sos mayor de edad. Podés ingresar.");
} else {
    alert("Sos menor de edad. No podés ingresar")
}
const ganadores = ["Uruguay 1930", "Italia 1934", "Italia 1938", "Uruguay 1950", "Alemania 1954", "Brasil 1958", "Brasil 1962", "Inglaterra 1966", "Brasil 1970", "Alemania 1974", "Argentina 1978", "Italia 1982", "Argentina 1986", "Alemania 1990", "Brasil 1994", "Francia 1998", "Brasil 2002", "Italia 2006", "España 2010", "Alemania 2014", "Francia 2018", "Argentina 2022"]

console.log(ganadores);
console.log(ganadores[10]);
console.log(ganadores[12]);
console.log(ganadores[21]);

ganadores.push("Argentina 2026?");
console.log(ganadores);

console.log(ganadores.indexOf("Argentina 2022"));

let argentinaCampeon = Number(prompt("Ingrese el año en que Argentina salio Campeon de la copa Mundial de Fútbol"));
function mundial(argentinaCampeon) {

    switch (argentinaCampeon) {
        case "1978":
            alert('Mundial Argentina 1978 - Ganador Argentina');
            break;
        case "1986":
            alert('Mundial Mexico 1986 - Ganador Argentina');
            break;
        case "2022":
            alert('Mundial Qatar 2022 - Ganador Argentina');
            break;

    }
}
mundial(argentinaCampeon);
