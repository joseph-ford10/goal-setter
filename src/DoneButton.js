import React from 'react'

export default function DoneButton({ formProgressSetter, number }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        formProgressSetter(number)
      }}
    >
      Done
    </button>
  )
}
