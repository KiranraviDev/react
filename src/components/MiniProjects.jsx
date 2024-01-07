import { Link } from "react-router-dom"
import Ratings from "./Ratings"
import reactimg from "../assets/react.svg"

const MiniProjects = () => {
return(<>
<div className="container p-10 grid justify-center">
<h1 className="text-4xl text-white text-center">Mini Projects</h1>
  <div className="flex justify-center align-bottom gap-2 m-10">
  <img src={reactimg} alt="asd" width={"20px"} />
  <Link to="/api" className=" text-gray-600 hover:text-white align-bottom font-mono">API User Data table using AXIOS</Link>    
  <Ratings/>
  </div>
  </div>
</>

)
}

export default MiniProjects;