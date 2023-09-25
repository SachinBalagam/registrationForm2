// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isLoginSuccess: false,
    firstNameError: false,
    lastNameError: false,
    firstName: '',
    lastName: '',
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isLoginSuccess: true, firstName: '', lastName: ''})
    } else if (firstName === '' && lastName === '') {
      this.setState({firstNameError: true, lastNameError: true})
    } else if (firstName === '') {
      this.setState({firstNameError: true})
    } else if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  onFirstNameBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  onLastNameBlur = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  onSubmitResponse = () => {
    this.setState({isLoginSuccess: false})
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  renderFormView = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state
    const firstNameErrorCss = firstNameError ? 'error' : ''
    const lastNameErrorCss = lastNameError ? 'error' : ''
    return (
      <form className="form-container" onSubmit={this.onFormSubmit}>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className={`input ${firstNameErrorCss}`}
          onBlur={this.onFirstNameBlur}
          onChange={this.onFirstNameChange}
          value={firstName}
        />
        {firstNameError && <p className="error-message">Required</p>}
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className={`input ${lastNameErrorCss}`}
          onChange={this.onLastNameChange}
          onBlur={this.onLastNameBlur}
          value={lastName}
        />
        {lastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  renderRegistrationSuccessView = () => (
    <div className="success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" className="button" onClick={this.onSubmitResponse}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isLoginSuccess} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card">
          {isLoginSuccess && this.renderRegistrationSuccessView()}
          {!isLoginSuccess && this.renderFormView()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
