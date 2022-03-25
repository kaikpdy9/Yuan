import React, {useContext, useEffect, useState} from "react";
import ReviewDetail from "./components/reviewDetail";
import {getReview} from "../../api/review/review";
import {AuthContext} from "../../context/authContext";
import {addReview} from "../../api/review/review";

const Reviews=()=>{

    const {userName}=useContext(AuthContext)

    const [reviewData,setReviewData]=useState({});
    const [loading,setLoading]=useState(true);
    const [uploadReview,setUploadReview]=useState({
        name:userName,
        title:"",
        comment:""
    });


    useEffect(()=>{
        getReview().then((res)=>{
            if(res.status===200){
                setReviewData(res.data.reviewsList)
                setLoading(false)
            }
        })
    },[])

    const onSubmit=event=>{
        event.preventDefault();
        addComment();
        console.log(uploadReview,'upload')
    }

    const onChange= event=>{
        setUploadReview({...uploadReview,[event.target.name]:event.target.value})
    }

    const addComment=()=>{
        const query=uploadReview;
        addReview(query).then((res)=>{
            console.log(res)
        })
    }

    return(
    <div className="Ceviche bg-dark-five">
        <div className="mx-auto pt-40 flex justify-center">
            <div>
            {loading?<div>Null</div>:<ReviewDetail reviewData={reviewData}/>}
            <form className="w-64 max-w-sm" onSubmit={onSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label  className="block text-dark-two md:text-left mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                            title
                        </label>
                    </div>
                    <div className="md:w-2/3">
                            <input name="title" value={uploadReview.title} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label  className="block text-dark-two md:text-left mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                            comment
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name="comment" value={uploadReview.comment} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                    </div>
                </div>
                <div className="md:flex justify-center">
                    <button className="py-2 px-4 rounded bg-dark-two shadow text-dark-five hover:bg-dark-one focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            </div>
        </div>

    </div>)
}

export default Reviews