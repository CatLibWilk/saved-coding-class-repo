var orm = require("./config/orm.js");

// var data = orm.selectWhere("parties", "party_type", "grown-up");

    orm.selectWhere("parties", "party_type", "grown-up", result => console.log(result));

