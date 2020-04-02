const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
// 0. 发送者邮箱厂家
const EmailService = "163"
// 1. 定义发送者邮箱账户和SMTP授权码
const EmailAccount = {
    user:"xxx@163.com",
    pass:"xxx"
}
//  2. 昵称与邮箱地址
const EmailInfo = `"gumeik"<${EmailAccount.user}>`;
//  3. 接受者邮箱地址
const EmailDestination = `xxx@qq.com`;
// 4 .邮件主题
const EmailTopic = "狗子请查收"
//  5. 传输
let transporter = nodemailer.createTransport({
    service: EmailService,
    port: 465,
    secureConnection: true,
    auth: EmailAccount
});

//  6. 读取文件并发送
fs.readFile(`${__dirname}/demo.html`,(err,data) =>{
    if(!err){
        let mailConfig = {
            // 发送者
            from:EmailInfo,
            // 接受者
            to:EmailDestination,
            // 发送主题
            subject:EmailTopic,
            // 要发送的html文件
            html:data
            // 要发送的文字
            // text:"邮箱测试"
        }
        transporter.sendMail(mailConfig,(error,info)=>{
            if(error){
                console.log(error)
                return;
            }
            console.log("发送成功")
        })
    }else{
        console.log(err)
    }
})
