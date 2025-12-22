import { useState } from 'react';
import { Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginIllustration from "../assets/login-illustration.png";
import { Eye, EyeOff, Mail } from "lucide-react";

//import LoginImg from '../assets/login.png';
import Logo from '../assets/logo.png';
import GoogleIcon from '../assets/google.png';
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
      setError("Invalid email or password");
      setLoading(false);
      return;
    }
  
    // Save auth info
    localStorage.setItem("isAuth", "true");
localStorage.setItem("role", user.role);

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
  {/* LEFT ILLUSTRATION SECTION */}
<div className="hidden lg:flex lg:w-1/2 bg-[#F7FAFF] relative overflow-hidden h-screen">

{/* CENTER IMAGE */}
<div className="absolute inset-0 flex items-center justify-center -translate-y-12">
  <img
    src={LoginIllustration}
    alt="Login Illustration"
    className="w-[520px] object-contain"
  />
</div>

{/* HALF PAGE WAVE */}
<div className="absolute bottom-0 left-0 w-full h-1/2">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-full"
    preserveAspectRatio="none"
  >
    <path
      fill="#4361EE"
      d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,176C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L0,320Z"
    />
  </svg>
</div>

</div>


{/* ONLY ONE BOTTOM WAVE
<div className="absolute bottom-0 left-0 w-full">
  <svg viewBox="0 0 1440 320" className="w-full h-[160px]">
    <path
      fill="#4361EE"
      d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z"
    />
  </svg>
</div> */}



      {/* RIGHT LOGIN FORM */}
      <div className="flex-1 flex items-center justify-center px-6">
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
              <span className="text-blue-600 cursor-pointer">
                Forgot password?
              </span>
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