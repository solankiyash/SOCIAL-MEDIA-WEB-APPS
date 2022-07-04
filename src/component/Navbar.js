import React, { useContext } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import  {MdHomeFilled} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {ImCompass2} from 'react-icons/im'
import {IoMdHeartEmpty} from 'react-icons/io'
import {ContextProvider} from '../Globle/Context'
function Navbar() {
   const {model,openModel,user,loder,logout} = useContext(ContextProvider)
    console.log(model)
    const openForm = () => {
            openModel();
    }
    const userLogout = () => {
            logout();
    }
    const checkUser = () => {
        return !loder ? !loder && user ? <li>{user.displayName}/<span onClick={userLogout}>Logout</span></li>  :<li onClick={openForm}>Register/Login</li> : "..."
    }  
   
  return (
    <div className='navbar'>
        <div className='navbar-first'>
            <div className='navbar-first-image'>
                <img src='./images/instagram.png'/>
                
            </div>
        </div>
        <div className='navbar-middel'>
            <div className='navbar-middel-search'>
             <input type="text" className="navbar-search" placeholder="search" />
             <BiSearchAlt2 className='searchicone' />
            </div>
        </div>
        <div className='navbar-last'>
            <li><MdHomeFilled className='navbar-icone'/></li>
            <li><FaTelegramPlane className='navbar-icone'/></li>
            <li><ImCompass2 className='navbar-icone'/></li>
            <li><IoMdHeartEmpty className='navbar-icone'/></li>
            {checkUser()}
            
        </div>
        </div>
  )
}

export default Navbar