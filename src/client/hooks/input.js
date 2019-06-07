import { useState } from 'react'

export function useFormField(initialValue) {
  const [value, setState] = useState(initialValue)

  function onChange(e) {
    setState(e.target.value)
  }

  return { value, onChange }
}