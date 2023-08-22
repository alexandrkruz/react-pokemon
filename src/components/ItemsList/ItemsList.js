import React from "react"
import Item from "../Item/Item"

const ItemsList = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        {props.items.map(name => {
          return <Item key={name} name={name} />
        })}
      </ul>
    </>
  )
}

export default ItemsList
