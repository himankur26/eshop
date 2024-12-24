import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Addproduct() {
  const [product, setProduct] = useState({
    productName: '',
    originalPrice: '',
    discountPrice: '',
    productDescription: '',
    productQuantity: '',
    productCategory: '',
    productBrand: '',
    productRating: ''
  });
  const [productImage, setProductImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    if (productImage) {
      formData.append('productImage', productImage);
    }

    try {
      const response = await axios.post('http://localhost:5125/products/createProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert ("product added")
      console.log("Product Added:", response.data);
      // Reset form fields
      setProduct({
        productName: '',
        originalPrice: '',
        discountPrice: '',
        productDescription: '',
        productQuantity: '',
        productCategory: '',
        productBrand: '',
        productRating: ''
      });
      setProductImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="productName" 
            value={product.productName} 
            onChange={handleChange} 
            placeholder="Enter product name" 
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Original Price</label>
            <input 
              type="number" 
              className="form-control" 
              name="originalPrice" 
              value={product.originalPrice} 
              onChange={handleChange} 
              placeholder="Enter original price" 
            />
          </div>
          <div className="form-group col-md-6">
            <label>Discount Price</label>
            <input 
              type="number" 
              className="form-control" 
              name="discountPrice" 
              value={product.discountPrice} 
              onChange={handleChange} 
              placeholder="Enter discount price" 
            />
          </div>
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <textarea 
            className="form-control" 
            name="productDescription" 
            value={product.productDescription} 
            onChange={handleChange} 
            placeholder="Enter product description" 
          />
        </div>
        <div className="form-group">
          <label>Product Quantity</label>
          <input 
            type="number" 
            className="form-control" 
            name="productQuantity" 
            value={product.productQuantity} 
            onChange={handleChange} 
            placeholder="Enter quantity" 
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Product Category</label>
            <input 
              type="text" 
              className="form-control" 
              name="productCategory" 
              value={product.productCategory} 
              onChange={handleChange} 
              placeholder="Enter category" 
            />
          </div>
          <div className="form-group col-md-6">
            <label>Product Brand</label>
            <input 
              type="text" 
              className="form-control" 
              name="productBrand" 
              value={product.productBrand} 
              onChange={handleChange} 
              placeholder="Enter brand" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Product Image</label>
          <input 
            type="file" 
            className="form-control" 
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Add Product</button>
      </form>
    </div>
  );
}

export default Addproduct;
