import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ReplyForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addReply(e)
  }

  return (
    <div className="catCont">
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Enter Content"
            style={{ height: '20vh' }}
            defaultValue={props.newReply.content}
            onChange={props.handleReplyChange}
            name="content"
            className="input"
          />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ReplyForm
