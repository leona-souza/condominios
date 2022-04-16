import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

export const getVeiculos = (): Promise<any> => {
  return axios.get(`${API_URL}/veiculo`)
}

export const deleteVeiculo = (veiculoId: number): Promise<any> => {
  return axios.delete(`${API_URL}/veiculo/${veiculoId}`)
}
