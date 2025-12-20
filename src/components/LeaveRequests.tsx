import { useState } from "react";
import { Check, X, Calendar } from "lucide-react";
import A6 from "../assets/a6.png";
import A7 from "../assets/a7.png";

const leaveData = [
  {
    id: 1,
    name: "James",
    role: "Physics Teacher",
    type: "Emergency",
    typeColor: "red",
    leaveFrom: "2024-05-12",
    leaveTo: "2024-05-13",
    appliedOn: "2024-05-12",
    img: A6,
  },
  {
    id: 2,
    name: "Hendrita",
    role: "Maths Teacher",
    type: "Medical",
    typeColor: "green",
    leaveFrom: "2024-05-17",
    leaveTo: "2024-05-18",
    appliedOn: "2024-05-12",
    img: A7,
  },
];

export default function LeaveRequests() {
  const [thisWeekOnly, setThisWeekOnly] = useState(false);

  const today = new Date();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const filteredLeaves = thisWeekOnly
    ? leaveData.filter((item) => {
        const leaveDate = new Date(item.leaveFrom);
        return leaveDate >= startOfWeek && leaveDate <= endOfWeek;
      })
    : leaveData;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full transition hover:shadow-md">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-900">
          Leave Requests
        </h3>

        <button
          onClick={() => setThisWeekOnly((prev) => !prev)}
          className="
            flex items-center gap-2 text-sm text-gray-600
            border border-gray-200 px-3 py-1.5 rounded-lg
            transition-all duration-300
            hover:bg-gray-50 hover:shadow-sm
            active:scale-95
          "
        >
          <Calendar className="w-4 h-4" />
          {thisWeekOnly ? "All Requests" : "This Week"}
        </button>
      </div>

      {/* REQUEST LIST */}
      <div className="space-y-4">
        {filteredLeaves.map((item) => (
          <div
            key={item.id}
            className="
              group flex items-center justify-between
              border border-gray-100 rounded-lg p-4
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-sm hover:bg-gray-50
              cursor-pointer
            "
          >
            <div className="flex items-start gap-3">
              <img
                src={item.img}
                className="
                  w-10 h-10 rounded-lg object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                "
                alt={item.name}
              />

              <div>
                <p className="font-medium text-gray-900">
                  {item.name}
                  <span
                    className={`
                      ml-2 text-xs px-2 py-0.5 rounded
                      transition-colors duration-300
                      ${
                        item.typeColor === "red"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }
                    `}
                  >
                    {item.type}
                  </span>
                </p>

                <p className="text-sm text-gray-500">{item.role}</p>

                <div className="flex items-center gap-6 mt-1 text-xs text-gray-400">
                  <span>
                    Leave : {item.leaveFrom} - {item.leaveTo}
                  </span>
                  <span>Apply on : {item.appliedOn}</span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <button
                className="
                  w-8 h-8 flex items-center justify-center rounded
                  bg-green-500 text-white
                  transition-all duration-200
                  hover:bg-green-600 hover:scale-110
                  active:scale-95
                "
              >
                <Check size={16} />
              </button>

              <button
                className="
                  w-8 h-8 flex items-center justify-center rounded
                  bg-red-500 text-white
                  transition-all duration-200
                  hover:bg-red-600 hover:scale-110
                  active:scale-95
                "
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
