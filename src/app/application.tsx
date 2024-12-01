import { Pages } from "~/pages"

import { RouterProvider } from "~/shared/config"
import { SoundContextProvider } from "~/shared/lib"

export const App = () => {
  return (
    <RouterProvider>
      <SoundContextProvider>
        <Pages />
      </SoundContextProvider>
    </RouterProvider>
  )
}
