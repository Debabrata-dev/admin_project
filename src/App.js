// import './App.css';
import { Route, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import Therapist from './pages/Therapist';
import Therapist_Details from './pages/Therapist_Details';
import Client from "./pages/Client";
import Wallet from "./pages/Wallet"
import Report from "./pages/Report";
import Message from "./pages/Message";
import Setting from "./pages/Setting";

function App() {
  return (
<div className='App'>
  
  <Sidebar/>
  <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path='/Therapist' element={<Therapist/>}/>
      <Route path='/Therapist Details' element={<Therapist_Details/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/Report" element={<Report/>}/>
      <Route path="/Message" element={<Message/>}/>
      <Route path="/Setting" element={<Setting/>}/>
</Routes>
  
</div>
  );
}

export default App;
