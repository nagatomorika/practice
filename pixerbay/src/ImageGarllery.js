import React from 'react'
import "./ImageGarllery.css"

const ImageGarllery = ({fetchData}) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL}>
            <img src={data.largeImageURL}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGarllery