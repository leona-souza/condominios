// TYPES
import { ApartamentoType } from 'types/apartamentos'
import { VisitanteType } from 'types/visitantes'

export interface VisitaType {
  id: number;
  apartamento: ApartamentoType;
  data: Date;
  obs?: string;
  visitante: VisitanteType;
}

export interface GetVisitasResponse {
  data: VisitaType[];
  status: number;
  statusText: string;
}
