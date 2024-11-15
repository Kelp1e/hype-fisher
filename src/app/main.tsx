import ReactDOM from "react-dom/client"

import { appStarted } from "~/shared/config"
import "~/shared/lib/translations/i18n.ts"

import { App } from "./application.tsx"
import "./globals.css"

const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)

appStarted()
root.render(<App />)
