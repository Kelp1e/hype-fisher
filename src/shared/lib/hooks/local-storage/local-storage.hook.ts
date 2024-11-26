import React from "react"

export const useLocalStorage = <TState>(
  key: string,
  initialValue: TState
): [TState, React.Dispatch<React.SetStateAction<TState>>] => {
  const [state, setState] = React.useState<TState>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error("Error reading localStorage key:", key, error)
      return initialValue
    }
  })

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.error("Error saving to localStorage key:", key, error)
    }
  }, [key, state])

  return [state, setState]
}
