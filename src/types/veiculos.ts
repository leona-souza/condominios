export interface VeiculoType {
  id: number;
  placa: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  obs?: string;
}

export interface GetVeiculosResponse {
  data: VeiculoType[];
  status: number;
  statusText: string;
}
