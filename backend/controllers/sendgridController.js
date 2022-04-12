import sgMail from "@sendgrid/mail"
import asyncHandler from "express-async-handler";
import dotenv from "dotenv"

dotenv.config()

sgMail.setApiKey(process.env.SEND_GRID);
const sendgirdController=asyncHandler(async (req,res)=>{
    const {email,name}=req.body
    console.log(email,name)
    //const registerUrl=`http://zhongyuanyuan.com?redirect=register&email=${email}&name=${name}`
    const registerUrl=`http://localhost:3000?redirect=register&email=${email}&name=${name}`

    const msg = {
        from: 'kaikpdy9@outlook.com', // Use the email address or domain you verified above
        template_id:'d-5dff81d5e9f64b94bf785a7119f6d47c',
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
        console.log(res,'res');
        res.send('good job');
    })
})

export {sendgirdController}