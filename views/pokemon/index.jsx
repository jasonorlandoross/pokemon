const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { pokemons } = this.props
    return (
      <Default title='Pokemons Index Page'>
        <ul>
          {
                        pokemons.map((pokemon) => {
                          const { name, color, readyToSlay, _id } = pokemon
                          return (
                            <li key={_id}>
                              <a href={`/pokemons/${_id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        readyToSlay
                                          ? 'It\'s ready to slay'
                                          : 'It\'s not ready to slay'
                                    }
                              <br />
                              <form method='POST' action={`/pokemons/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
