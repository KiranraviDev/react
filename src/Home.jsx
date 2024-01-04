import { Link } from "react-router-dom"
import reactimg from "./assets/react.svg"

const Home = () => {
  return (<>    
  <div className="w-full">
        <div className="flex justify-center bg-black">
        <img src={reactimg} alt="asd" width={"70px"} />
        <h1 className="text-4xl p-10 text-white">REACT JS</h1>
        </div>
        <hr />
        <div className="grid justify-center p-5">
            <h1 className="text-4xl">Sample Projects</h1>
        <ol className="text-center m-10"><li>
            <div className="flex justify-center items-end gap-2">
            <img src={reactimg} alt="asd" width={"20px"} />
            <Link to="/api" className=" hover:text-blue-500 align-bottom font-mono">API TABLE</Link>    
            </div>
        </li>
        </ol>
        </div>
       
    </div>
    </>

  )
}

export default Home