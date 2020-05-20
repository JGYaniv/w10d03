// This is our entry file!
// The file that has our document ready function.

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game'

const App = () => (
    <Game />
)

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
})





// Shortcut for setup, give-or-take tweaks
// npm create-react-app