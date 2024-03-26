import React from "react"

const MyComponent = () => {
  return (
    <div>
      <h1>Embedding HTML using iframe in GatsbyJS</h1>
      <iframe
        src="/home/gustavo/blog/gatsby-starter-blog/public/distance_map.html"  // Adjust the path as needed
        width="600"
        height="400"
        title="Embedded HTML"
      ></iframe>
    </div>
  )
}

export default MyComponent
