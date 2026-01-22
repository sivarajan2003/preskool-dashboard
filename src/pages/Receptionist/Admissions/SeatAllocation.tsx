import { Lock, Unlock } from "lucide-react";
import { useState } from "react";

export default function SeatAllocation() {
  const seatData = [
    { stream: "Nursery", quota: "General", total: 30, allocated: 28 },
    { stream: "Nursery", quota: "OBC", total: 15, allocated: 12 },
    { stream: "Grade 1", quota: "General", total: 90, allocated: 78 },
    { stream: "Grade 1", quota: "SC/ST", total: 20, allocated: 15 },
    { stream: "Grade 2", quota: "General", total: 50, allocated: 42 },
    { stream: "Grade 2", quota: "EWS", total: 10, allocated: 8 },
    { stream: "Grade 3", quota: "General", total: 60, allocated: 56 },
  ];
  const [rows, setRows] = useState(
    seatData.map((s) => {
      const available = s.total - s.allocated;
      const percent = Math.round((s.allocated / s.total) * 100);
      return {
        ...s,
        available,
        percent,
        status: available === 0 ? "Locked" : "Active",
      };
    })
  );
    const [streamFilter, setStreamFilter] = useState("All");
  const [quotaFilter, setQuotaFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const filteredData = rows.filter((row) => {
    if (streamFilter !== "All" && row.stream !== streamFilter) return false;
    if (quotaFilter !== "All" && row.quota !== quotaFilter) return false;
    if (statusFilter !== "All" && row.status !== statusFilter) return false;
    return true;
  });
  const toggleLock = (index: number) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index
          ? {
              ...row,
              status: row.status === "Locked" ? "Active" : "Locked",
            }
          : row
      )
    );
  };
  
  return (
    <div className="p-6 space-y-6">

      {/* ================= FILTER SECTION (IMG 1) ================= */}
      <div className="bg-white border rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Filter
    label="Filter by Stream"
    value={streamFilter}
    options={["All", "Nursery", "Grade 1", "Grade 2", "Grade 3"]}
    onChange={setStreamFilter}
  />

  <Filter
    label="Filter by Quota"
    value={quotaFilter}
    options={["All", "General", "OBC", "SC/ST", "EWS"]}
    onChange={setQuotaFilter}
  />

  <Filter
    label="Status"
    value={statusFilter}
    options={["All", "Active", "Locked"]}
    onChange={setStatusFilter}
  />
</div>

      </div>

      {/* ================= SEAT MATRIX TABLE (IMG 2) ================= */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Seat Allocation Matrix</h2>

          <div className="flex gap-3">
            <SummaryChip label="Total Seats" value="293" />
            <SummaryChip label="Allocated" value="254" />
            <SummaryChip label="Available" value="39" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <Th>Stream</Th>
                <Th>Quota</Th>
                <Th>Total Seats</Th>
                <Th>Allocated</Th>
                <Th>Available</Th>
                <Th>Utilization</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
  {filteredData.map((row, i) => (
    <SeatRow
      key={i}
      stream={row.stream}
      quota={row.quota}
      total={row.total}
      allocated={row.allocated}
      available={row.available}
      percent={row.percent}
      locked={row.status === "Locked"}
      onToggle={() => toggleLock(i)}
    />
  ))}
</tbody>


          </table>
        </div>
      </div>

      {/* ================= BOTTOM SUMMARY CARDS (IMG 3) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Seats" value="293" />
        <StatCard title="Allocated" value="254" color="text-blue-600" />
        <StatCard title="Available" value="39" color="text-green-600" />
        <StatCard title="Avg. Utilization" value="87%" color="text-orange-500" />
      </div>

    </div>
  );
}
function Filter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium mb-1">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-4 py-3 font-medium">
      {children}
    </th>
  );
}
function SeatRow({
  stream,
  quota,
  total,
  allocated,
  available,
  percent,
  locked,
  onToggle,
}: any) {
  return (
    <tr className="border-t">
      <Td>{stream}</Td>
      <Td>
        <span className="px-3 py-1 text-xs border rounded-full">
          {quota}
        </span>
      </Td>
      <Td>{total}</Td>
      <Td className="text-blue-600">{allocated}</Td>
      <Td className={available <= 5 ? "text-red-500" : "text-green-600"}>
        {available}
      </Td>
      <Td>
        <div className="flex items-center gap-3">
          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                percent > 90 ? "bg-red-500" : "bg-orange-400"
              }`}
              style={{ width: `${percent}%` }}
            />
          </div>
          <span>{percent}%</span>
        </div>
      </Td>
      <Td>
        {locked ? (
          <span className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-1">
            <Lock size={14} /> Locked
          </span>
        ) : (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
            <Unlock size={14} /> Active
          </span>
        )}
      </Td>
      <Td>
  <button
    onClick={onToggle}
    className={`px-4 py-2 rounded-lg border transition ${
      locked
        ? "border-blue-500 text-blue-600 hover:bg-blue-50"
        : "border-red-500 text-red-600 hover:bg-red-50"
    }`}
  >
    {locked ? "Unlock" : "Lock"}
  </button>
</Td>

    </tr>
  );
}
function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`px-4 py-4 ${className}`}>
      {children}
    </td>
  );
}

function SummaryChip({ label, value }: any) {
  return (
    <span className="px-4 py-1 border rounded-full text-sm">
      {label}: <b>{value}</b>
    </span>
  );
}
function StatCard({
  title,
  value,
  color = "text-gray-900",
}: any) {
  return (
    <div className="bg-white border rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className="text-gray-500 mt-1">{title}</p>
    </div>
  );
}
