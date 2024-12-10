import { Home } from "~/pages/home"

import { SoundContextProvider } from "~/shared/lib"

export const App = () => {
  return (
    <SoundContextProvider>
      <Home />
    </SoundContextProvider>
  )
}
