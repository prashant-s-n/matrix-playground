import { IMatrix } from '@/common/interfaces/matrix';
import { FiColumns } from 'react-icons/fi';
import { Checkbox } from '@/components/ui/checkbox';

export default function MatrixCollectionRecord(props: {
  index: number;
  matrix: IMatrix;
}) {
  const { index, matrix } = props;

  return (
    <div
      key={index}
      className=" gap-2 p-4 rounded-lg border border-gray-300 w-full max-w-sm transition-all hover:bg-slate-50 "
    >
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3 bg-blue-100 justify-center items-center flex rounded-lg">
          <FiColumns />
        </div>
        <div className="col-span-8">
          <div className="flex flex-col">
            <div>
              {matrix.rows} x {matrix.columns}
            </div>
          </div>
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
