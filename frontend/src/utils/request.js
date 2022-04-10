import axios from "axios";

const service =axios.create({
//  baseURL:"http://zhongyuanyuan.com",
    baseURL:"http://localhost:2026",
    timeout:600000
})

// Interceptor

service.interceptors.request.use((config)=>{
    config.headers['Access-Control-Allow-Origin']='*';
    return config;
})

export default service