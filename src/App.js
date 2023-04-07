import {BrowserRouter} from "react-router-dom";
import React from 'react';
import Header from "./components/Header";

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
  }
}

export default App;
