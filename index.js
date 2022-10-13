const costoTotal = document.getElementById("totalCost");
let costoTotalValue = parseInt(costoTotal.value);

const numeroPersonas = document.getElementById("numberPeople");
let numeroPersonasValue = parseInt(numeroPersonas.value);

const propinaRes = document.querySelector(".results-tip-p")
let totalRes = document.querySelector(".results-total-p");
 
let buttons = document.querySelectorAll(".tip-percentage-button");
let inputPersonalidado = document.querySelector(".tip-percentage-input");

let alertError = document.querySelector(".alert-error");

let resetBtn = document.querySelector(".btn-reset");

let btnValue = 10;

buttons.forEach( btn => {
    btn.addEventListener("click", e => {
        //remuevo clase
        buttons.forEach(btn => {
            btn.classList.remove("btn-selected");
        })

        //añado clase
        e.target.classList.add("btn-selected");

        //traigo valor del buton

        btnValue = parseInt(e.target.innerText.slice(0,-1));

        calcularPropina();

    })
} )

//actualizar costo input constantemente

costoTotal.addEventListener("input", () => {
    costoTotalValue = parseFloat(costoTotal.value);
    calcularPropina();
})

//actualizar personas
numeroPersonas.addEventListener("input", () => {
    numeroPersonasValue = parseFloat(numeroPersonas.value);

    if(numeroPersonasValue == 0 || isNaN(numeroPersonasValue)){
        numeroPersonas.style.borderColor = "rgb(243, 81, 81)";
        alertError.classList.add("error");
    } else {
        alertError.classList.remove("error");
        numeroPersonas.style.borderColor = "green";
        calcularPropina();
    }
    
})

//actualizar input personalizado

inputPersonalidado.addEventListener("input", () => {
    btnValue = parseInt(inputPersonalidado.value);
    if(isNaN(btnValue)){
    } else{
        calcularPropina();
    }
})

//resetear

resetBtn.addEventListener("click", () => {
    costoTotal.value = 0;
    costoTotalValue = 0;

    numeroPersonas.value = 5;
    numeroPersonasValue = 5;

    calcularPropina();
})

const calcularPropina = () => {
    propinaRes.innerText = ((costoTotalValue * btnValue / 100) / numeroPersonasValue).toFixed(2);

    //calculo total

    totalRes.innerText = (((costoTotalValue * btnValue / 100) + costoTotalValue) / numeroPersonasValue).toFixed(2);
}