
function rollDice(){

  const numberDice = document.getElementById("numberDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  let values = [];
  let images = [];

  for (let i = 0; i < numberDice; i++) {
    const value = Math.floor(Math.random() * 6 + 1)
    values.push(value);
    images.push(`<img src="images/seite${value}.png" alt="Dice ${value}">`)
  }

  diceResult.textContent = `dice: ${values.join(`, `)}`;
  diceImages.innerHTML = images.join(``);
}