import axios from "axios";

const Interceptor = axios.create({
    baseURL:"http://localhost:8083/"
});
Interceptor.interceptors.request.use(async config=>{
    config.headers["Content-Type"]="application/json"
    return config;
});
export default Interceptor;