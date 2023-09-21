# Prework

## About this little project

This project uses certain inputs to calculate the required surface area (in m²), necessary for producing sufficient solar energy with optimal efficiency. The website is designed for both individuals and businesses interested in installing solar panels for their homes or offices, tailored to their unique circumstances.

## The Challenges I Faced:

- Show the result `Needed Area = (RU / (PE * SH)) * AR` to the user when user clicks on calculate button
- Accepting valid characters for all inputs
- Showing results only when inputs are not EMPTY
- Adding error messages for empty inputs
- Removing error messages and the 'red box' when a user types something and clicks on 'Submit'
- Removing the red box and error message when a user is typing in input
- Removing the red box and error when the input is only a number

## First Challenge

For the first challenge, I resolved it by writing a callback function:

```js
document.querySelector(".calculate").addEventListener("click", function (e) {
  e.preventDefault;
  const area = (RU.value / (PE.value * SH.value)) * AR.value;
  document.querySelector(".result").innerHTML = `The result is ${area}`;
});
```

I added `e.preventDefault()`; to make the form work. Adding CSS was the easiest part for me. I drew inspiration from [Codepen.io](https://codepen.io/)

## Second Challenge

For accepting valid characters in all inputs, I first used:

```js
pattern = "\d*";
```

I used `type="text"` for the inputs and `oninput="validateNumber()"`. The function to validate inputs was:

```js
function validateNumber() {
  let inputFields = document.querySelectorAll("input");
  let invalidChars = /[^0-9]/;
  for (const inputField of inputFields) {
    const isValueInvalid = invalidChars.test(inputField.value);
    if (isValueInvalid) {
      inputField.value = inputField.value.replace(invalidChars, "");
    }
  }
}
```

However, it didn't work. Other invalid characters like `-` and `+` were accepted as input. When I used `type="number"`, it didn't work at all.

Another challenge was that I couldn't use `addEventListener("submit")` and simultaneously have the inputs accept a number as valid input. So I had to use `click` as an `addEventListener` when the calculate button was clicked:

```js
document.querySelector(".calculate").addEventListener("click", function () {
  let inputFields = document.querySelectorAll("input");
  for (const inputField of inputFields) {
    if (inputField.value == "") {
      inputField.classList.add("errorBox");
    }
  }
});
```

I also added some styles to the `errorBox` and `result` classes to perform form validation.

Eventually, I attempted to use `submit` to make the form work when the user submitted the form, not just clicked on the button:

```js
const form = document.querySelector("form");
form.addEventListener("submit", function () {
    let inputFields = document.querySelectorAll("input");
    for (const inputField of inputFields) {
        if (inputField.value == "") {
            inputField.classList.add("errorBox")
        }
    }
}
```

However, this didn't work properly and I switched back to using

```js
document.querySelector(".calculate").addEventListener("click", function () {....}
```

I don't know even now why is that!!!

### Good Points

- During this project, I learned how to use CSS Variables:

```js
:root {
  --error-color: rgb(182, 103, 103);
}
.errorBox {
  background-color: var(--error-color);
}
```

- And also I learned I need to use `===` like always instead of `==`.

## Third Challenge

For the third challenge, I needed to use a `for` loop to collect all input fields. When the value of the inputs equals an empty string, the loop ends:

```js
const inputFields = document.querySelectorAll("input");
for (const inputField of inputFields) {
  if (inputField.value === "") {
    return;
  }
}
```

## Fourth Challenge

For the fourth challenge, I modified the HTML code by adding a `span` tag for error messages inside the `label` tag. Then I used `innerHTML` for the `errorMessage` class's `span` to display `Please write a number`:

```js
const errorMessage = inputField.parentElement.querySelector(".error-message");
errorMessage.innerHTML = "Please write a number";
```

And add `color` to the error class.

## Fifth Challenge

For the fifth challenge, all I needed to do was include an `else` clause inside the form function:

```js
else {
     inputField.classList.remove("errorBox");
     const errorMessage = inputField.parentElement.querySelector(".error-message");
     errorMessage.innerHTML = ""
        }
```

## Sixth Challenge

The sixth challenge proved to be complex for me, as it required another `addEventListener` when the user enters an input:

```js
const inputFields = document.querySelectorAll("input");
for (const inputField of inputFields) {
  inputField.addEventListener("input", function () {
    inputField.classList.remove("errorBox");
    const errorMessage =
      inputField.parentElement.querySelector(".error-message");
    errorMessage.innerHTML = "";
  });
}
```

It was my first time using `parentElement` as I wanted to select error message spans that were wrapped in labels. I had difficulty determining which span we were referring to, so I needed to use `parentElement` to select an input from the parent label, then select the span from that specific label to remove the span class in JavaScript.

## Last Challenge

To solve the final challenge—removing the red box and error message when a user is typing a number only—I had to add an `if` condition. If the input values are not empty strings, the code removes the 'errorBox' class and inserts an empty string as an error message. All of this is wrapped in an `if` statement:

```js
if (inputField.value !== "") {
  inputField.classList.remove("errorBox");
  const errorMessage = inputField.parentElement.querySelector(".error-message");
  errorMessage.innerHTML = "";
}
```

## Final Thoughts

I acknowledge that the project needs further validation and work, but I hope it's sufficient to qualify as prework.

If you don't understand any of my notes, feel free to ask for clarifications. :)
