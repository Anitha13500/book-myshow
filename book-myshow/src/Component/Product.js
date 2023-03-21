import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "./Product.css"
const Product = ({product}) => {
  console.log("product",product)
  return (
    <div>
       <Card sx={{ maxWidth:270 }}>
      
        <CardMedia
          component="img"
          height="450"
          image={product.image}
        /> 
        </Card>
        <div className='prohead'>
          <h2> {product.MovieName}</h2>
          <h5>{product.Discription}</h5>
        </div>
    </div>
  )
}

export default Product
