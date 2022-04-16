import axios from 'axios'

// TYPES
import { GetMoradoresResponse } from 'types/moradores'

const API_URL = process.env.REACT_APP_API_URL

export const getMoradores = (): Promise<GetMoradoresResponse> => {
  return axios.get(`${API_URL}/morador`)
}

export const deleteMorador = (moradorId: number): Promise<any> => {
  return axios.delete(`${API_URL}/morador/${moradorId}`)
}
