import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    // const {cartItems}=useContext(ShoppingContext)
    const {cartItems} = useSelector(state=>state.cart)

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
    <Link to='/' className="navbar-brand" >React Shopping Cart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/cart' className="nav-link" ><i className="bi bi-cart-check"></i>({cartItems.length})</Link>
        </li>
      </ul>

    </div>
     </div>
</nav>
    </div>
  )
}
