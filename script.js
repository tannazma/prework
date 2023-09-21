function calculateEnergy(e) {
    console.log(document.querySelector("#ru").value)
}
const submitButton = document.querySelector(".calculate")
submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    const RU = document.querySelector("#ru")
    const PE = document.querySelector("#pe")
    const SH = document.querySelector("#sh")
    const AR = document.querySelector("#ar")
    const area = (RU.value / (PE.value * SH.value)) * AR.value;
    const inputFields = document.querySelectorAll("input");
    for (const inputField of inputFields) {
        if (inputField.value === "") {
            return
        }
    }
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
submitButton.addEventListener("click", function () {
    const inputFields = document.querySelectorAll("input");
    for (const inputField of inputFields) {
        if (inputField.value === "") {
            inputField.classList.add("errorBox");
            const errorMessage = inputField.parentElement.querySelector(".error-message");
            errorMessage.innerHTML = "Please write a number"
        }
    }
})
const inputFields = document.querySelectorAll("input");
for (const inputField of inputFields) {
    inputField.addEventListener("input", function () {
        if (inputField.value !== "") {
            inputField.classList.remove("errorBox");
            const errorMessage = inputField.parentElement.querySelector(".error-message");
            errorMessage.innerHTML = ""
        }
    })
}

