import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Xizmatlar from "./pages/xizmatlar";
import { Euroremont } from "./pages/euroremont";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/xizmatlar/:xizmat" element={<Xizmatlar />} />
				<Route path="/euroremont" element={<Euroremont />} />
			</Routes>
		</div>
	);
}

export default App;
