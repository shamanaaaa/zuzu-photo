import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { PortfolioCategory } from "./pages/PortfolioCategory";
import { Cennik } from "./pages/Cennik";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:category", Component: PortfolioCategory },
      { path: "cennik", Component: Cennik },
      { path: "o-mne", Component: About },
      { path: "kontakt", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
