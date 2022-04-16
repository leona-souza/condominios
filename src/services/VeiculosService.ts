import axios from 'axios'

// TYPES
import { GetVeiculosResponse } from 'types/veiculos'

const API_URL = process.env.REACT_APP_API_URL

export const getVeiculos = (): Promise<GetVeiculosResponse> => {
  return axios.get(`${API_URL}/veiculo`)
}

export const deleteVeiculo = (veiculoId: number): Promise<any> => {
  return axios.delete(`${API_URL}/veiculo/${veiculoId}`)
}
