import "./App.css";
import Navbar from "./component/Navbar";
import Amazon from "./component/amazon";
import Cart from "./component/Cart";
import { useState } from "react";
function App() {
  const [show, setshow] = useState(true);
  const [cart, setcart] = useState([]);
  const [warning, setwarning] = useState();

  const handleClick = (item) => {
    let ispresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) {
        ispresent = true;
      }
    });

    if (ispresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    } else {
      //written by own
      setcart([...cart, item]);
    }
  };

  const handlechange = (item,d) => {
    
  }

  return (
    <div className="App">
      <Navbar size={cart.length} setshow={setshow} />
      {
        show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} set={setcart} handlechange={handlechange} />
      }
      
      
      {warning && <div className="warning">Item is already in cart</div>}
      {/* if warning is true then run up statement */}
    </div>
  );
}

export default App;
