"use client";

import withAuth from "../../lib/withAuth";

function ProfilePage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Profil Sayfası 👤</h1>
      <p className="mt-4 text-gray-600">Sadece giriş yapan kullanıcılar bu sayfayı görebilir.</p>
    </div>
  );
}

export default withAuth(ProfilePage);
