import FormProvider from "./Context/FormProvider";
import Form from "./Pages/Form";

function App() {
  return (  
    <>
    <FormProvider>
      <Form />
    </FormProvider>
    </>
  );
}

export default App;
