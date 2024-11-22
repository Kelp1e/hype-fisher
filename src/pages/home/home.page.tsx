import {
  Button,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "~/shared/ui"

export const Home = () => {
  return (
    <div>
      <div className="h-screen bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-container mx-auto h-full">
          <div className="flex h-full items-center justify-center">
            <div className="gap-[10rem]l flex flex-col items-center">
              <img src="/images/logo.png" alt="logo" className="w-[560rem]" />
              <Button>Start fishing</Button>
            </div>
            <Listbox defaultValue="1">
              <ListboxButton>{({ value }) => value}</ListboxButton>
              <ListboxOptions>
                <ListboxOption value="1">1</ListboxOption>
                <ListboxOption value="2">2</ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  )
}
