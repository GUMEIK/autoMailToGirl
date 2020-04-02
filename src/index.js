const sendMaill = require("./mail");
const schedule = require("./schedule");
const createHtmlFIle = require("./crawer");
schedule(() => {
    const htmlData = createHtmlFIle();
    sendMaill(htmlData)
})