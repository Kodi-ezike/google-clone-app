import './App.css';
import logo from "./sidehustle-logo.png";
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardVoice } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { IoLeaf } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";


function App() {
  <script src="https://kit.fontawesome.com/c0bb1150f1.js" crossorigin="anonymous"></script>
  return (
    <div className="App">
      <div className='container'>
        <div className='mobile'>
          <IoMenuOutline className='bar'/>
          <p className='all'>ALL</p>
          <p className='mobile-images'>IMAGES</p>
        </div>

        <div className='header'>
        <p className='gmail'>Gmail</p>
        <p className='images'>Images</p>
        <CgMenuGridR className='menu'/>
        <p className='user'>U</p>
      </div>
      </div>
      
      
      <div className="logo">
         <img src={logo} alt="logo"></img>
         
      </div>
      <div className="main">
        <FaSearch className='search-icon'/>
          <input/>
        <MdKeyboardVoice className='voice'/>  
      </div>
      <div className='options'>
        <button>Google Search</button>
        <button>I'm feeling lucky</button>
      </div>
      <p className='offer'>Google offered in:&nbsp;<span className="language">  Hausa&nbsp; Igbo&nbsp; Èdè Yorùbá&nbsp; Nigerian Pidgin</span> </p>
   
      <footer>
        <p className='country'>Nigeria</p>
        <div className='links'>
          <div className='one'>
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p className='search'>How Search works</p>
          </div>
          <div className='two'><p ><IoLeaf className='leaf'/> Carbon neutral since 2007</p></div>
          
          <div className='three'>
            
              <p>Privacy</p>
              <p>Terms</p>
              <p>Settings</p>
            
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
