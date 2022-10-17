import InputText from "../Components/InputText";
import InputNumber from "../Components/InputNumber";
import InputRadio from '../Components/InputRadio';
import { useState } from "react";

function Form(){
  const [state, setState] = useState({ nome: '', idade: '', cidade: '', modulo: ''});
  
  const handleChange = ({ target: { name, value }}) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  // descontruindo estado
  const { nome, idade, cidade } = state;
  return (
    <>
    <h1>FORM</h1>
    <InputText
     name="nome"
     value={ nome }
     onChange={ handleChange }
    >
      Nome Completo
    </InputText>
    <InputNumber
      id='idade-input'
      name="idade"
      value={ idade }
      onChange={ handleChange }
    >
      Idade
    </InputNumber>
    <InputText
     id='cidade-input'
     name="cidade"
     value={ cidade }
     onChange={ handleChange }
    >
      Cidade
    </InputText>
    <InputRadio
      name="modulo"
      id='fundamentos-input'
      value="Fundamentos"
      onChange={ handleChange }
    >
      Fundamentos
    </InputRadio>
    <InputRadio
      name="modulo"
      id='frontend-input'
      value="Front-End"
      onChange={ handleChange }
    >
      Front-End
    </InputRadio>
    <InputRadio
      name="modulo"
      id='backend-input'
      value="Back-End"
      onChange={ handleChange }
    >
      Back-End
    </InputRadio>
    <InputRadio
      name="modulo"
      id='ciencia-input'
      value="Ciência da Computação"
      onChange={ handleChange }
    >
      Ciencia da Computação
    </InputRadio>
    </>
  )
} 

export default Form;