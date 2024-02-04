"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {};
  return (
    <section className="mt-8 ">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="block max-w-sm mx-auto">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="submit">Login</button>
        <h4 className="my-4 text-center text-gray-500">Or login with social</h4>
        <button className="flex items-center gap-4" disabled={loading}>
          <Image src={"/google.png"} alt="google" width={28} height={28} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Don't have account?{" "}
          <Link className="underline" href={"/register"}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};
export default page;
