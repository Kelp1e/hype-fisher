import { Button } from "~/shared/ui"

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
          </div>
        </div>
      </div>
    </div>
  )
}
