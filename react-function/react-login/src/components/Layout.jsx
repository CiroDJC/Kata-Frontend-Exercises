import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Container,Nav,Navbar,Button } from 'react-bootstrap';

const Layout = ({isAuth,userLogged}) => {
  const navigate = useNavigate()

  const logout = () => {
    userLogged(false)
    navigate('/login')
  }
  
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/dashboard" className="px-2">Dashboard</Link>
             <Button variant="primary" onClick={logout}>Cerrar Sesion</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Outlet/>
      <footer>
        <p>Derechos reservados</p>
      </footer>
    </>
  )
}

export default Layout