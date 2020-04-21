var Account = function(name, amount){
    this.name = name;
    this.amount = amount;
    
}

Account.prototype.print = function(account){
    console.log(account.name, account.amount);
}

module.exports = Account;