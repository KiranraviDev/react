import { Link } from "react-router-dom"
import reactimg from "./assets/react.svg"
import Ratings from "./components/Ratings"

const Home = () => {
  return (<>    
  <div className="w-full">
        <div className="flex justify-start items-start bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <h1 className="text-5xl p-10 text-black">Portfolio</h1>
        </div>
        <hr />
        <div className="text-center p-5 bg-gray-900">
            <h1 className="text-4xl text-white">Mini Projects</h1>
        <ol className="text-center m-10">
            <li>
            <div className="flex justify-center align-bottom gap-2">
            <img src={reactimg} alt="asd" width={"20px"} />
            <Link to="/api" className=" text-gray-600 hover:text-white align-bottom font-mono">API User Data table using AXIOS</Link>    
            <Ratings/>
            </div>
            {/*  */}
        
        </li>
        </ol>
        </div>
       
    </div>
    </>

  )
}

export default Home