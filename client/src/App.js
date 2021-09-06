import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Gaming from './pages/Gaming'
import MainPost from './pages/MainPost'

import axios from 'axios'
import { BASE_URL, POST_MAIN } from './globals'
import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [threads, setThreadMain] = useState([])
  const [replies, setNewReplies] = useState([])
  const [newThread, setNewThread] = useState({
    title: '',
    content: ''
  })
  const [newReply, setNewReply] = useState({
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
    threads.push(newThread)
    axios.post(`${POST_MAIN}`, {
      title: newThread.title,
      content: newThread.content
    })
    setThreadMain(threads)
    setNewThread({ title: '', content: '' })
  }

  const addReply = (e) => {
    e.preventDefault()
    replies.push(newReply)
    axios.post(`${BASE_URL}/reply`, {
      content: newReply.content
    })
    setNewReplies(replies)
    setNewReply({ content: '' })
  }

  const deleteMain = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setNewThread({ ...newThread, [e.target.name]: e.target.value })
  }

  const handleReplyChange = (e) => {
    setNewReply({ ...newReply, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/gaming"
            render={(props) => (
              <Gaming
                {...props}
                newThread={newThread}
                handleChange={handleChange}
                addThread={addThread}
              />
            )}
          />
          <Route
            exact
            path="/gaming/:id"
            render={(props) => (
              <MainPost
                {...props}
                newReply={newReply}
                handleReplyChange={handleReplyChange}
                addReply={addReply}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
