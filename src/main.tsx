import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { applyTheme, getStoredThemeId } from "./lib/themes";

applyTheme(getStoredThemeId());

createRoot(document.getElementById("root")!).render(<App />);
