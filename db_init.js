var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./awesome.db');

db.serialize(function() {
  console.log("Database Serialization Initializing...");

  //Setting up info tables
  setupTable("ships", "(id TEXT UNIQUE, red TEXT, green TEXT, blue TEXT, alpha TEXT)");


  //testUsers();

  console.log("Tables initialized!");
});

// function testUsers() {
// 	var stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?)");
// 	for (var i = 0; i < 2; i++) {
// 		stmt.run("device-" + i, "" + i*1, "" + i*2);
// 	}
// 	stmt.finalize();

// 	db.each("SELECT id, x, y FROM users", function(err, row) {
// 	  console.log(row.id + ": " + row.x + ", " + row.y);
// 	});
}

function setupTable(table_name, columns) {
	console.log("Setting up " + table_name + "...");

	db.run("DROP TABLE IF EXISTS " + table_name);
	db.run("CREATE TABLE " + table_name + " " + columns);

	console.log("Table " + table_name + " initialized!");
}

db.close(function() {
	console.log("Database Closed");
});
