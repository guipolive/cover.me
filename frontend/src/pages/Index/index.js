import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Index extends Component {
    render(){
        return(

            <div className="content">
                {/* <li>
                    <Link to="/yt">youtube test</Link>
                </li> */}

                <div className="artist-list">
                    
                    <h2>Principal resultado</h2>

                    <article>
                        <strong>Natiruts</strong>
                        <p>Artista</p>

                        <Link to={`/yt`} >Acessar</Link>
                    </article>

                    <h2>Músicas</h2>

                    <article>
                        <strong>Andei Só</strong>
                        <p>Música • Natiruts • Álbum Aleatório • 4:58</p>

                        <Link to={`/yt`} >Acessar</Link>
                    </article>
                    
                    <article>
                        <strong>Sorri, Sou Rei</strong>
                        <p>Música • Natiruts • Box Natiruts • 4:58</p>

                        <Link to={`/yt`} >Acessar</Link>
                    </article>

                    <h2>Artistas</h2>

                    <article>
                        <strong>Natiruts</strong>
                        <p>Artista</p>

                        <Link to={`/yt`} >Acessar</Link>
                    </article>

                    <h2>Álbuns</h2>

                    <article>
                        <strong>Natiruts Acústico no Rio de Janeiro</strong>
                        <p>Álbum</p>

                        <Link to={`/yt`} >Acessar</Link>
                    </article>
                </div>
            </div>
            
        )
    }
}