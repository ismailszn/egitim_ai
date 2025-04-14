"use client";

import withAuth from "@/lib/withAuth";
import { useEffect, useState } from "react";

const icons = [
  {
    title: "Gelişim Raporu",
    src: "/images/gelisim-raporu.png",
    module: "gelisim-raporu",
  },
  {
    title: "Ödev Yardımcısı",
    src: "/images/odev-yardimcisi.png",
    module: "odev-yardimcisi",
  },
  {
    title: "Psikolojik Destek",
    src: "/images/psikolojik-destek.png",
    module: "psikolojik-destek",
  },
  {
    title: "Hikaye Oluştur",
    src: "/images/hikaye-olustur.png",
    module: "hikaye-olustur",
  },
];

function DashboardPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const openModule = (moduleName: string) => {
    alert(`'${moduleName}' modülü açılıyor...`);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Kullanıcı bilgisi alınamadı.");
        const data = await res.json();
        setUser(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Yükleniyor...</div>;
  }

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row font-sans transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`md:w-1/5 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-r"
        } p-6 border flex flex-col items-center gap-6`}
      >
        <div className="bg-purple-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-3xl">
          🙂
        </div>
        <div className="text-center">
          <h1 className="text-lg font-semibold">AI Panel</h1>
          <p className="text-gray-400">Modüller</p>
        </div>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 text-sm rounded bg-purple-600 text-white hover:bg-purple-700"
        >
          {darkMode ? "Açık Mod" : "Karanlık Mod"}
        </button>
        <div className="flex-grow" />
        {user && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span className="text-sm">{user.name}</span>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {icons.map((icon) => (
            <div
              key={icon.title}
              onClick={() => openModule(icon.module)}
              className={`cursor-pointer p-8 rounded-2xl flex flex-col items-center text-center border ${
                darkMode
                  ? "bg-gray-800 border-gray-600"
                  : "bg-gray-100 border-gray-200"
              }`}
              style={{
                boxShadow: darkMode
                  ? "inset 6px 6px 12px #1f2937, inset -6px -6px 12px #374151"
                  : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff",
              }}
            >
              <img
                src={icon.src}
                alt={icon.title}
                className="w-12 h-12 mb-4"
              />
              <p className="font-medium">{icon.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default withAuth(DashboardPage);
