import React from "react";

const ReviewDetail=({reviewData})=>{

    console.log(reviewData,'review')

    return(
        <div className="px-6 grid-cols-12 grid">
            {reviewData?.map((index,i)=><div className="col-span-3 text-center" key={i}>{index.name}:{index.title}-{index.comment}</div>)}
        </div>
    )
}

export default ReviewDetail