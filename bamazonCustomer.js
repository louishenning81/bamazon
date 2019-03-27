var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});



connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
})

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var table = new Table({
            head: ["item_id",
                "productName",
                "departmentName",
                "price",
                "stockQuantity"]
        });
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id,
            res[i].productName,
            res[i].departmentName,
            res[i].price,
            res[i].stockQuantity])
        };
        console.log(table.toString());
        userprompt();
    })
};


function userprompt() {

    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What is the item you would like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        },

    ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query("SELECT * FROM products WHERE ?",
                {
                    item_id: answer.item
                },
                function (err, res) {
                    if (err) throw err;
                    var stockQuantity = res[0].stockQuantity - answer.quantity;
                    if (stockQuantity >= 0) {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [{ stockQuantity: stockQuantity }, { item_id: answer.item }],
                            function (err) {
                                if (err) throw err;
                                console.log("Congrats on your purchase!  You spent $" + (answer.quantity * res[0].price));
                                afterConnection();
                            })
                    }
                    else {
                        console.log("Sorry but we unfortunately don't have enough quantity to fill your order.");
                        afterConnection();
                    };
                }
            );
        });
}




