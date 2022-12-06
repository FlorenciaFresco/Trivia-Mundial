let entrada = prompt("Ingresa un nombre");
while (entrada != "ESC") {
    switch (entrada) {
        case "Diego":
            alert("Hola Diego");
            break;
        case "Lionel":
            alert("Hola Lionel");
            break;
        case "Neymar":
            alert("Hola Neymar");
            break;
        case "Mbappe":
            alert("Hola Mbappe");
            break;
    }
    entrada = prompt("Ingresa un nombre")
}

function saludar() {
    console.log("Vamos Argentina!")
}
