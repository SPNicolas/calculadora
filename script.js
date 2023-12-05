function inserir(num) {
    document.querySelector(".display").innerHTML += num;
}

function limpar() {
    document.querySelector(".display").innerHTML = "";
}


function total() {
    let display = document.querySelector(".display").innerHTML;
    if (display) {
        let history = document.getElementById("history");
        history.innerText = display;
        document.querySelector(".display").value = eval(display);
    } else {
        document.querySelector(".display").innerHTML = "Comando errado";
    }
}


limpar();