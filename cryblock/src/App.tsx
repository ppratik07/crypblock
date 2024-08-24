import { generateMnemonic } from 'bip39';
import './App.css'
import { useState } from 'react';
import { LandingPage } from './page/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PasswordComponent } from './page/PasswordComponent';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      {/* <input type="text" value={mnemonic} ></input>
      <button onClick={async function () {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Seed Phrase
      </button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/password" element={<PasswordComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
