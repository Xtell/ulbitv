import "./index.pcss"
import { createRoot } from "react-dom/client";
import { Btn } from "./components/btn";

const rootNode = document.querySelector("[data-js-root]")
const root = createRoot(rootNode)
root.render(<Btn/>)