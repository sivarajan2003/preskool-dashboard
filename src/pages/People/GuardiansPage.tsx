import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  LayoutGrid,
  List,
  Filter,
  CalendarDays,
  ArrowUpDown,
  MoreVertical,
} from "lucide-react";

/* ================= GUARDIANS DATA ================= */

const guardians = [
  {
    id: "G124545",
    name: "Avila",
    added: "01 Dec 2023",
    email: "avi@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=36",
    child: {
      name: "Gifford",
      image: "https://i.pravatar.cc/150?img=11",
    },
  },
  {
    id: "G124553",
    name: "Claudia",
    added: "27 Feb 2024",
    email: "tom@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=29",
    child: {
      name: "Richard",
      image: "https://i.pravatar.cc/150?img=12",
    },
  },
  {
    id: "G124549",
    name: "Jessie",
    added: "08 Jan 2024",
    email: "jes@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=21",
    child: {
      name: "Kathleen",
      image: "https://i.pravatar.cc/150?img=13",
    },
  },
  {
    id: "G124546",
    name: "Edwin",
    added: "10 Dec 2023",
    email: "edw@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=41",
    child: {
      name: "Susan",
      image: "https://i.pravatar.cc/150?img=14",
    },
  },
  {
    id: "G124548",
    name: "Mich",
    added: "22 Dec 2023",
    email: "mic@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=25",
    child: {
      name: "Julie",
      image: "https://i.pravatar.cc/150?img=15",
    },
  },
  {
    id: "G124547",
    name: "Mary",
    added: "15 Dec 2023",
    email: "mary@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=48",
    child: {
      name: "Ryan",
      image: "https://i.pravatar.cc/150?img=16",
    },
  },
  {
    id: "G124550",
    name: "Robert",
    added: "19 Jan 2024",
    email: "rob@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=14",
    child: {
      name: "Ralph",
      image: "https://i.pravatar.cc/150?img=17",
    },
  },
  {
    id: "G124552",
    name: "Arthur",
    added: "11 Feb 2024",
    email: "art@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=18",
    child: {
      name: "Gifford",
      image: "https://i.pravatar.cc/150?img=11",
    },
  },
  {
    id: "G124551",
    name: "Colleen",
    added: "24 Jan 2024",
    email: "col@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=32",
    child: {
      name: "Lisa",
      image: "https://i.pravatar.cc/150?img=19",
    },
  },
  {
    id: "G124556",
    name: "Thomas",
    added: "25 Mar 2024",
    email: "tom@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=12",
    child: {
      name: "Janet",
      image: "https://i.pravatar.cc/150?img=20",
    },
  },
  {
    id: "G124554",
    name: "Johnson",
    added: "14 Mar 2024",
    email: "john@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=33",
    child: {
      name: "Kathleen",
      image: "https://i.pravatar.cc/150?img=13",
    },
  },
  {
    id: "G124555",
    name: "Marquita",
    added: "18 Mar 2024",
    email: "mar@example.com",
    phone: "+1 65738 58937",
    image: "https://i.pravatar.cc/150?img=47",
    child: {
      name: "Joann",
      image: "https://i.pravatar.cc/150?img=21",
    },
  },
];

/* ================= PAGE ================= */

export default function GuardianPage() {
  const today = "15 May 2020 - 24 May 2024";
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-white border rounded-xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Guardian</h2>
            <p className="text-sm text-gray-500">
              Dashboard / People / Guardian
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <RefreshCcw size={16} />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <Printer size={16} />
            </button>
            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
              Export
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
              Add Guardian
            </button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm text-gray-600">
              <CalendarDays size={16} />
              {today}
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 border rounded-lg ${
                view === "grid" ? "bg-blue-600 text-white" : ""
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 border rounded-lg ${
                view === "list" ? "bg-blue-600 text-white" : ""
              }`}
            >
              <List size={16} />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
              <ArrowUpDown size={16} />
              Sort By A-Z
            </button>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guardians.map((g) => (
          <div key={g.id} className="bg-white border rounded-2xl p-5">

            <div className="flex items-center justify-between text-xs text-blue-600 mb-4">
              <span>{g.id}</span>
              <MoreVertical size={16} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-4 mb-5">
              <img src={g.image} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="text-sm font-semibold">{g.name}</h4>
                <p className="text-xs text-gray-500">
                  Added on {g.added}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs pb-4 border-b">
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <p className="font-medium">{g.email}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Phone</p>
                <p className="font-medium">{g.phone}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img src={g.child.image} className="w-7 h-7 rounded-full" />
                <span className="text-xs font-medium">{g.child.name}</span>
              </div>

              <button className="px-4 py-1.5 text-xs bg-gray-100 rounded-lg hover:bg-gray-200">
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg">
          Load More
        </button>
      </div>
    </div>
  );
}
