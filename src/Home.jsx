import { Link } from "react-router-dom"
import reactimg from "./assets/react.svg"

const Home = () => {
  return (<>    
  <div className="w-full">
        <div className="flex justify-center bg-black">
        <img src={reactimg} alt="asd" width={"70px"} />
        <h1 className="text-5xl p-10 text-white">Kiran Ravi</h1>
        <img src={reactimg} alt="asd" width={"70px"} />
        </div>
        <hr />
        <div className="text-center p-5 bg-gray-900">
            <h1 className="text-4xl text-gray-400">Mini Projects</h1>
        <ol className="text-center m-10">
            <li>
            <div className="flex justify-center align-bottom gap-2">
            <img src={reactimg} alt="asd" width={"20px"} />
            <Link to="/api" className=" text-gray-600 hover:text-white align-bottom font-mono">API User Data TABLE</Link>    
            <img src={reactimg} alt="asd" width={"20px"} />
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