import Button from '../Components/Button'

function Home({ history }) {

  const goToLogin = () => {
    history.push('/login')
  }

  return(
    <div>
      <h1>HOME</h1>
      <Button
        text='Login'
        onClick={ goToLogin }
      />
    </div>
  )
}

export default Home;