import InputText from "../Components/InputText";
import InputNumber from "../Components/InputNumber";
import InputRadio from '../Components/InputRadio';
import { useState, useContext } from "react";
import FormContext from "../Context/FormContext";

function Form(){
  const [inputName, setInputName] = useState('');
  const [inputCidade, setInputCidade] = useState('');
  const [inputIdade, setInputIdade] = useState('');
  const [inputRadio, setInputRadio] = useState('');

  // pegando valores do contexto
  const value = useContext(FormContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    value.addNewUser({ inputName, inputCidade, inputIdade, inputRadio})

    setInputCidade('');
    setInputIdade('');
    setInputName('');
    setInputRadio('');
  }
  return (
    <>
    <h1>FORM</h1>
    <form onSubmit={ handleSubmit }>
    <InputText
     id='nome-input'
     value={ inputName }
     onChange={ (e) => setInputName(e.target.value) }
    >
      Nome Completo
    </InputText>
    <InputNumber
      id='idade-input'
      value={ inputIdade }
      onChange={ (e) => setInputIdade(e.target.value) }
    >
      Idade
    </InputNumber>
    <InputText
     id='cidade-input'
     value={ inputCidade }
     onChange={ (e) => setInputCidade(e.target.value) }
    >
      Cidade
    </InputText>
    <InputRadio
      id='fundamentos-input'
      value="Fundamentos"
      onChange={ (e) => setInputRadio(e.target.value) }
    >
      Fundamentos
    </InputRadio>
    <InputRadio
      id='frontend-input'
      value="Front-End"
      onChange={ (e) => setInputRadio(e.target.value) }
    >
      Front-End
    </InputRadio>
    <InputRadio
      id='backend-input'
      value="Back-End"
      onChange={ (e) => setInputRadio(e.target.value) }
    >
      Back-End
    </InputRadio>
    <InputRadio
      id='ciencia-input'
      value="Ciência da Computação"
      onChange={ (e) => setInputRadio(e.target.value) }
    >
      Ciencia da Computação
    </InputRadio>
    <button type='submit'>Salvar</button>
    </form>
    <div>
      {
        value.newUser.map((e, index) => <ul key={ index }>
          <li>{e.inputName}</li>
          <li>{e.inputCidade}</li>
          <li>{e.inputRadio}</li>
          <li>{e.inputIdade}</li>
        </ul>)
      }
    </div>
    </>
  )
} 

export default Form;