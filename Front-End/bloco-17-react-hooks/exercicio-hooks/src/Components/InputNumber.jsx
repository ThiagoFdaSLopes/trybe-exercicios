function InputNumber({ children, id, value, onChange}){
  return(
    <label htmlFor={ id }>
      {children}
      <input
        type="number"
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default InputNumber;