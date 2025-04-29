import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
	{ label: "Лет опыта", value: 7 },
	{ label: "Выполнено проектов", value: 120 },
	{ label: "Довольных клиентов", value: 110 },
	{ label: "Гарантия качества", value: 100 },
];

const services = [
	{
		icon: "🛠️",
		title: "Сантехнические работы",
		desc: "Монтаж, ремонт и обслуживание сантехники любой сложности.",
	},
	{
		icon: "🏗️",
		title: "Строительство",
		desc: "Капитальное и косметическое строительство под ключ.",
	},
	{
		icon: "🔧",
		title: "Ремонт",
		desc: "Быстрый и качественный ремонт помещений и коммуникаций.",
	},
	{
		icon: "📐",
		title: "Дизайн и проектирование",
		desc: "Профессиональное проектирование и дизайн интерьеров.",
	},
];

function AnimatedCounter({ to }: { to: number }) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let start = 0;
		const end = to;
		if (start === end) return;
		const totalMs = 1200;
		const incrementTime = Math.max(totalMs / end, 30);
		const timer = setInterval(() => {
			start += 1;
			setCount(start);
			if (start === end) clearInterval(timer);
		}, incrementTime);
		return () => clearInterval(timer);
	}, [to]);
	return <span>{count}</span>;
}

export default function Home() {
	return (
		<div className="w-full min-h-[100vh] flex flex-col items-center bg-gradient-to-br from-zinc-50 to-white relative overflow-hidden">
			{/* Animated Background Shapes */}
			<motion.div
				initial={{ opacity: 0, y: -60 }}
				animate={{ opacity: 0.15, y: 0 }}
				transition={{ duration: 1.5 }}
				className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 to-cyan-100 rounded-full blur-3xl z-0"
			/>
			<motion.div
				initial={{ opacity: 0, x: 60 }}
				animate={{ opacity: 0.14, x: 0 }}
				transition={{ duration: 1.5, delay: 0.3 }}
				className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full blur-2xl z-0"
			/>

			{/* Hero Section */}
			<motion.section
				className="max-w-3xl text-center mb-14 mt-16 relative z-10"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<motion.h1
					className="text-5xl sm:text-6xl font-extrabold text-zinc-900 mb-4 tracking-tight"
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.1, delay: 0.2 }}
				>
					Eurostroy
				</motion.h1>
				<motion.p
					className="text-xl text-zinc-700 mb-7"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
				>
					Наша миссия — предоставлять клиентам надёжные, качественные и
					долговечные строительные решения.
				</motion.p>
				<motion.button
					className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-lg"
					whileHover={{ scale: 1.07 }}
					whileTap={{ scale: 0.98 }}
				>
					Связаться
				</motion.button>
			</motion.section>

			{/* Stats Section */}
			<motion.section
				className="flex flex-wrap justify-center gap-8 mb-12 z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.18 } },
				}}
			>
				{stats.map((stat, i) => (
					<motion.div
						key={stat.label}
						className="bg-white rounded-2xl shadow-lg px-8 py-6 flex flex-col items-center min-w-[160px]"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: i * 0.1 }}
					>
						<span className="text-4xl font-extrabold text-blue-600 mb-1">
							<AnimatedCounter to={stat.value} />
							{stat.label === "Гарантия качества" ? "%" : ""}
						</span>
						<span className="text-zinc-600 text-base font-semibold">
							{stat.label}
						</span>
					</motion.div>
				))}
			</motion.section>

			{/* Company Info Card */}
			<motion.section
				className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10 mb-16 z-10"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<div className="flex-1 flex flex-col justify-center">
					<h2 className="text-3xl font-bold mb-3 text-blue-700">
						О компании EuroStroy
					</h2>
					<p className="text-zinc-700 mb-5 text-lg">
						EuroStroy — ведущая компания в Ташкенте и по всему Узбекистану,
						специализирующаяся на оказании профессиональных строительных и
						сантехнических услуг. Наша команда опытных специалистов предлагает
						современные решения для квартир, домов, офисов и промышленных
						объектов.
					</p>
					<ul className="list-disc pl-7 text-zinc-700 space-y-2 text-base">
						<li>7 лет успешной работы</li>
						<li>Гарантия качества на все виды работ</li>
						<li>Оперативное выполнение заказов</li>
						<li>Честные цены и индивидуальный подход</li>
					</ul>
				</div>
				<motion.div
					className="flex-1 flex items-center justify-center"
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.1, delay: 0.2 }}
				>
					<img
						src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
						alt="Здание EuroStroy"
						className="rounded-xl shadow-xl w-full max-w-xs object-cover hover:scale-105 transition-transform duration-500"
					/>
				</motion.div>
			</motion.section>

			{/* Services Section */}
			<motion.section
				className="w-full max-w-5xl mb-16 z-10"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<h3 className="text-2xl font-bold mb-8 text-center text-blue-700">
					Наши услуги
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{services.map((service, i) => (
						<motion.div
							key={service.title}
							className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: i * 0.1 }}
						>
							<span className="text-4xl mb-3">{service.icon}</span>
							<span className="font-semibold text-lg mb-2 text-blue-900">
								{service.title}
							</span>
							<span className="text-zinc-600 text-center text-base">
								{service.desc}
							</span>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Location Section */}
			<motion.section
				className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-20 flex flex-col md:flex-row gap-8 z-10"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<div className="flex-1 flex flex-col justify-center mb-6 md:mb-0">
					<h3 className="text-2xl font-bold mb-2 text-blue-700">
						Где мы находимся
					</h3>
					<p className="mb-3 text-zinc-700">г. Ташкент, ул. Мукими, 12</p>
					<p className="mb-2 text-zinc-700">
						Телефон:{" "}
						<a
							href="tel:+998959669393"
							className="text-blue-600 hover:underline"
						>
							+998 (95) 966 9393
						</a>
					</p>
					<p className="mb-2 text-zinc-700">
						Телефон:{" "}
						<a
							href="tel:+998958809393"
							className="text-blue-600 hover:underline"
						>
							+998 (95) 880 9393
						</a>
					</p>
          <p className="mb-2 text-zinc-700">
						Телефон:{" "}
						<a
							href="tel:+998950229393"
							className="text-blue-600 hover:underline"
						>
							+998 (95) 022 9393
						</a>
					</p>
					<p className="mb-2 text-zinc-700">Пн-Сб: 9:00 — 19:00</p>
					<p className="mb-2 text-zinc-700">
						E-mail:{" "}
						<a
							href="mailto:info@eurostroy.uz"
							className="text-blue-600 hover:underline"
						>
							info@eurostroy.uz
						</a>
					</p>
          <p className="mb-2 text-zinc-700">
						Instagram:{" "}
						<a
							href="https://www.instagram.com/euro_stroy_uz"
							className="text-blue-600 hover:underline"
						>
							euro_stroy_uz
						</a>
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<iframe
						src="https://yandex.com/map-widget/v1/?um=constructor%3A6d4e2f6f2d8e4c5a9e6c7d2e4d4e2f6f&amp;source=constructor"
						width="100%"
						height="240"
						className="rounded-xl shadow-lg border-2 border-blue-100"
						title="Eurostroy Location Map"
						loading="lazy"
						style={{ minWidth: 240 }}
					></iframe>
				</div>
			</motion.section>

			{/* Footer */}
			<footer className="w-full text-center py-6 text-zinc-400 text-sm z-10">
				© {new Date().getFullYear()} Eurostroy — Все права защищены
			</footer>
		</div>
	);
}
