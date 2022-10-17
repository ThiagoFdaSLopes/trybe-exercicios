function inputRadio({ children, id, name, value, onChange}){
  return(
    <label htmlFor={ id }>
      {children}
      <input
        type="radio"
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default inputRadio;