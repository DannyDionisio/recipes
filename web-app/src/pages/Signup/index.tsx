import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api, { ApiData } from "../../services/api";

import Input from "../../components/Input";
import Button from "../../components/Button";
import errorMapping from "../../utils/errorMapping";
import AuthContainer from "../../components/AuthContainer";

type Errors = {
  [key: string]: string;
};

type ValidationErrorState = {
  email?: string;
  password?: string;
};

const Signup = () => {
  const [
    validationErrors,
    setValidationErrors,
  ] = useState<ValidationErrorState>({});

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const elements = event.currentTarget.elements;
    const name = (elements.namedItem("name") as HTMLInputElement).value;
    const password = (elements.namedItem("password") as HTMLInputElement).value;
    const email = (elements.namedItem("email") as HTMLInputElement).value;

    api
      .post<ApiData>("auth/signup", { name, email, password })
      .then(({ data: { status } }) => {
        if (status === true) {
          history.push("/");
        }
      })
      .catch((err) => {
        const { status, data } = err.response.data as ApiData;

        if (status === false) {
          if (Array.isArray(data)) {
            let err: Errors = {};

            setValidationErrors(
              data.reduce((acc, err) => {
                acc[err.field] = errorMapping[err.error];
                return acc;
              }, err)
            );
          } else if (data?.error === "DUPLICATED_FIELD") {
            setValidationErrors({
              email: "Email Duplicado",
            });
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AuthContainer onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Nome"
        placeholder="Digite aqui seu nome"
        type="text"
      />

      <Input
        name="email"
        label="Email"
        placeholder="Digite aqui o seu email"
        type="email"
        required={true}
      />
      {validationErrors.email && (
        <p className="error-message">{validationErrors.email}</p>
      )}

      <Input
        name="password"
        label="Senha"
        placeholder="Digite aqui a sua senha"
        type="password"
        required={true}
      />
      {validationErrors.password && <p>{validationErrors.password}</p>}

      <Button isBlock={true} type="submit" disabled={isLoading}>
        Registrar-se
      </Button>

      <div className="link-container">
        <Link to="/" className="link">
          Ou, entrar.
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Signup;
