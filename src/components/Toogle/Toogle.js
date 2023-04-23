import React,  { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Toogle = () => {

    const [toogle, setToogle] = useState(false);

    const ActivToogle = () => {
        setToogle(!toogle)
    }

  return (
    <div>
      <Navbar></Navbar>
      HEllo touglle

    
        { toogle === true &&
             <div>Coucou</div>
        }

        <button onClick={()=> ActivToogle()} >Click ici </button>
      


    </div>
  )
}

export default Toogle
