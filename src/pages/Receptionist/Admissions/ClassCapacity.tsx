export default function ClassCapacity() {
  const classes = [
    { name: "Nursery", filled: 28, total: 30 },
    { name: "Grade 1", filled: 78, total: 90 },
    { name: "Grade 2", filled: 85, total: 90 },
    { name: "Grade 3", filled: 56, total: 60 },
  ];
  const getBarColor = (name: string) => {
    if (name === "Grade 2") return "bg-yellow-400";
    if (name === "Grade 1") return "bg-orange-500";
    return "bg-red-500";
    
  };
  
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 h-full transition hover:shadow-md">
      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Class Capacity
        </h3>
        <p className="text-sm text-gray-500">
          Current enrollment status
        </p>
      </div>

      {/* LIST */}
      <div className="space-y-6">
        {classes.map((c) => {
          const percent = Math.round((c.filled / c.total) * 100);
          const remaining = c.total - c.filled;

          return (
            <div key={c.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800">
                  {c.name}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {c.filled} / {c.total}
                </span>
              </div>

              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
  className={`h-full rounded-full ${getBarColor(c.name)} transition-all duration-700`}
  style={{ width: `${percent}%` }}
/>

              </div>

              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500">{percent}% filled</span>
                <span className="text-red-500 font-medium">
                  {remaining} seats available
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <h4 className="text-3xl font-semibold text-green-600">247</h4>
          <p className="text-sm text-green-600">Total Enrolled</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <h4 className="text-3xl font-semibold text-blue-600">23</h4>
          <p className="text-sm text-blue-600">Available Seats</p>
        </div>
      </div>
    </div>
  );
}
