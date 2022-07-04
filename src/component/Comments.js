import React, { useContext, useState,useEffect } from 'react'
import {db} from '../Config'
import {ContextProvider} from '../Globle/Context'
function Comments(props) {
    const {loder,user,publishcomment} = useContext(ContextProvider)
    const [state,setState] = useState("");
    const [comment,setComments] = useState([]);
    const postcomment = (e) => {
        e.preventDefault();
        publishcomment({id:props.id,comment: state})
        setState("");
    }
    useEffect(() => {
        db.collection("posts").doc("props.id").collection("comments").orderBy("currentTime","desc").onSnapshot(snp => {
            setComments(snp.docs.map(doc => doc.data()))
        })
    })
  return (
    <div className='comments'>
        {comment.map(comment => {
            <div className='comments-container' key={comment.id} >
                <div className='comments-container-name'>{comment.username}</div>
                <div className='comments-container-comment'>{comment.comment}</div>

            </div>
        })}
            <div className='comments-section'>
                <form onSubmit={postcomment}>
               {!loder && user ?  <input type="text" required  className="comments-input" placeholder="Add a comment..." onChange={(e) => setState(e.target.value)} value={state}/> : ""}
               </form>
            </div>
        </div>
        
  )
}

export default Comments