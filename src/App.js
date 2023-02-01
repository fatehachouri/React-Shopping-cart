import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartItem from "./components/CartItem";

function App() {
  return (
    
    <div className="container">
    <Header  />
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/cart"  exact element={< CartItem />}/>
    </Routes>
    </div>
  );
}

export default App;
