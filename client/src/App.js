import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Gaming from './pages/Gaming'
import Software from './pages/Software'
import Media from './pages/Media'
import Food from './pages/Food'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/software" component={Software} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/food" component={Food} />
        </Switch>
      </main>
    </div>
  )
}

export default App
