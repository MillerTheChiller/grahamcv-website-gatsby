import React from "react"
import { Helmet } from "react-helmet"
import { metadata } from "../../utils/constants"
import shareableImage from "../../images/picture_sharing.png"

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title> {metadata.title} </title>
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta
        property="og:image"
        content={`https://grahamhenrymiller.com${shareableImage}`}
      />
      <meta property="og:image:width" content="1440" />
      <meta property="og:image:height" content="700" />
      <meta property="og:image:type" content="image/png" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="name" content={metadata.name} />
      <meta name="location" content={metadata.location} />
      <link rel="canonical" href="https://grahamhenrymiller.com" />
    </Helmet>
  )
}

export default Metadata
