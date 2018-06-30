import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import SearchField from "./search-field/Search-field";
import SideBar from "./side-bar/Side-bar";
import DestinationCard from "./Destination-card/Destination-card";

const App = ({ appState, toggleSidebar }) => (
  <div id="app" className="App">
    <SideBar active={appState.sidebarActive} />
    <main className="Content-container otl-green suspendend-view ">
      <div className="generic-container white-text">
        <div className="top-bar">
          <button onClick={toggleSidebar} type="button">
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>
      <SearchField />
      <section className="cards-grid">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </section>
    </main>
    {/* <footer className="App-footer">Vinicius</footer> */}
  </div>
);

App.render = node => {
  return props => {
    ReactDOM.render(<App {...props} />, node);
  };
};

export default App;