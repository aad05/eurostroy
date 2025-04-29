import { AspectRatio } from "@/components/ui/aspect-ratio";

const podklyuj: any = {
	title: "Строительство",
	description:
		"Комплексные услуги по подключению, установке и ремонту инженерных систем. Профессиональный подход, оперативное выполнение работ и гарантия качества!",
	images: [
		"https://www.hbatc.com/uploads/1/4/0/3/140303369/editor/plans-in-front-of-house.jpg?1642180740",
		"https://www.build-review.com/wp-content/uploads/2021/04/homebuilder.jpg",
		"https://i.pinimg.com/736x/1a/1e/74/1a1e74e27222117737c728ee330a807b.jpg",
		"https://i.pinimg.com/736x/1a/1e/74/1a1e74e27222117737c728ee330a807b.jpg",
		"https://i.pinimg.com/736x/7a/8e/34/7a8e34dc7749616fffc01fa4689ed2a3.jpg",
		"https://i.pinimg.com/736x/59/9f/44/599f4488dc9fae4f732fc35b88ad3bed.jpg",
		"https://i.pinimg.com/736x/3e/c7/ed/3ec7ed3f6d9d0aa31492a79ae02bb5df.jpg",
		"https://i.pinimg.com/736x/be/b5/68/beb568ade288ac44a8ddeabd8955d319.jpg",
		"https://i.pinimg.com/736x/2e/19/b4/2e19b4e6af93a6631fd2ccee104480a5.jpg",
		"https://i.pinimg.com/736x/27/f5/a5/27f5a578dfaee3704cc12f158d5e2598.jpg",
		"https://i.pinimg.com/736x/48/1b/83/481b831736492ef5f0a5b10c9b145b7a.jpg"
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
