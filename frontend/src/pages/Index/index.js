import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

export default class Index extends Component {
    render(){
        return(
            <li>
                <Link to="/yt">youtube test</Link>
            </li>
        )
    }
}