import { API_URL } from "../constants/api-url";

export async function fetchData<T>(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error("No se pudo obtener datos de la API");
  }
  return response.json() as T;
}
