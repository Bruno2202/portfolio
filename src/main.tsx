import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Home from "./pages/Home";
import ModalProvider from "./contexts/ModalContext";
import ProjectProvider from "./contexts/ProjectContext";
import HeaderProvider from "./contexts/HeaderContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
	<ThemeProvider>
		<HeaderProvider>
			<ModalProvider>
				<ProjectProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</BrowserRouter>
				</ProjectProvider>
			</ModalProvider>
		</HeaderProvider>
	</ThemeProvider>
);
