import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AddMovie from "./pages/AddMovie/AddMovie";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import ViewMovies from "./pages/ViewMovies/ViewMovies";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="add" element={<AddMovie />} />
        <Route path="view" element={<ViewMovies />} />
      </Route>
    </Routes>
  );
};

export default App;
