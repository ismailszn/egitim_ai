"use client";

export default async function fetchWithAuth<T>(url: string): Promise<T | null> {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token yok, kullanıcı giriş yapmamış.");
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Yetkisiz veya başarısız istek.");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch hatası:", error);
    return null;
  }
}
