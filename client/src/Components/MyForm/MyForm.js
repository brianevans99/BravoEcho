import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
      showForm: true,
    }
  }

  render() {
    const { status } = this.state
    return (
      <Fragment>
        <form
          style={{ display: this.state.showForm ? 'block' : 'none' }}
          onSubmit={this.submitForm}
          action='https://formspree.io/mjvawjvq'
          method='POST'
        >
          <Form.Group>
            <h4>Name:</h4>
            <Form.Control
              type='name'
              name='name'
              placeholder='Your Name'
              required
            />
          </Form.Group>

          <Form.Group>
            <h4>Email address:</h4>
            <Form.Control
              type='email'
              name='email'
              placeholder='name@example.com'
              required
            />
          </Form.Group>
          <Form.Group>
            <h4>Phone number (optional):</h4>
            <Form.Control
              type='tel'
              name='phone'
              minLength={10}
              maxLength={14}
              pattern='[\(][0-9]{3}[\)]\[-. ][0-9]{3}\[-. ][0-9]{4}'
            />
          </Form.Group>

          <Form.Group>
            <h4>I am insterested in (check all that apply):</h4>
            <Form.Check
              label='I need a website made'
              name='New website'
              type='checkbox'
            />
            <Form.Check
              label='I have a website but I need some help'
              name='Existing website'
              type='checkbox'
            />
            <Form.Check
              label='I need to market my website/business'
              name='Marketing'
              type='checkbox'
            />
            {/* <Form.Check
            label='I need a digital announcement made'
            name='Temp announcement'
            type='checkbox'
          /> */}
          </Form.Group>

          <Form.Group>
            <h4>Message (optional):</h4>
            <Form.Control
              as='textarea'
              name='message'
              placeholder=''
              rows='6'
            />
          </Form.Group>
          {status === 'SUCCESS' ? (
            <h2>Thanks!</h2>
          ) : (
            <button className='btn btn-primary'>Submit</button>
          )}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
        <div style={{ display: this.state.showForm ? 'none' : 'block' }}>
          <div className='d-flex flex-column align-items-center'>
            <h1>Thank you!</h1>
            <h4>You will be contacted soon.</h4>
          </div>
        </div>
      </Fragment>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS', showForm: false })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
