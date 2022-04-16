import axios from 'axios'

// TYPES
import { GetVisitasResponse } from 'types/visitas'

const API_URL = process.env.REACT_APP_API_URL

export const getVisitas = (): Promise<GetVisitasResponse> => {
  return axios.get(`${API_URL}/visita`)
}

export const deleteVisita = (visitaId: number): Promise<any> => {
  return axios.delete(`${API_URL}/visita/${visitaId}`)
}
