import React from 'react';

export default function Table({ columns, data } : { columns: any[], data : any[] }) {
  return (
    <div className="overflow-x-auto">

    <table className=" border-tools-table-outline w-full border-separate rounded-lg border text-left">
      <thead>
        <tr className="bg-mainGreen text-center text-tertiary">
          {columns.map((col, index) => (
            <th
              key={index}
              className={`p-3 ${index === 0 ? 'rounded-tl-lg' : ''} ${
                index === columns.length - 1 ? 'rounded-tr-lg' : ''
              }`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="rounded-b-lg">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? '' : 'bg-neutral-200'}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                className={`p-3 ${
                  rowIndex === data.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''
                } ${
                  rowIndex === data.length - 1 && colIndex === columns.length - 1
                    ? 'rounded-br-lg'
                    : ''
                }`}
              >
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
