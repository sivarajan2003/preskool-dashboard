import { Eye } from "lucide-react";

export default function FeesTable() {
  const fees = [
    { id: 1, name: "Fahed", term: "Term 1", amount: "₹15,000", status: "Paid" },
    { id: 2, name: "Ayaan", term: "Term 2", amount: "₹12,000", status: "Pending" },
    { id: 3, name: "Sara", term: "Term 1", amount: "₹10,000", status: "Paid" },
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Fees Details</h3>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">Student</th>
              <th>Term</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="text-right">View</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((f) => (
              <tr key={f.id} className="border-b last:border-0">
                <td className="py-3 font-medium">{f.name}</td>
                <td>{f.term}</td>
                <td>{f.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      f.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {f.status}
                  </span>
                </td>
                <td className="text-right">
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
