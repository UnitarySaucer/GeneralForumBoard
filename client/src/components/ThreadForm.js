import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ThreadForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addThread(e)
  }

  return (
    <div className="catCont">
      <form>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              defaultValue={props.newThread.title}
              onChange={props.handleChange}
              name="title"
              className="input"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Content Here"
              style={{ height: '20vh' }}
              defaultValue={props.newThread.content}
              onChange={props.handleChange}
              name="content"
              className="input"
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </form>
    </div>
  )
}

export default ThreadForm
