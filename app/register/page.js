"use client";
import Image from "next/image";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    });
  };
  return (
    <section className="my-4 min-h-screen">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="block max-w-sm mx-auto">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <h4 className="my-4 text-center text-gray-500">Or login with social</h4>
        <button className="flex items-center gap-4">
          <Image src={"/google.png"} alt="google" width={28} height={28} />
          Loign with Google
        </button>
      </form>
    </section>
  );
};
export default RegisterPage;
