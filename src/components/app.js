import React from "react";
import { connect } from "react-redux";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Counter from "./Counter.js"
import "./app.scss";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
