import { getToken, removeDatStore } from "./localStore";

export const urlbase = process.env.API_HOST;

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
