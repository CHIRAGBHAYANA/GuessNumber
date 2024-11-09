let guesses = [];
let count = 10;
const form = document.querySelector("form");
const result = document.querySelector("#result");
const prevGuesses = document.querySelector("#previousGuesses");
const counter = document.querySelectorAll("p")[4];

const generateRandomNumber = () => {
  const max = 100;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomNumber = generateRandomNumber();

const disabledInput = () => {
  document.querySelector("input[type=text]").setAttribute("disabled", "");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberEntered = parseInt(
    document.querySelector("input[type=text]").value
  );
  if (numberEntered === randomNumber) {
    result.innerText = `You Guess the Right Number ${numberEntered}`;
    result.style.color = "green";
    disabledInput();
  } else {
    guesses.push(numberEntered);
    result.innerText = `You Guess the Wrong Number ${numberEntered}`;
    result.style.color = "red";
  }
  counter.children[0].innerText = count--;
  const prevNum = document.createElement("span");
  guesses.map((guess) => {
    prevGuesses.appendChild(prevNum);
    prevNum.innerText = `${guess}, `;
  });
  if (count === 0) {
    result.innerText = `You LOST, Correct Number is ${randomNumber} Please Try AGAIN`;
    result.style.color = "red";
    disabledInput();
  }
});
