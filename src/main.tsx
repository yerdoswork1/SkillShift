import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router}></RouterProvider>
		</Suspense>
	</StrictMode>
);
