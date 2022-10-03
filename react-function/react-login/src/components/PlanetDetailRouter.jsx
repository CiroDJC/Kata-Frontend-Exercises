import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import logo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'

const PlanetDetail = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()


  const [planet, setPlanet] = useState({
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: ''
  })

  const BASE_URL = "https://swapi.dev/api/";

  useEffect(() => {
    axios
      .get(`${BASE_URL}planets/${id}`)
      .then(({ data }) => { setPlanet(data) })
      .catch((error) => console.log("error calling SWAPI"));
  }, []);
  
  const handleLastRouter = () => {
    navigate(-1)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Detalle del planeta 🌍</Card.Title>
        <Card.Text>
        <p> Nombre: {planet.name}</p>
        <p>Periodo de rotación: {planet.rotation_period}</p>
        <p>Orbitación: {planet.orbital_period}</p>
        <p>Diametro: {planet.diameter}</p>
        <p>Clima: {planet.climate}</p>
        <p>Gravedad: {planet.gravity}</p>
        </Card.Text>
        <Button variant="primary" onClick={handleLastRouter}>Atras</Button>
      </Card.Body>
  </Card>
  );
};

export default PlanetDetail;
