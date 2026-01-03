import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import bestImg from "../assets/best.png";
import topImg from "../assets/top.png";
const bestPerformers = [
  { name: "Adrian Rubell", role: "Physics Teacher", img: bestImg },
  { name: "Maria John", role: "Math Teacher", img: bestImg },
  { name: "Kevin Lee", role: "Chemistry Teacher", img: bestImg },
  { name: "Sophia Ray", role: "Biology Teacher", img: bestImg },
];

const starStudents = [
  { name: "Tenesa", role: "XII, A", img: topImg },
  { name: "Arjun", role: "XI, B", img: topImg },
  { name: "Priya", role: "X, C", img: topImg },
  { name: "Rahul", role: "XII, D", img: topImg },
];

export default function TopPerformers() {
  const [bestIndex, setBestIndex] = useState(0);
  const [studentIndex, setStudentIndex] = useState(0);

  const nextBest = () =>
    setBestIndex((prev) => (prev + 1) % bestPerformers.length);

  const prevBest = () =>
    setBestIndex((prev) =>
      prev === 0 ? bestPerformers.length - 1 : prev - 1
    );

  const nextStudent = () =>
    setStudentIndex((prev) => (prev + 1) % starStudents.length);

  const prevStudent = () =>
    setStudentIndex((prev) =>
      prev === 0 ? starStudents.length - 1 : prev - 1
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

      {/* ================= BEST PERFORMER ================= */}
      <div className="rounded-xl overflow-hidden bg-green-500 text-white flex flex-col">

        {/* TOP CONTENT */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm">Best Performer</h4>

            <div className="flex gap-2">
            <button onClick={prevBest} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
  <ChevronLeft size={14} />
</button>
<button onClick={nextBest} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
  <ChevronRight size={14} />
</button>

            </div>
          </div>

          <p className="text-base font-bold">
  {bestPerformers[bestIndex].name}
</p>
<p className="text-xs opacity-90">
  {bestPerformers[bestIndex].role}
</p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 overflow-hidden">
        <img
  src={bestPerformers[bestIndex].img}
  className="w-full h-full object-cover"
  alt="Best Performer"
/>

        </div>
      </div>

      {/* ================= STAR STUDENTS ================= */}
      <div className="rounded-xl overflow-hidden bg-blue-600 text-white flex flex-col">

        {/* TOP CONTENT */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Star size={14} />
              <h4 className="font-semibold text-sm">Star Students</h4>
            </div>

            <div className="flex gap-2">
            <button onClick={prevStudent} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
  <ChevronLeft size={14} />
</button>
<button onClick={nextStudent} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
  <ChevronRight size={14} />
</button>

            </div>
          </div>

          <p className="text-base font-bold">
  {starStudents[studentIndex].name}
</p>
<p className="text-xs opacity-90">
  {starStudents[studentIndex].role}
</p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 overflow-hidden">
        <img
  src={starStudents[studentIndex].img}
  className="w-full h-full object-cover"
  alt="Star Student"
/>
        </div>
      </div>

    </div>
  );
}
