import { useState } from "react";

type Fee = {
  id: string;
  student: string;
  class: string;
  term: string;
  amount: number;
  status: "Paid" | "Pending";
  date: string;
};

const feesData: Fee[] = [
  {
    id: "F001",
    student: "Fahed III.C",
    class: "III-C",
    term: "Term 1",
    amount: 25000,
    status: "Paid",
    date: "15 Jun 2024",
  },
  {
    id: "F002",
    student: "Rahul V.A",
    class: "V-A",
    term: "Term 1",
    amount: 23000,
    status: "Pending",
    date: "—",
  },
  {
    id: "F003",
    student: "Anu IX.B",
    class: "IX-B",
    term: "Term 2",
    amount: 28000,
    status: "Paid",
    date: "02 Jun 2024",
  },
];

export default function FeesTable() {
  const [fees] = useState<Fee[]>(feesData);

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      {/* HEADER */}
      <div className="p-4 border-b">
        <h3 className="text-sm font-semibold">Fees Details</h3>
        <p className="text-xs text-gray-500">
          Student fee payment information
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Term</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Paid Date</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((fee) => (
              <tr
                key={fee.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium">
                  {fee.student}
                </td>
                <td className="px-4 py-3">{fee.class}</td>
                <td className="px-4 py-3">{fee.term}</td>
                <td className="px-4 py-3">₹{fee.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        fee.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {fee.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {fee.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
