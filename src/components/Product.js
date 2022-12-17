import { useState } from "react";

const Product = ({id,title, thumbnail, description, price}) => {
    const [readmore, setReadmore] = useState(false)
    return ( 
        <div className="product-box">
            <div className="product-img-wrap">
                <img src={thumbnail} alt={title} className="product-img" />
            </div>
            <div className="product-content-wrap">
                <div className="product-price-title-wrap">
                    <h4>{title}</h4>
                    <p>{price}</p>
                </div>
                <span>{readmore ? description : `${description.substring(0,30)}...`}</span>
                <button onClick={() => setReadmore(!readmore)}>
                    {readmore ? "Read less" : "Read More"}
                </button>
            </div>
        </div>
     );
}
 
export default Product;