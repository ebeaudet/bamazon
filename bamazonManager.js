var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySQLP@ssw0rd",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
});


function managerOptions() {
    inquirer
        .prompt({
            type: "list",
            name: "mgrChoice",
            message: "What would you like to do today?",
            choices: ["View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.mgrChoice === "View Products for Sale") {
                viewProducts();
            } else if (answer.mgrChoice === "View Low Inventory") {
                viewLowInventory();
            } else if (answer.mgrChoice === "Add to Inventory") {
                addInventory();
            } else if (answer.mgrChoice === "Add New Product") {
                addNewProduct();
            } else {
                connection.end();
            }
        });
}

function viewProducts() {
    console.log("Welcome Manager!! Here is a list of our current products...\n");
    connection.query(
        "SELECT item_id, product_name, price, stock FROM products", function (err, data) {
            if (err) throw err;
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].item_id + ": " + data[i].product_name + ", Price: " + "$" + data[i].price  + "  Quantity: " + data[i].stock )
            }
            console.log("++++++++++++++++++++++++++++++++++++++++++++\n")
        })
}

function viewLowInventory() {
    console.log("Welcome Manager!! Here is a list of our low inventoru...\n");
    connection.query(
        "SELECT * FROM products WHERE stock < 5", function (err, data) {
            if (err) throw err;
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].item_id + ": " + data[i].product_name + ", Price: " + "$" + data[i].price + "  Quantity: " + data[i].stock )
            }
            console.log("++++++++++++++++++++++++++++++++++++++++++++\n")
        })
}
managerOptions();
