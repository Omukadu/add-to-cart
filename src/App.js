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

  const handlechange = (item, d) => {
    let ind;
    cart.forEach((data, index) => {
      if (data.id === item.id) 
      ind = index;
    });

    // console.log(ind);
    console.log(item.id);
    const temparr = cart;
    temparr[ind].amount += d;
    if (temparr[ind].amount===0)
    temparr[ind].amount=1;
    setcart([...temparr])
  }; 

  return (
    <div className="App">
      <Navbar size={cart.length} setshow={setshow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setcart={setcart} handlechange={handlechange} />
      )}

      {warning && <div className="warning">Item is already in cart</div>}
      {/* if warning is true then run up statement */}
    </div>
  );
}

export default App;
