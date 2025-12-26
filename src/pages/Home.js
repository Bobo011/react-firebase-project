import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { auth } from "../firebase-config";
const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([]);
  //postsCollectionRef stands for posts collection reference
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    //doc takes 3 arguments db which is the Database, collection which is the collection name, and id which is the document id
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const postData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPostLists(postData);
    };
    getPosts();
  }, [postsCollectionRef]);
  return (
    <div className="homePage">
      {postLists.map((post) => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
           {isAuth && post.author.id === auth.currentUser.uid && <div className="deletePost">
              <button onClick={() => deletePost(post.id)}>&#128465;</button>
            </div>}
          </div>
          <div className="postTextContainer">
            <p>{post.postText}</p>
          </div>
          <h3>@{post.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
