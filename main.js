let bill = 0
let tipPorcentagem = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeoploValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercetageValue(value){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }

    tipPorcentagem = value / 100

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

