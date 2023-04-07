import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Episodes/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
  }
}

export default App;
