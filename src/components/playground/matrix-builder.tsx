import { useState } from 'react';
import { FiBox } from 'react-icons/fi';
import { useMatrixBuilderOptionsStore } from '../../../src/stores/matrix-builder-options.store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { v4 } from 'uuid';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Matrix from '../matrix/matrix';
import { useMatrixCollectionStore } from '@/stores/matrix-collection.store';
import { IMatrix } from '@/common/interfaces/matrix';

export default function MatrixBuilder() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  const {
    matrixRows,
    matrixColumns,
    initialMatrix,
    setMatrixColumns,
    setMatrixRows,
    setInitialMatrix,
    handleMatrixElementChange,
  } = useMatrixBuilderOptionsStore();

  const { addMatrix } = useMatrixCollectionStore();

  function saveMatrixToCollection(matrix: IMatrix) {
    addMatrix(matrix);
    setIsBuilderOpen(false);
  }

  function handleGenerateMatrix(rows: number, columns: number): number[][] {
    const matrix: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const row = new Array(columns).fill(1);

      matrix.push(row);
    }
    return matrix;
  }

  function handleSubmit() {
    setInitialMatrix(handleGenerateMatrix(matrixRows, matrixColumns));

    setIsBuilderOpen(true);
  }

  function handleSave() {
    saveMatrixToCollection({
      id: v4(),
      rows: initialMatrix.length,
      columns: initialMatrix[0].length,
      values: initialMatrix,
      createdAt: new Date(),
    });
  }

  return (
    <>
      {isBuilderOpen && (
        <Dialog open={true} onOpenChange={() => setIsBuilderOpen(false)}>
          <DialogContent className="" aria-describedby="description">
            <DialogHeader>
              <DialogTitle>Matrix Visualizer</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto p-0">
              <Matrix
                name="m1"
                elements={initialMatrix}
                readonly={false}
                saveToCollection={saveMatrixToCollection}
                handleMatrixElementChange={handleMatrixElementChange}
              />
            </div>
            <DialogFooter>
              <div className="flex flex-col gap-y-2 w-fit-content">
                <Button onClick={() => handleSave()} variant={'default'}>
                  Save
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <div className="flex flex-col items-start justify-start gap-2 p-2 bg-zinc-100">
        <div className="flex gap-2 items-start">
          <div className="flex flex-col w-full gap-2">
            <Input
              aria-label="rows"
              defaultValue={matrixRows}
              width={'20'}
              id={'matrix_rows'}
              name={'matrix_rows'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMatrixRows(Number(e.target.value))
              }
            />

            <Label htmlFor="matrix_rows">rows</Label>
          </div>

          <div className="flex flex-col w-full gap-2">
            <Input
              defaultValue={matrixColumns}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMatrixColumns(Number(e.target.value));
              }}
              id={'matrix_cols'}
              name={'matrix_cols'}
            />

            <Label htmlFor="matrix_cols">columns</Label>
          </div>

          <Button
            type={'submit'}
            disabled={isBuilderOpen}
            onClick={handleSubmit}
          >
            <FiBox /> Generate
          </Button>
        </div>
      </div>
    </>
  );
}
