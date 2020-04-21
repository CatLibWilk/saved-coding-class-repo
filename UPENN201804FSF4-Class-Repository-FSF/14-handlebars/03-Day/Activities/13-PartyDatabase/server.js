var orm = require("./config/orm.js");

// orm.selectParties("party_name", "parties");

// orm.selectClients("client_name", "clients");

// orm.partyByTypes("party_name", "parties", "party_type", "grown-up");

orm.selectAll("party_name", "client_name", "parties", "clients", "client_id")