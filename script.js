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