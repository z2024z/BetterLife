// const { error } = require("console");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite3");
// loop in the world . make one database : [thing .record-time .happen-time .money-amount]
// initDB_money();
//money 's source is salary. too singular. do everything in my power to get money . only in this way can I relieve the predicament.
// lottery ticket is another can try.
// lotteryTicket();
function lotteryTicket() {
  // console.log("ssq .fc3d");
  //data store.
  // db.run(`create unique index happen_time2024L on union_lotto(happen_time)`);
  // return;
  db.serialize(() => {
    db.run(`
        create table if not exists union_lotto(
          id integer primary key  autoincrement,
          happen_time date not null,
          blue integer not null,
          red1 integer not null,
          red2 integer not null,
          red3 integer not null,
          red4 integer not null,
          red5 integer not null,
          red6 integer not null
        )
      `);
    const fs = require("fs");
    for (let index_a = 20; index_a < 61; index_a++) {
      fs.readFile(
        "./unionLottoOriginalData/ul" + index_a + "-60.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          const json_data = JSON.parse(data);
          // console.log(json_data);
          console.log(json_data.result[0].date);
          const insertOne = db.prepare(
            `
            insert into union_lotto(happen_time,blue,red1,red2,red3,red4,red5,red6) values(?,?,?,?,?,?,?,?)
          `,
            function (err) {
              if (err) {
              }
            }
          );
          // console.log(json_data.result[1].red.slice(3,5));
          // return;
          for (let i = 0; i < json_data.pageSize; i++) {
            if (json_data.result[i] == undefined) {
              continue;
            }
            console.log("aaa."+json_data.result[1].red.slice(0,2));
            
            // return;
            insertOne.run(
              json_data.result[i].date.slice(0, 10),
              json_data.result[i].blue,
              json_data.result[i].red.slice(0, 2),
              json_data.result[i].red.slice(3, 2),
              json_data.result[i].red.slice(6, 2),
              json_data.result[i].red.slice(9, 2),
              json_data.result[i].red.slice(12, 2),
              json_data.result[i].red.slice(15, 2),
              (err) => {
                if (err) {
                }
              }
            );
          }
        }
      );
    }
  });
}
function initDB_money() {
  console.log("initial database for money-count.");
  // create db sqlite3.
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
  // db.run(`update money_amount_thing set happen_time `)
  // db.run(`create unique index happen_time2024 on money_amount_thing(happen_time)`)
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
    // insert.run('ali-pay.huaBei','2024-11-24','2024-12-20',0)
    /*
    for (let i = 1; i <= 2; i++) {
      insert.run("ali-pay.huaBei", "2024-11-24", "2025-0"+i+"-20", 2282.26);
    }
      */
    /*
    for (let i = 3; i <= 5; i++) {
      insert.run("ali-pay.huaBei", "2024-11-24", "2025-0"+i+"-20", 1895.65);
    }
      */
    /*
    for (let i = 6; i <= 7; i++) {
      insert.run("ali-pay.huaBei", "2024-11-24", "2025-0" + i + "-20", 895.74);
    }
      */
    // insert.run("ali-pay.jieBei", "2024-11-24", "2025-12-22", 349.50);
    // db.run('delete from money_amount_thing where id=10')
    // insert.run("ali-pay.jieBei", "2024-11-24", "2024-12-22", 349.5);
    let array = new Array(
      361.15,
      361.15,
      326.2,
      361.15,
      349.5,
      361.15,
      349.5,
      361.15,
      28361.15,
      2024.6
    );
    // console.log(array.length);
    /*
    for(let i=1;i<=array.length;i++){
      insert.run("ali-pay.jieBei", "2024-11-24", "2025-"+i+"-22", array[i-1]);
    }
      */
    // insert.run("ali-pay.jieBei", "2024-11-24", "2025-10-22", array[array.length-1]);
    // insert.run('bank.nh',"2024-11-25",'2024-11-25',5572.59)
    db.all(
      `select money_amount from money_amount_thing where id=3`,
      (err, rows) => {
        if (err) {
          console.error(err.message);
        } else {
          rows.forEach((row) => {
            console.log(row.money_amount);
            /*
            db.run(
              `update money_amount_thing set money_amount = ? where id=3`,
              -1*row.money_amount,
              function (err) {
                if (err) {
                  console.error(err.message);
                }
              }
            );
            */
          });
        }
      }
    );
  });

  db.close((err) => {
    if (err) {
      // console.error(err.message);
    }
    console.log("close the database connection.");
  });
}
