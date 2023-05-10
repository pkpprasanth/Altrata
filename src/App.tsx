import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CalendarLayout} from "./component/calendar/Calendar.layout"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CalendarLayout date={new Date()} />
      </header>
    </div>
  );
}

export default App;
