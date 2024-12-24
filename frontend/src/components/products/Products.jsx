import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './products.css'
import { Link } from "react-router-dom";
function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5125/products/getProducts')
      .then((response) => response.json())
      .then((data) => {
        setData(data.body);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run only once after initial render

  console.log(data,"this is data");

  return (
    
    <div className='d-flex flex-wrap gap-5 container mt-5'>
      {data.map((product) => (
        <div className='d-flex flex-wrap' key={product.productName}>
         <Card className= 'productcard' style={{ width: '18rem' }}>
      <Card.Img  className='productimg' variant="top" src={product.productImage} />
      <Card.Body>
        <Card.Title className='cardtitle'>{product.productDescription}
        </Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" as={Link} to={`/singleProduct/${product._id}`}>Go somewhere</Button>
      </Card.Body>
    </Card> 
        </div>
      ))}
    </div>
  );
}

export default Products;
