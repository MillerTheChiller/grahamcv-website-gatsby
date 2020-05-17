import React from "react"
import { Helmet } from "react-helmet"
import { metadata } from "../../utils/constants"

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title> {metadata.title} </title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="name" content={metadata.name} />
      <meta name="location" content={metadata.location} />
      <link rel="canonical" href="https://grahamhenrymiller.com" />
    </Helmet>
  )
}

export default Metadata
