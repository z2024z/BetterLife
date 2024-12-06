// write some information for tomorrow into another new file. 2024-12-06 23:23:28

//[0] start execute.2024-12-06 23:30:35

// schedule_to_tomorrow() //test suc:2024-12-06 23:31:37
schedule_to_tomorrow()
//[1] end execute.2024-12-06 23:30:46
function schedule_to_tomorrow() {
  // write tomorrow start status: plan+money.
  const file_stream = require("fs");
  const tomorrow_date = '20241207'
  const file_path = `./thing/`+tomorrow_date+`.txt`;
  const file_content = "hell";
  file_stream.writeFile(file_path, file_content, (err) => {
    if (err) {
      console.error("write file happen error:", err);
    } else {
      console.log("msg write suc");
    }
  });
}
