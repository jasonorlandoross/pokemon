const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, readyToSlay } = this.props.pokemon
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
        <p>{capName} is {color} and {readyToSlay ? 'it\'s ready to slay' : 'it\'s not ready to slay'}</p>
      </Default>
    )
  }
}

module.exports = Show
