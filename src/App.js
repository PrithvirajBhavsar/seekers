import "./App.css";
import Footer from "./components/Footer/Footer";
import Applied from "./pages/Applied/Applied";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profiles from "./pages/Recruiter/Profiles/Profiles";
import JOBS from "./pages/Recruiter/Jobs/Jobs";

function App() {
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>} />
            <Route path="login" element={<Login/>} />
            <Route path="profile" element={<Profile />} />
            <Route path="applied" element={<Applied />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>

          <Route path="/recruiter">
            <Route index element={<Profiles/>} />
            <Route path="login" element={<Login/>} />
            <Route path="jobs" element={<JOBS/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
