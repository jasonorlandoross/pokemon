const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name } = this.props.pokemon
    return (
      <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>

        <form method='POST' action='/pokemon'>
          Name: <input type='type' name='name' placeholder='Name of Pokemon Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Pokemon Here' /><br />
          Is Ready To Slay: <input type='checkbox' name='readyToSlay' /><br />
          <input type='submit' value='Edit Pokemon' />
        </form>
      </Default>
    )
  }
}
module.exports = Edit
