export interface MoradorType {
  id: number;
  nome: string;
  documento?: string;
  telefone?: string;
  obs?: string;
}


export interface GetMoradoresResponse {
  data: MoradorType[];
  status: number;
  statusText: string;
}
