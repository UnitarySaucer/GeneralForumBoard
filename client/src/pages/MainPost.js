import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Card from 'react-bootstrap/Card'
import ReplyForm from '../components/ReplyForm'
import Button from 'react-bootstrap/Button'

function MainPost(props) {
  const [main, setMain] = useState([])
  const [replies, setReplies] = useState([])

  useEffect(() => {
    async function getMain() {
      const res = await axios.get(
        `${BASE_URL}/mainpost/${props.match.params.id}`
      )
      setMain(res.data[0])
    }

    async function getReplies() {
      const res = await axios.get(`${BASE_URL}/replies`)
      setReplies(res.data.replies)
    }
    getMain()
    getReplies()
  }, [])

  const deleteMain = async (e) => {
    e.preventDefault()
    await axios.delete(`${BASE_URL}/delete/${props.match.params.id}`)
  }

  return (
    <div>
      <Button type="button" onClick={deleteMain}>
        Delete
      </Button>
      <h1>{main.title}</h1>
      <h4>{main.content}</h4>
      {replies.map((reply) => {
        return (
          <Card className="topics">
            <p>{reply.content}</p>
          </Card>
        )
      })}
      <form className="cont">
        <ReplyForm
          {...props}
          handleReplyChange={props.handleReplyChange}
          newReply={props.newReply}
          addReply={props.addReply}
        />
      </form>
    </div>
  )
}

export default MainPost
