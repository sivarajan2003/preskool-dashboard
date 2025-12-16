import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import bestImg from "../assets/best.png";
import topImg from "../assets/top.png";

export default function TopPerformers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* ================= BEST PERFORMER ================= */}
      <div className="rounded-xl overflow-hidden bg-green-500 text-white relative">
        
        {/* TOP CONTENT */}
        <div className="p-5 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">Best Performer</h4>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <p className="text-lg font-bold">Adrian Rubell</p>
          <p className="text-sm opacity-90">Physics Teacher</p>
        </div>

        {/* IMAGE (BOTTOM) */}
        <div className="h-[220px]">
         {/* IMAGE (BOTTOM) */}
<div className="h-[220px]">
  <img
    src={bestImg}
    alt="Best Performer"
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </div>

      {/* ================= STAR STUDENTS ================= */}
      <div className="rounded-xl overflow-hidden bg-blue-600 text-white relative">
        
        {/* TOP CONTENT */}
        <div className="p-5 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Star size={18} />
              <h4 className="font-semibold">Star Students</h4>
            </div>

            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <p className="text-lg font-bold">Tenesa</p>
          <p className="text-sm opacity-90">XII, A</p>
        </div>

        {/* IMAGE (BOTTOM) */}
        {/* IMAGE (BOTTOM) */}
<div className="h-[220px]">
  <img
    src={topImg}
    alt="Star Student"
    className="w-full h-full object-cover"
  />
</div>

      </div>

    </div>
  );
}
