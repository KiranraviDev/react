import axios from "axios"
import {useState,useEffect} from "react"
const Products = () => {

  // useState Hook

  const [product,setProduct]=useState([])

  useEffect(()=>{

    //API Fetch using Axios.
    axios.get("https://fakestoreapi.com/products")
  .then((res)=>{setProduct(res.data)})  
   console.log(product) 
  },[])
  return (
    <div>
     {product.map((product,index)=>{

      <p key={index}>{product.category}</p>
     })}
    </div>
  )
}

export default Products


// once we get the data -> then update the data.
// 