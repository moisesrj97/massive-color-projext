import { Component } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { Switch, Route } from 'react-router-dom';
import SingleColorPalette from './SingleColorPalette';

import seedColors from './seedColors';

import { createPalette } from './colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findPalette(id) {
    return seedColors.find((e) => e.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => <Palette palette={createPalette(this.findPalette(routeProps.match.params.id))} {...routeProps} />}
        />
        <Route
          path="/palette/:id/:color"
          render={(routeProps) => (
            <SingleColorPalette
              palette={createPalette(this.findPalette(routeProps.match.params.id))}
              id={routeProps.match.params.id}
              color={routeProps.match.params.color}
              {...routeProps}
            />
          )}
        ></Route>
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    );
  }
}

export default App;
