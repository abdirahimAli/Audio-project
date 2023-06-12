import { BrowserRouter,Routes,Route }from 'react-router-dom'
import {Home,Headphones,Speakers,Earphones} from './pages'
import Shared_layout from './components/Shared_layout'
import HeadphonesSingleproduct from './pages/HeadphonesSingleproduct'
import SpeakersSingleproduct from './pages/SpeakersSingleproduct'
import EarphonesSingleproduct from './pages/EarphonesSingleproduct'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared_layout />}>
          <Route index element={<Home />} />
          <Route path="/Headphones" element={<Headphones />} />
          <Route
            path="/Headphones/:ProductID"
            element={<HeadphonesSingleproduct />}
          />
          <Route path="/Speakers" element={<Speakers />} />
          <Route
            path="/Speakers/:ProductID"
            element={<SpeakersSingleproduct />}
          />
          <Route path="/Earphones" element={<Earphones />} />
          <Route
            path="/Earphones/:ProductID"
            element={<EarphonesSingleproduct />}
          />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
