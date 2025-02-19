import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
export interface MatrixBuilderOptionsState {
  matrixRows: number;
  matrixColumns: number;
  setMatrixRows: (matrixRow: number) => void;
  setMatrixColumns: (matrixColumns: number) => void;
  initialMatrix: number[][];
  setInitialMatrix: (initialMatrix: number[][]) => void;
  handleMatrixElementChange: (
    rowIndex: number,
    columnIndex: number,
    newValue: number
  ) => void;
}

export const useMatrixBuilderOptionsStore = create<MatrixBuilderOptionsState>()(
  devtools((set) => ({
    matrixRows: 1,
    matrixColumns: 1,
    initialMatrix: [],
    setMatrixRows: (
      matrixRow // Accept the new row count
    ) => set((state) => ({ ...state, matrixRows: matrixRow })), // Correct update

    setMatrixColumns: (
      matrixColumns // Accept the new column count
    ) => set((state) => ({ ...state, matrixColumns: matrixColumns })), // Correct update
    setInitialMatrix: (initialMatrix) =>
      set((state) => ({ ...state, initialMatrix: initialMatrix })),

    handleMatrixElementChange: (
      rowIndex: number,
      columnIndex: number,
      newValue: number
    ) => {
      set((state) => ({
        ...state,
        initialMatrix: state.initialMatrix.map((row, initialRowIndex) =>
          row.map((col, initialColumnIndex) =>
            initialRowIndex === rowIndex && initialColumnIndex === columnIndex
              ? newValue
              : col
          )
        ),
      }));
    },
  }))
);
