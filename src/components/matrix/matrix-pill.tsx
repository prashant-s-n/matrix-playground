import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface MatrixPillProps {
  element: number;
  rowIndex: number;
  columnIndex: number;
  readonly: boolean;
  handleMatrixElementChange: (
    rowIndex: number,
    columnIndex: number,
    newValue: number
  ) => void;
}

export default function MatrixPill(props: MatrixPillProps) {
  const [value, setValue] = useState(props.element);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    props.handleMatrixElementChange(
      props.rowIndex,
      props.columnIndex,
      newValue
    );
  };

  return (
    <div className="flex flex-col gap-1 items-end justify-center max-w-[100px] h-full border border-gray-300 rounded-md p-1">
      {props.readonly && <>{props.element}</>}

      {!props.readonly && (
        <Input
          className="w-[80px] text-black font-medium border border-none"
          type="number"
          value={value}
          onChange={handleChange}
          id={`pill-${props.rowIndex}-${props.columnIndex}`}
        />
      )}

      <Label
        className={'text-xs text-gray-500'}
        htmlFor={`pill-${props.rowIndex}-${props.columnIndex}`}
      >
        ({props.rowIndex + 1}, {props.columnIndex + 1})
      </Label>
    </div>
  );
}
