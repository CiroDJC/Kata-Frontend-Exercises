import React, { Component } from 'react'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'
import BadgeComponent from './components/BadgeComponent'

export class App extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      username: "",
      jobTitle: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="app">
        <NavbarComponent/>
        <FormComponent handleChange={this.handleChange}/>
        <BadgeComponent
         firstName={this.state.form.firstName} 
         lastName={this.state.form.lastName}
         username={this.state.form.username}
         jobTitle={this.state.form.jobTitle}
         />
      </div>
    )
  }
}

export default App