"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setSuccess(true);
    } else {
      setError(true);
    }
    setLoading(false);

    // try {
    //   await fetch("/api/register", {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //     headers: { "content-type": "application/json" },
    //   });
    //   setLoading(false);
    //   setSuccess(true);
    // } catch (error) {
    //   setError(true);
    // }
  };

  return (
    <section className="my-4 min-h-screen">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

      {success && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.
          <br />
          Please try again later
        </div>
      )}

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
        <button type="submit">Register</button>
        <h4 className="my-4 text-center text-gray-500">Or login with social</h4>
        <button className="flex items-center gap-4" disabled={loading}>
          <Image src={"/google.png"} alt="google" width={28} height={28} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};
export default RegisterPage;
