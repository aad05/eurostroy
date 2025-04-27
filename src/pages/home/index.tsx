export default function Home() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center bg-gradient-to-br from-zinc-50 to-white py-12 px-4">
      {/* Hero Section */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4">Eurostroy</h1>
        <p className="text-lg text-zinc-600 mb-6">
          Наша миссия — предоставлять клиентам надёжные, качественные и долговечные сантехнические решения.
        </p>
        <button className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-zinc-800 transition">Связаться</button>
      </section>

      {/* Company Info Card */}
      <section className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">О компании EuroStroy</h2>
          <p className="text-zinc-700 mb-4">
            EuroStroy — ведущая компания в Ташкенте и по всему Узбекистану, специализирующаяся на оказании профессиональных сантехнических услуг. 
            Наша команда опытных специалистов предлагает современные решения для квартир, домов, офисов и промышленных объектов.
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-1">
            <li>Более 5 лет опыта работы</li>
            <li>Гарантия качества на все виды работ</li>
            <li>Оперативное выполнение заказов</li>
            <li>Честные цены и индивидуальный подход</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
            alt="Здание EuroStroy"
            className="rounded-xl shadow-md w-full max-w-xs object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🔧</span>
          <h3 className="font-bold text-lg mb-1 text-center">Установка и ремонт сантехники</h3>
          <p className="text-zinc-600 text-center">
            Монтаж новых систем водоснабжения и канализации, замена старых коммуникаций.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🛁</span>
          <h3 className="font-bold text-lg mb-1 text-center">Монтаж сантехнического оборудования</h3>
          <p className="text-zinc-600 text-center">
            Установка кранов, унитазов, душевых кабин, ванн и другой сантехники в ванных комнатах и кухнях.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">💧</span>
          <h3 className="font-bold text-lg mb-1 text-center">Выявление и устранение протечек</h3>
          <p className="text-zinc-600 text-center">
            Поиск скрытых протечек с использованием современного оборудования и их профессиональное устранение.
          </p>
        </div>
      </section>
    </div>
  );
}
