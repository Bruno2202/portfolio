import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Home from "./pages/Home";
import ModalProvider from "./contexts/ModalContext";
import ProjectProvider from "./contexts/ProjectContext";
import HeaderProvider from "./contexts/HeaderContext";
import { Toaster } from "react-hot-toast";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
	<HeaderProvider>
		<ModalProvider>
			<ProjectProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Toaster
						toastOptions={{
							className: 'font-medium',
							duration: 2000,
							success: {
								iconTheme: {
									primary: '#4ade80',
									secondary: '#F5F3E2',
								},
							},
							error: {
								iconTheme: {
									primary: '#f87171',
									secondary: '#F5F3E2',
								},
							},
						}}
					/>
				</BrowserRouter>
			</ProjectProvider>
		</ModalProvider>
	</HeaderProvider>
);
