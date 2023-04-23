import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'

const ExampleObject = () => {

 
    const [state, setState] = useState({
        id: 1,
        metier: "fullstack dev",
        niveau: "en formation"
    })
    
    const handleJunior =() => {
        setState((prevstate)=> ({...prevstate, niveau: "Junior"}))
      }
      const handleIntermediaire =() => {
        setState((prevstate)=> ({...prevstate, niveau: "Intermediaire"}))
      }
      const handleSenior =() => {
        setState((prevstate)=> ({...prevstate, niveau: "Senior"}))
      }


  return (
    
    <div> 
      <Navbar/>
        <h1>je suis {state.metier} {" "} {state.niveau} </h1>
        <button onClick={()=> handleJunior() }>dans trois mois je serais</button>
        <button onClick={()=> handleIntermediaire() }>dans 1 an je serais</button>
        <button onClick={()=> handleSenior() }>dans 5 ans je serais</button>
    </div>
  )
}

export default ExampleObject