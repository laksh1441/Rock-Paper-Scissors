const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];
const handleclick = (e) => {
  const userchoice = e.target.innerHTML;
  const computerchoice = choices[Math.floor(Math.random() * choices.length)];
  getResults(userchoice, computerchoice);
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleclick);
  choicesDisplay.appendChild(button);
});
function getResults(userchoice, computerchoice) {
  switch (userchoice + computerchoice) {
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
      resultDisplay.innerHTML =
        "You chose " +
        userchoice +
        " and the computer chose " +
        computerchoice +
        " And You WIN!  🥳 ";
      break;
    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
      resultDisplay.innerHTML =
        "You chose " +
        userchoice +
        " and the computer chose " +
        computerchoice +
        " And You LOST! 🥺 ";
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      resultDisplay.innerHTML =
        "You chose " +
        userchoice +
        " and the computer chose " +
        computerchoice +
        " And The Match is Tied";
      break;
  }
}