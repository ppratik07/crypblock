import { generateMnemonic } from 'bip39';
import './App.css'
import { useState } from 'react';
import { LandingPage } from './components/LandingPage';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      <input type="text" value={mnemonic} ></input>
      <button onClick={async function () {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Seed Phrase
      </button>
      <LandingPage/>
    </div>
  )
}

export default App
