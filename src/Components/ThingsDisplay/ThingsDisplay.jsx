import React from "react"
import FavouriteThing from "../FavouriteThing/FavouriteThing"
import styles from "./ThingsDisplay.module.css"

const ThingsDisplay = ({ amount, thingData }) => {
  if (amount === "all") {
    return (
      <div className={styles.displayGallery}>
        {thingData.edges.map(data => {
          return (
            <div className={styles.favouriteThingWrapper}>
              <FavouriteThing
                key={data.node.frontmatter.title}
                favouriteThingData={data}
              />
            </div>
          )
        })}
      </div>
    )
  } else {
    const thingDataLength = thingData.edges.length
    const randNumber = Math.floor(Math.random() * thingDataLength)
    const thing = thingData.edges[randNumber]
    return (
      <div className={styles.thingsDisplay}>
        <FavouriteThing favouriteThingData={thing} />
      </div>
    )
  }
}

export default ThingsDisplay
