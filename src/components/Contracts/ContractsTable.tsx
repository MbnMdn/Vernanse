export default function ContractTable() {
  return (
    <table className="border-tools-table-outline  w-full border-separate rounded-lg border text-left">
      <thead>
        <tr className="bg-mainGreen text-center text-tertiary">
          <th className="rounded-tl-lg p-3">Project Name</th>
          <th className="p-3">Provider</th>
          <th className="p-3">Address</th>
          <th className="p-3">Contact Person</th>
          <th className="p-3">Phone Number</th>
          <th className="p-3">Type</th>
          <th className="p-3">Sign Date</th>
          <th className="rounded-tr-lg p-3">Dead Line</th>
        </tr>
      </thead>
      <tbody className="rounded-b-lg">
        <tr>
          <td className="p-3">John Brown</td>
          <td className="p-3"> Jordan</td>
          <td className="p-3">New York No. 1 Lake Park</td>
          <td className="p-3">Dan Michel</td>
          <td className="p-3">+1325456789</td>
          <td className="p-3">Producer</td>
          <td className="p-3">02/11/2024</td>
          <td className="p-3">21/12/2024</td>
        </tr>

        <tr className="bg-neutral-200">
          <td className="p-3">Jim Green</td>
          <td className="p-3">AB</td>
          <td className="p-3">London No. 1 Lake Park</td>
          <td className="p-3">John Brown</td>
          <td className="p-3">+1325456789</td>
          <td className="p-3">Designer</td>
          <td className="p-3">-</td>
          <td className="p-3">21/12/2024</td>
        </tr>

        <tr>
          <td className="p-3">Joe Black</td>
          <td className="p-3">Monda</td>
          <td className="p-3">Sidney No. 1 Lake Park</td>
          <td className="p-3">Jim Green</td>
          <td className="p-3">+1325456789</td>
          <td className="p-3">Installer</td>
          <td className="p-3">-</td>
          <td className="p-3">21/12/2024</td>
        </tr>

        <tr className="bg-neutral-200">
          <td className="rounded-bl-lg p-3 ">Edward King</td>
          <td className="p-3">AM</td>
          <td className="p-3">LA No. 1 Lake Park</td>
          <td className="p-3">Joe Black</td>
          <td className="p-3">+1325456789</td>
          <td className="p-3">Producer</td>
          <td className="p-3">02/11/2024</td>
          <td className="rounded-br-lg p-3">21/12/2024</td>
        </tr>
      </tbody>
    </table>
  );
}
