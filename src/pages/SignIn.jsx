import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setMsg("Invalid email address");
      return;
    }
    localStorage.setItem("user", email);
    setMsg("Signed in successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white">
      <div className="bg-slate-800 p-8 rounded w-96">
        <h2 className="text-xl mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 bg-slate-700 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full bg-primary p-2 rounded"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <p className="mt-4 text-sm">{msg}</p>
      </div>
    </div>
  );
}

