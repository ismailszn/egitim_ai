"use client";

import withAuth from "../../lib/withAuth";
import LogoutButton from "../../components/LogoutButton";
import useUserEmail from "../../hooks/useUserEmail";

function DashboardPage() {
  const email = useUserEmail();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">
        Hoş geldin {email ? email : "kullanıcı"} 🎉
      </h1>
      <p className="mt-4 text-gray-600">Giriş başarılı olduysa bu sayfadasın.</p>

      <LogoutButton />
    </div>
  );
}

export default withAuth(DashboardPage);
