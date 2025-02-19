export interface IMatrix {
  id?: string;
  rows: number;
  columns: number;
  createdAt: Date;
  values: number[][];
}
