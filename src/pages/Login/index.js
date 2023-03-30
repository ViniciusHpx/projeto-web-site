import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Tittle, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Tittle isRed={false}>
        Login
        <small>Oie</small>
      </Tittle>
      <Paragrafo>Lorem ipsum dolor sit</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
