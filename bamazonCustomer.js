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
    getProducts();
});

function getProducts() {
    console.log("Welcome to Bamazon!! Please browse our list of products...\n");
    var query = connection.query(
        "SELECT item_id, product_name, price FROM products", function (err, res) {
            ;
            if (err) throw err;
            console.log(res);
            connection.end();
        })
}