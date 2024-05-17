
import './App.css';

import Homepage from './components/homePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninForm from './components/signinForm/SigninForm';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for signup form */}
        <Route path="/signup" element={<SigninForm />} />

        {/* Route for dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ... other routes (optional) */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
