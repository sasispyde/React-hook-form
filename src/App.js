import Navbar from "./components/utils/navbar";
import BasicForm from "./components/forms/basic_form";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <br />
      <div className="container">
        <BasicForm />
      </div>
    </>
  );
}

export default App;
