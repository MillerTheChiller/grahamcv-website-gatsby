import React from "react"
import { Helmet } from "react-helmet"
import { metadata } from "../../utils/constants"
import shareableImage from "../../images/picture_sharing.png"

const imageLink = `https://grahamhenrymiller.com${shareableImage}`

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title> {metadata.title} </title>
      <meta itemProp="name" content={metadata.title} />
      <meta itemProp="description" content={metadata.description} />
      <meta itemProp="image" content={imageLink} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="name" content={metadata.name} />
      <meta name="location" content={metadata.location} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={imageLink} />
      <meta property="og:image:width" content="1440" />
      <meta property="og:image:height" content="700" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content="https://www.grahamhenrymiller.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.grahamhenrymiller.com" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageLink} />
      <meta name="twitter:image:alt" content={metadata.title} />
      <link rel="canonical" href="https://grahamhenrymiller.com" />
    </Helmet>
  )
}

export default Metadata
