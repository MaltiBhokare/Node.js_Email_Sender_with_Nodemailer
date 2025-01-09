const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "yogitabhokare2003@gmail.com",
            pass: "kvag lyqf bshw hbuo"

        }
    });

    const receiver = {
        from : "yogitabhokare2003@gmail.com",
        to : "maltibhokare2003@gmail.com",
        subject : "Node Js Mail Testing!",
        text : "Hello this is a text mail!"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
});

server.listen(4000);