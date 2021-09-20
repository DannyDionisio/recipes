import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthContainer from "../../components/AuthContainer";

const Login = () => {
  const [validationError, setValidationError] = useState("");

  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const password = (elements.namedItem("password") as HTMLInputElement).value;
    const email = (elements.namedItem("email") as HTMLInputElement).value;

    api
      .post("auth/login", { email, password })
      .then(({ status, data }) => {
        if (status) {
          localStorage.setItem("token", data.token);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        const { status } = err.response;

        if (status === 403) {
          setValidationError("Email ou senha inválidos.");
        } else {
          setValidationError("Erro interno, tente novamente mais tarde.");
        }
      });
  };

  return (
    <AuthContainer onSubmit={handleSubmit}>
      <Input
        name="email"
        label="Email"
        placeholder="Digite aqui o seu email"
        type="email"
        required={true}
      />
      <div className="forgot-password-container">
        {/* <Link to="/forget-password" className="forgot-password">
            Esqueceu sua senha?
          </Link>*/}

        <Input
          name="password"
          label="Senha"
          placeholder="Digite aqui a sua senha"
          type="password"
          required={true}
        />
        {validationError && <p className="error-message">{validationError}</p>}
      </div>

      <Button isBlock={true} type="submit">
        Entrar
      </Button>

      <div className="link-container">
        <Link to="/signup" className="link">
          Ou, criar uma conta.
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Login;
