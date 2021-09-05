import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Gaming from './pages/Gaming'
import Software from './pages/Software'
import Media from './pages/Media'
import Food from './pages/Food'

import axios from 'axios'
import { BASE_URL, POST_MAIN } from './globals'
import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
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
    threads.push(newThread)
    axios.post(`${POST_MAIN}`, {
      title: newThread.title,
      content: newThread.content
    })
    setThreadMain(threads)
    setNewThread({ title: '', content: '' })
  }

  const handleChange = (e) => {
    setNewThread({ ...newThread, [e.target.name]: e.target.value })
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
          <Route exact path="/software" component={Software} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/food" component={Food} />
        </Switch>
      </main>
    </div>
  )
}

export default App
