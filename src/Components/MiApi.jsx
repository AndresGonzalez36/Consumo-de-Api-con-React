import React, { useEffect, useState } from 'react'

const MiApi = ({ valorBusqueda }) => {
  const [personajes, setPersonajes] = useState([]);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    getPersonajes();
   
  }, [])

  async function getPersonajes() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    console.log(data)
    setLoad(true);
    setPersonajes(data.results);

  }


  return (
    load ?
      <div>
         <main className='row'>
          {personajes
          .sort((a,b)=>{if(a.name<b.name){
            return -1;
          }if (a.name>b.name){
            return 1;}
            return 0;
        })
            .filter((p) => {
              return p.name.toLowerCase().includes(valorBusqueda.toLowerCase())
            })
            .map((p) => {return(
              <div key={p.id} className="card m-4 bg-dark " style={{ width: "15rem" }}>
                <img src={p.image} className="card-img-top mt-2" alt="..." />
                <div className="card-body">
                  <h3 className="card-text">{p.name}</h3>
                </div>
              </div>)})}
        </main>
      </div>
      :
      <img className='loading' src="https://cdn.shopify.com/s/files/1/0321/9596/9069/collections/cartoon-network-portal.png?v=1588605085" alt="" />
  )
}

export default MiApi