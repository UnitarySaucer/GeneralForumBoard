import Threads from '../components/Threads'
import axios from 'axios'
import { BASE_URL } from '../globals'

import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import ThreadForm from '../components/ThreadForm'
import { useEffect, useState } from 'react'

function Gaming() {
  const [threads, setThreadMain] = useState([])
  const [newThread, setNewThread] = useState({
    title: '',
    content: ''
  })

  useEffect(() => {
    async function getThreads() {
      const res = await axios.get(`${BASE_URL}/mainposts`)
      setThreadMain(res.data)
    }
    getThreads()
  }, [])

  const addThread = (e) => {
    e.preventDefault()
    const currentThreads = threads
    const addedThread = { ...newThread }
    currentThreads.push(addedThread)
    setThreadMain(currentThreads)
    setNewThread({ title: '', content: '' })
  }

  const handleChange = (e) => {
    setNewThread({ ...newThread, [e.target.title]: e.target.value })
  }

  return (
    <div className="App">
      <div className="cont">
        <div className="catCont">
          <Card>
            <Card.Header as="h3">Threads</Card.Header>
            <Threads />
          </Card>
        </div>
      </div>
      <div className="cont">
        <ThreadForm
          newThread={newThread}
          handleChange={handleChange}
          addThread={addThread}
        />
      </div>
    </div>
  )
}

export default Gaming
