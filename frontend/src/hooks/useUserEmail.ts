"use client";

export default function useUserEmail(): string | null {
  if (typeof window === "undefined") return null;

  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));

    return decoded.sub || null;
  } catch {
    return null;
  }
}
