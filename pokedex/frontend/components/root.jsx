import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import {HashRouter, Route, Switch} from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/pokemon/:pokemon_id" component={PokemonDetailContainer} />
        <Route path="/" component ={PokemonIndexContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
