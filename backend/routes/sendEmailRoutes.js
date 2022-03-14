import express from "express";
import {sendgirdController} from "../controllers/sendgridController.js";

const sendEmailRoutes=express.Router();

sendEmailRoutes.route('/').post(sendgirdController)

export default sendEmailRoutes