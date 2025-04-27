import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<nav className="w-full flex justify-center items-center py-4">
			<div className="w-full max-w-7xl flex items-center justify-between rounded-full shadow-sm bg-white px-6 py-2">
				{/* Logo */}
				<div
					onClick={() => navigate("/")}
					className="flex items-center space-x-2"
				>
					<span className="font-bold text-xl text-black">EuroStroy</span>
				</div>
				{/* Nav Links */}
				<div className="flex-1 flex justify-center">
					<ul className="flex space-x-2 text-[15px] font-medium text-zinc-700">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Xizmatlarimiz</NavigationMenuTrigger>
									<NavigationMenuContent className="">
										<div className="flex w-fit justify-between gap-2">
											<div className="flex flex-col gap-2">
												<h3
													onClick={() => navigate("/xizmatlar/plotnik")}
													className="text-sm hover:underline pb-1"
												>
													Плотник
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/mebelshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Мебельщики
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/patalokchik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Паталочники
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/plitochnik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Плиточник
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/kamenshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Каменщик
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/malyarshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Малярщик
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/shtukaturshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Штукатурщик
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/kafelshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Кафельщик
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/santexnik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Сантехник
												</h3>
											</div>
											<div className="flex flex-col gap-2">
												<h3
													onClick={() => navigate("/xizmatlar/svarshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Сварщик
												</h3>
												<h3
													onClick={() =>
														navigate(
															"/xizmatlar/raznabochiy",
														)
													}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Разнорабочий (Мужчина и женщина)
												</h3>
												<h3
													onClick={() =>
														navigate(
															"/xizmatlar/ustanovka-konditsioner",
														)
													}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
												Yстановка кондиционера
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/televizor-ustanovka")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Телевизор установка & Ремонт холодильник
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/dver")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													АКФА дверь и окно

												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/elektrik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Электрик
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/kosit-gazon")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Косить газон

												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/obrezka-derevev")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Обрезка деревьев
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/uborshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Уборщик
												</h3>
											</div>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Euroremont
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Podklyuj
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Bog'lanish
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</ul>
				</div>
				{/* Auth Buttons */}
				<div className="flex items-center space-x-2">
					<Button className="rounded-full px-6 py-2 bg-black text-white hover:bg-zinc-800 text-[15px] font-medium shadow-none">
						Bron qilish
					</Button>
				</div>
			</div>
		</nav>
	);
}
