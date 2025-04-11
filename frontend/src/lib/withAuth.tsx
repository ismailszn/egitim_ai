"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { ComponentType } from "react";

export default function withAuth<P extends object>(Component: ComponentType<P>) {
  const WrappedComponent = (props: P) => {
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
    }, [router]);

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>Yükleniyor...</p>
        </div>
      );
    }

    if (!isAuthorized) return null;

    return <Component {...props} />;
  };

  return WrappedComponent;
}
