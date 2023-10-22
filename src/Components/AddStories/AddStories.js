import React, { useState } from 'react'
import { saveStory } from '../../Services/StoryPageService/StoryPageService';

export default function AddStories(props) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [imageBlob, setImageBlob] = useState("");
    const [imageType, setImageType] = useState("");
    const [story, setStory] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    function onSave(e) {
        if (title === "") {
            setError(true);
            setErrorText("Please enter title");
            return
        }
        if (image === "") {
            setError(true);
            setErrorText("Please enter image");
            return
        }
        if (story === "") {
            setError(true);
            setErrorText("Please enter story");
            return
        }
        let date = new Date();
        let day = date.getDate();
        if (day <= 9) {
            day = "0" + day
        }
        let month = date.getMonth()
        month = month + 1
        if (month <= 9) {
            month = "0" + month
        }
        let tempDate = day + "-" + month + "-" + date.getFullYear();
        let imageData = image.split(",")
        let base64 = ""
        imageData.forEach((element, index) => {
            if (index === 1) {
                base64 = element
            }
        });
        let body = {
            "post_id": 0,
            "user_id": sessionStorage.getItem("id"),
            "createdDate": tempDate,
            "imageUrl": base64,
            "title": title,
            "story": story,
            "filetype": imageType
        }
        debugger
        saveStory(body).then((response) => {
            debugger
            props.history.push("/Welcome")
        })
    }
    async function fileUpload(e) {
        const file = e.target.files[0]
        if (file !== undefined && file.type !== "") {
            debugger
            setImageType(file.type);
            const base64 = await convertBase64(file)
            setImage(base64);
        }
    }
    function convertBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    return (
        <div className='bg-black'>
            <div className='col-12 addStories'>
                <div className='row'>
                    <div className='col-8 mt-5'>
                        <div class="form-group">
                            <label for="Title">Title :</label>
                            <input type="text" class="form-control" id="Title" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter Your Story Title" />
                        </div>
                        <div class="form-group">
                            <label for="Image">Image :</label>
                            <input type="file" accept="image/*" class="form-control" id="Image" onChange={e => fileUpload(e)} />
                        </div>
                        <div class="form-group">
                            <label for="Stories">Stories :</label>
                            <textarea class="form-control" id="Stories" placeholder='Add Stories' onChange={e => setStory(e.target.value)} value={story} rows="3"></textarea>
                        </div>
                        <div class="input-box button mt-4 mb-2">
                            <button onClick={e => onSave(e)} >Save</button>
                        </div>
                        {error ? <div className='error'><span className='errorText'>{errorText}</span></div> : null}
                    </div>
                    {image !== "" ?
                        <div className='col-4 imageUpload mt-5'>
                            <img src={image} type={imageType} />
                        </div> : <div className='col-4 noImageUpload mt-5'>
                            <h4>No Image</h4>
                        </div>}
                </div>
            </div>
        </div>
    )
}
