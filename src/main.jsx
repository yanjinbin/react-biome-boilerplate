import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { ClickToComponent } from "click-to-react-component";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "virtual:svg-icons-register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "@/i18n/index.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</HelmetProvider>
		<ClickToComponent />
	</StrictMode>,
);
