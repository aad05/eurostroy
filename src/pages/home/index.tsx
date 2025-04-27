export default function Home() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center bg-gradient-to-br from-zinc-50 to-white py-12 px-4">
      {/* Hero Section */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4">Santexnika xizmatlari</h1>
        <p className="text-lg text-zinc-600 mb-6">
        Bizning maqsadimiz — mijozlarimizga xavfsiz, ishonchli va uzoq muddat xizmat qiladigan santexnika tizimlarini taqdim etish.
        </p>
        <button className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-zinc-800 transition">Bog'lanish</button>
      </section>

      {/* Company Info Card */}
      <section className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">EuroStroy Haqida</h2>
          <p className="text-zinc-700 mb-4">
          Tashkent va O‘zbekiston bo‘ylab sifatli va ishonchli santexnika xizmatlarini taqdim etuvchi yetakchi kompaniya. Tajribali mutaxassislarimiz har qanday turdagi uy, ofis va sanoat obyektlari uchun zamonaviy va samarali santexnik yechimlarni taqdim etadi.
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-1">
            <li>Mutaxassislarimiz 5+ yillik tajribaga ega</li>
            <li>Sifat va kafolat</li>
            <li>Tezkor xizmat</li>
            <li>Transparent pricing and flexible solutions</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
            alt="EuroStroy Building"
            className="rounded-xl shadow-md w-full max-w-xs object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🏗️</span>
          <h3 className="font-bold text-lg mb-1 text-center">Quvurlarni o‘rnatish va ta'mirlash</h3>
          <p className="text-zinc-600 text-center">Yangi suv va kanalizatsiya tizimlarini o‘rnatish, eskirgan quvurlarni yangilash.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🛠️</span>
          <h3 className="font-bold text-lg mb-1 text-center">Suv sizishlarini aniqlash va tuzatish</h3>
          <p className="text-zinc-600 text-center">Maxsus texnologiyalar yordamida yashirin sizishlarni topish va ta'mirlash.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🤝</span>
          <h3 className="font-bold text-lg mb-1 text-center">Santexnika uskunalarini o‘rnatish</h3>
          <p className="text-zinc-600 text-center">Hammom, oshxona va boshqa obyektlar uchun suv kranlari, unitazlar, dush kabinalari, vannalarni montaj qilish.
          </p>
        </div>
      </section>
    </div>
  );
}