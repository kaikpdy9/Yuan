import axios from "../../utils/request";

const api={
    registerAccount:'/api/users',
    sendRegisterMail:'/api/send-email'
}

export default api;

export const register=(params)=>{
    return axios({
        url:`${api.registerAccount}`,
        method:'post',
        data:params
    })
}

export const sendMail=(params)=>{
    return axios({
        url:`${api.sendRegisterMail}`,
        method:'post',
        data:params
    })
}
