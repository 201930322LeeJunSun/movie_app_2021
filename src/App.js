import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(){
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/movie-detail" component={Detail} ></Route>
        </BrowserRouter>
    );
}

export default App;