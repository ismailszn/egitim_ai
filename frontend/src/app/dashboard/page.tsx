"use client";

import withAuth from "../../lib/withAuth";

function DashboardPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Dashboard&apos;a hoş geldin 🎉</h1>
      <p className="mt-4 text-gray-600">Giriş başarılı olduysa bu sayfadasın.</p>
    </div>
  );
}

export default withAuth(DashboardPage);
