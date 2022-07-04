import './App.css';
import Navbar from './component/Navbar';
import { Context } from './Globle/Context';
import Model from './component/Model';
import Stories from './component/Stories';
import Create from './component/Create';
import Post from './component/Post';
function App() {
  
  return (
    <>
  <Context>
      <Navbar/>
      <div className='container'>
        <Stories/>
        <Create/>
        <Post/>
      </div>

      <Model/>
    </Context>
      
  
    
   
    </>
  );
}

export default App;
