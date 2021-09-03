// import Categories from '../components/Categories'
import Threads from '../components/Threads'

import 'bootstrap/dist/css/bootstrap.min.css'
import ThreadForm from '../components/ThreadForm'

function Gaming() {
  return (
    <div className="App">
      <div className="cont">
        <Threads />
      </div>
      <div className="cont">
        <ThreadForm />
      </div>
    </div>
  )
}

export default Gaming
