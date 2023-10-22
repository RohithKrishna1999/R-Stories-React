import React, { useEffect, useState } from 'react'
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';

export default function StoryPageView(props) {
    const [item, setItem] = useState({});
    useEffect(() => {
        debugger
        setItem(props.history.location.item);
        // if (window.performance) {
        //     console.info("window.performance works fine on this browser");
        // }
        // if (window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD) {
        //     props.history.push("/Welcome")
        // }
    }, [])
    return (
        <>
        <Header history={props.history}></Header>
        <div className='bg-black'>
            <div className='col-12 viewStories'>
                <div className='row'>
                    <div className='col-8 mt-5'>
                        <div class="form-group">
                            <label for="Title">Title :</label>
                            <h5 id="Title">{item?.title}</h5>
                        </div>
                        <div class="form-group">
                            <label for="Stories">Stories :</label>
                            <p id="Stories">{item?.story}</p>
                        </div>
                    </div>
                    {item?.image !== "" ?
                        <div className='col-4 imageUpload mt-5'>
                            <img src={`data:${item?.filetype};base64,${item?.imageUrl}`} type={item?.filetype} />
                        </div> : <div className='col-4 noImageUpload mt-5'>
                            <h4>No Image</h4>
                        </div>}
                </div>
            </div>
        </div>
        <Footer history={props.history}></Footer>
        </>
    )
}
