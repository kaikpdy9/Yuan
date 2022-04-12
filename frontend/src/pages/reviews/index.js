import React, {useEffect, useState} from "react";
import ReviewDetail from "./components/reviewDetail";
import {getReview} from "../../api/review/review";
import {addReview} from "../../api/review/review";
import {useHistory} from "react-router-dom"

const Reviews=()=>{

    const userName=localStorage.getItem('userName')

    const [reviewData,setReviewData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [empty,setEmpty]=useState(false);
    const [uploadReview,setUploadReview]=useState({
        name:userName,
        title:"",
        comment:""
    });
    const router=useHistory()


    useEffect(()=>{
        const isLogin=localStorage.getItem('isLogin');
        if(isLogin==null){
               router.push('/sign-in')
        }else {
            getReview().then((res)=>{
                if(res.status===200){
                    setReviewData(res.data.reviewsList)
                    console.log(res.data)
                    setLoading(false)
                }
            })
        }
    },[loading])

    const onSubmit=event=>{
        event.preventDefault();
        if(uploadReview.title==""||uploadReview.comment==""){
            setEmpty(true)
        }else {
            addComment();
        }
    }

    const onChange= event=>{
        setEmpty(false)
        setUploadReview({...uploadReview,[event.target.name]:event.target.value})
    }

    const addComment=()=>{
        const query=uploadReview;
        setLoading(true);
        addReview(query
        ).then((res)=>{
            if (res.status===201){
                setLoading(false);
            }
        })
    }

    return(
        <>
    <div className="Ceviche bg-dark-five h-review">
        <div className="pt-40">
        {loading?<div>Null</div>:<ReviewDetail reviewData={reviewData}/>}
        </div>
    </div>
            <div className="Ceviche bg-dark-tow h-submit">
                <div className="mx-auto flex justify-center md:w-2/3">
                    <div className="my-10">
                        <form className="w-full max-w-sm" onSubmit={onSubmit}>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label  className="block text-dark-five md:text-left mb-1 md:mb-0 pr-4"
                                            htmlFor="inline-full-name">
                                        title
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input name="title" value={uploadReview.title} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one  w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label  className="block text-dark-five md:text-left mb-1 md:mb-0 pr-4"
                                            htmlFor="inline-full-name">
                                        comment
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input name="comment" value={uploadReview.comment} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one  w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                                </div>
                            </div>
                            {empty?<div className="block text-dark-two md:text-center text-red-600 text-sm pr-4 mb-3"                                       >
                                * Please Enter Something :(
                            </div>:null}
                            {loading?<div className="md:text-center">loading...</div>:
                            <div className="md:flex justify-center">
                                <button className="py-2 px-4  bg-dark-two shadow text-dark-five hover:bg-dark-one focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </button>
                            </div>}
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reviews