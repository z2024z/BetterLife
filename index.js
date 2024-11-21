console.log('[hello world for node.js 2024 ]'+new Date(Date.now()));
// console.log();
// 2024-11-21 08:58:05
// 2024-11-21 09:02:42
// 2024-11-21 09:18:41
// 2024-11-21 09:18:45 rain , not meeting-morning, start working.
//lottery.schedule.moneyManage
// 2024-11-22 00:03:17 record currentTime start.
// How to ensure the life is continue.
let huaBei20241122 = 2482.49 // repaymentDay 12-20
let jieBei20241122 = 349.5 // repaymentDay 12-22
let bankCard20241122 = 8069.98
let weixinChangePocket = 660.42
let eLeMe = 756.48 //12-10

//I need  how much salary . to keep health env.
//20 per month. salary
//4 per month. subsidy

// store data in sqlite3.
// console.log('[ write today status in sqlite3. ]'+new Date(Date.now()));

// If tomorrow  ,6 + 14 +15 =35 *30 =1050.

const express = require('express')
const app = express()
app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/page/index.html')
})
app.listen(3000,()=>{
    console.log('start server at port:3000');
    
})