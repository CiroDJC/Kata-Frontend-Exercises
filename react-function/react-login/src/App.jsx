import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import PlanetDetailRouter from "./components/PlanetDetailRouter";
import ProtectedRoute from './components/ProtectedRoute'


import "./App.css";

function App() {
  const [isUserLogged, setisUserLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* index ???  */}

        
        <Route index element={<Navigate replace to="/login" />} />
        {/* <Route path="/login" element={<h2>Login๐</h2>} /> */}
        <Route
          path="/login"
          element={<LoginForm userLogged={(value) => setisUserLogged(value)} />}
        />
        {/* <Route path="/contact" element={<h2>Contactos de mi app ๐</h2>} /> */}
        <Route element={<ProtectedRoute isAuth={isUserLogged} userLogged={(value) => setisUserLogged(value)}/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/planet/:id" element={<PlanetDetailRouter/>} />
        </Route>
      
        <Route path="/shopping-cart" element={<h2>Carrito de compras ๐</h2>} />
        <Route path="/payment" element={<h2>Pago ๐ณ</h2>} />

        {/* DEFINIR RUTA 404 */}
        <Route path="*" element={<h1> Aqui va pรกgina bonita de 404</h1>} />

        {/* <h2>React app ๐</h2>
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged={(value) => setisUserLogged(value)} />
        ) : (
          <Dashboard />
        )}
      </div> */}
      </Routes>
    </div>
  );
}

export default App;
