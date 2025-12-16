import { Calendar, Clock, Users } from "lucide-react";

interface Event {
  title: string;
  date: string;
  time: string;
  color: string;
}

export default function UpcomingEvents() {
  const events: Event[] = [
    {
      title: "Parents, Teacher Meet",
      date: "15 July 2024",
      time: "09:10 AM - 10:50 PM",
      color: "blue",
    },
    {
      title: "Staff Meeting",
      date: "10 July 2024",
      time: "09:10 AM - 10:50 PM",
      color: "indigo",
    },
    {
      title: "Vacation Meeting",
      date: "07 July 2024",
      time: "09:10 AM - 10:50 PM",
      color: "red",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
        <span className="text-sm text-blue-600 font-medium cursor-pointer">
          See All
        </span>
      </div>

      {/* EVENTS */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg border border-gray-200 shadow-sm p-4 pl-5`}
          >
            {/* LEFT COLOR LINE */}
            <span
              className={`absolute left-0 top-0 h-full w-1 rounded-l-lg ${
                event.color === "blue"
                  ? "bg-blue-500"
                  : event.color === "indigo"
                  ? "bg-indigo-500"
                  : "bg-red-500"
              }`}
            />

            {/* TOP ROW */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {/* ICON BOX */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    event.color === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : event.color === "indigo"
                      ? "bg-indigo-50 text-indigo-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {event.title}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {event.time}
              </div>

              {/* AVATARS */}
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/30?img=1"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/30?img=2"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/30?img=3"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
