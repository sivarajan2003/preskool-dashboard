import { useState } from 'react';
import { Facebook, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SignupImg from '../assets/signup.png';
import Logo from '../assets/logo.png';

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!agree) {
      setError('Please agree to Terms & Privacy');
      setLoading(false);
      return;
    }

    // ✅ Save user (frontend only)
    localStorage.setItem(
      'user',
      JSON.stringify({ name, email, password })
    );

    setLoading(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
     {/* LEFT IMAGE SECTION */}
<div className="hidden lg:flex lg:w-1/2 h-screen bg-[#F7FAFF] relative overflow-hidden">

{/* IMAGE */}
<div className="flex items-center justify-center w-full h-full">
  <img
    src={SignupImg}
    alt="Signup Illustration"
    className="w-[520px] xl:w-[620px] 2xl:w-[680px] object-contain"
  />
</div>

{/* WAVE */}
<div className="absolute bottom-0 left-0 w-full">
  <svg viewBox="0 0 1440 320" className="w-full h-[160px]">
    <path
      fill="#4361EE"
      fillOpacity="1"
      d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z"
    />
  </svg>
</div>

</div>


      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center bg-white">
      <div className="w-full max-w-[420px] px-6">

          {/* LOGO */}
          <div className="text-center mb-6">
          <img
  src={Logo}
  alt="PreSkool Logo"
  className="mx-auto h-15 mb-4"
/>


  <h2 className="text-[26px] font-semibold text-gray-900">
    Register
  </h2>
  <p className="text-sm text-gray-500 mt-1">
    Please enter your details to sign up
  </p>
</div>


{/* TITLE */}

{/* SOCIAL LOGIN */}
<div className="flex gap-3 mb-4">
  <button className="flex-1 h-11 rounded-lg bg-[#1877F2] flex items-center justify-center">
    <Facebook className="w-5 h-5 text-white" />
  </button>

  <button className="flex-1 h-11 rounded-lg border flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      className="w-5 h-5"
    />
  </button>

  <button className="flex-1 h-11 rounded-lg bg-black flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      className="w-5 h-5 invert"
    />
  </button>


  {/* OR DIVIDER */}
  <div className="flex items-center gap-3 my-4">
  <div className="flex-1 h-px bg-gray-200" />
  <span className="text-xs text-gray-400">OR</span>
  <div className="flex-1 h-px bg-gray-200" />
</div>

</div>


          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-4 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"

            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 px-4 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-11 px-4 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />

<label className="flex items-center gap-2 text-xs text-gray-600 mt-2">
  <input type="checkbox" />
  I agree to <span className="text-blue-600">Terms & Privacy</span>
</label>


            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 mt-4 bg-blue-600 text-white rounded-lg text-sm font-medium"            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-600">
  Already have an account?{' '}
  <span
    onClick={() => navigate('/login')}
    className="text-blue-600 cursor-pointer font-medium"
  >
    Sign In
  </span>
</p>

        </div>
      </div>
    </div>
  );
}
