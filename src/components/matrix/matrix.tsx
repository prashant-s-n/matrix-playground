import MatrixPill from './matrix-pill';
import { IMatrix } from '@/common/interfaces/matrix';

interface MatrixProps {
  name: string;
  elements: number[][];
  readonly: boolean;
  handleMatrixElementChange: (
    rowIndex: number,
    columnIndex: number,
    newValue: number
  ) => void;
  saveToCollection: (matrix: IMatrix) => void;
}

export default function Matrix(props: MatrixProps) {
  return (
    <>
      <div className="text-xl  p-5 justify-center">
        {/* Container for the whole matrix */}
        {props.elements.map((row, rowIndex) => (
          <div
            className="flex flex-row gap-x-1 justify-center items-center"
            key={rowIndex}
          >
            {row.map((col, colIndex) => (
              <MatrixPill
                key={`${rowIndex}-${colIndex}`}
                element={col}
                rowIndex={rowIndex}
                columnIndex={colIndex}
                readonly={props.readonly}
                handleMatrixElementChange={props.handleMatrixElementChange}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
