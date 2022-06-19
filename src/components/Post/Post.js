import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import comments from "../Data/comments";
import LoveImg from "../../img/love.png";
const Post = (props) => {
  const { id,code, caption, likes, display_src } = props.post;
  const [like, setLike] = useState(likes);
  const [showReacts, setShowReacts] = useState(false);
 
  //likefunction
  const hiddenObj = {
    display: "none",
  };
  const showObj = {
    display: "block",
  };
  const handleLike = () => {
    let newLike = like + 1;
    setLike(newLike);
    setShowReacts(true);
    setTimeout(() => {
      setShowReacts(false);
    }, 1000);
  };
  //commentshow
  let myComments = comments[code];
  
  return (
    <div className="card" key={id}>
        <div className="cardimg">
             <Link to={`/postdetails/${code}`}><img src={display_src} alt="" className="postimg" /></Link>
            <div style={showReacts ? showObj : hiddenObj}>
                <div className="zoom-in-out-post">
                    <div className="cardReaction">
                     <img src={LoveImg} alt="Love" />
                    </div>
                    <div className="displayLikes">
                            <h1>{like}</h1>
                    </div>
                </div>
            </div>
        </div>
            <div>
                <p className="caption">{caption}</p>
            </div>
             <div>
                <button onClick={handleLike}>
                <span class="heart">
                
                    <i class="fas fa-heart"></i>
                </span>
                <span>{like}</span>
                </button>
                <button>
                <span>
                    {" "}
                    <i class="far fa-comment-alt"></i>
                </span>
                <span>{myComments != null ? myComments.length : ""}</span>
                </button>
            </div>
    </div>
  );
};

export default Post;
