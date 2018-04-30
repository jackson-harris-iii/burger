const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    insertOne: (table, cols, vals, cb) => {
        
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        
        console.log(queryString)
        
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    updateOne: (table, objColVals, condition, cb) => {
       
        let queryString = "UPDATE" + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, [table, objColVals, condition], (err, result) => {
            if (err) throw err;
            console.log('db updated')
            cb(result)
        })
    },

}

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
  var arr = [];


  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
}

module.exports = orm;
