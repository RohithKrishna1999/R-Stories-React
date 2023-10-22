import React, { useEffect, useState } from 'react'
import { dislike, getAllPosts, getTop10Posts, likeIt } from '../../Services/HomePageService/HomePageService'
import profile from '../../Asserts/Images/profile.webp';
export default function LandingPage(props) {
    const [posts, setPosts] = useState([]);
    const [top10Posts, setTop10Posts] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        let id = sessionStorage.getItem("id");
        if (id) {
            getAllPosts(id).then((response) => {
                setPosts(response.data);
            })
            getTop10Posts(id).then((response) => {
                debugger
                let data = response.data
                setTop10Posts(data);
            })
        }
    }, [])
    function like(post_id) {
        debugger
        let userId = sessionStorage.getItem("id")
        let body = {
            "post_id": post_id,
            "user_id": userId,
            "sno": 0,
            "type": "1",
            "comments": ""
        }
        likeIt(body).then((response) => {
            let tempPosts = [...posts]
            tempPosts.forEach(element => {
                if (element.post_id === post_id) {
                    element.liked = 1
                    element.likes = element.likes + 1
                }
            });
            setPosts(tempPosts)
            let temp10Posts = [...top10Posts]
            temp10Posts.forEach(element => {
                if (element.post_id === post_id) {
                    element.liked = 1
                    element.likes = element.likes + 1
                }
            });
            setTop10Posts(temp10Posts)
        })
    }
    function dislikePost(post_id) {
        let userId = sessionStorage.getItem("id")
        let body = {
            "post_id": post_id,
            "user_id": userId,
            "sno": 0,
            "type": "1",
            "comments": ""
        }
        dislike(body).then((response) => {
            let tempPosts = [...posts]
            tempPosts.forEach(element => {
                if (element.post_id === post_id) {
                    element.liked = 0
                    if (element.likes !== 0) {
                        element.likes = element.likes - 1
                    }
                }
            });
            setPosts(tempPosts)
            let temp10Posts = [...top10Posts]
            temp10Posts.forEach(element => {
                if (element.post_id === post_id) {
                    element.liked = 0
                    if (element.likes !== 0) {
                        element.likes = element.likes - 1
                    }
                }
            });
            setTop10Posts(temp10Posts)
        })
    }
    function goToAddStories() {
        props.history.push("/addStories")
    }
    function view(e,item){
        debugger
        props.history.push({pathname:"/view",item});
    }
    return (
        <div className='bg-black'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-5'>

                    </div>
                    <div className='col-5 align-item-center d-flex searchDiv'>
                        <input type='text' value={search} placeholder='Search here' />
                        <h6 className='addPosts d-flex' onClick={e => goToAddStories(e)}>Add Post <span class="material-icons">
                            add_circle
                        </span></h6>

                    </div>
                    <div className='col-2'>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <div class="row">
                    <h5 className='headingoftop d-flex'>Top 10 Liked <span class="material-icons">
                        favorite
                    </span></h5>
                    <section class="articles">
                        {top10Posts.map((item) => {
                            return (
                                <article>
                                    <div class="article-wrapper">
                                        <span className='profile d-flex'><img src={profile} alt="" /><span><p>{item.username}</p></span></span>
                                        <figure>
                                            <img src={`data:${item.filetype};base64,${item.imageUrl}`} type={item.filetype} alt="no image" />
                                        </figure>
                                        <span className='icons d-flex'>
                                            {item?.liked === 0 ? <>
                                                <span class="material-icons" onClick={e => like(item.post_id)}>
                                                    favorite_border
                                                </span> {item?.likes}</> : <>
                                                <span class="material-icons" onClick={e => dislikePost(item.post_id)}>
                                                    favorite
                                                </span>{item?.likes}</>
                                            }<span class="material-icons ml-2">
                                                comment
                                            </span></span>
                                        <div class="article-body" onClick={e=>view(e,item)}>
                                            <h5>{item?.title}</h5>
                                            <p className='ellipsis-container'>
                                                {item?.story}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                    <div className='mb-3'></div>

                </div>
                <div class="row">
                    <h5 className='headingoftop d-flex'>Posts <span class="material-icons">
                        favorite
                    </span></h5>
                    <section class="articles">
                        {posts.map((item) => {
                            return (
                                <article>
                                    <div class="article-wrapper">
                                        <span className='profile d-flex'><img src={profile} alt="" /><span><p>{item.username}</p></span></span>
                                        <figure>
                                            <img src={`data:${item.filetype};base64,${item.imageUrl}`} alt="no image" />
                                        </figure>
                                        <span className='icons d-flex'>
                                            {item?.liked === 0 ? <>
                                                <span class="material-icons" onClick={e => like(item.post_id)}>
                                                    favorite_border
                                                </span> {item?.likes}</> : <>
                                                <span class="material-icons" onClick={e => dislikePost(item.post_id)}>
                                                    favorite
                                                </span>{item?.likes}</>
                                            }<span class="material-icons ml-2">
                                                comment
                                            </span></span>
                                        <div class="article-body">
                                            <h5>{item?.title}</h5>
                                            <p className='ellipsis-container'>
                                                {item?.story}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                    <div className='mb-3'></div>

                </div>
            </div>
        </div>
    )
}
