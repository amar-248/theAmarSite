import React from "react";
import "./App.scss";
import Banner from "./Components/bannerContainer/banner";
import DescriptionBox from "./Components/descriptionContainer/descriptionBox";
import GridLayout from "./Components/gridContainer/gridContainer";
import MainFooter from "./Components/mainFooter/mainFooter";


function App() {
  return (
    <div className="app">
      <header className="App-header" style={{ fontWeight: 30 }}>
        <Banner />
        <DescriptionBox />
        <GridLayout />
        <MainFooter/>
      </header>
    </div>
  );
}

export default App;
