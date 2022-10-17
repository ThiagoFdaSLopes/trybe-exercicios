function InputText({ children, id, name, value, onChange}){
  return(
    <label htmlFor={ id }>
      {children}
      <input
        type="text"
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default InputText;