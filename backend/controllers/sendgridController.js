import sgMail from "@sendgrid/mail"
import asyncHandler from "express-async-handler";
import dotenv from "dotenv"

dotenv.config()

sgMail.setApiKey(process.env.SEND_GRID);
const sendgirdController=asyncHandler(async (req,res)=>{
    console.log('hi')
    const {email,name}=req.body
    console.log(email,name)
    const registerUrl=`http://zhongyuanyuan.com/review?email=${email}&name=${name}`

    const msg = {
        from: 'kaikpdy9@outlook.com', // Use the email address or domain you verified above
        template_id:'d-07e5069cc1554f3ca8d1c517d315e4d6',
        personalizations:[
            {
                to:[{
                    email:email
                }],
                dynamic_template_data:{
                    "userName":name,
                    "registerUrl":registerUrl
                }
            }
        ]
    };
    sgMail.send(msg).then(()=>{
        console.log('well')
        res.send('good job')
    })
})

export {sendgirdController}