import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
function Product({product}) {
  return (
    <Card className='my-3 p-5 rounded'>
        <a href={`/product/${product._id}` }>
        <Card.Img src={product.image}/>
        </a>
        <Card.Body >
        <a href={`/product/${product._id}`}style={{ textDecoration: 'none'  , color: 'white'}}>
            <Card.Title as='div' >
               <strong> {product.name} </strong>
            </Card.Title>
        </a>
            <Card.Text as='div'>
                <div>
                    <Rating vaule={product.rating} text={product.numReviews} color={'#f8e825'}/> 
                </div>
            </Card.Text>

            <Card.Text as= 'h3'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
