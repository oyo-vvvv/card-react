import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectCompo = () => {

const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://sabik-e7fc45.appdrag.site/api/new-fonction/getAllArticles",
        {
          params: {
            AD_PageNbr: "1",
            AD_PageSize: "500",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.Table);
        setData(response.data.Table)
      });
  }, []);

  return (
    <div className='container'>
      <h1>hello uSeEffect</h1>
      {
        data?.map((row)=>(
          <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
            <h2>{row.title}</h2>
            <p>{row.articles}</p>
            <button className='btn btn-danger' style={{ borderRadius: "50px"}}>alert</button>
            <button className='btn btn-info'>info</button>
            <button className='btn btn-success'>valide</button>
            <button className='btn btn-warning'>warning</button>
          </div>
        ))
      }
    </div>
  )
}


export default UseEffectCompo;
