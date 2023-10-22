import Interceptor from "../../Interceptor/Interceptor";

export function getAllPosts(userId){
    return Interceptor.get(`/post/AllPosts?id=${userId}`);
}
export function getTop10Posts(userId){
    return Interceptor.get(`/post/TopPosts?id=${userId}`);
}
export function getUserIdByToken(userId){
    return Interceptor.get(`/ops/getUserIdByToken?token=${userId}`);
}
export function likeIt(body){
    return Interceptor.post(`/ops/postOps`,body);
}
export function dislike(body){
    debugger
    return Interceptor.post(`/ops/dislike`,body);
}