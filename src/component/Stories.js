import React,{useState} from 'react'
function Stories() {
    const [state,setState] =  useState([
        {id:1,images:"./images/Snapchat-641042326.jpg",name:"solanki yash"},
        {id:2,images:"./images/IMG_6079.jpeg",name:"keyur shah"},
        {id:3,images:"./images/IMG_6083.jpeg",name:"naishal"},
        {id:4,images:"./images/IMG_6089.jpeg",name:"Dheye"},
        {id:5,images:"./images/IMG_6116.jpeg",name:"krunal"},
        {id:6,images:"./images/IMG_6107.jpeg",name:"vedang"},
        {id:7,images:"./images/maa.jpg",name:"maa"},
        {id:8,images:"./images/istockphoto-517188688-612x612.jpg",name:"nature"},
    ])
    
  return (
    <div className='stories'>
            {state.map(user => {
                return(
                    
                    <div className='stories_info' key={user.id}>
                        <div className='slider__img'>
                            <span>
                                <img src={user.images} />
                            </span>
                        </div>
                        <div className='stories_name'>
                            {user.name}
                        </div>
                    </div>
                    
                )
            })}
        
    </div>
  )
}

export default Stories