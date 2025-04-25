// Import Style App
import './App.css'

// Import React Libs
import { useState } from 'react';

// Import React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Letter from './pages/Letter';
import Album from './pages/Album';

// Import Components
import Navbar from './components/Navbar';

function App() {
    const [embedController, setEmbedController] = useState(null);

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = document.getElementById("embed-iframe");
        const options = {
            uri: "spotify:playlist:5c2T6bsVOT5gjC9o38GShx",
            width: "640",
            height: "160",
        };
        const callback = (EmbedController) => {
            setEmbedController(EmbedController);
        };
        IFrameAPI.createController(element, options, callback);
    };

    return (
        <>
            <div className="App">
                <BrowserRouter basename="/six-years">
                    <div id="embed-iframe"></div>

                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home embedController={embedController} />} />
                        <Route path="/letter" element={<Letter />} />
                        <Route path="/album" element={<Album />} />
                    </Routes>
                </BrowserRouter>
            </div >
        </>
    );
};

export default App;