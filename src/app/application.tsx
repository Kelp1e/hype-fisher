import { Home } from "~/pages/home/home.page.tsx"

import { SoundContextProvider } from "~/shared/lib"

export const App = () => {
  return (
    <SoundContextProvider>
      <Home />
    </SoundContextProvider>
  )
}
