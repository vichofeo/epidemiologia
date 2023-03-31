import { getToken, removeDatStore } from "./localStore";

export const urlbase = "http://10.20.10.86:8080/api"//process.env.API_HOST;
export const urllogin = "http://localhost:3000/ingresar"//process.env.API_HOST;
console.log("host", process.env.API_HOST)
//cabeceras
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

export const getHeaders = () => {
  try {
    const header = { ...headers, Authorization: `Bearer ${getToken()}` };
    return header;
  } catch (e) {
    removeDatStore();
  }
};
