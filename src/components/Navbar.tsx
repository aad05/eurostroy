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
				<div onClick={()=> navigate("/")} className="flex items-center space-x-2">
					<span className="font-bold text-xl text-black">EuroStroy</span>
				</div>
				{/* Nav Links */}
				<div className="flex-1 flex justify-center">
					<ul className="flex space-x-2 text-[15px] font-medium text-zinc-700">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Xizmatlarimiz</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="flex w-full justify-between gap-2">
											<div className="flex flex-col gap-2">
												<Button variant="link" onClick={()=>navigate("/xizmatlar/plotnik")} >Plotnik</Button>
												<Button variant="link" className="pl-0">Mebelshik</Button>
												<Button variant="link">Patalokchik</Button>
												<Button variant="link">Pilitchik</Button>
												<Button variant="link">Kamenshik</Button>
												<Button variant="link">Malyarshik</Button>
												<Button variant="link">Kafelshik</Button>
												<Button variant="link">Svarshik</Button>
												<Button variant="link">Gruzchik</Button>
												<Button variant="link">Raznarabotchik</Button>
											</div>
											<div className="flex flex-col gap-2">
												<Button variant="link">Sadovnik</Button>
												<Button variant="link">
													Konditsioner i Televizor Ustanovka
												</Button>
												<Button variant="link">
													Remont Xolodilnika i Akfa dver i okno
												</Button>
												<Button variant="link">Kosit gazon</Button>
												<Button variant="link">Obrezka derevev</Button>
												<Button variant="link">Uborshik</Button>
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
