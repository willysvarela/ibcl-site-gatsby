import { Link } from "gatsby"
import React from "react"
import { Heading } from "react-bulma-components"
import "./style.scss"

const EventsList = props => {
  return (
    <div className="eventslist">
      <div>
        <Heading size={4}>Próximos Eventos</Heading>
      </div>
      <div className="event_item">
        <div className="event_date">
          <span className="event_day">28</span>
          <span className="event_month">ABR</span>
        </div>
        <div className="event_body">Noite Havaiana</div>
      </div>
      <div className="event_item">
        <div className="event_date">
          <span className="event_day">28</span>
          <span className="event_month">ABR</span>
        </div>
        <div className="event_body">Noite Havaiana</div>
      </div>
      <div className="event_item">
        <div className="event_date">
          <span className="event_day">28</span>
          <span className="event_month">ABR</span>
        </div>
        <div className="event_body">Noite Havaiana</div>
      </div>

      <Link>
        <span className="seeall_link">Ver Todos</span>
      </Link>
    </div>
  )
}

EventsList.propTypes = {}

export default EventsList
