import ProductListItem from "./ProductListItem";
import { useSelector } from "react-redux";

export default function ProductList() {
    const {products} = useSelector(state=>state.product)
  return (
    <div className="row my-4">
        {
            products.map(product => <ProductListItem key={product.id} product={product} />)
        }
    </div>
  )
}
