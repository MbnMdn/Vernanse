export default function TicketsTable() {
  return (
    <table className="border-tools-table-outline  w-full border-separate rounded-lg border  text-left">
      <thead>
        <tr className="bg-mainGreen text-center text-tertiary">
          <th className="rounded-tl-lg p-3">Ticket Number</th>
          <th className="p-3">Date</th>
          <th className="p-3">Project Name</th>
          <th className="p-3">Subject</th>
          <th className="p-3">Description</th>
          <th className="p-3">Status</th>
          <th className="rounded-tr-lg p-3">Details</th>
        </tr>
      </thead>
      <tbody className="rounded-b-lg">
        <tr>
          <td className="p-3">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">Jordan</td>
          <td className="p-3">Jordan</td>
          <td className="p-3">Need to design kitchen ...</td>
          <td className="p-3">Answered</td>
          <td className="p-3">Answered</td>
        </tr>

        <tr className="bg-neutral-200">
          <td className="p-3">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">AB</td>
          <td className="p-3">AB</td>
          <td className="p-3">Need to design kitchen ...</td>
          <td className="p-3">Answered</td>
          <td className="p-3">Answered</td>
        </tr>

        <tr>
          <td className="p-3">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">Monda</td>
          <td className="p-3">Monda</td>
          <td className="p-3">Need to design kitchen ...</td>
          <td className="p-3">Answered</td>
          <td className="p-3">Pending</td>
        </tr>

        <tr className="bg-neutral-200">
          <td className="rounded-bl-lg p-3 ">#212533</td>
          <td className="p-3"> 21/12/2024</td>
          <td className="p-3">AM</td>
          <td className="p-3">AM</td>
          <td className="p-3">Need to design kitchen ...</td>
          <td className="p-3">Answered</td>
          <td className="rounded-br-lg p-3">Pending</td>
        </tr>
      </tbody>
    </table>
  );
}
