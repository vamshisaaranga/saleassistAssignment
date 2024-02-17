import { FaIndianRupeeSign } from "react-icons/fa6";
import "./index.css"

const ProductItem = (props) => {
    const {product} = props 
    const {image,title,price} = product
    const images = image.slice(1,image.length-1)
    const titles = title.slice(1,title.length -1)
    const mathPrice = Math.ceil(price)
    return (
        <div className="product-container">
            <img src={images} alt="" className="product-image"/>
            <p className="product-title">{titles}</p>
            <div className="card-price-container">
            < FaIndianRupeeSign className="rupee-icon"/>
            <p className="product-price">{mathPrice}</p>
            </div>
        </div>
    )
}

export default ProductItem