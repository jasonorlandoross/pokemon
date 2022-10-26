const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Pokemon'>
        <form method='POST' action='/pokemons'>
          Name: <input type='text' name='name' placeholder='Name of Pokemon Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Pokemon Here' /><br />
          Is Ready To Slay: <input type='checkbox' name='readyToSlay' /><br />
          <input type='submit' value='Submit Pokemon' />
        </form>
      </Default>
    )
  }
}

module.exports = New
