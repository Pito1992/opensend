import { useState } from 'react'

export type UseToggleProps = boolean

export function useToggle(initialState: UseToggleProps = false) {
  const [state, setState] = useState(initialState)

  const toggle = () => setState((prevState) => !prevState)

  const on = () => setState(true)

  const off = () => setState(false)

  return [state, { toggle, on, off }]
}
