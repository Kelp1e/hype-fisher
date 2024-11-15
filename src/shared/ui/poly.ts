import React from "react"

type As<E extends React.ElementType> = {
  as?: E
}

type OmitProps<E extends React.ElementType, P> = keyof (As<E> & P)

export type PolyRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>["ref"]

export type PolyProps<E extends React.ElementType, P = object> = P &
  As<E> &
  Omit<React.ComponentPropsWithoutRef<E>, OmitProps<E, P>>

export type PolyRefProps<E extends React.ElementType, P = object> = PolyProps<
  E,
  P
> & { ref?: PolyRef<E> }

export type PolyRefComponent<C extends React.ElementType, P = object> = <
  T extends React.ElementType = C,
>(
  props: PolyRefProps<T, P>
) => React.ReactElement | null
