"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } else {
      alert("Token alınamadı.");
      router.push("/login");
    }
  }, [router]); // 🔁 router dependency eklendi

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-xl text-gray-700">Yönlendiriliyorsunuz...</p>
    </div>
  );
}
