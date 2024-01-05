import {  useState } from "react";
// import { useEffect } from "react";
import axios from "axios";


const FetchData = () => {
const[fetchedData,setFetchedData] = useState([]);
console.log(fetchedData);
const handleFetchData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setFetchedData(res.data)})
        .catch((err)=>{console.error(err);})

}
// useEffect Fetching
// useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{setFetchedData(res.data)})
//     .catch((err)=>{console.error(err);})
// },[])


  return (
<>    
  <div className="text-center bg-black">
      <h1 className=" text-3xl p-10 text-yellow-300"> Data Fetching From JSON using Axios</h1> 
      <button onClick={handleFetchData} className=" text-black bg-yellow-600 p-4 m-2 text-2xl rounded-lg">Fetch Data</button>

      <hr />
  </div>
  <div className="grid items-start bg-black text-white">
    <table>
        <thead className=" text-yellow-400 text-start ">
            <td>ID</td>          
              <td>Name</td>             
               <td>Email</td>           
                   <td>Adderess</td>
        </thead>
        <tbody className="text-start">
            {
                fetchedData.map((user,index)=>{
                    return <tr key={index}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.address.city}</td>
                    </tr>

                })
            }
        </tbody>
    </table>
  </div>
</>

  )
}
10
export default FetchData;