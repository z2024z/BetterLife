// loop in the world . make one database : [thing .record-time .happen-time .money-amount]
initDB_money();
function initDB_money() {
  console.log("initial database for money-count.");
  // create db sqlite3.
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database("./db.sqlite3");
  // create table money-amount-thing
  /*
  db.serialize(() => {
    db.run(`drop table if exists money_amount_thing`, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("table dropped successfully.");
    });
  });
  */

  db.serialize(() => {
    /*
    db.run(`
                create table if not exists money_amount_thing(
                    id integer primary key autoincrement,
                    thing text not null,
                    record_time date not null,
                    happen_time date not null,
                    money_amount real not null
                )
                `);
    */

    const insert = db.prepare(`
        insert into money_amount_thing(thing,record_time,happen_time,money_amount) values(?,?,?,?)
      `);

    // insert.run("test start", "2024-11-24", "2024-11-24", 0);
    
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("close the database connection.");
  });
}
