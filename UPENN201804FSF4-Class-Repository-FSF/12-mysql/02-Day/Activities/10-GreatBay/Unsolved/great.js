var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "greatBay_DB"
  });

var postName = "";
var postCategory = "";
var postPrice = "";

var bidName = "";
var bidPrice = "";
var operatorRuns = 0;
var dbEmpty = "true";
var inDb = "false";

function operator(){
    operatorRuns++;
        if(operatorRuns===1){
            connection.connect(function(err){
                if (err) throw err;
            });
        };
        connection.query("SELECT * FROM auctions", function(err, res){
            if (err) throw err;
            if(res.length===0){
                    //  console.log(`res.length equals ${res.length}`);
                    dbEmpty = true;
                //  console.log("dbEmpty changed to true");
            }else{
                    //  console.log(`res.length equals ${res.length}`);
                     dbEmpty = false;
                    //  console.log("dbEmpty changed to false")
                    //  console.log(`${dbEmpty}`);
            }    
            postEmptyCheck();
        });
            
       
    function postEmptyCheck(){
        if(dbEmpty===false){
            inquirer.prompt([
                {
                    type: "list",
                    name: "action",
                    message: "would you like to [POST] or [BID]",
                    choices: ["POST", "BID"]
                },

            ]).then(function(response){
                if(response.action === "BID"){
                    bid();
                }else{
                    post();
                }
            });////end of prompt and then
        };
        if(dbEmpty){
            inquirer.prompt([
                {
                    type: "list",
                    name: "action",
                    message: "Nothing to bid on yet, care to [POST]?",
                    choices: ["POST"]
                },

            ]).then(function(response){
                    post();
            });////end of prompt and then  
        }
    }//empty check end

};

function post(){
    inquirer.prompt([
    {
        type: "input",
        name: "postName",
        message: "What item do you want to submit?",

    },
    {
        type: "input",
        name: "postCategory",
        message: "What's the category?",
    },
    {
        type: "input",
        name: "postPrice",
        message: "What's the starting bid?",
    }
    ]).then(function(response){
        postName = response.postName;
        postCategory = response.postCategory;
        postPrice = response.postPrice;
        writeFunction();
    });
};

function bid(){
    inquirer.prompt([
        {
            type: "input",
            name: "bidItem",
            message: "would you like to bid on?",
        }
    ]).then(function(response){
        connection.query("SELECT * FROM auctions WHERE ?",
        {
            item_name: response.bidItem
        },
        function(err, res){
            if (err) throw err;
                if(res.length===0){

                    console.log(`Sorry, ${response.bidItem} hasn't been posted yet, please select an item in our database`);
                    bid();
                }
                if(res.length>=1){
                    bidName = response.bidItem;
                    getPrice();
                }
        });

    });
    function getPrice(){
        inquirer.prompt([
            {
                type: "input",
                name: "bidPrice",
                message: "How much is your new bid?",
            }
        ]).then(function(response){
            connection.query("SELECT highest_bid FROM auctions WHERE ?",
            {
                item_name: bidName
            },
        
        function(err, res){
            if (err) throw err;
            // console.log(`highest bid from database is ${res[0].highest_bid}`);
            // console.log(`newest bid is ${response.bidPrice}`);
            var bidInt = parseInt(response.bidPrice);
            var dbInt = parseInt(res[0].highest_bid);
            // console.log(`type of dbInt is ${typeof(dbInt)}`);
            // console.log(`type of bidInt is ${typeof(bidInt)}`);
            if ( bidInt > dbInt){
                bidPrice = response.bidPrice;
                bidUpdate(); 
            }else{
                console.log(`Sorry, the current highest bid for this item is ${res[0].highest_bid}`);
                getPrice();
            }
        })
            // bidPrice = response.bidPrice;
            // bidUpdate();
        });
    }
};

function writeFunction(){
    function addToDb(){
        connection.query("INSERT INTO auctions SET ?",
        {
            item_name: postName,
            category: postCategory,
            starting_bid: postPrice,
            highest_bid: postPrice
        },
        function(err, res) {
            if (err) throw err;
            console.log(`You've successfully posted ${postName}, starting at $${postPrice}!`);
            restartQuery();
          });
          
    }
    addToDb();
};

function bidUpdate(){
      function updateDb(){
        connection.query("UPDATE auctions SET ? WHERE ?",
            [{
                highest_bid: bidPrice
            },

            {
                item_name: bidName
            }],
            function(err, res) {
                if (err) throw err;
                console.log(`You've successfully bid on ${bidName}. The new high bid is ${bidPrice}!`);
            
            });
            restartQuery();
      }
    updateDb();
};

function restartQuery(){
    inquirer.prompt({
            type: "list",
            name: "restart",
            message: "Do you want to BID on or POST anthing else?",
            choices:['yes', 'no', 'I don\'t know, show me the current items and their highest bids.']
    }).then(function(response){
        if(response.restart==="yes"){
            operator();
            console.log(`dbEmpty set to ${dbEmpty}`);
        }if(response.restart==="no"){
            connection.end();
        }
        else{
            connection.query("SELECT item_name, highest_bid FROM auctions", function(err, res){
                if (err) throw err;
                for(var i = 0; i<res.length; i++){
                    console.log("");
                    console.log("-----------");
                    console.log(`${res[i].item_name} is currently at ${res[i].highest_bid}`);
                    console.log("");
                }
            });
            restartQuery();
        }
    });
}
operator();



///query sandbox
// connection.connect(function(err){
//     if (err) throw err, console.log("error in operator function");
// });

// connection.query("SELECT * FROM auctions WHERE item_name='chicken'", function(err, res){
//     if (err) throw err;
//     console.log(res.length);

// });

