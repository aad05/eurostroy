import { AspectRatio } from "@/components/ui/aspect-ratio";

const euroremont: any = {
	title: "Евроремонт",
	description:
		"Профессиональные услуги по ремонту и обслуживанию строительных материалов и оборудования. Мы предлагаем качественные услуги по строительству стен, фундамента, печей и каминов. Надежность, долговечность и точность — наш главный приоритет.",
	images: [
		"https://s3.stroi-news.ru/img/yevroremont-komnati-krasivo-1.jpg",
		"https://api.sknebo.ru/uploads/medium_webp_evroremont_kvartiry_dizajn_foto_d5e909235b.webp",
		"https://www.air-ventilation.ru/images/rub_2_14_2/1.jpg",
		"https://capremont-co.ru/uploads/posts/2021-07/1625542780_renovation-of-the-apartment_static.jpg",
		"https://www.ustabor.uz/upload/images/%D0%95%D0%B2%D1%80%D0%BE%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80/evroremont_tashkent2.jpg",
		"https://pro911.com.ua/images/0308161.jpg",
		"https://www.remontexpress.ru/upload/resize_cache/iblock/d29/568_10000_0/d29152ad73aa380a77c4e5907169c723.jpg",
	],
	cards: [
		{
			title: "Подключение кондиционеров",
			description:
				"Профессиональная подключение кондиционеров всех моделей с гарантией качества. Быстрая и аккуратная работа, оптимальная настройка систем охлаждения и электронных компонентов.",
			emoji: "📦",
		},
		{
			title: "Установка розеток и выключателей",
			description:
				"Установка, замена и перенос розеток, выключателей и распределительных коробок.",
			emoji: "🔲",
		},
		{
			title: "Монтаж осветительных систем",
			description:
				"Установка люстр, светильников, бра и других осветительных приборов для дома и бизнеса.",
			emoji: "💡",
		},
		{
			title: "Поиск и устранение неисправностей",
			description:
				"Диагностика и ремонт электросистем: устранение коротких замыканий, восстановление питания.",
			emoji: "🛠️",
		},
	],
};

export const Euroremont = () => {
	return (
		<div className="w-[80%] mx-auto py-8 flex flex-col items-center gap-4">
			<section className="max-w-3xl text-center mb-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4">
					{euroremont?.title}
				</h1>
				<p className="text-lg text-zinc-600 mb-6">{euroremont?.description}</p>
				<button className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-zinc-800 transition">
					Связаться
				</button>
			</section>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
				{euroremont?.images?.map((src, i) => (
					<AspectRatio
						ratio={4 / 5}
						key={i}
						className="overflow-hidden rounded-lg shadow"
					>
						<img
							src={src}
							alt={`Gallery image ${i + 1}`}
							className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
							loading="lazy"
						/>
					</AspectRatio>
				))}
			</div>
			{/* Features Section */}
			<section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
				{euroremont?.cards?.map((card) => (
					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
						<span className="text-4xl mb-2">{card?.emoji}</span>
						<h3 className="font-bold text-lg mb-1 text-center">
							{card?.title}
						</h3>
						<p className="text-zinc-600 text-center">{card?.description}</p>
					</div>
				))}
			</section>
		</div>
	);
};
