var connection = require("./connection.js");

var orm = {
    selectParties: function(colToSearch, table){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colToSearch, table], (err, result) => {
            if (err) throw err;
            console.log(result)
        })
    },
    selectClients: function(colToSearch, table){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colToSearch, table], (err, result) => {
            if (err) throw err;
            console.log(result)
        })
    },
    partyByTypes: function(colToSearch, table, param, param2){
        var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
        connection.query(queryString, [colToSearch, table, param, param2], (err, result) => {
            if (err) throw err;
            console.log(result)
        })
    },
    selectAll: function(col1, col2, table1, table2, key){
        var queryString = "SELECT ??, ?? FROM ?? LEFT JOIN ?? ON ??.?? = ??.id";
        connection.query(queryString, [col1, col2, table1, table2, table1, key, table2], (err, result) => {
            if (err) throw err;
            result.forEach(pass => {
                console.log(`${pass.client_name} is having a ${pass.party_name} party!`)
            })
        })
    }
}

module.exports = orm;