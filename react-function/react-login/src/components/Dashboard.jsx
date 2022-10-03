import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlanetDetail from './PlanetDetail'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Dashboard = () => {
  const navigate = useNavigate()
  const BASE_URL = 'https://swapi.dev/api/'

  const [planetArray, setPlanetArray] = useState([])
  const [planetInfo, setPlanetInfo] = useState({})
  const [planetIndex, setplanetIndex] = useState(undefined)

  useEffect(() => {
    axios
      .get(`${BASE_URL}planets`)
      .then(({ data }) => setPlanetArray(data.results))
      .catch((error) => console.log('error calling SWAPI'))
  }, [])

  useEffect(() => {
    if (planetIndex) {
      axios
        .get(`${BASE_URL}planets/${planetIndex}`)
        .then(({ data }) => {
          console.log('planet details', data)
          setPlanetInfo(data)
        })
        .catch((error) => console.log('error calling SWAPI', error))
    }
  }, [planetIndex])

  const recoverPlanetDetail = (valorIndice) => {
    // setplanetIndex(valorIndice + 1);
    navigate(`/planet/${valorIndice + 1}`)
  }

  return (
    <>
      {planetArray.length === 0 ? (
        <h3>Cargando información... ⭕️</h3>
      ) : (
        <Row>
          {Object.values(planetInfo).length === 0 ? (
            planetArray.map((planet, index) => (
                <Col
                  lg={6}
                  key={index}
                  onClick={() => recoverPlanetDetail(index)}
                  style={{
                    border: '2px solid white',
                    margin: '10px 0',
                    cursor: 'pointer',
                  }}
                >
                  {/* <Link to={`/planet/${id}`}>
                
                </Link> */}
                  <p>Name: {planet.name}</p>
                  <p>Climate {planet.climate}</p>
                  <div>
                    {' '}
                    <b>Lista de peliculas: </b>
                    <ul>
                      {' '}
                      {planet.films.map((planet, i) => (
                        <li key={i}> URL: {planet} </li>
                      ))}
                    </ul>
                  </div>
                </Col>
            ))
          ) : (
            <PlanetDetail
              details={planetInfo}
              handleResetList={() => setPlanetInfo({})}
            />
          )}
        </Row>
      )}
    </>
  )
}

export default Dashboard
