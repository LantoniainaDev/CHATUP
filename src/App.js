import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signin from './pages/Signin';
import ChatWall from "./pages/ChatWall";
import Me from "./pages/Me";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatWall/>}/>
          <Route path="/profil" element={<Me/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
