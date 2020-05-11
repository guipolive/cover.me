import React, { Component } from 'react';
import api from '../../services/api'; // importando nossa api
// import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Index extends Component {

    state = {
        musics: [],
        musicsInfo: {}, // vai guardar as informações do objeto (total de páginas, total de itens, etc)
        page: 1
    }

    // é executada assim que o componente é montado na tela
    componentDidMount(){
        this.loadInfo();
    }

    // precisamos fazer uso de arrow-function aqui para termos acesso aos outros métodos da classe com o 'this'
    loadInfo = async (page = 1) => {
        const musicsResponse = await api.get(`/musics?page=${page}`);

        const {docs, ...musicsInfo}  = musicsResponse.data;

        this.setState({musics: docs, musicsInfo, page})
        
        console.log(docs);
    }


    render(){

        const {musics, musicsInfo, page} = this.state; // deixando a sintaxe mais curta para usar o estado na página


        return(

            <div className="content">
                {/* <li>
                    <Link to="/yt">youtube test</Link>
                </li> */}

                <div className="artist-list">
                    
                    <h2>Principal resultado</h2>

                    {musics.map(music => ( /* vai executar o que estiver dentro da função para cada entidade encontrada */
                    <article key={music._id}>
                        <strong>{music.name}</strong>
                        <p>Música • {music.artistId} • Álbum • 4:58</p>

                        <Link to={`/musics/${music.url[0]}`} >Acessar</Link>
                    </article>
                    ))}

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