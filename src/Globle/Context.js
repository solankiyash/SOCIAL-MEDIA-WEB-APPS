import React,{createContext, useState,useEffect} from 'react'
import {auth,db,storage} from "../Config"
import firebase from 'firebase/compat/app';
export const ContextProvider = createContext();
export const Context = (props) => {
    const [model,setModel] = useState(false)
    const [user,setUser] = useState(null)   
    const [loder,setLoder] = useState(true)
   const [posts,setPosts] = useState([]);
    const openModel = () => {
        setModel(true)
    }
   const closemodel = () => {
     setModel(false)
   }
   const registration = async (user) => {
      const {username,email,password} = user
      try {
        const res =  auth.createUserWithEmailAndPassword(email,password)
      res.user.updateProfile({displayName:username})
      setModel(false)
      } catch (error) {
        console.log("errow")
      }
   }
   const login = async (user) => {
      const {email,password} = user;
      const res = await auth.signInWithEmailAndPassword(email,password)
      setModel(false)
   }
   const logout = () => {
     auth.signOut().then(()=>{
       setUser(null)
     })
     .catch((err)=>{
       console.log(err);
     });
   }
   const create = data => {
    const {title,image} = data
    const upload = storage.ref(`images/${image.name}`).put(image)
          upload.on("state_changed", (snp) => {
              let progress = (snp.bytesTransferred /snp.totalBytes) * 100;
              console.log(progress);
          },(err) => {
            console.log(err)
          }, () => {
            //success function /complate function
            storage.ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url  => {
              db.collection("posts").add({
                title,
                image : url,
                username : user.displayName,
                currentTime : firebase.firestore.FieldValue.serverTimestamp(),
  
              })
            })
           
          })
   }
   const publishcomment = (data) => {
     const {id,comment} = data;
     db.collection("posts").doc(id).collection("comments").add({
       comment,
       username:user.displayName,
       currentTime:firebase.firestore.FieldValue.serverTimestamp() 
     }) 

   }
   useEffect(()=> {
     auth.onAuthStateChanged((user) => {
       setUser(user);
       setLoder(false)
     })
     // fetch posts from fierbase
     db.collection("posts").orderBy("currentTime","desc").onSnapshot((snp) => {
       setPosts(snp.docs.map(doc => (
         {
           id:doc.id,
           title:doc.data().title,
           image:doc.data().image,
           username:doc.data().username,
         }
       )))
     })
    
   },[]);
   console.log("login user ",user)
   
   
   
  return (
    <ContextProvider.Provider value={{model,openModel,closemodel,registration,login,user,loder,logout,create,posts,publishcomment}}>
            {props.children}
    </ContextProvider.Provider>
  )
}
export default Context;