export interface ApartamentoType {
  id?: number;
  numero: number;
  torre: string;
  obs?: string;
}

export interface GetApartamentosResponse {
  data: ApartamentoType[];
  status: number;
  statusText: string;
}
