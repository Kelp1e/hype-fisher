import { cn } from "~/shared/lib"

import { BackgroundProps } from "./background.props.ts"

export const Background = (props: BackgroundProps) => {
  const { className, children } = props

  return (
    <div
      className={cn(
        "relative bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat",
        className
      )}
    >
      <div className="absolute inset-0"></div>
      {/*<img*/}
      {/*  src="/gifs/test.gif"*/}
      {/*  alt="fisher"*/}
      {/*  className="absolute left-0 top-0 h-[120rem] w-[234rem] border"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  src="/gifs/test.gif"*/}
      {/*  alt="fisher"*/}
      {/*  className="absolute bottom-0 right-0 h-[165rem] w-[325rem] border"*/}
      {/*/>*/}
      {children}
    </div>
  )
}
