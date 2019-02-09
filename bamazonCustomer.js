var mysql = require("mysql");
var inquirer = require("inquirer");

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

function getProducts() {
    console.log("Welcome to Bamazon!! Please browse our list of products...\n");
    connection.query(
        "SELECT item_id, product_name, price FROM products", function (err, data) {
            if (err) throw err;
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].item_id + ": " + data[i].product_name + ", Price: " + "$" + data[i].price)
            }
            console.log("++++++++++++++++++++++++++++++++++++++++++++\n")
            userPrompt();
        })
}

function userPrompt() {
    inquirer
           .prompt([
            {
                name: "itemChoice",
                type: "input",
                message: "What is the Item ID of the product you want to purchase?"
            },
            {
                name: "itemQty",
                type: "input",
                message: "How many would you like?",

            },

        ]).then(function (input) {

    connection.query("SELECT product_name, stock, price FROM products WHERE ?", { item_id: input.itemChoice }, function (err, data) {
            if (err) throw err;            
              var productQty = data[0].stock;
              var productPrice = data[0].price;
                 if (input.itemQty <= productQty) {             
                    console.log("\n~~~~~~~~~~~~~~~~~~~~~Congrats~~~~~~~~~~~~~~~~~~~~~~~~~\n");
                    // console.log(input.itemChoice);
                    connection.query("Update products set stock = " + (productQty - input.itemQty) + " WHERE ?", { item_id: input.itemChoice }, function (err, data) {
                        if (err) throw err;
                        console.log("************Your order has been placed*****************\n");
                        console.log("~~~~~~~~~~~~~~~Your total cost is $" + (productPrice * input.itemQty + "~~~~~~~~~~~~~~~~~" ))
                    })
                } else {
                    console.log("Insufficient Quantity!! Please start over");
                    getProducts()
                }
                connection.end();
            })
        })
}

getProducts();