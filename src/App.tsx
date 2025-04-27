import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Plotnik from "./pages/xizmatlar/plotnik";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/xizmatlar/plotnik" element={<Plotnik />} />
			</Routes>
		</div>
	);
}

export default App;
