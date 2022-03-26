import React from "react";

const ReviewDetail=({reviewData})=>{

    console.log(reviewData,'review')

    return(
        <div>
            {reviewData?.map((index,i)=><div key={i}>{index.name}: {index.title}</div>)}
        </div>
    )
}

export default ReviewDetail