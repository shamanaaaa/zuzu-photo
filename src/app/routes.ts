import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

const Portfolio         = lazy(() => import("./pages/Portfolio").then(m => ({ default: m.Portfolio })));
const PortfolioCategory = lazy(() => import("./pages/PortfolioCategory").then(m => ({ default: m.PortfolioCategory })));
const Cennik            = lazy(() => import("./pages/Cennik").then(m => ({ default: m.Cennik })));
const About             = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Contact           = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const NotFound          = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

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
