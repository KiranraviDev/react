import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Products = () => {

const [product,setProduct]=useState([]);
console.log(product);

useEffect(()=>{ //useEffect for server side communication.
   fetch  ("https://fakestoreapi.com/products")
  .then(data => data.json())
  .then(result => {setProduct(result)})
},[])


 const cards = product.map((product,index)=>(
  <Card key={index} style={{ width: '18rem',backgroundColor:"white", color:"back", textAlign:"center",}} className=" hover:border rounded m-5 ">
 <div className="flex justify-center text-center">
  <Card.Img variant="top" src={product.image} style={{borderRadius:"50px", width:"200px",height:"350px",objectFit:"contain"}}/>
  </div>
  <Card.Body>
    <Card.Title style={{color:"black"}}>{product.title}</Card.Title>
    <Card.Text>
    <Card.Title className=" text-center m-2 text-green-700"> <span className="text-green-600"> $ </span>{product.price}</Card.Title>
    </Card.Text>
  
  </Card.Body>
  <div className="py-3"> 
    <Button className=" px-14 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Buy</Button>
  </div>
</Card>
 ))
  return (
    <div className=" grid justify-center">
      <h1 className=" text-5xl text-start justify-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 text-white py-12"> Product Details</h1>
      <div className="bg-white grid">
          <div className="grid grid-cols-5 ">{cards}</div>
      </div>
    </div>
  )
}

export default Products