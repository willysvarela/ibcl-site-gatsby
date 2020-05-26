import React from "react"

import PropTypes from "prop-types"
import "./style.scss"

const EventBlock = props => {
  return (
    <div className="event_div">
      <div className="event_img">
        <img src={props.img} />
      </div>
      <div className="event_body">
        <span className="event_title">{props.title}</span>
        <span className="event_date">{props.date}</span>
        <span className="event_description">{props.description}</span>
        <br />
        <a className="button">Saiba Mais</a>
      </div>
    </div>
  )
}

EventBlock.propTypes = {
  date: PropTypes.any,
  description: PropTypes.any,
  img: PropTypes.any,
  title: PropTypes.any,
}

export default EventBlock
