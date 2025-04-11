"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow-sm">
      <Link href="/">
        <h1 className="text-xl font-bold text-gray-800">egitim-ai</h1>
      </Link>

      <div className="flex items-center gap-4">
        {isLoggedIn && (
          <>
            <Link href="/profile" className="text-gray-700 hover:underline">
              Profil
            </Link>
            <Link href="/user" className="text-gray-700 hover:underline">
              Kullanıcı Bilgileri
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Çıkış Yap
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
