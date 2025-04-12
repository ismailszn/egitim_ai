"use client";

import withAuth from "@/lib/withAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Kullanıcı verisi alınamadı.");
        const data = await res.json();
        setUser(data);
      })
      .catch(() => {
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Profil Sayfası 👤</h1>
      <div className="mt-4 space-y-2 text-gray-700">
        <p><strong>Ad:</strong> {user?.name}</p>
        <p><strong>E-posta:</strong> {user?.email}</p>
      </div>
    </div>
  );
}

export default withAuth(ProfilePage);
