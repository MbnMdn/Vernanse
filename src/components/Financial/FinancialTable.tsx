export default function FinancialTable() {
  return (
    <table className="border-tools-table-outline  w-full border-separate rounded-lg border  text-left">
      <thead>
        <tr className="bg-mainGreen text-center text-tertiary">
          <th className="rounded-tl-lg p-3">Invoice Number</th>
          <th className="p-3">Date</th>
          <th className="p-3">Project</th>
          <th className="p-3">Provider</th>
          <th className="p-3">Amount</th>
          <th className="p-3">Paid</th>
          <th className="p-3">Left Amount</th>
          <th className="p-3">Dead Line</th>
          <th className="p-3">Commission</th>
          <th className="rounded-tr-lg p-3">Detail</th>
        </tr>
      </thead>
      <tbody className="rounded-b-lg">
        <tr>
          <td className="p-3">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">Dan</td>
          <td className="p-3">Jordan</td>
          <td className="p-3">1200 $</td>
          <td className="p-3">+1200 $</td>
          <td className="p-3">0 $</td>
          <td className="p-3">21/12/2024</td>
          <td className="p-3">125 $</td>
          <td className="p-3">open</td>
        </tr>

        <tr className="bg-neutral-200">
          <td className="p-3">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">name 2</td>
          <td className="p-3">AB</td>
          <td className="p-3">800 $</td>
          <td className="p-3">0 $</td>
          <td className="p-3">800 $</td>
          <td className="p-3">21/12/2024</td>
          <td className="p-3">200 $</td>
          <td className="p-3">open</td>
        </tr>

        <tr>
          <td className="p-3">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">name 3</td>
          <td className="p-3">Monda</td>
          <td className="p-3">250 $</td>
          <td className="p-3">-250 $</td>
          <td className="p-3">0 $</td>
          <td className="p-3">21/12/2024</td>
          <td className="p-3">50 $</td>
          <td className="p-3">open</td>
        </tr>

        <tr className="bg-neutral-200">
          <td className="rounded-bl-lg p-3 ">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">name 4</td>
          <td className="p-3">AM</td>
          <td className="p-3">1200 $</td>
          <td className="p-3">+200 $</td>
          <td className="p-3">1000 $</td>
          <td className="p-3">21/12/2024</td>
          <td className="p-3">80 $</td>
          <td className="rounded-br-lg p-3">open</td>
        </tr>
      </tbody>
    </table>
  );
}
