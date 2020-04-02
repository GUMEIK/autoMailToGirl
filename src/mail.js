const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
module.exports = function sendMail(html) {
    // 0. 发送者邮箱厂家
    const EmailService = "163"
    // 1. 定义发送者邮箱账户和SMTP授权码
    const EmailAccount = {
        user: "xxx@163.com",
        pass: "xxxx"
    }
    //  2. 昵称与邮箱地址
    const EmailInfo = `"gumeik"<${EmailAccount.user}>`;
    //  3. 接受者邮箱地址
    const EmailDestination = `xxxx@qq.com`;
    // 4 .邮件主题
    const EmailTopic = "狗子请查收"
    //  5. 传输
    let transporter = nodemailer.createTransport({
        service: EmailService,
        port: 465,
        secureConnection: true,
        auth: EmailAccount
    });
    let mailConfig = {
        // 发送者
        from: EmailInfo,
        // 接受者
        to: EmailDestination,
        // 发送主题
        subject: EmailTopic,
        // 要发送的html文件
        html: html
        // 要发送的文字
        // text:"邮箱测试"
    }
    // 发送邮件
    transporter.sendMail(mailConfig, (error, info) => {
        if (error) {
            // 如果失败了就重新发送
            console.log(error)
            sendMail(html);
        }
        console.log("发送成功")
    })
}

