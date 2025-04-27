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
													Plotnik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/mebelshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Mebelshik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/pilitchik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Pilitchik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/kamenshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Kamenshik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/malyarshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Malyarshik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/kafelshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Kafelshik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/svarshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Svarshik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/gruzchik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Gruzchik
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/raznarabotchik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Raznarabotchik
												</h3>
											</div>
											<div className="flex flex-col gap-2">
												<h3
													onClick={() => navigate("/xizmatlar/sadovnik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Sadovnik
												</h3>
												<h3
													onClick={() =>
														navigate(
															"/xizmatlar/konditsioner-televizor-ustanovka",
														)
													}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Konditsioner i Televizor Ustanovka
												</h3>
												<h3
													onClick={() =>
														navigate(
															"/xizmatlar/remont-xolodilnika-i-akfa-dver-i-okno",
														)
													}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Remont Xolodilnika i Akfa dver i okno
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/kosht-gazon")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Kosht gazon
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/obrezka-derevev")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Obrezka derevev
												</h3>
												<h3
													onClick={() => navigate("/xizmatlar/uborshik")}
													className="text-sm hover:underline pb-1 text-nowrap"
												>
													Uborshik
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
						<Button variant="link" className="pl-0">
							Gruzchik
						</Button>
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
