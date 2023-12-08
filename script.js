
function inserir(num) {
    document.getElementById("display").innerHTML += num;//Ele serve para inserir um número ou operador.
}

function limpar() {
    document.querySelector(".display").innerHTML = "";//Ele serve para limpar a conta da tela. 
}


function total() {
    let display = document.getElementById("display");
    if (display.innerHTML) {
        let history = document.getElementById("history");
        history.innerText = display.innerHTML;
        display.textContent = eval(display.innerHTML);
    } else {
        document.querySelector(".display").innerHTML = "Comando errado";
    }
}

document.addEventListener("keypress", function (event) {
    if (event.key == "1") {
        inserir(1)
    } 
    if (event.key == "2") {
        inserir(2)
    } 
    if (event.key == "3") {
        inserir(3)
    } 
    if (event.key == "4") {
        inserir(4)
    } 
    if (event.key == "5") {
        inserir(5)
    } 
    if (event.key == "6") {
        inserir(6)
    } 
    if (event.key == "7") {
        inserir(7)
    } 
    if (event.key == "8") {
        inserir(8)
    } 
    if (event.key == "9") {
        inserir(9)
    } 
    if (event.key == "+") {
        inserir('+')
    }
    if (event.key == "-") {
        inserir("-")
    }
    if (event.key == "/") {
        inserir("/")
    }
    if (event.key == "c") {
        limpar()
    }
    if (event.key == ".") {
        inserir(".")
    }
        
})