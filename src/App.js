import React from "react"
import ItemsList from "./components/ItemsList/ItemsList"

export const App = () => {
  let items = [
    "HTC U Ultra",
    "iPhone 7",
    "Google Pixel",
    "Hawei P9",
    "Meizu Pro 6",
    "Asus Zenfone 3",
  ]

  return (
    <>
      <div className="App">
        <ItemsList title="Список смартфонов" items={items} />
      </div>
    </>
  )
}
