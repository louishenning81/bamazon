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

var table = new Table ({
    head: ["item_id",
            "productName",
            "departmentName",
            "price",
            "stockQuantity"], 
    colWidths: [ 50, 200, 100, 50, 50 ]
})


connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
})

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        
        console.log(res[0].item_id);
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id,
                    res[i].productName,
                    res[i].departmentName,
                    res[i].price,
                    res[i].stockQuantity])  
        };    
        console.log(table.toString());
        connection.end();
    })
}



