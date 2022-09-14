import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

it('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveAttribute('class', 'green-text');
});

it('Testando um component, caso o email seja invalido', () => {
    const EMAIL_USER = 'email';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isinValid = screen.getByText('Email Inválido');
    expect(isinValid).toBeInTheDocument();
    expect(isinValid).toHaveAttribute('class', 'red-text');
})

it('Testando se a mensagem aparece antes de apertar em Enviar', () => {
    render(<ValidEmail email='' />);
    const isNot = screen.queryByTestId('result-text');
    expect(isNot).not.toBeInTheDocument();
})