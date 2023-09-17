let requiredEnergyUnitsPerWeek
let PotentialEnergyUnitPerPanelPerWeek
let percentageOfSunHours
let areaPerSolarPanelInM2



function calculateEnergy(e) {
    console.log(document.querySelector("#ru").value)
}
const form = document.querySelector(".calculate")
form.addEventListener("click", function (e) {
    e.preventDefault()
    const RU = document.querySelector("#ru")
    const PE = document.querySelector("#pe")
    const SH = document.querySelector("#sh")
    const AR = document.querySelector("#ar")
    const area = (RU.value / (PE.value * SH.value)) * AR.value;
    document.querySelector(".result").innerHTML = `The result is ${area}`
})
function validateNumber() {
    const inputFields = document.querySelectorAll("input");
    const invalidChars = /[^0-9]/
    for (const inputField of inputFields) {
        const isValueInvalid = invalidChars.test(inputField.value)
        if (isValueInvalid) {
            inputField.value = inputField.value.replace(invalidChars, "");
        }
    }

}
form.addEventListener("click", function () {
    const inputFields = document.querySelectorAll("input");
    for (const inputField of inputFields) {
        if (inputField.value === "") {
            inputField.classList.add("errorBox")
        }
    }
})

