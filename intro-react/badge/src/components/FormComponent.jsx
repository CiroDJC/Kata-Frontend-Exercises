import React, { Component } from 'react'

export class FormComponent extends Component {
  render() {
    return (
      <div>
        <h2>Crear Badge</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">Primer Nombre</label>
            <input type="text" name="firstName" className="form-control" onChange={this.props.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastName" className="form-control" onChange={this.props.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Rol</label>
            <input type="text" name="jobTitle" className="form-control" onChange={this.props.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-control" onChange={this.props.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default FormComponent