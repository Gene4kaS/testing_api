import { Component } from 'react';
import PokemonForm from './Components/PokemonForm';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './Components/PokemonInfo';

export default class App extends Component {
  state = {
    pokemoName: '',
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
