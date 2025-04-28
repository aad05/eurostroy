import { AspectRatio } from "@/components/ui/aspect-ratio";

const podklyuj: any = {
	title: "Подключение и установка",
	description:
		"Комплексные услуги по подключению, установке и ремонту инженерных систем. Профессиональный подход, оперативное выполнение работ и гарантия качества!",
	images: [
		"https://www.prorabneva.ru/storage/post_content/October2021/7iqAR50OomAy0NhPqaT5.jpeg",
		"https://desinghome.ru/wp-content/uploads/2020/11/83f831fcc10fa1cface0deb97424bac3.jpg",
		"https://cdn0.divan.ru/img/v1/nrJpstLxSd1-Ut4OKyjHaq39heydJCoKdLBaxT8EA5Q/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNDkxODMzOC5qZmlm.jpg",
		"https://pro-dachnikov.com/uploads/posts/2023-01/thumbs/1673103601_pro-dachnikov-com-p-remont-kvartir-do-i-posle-foto-43.jpg",
		"https://pro-dachnikov.com/uploads/posts/2023-01/thumbs/1673103593_pro-dachnikov-com-p-remont-kvartir-do-i-posle-foto-6.jpg",
		"https://dekorin.me/wp-content/uploads/2021/12/Remont-kvartir-do-i-posle-remonta-primer.jpg",
		"https://static.tildacdn.net/tild3763-3437-4064-a665-383034313038/20220122_194920.jpg",
	],
	cards: [
		{
			title: "Подключение кондиционеров",
			description:
				"Профессиональное подключение кондиционеров всех типов. Гарантируем качественную установку, настройку систем охлаждения и правильное подключение электроники.",
			emoji: "❄️",
		},
		{
			title: "Установка розеток и выключателей",
			description:
				"Монтаж новых, замена или перенос существующих розеток, выключателей и распределительных коробок. Чистая работа и соблюдение стандартов безопасности.",
			emoji: "🔌",
		},
		{
			title: "Монтаж осветительных систем",
			description:
				"Установка потолочных люстр, бра, точечных светильников и дизайнерских решений освещения для дома и офиса.",
			emoji: "💡",
		},
		{
			title: "Диагностика и ремонт электросистем",
			description:
				"Быстрая диагностика с выявлением причин неисправностей. Устраняем короткие замыкания, восстанавливаем питание и обеспечиваем безопасность.",
			emoji: "🛠️",
		},
		{
			title: "Мелкий бытовой ремонт",
			description:
				"Выполним работы по подключению бытовой техники, устранению мелких поломок и наладке инженерных систем.",
			emoji: "🏠",
		},
	],
};

export const Podklyuj = () => {
	return (
		<div className="w-[80%] mx-auto py-8 flex flex-col items-center gap-4">
			<section className="max-w-3xl text-center mb-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4">
					{podklyuj?.title}
				</h1>
				<p className="text-lg text-zinc-600 mb-6">{podklyuj?.description}</p>
				<button className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-zinc-800 transition">
					Связаться
				</button>
			</section>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
				{podklyuj?.images?.map((src, i) => (
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
				{podklyuj?.cards?.map((card) => (
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
