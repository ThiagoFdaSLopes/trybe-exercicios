function InputText({ children, id, value, onChange}){
  return(
    <label htmlFor={ id }>
      {children}
      <input
        type="text"
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default InputText;