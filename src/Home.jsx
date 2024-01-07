
import SimpleFormValidation from "./components/FormValidation"
import Props from "./components/Props"
import Header from "./components/Header"
import MiniProjects from "./components/MiniProjects"

const Home = () => {
  return (<>    
  <div className="w-full">
  <div className="w-full bg-black text-white ">
        <Header/>
        <hr />
       <MiniProjects/>
        </div>
        <SimpleFormValidation/>
        <h1 className="bolder text-xl text-red-500 text-center">Props in React</h1>
        <div className="grid justify-center">
        <Props name={"kiran"} age={25} component={1}/>
        <br />
        <Props name={"Tamil"} age={23} component={2}/>
        </div>
  
<hr />
<div className="container grid justify-center">
<h1 className="bolder text-xl text-green-500 text-center ">Redux</h1>
</div>
</div>
    </>

  )
}

export default Home