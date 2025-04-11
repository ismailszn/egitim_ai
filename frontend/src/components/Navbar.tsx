"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-800">
        egitim-ai
      </Link>

      <div className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" className="text-gray-700 hover:text-black">
              Dashboard
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-black">
              Profil
            </Link>
            <Link href="/user" className="text-gray-700 hover:text-black">
              Kullanıcı Bilgileri
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Çıkış
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-gray-700 hover:text-black">
              Giriş Yap
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-black">
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
