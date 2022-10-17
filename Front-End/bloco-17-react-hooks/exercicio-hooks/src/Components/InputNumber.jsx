function InputNumber({ children, id, name, value, onChange}){
  return(
    <label htmlFor={ id }>
      {children}
      <input
        type="number"
        name={ name } 
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default InputNumber;