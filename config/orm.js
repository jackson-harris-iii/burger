const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM ?";
        connection.query(queryString, tableInput, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO ? ? VALUES ?";

        connection.query(queryString, [table, cols, vals], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    updateOne: (table, objColVals, condition, cb) => {
        let queryString = "UPDATE ? SET ? WHERE ?";

        connection.query(queryString, [table, objColVals, condition], (err, result) => {
            if (err) throw err;
            console.log('db updated')
            cb(result)
        })
    },

}

module.exports = orm;
