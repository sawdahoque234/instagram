import React ,{useState,useEffect}from 'react';
import './PostDestails.css'
import { useParams } from 'react-router-dom';
import posts from '../Data/posts';
import comments from '../Data/comments';
import LoveImg from "../../img/love.png";

const PostDetails = () => {
const {code}=useParams()
const [showReacts, setShowReacts] = useState(false);
let post=posts.find(post=>post.code===code)
const [like, setLike] = useState(post.likes);
const [allComment,setAllComment]=useState([])
const[comment,setComment]=useState({})

const hiddenObj = {
  display: "none",
};

const showObj = {
  display: "block",
};
//postdata
const handleLike = () => {
    let newLike = like + 1;
    setLike(newLike);
    setShowReacts(true);
    setTimeout(() => {
      setShowReacts(false);
    }, 1000);
  };

//coments
useEffect(()=>{
let myComments = comments[code];
      setAllComment(myComments)
    },[allComment,code])

 const handleCommentWrite=e=>{
    const newComment={...comment,[e.target.name]:e.target.value}
    setComment(newComment)
    e.preventDefault()
    }
 const handleAllComment=e=>{
    allComment.push(comment)
    setComment({})
    e.target.reset()
    e.preventDefault()
    }
    return (
    <div className='detailscard'>
            {/* postdetails START */}
        <div className='postdetails'>
                <img src={post.display_src} alt="" className='detailsimg'/>
                <p className='caption' >{post.caption}</p>
                        {/* showpop-up-ract */}
            <div style={showReacts ? showObj : hiddenObj}>
                <div className="zoom-in-out-details">
                    <div className="cardReactiondetails " >
                        <img src={LoveImg} alt="Love" />
                    </div>
                        <div className="displayLikesdetails ">
                            <h1>{like}</h1>
                        </div>
                    </div>
                </div>
            <div>
                <button onClick={handleLike}>
                    <span class="heart">
                        {" "}
                    <i class="fas fa-heart"></i>
                        </span>
                    <span>{like}</span>
                </button>
                <button>
                    <span>
                    {" "}
                    <i class="far fa-comment-alt"></i>
                </span>
                    <span>{allComment != null ? allComment.length : ""}</span>
                </button>
            </div>
      </div>
            {/* postdetails END */}
            {/* comment START */}
        <div className='comments'>
            {
                allComment.map(comment=> <div className='commentsp'>
                  <small className='user'>   {comment.user}</small>
                    <small>{comment.text}</small>
                    <hr />
                </div>)
            }
            {/* comment ADD*/}
            <form onSubmit={handleAllComment}>
                <div class="input-container">
                    <input type="text" required placeholder='Author'  name="user"   onBlur={handleCommentWrite} />
                </div>
                <div class="input-container">		
                    <input type="text" required placeholder='Comment'  name="text"   onBlur={handleCommentWrite}/>
                </div>
                <button type="submit" class="btn" >Add</button>
            </form>	
        </div>
            {/* comment END */}

 </div>
    );
};

export default PostDetails;