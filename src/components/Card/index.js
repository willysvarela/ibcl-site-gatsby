import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Card = props => {
  return (
    <Link to={props.to} className="box_divlink">
      <div className="box is-paddingless">
        <div className="container">
          <img
            className="box_img"
            src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg"
          />
          <div className="box_body">
            <span className="box_title">{props.title}</span>
            <span className="box_bar"></span>
            <span className="box_description">{props.description}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
