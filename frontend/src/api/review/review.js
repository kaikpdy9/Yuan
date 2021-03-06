import axios from "../../utils/request";

const api={
    getReviewList:'/api/review/list',
    addReview:'/api/review/add'
}

export default api;

export const getReview=()=>{
    return axios({
        url:`${api.getReviewList}`,
        method:'get',
    })
}

export const addReview=(params)=>{
    console.log(params,'p')

    return axios({
        url:`${api.addReview}`,
        method:'post',
        data:params
    })
}