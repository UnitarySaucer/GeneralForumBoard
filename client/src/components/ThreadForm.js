import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ThreadForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addThread(e)
  }

  return (
    <div className="catCont">
      <form onSubmit={handleSubmit}>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={props.newThread.title}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Content Here"
              style={{ height: '20vh' }}
              value={props.newThread.content}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </form>
    </div>
  )
}

export default ThreadForm
