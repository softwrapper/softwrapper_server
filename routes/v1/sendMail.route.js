const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

router.route("/").post(async (req, res) => {
    try {
        const output = `
        <p>You have a new message</p>
  <h3>Contact Details</h3>
  <ul>
  	<li><i>Name: </i>${req.body.name} </li>
    <li><i>Email: </i>${req.body.email} </li>
    <li><i>Service: </i>${req.body.service} </li>
  </ul>
  <h3>Message:</h3>
  <p>${req.body.message}</p>
        
        `;

        let transporter = nodemailer.createTransport({
            host: "mail.softwrapper.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "contact@softwrapper.com", // generated ethereal user
                pass: "jm4]244VcYs*RR", // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `${req.body.name} <${req.body.email}>`, // sender address
            to: "contact@softwrapper.com", // list of receivers
            subject: "Contact request ✔", // Subject line
            text: "Hello world?", // plain text body
            html: output, // html body
        });

        res.status(400).send({ message: "Mail sent. We will contact you sortly" });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't sent email. Please try again later",
            error: error.message,
        });
    }
});

module.exports = router;
