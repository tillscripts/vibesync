import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      alert(`Welcome back, ${email}!`);
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-zinc-950">
      <form onSubmit={validateEmail} className="bg-zinc-900 p-10 rounded-xl w-full max-w-md shadow-2xl border border-zinc-800">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="text-xs font-bold text-zinc-400 uppercase">Email Address</label>
          <input 
            type="email" 
            className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 mt-2 text-white focus:border-emerald-500 outline-none"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>
        <button className="w-full bg-emerald-500 text-black font-bold py-3 rounded-full hover:bg-emerald-400 transition mt-4">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
