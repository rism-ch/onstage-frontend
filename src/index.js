import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './app/Router.jsx';

import GlobalState from './app/context/GlobalState.jsx';
import { initI18N } from './app/i18n/index.js';

const App = () => (
    <GlobalState>
        <Router />
    </GlobalState>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderApp = () => {
    root.render(
        <App />
    );
};

initI18N().then(renderApp());