import { Link, Routes, Route } from "react-router-dom";

import Home from './pages/Home.tsx';
import Calc from './pages/Calc.tsx';
import Chat from './pages/Chat.tsx';
import Landing from './pages/Landing.tsx';
import SignUp from './pages/SignUp.tsx';
import ToDo from './pages/ToDo.tsx';
import Weather from './pages/Weather.tsx';


const App = () => {
  return (
    <div className="body">
      <div className="nav">
        <Link to="/calc">calculator</Link>
        <Link to="/chat">chat</Link>
        <Link to="/landing">landing page</Link>
        <Link to="/signup">sign-up page</Link>
        <Link to="/todo">todo</Link>
        <Link to="/weather">weather</Link>
      </div>
      <div className="route">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
