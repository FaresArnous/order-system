const socket = io(); // Connect to the server

socket.on("order-update", (order) => {
  const orderSummary = document.getElementById("order-summary");

  // Create a container for the new order
  const newOrderContainer = document.createElement("div");
  newOrderContainer.classList.add("new-order");

  // Add a heading or separator for each new order
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
    const sepratorLine = document.createElement("hr");
    sepratorLine.id = "line";
    newOrderContainer.appendChild(sepratorLine);
  }

  orderSummary.appendChild(newOrderContainer);
});
