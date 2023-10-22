import Interceptor from "../../Interceptor/Interceptor";

export function saveStory(body){
    return Interceptor.post("/post/save",body)
}