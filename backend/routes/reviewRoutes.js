import {createReview,getReviewList} from "../controllers/reviewController.js";
import express from "express";

const reviewRoutes=express.Router();

reviewRoutes.route('/add').post(createReview)
reviewRoutes.route('/list').get(getReviewList)

export default reviewRoutes
