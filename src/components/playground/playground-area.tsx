import MatrixBuilder from './matrix-builder';
import MatrixCollection from './matrix-collection';

export default function PlaygroundArea() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <MatrixBuilder />
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2 p-4 gap-2">
            <MatrixCollection />
          </div>
          <div className="col-span-10 border  border-red-200">9</div>
        </div>
      </div>
    </>
  );
}
