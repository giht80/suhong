
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SearchResult from './Components/SearchResult';
import Searchinput from './Components/searchinput';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Searchinput />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<SearchResult />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
