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