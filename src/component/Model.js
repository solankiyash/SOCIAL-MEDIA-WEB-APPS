import React, { useContext,useState } from 'react'
import {ContextProvider} from '../Globle/Context'
import {IoMdClose} from 'react-icons/io'
function Model() {
    const {model,closemodel,registration,login} = useContext(ContextProvider)
    const [state,setState] = useState({
        register:true,
        login:false,
    })
    const [input,setInput] = useState({
        username:"",
        email:"",
        password:""
    })
    const handelInput = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    const loginform = () => {
        setState({
            ...state,
            register:!state.register,
            login:!state.login
        })
    }
    const registerform = (e) => {
        e.preventDefault();
        console.log(input)
        registration(input)
      setInput({username:"",email:"",password:""})
    }
    const userLogin = (e) => {
            e.preventDefault()
            login(input)
            setInput({email:"",password:""})
    }
  return <>
      {model ? <div className='model' >
        <div className='model-container'>
            {state.register ?<div className='model-form'>
                <form onSubmit={registerform}>
                            <div className='model-group'>
                                <img src='./images/instagram.png'/>
                                <IoMdClose className='close-icone' onClick={closemodel}/>
                            </div>
                            
                    <div className='model-group'>
                        <input type='text' name='username'className='model-input' placeholder='Username...' onChange={handelInput} value={input.username} required/>
                    </div>
                    <div className='model-group'>
                        <input type='email' name='email'className='model-input' placeholder='Email'onChange={handelInput} value={input.email}required/>
                    </div>
                    <div className='model-group'>
                        <input type='password' name='password'className='model-input' placeholder='Password'onChange={handelInput} value={input.password}required/>
                    </div>
                    <div className='model-group'>
                        <input type="submit" value="Register" className="btn-btn-smart"/>
                    </div>
                    <div className='model-group'>
                        <span onClick={loginform}>Already have an account ?</span>
                    </div>
                    
                </form>
            </div>:<div className='model-form'>
                <form onSubmit={userLogin}>
                            <div className='model-group'>
                                <img src='./images/instagram.png'/>
                             <IoMdClose className='close-icone' onClick={closemodel}/>
                            </div>
                    <div className='model-group'>
                        <input type='email' name='email'className='model-input' placeholder='Email'onChange={handelInput} value={input.email} required/>
                    </div>
                    <div className='model-group'>
                        <input type='password' name='password'className='model-input' placeholder='Password'onChange={handelInput} value={input.password} required/>
                    </div>
                    <div className='model-group'>
                        <input type="submit" value="Login" className="btn-btn-smart"/>
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                    <div className='model-group'>
                        <span onClick={loginform}>Create a new account ?</span>
                    </div>
                </form>
            </div>}
            
        </div>
        </div> : ""}
    </>
  
}

export default Model