export default function Home() {
  return (
<div className="min-h-screen flex justify-center items-center p-6">
  <div className="mt-2 bg-white border border-gray-200 rounded-xl overflow-hidden">

    <table className="border-collapse">
      <thead>
        <tr>
          <th className="p-4 border border-gray-300 w-60 text-sm">Todo</th>
          <th className="p-4 border border-gray-300 w-60 text-sm">On Progress</th>
          <th className="p-4 border border-gray-300 w-60 text-sm">Done</th>
        </tr>
      </thead>

      <tbody>
        <tr>

          {/* COLUMN 1 */}
          <td className="p-1 border border-gray-300 align-center h-[30px]">
            <div className="h-full flex flex-col bg-white border border-gray-200 rounded-md p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <h1 className="text-sm font-semibold mb-1">Create Firebase Project</h1>
              <h2 className="text-xs">Subtitle for this</h2>
            </div>
          </td>

          {/* COLUMN 2 */}
          <td className="p-1 border border-gray-300 align-center h-[30px]">
            <div className="h-full flex flex-col bg-yellow-50 border border-yellow-300 rounded-md p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <h1 className="text-sm text-yellow-600 font-semibold mb-1">Design Firestore Schema</h1>
              <h2 className="text-xs text-yellow-600">Subtitle for this</h2>
            </div>
          </td>

          {/* COLUMN 3 */}
          <td className="p-1 border border-gray-300 align-center h-[30px]">
            <div className="h-full flex flex-col bg-green-50 border border-green-300 rounded-md p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <h1 className="text-sm text-green-600 font-semibold mb-1">Planning Features</h1>
              <h2 className="text-xs text-green-600">Subtitle for this</h2>
            </div>
          </td>

        </tr>
      </tbody>
    </table>

  </div>
</div>
  );
}