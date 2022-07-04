import React, { useContext } from 'react'
import {ContextProvider} from '../Globle/Context'
import Comments from './Comments'
function Post() {
       const {posts} = useContext(ContextProvider)
  return (
    <>
    {posts.map(post => (
            <div className='posts'>
            <div className='posts-header'>
                <div className='posts-header-avator'>Y</div>
                <div className='posts-header-name'>SOLANKI YASH</div>
            </div>
            <div className='posts-img'>
                <img src={post.image} alt={post.image}/>
            </div>
            <Comments id={post.id}/>
        </div>
    ))}
  
      

    
    </>
   )
}

export default  Post;