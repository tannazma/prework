let requiredEnergyUnitsPerWeek
let PotentialEnergyUnitPerPanelPerWeek
let percentageOfSunHours
let areaPerSolarPanelInM2



function calculateEnergy(e) {
    console.log(document.querySelector("#ru").value)
}
document.querySelector(".calculate").addEventListener("click", function (e) {
    e.preventDefault()
    const RU = document.querySelector("#ru")
    const PE = document.querySelector("#pe")
    const SH = document.querySelector("#sh")
    const AR = document.querySelector("#ar")
    const area = (RU.value / (PE.value * SH.value)) * AR.value;
    console.log(RU.value)
    console.log(PE.value)
    console.log(SH.value)
    console.log(AR.value)
    console.log(area)
    document.querySelector(".result").innerHTML = `The result is ${area}`
})
function validateNumber() {
    let inputFields = document.querySelectorAll("input");
    let invalidChars = /[^0-9]/
    for (const inputField of inputFields) {
        const isValueInvalid = invalidChars.test(inputField.value)
        if (isValueInvalid) {
            inputField.value = inputField.value.replace(invalidChars, "");
        }
    }

}
