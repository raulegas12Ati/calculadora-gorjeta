let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
    calculate()
}

function receiveNumberOfPeoploValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
    calculate()
}

function receiveTipPercetageValue(value){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }

    let customTipInput = document.querySelector("#custom-tip")

    if(customTipInput!== ""){
        customTipInput.value = ""
    }

    tipPercentage = value / 100

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    calculate()
}

function receiveCustomTipPercentageValue(){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }

    tipPorcentagem = document.querySelector("#custom-tip").valueAsNumber / 100
    calculate()
}

function calculate(){
    if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        let amountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = (bill * tipPercentage) / numberOfPeople
        amountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson
        totalStrong.innerText = `$${totalPerson.toFixed(2)}`
    }
    else{
        console.log("preencha tudo")
    }
}