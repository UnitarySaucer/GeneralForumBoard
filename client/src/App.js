import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

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
          <Route exact path="/gaming" component={Home} />
          <Route exact path="/software" component={Home} />
          <Route exact path="/media" component={Home} />
          <Route exact path="/food" component={Home} />
        </Switch>
      </main>
    </div>
  )
}

export default App
