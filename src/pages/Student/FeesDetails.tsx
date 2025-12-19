import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeesDetails() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg border hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
        </button>

        <h2 className="text-xl font-semibold">Fees Details</h2>
      </div>

      {/* CONTENT */}
      <div className="bg-white border rounded-xl p-6">
        Fees details content here
      </div>
    </div>
  );
}
