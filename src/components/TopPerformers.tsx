import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import bestImg from "../assets/best.png";
import topImg from "../assets/top.png";

export default function TopPerformers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

      {/* ================= BEST PERFORMER ================= */}
      <div className="rounded-xl overflow-hidden bg-green-500 text-white flex flex-col">

        {/* TOP CONTENT */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm">Best Performer</h4>

            <div className="flex gap-2">
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronLeft size={14} />
              </button>
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <p className="text-base font-bold">Adrian Rubell</p>
          <p className="text-xs opacity-90">Physics Teacher</p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 overflow-hidden">
          <img
            src={bestImg}
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
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronLeft size={14} />
              </button>
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <p className="text-base font-bold">Tenesa</p>
          <p className="text-xs opacity-90">XII, A</p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 overflow-hidden">
          <img
            src={topImg}
            className="w-full h-full object-cover"
            alt="Star Student"
          />
        </div>
      </div>

    </div>
  );
}
