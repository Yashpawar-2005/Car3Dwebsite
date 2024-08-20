import { useContext,createContext, useState, Children } from "react";
import React from 'react'

export const refcontext=createContext();
const Context=(props)=> {
    const [component,setcomponent]=useState(1)
    const[currentComponent,setCurrentComponent]=useState("MClaren")
    const[previ,setprevi]=useState([])
    const[loading,setloading]=useState(false)
    const[result,setresult]=useState([])
    const[showresult,setshowresult]=useState(false)

    
    const imp={
        component,
        setCurrentComponent,
        setcomponent,
        setloading,setprevi,currentComponent,previ,loading,result,setresult,setshowresult,
        showresult
    }
  return (
    <refcontext.Provider value={imp}>
        {props.children}
    </refcontext.Provider>
    
  )
}

export default Context