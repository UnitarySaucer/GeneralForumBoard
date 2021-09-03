import React from 'react'
import Topics from './Topics'

import Card from 'react-bootstrap/Card'

function Categories() {
  return (
    <div className="catCont">
      <Card>
        <Card.Header as="h3">Main Boards</Card.Header>
        <Topics />
      </Card>
    </div>
  )
}

export default Categories
