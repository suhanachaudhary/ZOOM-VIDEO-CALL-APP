
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/Authentication.jsx';
import History from './pages/History.jsx';
import HomeComponent from './pages/HomeComponent.jsx';
import Landing from './pages/Landing';
import VideoMeet from './pages/VideoMeet.jsx';

function App() {
  return(
    <div className='App'>
      <Router>
        <AuthProvider>

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/auth" element={<Authentication/>} />
          <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
          <Route path="/:url" element={<VideoMeet/>} />
        </Routes>

        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
