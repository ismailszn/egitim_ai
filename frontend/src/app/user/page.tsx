"use client";

import withAuth from "@/lib/withAuth";
import { useEffect, useState } from "react";

function UserPage() {
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser(payload);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Yükleniyor veya giriş yapılmamış.</div>;
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Kullanıcı Bilgileri</h1>
      <p className="mt-4 text-gray-600">
        <strong>Ad:</strong> {user?.name || "—"}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Email:</strong> {user?.email || "—"}
      </p>
    </div>
  );
}

export default withAuth(UserPage);
