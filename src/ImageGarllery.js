import React from 'react'
import "./ImageGarllery.css"
import { FcLike } from "react-icons/fc"

const ImageGarllery = ({fetchData}) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL}>
            <img src={data.largeImageURL}/>
            </a>
            <div><FcLike />：{data.likes}</div>
          </div>
        ))}s
      </div>
    </div>
  )
}

export default ImageGarllery