function inputRadio({ children, id, value, onChange}){
  return(
    <label htmlFor={ id }>
      {children}
      <input
        type="radio"
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default inputRadio;