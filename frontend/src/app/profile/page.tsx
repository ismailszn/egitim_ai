"use client";

import { useEffect, useState } from "react";
import withAuth from "@/lib/withAuth";

function ProfilePage() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserName(payload.name); // ✅ İsim bilgisi burada
    }
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Profil Sayfası 👤</h1>
      <p className="mt-4 text-gray-600">
        Merhaba <span className="font-semibold">{userName || "kullanıcı"}</span>, bu senin profil sayfan.
      </p>
    </div>
  );
}

export default withAuth(ProfilePage);
