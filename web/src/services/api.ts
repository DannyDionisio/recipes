import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export type ApiData = {
  status: boolean;
  data:
    | ApiValidationError[]
    | { error: "DUPLICATED_FIELD"; fields: string[] }
    | undefined;
};

export type ApiValidationError = {
  field: string;
  error: "FIELD_REQUIRED";
};

export default api;
