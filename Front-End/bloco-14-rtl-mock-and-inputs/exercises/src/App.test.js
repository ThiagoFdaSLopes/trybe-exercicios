// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('testando a chamada do fetch apos clicar no botão', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Essa frase é para ser renderizada na primeira chamada',
    status: 200,
  };
  
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />)

  const renderedJoke = await screen.findByText('Essa frase é para ser renderizada na primeira chamada');
  expect(renderedJoke).toBeInTheDocument();
  
  const jokee = {
    id: '7h3oGtrOfxc',
    joke: 'Essa frase é para ser renderizada após clicar na chamada',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(jokee),
  });

  const button = screen.getByText('New Joke');
  userEvent.click(button);


  const renderedNewJoke = await screen.findByText('Essa frase é para ser renderizada após clicar na chamada');
  
  expect(renderedNewJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});