import { useState } from 'react';
import { Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginIllustration from "../assets/login-illustration.png";
import { Eye, EyeOff, Mail } from "lucide-react";
import LeftIllustration from "../assets/login-left.png";
import SampleLogin from "../assets/samplelogin.png";

//import LoginImg from '../assets/login.png';
import Logo from '../assets/logo.png';
import GoogleIcon from '../assets/google.png';
import { toast } from "react-toastify";

// 🔹 TEMP USERS (Frontend only)
const USERS = [
  {
    email: "admin@preskool.com",
    password: "admin123",
    role: "admin",
  },
  {
    email: "teacher@preskool.com",
    password: "admin123",
    role: "teacher",
  },
  {
    email: "student@preskool.com",
    password: "admin123",
    role: "student",
  },
  {
    email: "parent@preskool.com",
    password: "admin123",
    role: "parent",
  },
  //{ email: "parent@preskool.com", password: "admin123", role: "parent" },

];

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );
  
    if (!user) {
      toast.error("Invalid email or password ❌");
      setLoading(false);
      return;
    }
    
  
    // Save auth info
    localStorage.setItem("isAuth", "true");
localStorage.setItem("role", user.role);
toast.success("Login successful ✅");


if (user.role === "admin") {
  navigate("/admin/dashboard");
}
if (user.role === "student") {
  navigate("/student/dashboard");
}
if (user.role === "teacher") {
  navigate("/teacher/dashboard");
}
if (user.role === "parent") {
  navigate("/parent/dashboard");
}

  };
  return (
    <div className="min-h-screen flex bg-white">
{/* LEFT ILLUSTRATION SECTION — SVG WAVE */}
<div className="hidden lg:flex w-[55%] relative overflow-visible bg-white">

  {/* SVG WAVE BACKGROUND */}
 {/* SVG WAVE BACKGROUND */}
 <svg
  viewBox="0 0 1043 769"
  className="absolute top-0 left-0 h-full w-[130%]"
  preserveAspectRatio="xMinYMin slice"
  xmlns="http://www.w3.org/2000/svg"
>
 <path
    d="M0 0H260C360 80 480 260 520 420C560 600 760 769 1043 769H0V0Z"
    fill="#E1E6FF"
  />
</svg>




  {/* ILLUSTRATION CONTENT */}
  <div className="relative z-10 flex items-center justify-end w-full pr-12">
  <img
    src={LeftIllustration}
    alt="Education Illustration"
    className="w-[860px] object-contain"
  />
</div>

</div>
      {/* RIGHT LOGIN FORM */}
      <div className="flex-1 flex items-center justify-center px-6 -ml-32 relative z-20 bg-white">
        <div className="w-full max-w-[360px]">
  
          {/* LOGO */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <img src={Logo} className="h-9 w-9" />
            <span className="text-lg font-semibold">PreSkool</span>
          </div>
  
          {/* TITLE */}
          <h2 className="text-xl font-semibold text-center">
            Welcome
          </h2>
          <p className="text-sm text-gray-500 text-center mt-1 mb-5">
            Please enter your details to sign in
          </p>
  
          {/* ERROR */}
          {error && (
            <div className="mb-3 p-2.5 text-sm bg-red-50 border border-red-200 rounded text-red-600">
              {error}
            </div>
          )}
  
          {/* SOCIAL LOGIN */}
          <div className="flex gap-3 mb-4">
            <button className="flex-1 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white" />
            </button>
  
            <button className="flex-1 h-10 rounded-lg border flex items-center justify-center">
              <img src={GoogleIcon} className="w-4 h-4" />
            </button>
  
            <button className="flex-1 h-10 rounded-lg bg-black flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="w-4 h-4 invert"
              />
            </button>
          </div>
  
          {/* OR */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
  
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3">
  
            {/* EMAIL */}
<div className="relative">
  <input
    type="email"
    placeholder="Email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full h-10 pl-10 pr-4 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
    required
  />

  <Mail
    size={16}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />
</div>

           {/* PASSWORD */}
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full h-10 pl-4 pr-10 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
    required
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
  >
    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
  </button>
</div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <p
    onClick={() => navigate("/forgot-password")}
    className="text-blue-600 cursor-pointer hover:underline"
  >
    Forgot password?
  </p>
            </div>
  
            <button
              type="submit"
              className="w-full h-10 bg-blue-600 text-white rounded-lg text-sm font-medium"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
  
          {/* SIGNUP */}
          <p className="mt-5 text-center text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 cursor-pointer font-medium"
            >
              Create Account
            </span>
          </p>
  
          <p className="mt-8 text-center text-xs text-gray-400">
            Copyright © 2025 - Preskool
          </p>
        </div>
      </div>
    </div>
  );
          }  