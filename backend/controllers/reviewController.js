import Review from "../model/reviewModel.js";
import asyncHandler from "express-async-handler";

//  @desc Create a new review
//  @route POST /api/review/add
//  @access Public

const createReview = asyncHandler(async (req,res)=>{
    const {name,comment,title}=req.body

    const review =await Review.create({
        name,
        comment,
        title
    })
    if(review){
       res.status(201).json({
           name:review.name,
           title:review.title,
           comment:review.comment,
       })
    }else {
        res.status(400)
        throw new Error('Invalid review data')
    }
})

//  @desc View List
//  @route GET /api/review/list
//  @access Public
const getReviewList=asyncHandler(async (req,res)=>{
    const reviews= await Review.find({})
    const reviewsList={
        statusCode:'k-000000',
        reviewsList:reviews
    }
    res.json(reviewsList)
})

export {createReview,getReviewList}