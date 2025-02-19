import { useMatrixCollectionStore } from '@/stores/matrix-collection.store';
import { FiBox, FiGrid } from 'react-icons/fi';
import MatrixCollectionRecord from './matrix-collection-record';

export default function MatrixCollection() {
  const { matrices } = useMatrixCollectionStore();

  return (
    <>
      <div className="flex flex-col space-y-1">
        {!matrices.length && (
          <div className="flex flex-col items-start justify-center border border-dotted-1 p-3 rounded-md gap-4">
            <FiBox />
            <p>No matrices yet</p>
            <small className="text-gray-500">
              Please add a new matrix from the widget above.
            </small>
          </div>
        )}

        {matrices.length > 0 && (
          <>
            <div className="flex flex-cols items-center justify-left text-lg font-medium mb-2 gap-2">
              <FiGrid />
              Matrices
            </div>
            {matrices.map((matrix, index) => (
              <>
                <MatrixCollectionRecord
                  key={matrix.id}
                  matrix={matrix}
                  index={index}
                />
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}
