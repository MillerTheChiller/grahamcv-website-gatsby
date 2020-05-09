import React from "react"
import FavouriteThing from "../FavouriteThing/FavouriteThing"
import styles from "./ThingsDisplay.module.css"

const ThingsDisplay = ({ amount, thingData }) => {
  if (amount === "all") {
    return (
      <div className={styles.displayGallery}>
        {thingData.edges.map(data => {
          return (
            <FavouriteThing
              key={data.node.frontmatter.title}
              favouriteThingData={data}
            />
          )
        })}
      </div>
    )
  } else {
    const thingDataLength = thingData.edges.length
    const randNumber = Math.floor(Math.random() * thingDataLength)
    const thing = thingData.edges[randNumber]
    return <FavouriteThing favouriteThingData={thing} />
  }
}

export default ThingsDisplay
