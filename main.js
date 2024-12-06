// write some information for tomorrow into another new file. 2024-12-06 23:23:28

//[0] start execute.2024-12-06 23:30:35

// schedule_to_tomorrow() //test suc:2024-12-06 23:31:37
schedule_to_tomorrow();
//[1] end execute.2024-12-06 23:30:46
function schedule_to_tomorrow() {
  // write tomorrow start status: plan+money.
  const file_stream = require("fs");
  const tomorrow_date = "20241207";
  const file_path = `./thing/` + tomorrow_date + `.txt`;
  let file_content = "hell";
  // infor content need some time.
  file_content += produce_tomorrow_info_start();
  file_stream.writeFile(file_path, file_content, (err) => {
    if (err) {
      console.error("write file happen error:", err);
    } else {
      console.log("msg write suc");
    }
  });
}
function produce_tomorrow_info_start() {
  const china_mobile_phone_bill_balance = 16.9;
  const china_mobile_remaining_traffic_gb = 20.52;
  const china_telecom_phone_bill_balance = 22.91;
  const agricultural_bank_of_china_deposit = 5605.55;
  const repayment_of_online_loans_jb_1222 = -349.5;
  const repayment_of_online_loans_hb_1220 = -111.6;
  const repayment_of_online_loans_hy_1210 = -0; //wait for time launch.

  return 'slot.'
}
