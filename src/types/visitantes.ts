export interface VisitanteType {
  id: number;
  nome: string;
  documento?: string;
  telefone?: string;
  obs?: string;
}


export interface GetVisitantesResponse {
  data: VisitanteType[];
  status: number;
  statusText: string;
}
