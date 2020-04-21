module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return User;
};


