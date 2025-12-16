import {
    CalendarCheck,
    CalendarPlus,
    BadgePercent,
    Wallet,
    ChevronRight,
  } from "lucide-react";
  
  const actions = [
    {
      title: "View Attendance",
      icon: CalendarCheck,
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-500",
    },
    {
      title: "New Events",
      icon: CalendarPlus,
      bg: "bg-green-50",
      iconBg: "bg-green-500",
    },
    {
      title: "Membership Plans",
      icon: BadgePercent,
      bg: "bg-red-50",
      iconBg: "bg-red-500",
    },
    {
      title: "Finance & Accounts",
      icon: Wallet,
      bg: "bg-cyan-50",
      iconBg: "bg-cyan-500",
    },
  ];
  
  export default function QuickActionCards() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl 
                border border-gray-200 ${item.bg}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.iconBg}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
  
                <p className="text-sm font-medium text-gray-800">
                  {item.title}
                </p>
              </div>
  
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          );
        })}
      </div>
    );
  }
  