import React from "react";
import logo from "./logo.svg";
import { Button, DatePicker } from "antd";
import "./App.css";
import Banner from "./Components/bannerContainer/banner";
import DescriptionBox from "./Components/descriptionContainer/descriptionBox";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ fontWeight: 30 }}>
        <Banner />
        <DescriptionBox />
      </header>
    </div>
  );
}

export default App;
