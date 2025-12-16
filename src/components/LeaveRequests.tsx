import { Check, X, Calendar } from "lucide-react";

export default function LeaveRequests() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-900">
          Leave Requests
        </h3>

        <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">
          <Calendar className="w-4 h-4" />
          This Week
        </button>
      </div>

      {/* REQUEST LIST */}
      <div className="space-y-4">

        {/* ITEM 1 */}
        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <img
              src="https://i.pravatar.cc/40?img=12"
              className="w-10 h-10 rounded-lg object-cover"
              alt="James"
            />

            <div>
              <p className="font-medium text-gray-900">
                James
                <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                  Emergency
                </span>
              </p>

              <p className="text-sm text-gray-500">
                Physics Teacher
              </p>

              <div className="flex items-center gap-6 mt-1 text-xs text-gray-400">
                <span>Leave : 12 - 13 May</span>
                <span>Apply on : 12 May</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-green-500 text-white hover:bg-green-600">
              <Check size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-red-500 text-white hover:bg-red-600">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <img
              src="https://i.pravatar.cc/40?img=32"
              className="w-10 h-10 rounded-lg object-cover"
              alt="Hendrita"
            />

            <div>
              <p className="font-medium text-gray-900">
                Hendrita
                <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                  Medical
                </span>
              </p>

              <p className="text-sm text-gray-500">
                Maths Teacher
              </p>

              <div className="flex items-center gap-6 mt-1 text-xs text-gray-400">
                <span>Leave : 17 - 18 May</span>
                <span>Apply on : 12 May</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-green-500 text-white hover:bg-green-600">
              <Check size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-red-500 text-white hover:bg-red-600">
              <X size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
