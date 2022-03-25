import React from "react";

const ReviewDetail=({reviewData})=>{

    console.log(reviewData,'review')

    return(
        <div>
            {reviewData?.map((index,i)=><div key={i}>123123</div>)}
        </div>
    )
}

export default ReviewDetail