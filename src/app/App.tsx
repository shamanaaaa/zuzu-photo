import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";
import { CookieBanner } from "./components/CookieBanner";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </>
  );
}