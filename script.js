//----PORTUGUES-----
// Criei este código para simular um sistema de pedido de pipoca. Ele solicita ao usuário que informe o tamanho desejado da pipoca (pequeno, médio ou grande) e a quantidade que desejam pedir. Com base na entrada do usuário, ele calcula o preço total e o exibe. Este código permite que os usuários façam facilmente seus pedidos de pipoca e recebam informações precisas sobre os preços.

//----ENGLISH-----
// I created this code to simulate a popcorn ordering system. It prompts the user to enter the desired size of popcorn (small, medium, or large) and the quantity they want to order. Based on the user input, it calculates the total price and displays it to the user. This code allows users to easily place their popcorn orders and receive accurate pricing information

let totalPrice = 0;

//Function to ask the user for a desired size of the popcorn
function gettingPopcornSize() {
  do {
    let popcornSize = prompt(
      "Please enter size desired: small, medium or Large"
    ).toLowerCase();

    // Switch statement to handle different sizes of popcorn
    switch (popcornSize) {
      case "small":
        return 1;
      case "medium":
        return 2;
      case "large":
        return 3;
      default:
        alert("Invalid size! Please enter 'small', 'medium', or 'large'.");
    }
  } while (true);
}
let popcornSize = gettingPopcornSize();

console.log(`popcornSize: ${popcornSize}`);

// Function to calculate the total price based on the popcorn size and quantity entered by the user
function gettingTotalPrice() {
  let quantityOfPopcorn = parseInt(prompt("insert the quantity:"));
  if (isNaN(quantityOfPopcorn) || quantityOfPopcorn <= 0) {
    alert("Invalid quantity! Please try again");
    return 0;
  }

  let popcornPrice;

  if (popcornSize == 1) {
    popcornPrice = 2.5;
  } else if (popcornSize == 2) {
    popcornPrice = 4.5;
  } else if (popcornSize == 3) {
    popcornPrice = 8.5;
  }
  return quantityOfPopcorn * popcornPrice;
}
totalPrice = gettingTotalPrice();
console.log(`The total price is: ${totalPrice}`);

alert(`Your total price is: $${totalPrice}`);
