//This is the ORM which processes the route requests and implements the proper mysql function
const orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', function(res) {
            cb(res)
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, devoured, cb) {
        orm.updateOne('burgers', objColVals, devoured, function(res) {
            cb(res);
        });
    },    
}

module.exports = burger;