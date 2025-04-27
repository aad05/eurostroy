import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Xizmatlar from "./pages/xizmatlar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/xizmatlar/:ximat" element={<Xizmatlar />} />
			</Routes>
		</div>
	);
}

export default App;
