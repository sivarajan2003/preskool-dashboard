import { Plus } from "lucide-react";
import A8 from "../assets/a8.png";
import A9 from "../assets/a9.png";
import A10 from "../assets/a10.png";

const routines = [
  {
    month: "Jan 2025",
    progress: 70,
    color: "bg-blue-500",
    img: A8,
  },
  {
    month: "Feb 2025",
    progress: 55,
    color: "bg-yellow-500",
    img: A9,
  },
  {
    month: "Mar 2025",
    progress: 85,
    color: "bg-green-500",
    img: A10,
  },
];


export default function ClassRoutine() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-900">Class Routine</h3>

        <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-5">
        {routines.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.month}
              className="w-10 h-10 rounded-lg object-cover"
            />

            {/* CONTENT */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 mb-1">
                {item.month}
              </p>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
