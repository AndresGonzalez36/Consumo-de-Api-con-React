import React, { useState } from 'react'

const Busqueda = ({ setValorBusqueda }) => {
    const [valorCaja, setValorCaja] = useState('');
    const enviarForm =(e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="logo" height={60} />
                    <form onSubmit={enviarForm}
                    className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Nombre Personaje" aria-label="Search" 
                        onChange={(e) => setValorCaja(e.target.value)} />
                        <button className="btn btn-outline-success bg-dark" 
                            onClick={() => setValorBusqueda(valorCaja)}>Buscar</button>
                    </form>
                </div>
            </nav></div>
    )
}

export default Busqueda