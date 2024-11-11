const socket = io(); // Connect to the server

socket.on("order-update", (order) => {
  const orderSummary = document.getElementById("order-summary");

  const newOrderContainer = document.createElement("div");
  newOrderContainer.classList.add("new-order");

  const orderHeading = document.createElement("h3");
  orderHeading.textContent = "New Order";

  newOrderContainer.appendChild(orderHeading);

  // Iterate through the order items and display each one
  for (const item in order) {
    const orderItem = document.createElement("div");
    orderItem.classList.add("order-item");

    const itemName = document.createElement("span");
    itemName.classList.add("item-name");
    itemName.textContent = item;

    const itemQuantity = document.createElement("span");
    itemQuantity.classList.add("item-quantity");
    itemQuantity.textContent = `x${order[item]}`;

    orderItem.appendChild(itemName);
    orderItem.appendChild(itemQuantity);

    newOrderContainer.appendChild(orderItem);
  }

  const clearButton = document.createElement("button");
  clearButton.classList.add("clear-btn");
  clearButton.textContent = "Clear Order";

  clearButton.addEventListener("click", () => {
    orderSummary.removeChild(newOrderContainer);
  });

  newOrderContainer.appendChild(clearButton);

  const separatorLine = document.createElement("hr");
  separatorLine.id = "line";
  newOrderContainer.appendChild(separatorLine);

  orderSummary.appendChild(newOrderContainer);
});
