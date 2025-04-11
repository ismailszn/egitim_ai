"use client";

import { useEffect, useState } from "react";
import fetchWithAuth from "@/lib/fetchWithAuth";

type UserData = {
  email: string;
  name: string;
};

export default function UserPage() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchWithAuth<UserData>("/auth/me");
      setUser(data);
    };
    getUser();
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Kullanıcı Bilgileri</h1>
      {user ? (
        <div className="mt-4 text-gray-700">
          <p>Ad: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p className="mt-4 text-gray-500">Yükleniyor veya giriş yapılmamış.</p>
      )}
    </div>
  );
}
