import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './pages/Search.jsx';
import Source from './pages/Source.jsx';
import Browse from './pages/Browse.jsx';
import Pinned from './pages/Pinned.jsx';
import StaticHtml from './pages/StaticHtml.jsx';
import Index from './pages/Index.jsx';
import Collection from './pages/Collection.jsx';

import SearchState from './context/SearchState.jsx';
import BrowseState from './context/BrowseState.jsx';
import AnalysisState from './context/AnalysisState.jsx';


const Router = () => (
    <BrowserRouter>
        <AnalysisState>
            <SearchState>
                <BrowseState>
                    <Routes>
                        <Route path="/" index element={<Index />} />
                        <Route path="/collection/:collection" element={<Collection />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/pin" element={<Pinned />} />
                        <Route path="/source/:manifest" element={<Source />} />
                        <Route path="/page/:filename" element={<StaticHtml />} />
                        <Route path="*" element={<p>Path not resolved</p>} />
                    </Routes>
                </BrowseState>
            </SearchState>
        </AnalysisState>
    </BrowserRouter>
);

export default Router;