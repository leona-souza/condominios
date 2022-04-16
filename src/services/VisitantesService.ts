import axios from 'axios'

// TYPES
import { GetVisitantesResponse } from 'types/visitantes'

const API_URL = process.env.REACT_APP_API_URL

export const getVisitantes = (): Promise<GetVisitantesResponse> => {
  return axios.get(`${API_URL}/visitante`)
}

export const deleteVisitante = (visitanteId: number): Promise<any> => {
  return axios.delete(`${API_URL}/visitante/${visitanteId}`)
}
