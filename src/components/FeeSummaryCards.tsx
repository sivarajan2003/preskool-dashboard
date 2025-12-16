import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FeeSummaryCards() {
  const cards = [
    { title: "Total Fees Collected", value: "$25,000.02", up: true, percent: "1.2%" },
    { title: "Fine Collected till date", value: "$4,56.64", down: true, percent: "1.5%" },
    { title: "Student Not Paid", value: "545", up: true, percent: "1.5%" },
    { title: "Total Outstanding", value: "$4,56.64", down: true, percent: "1.5%" },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      {cards.map((c, i) => (
        <div key={i} className="bg-white border rounded-xl p-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">{c.title}</p>
            <p className="text-lg font-semibold">{c.value}</p>
          </div>

          <div
            className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md
              ${c.up ? "bg-green-50 text-green-600" : ""}
              ${c.down ? "bg-red-50 text-red-600" : ""}
            `}
          >
            {c.up && <ArrowUpRight className="w-3 h-3" />}
            {c.down && <ArrowDownRight className="w-3 h-3" />}
            {c.percent}
          </div>
        </div>
      ))}
    </div>
  );
}
