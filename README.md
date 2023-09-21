# Prework

## About this little project

This project utilizes certain inputs to calculate the necessary surface area (in m²) required to produce sufficient solar energy with optimal efficiency. The website is designed for both individuals and businesses interested in installing solar panels for their homes or offices, according to their unique circumstances.

## The Challenges I Faced:

- Show the result `Needed Area = (RU / (PE * SH)) * AR` to the user when user clicks on calculate button
- Accept valid charactes for all inputs
- Show the result only when inputs are not EMPTY
- Add error message for empty inputs
- Remove Error Message and Red box when user type sth and click on submit
- Remove red box and error message when user is typing in input
- Remove the red box and error when only the input is number


## First Challenge

For the fist challenge, I fix this by writing a call back function:

```js
document.querySelector(".calculate").addEventListener("click", function (e) {
  e.preventDefault;
  const area = (RU.value / (PE.value * SH.value)) * AR.value;
  document.querySelector(".result").innerHTML = `The result is ${area}`;
});
```

Added `  e.preventDefault` to make form work. But adding CSS was the easiest part for me, I was also inspired by [Codepen.io](https://codepen.io/)

## Second Challenge

For accepting valid chars in all inputs, First I used

```js
pattern = "d*";
```

and `type="text"` for the inputs and `oninput="validateNumber()"` and here was the function to validate inputs:

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

But it worn't work, and other invalid chars like `-` and `+` accepted as input while I used `type="number"` is also didn't work at all.

And Also another challenge was I couldn't use `addEventListener("submit")` and at the same time the inputs accept number as a valid input inside, so I had to used `click` as an `addEventListener` when the `calculate` button is clicked:

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

Also added some styles on `errorBox` and `result` classes to perform form validation.

Then I used `submit` to make form work when user submit the form not just clicks on the button:

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

But it won't work properly and I changd to using

```js
document.querySelector(".calculate").addEventListener("click", function () {....}
```

I don't know even now why is that!!!

### Good Points

- During this project I learned how to use CSS Variable:

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

For the Third challenge, I nedded to use `for` loop to get all inputs and add the value of all inputFields just an empty string and the n return when tha value of the inputs are empty string just the for loop ends :

```js
const inputFields = document.querySelectorAll("input");
for (const inputField of inputFields) {
  if (inputField.value === "") {
    return;
  }
}
```
## Fourth Challenge

For the 4th challeng, I needed to change `HTML` configuration, and pput `input` and added `span` for error message inside `label` and then add `innerHTML` for `errorMessage` class for `span` to write `Please write a number`:

```js
const errorMessage = inputField.parentElement.querySelector(".error-message");
errorMessage.innerHTML = "Please write a number";
```

And add `color` to the error class.

## Fifth Challenge

For the 5th challeng, I just needed to add an `else` inside form function:

```js
else {
     inputField.classList.remove("errorBox");
     const errorMessage = inputField.parentElement.querySelector(".error-message");
     errorMessage.innerHTML = ""
        }
```
## Sixth Challenge

The 6th challenge was complecated to me, cause I needed to use another `addEventListener` when user `input` sth:

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

- It was the first time for me to use `parentElement` because I wanted to select error message span that was wraped in label, and I couldn't understand which span we are refering to, so I needed to use `parentElement` to select and input from the label parent then select span from that specific label to remove span class in javascript.

## Last Challenge

And for solving the last challenge to remove red box and error message when user is typing only number, I neede to add `if` condition including if the input values are not an empty string remove errorBox class and then put an empty string as error message like befor but all this should be wrapped in `if` element:

```js
if (inputField.value !== "") {
  inputField.classList.remove("errorBox");
  const errorMessage = inputField.parentElement.querySelector(".error-message");
  errorMessage.innerHTML = "";
}
```

## Final Thoughts
I know the projects needs more validation and more work on that, but I hope that is enough to be a prework.

I hope you understand all my notes here, otherwise you can always ask me if some parts of that is not clear to you :)
