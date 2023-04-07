import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Episodes from "./components/Episodes";

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Episodes/>}/>
            </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
