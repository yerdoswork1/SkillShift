import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MotionProvider } from "./utils/motion/MotionProvider";
import "./utils/i18n";
import { HelmetProvider } from "react-helmet-async";
import "@/styles/index.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<Suspense fallback={<div>Loading...</div>}>
				<MotionProvider>
					<RouterProvider router={router}></RouterProvider>
				</MotionProvider>
			</Suspense>
		</HelmetProvider>
	</StrictMode>
);
