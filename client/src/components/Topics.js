import React from 'react'

import Nav from 'react-bootstrap/Nav'

function Topics() {
  return (
    <div>
      <Nav.Link className="topics" href="/gaming">
        Gaming
      </Nav.Link>
      <Nav.Link className="topics" href="/software">
        Software Engineering
      </Nav.Link>
      <Nav.Link className="topics" href="/media">
        Shows/Movies
      </Nav.Link>
      <Nav.Link className="topics" href="/food">
        Food
      </Nav.Link>
    </div>
  )
}

export default Topics
