// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: 's554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'm6zaotf4s1gafc25',
	password: 'z886a72kon9sifw7',
	database: 'dlbc5v3bfxbntng4',
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
