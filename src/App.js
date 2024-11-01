import logo from './logo.svg';
import './App.css';
import LandingPage from './stores/pages/landingPage';
import { Routes,Route } from 'react-router-dom';

import MobilesPage from './stores/pages/MobilesPage';
import ACPages from './stores/pages/ACPages';
import BooksPage from './stores/pages/BooksPage';
import ComputersPage from './stores/pages/ComputersPage';
import FridgesPage from './stores/pages/FridgesPage';
import FurniturePage from './stores/pages/FurniturePage';
import Kitchen from './stores/pages/Kitchen';
import MenPage from './stores/pages/MenPage';

import TVPage from './stores/pages/TVPage';
import WatchesPage from './stores/pages/WatchesPage';
import WomenPage from './stores/pages/WomenPage';
import MobileSingles from './Singles/MobileSingles';
import ACSingles from './Singles/ACSingles';
import BookSingle from './Singles/BookSingle';
import ComputerSingle from './Singles/ComputerSingle';
import FidgeSingle from './Singles/FidgeSingle';
import FurnitureSingle from './Singles/FurnitureSingle';
import KitchenSingle from './Singles/KitchenSingle';
import MenSingle from './Singles/MenSingle';


import WatchSingle from './Singles/WatchSingle';
import WomenSingle from './Singles/WomenSingle';
import TvSingle from './Singles/TvSingle';
import UserCart from './stores/UserCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobile' element={< MobilesPage/>}/>
        <Route path='/ac' element={<ACPages/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/computer' element={<ComputersPage/>}/>
        <Route path='/fridge' element={<FridgesPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/men' element={<MenPage/>}/>
        
        <Route path="/tv" element={<TVPage/>}/>
        <Route path='/watch' element={<WatchesPage/>}/>
        <Route path='/women' element={<WomenPage/>}/>

            <Route path="/mobile/:id" element={<MobileSingles/>}/>
            <Route path="/ac/:id" element={<ACSingles/>}/>
            <Route path="/book/:id" element={<BookSingle/>}/>
            <Route path="/computer/:id" element={< ComputerSingle/>}/>
            <Route path="/fridge/:id" element={<FidgeSingle/>}/>
            <Route path="/furniture/:id" element={< FurnitureSingle/>}/>
            <Route path="/kitchen/:id" element={< KitchenSingle/>}/>
            <Route path='/men/:id' element={<MenSingle/>}/>
            <Route path="/watch/:id" element={< WatchSingle/>}/>
            
            <Route path="/women/:id" element={<WomenSingle/>}/>
            <Route path='/tv/:id' element={<TvSingle/>}/>
            <Route path="/cart" element={<UserCart/>}/>
          
      </Routes>
      
      
    </div>
  );
}

export default App;
