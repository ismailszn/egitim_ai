"use client";

import withAuth from "../../lib/withAuth";
import LogoutButton from "../../components/LogoutButton";
import useUserEmail from "../../hooks/useUserEmail";

function ProfilePage() {
  const email = useUserEmail();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">
        Merhaba {email ? email : "kullanıcı"} 👋
      </h1>
      <p className="mt-4 text-gray-600">
        Burası senin profil sayfan. Buraya sadece giriş yapmış kullanıcılar ulaşabilir.
      </p>

      <LogoutButton />
    </div>
  );
}

export default withAuth(ProfilePage);
