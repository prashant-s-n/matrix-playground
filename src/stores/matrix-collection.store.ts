import { IMatrix } from '@/common/interfaces/matrix';
import { create } from 'zustand';

export interface MatrixCollectionState {
  matrices: IMatrix[];
  addMatrix: (matrix: IMatrix) => void;
}

export const useMatrixCollectionStore = create<MatrixCollectionState>(
  (set) => ({
    matrices: [],
    addMatrix: (matrix: IMatrix) =>
      set((state) => ({ ...state, matrices: [...state.matrices, matrix] })),
  })
);
