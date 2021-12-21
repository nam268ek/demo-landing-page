import { Routes } from "react-router-dom";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Background/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
