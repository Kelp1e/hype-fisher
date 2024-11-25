import { cn } from "~/shared/lib"
import { Plane } from "~/shared/ui"

import { BackgroundProps } from "./background.props.ts"

import styles from "./backgroun.module.css"

export const Background = (props: BackgroundProps) => {
  const { className, children } = props

  return (
    <div
      className={cn(
        "relative bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat",
        className
      )}
    >
      <div className="absolute inset-0">
        <div
          className={cn(
            "relative mt-[40rem] flex w-full justify-end",
            styles.plane
          )}
        >
          <Plane className={cn("h-[100rem]")} />
        </div>
      </div>
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
