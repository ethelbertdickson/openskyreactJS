import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path='/' element={<LoginForm />} />
            <Route path='/dashboard' element={<Dashboard />} />
         </Routes>
      </Router>
   );
}

export default App;
