"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login"); // yönlendirme
    } else {
      setAuthorized(true); // sadece token varsa içerik göster
    }
  }, [router]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Dashboard&apos;a hoş geldin 🎉</h1>
      <p className="mt-4 text-gray-600">Giriş başarılı olduysa bu sayfadasın.</p>
    </div>
  );
}
