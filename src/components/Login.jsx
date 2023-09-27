import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msjError, setMsjError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const validarFormulario = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return setMsjError("Todos los campos son obligatorios");
    } else if (!isValidEmail) {
      return setMsjError("El email no es válido");
    }

    setMsjError("Inició sesión correctamente");
  };

  return (
    <div className="bodyLogin">

    <div className="container">
      {msjError ? <p className="bg-danger text-white p-3">{msjError}</p> : ""}

      <Form onSubmit={validarFormulario}>
        <Form.Group className="mt-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mt-2" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

        <Button className="mt-5 w-100 p-2" variant="primary" type="submit">
          Iniciar Sesión
        </Button>
        <br />

        <NavLink to="/register">
          <Button className="mt-3 w-100 p-2" variant="danger">
            Register
          </Button>
        </NavLink>
      </Form>
      <p>Si todavia no estas registrado, ingrese aquí</p>
    </div>
    </div>
  );
};

export default Login;
