import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form,Button } from 'react-bootstrap'
import './LoginForm.css'

const LoginForm = ({ userLogged }) => {
  const [credentials, setCredentials] = useState({}) // usuario: "", password: ""  1ER FORMA PARA WUITAR WARNING
  const credentialsHarcoded = { user: 'usuarioG17', password: 'password' }
  const navigate = useNavigate()
  /**

   * Harcodear 👀 credenciales con
   *    user: usuarioG17
   *    password: password
   */

  const handleFormValue = (event) => {
    // { target: { name, value } }
    setCredentials({ ...credentials, [name]: value })
    console.log(event)
  }
    

  const submitForm = () => {
    const { user, password } = credentialsHarcoded
    if (credentials.user === user && credentials.password === password) {
      userLogged(true)
      navigate('/dashboard')
    }
  }

  return (
    <>
      {/* <Form>
        <Form.Group className="mb-3" controlId="user">
          <Form.Label>User</Form.Label>
          <Form.Control type="text" placeholder="Enter User" 
         
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"   />
        </Form.Group>
      
        <Button variant="primary" type="submit" onClick={() => submitForm()}>
        Login
        </Button>
      </Form> */}
      <div className="form">
        <input
          type="text"
          name="user"
          value={credentials.user || ''}
          onChange={handleFormValue}
        />
        <input
          type="password"
          name="password"
          value={credentials.password || ''}
          onChange={handleFormValue}
        />

        <button onClick={() => submitForm()}>Login</button>
      </div>
    </>
  )
}

export default LoginForm
