import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BASE_URL } from '../globals'

function Threads() {
  const [threadMain, setThreadMain] = useState([])

  useEffect(() => {
    async function getThreads() {
      const res = await axios.get(`${BASE_URL}/mainposts`)
      setThreadMain(res.data)
    }
    getThreads()
  }, [])

  return (
    <div className="catCont">
      <Card>
        <Card.Header as="h3">Threads</Card.Header>
        <div>
          {threadMain.map((thread) => {
            return (
              <Nav.Link
                className="topics"
                href={`/${thread._id}`}
              >{`${thread.title}`}</Nav.Link>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default Threads
