import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singleProduct.css"
import { Link } from "react-router-dom";
import { useAuth } from "../../store/Auth";


function SingleProduct({item}) {
  const {addToCart} = useAuth()
  const { id } = useParams();
  const [product, setProduct] = useState(null); 

  const [error, setError] = useState(null);
  const [quantity, setquantity] = useState(1);

  const incrementQuantity = ()=>{
    if (quantity < product.productQuantity) {
      setquantity(quantity + 1);
    }
  }


const decrementQuantity = () => {
  if (quantity > 1) {
    setquantity(quantity - 1);
  }
};

const handleAddToCart = () => {
  console.log("Added to cart:", {
    productId: {id},
    quantity: quantity,
  });
  const cartItem = {
    _id:{id},
    quantity: quantity,
  }
  addToCart(cartItem)
};


const handleBuyNow = () => {
  console.log("Buy now clicked for product:", {
    productId: product._id,
    quantity: quantity,
  });
};

const handleShare = () => {
  console.log("Share product:", product.productName);
  alert(`Share this product: ${window.location.href}`);
};
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5125/products/singleProduct/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch product data");
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.body) {
            setProduct(data.body);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error.message);
        });
    }
  }, [id]); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container-fluid single-product-page">
  <div className="container product-container">
    <div className="row">
      <div className="col-lg-6 col-md-6 product-image-container">
        <img
          src={product.productImage}
          alt={product.productName}
          className="img-fluid product-image"
        />
      </div>
      <div className="col-lg-6 col-md-6 product-details">
        <div className="title product-title">{product.productName}</div>
        <div className="desc product-description">
          Description: {product.productDescription}
        </div>
        <div className="brand1 product-brand">Company: {product.productBrand}</div>
        <div className="price product-price">Regular Price: $ {product.originalPrice}</div>
        <div className="discountprice product-discount-price">
          Offer price: $ {product.discountPrice}
        </div>
        <div className="category product-category">
          Category: {product.productCategory}
        </div>
        <div className="quantity product-quantity">
        {product.productQuantity - quantity} pieces available
        </div>

        {/* Quantity, Add to Cart, Buy Now, and Share */}
        <div className="quantity-control">
          <button onClick={decrementQuantity} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={incrementQuantity}
            disabled={quantity === product.productQuantity}
          >
            +
          </button>
        </div>
        <div className="action-buttons">
          <button onClick={handleAddToCart} className="btn btn-add-to-cart">
            Add to Cart
          </button>
          <button onClick={handleBuyNow} className="btn btn-buy-now"> <Link to={`/buynow/${product._id}`} className="text-decoration-none text-white"> Buy Now  </Link>
          </button>
          
          <button onClick={handleShare} className="btn btn-share">
            Share
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default SingleProduct;
