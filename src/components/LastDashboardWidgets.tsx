import { Info } from "lucide-react";
import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";
import student4 from "../assets/student4.png";

export default function LastDashboardWidgets() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* ================= TOP SUBJECTS ================= */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            Top Subjects
          </h3>
          <span className="text-sm text-gray-500">Class II</span>
        </div>

        <div className="flex items-start gap-2 p-4 mb-6 rounded-lg bg-green-50 text-green-700 text-sm leading-relaxed">
          <Info className="w-4 h-4 mt-0.5" />
          These Result are obtained from the syllabus completion on the respective Class
        </div>

        <div className="space-y-4">
          {[
            { name: "Maths", value: "bg-blue-500 w-[35%]" },
            { name: "Physics", value: "bg-cyan-500 w-[45%]" },
            { name: "Chemistry", value: "bg-blue-700 w-[65%]" },
            { name: "Botany", value: "bg-green-500 w-[55%]" },
            { name: "English", value: "bg-yellow-500 w-[75%]" },
            { name: "Spanish", value: "bg-red-500 w-[85%]" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-sm text-gray-600 mb-1">{item.name}</p>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className={`h-2 rounded-full ${item.value}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= STUDENT ACTIVITY (UPDATED) ================= */}
      <div className="bg-white rounded-xl border p-6">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-base font-semibold text-gray-900">
      Student Activity
    </h3>
    <span className="text-sm text-blue-600 cursor-pointer">
      View All
    </span>
  </div>

  <div className="space-y-4">
    {[
      {
        title: '1st place in "Chess"',
        desc: "This event took place in Our School",
        img: student1,
      },
      {
        title: 'Participated in "Carrom"',
        desc: 'Justin Lee participated in "Carrom"',
        img: student2,
      },
      {
        title: '1st place in "100M"',
        desc: "This event took place in Our School on our sports day",
        img: student3,
      },
      {
        title: "International conference",
        desc: 'We attended international conference took place in "Germany"',
        img: student4,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl bg-white"
      >
        {/* AVATAR */}
        <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
          <img
            src={item.img}
            alt="student"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {item.title}
          </p>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* ================= TODO ================= */}
      <div className="bg-white rounded-xl border p-6">
  {/* HEADER */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-base font-semibold text-gray-900">
      Todo
    </h3>
    <span className="text-sm text-blue-600 cursor-pointer">
      View All
    </span>
  </div>

  {/* TODO LIST */}
  <div className="space-y-4">
    {[
      { title: "Send Reminder to Students", time: "01:00 PM", status: "Completed" },
      { title: "Create Routine to new staff", time: "04:50 PM", status: "Inprogress" },
      { title: "Extra Class Info to Students", time: "04:55 PM", status: "Yet to Start" },
      { title: "Fees for Upcoming Academics", time: "04:55 PM", status: "Yet to Start" },
      { title: "English - Essay on Visit", time: "05:55 PM", status: "Yet to Start" },
    ].map((task, i) => (
      <div
        key={i}
        className="
          flex items-start justify-between
          p-4
          border border-gray-200
          rounded-xl
          bg-white
        "
      >
        {/* LEFT */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300"
          />

          <div>
            <p className="text-sm font-medium text-gray-900">
              {task.title}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {task.time}
            </p>
          </div>
        </div>

        {/* STATUS */}
        <span
          className={`text-xs font-medium px-3 py-1 rounded-md whitespace-nowrap
            ${task.status === "Completed" && "bg-green-100 text-green-700"}
            ${task.status === "Inprogress" && "bg-blue-100 text-blue-700"}
            ${task.status === "Yet to Start" && "bg-yellow-100 text-yellow-700"}
          `}
        >
          {task.status}
        </span>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
