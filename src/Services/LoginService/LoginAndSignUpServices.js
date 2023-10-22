import Interceptor from "../../Interceptor/Interceptor";

export function loginToAccount(body){
    return Interceptor.post("/api/login",body)
}
export function signUpToAccount(body){
    return Interceptor.post("/api/save",body)
}
export function getUsername(id){
    return Interceptor.get(`/api/getUserById?id=${id}`)
}