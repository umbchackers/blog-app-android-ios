import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
function Home() {
  // needs to access all the lists from firestore

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  // "id" is imported from the webpage 
  const deletePost = async (id) => {
    // delete doc requires a document specification parameter.
    // within that parameter we will need to find the ID, however, we've imported that already.
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc) ;
    window.location.reload();
  }

  useEffect(() => {
    // have to make another function because it must be asynchronous.
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);


      // console.log(data);
      // the ... operator creates a deep copy of the elements of the field.
      // this is showing the data much more simply compared to just logging 'data'
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (<div className="post">

          <div className="postHeader">

            <div className="title">
              <h1> {post.title} </h1>
            </div>
            <div className="deletePost">
              <button onClick={
                () => {deletePost(post.id);}
              }> X </button>
            </div>
          </div>
          <div className="postTextContainer"> {post.postText} </div>
          <div className="author"> @{post.author.name}</div>
        </div>
        );
      })}
    </div>
  );
}

export default Home;