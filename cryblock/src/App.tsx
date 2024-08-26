import './App.css'
import { LandingPage } from './page/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PasswordComponent } from './page/PasswordComponent';
import { RecoveryPhase } from './page/RecoveryPhase';
import { ReadyToUse } from './page/ReadyToUse';
import WalletView from './page/SolanaWallet';
import EtheriumWallet from './page/EtheriumWallet';
import WalletConnectionProvider from './components/WalletConnectionProvider';

function App() {

  return (
    <div>
      <WalletConnectionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/password" element={<PasswordComponent />} />
            <Route path="/recoveryphase" element={<RecoveryPhase />} />
            <Route path="/ready" element={<ReadyToUse />} />
            <Route path="/solanawallet" element={<WalletView />} />
            <Route path="/eth" element={<EtheriumWallet />} />
          </Routes>
        </BrowserRouter>
      </WalletConnectionProvider>
    </div>
  )
}

export default App
