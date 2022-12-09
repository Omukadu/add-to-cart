import "./App.css";
import Navbar from "./component/Navbar";
import Amazon from "./component/amazon";
import { useState } from "react";
function App() {
  const [show,setshow]=useState(true);
  const[cart,setcart]=useState([]);

  const Hc = (item)=>{
    
  }

  return (
    <div className="App">
      <Navbar size={cart.length}/>
      <Amazon Hc={Hc}/>
    </div>
  );
}

export default App;
