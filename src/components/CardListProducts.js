import React from 'react'

import { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import { CarritoProvider } from './context/Carrito'

function CardListProducts({productos}) {

  console.log(productos)
  //const [personajesFiltrados, setPersonajesFiltrados] = useState([])
  //setPersonajesFiltrados( personajes.filter(personaje => personaje.id != personajesElegidos.id))
  
  return (
    <CarritoProvider className="CardList">
      
        {productos.map( producto => (
          <CardProduct
            key={producto.id}
            producto={producto}
            agregarCarritoHandler={''}
          ></CardProduct>
        ))}
    </CarritoProvider>
  )
}

export default CardListProducts