function Button({ onClick, text }) {
  return(
    <>
      <button type="button" onClick={ onClick }>{ text }</button>
    </>
  );
}

export default Button;