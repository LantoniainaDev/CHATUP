import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signin from './pages/Signin';
import ChatWall from "./pages/ChatWall";
import Profil from "./pages/Profil";
import {  useDispatch } from "react-redux";
import isconnected from "./feature/isconnected";
import { setToken, setUser } from "./feature/user.slice";


function App() {
  const dispatch = useDispatch();
  
  async function initState() {
      try {
          const {value} = await global.cookieStore.get("token");
          
          const user = await isconnected(value);
          dispatch(setToken(value));
          dispatch(setUser(user));
      } catch (err) {
          console.log("no cookie found",err);
      }
  }

  initState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatWall/>}/>
          <Route path="/profil" element={<Profil/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
