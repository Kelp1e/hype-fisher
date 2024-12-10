import ReactDOM from "react-dom/client"

import "~/shared/lib/translations/i18n.ts"

import { App } from "./application.tsx"
import "./globals.css"

const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(<App />)
