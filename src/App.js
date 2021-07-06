import { Component } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { Switch, Route } from 'react-router-dom';
import SingleColorPalette from './SingleColorPalette';
import PaletteForm from './PaletteForm';

import seedColors from './seedColors';

import { createPalette } from './colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    };
    this.addPalette = this.addPalette.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addPalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }

  findPalette(id) {
    return this.state.palettes.find((e) => e.id === id);
  }

  handleDelete(id) {
    this.setState({ palettes: this.state.palettes.filter((e) => e.id !== id) });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              <PaletteList palettes={this.state.palettes} deletePalette={this.handleDelete} />
            </div>
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <div className="App">
              <PaletteForm palettes={this.state.palettes} addPalette={this.addPalette} routeProps={routeProps} />
            </div>
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <div className="App">
              <Palette palette={createPalette(this.findPalette(routeProps.match.params.id))} {...routeProps} />
            </div>
          )}
        />
        <Route
          path="/palette/:id/:color"
          render={(routeProps) => (
            <div className="App">
              <SingleColorPalette
                palette={createPalette(this.findPalette(routeProps.match.params.id))}
                id={routeProps.match.params.id}
                color={routeProps.match.params.color}
                {...routeProps}
              />
            </div>
          )}
        ></Route>
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    );
  }
}

export default App;
