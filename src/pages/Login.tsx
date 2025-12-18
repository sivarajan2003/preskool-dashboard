import { useState } from 'react';
import { Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import LoginImg from '../assets/login.png';
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
  
    // Redirect by role
    navigate(`/${user.role}/dashboard`);

  };
  

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE SECTION */}
      <div className="hidden lg:flex lg:w-1/2 h-screen bg-[#F7FAFF] relative">
      <div className="flex items-center justify-center w-full h-full">
  <img
    src={LoginImg}
    alt="Login Illustration"
    className="w-[70%] max-w-[600px] object-contain"
  />
</div>

      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-[420px] px-6">

          {/* LOGO */}
          <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-6">
  <img
    src={Logo}
    alt="PreSkool Logo"
    className="h-10 w-10 object-contain"
  />
  <span className="text-xl font-semibold text-gray-900">
    PreSkool
  </span>
</div>

          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-center mb-1">
            Welcome
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Please enter your details to sign in
          </p>

          {/* ERROR */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
              {error}
            </div>
          )}

          {/* SOCIAL LOGIN */}
          <div className="flex gap-3 mb-4">
            <button className="flex-1 h-11 rounded-lg bg-[#1877F2] flex items-center justify-center">
              <Facebook className="w-5 h-5 text-white" />
            </button>

            <button className="flex-1 h-11 rounded-lg border flex items-center justify-center">
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            </button>

            <button className="flex-1 h-11 rounded-lg bg-black flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="w-5 h-5 invert"
                alt="Apple"
              />
            </button>
          </div>

          {/* OR */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 pr-10 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
                alt="email"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 pr-10 border rounded-lg text-sm"
                required
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
                alt="password"
              />
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <span className="text-blue-600 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-blue-600 text-white rounded-lg text-sm font-medium"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* SIGNUP LINK */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-600 cursor-pointer font-medium"
            >
              Create Account
            </span>
          </p>

          <p className="mt-10 text-center text-xs text-gray-400">
            Copyright © 2025 - Preskool
          </p>
        </div>
      </div>
    </div>
  );
}
