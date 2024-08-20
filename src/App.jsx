import { useState } from 'react'
import Canv from './component/Maincar/Canv.jsx'
import './App.css'
import PolyhedronSet from './component/PolyhedronSet.jsx'
import { refcontext } from './component/context.jsx'
import { useContext } from 'react'
import GCanv from './component/Garage/GCanv.jsx'
// import yash from '../public/black.jpg'
function App() {
  const [count, setCount] = useState(0)
  const{
    component,
    setCurrentComponent,
    setcomponent,
    setloading,setprevi,currentComponent,previ,loading,result,setresult,setshowresult,
    showresult
  } =useContext(refcontext)
    // const [currentComponent, setCurrentComponent] = useState('FinalC');

    const switchComponent = (component) => {
      setCurrentComponent(component);
    };

    

  return (
    <div>

    <div className='main'>
       {/* <div className="text-center py-10 flex flex-col h-screen bg-cover bg-center bg-no-repeat for-photo" > */}
       <div className='flex flex-col py-10 text-center h-screen for-photo'>
       <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide font-playfair">Driven by Performance,</h1>
       <p className="text-2xl md:text-4xl font-light text-gray-400 mt-2 font-playfair">Crafted by Passion</p>
  </div>
  
   {/* <div className='h-screen w-full fixed top-0 '>
<Canv/>
   </div> */}

   <div className='h-screen w-full fixed top-0'>

<GCanv/>
   </div>

   <div className='h-screen w-full text-white bg-black  second-page'>
 
    <div className='flex flex-col justify-center items-center min-w-[60vw]'>
      <p className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent inline-block text-2xl'>Choose your car</p>
    </div>
    <div className='min-w-[40vw] max-w-[40vw] h-screen'>
      <PolyhedronSet/>
    </div>
   </div>
   
    </div>
    {/* <div className='h-2'/>  */}
    <div className='h-screen w-full third-page bg-black'>

    </div>
    </div>
  )
}

export default App
