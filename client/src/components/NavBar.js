import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand>Forum</Navbar.Brand>
        <Nav.Link href="/home">Home</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default NavBar
