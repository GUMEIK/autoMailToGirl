const schedule = require("node-schedule");
module.exports = (callback) => {
    //比如:每天6点30分执行
    let rule = new schedule.RecurrenceRule();
    // 从周一到周六的六点三十分分执行，参数为数组。
    // 每周的某一天执行，参数为一个数字
    rule.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule.hour = 6;
    rule.minute = 30;
    let j = schedule.scheduleJob(rule, function () {
        callback()
    });
    if(false){
        j.cancel()
    }
}