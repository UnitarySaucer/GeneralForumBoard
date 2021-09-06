import axios from 'axios'
import { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BASE_URL } from '../globals'

function Threads(props) {
  const [threadMain, setThreadMain] = useState([])

  useEffect(() => {
    async function getThreads() {
      const res = await axios.get(`${BASE_URL}/mainposts`)
      setThreadMain(res.data)
    }
    getThreads()
  }, [])

  return (
    <div>
      {threadMain.map((thread) => {
        return (
          <Nav.Link className="topics" href={`/gaming/${thread._id}`}>
            {`${thread.title}`}
          </Nav.Link>
        )
      })}
    </div>
  )
}

export default Threads
