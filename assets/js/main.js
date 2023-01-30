let height = document.querySelector("#height")
let age = document.querySelector("#age")
let weight = document.querySelector("#weight")
let man = document.querySelector("#man")
let activityList = document.getElementById("activityList")
let btn = document.querySelector(`input[type="submit"]`)
let grundKcal = document.querySelector("#grundKcal")
let grundKJ = document.querySelector("#grundKJ")
let gesamtKcal = document.querySelector("#gesamtKcal")
let gesamtKJ = document.querySelector("#gesamtKJ")

let calc = (event) => {
    event.preventDefault()
    let heightInput = Number(height.value)
    let ageInput = Number(age.value)
    let activityListInput = Number(activityList.value)
    let weightInput = Number(weight.value)
    let grundumsatz = ""
    if (man.checked){
        grundumsatz = 664.7 + (13.7 * weightInput) + (5 * heightInput) - (6.8 * ageInput)
    }else{
        grundumsatz = 655.1 + (9.6 * weightInput) + (1.8 * heightInput) - (4.7 * ageInput)
    }
    let gesamtumsatz = grundumsatz * activityListInput
    grundKcal.innerHTML = grundumsatz.toFixed(2) + " kcal"
    grundKJ.innerHTML = (grundumsatz * 4.184).toFixed(2) + " KJ"
    gesamtKcal.innerHTML = gesamtumsatz.toFixed(2) + " kcal"
    gesamtKJ.innerHTML = (gesamtumsatz * 4.184).toFixed(2) + " KJ"
}

btn.addEventListener("click", calc)