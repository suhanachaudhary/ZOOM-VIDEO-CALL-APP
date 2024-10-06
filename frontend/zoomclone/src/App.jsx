import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/Authentication';
import History from './pages/history';
import HomeComponent from './pages/HomeComponent';
import LandingPage from './pages/landing';
import VideoMeetComponent from './pages/VideoMeet';

function App() {
  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/auth' element={<Authentication />} />

            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;