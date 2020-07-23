import React from "react"
import styles from "./FavouriteThing.module.css"

const FavouriteThing = ({ dataPoint, component_type }) => {
  let typeComponent
  let wrapperClass = styles.favouriteThingWrapper

  switch (component_type) {
    case "book":
      // code block
      const { link_to, title, type, author } = dataPoint
      console.log(dataPoint)
      typeComponent = (
        <>
          <a href={link_to}>
            {title}, by {author}
          </a>
          <p>({type})</p>
        </>
      )
      break
    default:
      // code block
      typeComponent = (
        <div>
          <p> IDK </p>
        </div>
      )
  }
  return <div className={wrapperClass}> {typeComponent} </div>
}

FavouriteThing.propTypes = {}

export default FavouriteThing
