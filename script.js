let btnOrder = document.getElementById("btn");

btnOrder.addEventListener("click", function () {
  let customerName = document.getElementById("name").value;
  let customerAddress = document.getElementById("address").value;
  let pizzaSelection = document.getElementById("selectPizza").value;
  let okMessage = document.getElementById("confirmationMessage");

  okMessage.textContent = `Hi ${customerName}, Order Received! your Pizza flavour ${pizzaSelection} is reached
                           at ${customerAddress} is in 30 mintues. Thanks for use our service`;

  //   console.log(customerName, customerAddress, pizzaSelection);
});
