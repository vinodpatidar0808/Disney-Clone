import { useState } from "react";

import './App.css';
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";


function App() {
    const [onLoginPage, setOnLoginPage] = useState(false)

    const onClick = () => {
        setOnLoginPage(false)
    }

  return (
    <>
    {onLoginPage ? <LoginPage changePage={onClick} /> : <MainPage />}
    </>
  )
}

export default App;
