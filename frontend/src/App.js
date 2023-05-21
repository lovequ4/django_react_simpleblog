import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsPage from "./components/DetailsPage";
import CatBasedPosts from "./components/CatBasedPosts";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
          <Route path="/category/:id" element={<CatBasedPosts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    
  );
}

export default App;
