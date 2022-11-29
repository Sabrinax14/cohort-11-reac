import './App.css';
import PostCard from './components/PostCard';
import {useState} from "react";
import Button from "./components/Button";
 
function App() {
     // initialize darkmode state variable
     const [darkMode, setDarkmode] = useState(false);

  return (
    <div className= {`App ${darkMode ?'darkmode' : ''} `} >
       <Button
        bgColor="red"
        textColor="aqua"
        borderW="2px"
        onClick={() => setDarkmode(!darkMode)}
       >  
         Click me 
       </Button> 
      
  
      <PostCard
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
        title="Beach"
        isDark= {darkMode}
      />
      <PostCard
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Mountain"
        isDark= {darkMode}
      />
      <PostCard imageSrc="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Desert"
        isDark= {darkMode}
      />
    </div>
  );
}

export default App; 
