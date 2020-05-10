import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// importando as páginas da aplicação:
import Index from './pages/Index';
import YouTubeTest from './pages/YouTubeTest';

import Header from './components/Header';


// import Entity from './pages/Entity'

export default function Routes(){
    return(
        <BrowserRouter> {/* Precisa ficar em volta de todas as rotas para que o roteamento funcione */}

        <Header />

            <Switch> {/* faz com que apenas uma rota seja executada de cada vez */}
                <Route exact path="/" component = {Index} />
                <Route path="/yt" component = {YouTubeTest} />

                {/* <Route path="/entities/:id" component={Entity} /> */}
            </Switch>
        </BrowserRouter>
    )
}