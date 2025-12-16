import { Calendar } from 'lucide-react';

const data = [
  { label: 'Q1: 2023', total: 55, collected: 43 },
  { label: 'Q1: 2023', total: 62, collected: 49 },
  { label: 'Q1: 2023', total: 60, collected: 47 },
  { label: 'Q1: 2023', total: 63, collected: 50 },
  { label: 'Q1: 2023', total: 58, collected: 46 },
  { label: 'Q1: 2023', total: 50, collected: 41 },
  { label: 'Q1: 2023', total: 45, collected: 36 },
  { label: 'Q1: 2023', total: 55, collected: 44 },
  { label: 'Q1: 2023', total: 62, collected: 48 },
];

const MAX_VALUE = 70;
const CHART_HEIGHT = 220;

export default function FeeCollectionChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200">

      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900">
          Fees Collection
        </h3>

        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50">
          <Calendar className="w-4 h-4" />
          Last 8 Quarter
        </button>
      </div>

      {/* LEGEND */}
      <div className="flex items-center gap-6 px-6 py-3 text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          Total Fee
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          Collected Fee
        </div>
      </div>

      {/* CHART */}
      <div className="px-6 pb-6 flex">

        {/* Y AXIS */}
        <div
          className="flex flex-col justify-between pr-4 text-xs text-gray-500"
          style={{ height: CHART_HEIGHT }}
        >
          <span>60L</span>
          <span>50L</span>
          <span>40L</span>
          <span>30L</span>
          <span>20L</span>
          <span>10L</span>
          <span>0</span>
        </div>

        {/* BARS */}
        <div
          className="flex-1 flex items-end justify-between gap-6"
          style={{ height: CHART_HEIGHT }}
        >
          {data.map((item, index) => {
            const totalHeight =
              (item.total / MAX_VALUE) * CHART_HEIGHT;
            const collectedHeight =
              (item.collected / MAX_VALUE) * CHART_HEIGHT;

            return (
              <div key={index} className="flex flex-col items-center w-full">

                {/* BAR */}
<div className="relative w-10 h-full flex items-end justify-center">

{/* Total Fee (background bar) */}
<div
  className="absolute bottom-0 w-full bg-gray-200 rounded-md"
  style={{ height: totalHeight }}
/>

{/* Collected Fee (foreground bar) */}
<div
  className="relative w-7 bg-blue-600 rounded-md"
  style={{ height: collectedHeight }}
/>
</div>


                {/* LABEL */}
                <span className="mt-3 text-xs text-gray-500">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
