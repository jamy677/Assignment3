// Add student info
const studentInfo = document.getElementById("student-info");
studentInfo.innerText = "Student ID: 200530613 | Name: Aryan Jamwal";

// Handle form submission
const form = document.getElementById("pizza-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const toppings = [];
    document.querySelectorAll('input[name="topping"]:checked').forEach(function(topping) {
        toppings.push(topping.value);
    });

    // Create Pizza object
    const pizza = new Pizza(size, crust, toppings);

    // Display order details
    displayOrder(pizza);
});

// Pizza class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
}

// Function to display order details
function displayOrder(pizza) {
    const orderDetails = document.getElementById("order-details");
    orderDetails.innerHTML = `
        <h2>Your Pizza Order:</h2>
        <p><strong>Size:</strong> ${pizza.size}</p>
        <p><strong>Crust:</strong> ${pizza.crust}</p>
        <p><strong>Toppings:</strong> ${pizza.toppings.join(", ")}</p>
    `;
}
