import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Palette,
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const defaultProfile = {
    name: "Admin Name",
    email: "admin@preskool.com",
    department: "Administration",
  };
  
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("adminProfile");
    return saved ? JSON.parse(saved) : defaultProfile;
  });
  
  const [tempProfile, setTempProfile] = useState(profile);
  
  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage your account and preferences
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-3 mb-6">
        <TabButton
          label="Profile"
          icon={User}
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
        <TabButton
          label="Notifications"
          icon={Bell}
          active={activeTab === "notifications"}
          onClick={() => setActiveTab("notifications")}
        />
        <TabButton
          label="Security"
          icon={Shield}
          active={activeTab === "security"}
          onClick={() => setActiveTab("security")}
        />
        <TabButton
          label="Preferences"
          icon={Palette}
          active={activeTab === "preferences"}
          onClick={() => setActiveTab("preferences")}
        />
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-xl border p-6">
      {activeTab === "profile" && (
  <ProfileSettings
    profile={profile}
    tempProfile={tempProfile}
    setTempProfile={setTempProfile}
    setProfile={setProfile}
  />
)}
        {activeTab === "notifications" && <NotificationSettings />}
        {activeTab === "security" && <SecuritySettings />}
        {activeTab === "preferences" && <PreferenceSettings />}
      </div>
    </div>
  );
}

/* ---------------- TAB BUTTON ---------------- */

function TabButton({
  label,
  icon: Icon,
  active,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          active
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}

/* ---------------- PROFILE ---------------- */

function ProfileSettings({
    profile,
    tempProfile,
    setTempProfile,
    setProfile,
  }: any) {
    return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Profile Information</h2>

      <div className="grid grid-cols-2 gap-4">
      <Input
  label="Full Name"
  value={tempProfile.name}
  onChange={(e: any) =>
    setTempProfile({ ...tempProfile, name: e.target.value })
  }
/>

<Input
  label="Email"
  value={tempProfile.email}
  disabled
/>

<Input
  label="Department"
  value={tempProfile.department}
  onChange={(e: any) =>
    setTempProfile({ ...tempProfile, department: e.target.value })
  }
/>

        <Input label="Role" placeholder="Admin" disabled />
      </div>

      <div className="flex justify-end gap-3 mt-6">
      <button
  onClick={() => setTempProfile(profile)}
  className="px-4 py-2 border rounded-lg text-sm"
>
  Cancel
</button>

<button
  onClick={() => {
    localStorage.setItem(
      "adminProfile",
      JSON.stringify(tempProfile)
    );
    setProfile(tempProfile);
    alert("Settings saved successfully ✅");
  }}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
>
  Save Changes
</button>
      </div>
    </div>
  );
}

/* ---------------- NOTIFICATIONS ---------------- */

function NotificationSettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Email Notifications</h2>

      <Toggle label="Promotional emails" />
      <Toggle label="Exam notifications" />
      <Toggle label="Attendance alerts" />
      <Toggle label="System updates" />
    </div>
  );
}

/* ---------------- SECURITY ---------------- */

function SecuritySettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Security</h2>

      <Input label="Current Password" type="password" />
      <Input label="New Password" type="password" />
      <Input label="Confirm Password" type="password" />

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
        Update Password
      </button>
    </div>
  );
}

/* ---------------- PREFERENCES ---------------- */

function PreferenceSettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Preferences</h2>

      <Toggle label="Dark Mode" />
      <Toggle label="Compact Sidebar" />
      <Toggle label="Enable animations" />
    </div>
  );
}

/* ---------------- REUSABLE ---------------- */

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        {...props}
        className="mt-1 w-full h-10 px-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

function Toggle({ label }: any) {
  return (
    <div className="flex items-center justify-between border rounded-lg px-4 py-3">
      <span className="text-sm">{label}</span>
      <input type="checkbox" className="w-5 h-5 accent-blue-600" />
    </div>
  );
}
