const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class "price" within the table
    const priceElements = document.querySelectorAll('.price');

    let totalPrice = 0;

    // Iterate through each price element and calculate the total price
    priceElements.forEach((priceElement) => {
        // Convert the text content of the price element to a number and add it to totalPrice
        totalPrice += parseFloat(priceElement.textContent);
    });

    // Create a new row for displaying the total price
    const newRow = document.createElement("tr");
    const itemCell = document.createElement("td");
    itemCell.textContent = "Total Price";
    const priceCell = document.createElement("td");
    priceCell.textContent = totalPrice.toFixed(2); // Display the total price with two decimal places

    newRow.appendChild(itemCell);
    newRow.appendChild(priceCell);

    // Append the new row to the table
    const table = document.querySelector('table');
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
