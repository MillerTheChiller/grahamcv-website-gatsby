import React from "react"
import styles from "./FavouriteThing.module.css"

const FavouriteThing = ({ dataPoint, component_type }) => {
  let typeComponent
  let wrapperClass = styles.favouriteThingWrapper
  console.log(dataPoint, component_type)
  const { link_to, type } = dataPoint
  switch (component_type) {
    case "book":
      // code block
      const { title, author } = dataPoint
      typeComponent = (
        <>
          <a href={link_to}>
            {title}, by {author}
          </a>
          <p className={styles.secondaryLine}>({type})</p>
        </>
      )
      break
    case "album":
      const { artist, album } = dataPoint
      typeComponent = (
        <>
          <a href={link_to}>
            {artist}, {album}
          </a>
          <p className={styles.secondaryLine}>({type})</p>
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
