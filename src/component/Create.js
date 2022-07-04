import React,{useContext, useState} from 'react';
import {FaCamera} from 'react-icons/fa'
import {ContextProvider} from '../Globle/Context'
function Create() {
    const {create,user,loader} = useContext(ContextProvider)
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const handelImage = (e) => {
        setImage(e.target.files[0])
    }
    const createPost = e => {
        e.preventDefault();
       create({title,image})
       setTitle("");
       setImage("");

    }
  return (
    <>
    {!loader && user ? <div className='create'>
        <form onSubmit={createPost}>
        <div className='create-input'>
            <input type="text" className='create-inputt' value={title} onChange={e => setTitle(e.target.value)} placeholder='what are in your mind...'/>
        </div>
        <div className='create-second'>
            <div className='create-second-a'>
                <label htmlFor='file'><FaCamera className='camera'/></label>
                <input type="file" id='file' className='file' required onChange={handelImage}/>
            </div>
            <div className='create-second-b'>
                <input type="submit" value="Create" className='btm-sweet'/>
            </div>
        </div>
    </form>
    </div> : ""}
    </>
  )
}

export default Create