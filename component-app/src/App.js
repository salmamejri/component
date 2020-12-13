import React from 'react'
import './App.css';
import ProfilPhoto from "./Profil/ProfilPhoto"
import FullName from "./Profil/FullName"
import Address from "./Profil/Address"

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
      
    </div>
  );
}

export default App;
