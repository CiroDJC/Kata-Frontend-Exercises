import React, { useState } from 'react'

const string = "asdasdasd"

const ComponenteFuncion = () => {

  const [person,setPerson] = useState({ 
    name: 'Estefania',
    rol: 'Frontend',
  })

  const [age,setAge] = useState(20)

  return (
    <>    
      <h2 className="app">Hola desde un componente de funcion el nombre: {age}</h2>
      <button onClick={(event) => {  setAge(age + 1) } } >Click</button>
    </>
  )
}

export default ComponenteFuncion