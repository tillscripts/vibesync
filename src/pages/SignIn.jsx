import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSignIn = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' });
    } else {
      setStatus({ type: 'success', msg: `Login successful for ${email}!` });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-zinc-950">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Sign in to VibeSync</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 bg-zinc-800 border border-zinc-700 p-3 rounded text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="name@example.com"
            />
          </div>
          {status.msg && (
            <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>
              {status.msg}
            </p>
          )}
          <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-full transition duration-300">
            Continue with Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
