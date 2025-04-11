"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function withAuth(Component: React.FC) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Bu sayfaya erişmek için giriş yapmalısınız.");
        router.replace("/login");
      } else {
        setIsAuthorized(true);
      }
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
    }

    if (!isAuthorized) return null;

    return <Component {...props} />;
  };
}
