"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-8 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      Çıkış Yap
    </button>
  );
}
