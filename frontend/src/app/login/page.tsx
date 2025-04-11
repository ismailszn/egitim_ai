"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Giriş başarılı!");
        localStorage.setItem("token", data.access_token);
        router.push("/dashboard");
      } else {
        alert("Giriş başarısız: " + data.detail);
      }
    } catch (err) {
      alert("Sunucuya ulaşılamıyor." + err);
    }
  };

  const handleGoogleLogin = () => {
    // Google giriş URL'ine yönlendirme yap
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-2 border border-gray-300 rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Giriş Yap
        </button>

        <p className="mt-4 text-center text-sm">
          Hesabın yok mu?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Kayıt ol
          </a>
        </p>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Google ile Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
}
