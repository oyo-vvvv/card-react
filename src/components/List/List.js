import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';

const List = () => {

    const [list, setList] = useState([{
        id: 1, 
        coursImportant :  "React js "
    }, {
        id: 2, 
        coursImportant :  "html css"
    }, {
        id: 3, 
        coursImportant :  "vanilla javascript"
    }]);



  return (
    <div>
      <Navbar></Navbar>
      <h1>List des cours les plus importants</h1>
      {
        list.map((cour, index)=> (
            <div key={index}>
                {cour.coursImportant}
            </div>
        ))
      }
    </div>
  )
}

export default List
