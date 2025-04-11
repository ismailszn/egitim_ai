"use client";

import { useEffect, useState } from "react";
import withAuth from "@/lib/withAuth";

function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserName(payload.name); // ✅ name kullanıyoruz artık
    }
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">
        Hoş geldin {userName || "Ziyaretçi"} 🎉
      </h1>
      <p className="mt-4 text-gray-600">Giriş başarılı olduysa bu sayfadasın.</p>
      <button
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Çıkış Yap
      </button>
    </div>
  );
}

export default withAuth(DashboardPage);
