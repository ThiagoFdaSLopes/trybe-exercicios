import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const label = screen.getByText(/email/i)
  expect(label).toBeInTheDocument();
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem os botões', () => {
  render(<App />);
  const btns = screen.getAllByRole('button');
  expect(btns).toHaveLength(2)
});

test('Verificando se existe um botão chamado Enviar', () => {
  render(<App />);
  const btn = screen.getByTestId('id-send')
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveProperty('type', 'button')
  expect(btn).toHaveValue('Enviar')
});

it('Verificando se existe o botão Voltar', () => {
  render(<App />)

  const btnVoltar = screen.getByTestId('id-return');
  
  expect(btnVoltar).toBeInTheDocument();
  expect(btnVoltar).toHaveValue('Voltar');
  expect(btnVoltar).toHaveProperty('type', 'button')
  expect(btnVoltar).toHaveProperty('id', 'btn-back')
})
// Acessar os elementos da tela

// interagir com os elementos (se for nescessário)

// fazer os testes screen.getByRole('button', { name: '/submit/i' })