import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import {addDoc, collection} from "firebase/firestore";
import {db, auth} from "../firebase-config";
import {useNavigate} from "react-router-dom";
function CreatePost({isAuth})
{

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");

    // once again must set the function this way
    // useNavigate() hook returns a function that lets you navigate programmatically.
    let navigate = useNavigate();

    // will submit data to firestore.
    // note: must add rules to firestore to allow users to edit DB
    // create post must be gateKept unless logged in.
    const CreatePost = async () => {
                                        // same as title: title, name and field can be combined in JS.
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});
        // If a Promise is passed to an "await" expression, it waits for the Promise to be fulfilled and returns the fulfilled value.
        // only can be used in asynchronous functions.


        //after crerating a post navigate back to the homepage.
    
        navigate("/");
    };

    useEffect(() => {
        // knows what 'isAuth' is because it was passed over from app.js and imported in createPost params.
        if (!isAuth){
            navigate("/login");
        }
    }, []);

    return (
        <div className="CreatePostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label> Title:</label>
                    <input placeholder="Title..." onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label> Post: </label>
                    <textarea placeholder="Post..." onChange={(event) => {
                        setPostText(event.target.value);
                    }}/>
                </div>
                <button onClick={CreatePost}> Submit Post</button>
            </div>
         </div>
    );
}

export default CreatePost;