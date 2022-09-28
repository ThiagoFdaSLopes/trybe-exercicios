// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState, applyMiddleware(thunk)),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

// src/App.test.js
// ...
describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  // Utilizaremos o seletor `getByText` para retornar o nó correspondente a uma consulta de texto
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 } } });

    expect(screen.getByText('0')).toBeInTheDocument();

    const buttonAdicionar = screen.queryByText('Clique aqui');

    for(let i = 0; i <= 2; i += 1) {
      userEvent.click(buttonAdicionar)
    }

    expect(screen.getByText('3')).toBeInTheDocument();

  });
});