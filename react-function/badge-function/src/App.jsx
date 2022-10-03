import React, { useState, useEffect } from 'react'
import BadgeComponent from './components/BadgeComponent'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'
import AxiosComponent from './components/AxiosComponent'
import axios from 'axios'

const App = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    username: '',
    rol: ''
  })

  const [characters, setCharacters] = useState([])



  const fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const characters = res.data.results
      setCharacters(characters)
    })
  }
   // useEffect (CICLO DE VIDA HOOK)
   useEffect(() => {
    // Se ejecuta cuando se monta y se actualiza (props/state)
    fetchApi()
  });
  
  useEffect(() => {
    return () => {
      // Se ejecuta cuando se desmonta
    }
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
  
    <div>
      <NavbarComponent/>
      <FormComponent handleChange={handleChange}/>
      <BadgeComponent form={form}/>
      {
        characters.map((item,index) => {
          return <AxiosComponent item={item} key={`${index}-axios`} />
        })
      }
      
    </div>
  )
}

export default App