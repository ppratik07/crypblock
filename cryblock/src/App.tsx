import './App.css'
import { LandingPage } from './page/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PasswordComponent } from './page/PasswordComponent';
import { RecoveryPhase } from './page/RecoveryPhase';
import { ReadyToUse } from './page/ReadyToUse';
import WalletView from './page/SolanaWallet';
import EtheriumWallet from './page/EtheriumWallet';
import WalletConnectionProvider from './components/WalletConnectionProvider';
import ProtectedRoute from './Routes/ProtectedRoute';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import Custom404Page from './404/Custom404';

function App() {

  return (
    <div>
      <WalletConnectionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/password" element={<PasswordComponent />} />
            <Route path="/recoveryphase" element={<ProtectedRoute element={<RecoveryPhase/>} path="/solanawallet" />} />
            <Route path="/selectwallets" element={<ReadyToUse />} />
            <Route path="/solanawallet" element={<WalletView/>} />
            <Route path="/etheriumwallet" element={<EtheriumWallet />} />
            <Route path="/404" element={<Custom404Page />} />
          </Routes>
        </BrowserRouter>
      </WalletConnectionProvider>
    </div>
  )
}

export default App
