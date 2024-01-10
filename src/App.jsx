import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import Myfooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <TopBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Gallery searchValue="batman" title="Tv-Show" />
                <Gallery searchValue="Devil" title="Movies" />
                <Gallery searchValue="Iron man" title="Aggiunti di recente" />
                <Gallery searchValue="Rocco" title="Preferiti" />
              </>
            }
          ></Route>
          <Route path="tvshow" element={<Gallery searchValue="Cristo" title="Tv-Show" />} />
          <Route path="movies" element={<Gallery searchValue="Devil" title="Movies" />} />
          <Route path="add" element={<Gallery searchValue="Iron man" title="Aggiunti di recente" />} />
          <Route path="preferiti" element={<Gallery searchValue="Rocco" title="Preferiti" />} />
        </Routes>
        <Myfooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
