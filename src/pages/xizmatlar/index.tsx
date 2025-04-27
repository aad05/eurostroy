import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const xizmatlar:any = {
	plotnik: {
    "title": "Услуги плотника",
    "description": "Профессиональные услуги плотника для вашего дома и бизнеса. Изготовление, установка и ремонт изделий из дерева любой сложности: от мебели до крупных строительных конструкций. Качество, надёжность и индивидуальный подход к каждому клиенту!",
    "images": [
      "https://s0.rbk.ru/v6_top_pics/media/img/1/02/347248591020021.jpeg",
      "https://media.fulledu.ru/documents/images/1k38/5d420181d6e4a96d6b0c4782/article5d4201812b3669.00869829.jpg",
      "https://jobcode.org/cdn/93x0qaqkolvu44yhvnw46kmk3p6a/plotnik.jpg",
      "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg"
    ],
    "cards": [
      {
        "title": "Изготовление мебели на заказ",
        "description": "Создание уникальных шкафов, столов, кроватей и кухонных гарнитуров по индивидуальным проектам.",
        "emoji": "🪑"
      },
      {
        "title": "Монтаж дверей, окон и перегородок",
        "description": "Установка межкомнатных и входных дверей, деревянных окон, а также создание стильных перегородок.",
        "emoji": "🚪"
      },
      {
        "title": "Ремонт и реставрация изделий из дерева",
        "description": "Профессиональное восстановление поврежденной мебели, полов, лестниц и других деревянных конструкций.",
        "emoji": "🔧"
      },
      {
        "title": "Строительство деревянных террас и беседок",
        "description": "Проектирование и строительство уютных террас, веранд, навесов и беседок из дерева.",
        "emoji": "🏡"
      },
      {
        "title": "Отделка интерьеров деревом",
        "description": "Обшивка стен, потолков и создание декоративных элементов из натурального дерева для уюта и стиля.",
        "emoji": "🪵"
      }
    ]
  },
	mebelshik: {
    "title": "Мебельщики",
    "description": "Профессиональное изготовление, сборка и ремонт мебели на заказ. Индивидуальные решения для дома, офиса и бизнеса. Качественные материалы, современный дизайн и точность в каждой детали!",
    "images": [
      "https://static.baza.farpost.ru/v/1631522576638_bulletin",
      "https://static.mk.ru/upload/entities/2023/09/04/19/articles/detailPicture/8a/76/ff/69/753d0462e190ecf5fd1615d6632ac3ec.jpg",
      "https://industrymebel.ru/wp-content/uploads/2020/05/senior-carpenter-working-with-apprentice-in-workshop-170410420-5a87b85d3418c60037d5644e.jpg",
      "https://incrussia.ru/wp-content/uploads/2019/02/iStock-503863654.jpg"
    ],
    "cards": [
      {
        "title": "Изготовление мебели на заказ",
        "description": "Проектирование и создание шкафов, кухонь, столов, кроватей и другой мебели по индивидуальным размерам и дизайну.",
        "emoji": "🪑"
      },
      {
        "title": "Сборка и установка мебели",
        "description": "Профессиональная сборка готовой мебели: кухни, гардеробы, кровати, офисные столы и другие изделия.",
        "emoji": "🔩"
      },
      {
        "title": "Ремонт и реставрация мебели",
        "description": "Восстановление внешнего вида и функциональности старой мебели: замена фурнитуры, устранение царапин и поломок.",
        "emoji": "🛠️"
      },
      {
        "title": "Изготовление встроенной мебели",
        "description": "Создание встроенных шкафов, гардеробных систем и кухонь для максимального использования пространства.",
        "emoji": "🏠"
      },
      {
        "title": "Дизайн мебели и подбор материалов",
        "description": "Разработка оригинального дизайна мебели с подбором качественных материалов под ваш интерьер и пожелания.",
        "emoji": "🎨"
      }
    ]
  },
	patalokchik: {
		title: "Паталочники",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHbrwqniOB26PnI6TY9VoimY_ppMxMfBvcQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eE-6-h6GVjd1Q0hSNCQEBY11tC3bD_UFHw&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45Zt6bCZVb01YfSL48aduMz4YoEp07R7oPybc1L_JlBOt4IzphDmleJiBGD9Yh1gAv5s&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JTCcaFD1cmzjQ0kqfsKnXtSKxxJxzmJ1cA&s",
		],
	},
	plitochnik: {
		title: "Плиточник",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQaQhVc9Qo-eLCILvwFUeVMw9blBpHTVXDw&s",
			"https://sun9-12.userapi.com/impg/6mFw3VA3-arv7ruVQGB3sy9Q8inANummhkllVg/rh02CS0DSyM.jpg?size=604x477&quality=96&sign=0ff8a467f189a2d9e1ab821c391b24e2&type=album",
			"https://poprofessii.in.ua/Upload/CatImgs/174822_213_alt2_professiya-plitochnik-min.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHyk3pkx21IfZ0cuMVH6vwWAGku5Jtl-X3w&s",
		],
	},
	kamenshik: {
		title: "Каменщик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQum2VrVQ6vRr3uCVcnvjGYlaq8kckNc-_BA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMxA3Fi2tevgq9g-CkgPFrgeyIwBPZrd86wYsja_hSD_GO7ien0SxZLppcaIPeJRbNp0&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfoppaMtOGJveK5aceJy2aAoX90xqEsmh7A&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYCl2XdFUn_uMU_rKcRHOznuzQTyEtntO7w&s",
		],
	},
	malyarshik: {
		title: "Малярщик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iD1ayBsb43aGXMXmU31VUC3xaU3kUrazQA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruAPZhTqeC1byiZpr8WYVIIRVvYMTeabUdw&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMFxOhd5y-oEXPwGOLwCAMX_TjEvj5ui6Sw&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XSclofXcWlyo4kFmJ7Np9ZUpToz4HTd30A&s",
		],
	},
	shtukaturshik: {
		title: "Штукатурщик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-kGwv93IvBHDlVeAgf5oYpcAVO_pxSjgNA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9F_WRpcqVAsT-3NvMJMqeVx3X1YAIVQfNw&s",
			"https://ucrbp.ru/images/thumbs/7bcd8374c56da9e071aed60451e69ec63dce618a/shtukaturwik_obuchit_sya_350_230.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ8Skg_utuzuHeqYya2pVHC2GXDVM8yaexA&s",
		],
	},
	kafelshik: {
		title: "Кафельщик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3hASWY608b_rdyJEGaNfAotkaMopVtOmJg&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslmPxcjjYFfP40D0VelIz5i-jwXkF_b-q9A&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbBc1AkCNJL4pWkAr_Pfy705RhuY8M35-WA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUE3t62tGQeLPPHfw4aRat79Eycxs-SMF7XcyJ9Ag2T604LP3fF_p51JTsoIAMmV-0qU&usqp=CAU",
		],
	},
	santexnik: {
		title: "Сантехник",
		images: [
			"https://frankfurt.apollo.olxcdn.com/v1/files/2jgsyhx7gwyx-UZ/image",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHeaoHqn0u6VliWJVSns2FAFc_0XVq1-jtg&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimisbTKjUC88MIg9ZSaZg5f4wurhHLEB-Gg&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnLI3cecvhURwPlScYOTKbg2SSbbqDnDfQQ&s",
		],
	},
	svarshik: {
		title: "Сварщик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PhAecdKZseH-Qp2xaxlOfYm0V1OfteRK0g&s",
			"https://kslux.uz/masters/uslugi-svarshchika/",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoinyyqCbZ2QzrlA-BW2jIzMSPXE8tyaRJQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsidD7fRuZakBoNhefAFv_BfOYwO4f9Bpxw&s",
		],
	},
	raznabochiy: {
		title: "Разнорабочий (Мужчина и женщина)",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRChWsJ7g1xmO_88UVL-D75U444fdKZ46xA&s",
			"https://img.freepik.com/premium-photo/working-man-woman-carpentry-workshop-workers-discussing-furniture-production_116407-7307.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzj0EorDD0PJp3roJp5Z5kXwQOyEH_rBMEfA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnY98mvgVK8el9QJ6UWx5RoHUAiNDRFSVRlw&s",
		],
	},
	ustanovka_konditsioner: {
		title: "Установка кондиционера",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt63SY97OFPZ5mZcYeVkOpvbBDfd8ulaKmNw&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8BnAwwZJvC0o9S1cq-u151Sz3pUqwPza2Q&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnJZnTnSbLEtIkqnTknwY68zejO6ZUbON9g&s",
			"https://cdn.citilink.ru/rLDzms-YSyI1sfbBmMZ3Bo3iFy9OdD4AiYxVXjPC_sA/enlarge:1/gravity:sm/height:601/resizing_type:fit/width:1300/plain/journal/a34c63b1-da44-4b11-aa39-353957802eee.jpg?v5.13.1",
		],
	},
	televizor_ustanovka: {
		title: "Телевизор установка & Ремонт холодильник",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQSclftGc-96KYfAQz-ylMHgF4B4GlQBrPg&s",
			"https://service-eco.uz/wp-content/uploads/holod-main535.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0v61TfZir2_79XrPZUrVOzAAwHfL_4m0F1g&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8shIx5cWx4UUSCj2o0cMYZM7uk2HJ3H28k4uOhbDGi5pklNAdOKQyviEYyl7zOzY5jwk&usqp=CAU",
		],
	},
	dver: {
		title: "АКФА дверь и окно",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42J6Y9guRUC5vSHdn0JJp0Ks5JKPnIRwEkw&s",
			"https://frankfurt.apollo.olxcdn.com/v1/files/z945o0uz1i2a-UZ/image;s=1280x958",
			"https://files.glotr.uz/company/000/024/352/products/2021/09/24/2021-09-24-23-30-13-158149-9b144bb51873bda6d012ca92d261c7cb.jpg?_=ozb9y",
			"https://okna.zebra.uz/images/alu-6.jpg",
		],
	},
	elektrik: {
		title: "Электрик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI6imkSVVcfSrPY9hQNybY9Wro0WAiwgPMQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9U0MxHcnJxf9OoO9s7xWaWNWuLY6Hdfijw&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7TtNtCupg_cZ6_AzxigPt9fyjdIB3R3Agw&s",
			"https://frankfurt.apollo.olxcdn.com/v1/files/djy344kf18ua2-UZ/image;s=1080x611",
		],
	},
	kosit_gazon: {
		title: "Косить газон",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3k4C639LXXj-2MWMeWe3eilDT-r4VbPuZA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyrEp3oumzVTM_o0kohfnE3zA1ldYgg5nHQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dDghQcSgkumwjJHKQfkxTCPw48bcE2mDsQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcUAsFKY5OLmVR1RSDDNMvddlAo7OnjcEkQ&s",
		],
	},
	obrezka_derevev: {
		title: "Обрезка деревьев",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXTv7FgtDd2edORq_AItBDYAcKBWffSjDRA&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGu7WFerVIreZyW-rSA0zE8dDTaDBS1EYaMQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPyEGAL98ZEdEu23Cu9UA_iTaxD0u36wx8g&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqOyMz5FeqTD4zTlnhrdkoLV8OnuK1nLyJQ&s",
		],
	},
	uborshik: {
		title: "Уборщик",
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCButeeUNwElV0Qz6vkfeoYuVa40j6qZxE0g&s",
			"https://media.istockphoto.com/id/1275938073/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D0%B0%D1%80%D1%88%D0%B8%D0%B9-%D0%B2%D0%B7%D1%80%D0%BE%D1%81%D0%BB%D1%8B%D0%B9-%D0%B4%D0%B2%D0%BE%D1%80%D0%BD%D0%B8%D0%BA-%D0%B4%D0%B2%D0%BE%D1%80%D1%8B-%D0%BF%D0%BE%D0%BB-%D0%BF%D1%80%D0%B8-%D0%B2%D1%85%D0%BE%D0%B4%D0%B5-%D0%B2-%D0%BE%D1%84%D0%B8%D1%81%D1%8B.jpg?s=612x612&w=0&k=20&c=VzNk-awtnxOZc4-PxEayKYYEhzHQ2uONQk1kAnGiCow=",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHvgcFTuLJMfmjpuHvpZGZfWNRPNDYzrOtQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWI9wSwn62yx0y752Qc_ZsE3ap_yTfyS3HQ&s",
		],
	},
};

export default function Xizmatlar() {
	const { xizmat } = useParams();

	const foundService = useMemo(() => {
		return xizmatlar[xizmat as keyof typeof xizmatlar];
	}, [xizmat]);

	return (
		<div className="w-[80%] mx-auto py-8 flex flex-col items-center gap-4">
			<section className="max-w-3xl text-center mb-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4">
					{foundService?.title}
				</h1>
				<p className="text-lg text-zinc-600 mb-6">
					{foundService?.description}
				</p>
				<button className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-zinc-800 transition">
        Связаться
				</button>
			</section>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
				{foundService?.images?.map((src, i) => (
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
				{foundService?.cards?.map((card) => (
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
}
