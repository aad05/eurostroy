import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const xizmatlar: any = {
	plotnik: {
		title: "Услуги плотника",
		description:
			"Профессиональные услуги плотника для вашего дома и бизнеса. Изготовление, установка и ремонт изделий из дерева любой сложности: от мебели до крупных строительных конструкций. Качество, надёжность и индивидуальный подход к каждому клиенту!",
		images: [
			"https://s0.rbk.ru/v6_top_pics/media/img/1/02/347248591020021.jpeg",
			"https://media.fulledu.ru/documents/images/1k38/5d420181d6e4a96d6b0c4782/article5d4201812b3669.00869829.jpg",
			"https://jobcode.org/cdn/93x0qaqkolvu44yhvnw46kmk3p6a/plotnik.jpg",
			"https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
		],
		cards: [
			{
				title: "Изготовление мебели на заказ",
				description:
					"Создание уникальных шкафов, столов, кроватей и кухонных гарнитуров по индивидуальным проектам.",
				emoji: "🪑",
			},
			{
				title: "Монтаж дверей, окон и перегородок",
				description:
					"Установка межкомнатных и входных дверей, деревянных окон, а также создание стильных перегородок.",
				emoji: "🚪",
			},
			{
				title: "Ремонт и реставрация изделий из дерева",
				description:
					"Профессиональное восстановление поврежденной мебели, полов, лестниц и других деревянных конструкций.",
				emoji: "🔧",
			},
			{
				title: "Строительство деревянных террас и беседок",
				description:
					"Проектирование и строительство уютных террас, веранд, навесов и беседок из дерева.",
				emoji: "🏡",
			},
			{
				title: "Отделка интерьеров деревом",
				description:
					"Обшивка стен, потолков и создание декоративных элементов из натурального дерева для уюта и стиля.",
				emoji: "🪵",
			},
		],
	},
	mebelshik: {
		title: "Мебельщики",
		description:
			"Профессиональное изготовление, сборка и ремонт мебели на заказ. Индивидуальные решения для дома, офиса и бизнеса. Качественные материалы, современный дизайн и точность в каждой детали!",
		images: [
			"https://static.baza.farpost.ru/v/1631522576638_bulletin",
			"https://static.mk.ru/upload/entities/2023/09/04/19/articles/detailPicture/8a/76/ff/69/753d0462e190ecf5fd1615d6632ac3ec.jpg",
			"https://industrymebel.ru/wp-content/uploads/2020/05/senior-carpenter-working-with-apprentice-in-workshop-170410420-5a87b85d3418c60037d5644e.jpg",
			"https://incrussia.ru/wp-content/uploads/2019/02/iStock-503863654.jpg",
		],
		cards: [
			{
				title: "Изготовление мебели на заказ",
				description:
					"Проектирование и создание шкафов, кухонь, столов, кроватей и другой мебели по индивидуальным размерам и дизайну.",
				emoji: "🪑",
			},
			{
				title: "Сборка и установка мебели",
				description:
					"Профессиональная сборка готовой мебели: кухни, гардеробы, кровати, офисные столы и другие изделия.",
				emoji: "🔩",
			},
			{
				title: "Ремонт и реставрация мебели",
				description:
					"Восстановление внешнего вида и функциональности старой мебели: замена фурнитуры, устранение царапин и поломок.",
				emoji: "🛠️",
			},
			{
				title: "Изготовление встроенной мебели",
				description:
					"Создание встроенных шкафов, гардеробных систем и кухонь для максимального использования пространства.",
				emoji: "🏠",
			},
			{
				title: "Дизайн мебели и подбор материалов",
				description:
					"Разработка оригинального дизайна мебели с подбором качественных материалов под ваш интерьер и пожелания.",
				emoji: "🎨",
			},
		],
	},
	patalokchik: {
		title: "Паталочники",
		description:
			"Профессиональные услуги по установке, ремонту и отделке потолков любой сложности. Натяжные потолки, гипсокартонные конструкции и декоративная отделка — всё для создания уютного и стильного интерьера. Качество, надёжность и индивидуальный подход к каждому проекту!",
		images: [
			"https://vash-vybor.info/wp-content/uploads/2016/07/natjazhnye-potolki-2017-11.jpg",
			"https://i.pinimg.com/736x/c7/f3/de/c7f3def780e844841dfefcd6e65aaed6.jpg",
			" https://i.pinimg.com/736x/0c/f5/e8/0cf5e80e7c07ca41f18d3bc9180e8adf.jpg",
			"https://i.pinimg.com/736x/72/89/9f/72899f9b3b6c384d6143f6667be261bf.jpg",
		],
		cards: [
			{
				title: "Установка натяжных потолков",
				description:
					"Монтаж современных натяжных потолков любых форм и цветов, быстро и качественно.",
				emoji: "🏠",
			},
			{
				title: "Монтаж гипсокартонных конструкций",
				description:
					"Создание многоуровневых потолков и дизайнерских решений с использованием гипсокартона.",
				emoji: "🛠️",
			},
			{
				title: "Ремонт и реставрация потолков",
				description:
					"Профессиональное устранение трещин, сколов и других дефектов на потолках.",
				emoji: "🔧",
			},
			{
				title: "Декоративная отделка потолков",
				description:
					"Покраска, оклейка обоями и нанесение декоративной штукатурки для стильного интерьера.",
				emoji: "🎨",
			},
			{
				title: "Тепло- и шумоизоляция потолков",
				description:
					"Установка материалов для улучшения тепло- и шумоизоляции жилых и коммерческих помещений.",
				emoji: "🧱",
			},
		],
	},
	plitochnik: {
		title: "Плиточник",
		description:
			"Профессиональные услуги по укладке, ремонту и декоративной отделке плитки. Мы занимаемся укладкой плитки в любых помещениях, а также предоставляем услуги по ремонту и восстановлению плиточных покрытий. Качество, точность и индивидуальный подход к каждому проекту гарантированы.",
		images: [
			"https://avatars.mds.yandex.net/i?id=1f1f6346824d2df81760e6ea4ff65663_l-5876833-images-thumbs&n=13",
			"https://sun9-12.userapi.com/impg/6mFw3VA3-arv7ruVQGB3sy9Q8inANummhkllVg/rh02CS0DSyM.jpg?size=604x477&quality=96&sign=0ff8a467f189a2d9e1ab821c391b24e2&type=album",
			"https://poprofessii.in.ua/Upload/CatImgs/174822_213_alt2_professiya-plitochnik-min.jpg",
			"https://avatars.mds.yandex.net/get-altay/2838749/2a00000171e05cffd65d5a50919736def76b/XXL_height",
		],
		cards: [
			{
				title: "Укладка плитки",
				description:
					"Качественная укладка плитки различных форм и размеров для ванных комнат, кухонь и других помещений.",
				emoji: "🪚",
			},
			{
				title: "Ремонт плитки",
				description: "Замена поврежденных плиток и ремонт плиточных покрытий.",
				emoji: "🔧",
			},
			{
				title: "Декоративная отделка плиткой",
				description:
					"Дизайнерские решения с использованием декоративной плитки для создания стильных интерьеров.",
				emoji: "🎨",
			},
			{
				title: "Монтаж теплого пола",
				description:
					"Установка плитки с системой теплого пола для комфортных условий в помещении.",
				emoji: "🔥",
			},
		],
	},
	kamenshik: {
		title: "Каменщик",
		description:
			"Профессиональные услуги по кладке кирпича, камня и других строительных материалов. Мы предлагаем качественные услуги по строительству стен, фундамента, печей и каминов. Надежность, долговечность и точность выполнения работ — наш основной приоритет.",
		images: [
			"https://avatars.mds.yandex.net/i?id=3b59626c4a6bd0e98ab7d9e749c92a90_l-5332718-images-thumbs&n=13",
			"https://ir.ozone.ru/s3/multimedia-9/w1200/6753077973.jpg",
			"https://avatars.mds.yandex.net/i?id=81816ccdef7b658fc43dde88cf1a717d_l-7575569-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=8a19dc274d7f8138aff44e8f92bc3e2f_l-12491002-images-thumbs&n=13",
		],
		cards: [
			{
				title: "Кладка кирпича",
				description:
					"Строительство стен и перегородок с использованием различных видов кирпича, включая облицовочный и жаростойкий.",
				emoji: "🧱",
			},
			{
				title: "Кладка камня",
				description:
					"Кладка натурального камня для создания прочных и эстетичных фасадов, стен и декоративных элементов.",
				emoji: "🪨",
			},
			{
				title: "Строительство печей и каминов",
				description:
					"Проектирование и кладка печей и каминов для отопления и украшения интерьера.",
				emoji: "🔥",
			},
			{
				title: "Фундаментные работы",
				description:
					"Создание прочных и надежных фундаментов для зданий, обеспечивающих долговечность строительства.",
				emoji: "🏗️",
			},
		],
	},
	malyarshik: {
		title: "Малярщик",
		description:
			"Профессиональные услуги по покраске и отделке поверхностей различных типов. Мы выполняем окраску стен, потолков, фасадов, а также декоративные работы, такие как нанесение штукатурки, лакировка и оформление интерьеров. Высокое качество и точность в каждом проекте.",
		images: [
			"https://ir.ozone.ru/s3/multimedia-9/6657346629.jpg",
			"https://avatars.mds.yandex.net/i?id=fafedffb4420abb18afd2628a0190b85-5234343-images-thumbs&ref=rim&n=13&w=1001&h=1001",
			"https://avatars.mds.yandex.net/i?id=b410327bf7eaa034abbd257f18c4b619_l-10577272-images-thumbs&ref=rim&n=13&w=800&h=800",
			"https://avatars.mds.yandex.net/i?id=254489f4438afbecabeeacdc4cced299_l-9106775-images-thumbs&ref=rim&n=13&w=1000&h=1000",
		],
		cards: [
			{
				title: "Окраска стен и потолков",
				description:
					"Качественная покраска стен, потолков и других внутренних поверхностей с использованием высококачественных материалов.",
				emoji: "🎨",
			},
			{
				title: "Окраска фасадов",
				description:
					"Покраска фасадов зданий для улучшения их внешнего вида и защиты от внешних воздействий.",
				emoji: "🏢",
			},
			{
				title: "Декоративные штукатурки",
				description:
					"Нанесение декоративных штукатурок для создания уникальных текстур и отделки стен.",
				emoji: "🖌️",
			},
			{
				title: "Лакировка и покрытие",
				description:
					"Лакировка деревянных и металлических поверхностей для защиты и придания блеска.",
				emoji: "🖍️",
			},
		],
	},
	shtukaturshik: {
		title: "Штукатурщик",
		description:
			"Профессиональные услуги по штукатурке стен и потолков различных типов. Мы выполняем все виды штукатурных работ, включая выравнивание поверхностей, нанесение декоративной штукатурки и отделку фасадов. Надежность, аккуратность и высокое качество — наши главные принципы.",
		images: [
			"https://avatars.mds.yandex.net/i?id=632c1835648a7874144d59e38c2b74d6_l-4284582-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=982d9c956b1dbdb2fa6b16eb6c5b436a_l-9211927-images-thumbs&n=13",
			"https://5domov-stroy.by/image/cache/1e7b63c0a8f7df87ccba148f1affda02.jpeg",
			"https://avatars.mds.yandex.net/i?id=72724978eb996969b85958ceb51c4916_l-9288635-images-thumbs&ref=rim&n=13&w=1000&h=1000",
		],
		cards: [
			{
				title: "Выравнивание стен и потолков",
				description:
					"Профессиональное выравнивание стен и потолков с использованием качественных материалов для достижения идеально ровных поверхностей.",
				emoji: "🧱",
			},
			{
				title: "Декоративная штукатурка",
				description:
					"Нанесение декоративной штукатурки для создания уникальных текстур и эффектов на стенах и потолках.",
				emoji: "🎨",
			},
			{
				title: "Штукатурка фасадов",
				description:
					"Услуги по оштукатуриванию фасадов зданий для улучшения внешнего вида и защиты от воздействия погодных условий.",
				emoji: "🏠",
			},
			{
				title: "Шпатлевка и покраска",
				description:
					"Шпатлевка стен и потолков с последующей покраской для идеального финишного покрытия.",
				emoji: "🖌️",
			},
		],
	},
	kafelshik: {
		title: "Кафельщик",
		description:
			"Профессиональные услуги по укладке кафеля, плитки и мозаики для различных помещений. Мы выполняем укладку плитки на пол, стены, а также оформление декоративных элементов. Мы гарантируем аккуратность, долговечность и высокий эстетический результат.",
		images: [
			"https://alfa-teks.ru/upload/iblock/988/988b34ed00477dc62d5220b073a6b108.jpg",
			"https://avatars.mds.yandex.net/i?id=0cb2935fdb377cb019eace6b266f3824_l-5235164-images-thumbs&ref=rim&n=13&w=1024&h=734",
			"https://avatars.mds.yandex.net/i?id=da4412c7644afb5f002b759519243736_l-4815406-images-thumbs&n=13",
			"https://img.positronica.ru/items/1583388_v01_b.jpg",
		],
		cards: [
			{
				title: "Укладка плитки на пол",
				description:
					"Профессиональная укладка плитки на пол с соблюдением всех технологических процессов для долговечности и надежности покрытия.",
				emoji: "🪑",
			},
			{
				title: "Укладка плитки на стены",
				description:
					"Оформление стен плиткой, в том числе в ванных комнатах, кухнях и других помещениях, с аккуратностью и точностью в работе.",
				emoji: "🖼️",
			},
			{
				title: "Мозаика и декоративная отделка",
				description:
					"Создание уникальных мозаичных узоров и декоративных элементов с использованием различных видов плитки и камня.",
				emoji: "🎨",
			},
			{
				title: "Укладка плитки на фасад",
				description:
					"Укладка плитки на фасады зданий для улучшения внешнего вида и защиты стен от внешних воздействий.",
				emoji: "🏢",
			},
		],
	},
	santexnik: {
		title: "Сантехник",
		description:
			"Профессиональные услуги по установке, ремонту и обслуживанию сантехнических систем. Мы выполняем работы по установке труб, смесителей, ванн, душевых кабин, а также обеспечиваем устранение неисправностей водоснабжения и водоотведения. Высокое качество и надежность — залог вашего комфорта.",
		images: [
			"https://frankfurt.apollo.olxcdn.com/v1/files/ibkpsp8t3cpq2-KZ/image;s=1400x933",
			"https://avatars.mds.yandex.net/i?id=8ed930ee641f21156cd82ec6cdb8f325_l-4825137-images-thumbs&ref=rim&n=13&w=2560&h=1707",
			"https://frankfurt.apollo.olxcdn.com/v1/files/ivgir5b8ogvi3-UZ/image;s=1280x786",
			"https://www.charlottestories.com/wp-content/uploads/2021/04/AdobeStock_302067997-scaled.jpeg",
		],
		cards: [
			{
				title: "Установка труб и водоснабжения",
				description:
					"Профессиональная установка водопроводных и канализационных труб с соблюдением всех норм и стандартов.",
				emoji: "🚰",
			},
			{
				title: "Установка сантехнического оборудования",
				description:
					"Установка и подключение смесителей, ванн, душевых кабин, унитазов и других сантехнических приборов.",
				emoji: "🚿",
			},
			{
				title: "Ремонт водоснабжения и водоотведения",
				description:
					"Устранение неисправностей водоснабжения и водоотведения, устранение засоров и протечек.",
				emoji: "🔧",
			},
			{
				title: "Монтаж отопительных систем",
				description:
					"Монтаж и ремонт систем отопления, включая установку радиаторов и котлов.",
				emoji: "🔥",
			},
		],
	},
	svarshik: {
		title: "Сварщик",
		description:
			"Профессиональные услуги по сварке металлоконструкций, труб и других изделий. Мы выполняем сварочные работы различной сложности: от мелких ремонтов до создания крупных конструкций. Качество швов, прочность и точность — наш главный приоритет.",
		images: [
			"https://avatars.mds.yandex.net/i?id=b6d00c2eb9f4542eff22b8deeaeb3ead_l-10414034-images-thumbs&n=13",
			"https://avatars.mds.yandex.net/i?id=d2d121172ddf051862a17f5344869a6f_l-5227935-images-thumbs&n=13",
			"https://vogorod.by/upload/iblock/8ba/8ba90867a713fc31116e7fde00734996.jpg",
			"https://avatars.mds.yandex.net/i?id=179fb25abf9252efdc37282ef3b0995c_l-5238336-images-thumbs&ref=rim&n=13&w=1000&h=750",
		],
		cards: [
			{
				title: "Электросварка металлоконструкций",
				description:
					"Сварка различных металлических конструкций: каркасов, опор, ферм и других изделий.",
				emoji: "🏗️",
			},
			{
				title: "Аргонодуговая сварка",
				description:
					"Точная сварка изделий из алюминия, нержавеющей стали и других цветных металлов методом аргонодуговой сварки.",
				emoji: "⚙️",
			},
			{
				title: "Сварка трубопроводов",
				description:
					"Профессиональная сварка трубопроводов различного назначения — водопроводных, газовых, отопительных.",
				emoji: "🛠️",
			},
			{
				title: "Ремонт и восстановление изделий",
				description:
					"Ремонт трещин, восстановление разрушенных элементов и укрепление металлических конструкций.",
				emoji: "🔧",
			},
		],
	},
	raznabochiy: {
		title: "Разнорабочий (Мужчина и женщина)",
		description:
			"Услуги разнорабочих для выполнения различных видов работ: от погрузочно-разгрузочных операций до помощи в строительстве и ремонте. Мужчины и женщины-специалисты готовы справиться с задачами любой сложности быстро и качественно.",
		images: [
			"https://www.ivd.ru/images/storage/2018/1/24/292231_e1d732831b.jpeg",
			"https://sun9-5.userapi.com/impg/Rw9zWqjsKFqD72yqqctplocx2iNciruXzEhUJw/BelsSOzxgg8.jpg?size=1200x1000&quality=95&sign=061a016a73929ed56ae7336ba33ebf67&c_uniq_tag=JaNmZWEWEYhQdGQ3E9FF-FHTuKrAUm2OlMuPM1LfUlI&type=album",
			"https://sun9-7.userapi.com/impg/0982CVafDmfZLwXL0KBONVSFLztKJqZSBg0SmQ/8CT6mwdaqGk.jpg?size=900x900&quality=96&sign=a620588eff45c90aca5ac6eef0e9d379&c_uniq_tag=umZ8vnUFmnfnUqYsobnEhmVAf7DMEx_DWqjjyVBiUY4&type=album",
			"https://avatars.mds.yandex.net/get-altay/216588/2a0000015b16cedc4bc40077e997c1001b2b/XXL_height",
		],
		cards: [
			{
				title: "Погрузочно-разгрузочные работы",
				description:
					"Перемещение, погрузка и разгрузка строительных материалов, мебели и оборудования.",
				emoji: "📦",
			},
			{
				title: "Помощь на стройке",
				description:
					"Выполнение подсобных работ на строительных объектах: подача материалов, уборка территории, мелкий ремонт.",
				emoji: "🏗️",
			},
			{
				title: "Клининг и уборка помещений",
				description:
					"Услуги по уборке строительного мусора, генеральная уборка квартир, офисов и коммерческих помещений.",
				emoji: "🧹",
			},
			{
				title: "Садовые и ландшафтные работы",
				description:
					"Помощь в уходе за садом: посадка растений, стрижка газонов, уборка территории.",
				emoji: "🌳",
			},
		],
	},
	ustanovka_konditsioner: {
		title: "Установка кондиционеров",
		description:
			"Профессиональная установка кондиционеров всех моделей с гарантией качества. Быстрая и аккуратная работа, оптимальная настройка систем охлаждения и консультации по выбору техники!",
		images: [
			"https://nn-vent.ru/wp-content/uploads/2023/09/ustanovka-konditsionera-11-pravil3.webp",
			"https://rpk.uz/wp-content/uploads/2019/07/ustanovka-kondicionera-artel-v-tashkente-alpinisty.jpg",
			"https://topclim.ru/upload/resize_cache/webp/iblock/0a2/0a2f27b335ef720441b52b24eab08b62.webp",
			"https://cdn.citilink.ru/rLDzms-YSyI1sfbBmMZ3Bo3iFy9OdD4AiYxVXjPC_sA/enlarge:1/gravity:sm/height:601/resizing_type:fit/width:1300/plain/journal/a34c63b1-da44-4b11-aa39-353957802eee.jpg?v5.13.1",
		],
		cards: [
			{
				title: "Установка сплит-систем",
				description:
					"Монтаж внутренних и внешних блоков кондиционеров с соблюдением всех стандартов безопасности и качества.",
				emoji: "❄️",
			},
			{
				title: "Настройка и запуск кондиционера",
				description:
					"Проверка всех режимов работы, настройка оптимальной температуры и функций для комфортного использования.",
				emoji: "⚙️",
			},
			{
				title: "Обслуживание и чистка кондиционеров",
				description:
					"Профессиональная чистка фильтров, дренажной системы и заправка фреона для эффективной работы устройства.",
				emoji: "🧽",
			},
			{
				title: "Демонтаж старого оборудования",
				description:
					"Аккуратный демонтаж старых кондиционеров с подготовкой места для новой установки.",
				emoji: "🛠️",
			},
			{
				title: "Прокладка коммуникаций",
				description:
					"Установка скрытых или наружных коммуникаций для эстетичного и надёжного подключения оборудования.",
				emoji: "📏",
			},
		],
	},
	televizor_ustanovka: {
		title: "Установка телевизоров и ремонт холодильников",
		description:
			"Профессиональная установка телевизоров любой модели и квалифицированный ремонт холодильников всех марок. Быстрое обслуживание, гарантия качества и индивидуальный подход к каждому клиенту!",
		images: [
			"https://frankfurt.apollo.olxcdn.com/v1/files/natg7tl4nh6e-UZ/image;s=2271x1704",
			"https://моймастер74.рф/uploads/catalog_items/6image.jpg",
			"https://www.profguide.io/images/article/a/52/P8fpVhDh7O.webp",
			"https://www.ustabor.uz/upload/%D1%8D%D0%BA%D0%BE-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%20%D1%8D%D0%BA%D0%BE%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%811.jpg",
		],
		cards: [
			{
				title: "Установка телевизоров",
				description:
					"Профессиональный монтаж телевизоров на стену или стойку, настройка каналов и подключение дополнительных устройств.",
				emoji: "📺",
			},
			{
				title: "Настройка Smart TV",
				description:
					"Подключение к Wi-Fi, настройка приложений, аккаунтов и оптимизация работы Smart TV.",
				emoji: "🌐",
			},
			{
				title: "Ремонт холодильников",
				description:
					"Диагностика и устранение неисправностей: замена компрессоров, ремонт системы охлаждения и электронных компонентов.",
				emoji: "🛠️",
			},
			{
				title: "Заправка фреона и техническое обслуживание",
				description:
					"Профессиональная заправка холодильников фреоном и полное техобслуживание для продления срока службы техники.",
				emoji: "❄️",
			},
			{
				title: "Экстренный выезд мастера",
				description:
					"Быстрая помощь при поломках: оперативный выезд мастера в день обращения.",
				emoji: "🚚",
			},
		],
	},
	dver: {
		title: "АКФА дверь и окно",
		description:
			"Изготовление и установка высококачественных дверей и окон AKFA. Эстетичный дизайн, энергоэффективность и долговечность. Профессиональный монтаж, индивидуальный подход к каждому проекту и гарантия качества продукции.",
		images: [
			"https://avatars.mds.yandex.net/get-mpic/6251774/img_id8085196716584208145.jpeg/orig",
			"https://www.anorbank.uz/upload/iblock/b72/b72fd9c1e5ea24792c09b2d54e15876a.jpg",
			"https://st5.stblizko.ru/images/product/284/065/398_large.jpg",
			"https://www.dveri-optima.ru/netcat_files/multifile/2485/2039/IMG_7304.jpg",
		],
		cards: [
			{
				title: "Изготовление окон AKFA",
				description:
					"Производство пластиковых и алюминиевых окон любой формы и размера с высокими тепло- и шумоизоляционными характеристиками.",
				emoji: "🪟",
			},
			{
				title: "Установка дверей AKFA",
				description:
					"Монтаж межкомнатных и входных дверей AKFA с обеспечением безопасности и эстетики помещения.",
				emoji: "🚪",
			},
			{
				title: "Ремонт и замена фурнитуры",
				description:
					"Профессиональная замена замков, ручек и уплотнителей для продления срока службы окон и дверей.",
				emoji: "🔧",
			},
			{
				title: "Панорамное остекление",
				description:
					"Установка больших панорамных окон для максимального естественного освещения и современного вида помещений.",
				emoji: "🏙️",
			},
		],
	},
	elektrik: {
		title: "Электрик",
		description:
			"Профессиональные электромонтажные услуги: от прокладки электропроводки до установки розеток, освещения и автоматических систем. Качество, безопасность и соблюдение всех технических норм — гарантированы.",
		images: [
			"https://sun9-17.userapi.com/impg/r6JFZ3OIqzq2cCANng-rhrPscOc67hGI8iogjA/OLUwp5s26Es.jpg?size=1200x801&quality=96&sign=a41248609346a158041da1bbee9fe194&c_uniq_tag=wcLk5YlBsFj5UH7FFKmR0aXoC6psx_jTjFqBt1XaZmg&type=album",
			"https://www.kmp63.ru/upload/iblock/836/8361ba8757c66c489bba6fae0cf8a6c6.png",
			"https://pro-interactive.ru/wp-content/uploads/2022/07/1645767364_63-kartinkin-net-p-elektrik-kartinki-68.jpg",
			"https://frankfurt.apollo.olxcdn.com/v1/files/djy344kf18ua2-UZ/image;s=1080x611",
		],
		cards: [
			{
				title: "Прокладка электропроводки",
				description:
					"Монтаж новой или замена старой электропроводки в квартирах, домах и офисах.",
				emoji: "🔌",
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
	},
	kosit_gazon: {
		title: "Косить газон",
		description:
			"Профессиональная стрижка газонов для вашего сада, парка или участка. Идеально ровная трава, аккуратный внешний вид и забота о здоровье вашего газона. Работаем быстро, качественно и с любовью к деталям!",
		images: [
			"https://vostoktehrezerv.ru/wa-data/public/photos/34/00/34/34.970.jpg",
			"https://ksd-images.lt/display/krauta_ee/uploads/ca/44370df2/aa22849e.jpg",
			"https://kwitka.com.ua/image/catalog/articles/0bfb9ead5484b23efd32d5095d2f179e.jpg",
			"https://avatars.dzeninfra.ru/get-zen_doc/3765046/pub_5f032a0a1b08d82bf647c3f3_5f032a0fad03a52ba7a120be/scale_1200",
		],
		cards: [
			{
				title: "Покос газона",
				description:
					"Регулярная стрижка газонов для поддержания аккуратного и здорового внешнего вида участка.",
				emoji: "🌿",
			},
			{
				title: "Выравнивание кромок газона",
				description:
					"Обрезка краёв газона для идеальной формы и эстетичного оформления садовых дорожек и клумб.",
				emoji: "✂️",
			},
			{
				title: "Уборка травы после покоса",
				description:
					"Сбор и вывоз скошенной травы для чистоты и ухоженности территории.",
				emoji: "🧹",
			},
			{
				title: "Аэрация и уход за газоном",
				description:
					"Комплексный уход за газоном: аэрация, удобрение и восстановление плотности травяного покрова.",
				emoji: "🪴",
			},
			{
				title: "Стрижка сложных участков",
				description:
					"Косим траву в труднодоступных местах: склоны, углы, вокруг деревьев и садовых сооружений.",
				emoji: "⛰️",
			},
		],
	},
	obrezka_derevev: {
		title: "Обрезка деревьев",
		description:
			"Профессиональная обрезка деревьев для здоровья растений и эстетического вида участка. Формирование кроны, удаление сухих и повреждённых ветвей, подготовка деревьев к сезону. Работаем аккуратно и безопасно!",
		images: [
			"https://spart.kh.ua/wp-content/uploads/2021/06/Obrezka-derevev-vesnoy.jpg",
			"https://skoggy.ru/sites/default/files/inline-images/%D0%BE%D0%B1%D1%80%D0%B5%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%201.jpg",
			"https://www.mauget.ru/wp-content/webp-express/webp-images/uploads/2020/09/obrezka-1000x520.jpg.webp",
			"https://cdn.botanichka.ru/wp-content/uploads/2018/06/letnyaya-obrezka-02.jpg",
		],
		cards: [
			{
				title: "Формировочная обрезка",
				description:
					"Создание красивой и правильной формы кроны для улучшения роста и плодоношения деревьев.",
				emoji: "🌳",
			},
			{
				title: "Санитарная обрезка",
				description:
					"Удаление сухих, больных и повреждённых ветвей для защиты дерева от заболеваний и вредителей.",
				emoji: "🩺",
			},
			{
				title: "Омолаживающая обрезка",
				description:
					"Восстановление старых деревьев для увеличения их жизнеспособности и продления срока жизни.",
				emoji: "♻️",
			},
			{
				title: "Обрезка плодовых деревьев",
				description:
					"Улучшение урожайности и качества плодов за счёт правильной обрезки ветвей.",
				emoji: "🍎",
			},
			{
				title: "Удаление аварийных ветвей",
				description:
					"Быстрая и безопасная обрезка веток, угрожающих постройкам, проводам и людям.",
				emoji: "⚡",
			},
		],
	},
	uborshik: {
		title: "Уборщик",
		description:
			"Профессиональные услуги уборщиков для поддержания чистоты в жилых, офисных и коммерческих помещениях. Ежедневная, генеральная и послестроительная уборка с использованием современных моющих средств и оборудования.",
		images: [
			"https://sun9-86.userapi.com/impg/_6MBJQqvtKYlI8lgoAbQVFuYgoMAETZvUQZyHQ/uQD3zt0ZUh4.jpg?size=811x767&quality=96&sign=c7b3a153f347b6a0d9d356de35a0b936&c_uniq_tag=nJm6cyB0x9G3rBbCCDGybT9yKISS6NnXIslEo31mPzo&type=album",
			"https://avatars.mds.yandex.net/i?id=e5df2a12a1aac05639fd3d042bd49fbe_l-5255455-images-thumbs&ref=rim&n=13&w=1024&h=683",
			"https://cdn.ananasposter.ru/image/cache/catalog/poster/film/81/16085-1000x830.jpg",
			"https://avatars.mds.yandex.net/i?id=d2088216d3904031a446ea40b7bbbf1a_l-5427034-images-thumbs&ref=rim&n=13&w=1024&h=664",
		],
		cards: [
			{
				title: "Ежедневная уборка",
				description:
					"Поддержание чистоты в квартирах, офисах и на коммерческих объектах на постоянной основе.",
				emoji: "🧹",
			},
			{
				title: "Генеральная уборка",
				description:
					"Глубокая очистка всех поверхностей, удаление пыли, грязи и пятен.",
				emoji: "🧼",
			},
			{
				title: "Послестроительная уборка",
				description:
					"Очистка помещений после ремонтных и строительных работ от пыли, мусора и остатков строительных материалов.",
				emoji: "🏗️",
			},
			{
				title: "Мытьё окон",
				description:
					"Профессиональная чистка окон и витражей с обеих сторон для идеальной прозрачности и блеска.",
				emoji: "🪟",
			},
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
