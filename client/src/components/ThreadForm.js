import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'

function ThreadForm() {
  return (
    <div className="catCont">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Content Here"
            style={{ height: '20vh' }}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default ThreadForm
