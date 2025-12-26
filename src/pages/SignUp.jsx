import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-zinc-950 px-4">
      <div className="bg-zinc-900 p-10 rounded-xl w-full max-w-md shadow-2xl border border-zinc-800 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-zinc-400 mb-8 text-sm">Join VibeSync to start your musical journey.</p>
        
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:border-emerald-500 outline-none" />
          <input type="email" placeholder="Email Address" className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:border-emerald-500 outline-none" />
          <input type="password" placeholder="Password" className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:border-emerald-500 outline-none" />
        </div>

        <button className="w-full bg-emerald-500 text-black font-bold py-3 rounded-full hover:bg-emerald-400 transition mt-8 mb-4">
          Get Started
        </button>

        <p className="text-zinc-500 text-sm">
          Already have an account? <Link to="/signin" className="text-emerald-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
